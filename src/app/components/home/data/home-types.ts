/* ═══════════════════════════════════════
   Home Page — Shared Types
   ═══════════════════════════════════════ */

/** News source provider */
export type NewsSourceType = 'euler' | 'interfax' | 'rbc' | 'tass' | 'kommersant';

/** Analyst avatar entry */
export interface AnalystAvatar {
  /** Unique analyst id (transliterated last name, lowercase) */
  id: string;
  /** Full name in Russian */
  name: string;
  /** Company / broker */
  company: string;
  /** Imported PNG asset (128×128 px) */
  src: string;
}