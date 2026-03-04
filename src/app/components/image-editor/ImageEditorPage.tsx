import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Upload, ZoomIn, ZoomOut, RotateCw, RotateCcw, FlipHorizontal, FlipVertical,
  Undo2, Redo2, Download, Crop, Pencil, Type, Eraser, MousePointer2,
  Sun, Moon, Contrast, Palette, Droplets, Square, Circle, Minus, ChevronLeft,
  Maximize2, Image as ImageIcon, X, Eye, EyeOff, Trash2, Move,
  SlidersHorizontal,
} from 'lucide-react';
import { useMantineColorScheme } from '@mantine/core';
import { DSButton } from '../ui/ds-button';
import { DSTooltip } from '../ui/ds-tooltip';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { DSSelect } from '../ui/ds-select';
import { DSInput } from '../ui/ds-input';
import { useNavigate } from 'react-router';

/* ═══════════════════════════════════════════════════════
   Image Editor — Canvas-based editor with DS styling
   ═══════════════════════════════════════════════════════ */

type Tool = 'select' | 'crop' | 'draw' | 'eraser' | 'text' | 'shape';
type ShapeType = 'rectangle' | 'circle' | 'line';

interface HistoryEntry {
  imageData: ImageData;
  label: string;
}

interface TextOverlay {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  fontWeight: string;
  visible: boolean;
}

interface CropRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Adjustments {
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  blur: number;
  opacity: number;
}

const DEFAULT_ADJUSTMENTS: Adjustments = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  hue: 0,
  blur: 0,
  opacity: 100,
};

const FILTERS: { id: string; label: string; adj: Partial<Adjustments> }[] = [
  { id: 'original', label: 'Оригинал', adj: {} },
  { id: 'grayscale', label: 'Ч/Б', adj: { saturation: 0 } },
  { id: 'sepia', label: 'Сепия', adj: { saturation: 40, hue: 30, brightness: 110 } },
  { id: 'vintage', label: 'Винтаж', adj: { saturation: 60, contrast: 120, brightness: 95, hue: 15 } },
  { id: 'cold', label: 'Холод', adj: { saturation: 80, hue: 200, brightness: 105 } },
  { id: 'warm', label: 'Тепло', adj: { saturation: 120, hue: -15, brightness: 105 } },
  { id: 'high_contrast', label: 'Контраст', adj: { contrast: 150, brightness: 105, saturation: 110 } },
  { id: 'soft', label: 'Мягкий', adj: { contrast: 85, brightness: 110, saturation: 90, blur: 0.5 } },
];

const BRUSH_COLORS = [
  '#EA3943', '#F87D37', '#F6C825', '#1FC989',
  '#5A8CFF', '#9A8CFF', '#45D3CE', '#E0E1E2',
  '#FFFFFF', '#131722',
];

const EXPORT_FORMATS = [
  { value: 'png', label: 'PNG' },
  { value: 'jpeg', label: 'JPEG' },
  { value: 'webp', label: 'WebP' },
];

export function ImageEditorPage() {
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Image state
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fileName, setFileName] = useState('');

  // Tool state
  const [activeTool, setActiveTool] = useState<Tool>('select');
  const [activeShape, setActiveShape] = useState<ShapeType>('rectangle');

  // Canvas state
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  // Drawing state
  const [brushSize, setBrushSize] = useState(4);
  const [brushColor, setBrushColor] = useState('#EA3943');
  const [isDrawing, setIsDrawing] = useState(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Text state
  const [textOverlays, setTextOverlays] = useState<TextOverlay[]>([]);
  const [activeTextId, setActiveTextId] = useState<string | null>(null);
  const [newTextInput, setNewTextInput] = useState('');
  const [textFontSize, setTextFontSize] = useState(24);
  const [textColor, setTextColor] = useState('#FFFFFF');

  // Crop state
  const [cropRect, setCropRect] = useState<CropRect | null>(null);
  const [isCropping, setIsCropping] = useState(false);
  const cropStartRef = useRef<{ x: number; y: number } | null>(null);

  // Adjustments
  const [adjustments, setAdjustments] = useState<Adjustments>({ ...DEFAULT_ADJUSTMENTS });
  const [activeFilter, setActiveFilter] = useState('original');

  // History
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // UI state
  const [rightPanel, setRightPanel] = useState<'adjustments' | 'filters' | 'layers'>('adjustments');
  const [exportFormat, setExportFormat] = useState('png');
  const [dragOver, setDragOver] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  // Shape drawing state
  const [shapeStart, setShapeStart] = useState<{ x: number; y: number } | null>(null);
  const [isShaping, setIsShaping] = useState(false);

  // Pan state
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  /* ─── History management ─── */
  const pushHistory = useCallback((label: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prev => {
      const trimmed = prev.slice(0, historyIndex + 1);
      const next = [...trimmed, { imageData: data, label }];
      if (next.length > 30) next.shift();
      return next;
    });
    setHistoryIndex(prev => Math.min(prev + 1, 30));
  }, [historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex <= 0) return;
    const prev = history[historyIndex - 1];
    const canvas = canvasRef.current;
    if (!canvas || !prev) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = prev.imageData.width;
    canvas.height = prev.imageData.height;
    ctx.putImageData(prev.imageData, 0, 0);
    setHistoryIndex(i => i - 1);
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex >= history.length - 1) return;
    const next = history[historyIndex + 1];
    const canvas = canvasRef.current;
    if (!canvas || !next) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = next.imageData.width;
    canvas.height = next.imageData.height;
    ctx.putImageData(next.imageData, 0, 0);
    setHistoryIndex(i => i + 1);
  }, [history, historyIndex]);

  /* ─── Load image ─── */
  const loadImage = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setOriginalImage(img);
        setImageLoaded(true);
        setFileName(file.name);
        setAdjustments({ ...DEFAULT_ADJUSTMENTS });
        setActiveFilter('original');
        setTextOverlays([]);
        setHistory([]);
        setHistoryIndex(-1);
        setZoom(1);
        setPanOffset({ x: 0, y: 0 });
        setCropRect(null);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  // Draw image onto canvas once both image and canvas are ready after render
  useEffect(() => {
    if (!originalImage || !imageLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = originalImage.naturalWidth;
    canvas.height = originalImage.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(originalImage, 0, 0);

    // Push initial state
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory([{ imageData: data, label: 'Загрузка' }]);
    setHistoryIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalImage]);

  /* ─── Drag & Drop ─── */
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => setDragOver(false), []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) loadImage(file);
  }, [loadImage]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) loadImage(file);
  }, [loadImage]);

  /* ─── Canvas mouse coords ─── */
  const getCanvasCoords = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return { x: 0, y: 0 };
    const rect = container.getBoundingClientRect();
    const containerW = rect.width;
    const containerH = rect.height;
    const scaledW = canvas.width * zoom;
    const scaledH = canvas.height * zoom;
    const offsetX = (containerW - scaledW) / 2 + panOffset.x;
    const offsetY = (containerH - scaledH) / 2 + panOffset.y;
    const x = (e.clientX - rect.left - offsetX) / zoom;
    const y = (e.clientY - rect.top - offsetY) / zoom;
    return { x, y };
  }, [zoom, panOffset]);

  /* ─── Drawing handlers ─── */
  const handleCanvasMouseDown = useCallback((e: React.MouseEvent) => {
    if (!imageLoaded) return;
    const coords = getCanvasCoords(e);

    if (activeTool === 'select') {
      setIsPanning(true);
      panStartRef.current = { x: e.clientX, y: e.clientY, ox: panOffset.x, oy: panOffset.y };
      return;
    }

    if (activeTool === 'draw' || activeTool === 'eraser') {
      setIsDrawing(true);
      lastPointRef.current = coords;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(coords.x, coords.y, brushSize / 2, 0, Math.PI * 2);
      if (activeTool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0,0,0,1)';
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = brushColor;
      }
      ctx.fill();
      return;
    }

    if (activeTool === 'crop') {
      setIsCropping(true);
      cropStartRef.current = coords;
      setCropRect({ x: coords.x, y: coords.y, w: 0, h: 0 });
      return;
    }

    if (activeTool === 'text') {
      const id = `text_${Date.now()}`;
      const overlay: TextOverlay = {
        id,
        text: newTextInput || 'Текст',
        x: coords.x,
        y: coords.y,
        fontSize: textFontSize,
        color: textColor,
        fontWeight: '600',
        visible: true,
      };
      setTextOverlays(prev => [...prev, overlay]);
      setActiveTextId(id);

      // Draw text on canvas
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.globalCompositeOperation = 'source-over';
      ctx.font = `${overlay.fontWeight} ${overlay.fontSize}px Inter, sans-serif`;
      ctx.fillStyle = overlay.color;
      ctx.fillText(overlay.text, overlay.x, overlay.y);
      pushHistory('Текст');
      return;
    }

    if (activeTool === 'shape') {
      setIsShaping(true);
      setShapeStart(coords);
      return;
    }
  }, [imageLoaded, activeTool, getCanvasCoords, brushSize, brushColor, panOffset, newTextInput, textFontSize, textColor, pushHistory]);

  const handleCanvasMouseMove = useCallback((e: React.MouseEvent) => {
    if (isPanning && panStartRef.current) {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      setPanOffset({ x: panStartRef.current.ox + dx, y: panStartRef.current.oy + dy });
      return;
    }

    if ((activeTool === 'draw' || activeTool === 'eraser') && isDrawing) {
      const coords = getCanvasCoords(e);
      const canvas = canvasRef.current;
      if (!canvas || !lastPointRef.current) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(coords.x, coords.y);
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (activeTool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)';
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = brushColor;
      }
      ctx.stroke();
      lastPointRef.current = coords;
      return;
    }

    if (activeTool === 'crop' && isCropping && cropStartRef.current) {
      const coords = getCanvasCoords(e);
      setCropRect({
        x: Math.min(cropStartRef.current.x, coords.x),
        y: Math.min(cropStartRef.current.y, coords.y),
        w: Math.abs(coords.x - cropStartRef.current.x),
        h: Math.abs(coords.y - cropStartRef.current.y),
      });
      return;
    }

    if (activeTool === 'shape' && isShaping && shapeStart) {
      // Preview will be handled in renderPreview
      const coords = getCanvasCoords(e);
      setShapeStart(prev => prev ? { ...prev } : null);
      // Store current end for preview
      shapeEndRef.current = coords;
      renderPreview();
    }
  }, [isPanning, activeTool, isDrawing, isCropping, isShaping, getCanvasCoords, brushSize, brushColor, shapeStart]);

  const shapeEndRef = useRef<{ x: number; y: number } | null>(null);

  const handleCanvasMouseUp = useCallback(() => {
    if (isPanning) {
      setIsPanning(false);
      panStartRef.current = null;
      return;
    }

    if (isDrawing) {
      setIsDrawing(false);
      lastPointRef.current = null;
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.globalCompositeOperation = 'source-over';
      }
      pushHistory(activeTool === 'eraser' ? 'Ластик' : 'Рисование');
      return;
    }

    if (isCropping) {
      setIsCropping(false);
      cropStartRef.current = null;
      return;
    }

    if (isShaping && shapeStart && shapeEndRef.current) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';

      const end = shapeEndRef.current;
      if (activeShape === 'rectangle') {
        ctx.strokeRect(shapeStart.x, shapeStart.y, end.x - shapeStart.x, end.y - shapeStart.y);
      } else if (activeShape === 'circle') {
        const rx = Math.abs(end.x - shapeStart.x) / 2;
        const ry = Math.abs(end.y - shapeStart.y) / 2;
        const cx = (shapeStart.x + end.x) / 2;
        const cy = (shapeStart.y + end.y) / 2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (activeShape === 'line') {
        ctx.beginPath();
        ctx.moveTo(shapeStart.x, shapeStart.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }

      setIsShaping(false);
      setShapeStart(null);
      shapeEndRef.current = null;
      pushHistory('Фигура');
    }
  }, [isPanning, isDrawing, isCropping, isShaping, shapeStart, activeTool, brushColor, brushSize, activeShape, pushHistory]);

  /* ─── Preview rendering (for shape preview overlay) ─── */
  const renderPreview = useCallback(() => {
    const preview = previewCanvasRef.current;
    const main = canvasRef.current;
    if (!preview || !main) return;
    preview.width = main.width;
    preview.height = main.height;
    const ctx = preview.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, preview.width, preview.height);

    if (activeTool === 'shape' && isShaping && shapeStart && shapeEndRef.current) {
      const end = shapeEndRef.current;
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.setLineDash([6, 4]);

      if (activeShape === 'rectangle') {
        ctx.strokeRect(shapeStart.x, shapeStart.y, end.x - shapeStart.x, end.y - shapeStart.y);
      } else if (activeShape === 'circle') {
        const rx = Math.abs(end.x - shapeStart.x) / 2;
        const ry = Math.abs(end.y - shapeStart.y) / 2;
        const cx = (shapeStart.x + end.x) / 2;
        const cy = (shapeStart.y + end.y) / 2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (activeShape === 'line') {
        ctx.beginPath();
        ctx.moveTo(shapeStart.x, shapeStart.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }
    }
  }, [activeTool, isShaping, shapeStart, brushColor, brushSize, activeShape]);

  /* ─── Transforms ─── */
  const rotateCanvas = useCallback((deg: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCtx.putImageData(imgData, 0, 0);

    if (Math.abs(deg) === 90) {
      canvas.width = tempCanvas.height;
      canvas.height = tempCanvas.width;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.drawImage(tempCanvas, -tempCanvas.width / 2, -tempCanvas.height / 2);
    ctx.restore();
    pushHistory(`Поворот ${deg}°`);
  }, [pushHistory]);

  const flipCanvas = useCallback((direction: 'h' | 'v') => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCtx.drawImage(canvas, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    if (direction === 'h') {
      ctx.scale(-1, 1);
      ctx.drawImage(tempCanvas, -canvas.width, 0);
    } else {
      ctx.scale(1, -1);
      ctx.drawImage(tempCanvas, 0, -canvas.height);
    }
    ctx.restore();
    pushHistory(direction === 'h' ? 'Отразить Г' : 'Отразить В');
  }, [pushHistory]);

  /* ─── Crop apply ─── */
  const applyCrop = useCallback(() => {
    if (!cropRect || cropRect.w < 2 || cropRect.h < 2) {
      setCropRect(null);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.getImageData(
      Math.max(0, Math.round(cropRect.x)),
      Math.max(0, Math.round(cropRect.y)),
      Math.min(canvas.width, Math.round(cropRect.w)),
      Math.min(canvas.height, Math.round(cropRect.h))
    );
    canvas.width = imgData.width;
    canvas.height = imgData.height;
    ctx.putImageData(imgData, 0, 0);
    setCropRect(null);
    setActiveTool('select');
    pushHistory('Обрезка');
  }, [cropRect, pushHistory]);

  /* ─── Adjustments apply ─── */
  const applyAdjustments = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !originalImage) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Redraw from current history state
    if (history[historyIndex]) {
      ctx.putImageData(history[historyIndex].imageData, 0, 0);
    }

    // Apply CSS filter to a temp canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCtx.filter = buildFilterString(adjustments);
    tempCtx.drawImage(canvas, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0);
    pushHistory('Коррекция');
  }, [adjustments, originalImage, history, historyIndex, pushHistory]);

  /* ─── Filter string builder ─── */
  function buildFilterString(adj: Adjustments): string {
    const parts: string[] = [];
    if (adj.brightness !== 100) parts.push(`brightness(${adj.brightness}%)`);
    if (adj.contrast !== 100) parts.push(`contrast(${adj.contrast}%)`);
    if (adj.saturation !== 100) parts.push(`saturate(${adj.saturation}%)`);
    if (adj.hue !== 0) parts.push(`hue-rotate(${adj.hue}deg)`);
    if (adj.blur > 0) parts.push(`blur(${adj.blur}px)`);
    if (adj.opacity !== 100) parts.push(`opacity(${adj.opacity}%)`);
    return parts.length > 0 ? parts.join(' ') : 'none';
  }

  /* ─── Export ─── */
  const exportImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const mimeType = exportFormat === 'png' ? 'image/png' : exportFormat === 'jpeg' ? 'image/jpeg' : 'image/webp';
    const quality = exportFormat === 'png' ? undefined : 0.92;
    const dataUrl = canvas.toDataURL(mimeType, quality);
    const link = document.createElement('a');
    link.download = `${fileName.replace(/\.[^.]+$/, '')}_edited.${exportFormat}`;
    link.href = dataUrl;
    link.click();
    setShowExportModal(false);
  }, [exportFormat, fileName]);

  /* ─── Zoom ─── */
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prev => Math.max(0.1, Math.min(5, prev + delta)));
  }, []);

  const fitToScreen = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const scaleX = (rect.width - 40) / canvas.width;
    const scaleY = (rect.height - 40) / canvas.height;
    setZoom(Math.min(scaleX, scaleY, 1));
    setPanOffset({ x: 0, y: 0 });
  }, []);

  // Fit to screen when image loads
  useEffect(() => {
    if (imageLoaded) {
      setTimeout(fitToScreen, 100);
    }
  }, [imageLoaded, fitToScreen]);

  /* ─── Keyboard shortcuts ─── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
        if (e.key === 'z' && e.shiftKey) { e.preventDefault(); redo(); }
        if (e.key === 'y') { e.preventDefault(); redo(); }
        if (e.key === 's') { e.preventDefault(); setShowExportModal(true); }
        if (e.key === '0') { e.preventDefault(); fitToScreen(); }
      }
      if (e.key === 'Escape') {
        setCropRect(null);
        setActiveTool('select');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo, redo, fitToScreen]);

  /* ─── Apply filter preset ─── */
  const applyFilterPreset = useCallback((filterId: string) => {
    setActiveFilter(filterId);
    const filter = FILTERS.find(f => f.id === filterId);
    if (!filter) return;
    setAdjustments({ ...DEFAULT_ADJUSTMENTS, ...filter.adj });
  }, []);

  /* ─── Canvas display style ─── */
  const canvasDisplayStyle: React.CSSProperties = imageLoaded ? {
    filter: buildFilterString(adjustments),
    transform: `scale(${zoom})`,
    transformOrigin: 'center center',
    imageRendering: zoom > 2 ? 'pixelated' : 'auto',
  } : {};

  /* ─── Tool buttons config ─── */
  const toolButtons: { tool: Tool; icon: React.ReactNode; label: string }[] = [
    { tool: 'select', icon: <MousePointer2 size={18} />, label: 'Выбор (V)' },
    { tool: 'crop', icon: <Crop size={18} />, label: 'Обрезка (C)' },
    { tool: 'draw', icon: <Pencil size={18} />, label: 'Кисть (B)' },
    { tool: 'eraser', icon: <Eraser size={18} />, label: 'Ластик (E)' },
    { tool: 'text', icon: <Type size={18} />, label: 'Текст (T)' },
    { tool: 'shape', icon: <Square size={18} />, label: 'Фигуры (S)' },
  ];

  const canvasW = canvasRef.current?.width || 0;
  const canvasH = canvasRef.current?.height || 0;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: 'var(--ds-bg-primary)',
      color: 'var(--ds-text-primary)',
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden',
      userSelect: 'none',
    }}>
      {/* ═══ Top Bar ═══ */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        padding: '0 16px',
        borderBottom: '1px solid var(--ds-border-primary)',
        backgroundColor: 'var(--ds-bg-secondary)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <DSTooltip content="Назад">
            <DSButton variant="ghost" size="sm" iconOnly onClick={() => navigate(-1)}>
              <ChevronLeft size={18} />
            </DSButton>
          </DSTooltip>
          <div style={{ width: 1, height: 24, backgroundColor: 'var(--ds-border-primary)' }} />
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ds-text-primary)' }}>
            Редактор изображений
          </span>
          {fileName && (
            <span style={{ fontSize: 12, color: 'var(--ds-text-gray-dark)', marginLeft: 4 }}>
              — {fileName}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <DSTooltip content={colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}>
            <DSButton variant="ghost" size="sm" iconOnly onClick={toggleColorScheme}>
              {colorScheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </DSButton>
          </DSTooltip>
          {imageLoaded && (
            <>
              <div style={{ width: 1, height: 24, backgroundColor: 'var(--ds-border-primary)' }} />
              <DSTooltip content="Отменить (Ctrl+Z)">
                <DSButton variant="ghost" size="sm" iconOnly onClick={undo} disabled={historyIndex <= 0}>
                  <Undo2 size={16} />
                </DSButton>
              </DSTooltip>
              <DSTooltip content="Повторить (Ctrl+Shift+Z)">
                <DSButton variant="ghost" size="sm" iconOnly onClick={redo} disabled={historyIndex >= history.length - 1}>
                  <Redo2 size={16} />
                </DSButton>
              </DSTooltip>
              <div style={{ width: 1, height: 24, backgroundColor: 'var(--ds-border-primary)' }} />

              <DSTooltip content="Уменьшить">
                <DSButton variant="ghost" size="sm" iconOnly onClick={() => setZoom(z => Math.max(0.1, z - 0.1))}>
                  <ZoomOut size={16} />
                </DSButton>
              </DSTooltip>
              <span style={{
                fontSize: 12, fontWeight: 500, color: 'var(--ds-text-secondary)',
                minWidth: 40, textAlign: 'center',
                fontFeatureSettings: "'lnum', 'tnum'",
              }}>
                {Math.round(zoom * 100)}%
              </span>
              <DSTooltip content="Увеличить">
                <DSButton variant="ghost" size="sm" iconOnly onClick={() => setZoom(z => Math.min(5, z + 0.1))}>
                  <ZoomIn size={16} />
                </DSButton>
              </DSTooltip>
              <DSTooltip content="Вписать (Ctrl+0)">
                <DSButton variant="ghost" size="sm" iconOnly onClick={fitToScreen}>
                  <Maximize2 size={16} />
                </DSButton>
              </DSTooltip>

              <div style={{ width: 1, height: 24, backgroundColor: 'var(--ds-border-primary)' }} />

              <DSTooltip content="Повернуть влево">
                <DSButton variant="ghost" size="sm" iconOnly onClick={() => rotateCanvas(-90)}>
                  <RotateCcw size={16} />
                </DSButton>
              </DSTooltip>
              <DSTooltip content="Повернуть вправо">
                <DSButton variant="ghost" size="sm" iconOnly onClick={() => rotateCanvas(90)}>
                  <RotateCw size={16} />
                </DSButton>
              </DSTooltip>
              <DSTooltip content="Отразить по горизонтали">
                <DSButton variant="ghost" size="sm" iconOnly onClick={() => flipCanvas('h')}>
                  <FlipHorizontal size={16} />
                </DSButton>
              </DSTooltip>
              <DSTooltip content="Отразить по вертикали">
                <DSButton variant="ghost" size="sm" iconOnly onClick={() => flipCanvas('v')}>
                  <FlipVertical size={16} />
                </DSButton>
              </DSTooltip>

              <div style={{ width: 1, height: 24, backgroundColor: 'var(--ds-border-primary)' }} />
              <DSButton variant="primary" size="sm" leftIcon={<Download size={14} />} onClick={() => setShowExportModal(true)}>
                Экспорт
              </DSButton>
            </>
          )}
        </div>
      </div>

      {/* ═══ Main Content ═══ */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* ─── Left Toolbar ─── */}
        {imageLoaded && (
          <div style={{
            width: 56,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px 0',
            gap: 4,
            borderRight: '1px solid var(--ds-border-primary)',
            backgroundColor: 'var(--ds-bg-secondary)',
            flexShrink: 0,
          }}>
            {toolButtons.map(t => (
              <DSTooltip key={t.tool} content={t.label} side="right">
                <button
                  onClick={() => setActiveTool(t.tool)}
                  style={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    backgroundColor: activeTool === t.tool ? 'rgba(90,140,255,0.2)' : 'transparent',
                    color: activeTool === t.tool ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)',
                  }}
                >
                  {t.icon}
                </button>
              </DSTooltip>
            ))}

            {/* Shape sub-tools */}
            {activeTool === 'shape' && (
              <>
                <div style={{ width: 32, height: 1, backgroundColor: 'var(--ds-border-primary)', margin: '4px 0' }} />
                <DSTooltip content="Прямоугольник" side="right">
                  <button
                    onClick={() => setActiveShape('rectangle')}
                    style={{
                      width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 6, border: 'none', cursor: 'pointer',
                      backgroundColor: activeShape === 'rectangle' ? 'rgba(90,140,255,0.15)' : 'transparent',
                      color: activeShape === 'rectangle' ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)',
                    }}
                  >
                    <Square size={16} />
                  </button>
                </DSTooltip>
                <DSTooltip content="Эллипс" side="right">
                  <button
                    onClick={() => setActiveShape('circle')}
                    style={{
                      width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 6, border: 'none', cursor: 'pointer',
                      backgroundColor: activeShape === 'circle' ? 'rgba(90,140,255,0.15)' : 'transparent',
                      color: activeShape === 'circle' ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)',
                    }}
                  >
                    <Circle size={16} />
                  </button>
                </DSTooltip>
                <DSTooltip content="Линия" side="right">
                  <button
                    onClick={() => setActiveShape('line')}
                    style={{
                      width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 6, border: 'none', cursor: 'pointer',
                      backgroundColor: activeShape === 'line' ? 'rgba(90,140,255,0.15)' : 'transparent',
                      color: activeShape === 'line' ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)',
                    }}
                  >
                    <Minus size={16} />
                  </button>
                </DSTooltip>
              </>
            )}
          </div>
        )}

        {/* ─── Canvas Area ─── */}
        <div
          ref={containerRef}
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme === 'dark' ? '#0D1017' : '#E2E8F0',
            cursor: activeTool === 'select'
              ? (isPanning ? 'grabbing' : 'grab')
              : activeTool === 'draw' ? 'crosshair'
              : activeTool === 'eraser' ? 'crosshair'
              : activeTool === 'crop' ? 'crosshair'
              : activeTool === 'text' ? 'text'
              : 'crosshair',
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onWheel={handleWheel}
        >
          {/* Upload area — shown when no image */}
          {!imageLoaded && (
            <div
              onClick={() => fileInputRef.current?.click()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                padding: 48,
                borderRadius: 16,
                border: `2px dashed ${dragOver ? 'var(--ds-blue-6)' : 'var(--ds-border-primary)'}`,
                backgroundColor: dragOver ? 'rgba(90,140,255,0.05)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                maxWidth: 480,
              }}
            >
              <div style={{
                width: 72, height: 72, borderRadius: 16,
                backgroundColor: 'rgba(90,140,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Upload size={32} style={{ color: 'var(--ds-blue-6)' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ds-text-primary)', marginBottom: 8 }}>
                  Загрузите изображение
                </div>
                <div style={{ fontSize: 13, color: 'var(--ds-text-gray-dark)', lineHeight: '20px' }}>
                  Перетащите файл сюда или нажмите для выбора<br />
                  PNG, JPEG, WebP, SVG
                </div>
              </div>
              <DSButton variant="secondary" size="md" leftIcon={<ImageIcon size={16} />}>
                Выбрать файл
              </DSButton>
            </div>
          )}

          {/* Canvas — always in DOM, hidden when no image */}
          <div style={{
            position: 'relative',
            transform: `translate(${panOffset.x}px, ${panOffset.y}px)`,
            display: imageLoaded ? 'block' : 'none',
          }}>
            <canvas
              ref={canvasRef}
              style={{
                ...canvasDisplayStyle,
                boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
                borderRadius: 2,
              }}
              onMouseDown={handleCanvasMouseDown}
              onMouseMove={handleCanvasMouseMove}
              onMouseUp={handleCanvasMouseUp}
              onMouseLeave={handleCanvasMouseUp}
            />
            {/* Preview overlay canvas */}
            <canvas
              ref={previewCanvasRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
              }}
            />
            {/* Crop overlay */}
            {cropRect && cropRect.w > 0 && cropRect.h > 0 && (
              <div style={{
                position: 'absolute',
                left: cropRect.x * zoom,
                top: cropRect.y * zoom,
                width: cropRect.w * zoom,
                height: cropRect.h * zoom,
                  border: '2px dashed var(--ds-blue-6)',
                  backgroundColor: 'rgba(90,140,255,0.1)',
                  pointerEvents: 'none',
                  transformOrigin: 'top left',
                }} />
              )}
            </div>

          {/* Crop action buttons */}
          {cropRect && cropRect.w > 5 && cropRect.h > 5 && (
            <div style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 8,
              padding: '8px 12px',
              borderRadius: 10,
              backgroundColor: 'var(--ds-bg-secondary)',
              border: '1px solid var(--ds-border-primary)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            }}>
              <span style={{ fontSize: 12, color: 'var(--ds-text-gray-dark)', alignSelf: 'center', marginRight: 8 }}>
                {Math.round(cropRect.w)} × {Math.round(cropRect.h)}
              </span>
              <DSButton variant="primary" size="sm" onClick={applyCrop}>
                Обрезать
              </DSButton>
              <DSButton variant="ghost" size="sm" onClick={() => setCropRect(null)}>
                Отмена
              </DSButton>
            </div>
          )}

          {/* Canvas size info */}
          {imageLoaded && (
            <div style={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              fontSize: 11,
              color: 'var(--ds-text-gray-dark)',
              fontFeatureSettings: "'lnum', 'tnum'",
            }}>
              {canvasW} × {canvasH} px
            </div>
          )}
        </div>

        {/* ─── Right Panel ─── */}
        {imageLoaded && (
          <div style={{
            width: 280,
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid var(--ds-border-primary)',
            backgroundColor: 'var(--ds-bg-secondary)',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            {/* Panel tabs */}
            <div style={{
              display: 'flex',
              borderBottom: '1px solid var(--ds-border-primary)',
              padding: '0 4px',
            }}>
              {[
                { id: 'adjustments' as const, label: 'Коррекция', icon: <SlidersHorizontal size={14} /> },
                { id: 'filters' as const, label: 'Фильтры', icon: <Palette size={14} /> },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setRightPanel(tab.id)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '10px 8px',
                    fontSize: 12,
                    fontWeight: 600,
                    color: rightPanel === tab.id ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)',
                    background: 'none',
                    border: 'none',
                    borderBottom: rightPanel === tab.id ? '2px solid var(--ds-blue-6)' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
              {rightPanel === 'adjustments' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Tool-specific options */}
                  {(activeTool === 'draw' || activeTool === 'eraser' || activeTool === 'shape') && (
                    <ToolOptionsSection
                      activeTool={activeTool}
                      brushSize={brushSize}
                      setBrushSize={setBrushSize}
                      brushColor={brushColor}
                      setBrushColor={setBrushColor}
                    />
                  )}

                  {activeTool === 'text' && (
                    <TextOptionsSection
                      newTextInput={newTextInput}
                      setNewTextInput={setNewTextInput}
                      textFontSize={textFontSize}
                      setTextFontSize={setTextFontSize}
                      textColor={textColor}
                      setTextColor={setTextColor}
                    />
                  )}

                  <SectionLabel>Яркость</SectionLabel>
                  <SliderRow
                    value={adjustments.brightness}
                    min={0} max={200} step={1}
                    onChange={v => setAdjustments(a => ({ ...a, brightness: v }))}
                    formatValue={v => `${v}%`}
                    icon={<Sun size={14} />}
                  />

                  <SectionLabel>Контраст</SectionLabel>
                  <SliderRow
                    value={adjustments.contrast}
                    min={0} max={200} step={1}
                    onChange={v => setAdjustments(a => ({ ...a, contrast: v }))}
                    formatValue={v => `${v}%`}
                    icon={<Contrast size={14} />}
                  />

                  <SectionLabel>Насыщенность</SectionLabel>
                  <SliderRow
                    value={adjustments.saturation}
                    min={0} max={200} step={1}
                    onChange={v => setAdjustments(a => ({ ...a, saturation: v }))}
                    formatValue={v => `${v}%`}
                    icon={<Palette size={14} />}
                  />

                  <SectionLabel>Тон</SectionLabel>
                  <SliderRow
                    value={adjustments.hue}
                    min={-180} max={180} step={1}
                    onChange={v => setAdjustments(a => ({ ...a, hue: v }))}
                    formatValue={v => `${v}°`}
                    icon={<Droplets size={14} />}
                  />

                  <SectionLabel>Размытие</SectionLabel>
                  <SliderRow
                    value={adjustments.blur}
                    min={0} max={20} step={0.1}
                    onChange={v => setAdjustments(a => ({ ...a, blur: v }))}
                    formatValue={v => `${v.toFixed(1)}px`}
                  />

                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <DSButton variant="primary" size="sm" style={{ flex: 1 }} onClick={applyAdjustments}>
                      Применить
                    </DSButton>
                    <DSButton
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setAdjustments({ ...DEFAULT_ADJUSTMENTS });
                        setActiveFilter('original');
                      }}
                    >
                      Сброс
                    </DSButton>
                  </div>
                </div>
              )}

              {rightPanel === 'filters' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8,
                  }}>
                    {FILTERS.map(f => (
                      <button
                        key={f.id}
                        onClick={() => applyFilterPreset(f.id)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 6,
                          padding: '12px 8px',
                          borderRadius: 8,
                          border: activeFilter === f.id ? '1px solid var(--ds-blue-6)' : '1px solid var(--ds-border-primary)',
                          backgroundColor: activeFilter === f.id ? 'rgba(90,140,255,0.1)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'all 150ms ease',
                          color: activeFilter === f.id ? 'var(--ds-blue-6)' : 'var(--ds-text-secondary)',
                        }}
                      >
                        <div style={{
                          width: 48,
                          height: 48,
                          borderRadius: 6,
                          backgroundColor: 'var(--ds-bg-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 20,
                          filter: buildFilterString({ ...DEFAULT_ADJUSTMENTS, ...f.adj }),
                        }}>
                          <ImageIcon size={24} />
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 500 }}>
                          {f.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div style={{ marginTop: 8 }}>
                    <DSButton variant="primary" size="sm" style={{ width: '100%' }} onClick={applyAdjustments}>
                      Применить фильтр
                    </DSButton>
                  </div>
                </div>
              )}
            </div>

            {/* History panel at bottom */}
            <div style={{
              borderTop: '1px solid var(--ds-border-primary)',
              padding: '8px 16px',
              maxHeight: 140,
              overflowY: 'auto',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 600, color: 'var(--ds-text-gray-dark)',
                textTransform: 'uppercase', letterSpacing: '0.05em',
                marginBottom: 6,
              }}>
                История ({history.length})
              </div>
              {history.map((entry, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 11,
                    padding: '3px 0',
                    color: i === historyIndex ? 'var(--ds-blue-6)' : i > historyIndex ? 'var(--ds-text-gray-dark)' : 'var(--ds-text-secondary)',
                    fontWeight: i === historyIndex ? 600 : 400,
                    opacity: i > historyIndex ? 0.4 : 1,
                  }}
                >
                  {i + 1}. {entry.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />

      {/* ═══ Export Modal ═══ */}
      {showExportModal && (
        <div style={{
          position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
        }}>
          <div
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setShowExportModal(false)}
          />
          <div style={{
            position: 'relative',
            backgroundColor: 'var(--ds-bg-secondary)',
            borderRadius: 12,
            border: '1px solid var(--ds-border-primary)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
            width: 400,
            padding: 24,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--ds-text-primary)', margin: 0 }}>
                Экспорт изображения
              </h3>
              <button
                onClick={() => setShowExportModal(false)}
                style={{
                  padding: 4, borderRadius: 6, border: 'none', background: 'none',
                  color: 'var(--ds-text-gray-dark)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ds-text-secondary)', marginBottom: 6 }}>
                  Формат
                </div>
                <DSSegmentButton value={exportFormat} onChange={setExportFormat} size="sm" variant="stroke">
                  {EXPORT_FORMATS.map(f => (
                    <DSSegment key={f.value} value={f.value}>{f.label}</DSSegment>
                  ))}
                </DSSegmentButton>
              </div>

              <div style={{
                padding: '12px 16px',
                borderRadius: 8,
                backgroundColor: 'var(--ds-bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ color: 'var(--ds-text-gray-dark)' }}>Размер</span>
                  <span style={{ color: 'var(--ds-text-primary)', fontFeatureSettings: "'lnum', 'tnum'" }}>
                    {canvasW} × {canvasH} px
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ color: 'var(--ds-text-gray-dark)' }}>Имя файла</span>
                  <span style={{ color: 'var(--ds-text-primary)' }}>
                    {fileName.replace(/\.[^.]+$/, '')}_edited.{exportFormat}
                  </span>
                </div>
              </div>

              <DSButton variant="primary" size="md" leftIcon={<Download size={16} />} onClick={exportImage} style={{ width: '100%' }}>
                Скачать
              </DSButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════ Sub-components ═══════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ds-text-gray-dark)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    }}>
      {children}
    </div>
  );
}

function SliderRow({
  value, min, max, step, onChange, formatValue, icon,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  formatValue: (v: number) => string;
  icon?: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {icon && (
        <span style={{ color: 'var(--ds-text-gray-dark)', flexShrink: 0, display: 'flex' }}>
          {icon}
        </span>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{
          flex: 1,
          height: 4,
          appearance: 'none',
          background: `linear-gradient(to right, var(--ds-blue-6) ${((value - min) / (max - min)) * 100}%, var(--ds-border-primary) ${((value - min) / (max - min)) * 100}%)`,
          borderRadius: 2,
          outline: 'none',
          cursor: 'pointer',
          accentColor: 'var(--ds-blue-6)',
        }}
      />
      <span style={{
        fontSize: 11,
        fontWeight: 500,
        color: 'var(--ds-text-secondary)',
        minWidth: 42,
        textAlign: 'right',
        fontFeatureSettings: "'lnum', 'tnum'",
      }}>
        {formatValue(value)}
      </span>
    </div>
  );
}

function ToolOptionsSection({
  activeTool, brushSize, setBrushSize, brushColor, setBrushColor,
}: {
  activeTool: Tool;
  brushSize: number;
  setBrushSize: (v: number) => void;
  brushColor: string;
  setBrushColor: (v: string) => void;
}) {
  return (
    <div style={{
      padding: '12px',
      borderRadius: 8,
      backgroundColor: 'var(--ds-bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      <SectionLabel>
        {activeTool === 'draw' ? 'Кисть' : activeTool === 'eraser' ? 'Ластик' : 'Фигура'}
      </SectionLabel>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', width: 50 }}>Размер</span>
        <input
          type="range"
          min={1}
          max={50}
          value={brushSize}
          onChange={e => setBrushSize(parseInt(e.target.value))}
          style={{
            flex: 1, height: 4, appearance: 'none',
            background: `linear-gradient(to right, var(--ds-blue-6) ${((brushSize - 1) / 49) * 100}%, var(--ds-border-primary) ${((brushSize - 1) / 49) * 100}%)`,
            borderRadius: 2, outline: 'none', cursor: 'pointer',
          }}
        />
        <span style={{ fontSize: 11, color: 'var(--ds-text-secondary)', minWidth: 28, textAlign: 'right', fontFeatureSettings: "'lnum', 'tnum'" }}>
          {brushSize}px
        </span>
      </div>

      {activeTool !== 'eraser' && (
        <>
          <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)' }}>Цвет</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {BRUSH_COLORS.map(c => (
              <button
                key={c}
                onClick={() => setBrushColor(c)}
                style={{
                  width: 22, height: 22, borderRadius: 4,
                  backgroundColor: c,
                  border: brushColor === c ? '2px solid var(--ds-blue-6)' : '1px solid var(--ds-border-primary)',
                  cursor: 'pointer',
                  transition: 'transform 100ms ease',
                  transform: brushColor === c ? 'scale(1.15)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function TextOptionsSection({
  newTextInput, setNewTextInput, textFontSize, setTextFontSize, textColor, setTextColor,
}: {
  newTextInput: string;
  setNewTextInput: (v: string) => void;
  textFontSize: number;
  setTextFontSize: (v: number) => void;
  textColor: string;
  setTextColor: (v: string) => void;
}) {
  return (
    <div style={{
      padding: '12px',
      borderRadius: 8,
      backgroundColor: 'var(--ds-bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      <SectionLabel>Текст</SectionLabel>
      <DSInput
        size="xs"
        placeholder="Введите текст..."
        value={newTextInput}
        onChange={e => setNewTextInput(e.target.value)}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', width: 50 }}>Размер</span>
        <input
          type="range"
          min={8}
          max={120}
          value={textFontSize}
          onChange={e => setTextFontSize(parseInt(e.target.value))}
          style={{
            flex: 1, height: 4, appearance: 'none',
            background: `linear-gradient(to right, var(--ds-blue-6) ${((textFontSize - 8) / 112) * 100}%, var(--ds-border-primary) ${((textFontSize - 8) / 112) * 100}%)`,
            borderRadius: 2, outline: 'none', cursor: 'pointer',
          }}
        />
        <span style={{ fontSize: 11, color: 'var(--ds-text-secondary)', minWidth: 32, textAlign: 'right', fontFeatureSettings: "'lnum', 'tnum'" }}>
          {textFontSize}px
        </span>
      </div>

      <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)' }}>Цвет</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {BRUSH_COLORS.map(c => (
          <button
            key={c}
            onClick={() => setTextColor(c)}
            style={{
              width: 22, height: 22, borderRadius: 4,
              backgroundColor: c,
              border: textColor === c ? '2px solid var(--ds-blue-6)' : '1px solid var(--ds-border-primary)',
              cursor: 'pointer',
              transition: 'transform 100ms ease',
              transform: textColor === c ? 'scale(1.15)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      <div style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', fontStyle: 'italic' }}>
        Кликните по холсту, чтобы разместить текст
      </div>
    </div>
  );
}
