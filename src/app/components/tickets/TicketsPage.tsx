/* ═══════════════════════════════════════════════════════
   TicketsPage — Research Platform ticket/chat system
   3-column layout: ticket list | chat | client profile
   Theme-aware via --ds-* CSS vars (light/dark)
   ═══════════════════════════════════════════════════════ */

import React, { useState, useRef, useEffect, useCallback, useSyncExternalStore } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import svgPaths from '../../../imports/svg-287feuz4s7';
import { getAnalystAvatar } from '../home/data/analyst-avatars';
import { notify, ToastContainer } from '../ui/notification';
import {
  TICKETS as INITIAL_TICKETS,
  CURRENT_ANALYST,
  STATUS_CONFIG,
  AVAILABLE_ANALYSTS,
  KHALIN_TEAM_IDS,
  isTeamMember,
  getTeamVisibleTickets,
  getClientInquiries,
  createSystemMessage,
  CLIENT_AUTO_REPLIES,
  INCOMING_TICKET_TEMPLATES,
  getRandomNewTicketClient,
  type Ticket,
  type TicketMessage,
  type TicketClient,
  type TicketAttachment,
  type ClientInquiry,
} from './tickets-data';
import { DSConfirmDialog } from '../ui/ds-confirm-dialog';
import { DSInput } from '../ui/ds-input';

/* ═══════ THEME HOOK ═══════ */

function useColorScheme() {
  const subscribe = useCallback((cb: () => void) => {
    const obs = new MutationObserver(cb);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mantine-color-scheme'] });
    return () => obs.disconnect();
  }, []);
  const getSnapshot = useCallback(() => {
    return document.documentElement.getAttribute('data-mantine-color-scheme') || 'dark';
  }, []);
  return useSyncExternalStore(subscribe, getSnapshot);
}

function toggleColorScheme() {
  const current = document.documentElement.getAttribute('data-mantine-color-scheme') || 'dark';
  document.documentElement.setAttribute('data-mantine-color-scheme', current === 'dark' ? 'light' : 'dark');
}

/* ═══════ HELPERS ═══════ */

const MAX_NOTIFICATIONS = 50;

/* ═══════ SOUND NOTIFICATION ═══════ */

let audioCtx: AudioContext | null = null;

function playNotificationSound(type: 'new_ticket' | 'new_message' = 'new_message') {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = 0.08;

    if (type === 'new_ticket') {
      // Two-tone ascending beep
      osc.frequency.value = 600;
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.25);
    } else {
      // Single soft beep
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.15);
    }
  } catch {
    // AudioContext not available
  }
}

type FilterTab = 'all' | 'in_progress' | 'open' | 'closed';

function getFilteredTickets(tickets: Ticket[], filter: FilterTab): Ticket[] {
  if (filter === 'all') return tickets;
  return tickets.filter(t => t.status === filter);
}

function getTabCounts(tickets: Ticket[]) {
  return {
    in_progress: tickets.filter(t => t.status === 'in_progress').length,
    open: tickets.filter(t => t.status === 'open').length,
    closed: tickets.filter(t => t.status === 'closed').length,
  };
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

/* ═══════ INLINE SVG ICONS ═══════ */

function DocumentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d={svgPaths.pbdc4b00} fill="var(--ds-text-gray-dark)" transform="translate(3 2)" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path clipRule="evenodd" d={svgPaths.p3107e340} fill="var(--ds-text-gray-dark)" fillRule="evenodd" transform="translate(2.67 3.2)" />
    </svg>
  );
}

function SearchIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16.5 16.5" fill="none" style={{ flexShrink: 0 }}>
      <path d={svgPaths.p3aca680} stroke="var(--ds-blue-6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, cursor: 'pointer' }}>
      <path clipRule="evenodd" d={svgPaths.p1e1ff00} fill="var(--ds-blue-6)" fillRule="evenodd" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18.073 8.48116" fill="none" style={{ flexShrink: 0, cursor: 'pointer' }}>
      <path d={svgPaths.pea25e80} stroke="var(--ds-text-gray-dark)" strokeLinecap="round" strokeWidth="1.33333" />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16.3333 16.3333" fill="none" style={{ flexShrink: 0, cursor: 'pointer' }}>
      <path d={svgPaths.p25142d00} stroke="var(--ds-text-gray-dark)" strokeLinecap="round" strokeWidth="1.33333" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 12.2 8.2" fill="none" style={{ flexShrink: 0 }}>
      <path d={svgPaths.p65bce40} stroke="var(--ds-blue-6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

function CheckIcon({ color = 'var(--ds-green-7)' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 11.867 8.533" fill="none" style={{ flexShrink: 0 }}>
      <path d={svgPaths.pb6339c0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

/* Read status: single check (sent) */
function SingleCheckIcon({ color = 'var(--ds-text-gray-dark)' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Read status: double check (read) */
function DoubleCheckIcon({ color = 'var(--ds-blue-6)' }: { color?: string }) {
  return (
    <svg width="16" height="14" viewBox="0 0 28 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 6L15 17l-2-2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Notification bell icon */
function BellIcon({ hasNotifications = false }: { hasNotifications?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ds-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      {hasNotifications && (
        <div style={{
          position: 'absolute', top: -2, right: -2,
          width: 8, height: 8, borderRadius: '50%',
          backgroundColor: 'var(--ds-red-6)',
          border: '2px solid var(--ds-bg-secondary)',
        }} />
      )}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 10.2 10.2" fill="none" style={{ flexShrink: 0 }}>
      <path d={svgPaths.p247d4e00} stroke="var(--ds-text-gray-dark)" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

/* Theme toggle icons */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ds-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ds-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/* ═══════ STATUS DOT ═══════ */

function StatusDot({ color, size = 8, style }: { color: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ flexShrink: 0, ...style }}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  );
}

/* ═══════ CLIENT AVATAR ═══════ */

function ClientAvatar({
  client,
  size = 40,
  analystId,
  showAnalystBadge = false,
}: {
  client: TicketClient;
  size?: number;
  analystId?: string;
  showAnalystBadge?: boolean;
}) {
  const analyst = analystId ? getAnalystAvatar(analystId) : undefined;

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {client.avatar ? (
        <img
          src={client.avatar}
          alt={client.name}
          style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            width: size, height: size, borderRadius: '50%',
            backgroundColor: '#D0DEFF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: size > 60 ? 32 : 14, lineHeight: '20px',
            color: '#131722',
          }}
        >
          {client.initials}
        </div>
      )}
      {showAnalystBadge && analyst && (
        <div
          style={{
            position: 'absolute', bottom: -2, left: -2,
            width: 24, height: 24, borderRadius: '50%',
            background: 'linear-gradient(to bottom, #5A8CFF, #6470FF)',
            overflow: 'hidden', border: '2px solid var(--ds-bg-secondary)',
          }}
        >
          <img src={analyst.src} alt={analyst.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
}

/* ═══════ NOTIFICATION ITEM TYPE ═══════ */

interface NotificationItem {
  id: string;
  type: 'new_ticket' | 'new_message';
  title: string;
  body: string;
  time: string;
  ticketId: string;
  read: boolean;
}

/* ═══════ NOTIFICATION PANEL ═══════ */

function NotificationPanel({
  notifications, onClear, onSelectTicket, onClose,
}: {
  notifications: NotificationItem[];
  onClear: () => void;
  onSelectTicket: (ticketId: string) => void;
  onClose: () => void;
}) {
  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 1100 }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute', top: 52, right: 100, width: 380,
          backgroundColor: 'var(--ds-bg-secondary)',
          borderRadius: 12, border: '1px solid var(--ds-border-primary)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
          maxHeight: 480, display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div style={{
          padding: '12px 16px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', borderBottom: '1px solid var(--ds-border-primary)',
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)',
          }}>Уведомления</span>
          {notifications.length > 0 && (
            <span
              onClick={onClear}
              style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 400,
                fontSize: 12, lineHeight: '16px', color: 'var(--ds-blue-6)',
                cursor: 'pointer',
              }}
            >Очистить все</span>
          )}
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {notifications.length === 0 ? (
            <div style={{
              padding: 32, textAlign: 'center',
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 13, color: 'var(--ds-text-gray-dark)',
            }}>Нет уведомлений</div>
          ) : (
            notifications.map(n => (
              <div
                key={n.id}
                onClick={() => { onSelectTicket(n.ticketId); onClose(); }}
                style={{
                  padding: '12px 16px', cursor: 'pointer',
                  borderBottom: '1px solid var(--ds-border-primary)',
                  backgroundColor: n.read ? 'transparent' : 'var(--ds-blue-6-a10)',
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  backgroundColor: n.type === 'new_ticket' ? 'var(--ds-blue-6-a10)' : 'var(--ds-green-6-a10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {n.type === 'new_ticket' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="var(--ds-blue-6)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <ChatIcon />
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 600,
                      fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>{n.title}</span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 400,
                      fontSize: 11, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
                      flexShrink: 0,
                    }}>{n.time}</span>
                  </div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    display: 'block', marginTop: 2,
                  }}>{n.body}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════ HEADER ═══════ */

function RPHeader({
  notifications, onToggleNotifications, showNotifications,
  onClearNotifications, onSelectTicket, onCloseNotifications,
}: {
  notifications: NotificationItem[];
  onToggleNotifications: () => void;
  showNotifications: boolean;
  onClearNotifications: () => void;
  onSelectTicket: (ticketId: string) => void;
  onCloseNotifications: () => void;
}) {
  const scheme = useColorScheme();
  const unreadCount = notifications.filter(n => !n.read).length;
  const tabs = [
    { id: 'main', label: 'Главная' },
    { id: 'publications', label: 'Публикации' },
    { id: 'timeseries', label: 'Временные ряды' },
    { id: 'chats', label: 'Чаты', badge: 23 },
  ];

  return (
    <header style={{
      backgroundColor: 'var(--ds-bg-secondary)', borderBottom: '1px solid var(--ds-border-primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      paddingRight: 16, flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ padding: '0 16px', height: 48, display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: 16, lineHeight: '20px', color: 'var(--ds-text-primary)',
          }}>Research Platform</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {tabs.map(tab => {
            const isActive = tab.id === 'chats';
            return (
              <div key={tab.id} style={{
                position: 'relative', padding: '12px 16px',
                display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                {isActive && (
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 3, backgroundColor: 'var(--ds-blue-6)', borderRadius: '3px 3px 0 0',
                  }} />
                )}
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  fontSize: 14, lineHeight: '20px',
                  color: isActive ? 'var(--ds-blue-6)' : 'var(--ds-text-primary)',
                }}>{tab.label}</span>
                {tab.badge && (
                  <span style={{
                    backgroundColor: 'var(--ds-red-6)', borderRadius: 32,
                    padding: '0 6px', minWidth: 16,
                    fontFamily: "'Inter', sans-serif", fontWeight: 500,
                    fontSize: 10, lineHeight: '16px', color: 'white', textAlign: 'center',
                  }}>{tab.badge}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Notifications */}
        <div
          onClick={onToggleNotifications}
          style={{
            position: 'relative',
            width: 40, height: 40, borderRadius: 8, backgroundColor: 'var(--ds-bg-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            transition: 'background-color 150ms',
          }}
          title="Уведомления"
        >
          <BellIcon hasNotifications={unreadCount > 0} />
          {unreadCount > 0 && (
            <span style={{
              position: 'absolute', top: 2, right: 2,
              backgroundColor: 'var(--ds-red-6)', borderRadius: 32,
              padding: '0 4px', minWidth: 16,
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 9, lineHeight: '14px', color: 'white', textAlign: 'center',
            }}>{unreadCount > 99 ? '99+' : unreadCount}</span>
          )}
        </div>
        {/* Theme toggle */}
        <div
          onClick={toggleColorScheme}
          style={{
            width: 40, height: 40, borderRadius: 8, backgroundColor: 'var(--ds-bg-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            transition: 'background-color 150ms',
          }}
          title={scheme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        >
          {scheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </div>
        {/* Account */}
        <div style={{
          width: 40, height: 40, borderRadius: 8, backgroundColor: 'var(--ds-bg-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <svg width="11" height="18" viewBox="0 0 11.032 18" fill="none">
            <path d={svgPaths.p3b5d5300} fill="var(--ds-text-primary)" />
            <path d={svgPaths.p9bfca00} fill="var(--ds-text-primary)" />
          </svg>
        </div>
      </div>

      {showNotifications && (
        <NotificationPanel
          notifications={notifications}
          onClear={onClearNotifications}
          onSelectTicket={onSelectTicket}
          onClose={onCloseNotifications}
        />
      )}
    </header>
  );
}

/* ═══════ TRANSFER MODAL ═══════ */

function TransferModal({
  ticket,
  onTransfer,
  onClose,
}: {
  ticket: Ticket;
  onTransfer: (analystId: string, analystName: string) => void;
  onClose: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const available = AVAILABLE_ANALYSTS.filter(
    a => a.id !== ticket.analystId &&
      (searchQuery === '' || a.name.toLowerCase().includes(searchQuery.toLowerCase()) || a.role.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--ds-bg-secondary)',
          borderRadius: 12, width: 420,
          boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
          border: '1px solid var(--ds-border-primary)',
          display: 'flex', flexDirection: 'column',
          maxHeight: '80vh',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--ds-border-primary)',
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: 16, lineHeight: '20px', color: 'var(--ds-text-primary)',
          }}>Передать тикет</span>
          <div onClick={onClose} style={{ cursor: 'pointer', padding: 4 }}>
            <CloseIcon />
          </div>
        </div>
        <div style={{ padding: '12px 20px' }}>
          <input
            type="text"
            placeholder="Поиск аналитика..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%', height: 36, borderRadius: 8,
              border: '1px solid var(--ds-border-primary)',
              padding: '0 12px', outline: 'none',
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)',
              backgroundColor: 'var(--ds-bg-primary)',
            }}
          />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 8px 12px 8px' }}>
          {available.map(analyst => {
            const avatar = getAnalystAvatar(analyst.id);
            return (
              <div
                key={analyst.id}
                onClick={() => onTransfer(analyst.id, analyst.name)}
                style={{
                  padding: '10px 12px', borderRadius: 8,
                  display: 'flex', alignItems: 'center', gap: 12,
                  cursor: 'pointer', transition: 'background-color 150ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--ds-control-hover)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {avatar ? (
                  <img src={avatar.src} alt={analyst.name}
                    style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                ) : (
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    backgroundColor: '#D0DEFF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    fontSize: 13, color: '#131722', flexShrink: 0,
                  }}>
                    {analyst.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)',
                  }}>{analyst.name}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
                  }}>{analyst.role}</span>
                </div>
              </div>
            );
          })}
          {available.length === 0 && (
            <div style={{
              padding: 20, textAlign: 'center',
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 14, color: 'var(--ds-text-gray-dark)',
            }}>Аналитики не найдены</div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════ TOAST NOTIFICATION ═══════ */

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 2000,
      backgroundColor: 'var(--ds-green-7)', borderRadius: 8,
      padding: '12px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      fontFamily: "'Inter', sans-serif", fontWeight: 500,
      fontSize: 14, lineHeight: '20px', color: 'white',
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <CheckIcon color="white" />
      {message}
    </div>
  );
}

/* ═══════ LEFT SIDEBAR ═══════ */

function TicketListSidebar({
  tickets, selectedId, onSelect,
}: {
  tickets: Ticket[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const [filter, setFilter] = useState<FilterTab>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const counts = getTabCounts(tickets);
  const filtered = getFilteredTickets(tickets, filter);

  // Apply search filter
  const searchFiltered = searchQuery.trim()
    ? filtered.filter(t => {
        const q = searchQuery.trim().toLowerCase();
        // Search by client name
        if (t.client.name.toLowerCase().includes(q)) return true;
        // Search by message text
        if (t.messages.some(m => m.text.toLowerCase().includes(q))) return true;
        // Search by topic title
        if (t.topic.title.toLowerCase().includes(q)) return true;
        return false;
      })
    : filtered;

  const openAndInProgress = searchFiltered
    .filter(t => t.status !== 'closed')
    .sort((a, b) => b.lastMessageTs - a.lastMessageTs);
  const closed = searchFiltered.filter(t => t.status === 'closed');

  useEffect(() => {
    if (isSearching) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isSearching]);

  const currentAnalystAvatar = getAnalystAvatar(CURRENT_ANALYST.id);

  const filterTabs: { id: FilterTab; label: string; color?: string; count?: number }[] = [
    { id: 'all', label: 'Все' },
    { id: 'in_progress', label: 'В работе', color: '#1FC989', count: counts.in_progress },
    { id: 'open', label: 'Открытые', color: '#5A8CFF', count: counts.open },
    { id: 'closed', label: 'Закрытые', color: '#677C9C' },
  ];

  // Count total unread across non-closed tickets
  const totalUnread = tickets.filter(t => t.status !== 'closed').reduce((sum, t) => sum + t.unreadCount, 0);

  return (
    <div style={{
      width: 348, flexShrink: 0, height: '100%',
      display: 'flex', flexDirection: 'column',
      backgroundColor: 'var(--ds-bg-secondary)', borderRight: '1px solid var(--ds-border-primary)',
      userSelect: 'none',
    }}>
      {/* Analyst card */}
      <div style={{ borderBottom: '1px solid var(--ds-border-primary)', padding: 8 }}>
        <div style={{
          backgroundColor: 'var(--ds-bg-primary)', borderRadius: 8,
          padding: 8, display: 'flex', alignItems: 'center', gap: 8, height: 48,
        }}>
          {currentAnalystAvatar && (
            <img src={currentAnalystAvatar.src} alt={CURRENT_ANALYST.name}
              style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
          )}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)',
            }}>{CURRENT_ANALYST.name}</span>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 300,
              fontSize: 10, lineHeight: '16px', color: 'var(--ds-text-secondary)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{CURRENT_ANALYST.role}</span>
          </div>
        </div>
      </div>

      {/* Header + filter */}
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16, borderBottom: '1px solid var(--ds-border-primary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
          <AnimatePresence mode="wait" initial={false}>
            {isSearching ? (
              <motion.div
                key="search-input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                style={{ flex: 1 }}
              >
                <DSInput
                  ref={searchInputRef}
                  size="sm"
                  placeholder="Поиск по имени или сообщению…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  leftIcon={<SearchIcon size={18} />}
                  rightElement={
                    <div
                      onClick={() => { setIsSearching(false); setSearchQuery(''); }}
                      style={{ cursor: 'pointer', padding: 2, display: 'flex', alignItems: 'center' }}
                    >
                      <CloseIcon />
                    </div>
                  }
                />
              </motion.div>
            ) : (
              <motion.div
                key="title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    fontSize: 18, lineHeight: '24px', color: 'var(--ds-text-primary)',
                  }}>Мои тикеты</span>
                  {totalUnread > 0 && (
                    <span style={{
                      backgroundColor: 'var(--ds-red-6)', borderRadius: 32,
                      padding: '0 6px', minWidth: 16,
                      fontFamily: "'Inter', sans-serif", fontWeight: 500,
                      fontSize: 10, lineHeight: '16px', color: 'white', textAlign: 'center',
                    }}>{totalUnread}</span>
                  )}
                </div>
                <div onClick={() => setIsSearching(true)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <SearchIcon size={24} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div style={{ display: 'flex', gap: 3, width: '100%', overflowX: 'auto', scrollbarWidth: 'none', padding: '4px 0' }}>
          {filterTabs.map(tab => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  flex: 1,
                  minWidth: 'fit-content',
                  height: 24, borderRadius: 8,
                  border: isActive ? '1px solid var(--ds-blue-6)' : '1px solid var(--ds-border-primary)',
                  padding: '0 8px',
                  backgroundColor: 'transparent',
                  color: isActive ? 'var(--ds-blue-6)' : 'var(--ds-text-primary)',
                  fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  fontSize: 12, lineHeight: '16px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, position: 'relative',
                  whiteSpace: 'nowrap', flexShrink: 0, overflow: 'visible',
                }}
              >
                {tab.color && <StatusDot color={tab.color} size={6} />}
                {tab.label}
                {tab.count != null && tab.count > 0 && (
                  <div style={{
                    position: 'absolute', top: -4, right: -4,
                    width: 10, height: 10, borderRadius: '50%',
                    backgroundColor: 'var(--ds-red-6)', border: '2px solid var(--ds-bg-secondary)',
                  }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ticket list */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {searchQuery.trim() && openAndInProgress.length === 0 && closed.length === 0 && (
          <div style={{
            padding: '32px 16px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 8,
          }}>
            <svg width="32" height="32" viewBox="0 0 16.5 16.5" fill="none" style={{ opacity: 0.4 }}>
              <path d={svgPaths.p3aca680} stroke="var(--ds-text-gray-dark)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-gray-dark)',
              textAlign: 'center',
            }}>Ничего не найдено</span>
          </div>
        )}
        <AnimatePresence initial={false}>
          {openAndInProgress.map(ticket => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
              animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              <TicketListItem ticket={ticket} isSelected={ticket.id === selectedId} onSelect={onSelect} />
            </motion.div>
          ))}
        </AnimatePresence>
        {closed.length > 0 && filter !== 'closed' && (
          <div style={{
            backgroundColor: 'var(--ds-border-primary)', height: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)',
              fontFeatureSettings: "'lnum', 'tnum'",
            }}>Закрытые {closed.length}</span>
          </div>
        )}
        {closed.map(ticket => (
          <TicketListItem key={ticket.id} ticket={ticket} isSelected={ticket.id === selectedId} onSelect={onSelect} dimmed />
        ))}
      </div>
    </div>
  );
}

/* ═══════ TICKET LIST ITEM ═══════ */

function TicketListItem({
  ticket, isSelected, onSelect, dimmed = false,
}: {
  ticket: Ticket; isSelected: boolean; onSelect: (id: string) => void; dimmed?: boolean;
}) {
  const statusColor = STATUS_CONFIG[ticket.status].color;
  const hasUnread = ticket.unreadCount > 0;

  let bgColor = 'transparent';
  if (isSelected) bgColor = 'var(--ds-blue-6-a10)';

  return (
    <div
      onClick={() => onSelect(ticket.id)}
      style={{
        padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8,
        borderBottom: '1px solid var(--ds-border-primary)',
        backgroundColor: bgColor, opacity: dimmed ? 0.5 : 1,
        cursor: 'pointer', position: 'relative', userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', width: '100%' }}>
        {ticket.topic.type === 'publication' ? <DocumentIcon /> : <ChatIcon />}
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)',
          fontFeatureSettings: "'lnum', 'tnum'",
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1,
        }}>{ticket.topic.title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <ClientAvatar
          client={ticket.client} size={40}
          analystId={ticket.analystId}
          showAnalystBadge={ticket.status !== 'open'}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
              <StatusDot color={statusColor} />
              <span style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>{ticket.client.name}</span>
            </div>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)',
              fontFeatureSettings: "'lnum', 'tnum'", flexShrink: 0,
            }}>{ticket.lastMessageTime}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
              fontFeatureSettings: "'lnum', 'tnum'",
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1,
            }}>
              {ticket.lastMessageFromAnalyst && <span style={{ color: 'var(--ds-text-primary)' }}>Вы: </span>}
              {ticket.lastMessagePreview}
            </span>
            {ticket.unreadCount > 0 && (
              <span style={{
                backgroundColor: 'var(--ds-blue-6)', borderRadius: 32,
                padding: '0 6px', minWidth: 20,
                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                fontSize: 12, lineHeight: '16px', color: 'white', textAlign: 'center', flexShrink: 0,
              }}>{ticket.unreadCount}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════ CENTER — CHAT VIEW ═══════ */

function ChatView({
  ticket,
  onTransferClick,
  onCloseTicket,
  onTakeTicket,
  onResumeTicket,
  onSendMessage,
}: {
  ticket: Ticket | null;
  onTransferClick: () => void;
  onCloseTicket: () => void;
  onTakeTicket: () => void;
  onResumeTicket: () => void;
  onSendMessage: (ticketId: string, message: TicketMessage) => void;
}) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [pendingAttachments, setPendingAttachments] = useState<TicketAttachment[]>([]);
  const [replyTo, setReplyTo] = useState<TicketMessage | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; message: TicketMessage } | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ticket) setMessages(ticket.messages);
  }, [ticket?.id, ticket?.messages]);

  // Clear reply when switching tickets
  useEffect(() => {
    setReplyTo(null);
    setContextMenu(null);
  }, [ticket?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  const handleContextMenu = useCallback((e: React.MouseEvent, msg: TicketMessage) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, message: msg });
  }, []);

  const handleReply = useCallback((msg: TicketMessage) => {
    setReplyTo(msg);
    setContextMenu(null);
    // Focus input
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newAttachments: TicketAttachment[] = Array.from(files).map(file => ({
      id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name: file.name,
      type: file.type.startsWith('image/') ? 'image' : 'file',
      url: URL.createObjectURL(file),
      size: formatFileSize(file.size),
    }));
    setPendingAttachments(prev => [...prev, ...newAttachments]);
    e.target.value = '';
  }, []);

  const removePendingAttachment = useCallback((id: string) => {
    setPendingAttachments(prev => prev.filter(a => a.id !== id));
  }, []);

  const handleSend = useCallback(() => {
    if ((!inputValue.trim() && pendingAttachments.length === 0) || !ticket) return;
    const newMsg: TicketMessage = {
      id: `msg-${Date.now()}`,
      ticketId: ticket.id,
      fromClient: false,
      text: inputValue.trim(),
      date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      attachments: pendingAttachments.length > 0 ? [...pendingAttachments] : undefined,
      read: false,
      replyTo: replyTo ? {
        id: replyTo.id,
        text: replyTo.text.slice(0, 120) + (replyTo.text.length > 120 ? '...' : ''),
        senderName: replyTo.fromClient ? (ticket.client.name) : CURRENT_ANALYST.name,
        fromClient: replyTo.fromClient,
      } : undefined,
    };
    setMessages(prev => [...prev, newMsg]);
    onSendMessage(ticket.id, newMsg);
    setInputValue('');
    setPendingAttachments([]);
    setReplyTo(null);
  }, [inputValue, pendingAttachments, ticket, onSendMessage, replyTo]);

  if (!ticket) {
    return (
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'var(--ds-bg-primary)',
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 14, color: 'var(--ds-text-gray-dark)',
        }}>Выберите тикет для просмотра</span>
      </div>
    );
  }

  const analyst = getAnalystAvatar(ticket.analystId);
  const statusCfg = STATUS_CONFIG[ticket.status];
  const isClosed = ticket.status === 'closed';
  const isOpen = ticket.status === 'open';
  const isInProgress = ticket.status === 'in_progress';
  const canType = isInProgress; // only in_progress tickets allow messaging

  // Status badge colors
  const statusBadgeBg = ticket.status === 'in_progress'
    ? 'var(--ds-green-6-a10)' : ticket.status === 'open'
    ? 'var(--ds-blue-6-a10)' : 'var(--ds-gray-6-a10)';
  const statusBadgeColor = ticket.status === 'in_progress'
    ? 'var(--ds-green-7)' : ticket.status === 'open'
    ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)';

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      {/* Top bar */}
      <div style={{
        backgroundColor: 'var(--ds-bg-secondary)', borderBottom: '1px solid var(--ds-border-primary)',
        padding: '8px 16px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 64, flexShrink: 0, userSelect: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', paddingRight: 3 }}>
            <div style={{ marginRight: -3, zIndex: 1 }}>
              <ClientAvatar client={ticket.client} size={40} />
            </div>
            {analyst && (
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(to bottom, #5A8CFF, #6470FF)',
                overflow: 'hidden', border: '4px solid var(--ds-bg-secondary)',
                marginLeft: -3, zIndex: 0,
              }}>
                <img src={analyst.src} alt={analyst.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)' }}>Клиент:</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)' }}>{ticket.client.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)' }}>Аналитик:</span>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px',
                color: ticket.analystName ? 'var(--ds-text-primary)' : 'var(--ds-text-gray-dark)',
                fontStyle: ticket.analystName ? 'normal' : 'italic',
              }}>{ticket.analystName || 'Не назначен'}</span>
            </div>
          </div>
        </div>
        {/* Open ticket: only "Взять в работу" */}
        {isOpen && (
          <button
            onClick={onTakeTicket}
            style={{
              backgroundColor: 'var(--ds-blue-6)', border: 'none', borderRadius: 8,
              height: 32, padding: '0 16px',
              display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
            }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 12, lineHeight: '16px', color: 'white' }}>Взять в работу</span>
          </button>
        )}
        {/* In progress: "Передать" + "Закрыть тикет" */}
        {isInProgress && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={onTransferClick}
              style={{
                backgroundColor: 'var(--ds-bg-primary)', border: 'none', borderRadius: 8,
                height: 32, padding: '0 12px',
                display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
              }}
            >
              <TransferIcon />
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 12, lineHeight: '16px', color: 'var(--ds-blue-6)' }}>Передать</span>
            </button>
            <button
              onClick={onCloseTicket}
              style={{
                backgroundColor: 'var(--ds-green-6-a10)', border: 'none', borderRadius: 8,
                height: 32, padding: '0 12px',
                display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
              }}
            >
              <CheckIcon />
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 12, lineHeight: '16px', color: 'var(--ds-green-7)' }}>Закрыть тикет</span>
            </button>
          </div>
        )}
        {isClosed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              backgroundColor: 'var(--ds-gray-6-a10)', borderRadius: 32, padding: '4px 12px',
              fontFamily: "'Inter', sans-serif", fontWeight: 500,
              fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
            }}>Закрыт</span>
            <button
              onClick={onResumeTicket}
              style={{
                backgroundColor: 'var(--ds-bg-primary)', border: 'none', borderRadius: 8,
                height: 32, padding: '0 12px',
                display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M1 4v6h6" stroke="var(--ds-blue-6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="var(--ds-blue-6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                fontSize: 12, lineHeight: '16px', color: 'var(--ds-blue-6)',
              }}>Возобновить</span>
            </button>
          </div>
        )}
      </div>

      {/* Sub-header */}
      <div style={{
        backgroundColor: 'var(--ds-bg-secondary)', borderBottom: '1px solid var(--ds-border-primary)',
        padding: '0 16px', height: 48, display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0,
      }}>
        <span style={{
          backgroundColor: statusBadgeBg, borderRadius: 32, padding: '4px 12px',
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 12, lineHeight: '16px', color: statusBadgeColor,
        }}>{statusCfg.label}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{ticket.topic.title}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)', flexShrink: 0,
          }}>от {ticket.topic.date}</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, backgroundColor: 'var(--ds-bg-primary)', overflowY: 'auto',
        display: 'flex', flexDirection: 'column', minHeight: 0,
      }}>
        <div style={{
          maxWidth: 800, width: '100%', margin: '0 auto', marginTop: 'auto',
          display: 'flex', flexDirection: 'column', gap: 4, padding: '24px 32px',
        }}>
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} onContextMenu={handleContextMenu} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Context menu */}
      {contextMenu && (
        <MessageContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          messageText={contextMenu.message.text}
          onReply={() => handleReply(contextMenu.message)}
          onClose={() => setContextMenu(null)}
        />
      )}

      {/* Pending attachments preview */}
      {canType && pendingAttachments.length > 0 && (
        <div style={{
          backgroundColor: 'var(--ds-bg-primary)', padding: '8px 32px 0 32px', flexShrink: 0,
        }}>
          <div style={{
            maxWidth: 800, width: '100%', margin: '0 auto',
            display: 'flex', gap: 8, flexWrap: 'wrap',
          }}>
            {pendingAttachments.map(att => (
              <div key={att.id} style={{
                position: 'relative', borderRadius: 8, overflow: 'hidden',
                border: '1px solid var(--ds-border-primary)',
                backgroundColor: 'var(--ds-bg-secondary)',
                display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px',
              }}>
                {att.type === 'image' ? (
                  <img src={att.url} alt={att.name}
                    style={{ width: 32, height: 32, objectFit: 'cover', borderRadius: 4 }}
                  />
                ) : (
                  <DocumentIcon />
                )}
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)',
                  maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>{att.name}</span>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  fontSize: 10, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
                }}>{att.size}</span>
                <div onClick={() => removePendingAttachment(att.id)}
                  style={{ cursor: 'pointer', padding: 2 }}
                >
                  <CloseIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input — only for in_progress tickets */}
      {canType && (
        <div style={{
          backgroundColor: 'var(--ds-bg-primary)', padding: '12px 32px 40px 32px', flexShrink: 0,
        }}>
          <div
            onClick={() => inputRef.current?.focus()}
            style={{
            maxWidth: 800, width: '100%', margin: '0 auto',
            backgroundColor: 'var(--ds-bg-secondary)',
            borderRadius: 8,
            border: isInputFocused ? '1px solid var(--ds-blue-6)' : '1px solid var(--ds-border-primary)',
            boxShadow: isInputFocused ? '0 0 0 1px var(--ds-blue-6)' : '0 4px 16px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden',
            cursor: 'text',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
          }}>
            {/* Reply preview bar */}
            {replyTo && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 16px',
                borderBottom: '1px solid var(--ds-border-primary)',
                backgroundColor: 'var(--ds-bg-primary)',
              }}>
                <div style={{
                  width: 3, height: 32, borderRadius: 2, flexShrink: 0,
                  backgroundColor: replyTo.fromClient ? 'var(--ds-blue-6)' : 'var(--ds-green-6)',
                }} />
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    fontSize: 12, lineHeight: '16px',
                    color: replyTo.fromClient ? 'var(--ds-blue-6)' : 'var(--ds-green-6)',
                  }}>
                    {replyTo.fromClient ? ticket.client.name : CURRENT_ANALYST.name}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {replyTo.text}
                  </span>
                </div>
                <div
                  onClick={() => setReplyTo(null)}
                  style={{ cursor: 'pointer', padding: 4, flexShrink: 0 }}
                >
                  <CloseIcon />
                </div>
              </div>
            )}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: 16,
            }}>
              <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                style={{ display: 'none' }} onChange={handleFileSelect}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div onClick={() => fileInputRef.current?.click()}>
                  <LinkIcon />
                </div>
                <div onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.accept = 'image/*';
                    fileInputRef.current.click();
                    fileInputRef.current.accept = 'image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx';
                  }
                }}>
                  <PhotoIcon />
                </div>
              </div>
              <input
                ref={inputRef}
                type="text" placeholder="Начните вводить сообщение"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                style={{
                  flex: 1, border: 'none', outline: 'none',
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)',
                  backgroundColor: 'transparent',
                }}
              />
              <div onClick={handleSend}><SendIcon /></div>
            </div>
          </div>
        </div>
      )}

      {/* Open ticket footer — need to take before messaging */}
      {isOpen && (
        <div style={{
          backgroundColor: 'var(--ds-bg-primary)', padding: '16px 32px 24px 32px', flexShrink: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-gray-dark)',
          }}>Возьмите тикет в работу, чтобы начать переписку</span>
          <button
            onClick={onTakeTicket}
            style={{
              backgroundColor: 'var(--ds-blue-6)', border: 'none', borderRadius: 8,
              height: 36, padding: '0 20px',
              display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 13, lineHeight: '20px', color: 'white',
            }}>Взять в работу</span>
          </button>
        </div>
      )}

      {/* Closed ticket footer — resume button */}
      {isClosed && (
        <div style={{
          backgroundColor: 'var(--ds-bg-primary)', padding: '16px 32px 24px 32px', flexShrink: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-gray-dark)',
          }}>Тикет закрыт. Отправка сообщений недоступна.</span>
          <button
            onClick={onResumeTicket}
            style={{
              backgroundColor: 'var(--ds-blue-6)', border: 'none', borderRadius: 8,
              height: 36, padding: '0 20px',
              display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M1 4v6h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 13, lineHeight: '20px', color: 'white',
            }}>Возобновить общение</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ═══════ SYSTEM MESSAGE ═══════ */

function SystemMessageBubble({ message }: { message: TicketMessage }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', padding: '8px 0',
    }}>
      <div style={{
        backgroundColor: 'var(--ds-bg-secondary)',
        borderRadius: 16, padding: '6px 16px',
        border: '1px solid var(--ds-border-primary)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10" stroke="var(--ds-text-gray-dark)" strokeWidth="1.5" />
          <path d="M12 8v4l2 2" stroke="var(--ds-text-gray-dark)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
        }}>{message.text}</span>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 11, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
          opacity: 0.6,
        }}>{message.time}</span>
      </div>
    </div>
  );
}

/* ═══════ CONTEXT MENU ═══════ */

function MessageContextMenu({
  x, y, messageText, onReply, onClose,
}: {
  x: number; y: number;
  messageText: string;
  onReply: () => void;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) onClose();
    };
    const escHandler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', escHandler);
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('keydown', escHandler); };
  }, [onClose]);

  // Adjust position if menu would overflow viewport
  const [adjustedPos, setAdjustedPos] = useState({ x, y });
  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      let ax = x, ay = y;
      if (x + rect.width > window.innerWidth - 8) ax = window.innerWidth - rect.width - 8;
      if (y + rect.height > window.innerHeight - 8) ay = window.innerHeight - rect.height - 8;
      setAdjustedPos({ x: ax, y: ay });
    }
  }, [x, y]);

  return (
    <div
      ref={menuRef}
      style={{
        position: 'fixed', left: adjustedPos.x, top: adjustedPos.y, zIndex: 2000,
        backgroundColor: 'var(--ds-bg-secondary)',
        borderRadius: 8, border: '1px solid var(--ds-border-primary)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        padding: '4px 0', minWidth: 180,
      }}
    >
      <div
        onClick={() => { onReply(); onClose(); }}
        style={{
          padding: '8px 16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10,
          transition: 'background-color 120ms',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--ds-control-hover)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M9 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5l-5 5v-5z"
            stroke="var(--ds-text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-primary)',
        }}>Ответить</span>
      </div>
      <div
        onClick={() => {
          if (navigator.clipboard && messageText) navigator.clipboard.writeText(messageText);
          onClose();
        }}
        style={{
          padding: '8px 16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10,
          transition: 'background-color 120ms',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--ds-control-hover)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <rect x="9" y="9" width="13" height="13" rx="2" stroke="var(--ds-text-primary)" strokeWidth="1.5" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            stroke="var(--ds-text-primary)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-primary)',
        }}>Копировать текст</span>
      </div>
    </div>
  );
}

/* ═══════ REPLY QUOTE (inside bubble) ═══════ */

function ReplyQuote({ replyTo, isOutgoing }: { replyTo: NonNullable<TicketMessage['replyTo']>; isOutgoing: boolean }) {
  const barColor = replyTo.fromClient ? 'var(--ds-blue-6)' : (isOutgoing ? 'rgba(255,255,255,0.5)' : 'var(--ds-green-6)');
  const nameColor = isOutgoing ? 'rgba(255,255,255,0.85)' : 'var(--ds-blue-6)';
  const textColor = isOutgoing ? 'rgba(255,255,255,0.6)' : 'var(--ds-text-gray-dark)';

  return (
    <div style={{
      display: 'flex', gap: 8, padding: '6px 8px',
      borderRadius: 4, marginBottom: 4,
      backgroundColor: isOutgoing ? 'rgba(255,255,255,0.08)' : 'var(--ds-bg-primary)',
      borderLeft: `3px solid ${barColor}`,
      cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 600,
          fontSize: 12, lineHeight: '16px', color: nameColor,
        }}>{replyTo.senderName}</span>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 12, lineHeight: '16px', color: textColor,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{replyTo.text}</span>
      </div>
    </div>
  );
}

/* ═══════ MESSAGE BUBBLE (Telegram-style) ═══════ */

function MessageBubble({
  message,
  onContextMenu,
}: {
  message: TicketMessage;
  onContextMenu?: (e: React.MouseEvent, msg: TicketMessage) => void;
}) {
  if (message.isSystem) {
    return <SystemMessageBubble message={message} />;
  }

  const isClient = message.fromClient;
  const isOutgoing = !isClient;
  const isRead = message.read;

  // Telegram-style colors
  const bubbleBg = isOutgoing
    ? 'var(--ds-blue-7)'
    : 'var(--ds-bg-secondary)';

  // Telegram-style border radius with tail
  const borderRadius = isOutgoing
    ? '12px 12px 4px 12px'
    : '12px 12px 12px 4px';

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onContextMenu?.(e, message);
  };

  // Time + checks metadata (inline float approach like Telegram)
  const metaColor = isOutgoing ? 'rgba(255,255,255,0.5)' : 'var(--ds-text-gray-dark)';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isOutgoing ? 'flex-end' : 'flex-start',
        padding: '1px 0',
      }}
    >
      <div
        onContextMenu={handleContextMenu}
        style={{
          position: 'relative',
          maxWidth: '75%',
          backgroundColor: bubbleBg,
          borderRadius,
          boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
          padding: '8px 10px 6px 10px',
          display: 'flex', flexDirection: 'column', gap: 0,
          cursor: 'context-menu',
        }}
      >
        {/* Reply quote */}
        {message.replyTo && (
          <ReplyQuote replyTo={message.replyTo} isOutgoing={isOutgoing} />
        )}

        {/* Attachments */}
        {message.attachments && message.attachments.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: message.text ? 4 : 0 }}>
            {message.attachments.map(att => (
              att.type === 'image' ? (
                <img key={att.id} src={att.url} alt={att.name}
                  style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 6, objectFit: 'contain' }}
                />
              ) : (
                <div key={att.id} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '6px 10px', borderRadius: 6,
                  backgroundColor: isClient ? 'var(--ds-bg-primary)' : 'rgba(255,255,255,0.1)',
                }}>
                  <DocumentIcon />
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: 13, lineHeight: '16px',
                    color: isClient ? 'var(--ds-blue-6)' : 'white',
                    textDecoration: 'underline',
                  }}>{att.name}</span>
                  {att.size && (
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 400,
                      fontSize: 11, lineHeight: '16px',
                      color: isClient ? 'var(--ds-text-gray-dark)' : 'rgba(255,255,255,0.6)',
                    }}>{att.size}</span>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {/* Text + inline time metadata */}
        {message.text && (
          <div style={{ position: 'relative' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 14, lineHeight: '20px',
              color: isOutgoing ? 'white' : 'var(--ds-text-primary)',
              margin: 0, whiteSpace: 'pre-wrap',
              paddingBottom: 0,
            }}>
              {message.text}
              {/* Invisible spacer to reserve room for the time float */}
              <span style={{
                display: 'inline-block', width: isOutgoing ? 76 : 52,
                height: 0, visibility: 'hidden',
              }}>&nbsp;</span>
            </p>
            {/* Floating time + checks (Telegram-style bottom-right) */}
            <span style={{
              position: 'absolute', right: 0, bottom: 0,
              display: 'flex', alignItems: 'center', gap: 3,
              pointerEvents: 'none',
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 400,
                fontSize: 11, lineHeight: '16px', color: metaColor,
                fontFeatureSettings: "'lnum', 'tnum'",
              }}>{message.time}</span>
              {isOutgoing && !message.isSystem && (
                isRead
                  ? <DoubleCheckIcon color="rgba(255,255,255,0.6)" />
                  : <SingleCheckIcon color="rgba(255,255,255,0.4)" />
              )}
            </span>
          </div>
        )}

        {/* If no text, show time below attachments */}
        {!message.text && (
          <div style={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'flex-end', marginTop: 4 }}>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 11, lineHeight: '16px', color: metaColor,
              fontFeatureSettings: "'lnum', 'tnum'",
            }}>{message.time}</span>
            {isOutgoing && !message.isSystem && (
              isRead
                ? <DoubleCheckIcon color="rgba(255,255,255,0.6)" />
                : <SingleCheckIcon color="rgba(255,255,255,0.4)" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════ RIGHT SIDEBAR ═══════ */

function ClientPanel({
  ticket,
  tickets,
  onSelectTicket,
}: {
  ticket: Ticket | null;
  tickets: Ticket[];
  onSelectTicket: (id: string) => void;
}) {
  if (!ticket) return null;
  const { client } = ticket;
  const inquiries = getClientInquiries(client.id, tickets);

  // Split into active and closed
  const activeInquiries = inquiries.filter(i => !i.closed);
  const closedInquiries = inquiries.filter(i => i.closed);

  return (
    <div style={{
      width: 348, flexShrink: 0, height: '100%',
      display: 'flex', flexDirection: 'column',
      backgroundColor: 'var(--ds-bg-secondary)', borderLeft: '1px solid var(--ds-border-primary)',
      userSelect: 'none',
    }}>
      <div style={{
        borderBottom: '1px solid var(--ds-border-primary)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        padding: '24px 16px',
      }}>
        <ClientAvatar client={client} size={122} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18, lineHeight: '24px', color: 'var(--ds-text-primary)' }}>{client.name}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)' }}>{client.company}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-blue-6)' }}>{client.username}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-blue-6)' }}>{client.email}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)' }}>{client.phone}</span>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: '20px', color: 'var(--ds-text-primary)' }}>
          Все обращения
          <span style={{ color: 'var(--ds-text-gray-dark)', fontWeight: 400, marginLeft: 8 }}>{inquiries.length}</span>
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {activeInquiries.map(inq => (
            <InquiryCard key={inq.id} inquiry={inq}
              isCurrentTicket={inq.ticketId === ticket.id}
              onClick={() => { if (inq.ticketId && inq.ticketId !== ticket.id) onSelectTicket(inq.ticketId); }}
            />
          ))}
          {closedInquiries.length > 0 && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0 4px 0',
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 400,
                fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
              }}>Закрытые</span>
              <div style={{ flex: 1, height: 1, backgroundColor: 'var(--ds-border-primary)' }} />
            </div>
          )}
          {closedInquiries.map(inq => (
            <InquiryCard key={inq.id} inquiry={inq}
              isCurrentTicket={inq.ticketId === ticket.id}
              onClick={() => { if (inq.ticketId && inq.ticketId !== ticket.id) onSelectTicket(inq.ticketId); }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════ INQUIRY CARD ═══════ */

function InquiryCard({
  inquiry,
  isCurrentTicket,
  onClick,
}: {
  inquiry: ClientInquiry;
  isCurrentTicket: boolean;
  onClick: () => void;
}) {
  const isClickable = !!inquiry.ticketId && !isCurrentTicket;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      style={{
        backgroundColor: isCurrentTicket ? 'var(--ds-blue-6-a10)' : 'var(--ds-bg-primary)',
        borderRadius: 8, padding: 12,
        display: 'flex', flexDirection: 'column', gap: 8,
        opacity: inquiry.closed ? 0.5 : 1,
        cursor: isClickable ? 'pointer' : 'default',
        border: isCurrentTicket ? '1px solid var(--ds-blue-6-a30)' : '1px solid transparent',
        transition: 'background-color 150ms',
      }}
      onMouseEnter={e => { if (isClickable) e.currentTarget.style.backgroundColor = 'var(--ds-control-hover)'; }}
      onMouseLeave={e => { if (isClickable) e.currentTarget.style.backgroundColor = isCurrentTicket ? 'var(--ds-blue-6-a10)' : 'var(--ds-bg-primary)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
          {inquiry.type === 'publication' ? <DocumentIcon /> : <ChatIcon />}
          <StatusDot color={inquiry.sectorColor} />
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{inquiry.sector}</span>
        </div>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)', flexShrink: 0,
        }}>{inquiry.date}</span>
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif", fontWeight: 400,
        fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)',
        overflow: 'hidden', textOverflow: 'ellipsis',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        height: 32,
      }}>{inquiry.title}</div>
    </div>
  );
}

/* ═══════ CONFIRMATION DIALOG (uses DSConfirmDialog) ═══════ */
/* Replaced inline ConfirmDialog with DS component — see ds-confirm-dialog.tsx */

/* ═══════ INQUIRY SIDE SHEET ═══════ */

function InquirySideSheet({
  ticket,
  onClose,
}: {
  ticket: Ticket;
  onClose: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const statusCfg = STATUS_CONFIG[ticket.status];
  const statusBadgeBg = ticket.status === 'in_progress'
    ? 'var(--ds-green-6-a10)' : ticket.status === 'open'
    ? 'var(--ds-blue-6-a10)' : 'var(--ds-gray-6-a10)';
  const statusBadgeColor = ticket.status === 'in_progress'
    ? 'var(--ds-green-7)' : ticket.status === 'open'
    ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 900, display: 'flex', justifyContent: 'flex-end' }}>
      <div
        onClick={handleClose}
        style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      />
      <div
        style={{
          position: 'relative', width: 700, height: '100%',
          display: 'flex', flexDirection: 'column',
          backgroundColor: 'var(--ds-bg-secondary)',
          borderLeft: '1px solid var(--ds-border-primary)',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.15)',
          transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        <div style={{
          backgroundColor: 'var(--ds-bg-secondary)', borderBottom: '1px solid var(--ds-border-primary)',
          padding: '8px 16px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: 64, flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <ClientAvatar client={ticket.client} size={40} />
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 18, lineHeight: '24px', color: 'var(--ds-text-primary)',
            }}>{ticket.client.name}</span>
          </div>
          <div onClick={handleClose} style={{
            backgroundColor: 'var(--ds-bg-primary)', borderRadius: 8,
            width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <CloseIcon />
          </div>
        </div>

        <div style={{
          backgroundColor: 'var(--ds-bg-secondary)', borderBottom: '1px solid var(--ds-border-primary)',
          padding: '0 16px', height: 48, display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0,
        }}>
          <span style={{
            backgroundColor: statusBadgeBg, borderRadius: 32, padding: '4px 12px',
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 12, lineHeight: '16px', color: statusBadgeColor,
          }}>{statusCfg.label}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, flex: 1 }}>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{ticket.topic.title}</span>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)', flexShrink: 0,
            }}>от {ticket.topic.date}</span>
          </div>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)', flexShrink: 0,
          }}>{ticket.topic.sector}</span>
        </div>

        <div style={{
          flex: 1, backgroundColor: 'var(--ds-bg-primary)', overflowY: 'auto',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 0,
        }}>
          <div style={{
            maxWidth: 700, width: '100%', margin: '0 auto',
            display: 'flex', flexDirection: 'column', gap: 4, padding: '24px 32px',
          }}>
            {ticket.messages.map(msg => <MessageBubble key={msg.id} message={msg} />)}
            {ticket.messages.length === 0 && (
              <div style={{
                textAlign: 'center', padding: '40px 0',
                fontFamily: "'Inter', sans-serif", fontWeight: 400,
                fontSize: 14, color: 'var(--ds-text-gray-dark)',
              }}>Нет сообщений</div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════ MAIN PAGE ═══════ */

let _ticketIdCounter = Math.floor(Date.now() / 1000);

export function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>(() => [...INITIAL_TICKETS]);
  const [selectedId, setSelectedId] = useState<string | null>('t6');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [sideSheetTicketId, setSideSheetTicketId] = useState<string | null>(null);
  const [confirmAction, setConfirmAction] = useState<null | {
    type: 'take' | 'transfer' | 'close' | 'resume';
    analystId?: string;
    analystName?: string;
  }>(null);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const selectedIdRef = useRef(selectedId);
  selectedIdRef.current = selectedId;

  // Team-filtered tickets for the list view
  const visibleTickets = getTeamVisibleTickets(tickets);
  const selectedTicket = tickets.find(t => t.id === selectedId) || null;
  const sideSheetTicket = sideSheetTicketId ? tickets.find(t => t.id === sideSheetTicketId) || null : null;

  // ═══ Helper: add system message to a ticket ═══
  const addSystemMessage = useCallback((ticketId: string, text: string) => {
    const sysMsg = createSystemMessage(ticketId, text);
    setTickets(prev => prev.map(t =>
      t.id === ticketId ? { ...t, messages: [...t.messages, sysMsg] } : t
    ));
  }, []);

  // ═══ Helper: add notification ═══
  const addNotification = useCallback((type: NotificationItem['type'], title: string, body: string, ticketId: string) => {
    const now = new Date();
    const n: NotificationItem = {
      id: `notif-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      type, title, body, ticketId,
      time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      read: false,
    };
    setNotifications(prev => [n, ...prev].slice(0, MAX_NOTIFICATIONS));

    // Sound
    playNotificationSound(type);

    // DS toast notification
    if (type === 'new_ticket') {
      notify.info(title, { description: body, duration: 10000 });
    } else {
      notify.success(title, { description: body, duration: 10000 });
    }
  }, []);

  // ═══ Auto-reply: client responds 2-3s after analyst sends ═══
  const scheduleAutoReply = useCallback((ticketId: string) => {
    const delay = 2000 + Math.random() * 1000; // 2-3 seconds
    setTimeout(() => {
      const replyText = CLIENT_AUTO_REPLIES[Math.floor(Math.random() * CLIENT_AUTO_REPLIES.length)];
      const now = new Date();
      const replyMsg: TicketMessage = {
        id: `reply-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        ticketId,
        fromClient: true,
        text: replyText,
        date: now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        read: false,
      };
      let clientName = '';
      setTickets(prev => prev.map(t => {
        if (t.id !== ticketId || t.status !== 'in_progress') return t;
        clientName = t.client.name;
        const isCurrentlySelected = selectedIdRef.current === ticketId;
        return {
          ...t,
          messages: [
            // mark all analyst messages as read (client read them)
            ...t.messages.map(m => !m.fromClient && !m.isSystem ? { ...m, read: true } : m),
            replyMsg,
          ],
          unreadCount: isCurrentlySelected ? 0 : t.unreadCount + 1,
          lastMessagePreview: replyText,
          lastMessageFromAnalyst: false,
          lastMessageTime: replyMsg.time,
          lastMessageTs: Date.now(),
        };
      }));
      // Notification if not currently viewing this ticket
      if (selectedIdRef.current !== ticketId && clientName) {
        addNotification('new_message', clientName, replyText, ticketId);
      }
    }, delay);
  }, [addNotification]);

  // ═══ New ticket every 15 seconds ═══
  useEffect(() => {
    let templateIdx = 0;
    const interval = setInterval(() => {
      const template = INCOMING_TICKET_TEMPLATES[templateIdx % INCOMING_TICKET_TEMPLATES.length];
      templateIdx++;
      // Build ticket inside setTickets but collect notification data to fire outside
      let pendingNotif: { cn: string; tt: string; tid: string } | null = null;

      setTickets(prev => {
        const client = getRandomNewTicketClient(prev);
        const now = new Date();
        const dateStr = now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        const ticketId = `t-new-${++_ticketIdCounter}`;
        const newTicket: Ticket = {
          id: ticketId,
          status: 'open',
          client,
          analystId: '',
          analystName: '',
          topic: { ...template.topic, date: dateStr },
          messages: [{
            id: `msg-new-${_ticketIdCounter}`,
            ticketId,
            fromClient: true,
            text: template.messageText,
            date: dateStr,
            time: timeStr,
            read: false,
          }],
          unreadCount: 1,
          lastMessagePreview: template.messageText,
          lastMessageFromAnalyst: false,
          lastMessageTime: timeStr,
          lastMessageTs: now.getTime(),
        };
        pendingNotif = { cn: client.name, tt: template.topic.title, tid: ticketId };
        return [newTicket, ...prev];
      });

      // Fire notification outside setTickets to avoid setState-during-render warning
      if (pendingNotif) {
        const { cn, tt, tid } = pendingNotif as { cn: string; tt: string; tid: string };
        addNotification('new_ticket', `Новый тикет от ${cn}`, tt, tid);
      }
    }, 40000);
    return () => clearInterval(interval);
  }, [addNotification]);

  // Mark ticket as read when selected + mark client messages as read
  // Business rule: open tickets keep unreadCount until taken ("Взять в работу")
  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    setTickets(prev => prev.map(t => {
      if (t.id !== id) return t;
      const shouldClearUnread = t.status !== 'open';
      return {
        ...t,
        unreadCount: shouldClearUnread ? 0 : t.unreadCount,
        messages: t.messages.map(m => m.fromClient && !m.read ? { ...m, read: true } : m),
      };
    }));
    // Mark related notifications as read
    setNotifications(prev => prev.map(n =>
      n.ticketId === id ? { ...n, read: true } : n
    ));
  }, []);

  // Ensure unread is always cleared when selected ticket changes (except open tickets)
  useEffect(() => {
    if (selectedId) {
      setTickets(prev => {
        const ticket = prev.find(t => t.id === selectedId);
        if (ticket && ticket.unreadCount > 0 && ticket.status !== 'open') {
          return prev.map(t => t.id === selectedId ? { ...t, unreadCount: 0 } : t);
        }
        return prev;
      });
    }
  }, [selectedId]);

  // Open inquiry in side sheet (from right sidebar)
  const handleOpenInquiry = useCallback((ticketId: string) => {
    if (ticketId && ticketId !== selectedId) {
      setSideSheetTicketId(ticketId);
    }
  }, [selectedId]);

  const handleTransfer = useCallback((analystId: string, analystName: string) => {
    if (!selectedId) return;
    setShowTransferModal(false);
    setConfirmAction({ type: 'transfer', analystId, analystName });
  }, [selectedId]);

  const handleConfirmTransfer = useCallback(() => {
    if (!selectedId || !confirmAction || confirmAction.type !== 'transfer') return;
    const { analystId, analystName } = confirmAction;
    const isOutsideTeam = !isTeamMember(analystId!);

    addSystemMessage(selectedId, `Тикет передан аналитику ${analystName}`);
    setTickets(prev => prev.map(t =>
      t.id === selectedId ? { ...t, analystId: analystId!, analystName: analystName! } : t
    ));
    setConfirmAction(null);

    if (isOutsideTeam) {
      const remaining = getTeamVisibleTickets(
        tickets.map(t => t.id === selectedId ? { ...t, analystId: analystId! } : t)
      );
      const next = remaining.find(t => t.id !== selectedId);
      setSelectedId(next?.id || null);
      setToastMessage(`Тикет передан в другой отдел: ${analystName}`);
    } else {
      setToastMessage(`Тикет передан: ${analystName}`);
    }
  }, [selectedId, confirmAction, tickets, addSystemMessage]);

  const handleCloseTicket = useCallback(() => {
    if (!selectedId) return;
    setConfirmAction({ type: 'close' });
  }, [selectedId]);

  const handleConfirmClose = useCallback(() => {
    if (!selectedId) return;
    addSystemMessage(selectedId, 'Тикет закрыт');
    setTickets(prev => prev.map(t =>
      t.id === selectedId ? { ...t, status: 'closed' as const, unreadCount: 0 } : t
    ));
    setConfirmAction(null);
    setToastMessage('Тикет закрыт');
  }, [selectedId, addSystemMessage]);

  // Save sent message to parent tickets state (persist history) + schedule auto-reply
  const handleSendMessage = useCallback((ticketId: string, message: TicketMessage) => {
    const msgWithRead: TicketMessage = { ...message, read: false };
    setTickets(prev => prev.map(t =>
      t.id === ticketId
        ? {
            ...t,
            messages: [...t.messages, msgWithRead],
            lastMessagePreview: message.text || 'Вложение',
            lastMessageFromAnalyst: !message.fromClient,
            lastMessageTime: message.time,
            lastMessageTs: Date.now(),
          }
        : t
    ));
    // Schedule auto-reply from client
    if (!message.fromClient && !message.isSystem) {
      scheduleAutoReply(ticketId);
    }
  }, [scheduleAutoReply]);

  // Resume closed ticket — back to in_progress
  const handleResumeTicket = useCallback(() => {
    if (!selectedId) return;
    setConfirmAction({ type: 'resume' });
  }, [selectedId]);

  const handleConfirmResume = useCallback(() => {
    if (!selectedId) return;
    addSystemMessage(selectedId, `Общение возобновлено аналитиком ${CURRENT_ANALYST.name}`);
    setTickets(prev => prev.map(t =>
      t.id === selectedId
        ? { ...t, status: 'in_progress' as const, analystId: CURRENT_ANALYST.id, analystName: CURRENT_ANALYST.name }
        : t
    ));
    setConfirmAction(null);
    setToastMessage('Общение возобновлено');
  }, [selectedId, addSystemMessage]);

  const handleTakeTicket = useCallback(() => {
    if (!selectedId) return;
    setConfirmAction({ type: 'take' });
  }, [selectedId]);

  const handleConfirmTake = useCallback(() => {
    if (!selectedId) return;
    addSystemMessage(selectedId, `Тикет взят в работу аналитиком ${CURRENT_ANALYST.name}`);
    setTickets(prev => prev.map(t =>
      t.id === selectedId
        ? { ...t, status: 'in_progress' as const, analystId: CURRENT_ANALYST.id, analystName: CURRENT_ANALYST.name, unreadCount: 0 }
        : t
    ));
    setConfirmAction(null);
    setToastMessage('Тикет взят в работу');
  }, [selectedId, addSystemMessage]);

  // Notification handlers
  const handleNotificationSelect = useCallback((ticketId: string) => {
    setSelectedId(ticketId);
    setTickets(prev => prev.map(t => {
      if (t.id !== ticketId) return t;
      const shouldClearUnread = t.status !== 'open';
      return {
        ...t,
        unreadCount: shouldClearUnread ? 0 : t.unreadCount,
        messages: t.messages.map(m => m.fromClient && !m.read ? { ...m, read: true } : m),
      };
    }));
    setNotifications(prev => prev.map(n =>
      n.ticketId === ticketId ? { ...n, read: true } : n
    ));
  }, []);

  return (
    <div style={{
      height: '100vh', width: '100vw',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Inter', sans-serif",
      backgroundColor: 'var(--ds-bg-secondary)',
      color: 'var(--ds-text-primary)',
    }}>
      <RPHeader
        notifications={notifications}
        onToggleNotifications={() => setShowNotifications(prev => !prev)}
        showNotifications={showNotifications}
        onClearNotifications={() => setNotifications([])}
        onSelectTicket={handleNotificationSelect}
        onCloseNotifications={() => setShowNotifications(false)}
      />
      <div style={{ flex: 1, display: 'flex', minHeight: 0, overflow: 'hidden' }}>
        <TicketListSidebar tickets={visibleTickets} selectedId={selectedId} onSelect={handleSelect} />
        <ChatView
          ticket={selectedTicket}
          onTransferClick={() => setShowTransferModal(true)}
          onCloseTicket={handleCloseTicket}
          onTakeTicket={handleTakeTicket}
          onResumeTicket={handleResumeTicket}
          onSendMessage={handleSendMessage}
        />
        <ClientPanel
          ticket={selectedTicket}
          tickets={tickets}
          onSelectTicket={handleOpenInquiry}
        />
      </div>

      {showTransferModal && selectedTicket && (
        <TransferModal
          ticket={selectedTicket}
          onTransfer={handleTransfer}
          onClose={() => setShowTransferModal(false)}
        />
      )}

      {/* Confirmation dialog for "Взять в работу" */}
      <DSConfirmDialog
        open={confirmAction?.type === 'take' && !!selectedTicket}
        title="Взять тикет в работу?"
        message={selectedTicket ? `Тикет от клиента ${selectedTicket.client.name} будет назначен на вас` : ''}
        confirmLabel="Взять в работу"
        onConfirm={handleConfirmTake}
        onCancel={() => setConfirmAction(null)}
      />

      {/* Confirmation dialog for transfer */}
      <DSConfirmDialog
        open={confirmAction?.type === 'transfer' && !!selectedTicket}
        title="Передать тикет?"
        message={
          selectedTicket && confirmAction?.type === 'transfer'
            ? isTeamMember(confirmAction.analystId!)
              ? `Тикет от клиента ${selectedTicket.client.name} будет передан аналитику ${confirmAction.analystName}`
              : `Тикет от клиента ${selectedTicket.client.name} будет передан в другой отдел аналитику ${confirmAction.analystName}`
            : ''
        }
        confirmLabel="Передать"
        confirmColor={confirmAction?.type === 'transfer' && !isTeamMember(confirmAction.analystId!) ? '#EA3943' : undefined}
        onConfirm={handleConfirmTransfer}
        onCancel={() => setConfirmAction(null)}
      />

      {/* Confirmation dialog for closing ticket */}
      <DSConfirmDialog
        open={confirmAction?.type === 'close' && !!selectedTicket}
        title="Закрыть тикет?"
        message={<>После подтверждения тикет будет переведён<br />в статус &laquo;Закрыт&raquo;</>}
        confirmLabel="Закрыть"
        onConfirm={handleConfirmClose}
        onCancel={() => setConfirmAction(null)}
      />

      {/* Confirmation dialog for resuming ticket */}
      <DSConfirmDialog
        open={confirmAction?.type === 'resume' && !!selectedTicket}
        title="Возобновить общение?"
        message={selectedTicket ? `Тикет от клиента ${selectedTicket.client.name} будет переведён в статус «В работе»` : ''}
        confirmLabel="Возобновить"
        onConfirm={handleConfirmResume}
        onCancel={() => setConfirmAction(null)}
      />

      {/* Side sheet for inquiry preview */}
      {sideSheetTicket && (
        <InquirySideSheet
          ticket={sideSheetTicket}
          onClose={() => setSideSheetTicketId(null)}
        />
      )}

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* DS notification toasts (bottom-right) */}
      <ToastContainer />
    </div>
  );
}