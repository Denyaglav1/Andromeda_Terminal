# SPEC: Tickets — Research Platform Chat System

## Overview
Ticket/chat system for analysts to respond to client inquiries. Clients submit questions about research publications or general market topics. Analysts manage, respond, transfer, and close tickets. The interface follows a light-theme "Research Platform" design, distinct from the main Andromeda-style dashboard.

## User Flow
1. Analyst lands on `/tickets` — sees their ticket list in the left sidebar
2. Selects a ticket — chat loads in center, client profile on right
3. **Open tickets** have no analyst assigned; analyst clicks «Взять в работу» → ticket becomes `in_progress`, current analyst is assigned
4. **In-progress tickets** allow messaging, transferring to another analyst, and closing
5. Can send messages, attach files, transfer to another analyst, or close the ticket
6. Filter tabs (All / In Progress / Open / Closed) narrow the list
7. Right sidebar shows client contact info + full history of all inquiries (own + linked tickets from other clients)

## Components

| Component | File | Purpose |
|---|---|---|
| `TicketsPage` | `/src/app/components/tickets/TicketsPage.tsx` | Main 3-column layout + all sub-components |
| `tickets-data.ts` | `/src/app/components/tickets/tickets-data.ts` | Types, mock data, helpers |

### Sub-components (inside TicketsPage.tsx)
- `RPHeader` — Research Platform top navigation bar with tabs
- `TicketListSidebar` — Left sidebar: analyst card, filter tabs, ticket list
- `TicketListItem` — Individual ticket in the list
- `ChatView` — Center: top bar (participants + actions), messages, input
- `MessageBubble` — Single chat message (client or analyst)
- `ClientPanel` — Right sidebar: client profile + inquiry history
- `InquiryCard` — Single inquiry card in client history
- `ClientAvatar` — Avatar component with initials fallback + analyst badge overlay
- `DSConfirmDialog` — DS component: centered confirmation dialog with title, message, cancel/confirm buttons (from `ds-confirm-dialog.tsx`)
- `InquirySideSheet` — Sliding side panel for viewing inquiry chat history
- `TransferModal` — Modal for selecting analyst to transfer ticket to
- `Toast` — Temporary notification
- `MessageContextMenu` — Right-click context menu for messages (Reply, Copy text)
- `ReplyQuote` — Quoted reply block inside message bubbles
- SVG icon components: `DocumentIcon`, `ChatIcon`, `SearchIcon`, `SendIcon`, etc.

## State Management
- `selectedId` — which ticket is currently selected (useState in TicketsPage)
- `tickets` — mutable ticket array allowing transfer and close operations (useState in TicketsPage)
- `filter` — current filter tab (useState in TicketListSidebar)
- `inputValue` — chat input text (useState in ChatView)
- `messages` — local copy of messages allowing new ones to be added (useState in ChatView)
- `pendingAttachments` — files queued for sending (useState in ChatView)
- `replyTo` — message being replied to, or null (useState in ChatView)
- `contextMenu` — right-click context menu state: `{ x, y, message }` or null (useState in ChatView)
- `showTransferModal` — transfer modal visibility (useState in TicketsPage)
- `toastMessage` — toast notification text (useState in TicketsPage)
- `sideSheetTicketId` — ticket ID for the inquiry side sheet overlay (useState in TicketsPage)
- `confirmAction` — confirmation dialog state: `{ type: 'take' | 'transfer' | 'close' | 'resume', analystId?, analystName? }` (useState in TicketsPage)
- `notifications` — array of `NotificationItem` (new tickets, new messages) (useState in TicketsPage)
- `showNotifications` — notification panel visibility (useState in TicketsPage)
- `selectedIdRef` — ref tracking current selectedId for use in setTimeout callbacks (useRef in TicketsPage)

## Routes

| Path | Component |
|---|---|
| `/tickets` | `TicketsPage` |

Also added as a service card on the Landing Page (`/`).

## Data

| File | Contents |
|---|---|
| `tickets-data.ts` | `TICKETS` array (14 tickets), `CLIENTS` array, `CURRENT_ANALYST`, `STATUS_CONFIG`, `AVAILABLE_ANALYSTS`, `KHALIN_TEAM_IDS`, `isTeamMember()`, `getTeamVisibleTickets()`, `getClientInquiries()` |

### Ticket statuses
- `open` (blue `#5A8CFF`) — new, not yet taken
- `in_progress` (green `#1FC989`) — analyst is working on it
- `closed` (gray `#677C9C`) — resolved

### Ticket types
- `publication` — tied to a research publication (document icon)
- `question` — general client question (chat icon)

### Data dependencies
- Analyst avatars from `/src/app/components/home/data/analyst-avatars.ts` (getAnalystAvatar)
- Client avatars from Figma assets (imported in tickets-data.ts)
- SVG icon paths from `/src/imports/svg-287feuz4s7.ts`

## Design Tokens
- Theme-aware via `var(--ds-*)` CSS variables (supports both light and dark themes automatically)
- Background: `var(--ds-bg-primary)` (main), `var(--ds-bg-secondary)` (cards/panels)
- Text: `var(--ds-text-primary)`, `var(--ds-text-secondary)`, `var(--ds-text-gray-dark)`
- Borders: `var(--ds-border-primary)`
- Controls: `var(--ds-blue-6-a10)` (hover), `var(--ds-blue-6-a30)` (active/selected)
- Status colors: `#5A8CFF` (open), `#1FC989` (in progress), `#677C9C` (closed)
- Analyst message bubble: `var(--ds-blue-7)` (#3B66C9)
- Client message bubble: `var(--ds-bg-secondary)` with shadow
- Font: Inter (300, 400, 500, 600)

### Features
- **Dark theme**: All colors use `--ds-*` CSS variables that auto-switch with `data-mantine-color-scheme`
- **Transfer tickets**: Modal with analyst list, search, click to reassign. Confirmation dialog before transfer. Toast confirmation.
- **File/image upload**: Click link/photo icons to attach files. Preview before sending. Images render inline in bubbles, documents show as links.
- **Team structure**: Khalin (senior analyst) leads a team with Salkovskiy and Mosin (junior analysts). Tickets transferred to analysts outside the team disappear from the team's ticket list.
- **Confirmation dialogs**: "Взять в работу", "Передать", "Закрыть тикет", and "Возобновить общение" actions all show `DSConfirmDialog` confirmation popups (centered Figma-style design) before executing. External team transfers show a warning that the ticket will leave the department.
- **Message persistence**: New messages sent by the analyst are synced to the parent `tickets` state via `onSendMessage` callback. This ensures chat history is preserved when switching between tickets or closing a ticket. The `lastMessagePreview`, `lastMessageFromAnalyst`, and `lastMessageTime` fields are also updated.
- **Resume closed tickets**: Closed tickets show a "Возобновить общение" button both in the top bar (compact) and in the chat footer (prominent). Clicking it triggers a `DSConfirmDialog` and on confirmation changes the ticket status back to `in_progress` with the current analyst assigned.
- **Scrollable filter tabs**: Filter status tabs (`whiteSpace: 'nowrap'`, `flexShrink: 0`, `overflowX: 'auto'`) prevent text wrapping on "В работе" and support horizontal scrolling when space is insufficient.
- **Inquiry side sheet**: Clicking an inquiry in the right sidebar opens a sliding panel from the right with smooth animation, showing the full chat history of that ticket.
- **Ticket selection**: Only the selected ticket has a highlighted background (`var(--ds-blue-6-a10)`). Unread tickets are indicated solely by the blue unread count badge — no background tint — to avoid visual confusion with the selected ticket.
- **Ticket search**: Clicking the search icon in the sidebar header replaces "Мои тикеты" title with a `DSInput` (size `sm`, leftIcon = search icon) + close button. Searches by client name (first/last), message text, and topic title. Empty results show "Ничего не найдено" placeholder. Closing search clears the query and restores the header.
- **Filter tab counters**: Red notification dots on filter tabs persist even when the tab is active.
- **System messages**: Actions (take, close, resume, transfer) generate centered system messages in the chat with clock icon + timestamp. Uses `createSystemMessage()` from `tickets-data.ts`. Rendered by `SystemMessageBubble` component.
- **Message read status**: Analyst (outgoing) messages show single checkmark (sent, not read) or double blue checkmark (read by client). Client messages get `read: true` when the ticket is selected. Auto-replies mark all previous analyst messages as read.
- **Auto-reply from clients**: 2-3 seconds after analyst sends a message, client auto-replies with a random template from `CLIENT_AUTO_REPLIES`. Only for `in_progress` tickets. Marks analyst messages as read and increments unreadCount if ticket is not currently selected.
- **New ticket notifications**: Every 40 seconds, a new `open` ticket is generated from `INCOMING_TICKET_TEMPLATES` (Materials sector only — matching the analyst's specialization) with a random client. Appears in the ticket list and triggers a notification.
- **Notification bell** (in header): Shows unread count badge. Opens `NotificationPanel` dropdown with list of notifications (new tickets, new messages). Click on notification navigates to the ticket. "Очистить все" clears all notifications. Max 50 notifications stored (`MAX_NOTIFICATIONS`).
- **Sound notifications**: Web Audio API plays ascending two-tone beep (600→800Hz) for new tickets and single soft beep (880Hz) for new messages. Gracefully fails if AudioContext unavailable.
- **DS toast notifications**: Uses `notify.info()` for new tickets and `notify.success()` for new messages from the DS `Notification` component (`/src/app/components/ui/notification.tsx`). `ToastContainer` renders top-right. Auto-dismiss: 3s for tickets, 2.5s for messages.
- **Animated ticket list**: New tickets appear with smooth `motion.div` animation (opacity 0→1, height 0→auto, 350ms cubic-bezier). Uses `AnimatePresence` from `motion/react` for enter/exit transitions.
- **New ticket interval**: 40 seconds (configurable in `setInterval`).
- **Telegram-style message bubbles**: Compact bubbles with 12px border-radius, tail on bottom corner (4px on sender side). Outgoing (analyst) = `var(--ds-blue-7)`, incoming (client) = `var(--ds-bg-secondary)`. Inline floating time + read checks at bottom-right inside the text block. Gap between messages reduced to 4px for conversation density.
- **Reply to message**: Right-click on any message opens a context menu with "Ответить" and "Копировать текст" options. Selecting "Ответить" shows a reply preview bar above the input area with sender name, quoted text excerpt, and close button. The sent message includes a `replyTo` object rendered as a `ReplyQuote` inside the bubble (left-bordered quote with sender name and truncated text).
- **TicketMessage.replyTo**: Optional field `{ id, text, senderName, fromClient }` — stores the quoted message reference. Text is truncated to 120 chars when sending.

## Edge Cases
- No ticket selected: center shows "Выберите тикет для просмотра" placeholder
- Empty messages: shows empty chat area
- Closed tickets: displayed at 50% opacity below a "Закрытые N" separator
- **Open tickets**: no analyst avatar in top bar, "Аналитик: Не назначен" (italic), footer shows "Возьмите тикет в работу, чтобы начать переписку" text + "Взять в работу" button (duplicated from top bar, same as "Возобновить общение" pattern for closed tickets), input hidden
- **In-progress tickets**: full chat UI with input, "Передать" and "Закрыть тикет" buttons
- **Closed tickets**: footer shows "Тикет закрыт. Отправка сообщений недоступна." text + "Возобновить общение" button, input hidden, "Закрыт" badge + "Возобновить" button in top bar. Chat history is preserved (messages synced to parent state).
- Long topic titles: truncated with ellipsis
- Long client names: truncated with ellipsis
- Chat messages: support multi-line text (white-space: pre-wrap)
- Message input: sends on Enter key