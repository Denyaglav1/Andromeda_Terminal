/* ═══════════════════════════════════════════════════════
   Analyst Avatars Database — Single Source of Truth
   PNG 128×128 px, imported from Figma (square, pre-cropped)

   Usage:
     import { ANALYST_AVATARS, getAnalystAvatar } from './data/analyst-avatars';
     const avatar = getAnalystAvatar('mikhaylova');   // by id
     const avatar2 = getAnalystByName('Михайлова Лидия'); // by full name

   NOTE: Images are square PNGs. Rounding to circle is done
   via CSS `border-radius: 50%` at the point of use.
   ═══════════════════════════════════════════════════════ */

import type { AnalystAvatar } from './home-types';

/* ── PNG imports (figma:asset, 128×128 px, square) ── */
import imgBerishev from "figma:asset/08e99bf020c8ff5a0d0ffc8c3783d91d8fc9bd04.png";
import imgMikhaylova from "figma:asset/c2a72cb8c1bcf5ae6856ab5edc071a67b1e8c665.png";
import imgMaremukova from "figma:asset/8d3c1f18b0466643b2282e3938ddb6c4276a8cf9.png";
import imgPolischuk from "figma:asset/b7a0fdf55dc81799c6dae00f07fbeda4e679ec37.png";
import imgAkhmedova from "figma:asset/9d1ca82af473f0dbab9ab4790fded2523af4ebea.png";
import imgKhalin from "figma:asset/17441957e65235f62dbe057a25513062a9df9b0e.png";
import imgMikheev from "figma:asset/1a719b37ddc85b7c160d4e47b5857f0d95a16ae7.png";
import imgBozhenko from "figma:asset/38b1f39f244c66ac1b51458c139e547a9f0dc13b.png";
import imgAslanova from "figma:asset/7d3e7b9efdf202dc268e4d77cbb7c3e3f1b1ad44.png";
import imgPaninaPo from "figma:asset/1dad69a4bfb7d1a5f797e813a89de6b12d0a209d.png";
import imgBaklanova from "figma:asset/e22c2722adff8477911fd2aa97920c8da418dfae.png";
import imgPolyutov from "figma:asset/8c09b0bd1632065a64601bfede7063d6ede4e8d6.png";
import imgKovalev from "figma:asset/d53e98e55e409bbf59729d831941adac8429b5e4.png";
import imgMosin from "figma:asset/68f5a6ad72aadd0d0e37c88f14ef1f5131a4af60.png";
import imgGrishin from "figma:asset/55574bd5c340e899badcbe9405f15420d48a40df.png";
import imgKerr from "figma:asset/bfb177126482c707c232c9940b507e5b986443b4.png";
import imgKorovin from "figma:asset/a393139ffdea236accb7d6c25f67760394f03403.png";
import imgSolovkin from "figma:asset/9f36a3fa4a8a1ebca303031376422d3b31ce29de.png";
import imgKolbina from "figma:asset/5d6641cc73d8e4fe9c0d6e76a9178f1c3e402144.png";
import imgNaumov from "figma:asset/e8e419926715d84a65abbaeb1bbeac96317ee386.png";
import imgSazonov from "figma:asset/7f95f8e4a749b315f738734d84b8770afa735c12.png";
import imgPostolit from "figma:asset/9883feeb3248d77539434da058e25ca400d890b6.png";
import imgNikiforova from "figma:asset/1dbd53aa6b5b7211d02c1450d1cc7a92b270419e.png";
import imgSalkovskiy from "figma:asset/683debc315324f5757a861aefa9b4f5e2ef602b0.png";
import imgUrakova from "figma:asset/3e9140639a72e1751509e013c60731218e89bdb1.png";
import imgBespalov from "figma:asset/5c0ebf6927540f6f46c88c28326e69025dce0180.png";
import imgFranke from "figma:asset/c897cdf0e7267a93bd499a411debb948790a49a3.png";
import imgRostovskiy from "figma:asset/d4787733a724db3b811c56c9b0e4558d1b6bfd5e.png";
import imgMakarov from "figma:asset/70de6b86c5e971d0fa119f91442892cb5af15afa.png";
import imgYakovleva from "figma:asset/7c4e1a8a0be9a6442b987751e0136bd50e751d7e.png";
import imgUsenkova from "figma:asset/15fa4f431a26dde3b697bdc7f2c1e1dbd16a3a57.png";
import imgShcheglova from "figma:asset/a580566de8b835b1be0f554f90e6f67a17cf5f6c.png";
import imgAstrelina from "figma:asset/4e06b0e4e24f02bcfd7c4a8c094993c654b71b29.png";
import imgPaninaPl from "figma:asset/8dabb5804ab048b5cf56eec62330cc71bbb41bcd.png";
import imgDortsev from "figma:asset/a42b1b3a3d3830dad3822ebdee49315f0e780085.png";
import imgKabisova from "figma:asset/1fb6d7a51194243a20a88ce3110f700aef11795c.png";

/* ═══════ ANALYST AVATARS REGISTRY ═══════ */

export const ANALYST_AVATARS: AnalystAvatar[] = [
  // ── 0 ──
  { id: 'berishev',     name: 'Беришев Марат',                     company: 'Эйлер', src: imgBerishev },
  // ── 1 ──
  { id: 'mikhaylova',   name: 'Михайлова Лидия',                   company: 'Эйлер', src: imgMikhaylova },
  // ── 2 ──
  { id: 'maremukova',   name: 'Маремукова Маргарита',              company: 'Эйлер', src: imgMaremukova },
  // ── 3 ──
  { id: 'polischuk',    name: 'Полищук Андрей',                    company: 'Эйлер', src: imgPolischuk },
  // ── 4 ──
  { id: 'akhmedova',    name: 'Ахмедова Елена',                    company: 'Эйлер', src: imgAkhmedova },
  // ── 5 ──
  { id: 'khalin',       name: 'Халин Никанор',                     company: 'Эйлер', src: imgKhalin },
  // ── 6 ──
  { id: 'mikheev',      name: 'Михеев Николай',                    company: 'Эйлер', src: imgMikheev },
  // ── 7 ──
  { id: 'bozhenko',     name: 'Боженко Станислав',                 company: 'Эйлер', src: imgBozhenko },
  // ── 8 ──
  { id: 'aslanova',     name: 'Асланова Светлана',                 company: 'Эйлер', src: imgAslanova },
  // ── 9 ──
  { id: 'panina_po',    name: 'Панина Полина',                     company: 'Эйлер', src: imgPaninaPo },
  // ── 10 ──
  { id: 'baklanova',    name: 'Бакланова Елена',                   company: 'Эйлер', src: imgBaklanova },
  // ── 11 ──
  { id: 'polyutov',     name: 'Полютов Александр',                 company: 'Эйлер', src: imgPolyutov },
  // ── 12 ──
  { id: 'kovalev',      name: 'Ковалев Николай',                   company: 'Эйлер', src: imgKovalev },
  // ── 13 ──
  { id: 'mosin',        name: 'Мосин Александр',                   company: 'Эйлер', src: imgMosin },
  // ── 14 ──
  { id: 'grishin',      name: 'Гришин Петр',                       company: 'Эйлер', src: imgGrishin },
  // ── 15 ──
  { id: 'kerr',         name: 'Керр Беннетт',                      company: 'Эйлер', src: imgKerr },
  // ── 16 ──
  { id: 'korovin',      name: 'Коровин Максим',                    company: 'Эйлер', src: imgKorovin },
  // ── 17 ──
  { id: 'solovkin',     name: 'Соловкин Антон',                    company: 'Эйлер', src: imgSolovkin },
  // ── 18 ──
  { id: 'kolbina',      name: 'Колбина Мария',                     company: 'Эйлер', src: imgKolbina },
  // ── 19 ──
  { id: 'naumov',       name: 'Наумов Виталий',                    company: 'Эйлер', src: imgNaumov },
  // ── 20 ──
  { id: 'sazonov',      name: 'Сазонов Виталий',                   company: 'Эйлер', src: imgSazonov },
  // ── 21 ──
  { id: 'postolit',     name: 'Постолит Егор',                     company: 'Эйлер', src: imgPostolit },
  // ── 22 ──
  { id: 'nikiforova',   name: 'Никифорова Александра',             company: 'Эйлер', src: imgNikiforova },
  // ── 23 ──
  { id: 'salkovskiy',   name: 'Сальковский Иван',                 company: 'Эйлер', src: imgSalkovskiy },
  // ── 24 ──
  { id: 'urakova',      name: 'Уракова Екатерина',                company: 'Эйлер', src: imgUrakova },
  // ── 25 ──
  { id: 'bespalov',     name: 'Беспалов Владимир',                company: 'Эйлер', src: imgBespalov },
  // ── 26 ──
  { id: 'franke',       name: 'Франке Евгения',                   company: 'Эйлер', src: imgFranke },
  // ── 27 ──
  { id: 'rostovskiy',   name: 'Ростовский Йоханнес-Корнелиус',    company: 'Эйлер', src: imgRostovskiy },
  // ── 28 ──
  { id: 'makarov',      name: 'Макаров Олег',                      company: 'Эйлер', src: imgMakarov },
  // ── 29 ──
  { id: 'yakovleva',    name: 'Яковлева Маргарита',               company: 'Эйлер', src: imgYakovleva },
  // ── 30 ──
  { id: 'usenkova',     name: 'Усенкова Елизавета',               company: 'Эйлер', src: imgUsenkova },
  // ── 31 ──
  { id: 'shcheglova',   name: 'Щеглова Мария',                    company: 'Эйлер', src: imgShcheglova },
  // ── 32 ──
  { id: 'astrelina',    name: 'Астрелина Софья',                   company: 'Эйлер', src: imgAstrelina },
  // ── 33 ──
  { id: 'panina_pl',    name: 'Панина Полина',                     company: 'Эйлер', src: imgPaninaPl },
  // ── 34 ──
  { id: 'dortsev',      name: 'Дорцев Кирилл',                    company: 'Эйлер', src: imgDortsev },
  // ── 35 ──
  { id: 'kabisova',     name: 'Кабисова Арина',                   company: 'Эйлер', src: imgKabisova },
];

/* ═══════ HELPER FUNCTIONS ═══════ */

/** Map: id → AnalystAvatar (lazy-initialized) */
let _byIdMap: Map<string, AnalystAvatar> | null = null;
function getByIdMap(): Map<string, AnalystAvatar> {
  if (!_byIdMap) {
    _byIdMap = new Map(ANALYST_AVATARS.map(a => [a.id, a]));
  }
  return _byIdMap;
}

/** Get avatar by id (e.g. 'mikhaylova') */
export function getAnalystAvatar(id: string): AnalystAvatar | undefined {
  return getByIdMap().get(id);
}

/** Get avatar by array index (backward-compatible with avatarIndex) */
export function getAnalystAvatarByIndex(index: number): AnalystAvatar | undefined {
  return ANALYST_AVATARS[index];
}

/** Get avatar by full name (e.g. 'Михайлова Лидия') */
export function getAnalystByName(name: string): AnalystAvatar | undefined {
  return ANALYST_AVATARS.find(a => a.name === name);
}

/** Get avatar src by index — quick helper for img tags */
export function getAvatarSrc(index: number): string | undefined {
  return ANALYST_AVATARS[index]?.src;
}

/** Total number of available avatars */
export const ANALYST_AVATARS_COUNT = ANALYST_AVATARS.length;
