import { useState, useCallback, useRef } from 'react';

/* ═══════════════════════════════════════════════════════
   useUndoRedo — Generic undo/redo hook
   Supports both direct value and updater-function patterns:
     setState(newValue, label)
     setState(prev => newValue, label)
   ═══════════════════════════════════════════════════════ */

interface HistoryEntry<T> {
  state: T;
  label: string;
  timestamp: number;
}

export interface UseUndoRedoReturn<T> {
  state: T;
  setState: (newStateOrUpdater: T | ((prev: T) => T), label: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  undoLabel: string | null;
  redoLabel: string | null;
  historyLength: number;
  clear: () => void;
}

export function useUndoRedo<T>(
  initialState: T,
  maxHistory = 50,
  debounceMs = 300,
): UseUndoRedoReturn<T> {
  const [past, setPast] = useState<HistoryEntry<T>[]>([]);
  const [present, setPresent] = useState<HistoryEntry<T>>({
    state: initialState,
    label: '',
    timestamp: Date.now(),
  });
  const [future, setFuture] = useState<HistoryEntry<T>[]>([]);
  const lastActionTime = useRef(0);
  const lastLabel = useRef('');

  const setState = useCallback((newStateOrUpdater: T | ((prev: T) => T), label: string) => {
    const now = Date.now();

    setPresent(prev => {
      const newState = typeof newStateOrUpdater === 'function'
        ? (newStateOrUpdater as (prev: T) => T)(prev.state)
        : newStateOrUpdater;

      // Same reference = no change
      if (newState === prev.state) return prev;

      if (now - lastActionTime.current < debounceMs && label === lastLabel.current) {
        // Debounce: just update present, no new history entry
        lastActionTime.current = now;
        lastLabel.current = label;
        return { state: newState, label, timestamp: now };
      }

      // New history entry
      setPast(p => {
        const newPast = [...p, prev];
        return newPast.length > maxHistory ? newPast.slice(-maxHistory) : newPast;
      });
      setFuture([]);
      lastActionTime.current = now;
      lastLabel.current = label;
      return { state: newState, label, timestamp: now };
    });
  }, [maxHistory, debounceMs]);

  const undo = useCallback(() => {
    setPast(p => {
      if (p.length === 0) return p;
      const prev = p[p.length - 1];
      setPresent(cur => {
        setFuture(f => [cur, ...f]);
        return prev;
      });
      return p.slice(0, -1);
    });
  }, []);

  const redo = useCallback(() => {
    setFuture(f => {
      if (f.length === 0) return f;
      const next = f[0];
      setPresent(cur => {
        setPast(p => [...p, cur]);
        return next;
      });
      return f.slice(1);
    });
  }, []);

  return {
    state: present.state,
    setState,
    undo,
    redo,
    canUndo: past.length > 0,
    canRedo: future.length > 0,
    undoLabel: past.length > 0 ? past[past.length - 1].label : null,
    redoLabel: future.length > 0 ? future[0].label : null,
    historyLength: past.length,
    clear: () => { setPast([]); setFuture([]); },
  };
}
