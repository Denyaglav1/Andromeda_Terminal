import { createTheme, type MantineColorsTuple, type CSSVariablesResolver } from '@mantine/core';

/* ═══════════════════════════════════════════════
   Andromeda-style Mantine Theme
   Maps DS Figma tokens → Mantine theme config
   ═══════════════════════════════════════════════ */

// DS color scales (0-9) → Mantine tuples (need exactly 10 shades)
const dark: MantineColorsTuple = [
  '#FFFFFF',   // 0 - white
  '#F8FAFE',   // 1
  '#E0E1E2',   // 2 - text primary (dark)
  '#C4C7C9',   // 3 - text secondary
  '#2A2E39',   // 4 - border primary
  '#191F2D',   // 5 - card bg / surface-alt
  '#131722',   // 6 - main bg
  '#10141D',   // 7 - deep bg
  '#0E1018',   // 8
  '#000000',   // 9 - full black
];

const blue: MantineColorsTuple = [
  '#E7EFFF',  // 0
  '#D0DEFF',  // 1
  '#B8CEFF',  // 2
  '#A1BDFF',  // 3
  '#89ADFF',  // 4
  '#729CFF',  // 5
  '#5A8CFF',  // 6 - primary accent
  '#3B66C9',  // 7
  '#2D406C',  // 8
  '#202A42',  // 9
];

const orange: MantineColorsTuple = [
  '#FEECE2',
  '#FDDAC6',
  '#FCC7A9',
  '#FBB58D',
  '#FAA270',
  '#F99054',
  '#F87D37',  // 6
  '#F7620D',  // 7
  '#5C3B30',
  '#30282E',
];

const yellow: MantineColorsTuple = [
  '#FEF7E0',
  '#FCEFC1',
  '#FBE7A2',
  '#FAE082',
  '#F9D863',
  '#F7D044',
  '#F6C825',  // 6
  '#E9B80A',  // 7
  '#5C522B',
  '#30302D',
];

const red: MantineColorsTuple = [
  '#FCE3E4',
  '#F9C6C9',
  '#F6AAAE',
  '#F38E94',
  '#F07279',
  '#ED555E',
  '#EA3943',  // 6
  '#CD2835',  // 7
  '#5B2635',
  '#2E2230',
];

const green: MantineColorsTuple = [
  '#DDFAEF',
  '#BAF4DE',
  '#98EFCE',
  '#75EABE',
  '#53E4AE',
  '#31DF9D',
  '#1FC989',  // 6
  '#1BAC75',  // 7
  '#1B5249',
  '#1A3037',
];

const turquoise: MantineColorsTuple = [
  '#E4F9F8',
  '#CAF2F1',
  '#AFECEA',
  '#95E6E3',
  '#7AE0DC',
  '#60D9D5',
  '#45D3CE',  // 6
  '#2EC2BD',  // 7
  '#27555E',
  '#1E313E',
];

const purple: MantineColorsTuple = [
  '#F1EFFF',
  '#E2DEFF',
  '#D4CEFF',
  '#C5BDFF',
  '#B7ADFF',
  '#A89CFF',
  '#9A8CFF',  // 6
  '#6854FF',  // 7
  '#40406C',
  '#262A42',
];

const gray: MantineColorsTuple = [
  '#E9ECF1',
  '#D4DAE3',
  '#BEC7D5',
  '#A8B4C6',
  '#92A1B8',
  '#7D8FAA',
  '#677C9C',  // 6
  '#586A86',  // 7
  '#313B4F',
  '#212839',
];

export const andromedaTheme = createTheme({
  /* Color palette */
  colors: {
    dark,
    blue,
    orange,
    yellow,
    red,
    green,
    turquoise,
    purple,
    gray,
  },

  primaryColor: 'blue',
  primaryShade: 6,
  defaultRadius: 'sm',
  cursorType: 'pointer',
  focusRing: 'auto',

  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontFamilyMonospace: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  headings: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '32px', lineHeight: '40px' },
      h2: { fontSize: '24px', lineHeight: '32px' },
      h3: { fontSize: '18px', lineHeight: '24px' },
      h4: { fontSize: '16px', lineHeight: '20px' },
      h5: { fontSize: '14px', lineHeight: '20px' },
      h6: { fontSize: '12px', lineHeight: '16px' },
    },
  },

  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },

  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '16px',
  },

  shadows: {
    xs: '0 1px 2px rgba(0,0,0,0.3)',
    sm: '0 2px 4px rgba(0,0,0,0.3)',
    md: '0 4px 12px rgba(0,0,0,0.4)',
    lg: '0 8px 24px rgba(0,0,0,0.5)',
    xl: '0 16px 48px rgba(0,0,0,0.6)',
  },

  /* Component-level overrides for Andromeda visual match */
  components: {
    Button: {
      defaultProps: {
        radius: 'sm',
      },
      styles: {
        root: {
          fontWeight: 500,
          transition: 'all 150ms ease',
        },
      },
    },
    Paper: {
      defaultProps: {
        radius: 'md',
      },
    },
    Modal: {
      defaultProps: {
        radius: 'md',
        centered: true,
        overlayProps: { backgroundOpacity: 0.65, blur: 4 },
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Select: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Tabs: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Tooltip: {
      defaultProps: {
        radius: 'sm',
        withArrow: true,
        arrowSize: 6,
      },
    },
    Switch: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Checkbox: {
      defaultProps: {
        radius: 'xs',
      },
    },
    SegmentedControl: {
      defaultProps: {
        radius: 'sm',
      },
    },
    ActionIcon: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Menu: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Notification: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});

/* CSS Variables Resolver — maps DS semantic tokens to Mantine CSS vars */
export const andromedaCSSResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    /* Primitive color scales — mapped to --mantine-color-* for Mantine internals */
  },
  light: {
    '--mantine-color-body': '#F8FAFE',
    '--mantine-color-text': '#131722',
  },
  dark: {
    '--mantine-color-body': theme.colors.dark[6],
    '--mantine-color-text': theme.colors.dark[2],
  },
});