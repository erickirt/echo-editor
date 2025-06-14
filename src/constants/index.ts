/** Default lang */
export const DEFAULT_LANG_VALUE = 'zhHans' as const

/** Throttle time for editor input (milliseconds) */
export const EDITOR_UPDATE_THROTTLE_WAIT_TIME = 200 as const

/**
 * watch throttling time must be less than the update time
 * otherwise the cursor position will reach the end
 */
export const EDITOR_UPDATE_WATCH_THROTTLE_WAIT_TIME = EDITOR_UPDATE_THROTTLE_WAIT_TIME - 80

/** Minimum size for image adjustments */
export const IMAGE_MIN_SIZE = 20 as const
/** Maximum size for image adjustments */
export const IMAGE_MAX_SIZE = 100000 as const
/** Throttle time during adjustments for images (milliseconds) */
export const IMAGE_THROTTLE_WAIT_TIME = 16 as const

/** Default number of rows and columns for grids when creating a table */
export const TABLE_INIT_GRID_SIZE = 10 as const
/** Maximum number of rows and columns for grids when creating a table */
export const TABLE_MAX_GRID_SIZE = 10 as const
/** Minimum number of rows and columns for grids when creating a table */
export const TABLE_DEFAULT_SELECTED_GRID_SIZE = 2 as const

export const DEFAULT_COLOR = '#262626'
/** Default color list for text color and text highlight */
export const COLORS_LIST = [
  '#000000',
  '#262626',
  '#595959',
  '#8C8C8C',
  '#BFBFBF',
  '#D9D9D9',
  '#E9E9E9',
  '#F5F5F5',
  '#FAFAFA',
  '#FFFFFF',
  '#F5222D',
  '#FA541C',
  '#FA8C16',
  '#FADB14',
  '#52C41A',
  '#13C2C2',
  '#1890FF',
  '#2F54EB',
  '#722ED1',
  '#EB2F96',
  '#FFE8E6',
  '#FFECE0',
  '#FFEFD1',
  '#FCFCCA',
  '#E4F7D2',
  '#D3F5F0',
  '#D4EEFC',
  '#DEE8FC',
  '#EFE1FA',
  '#FAE1EB',
  '#FFA39E',
  '#FFBB96',
  '#FFD591',
  '#FFFB8F',
  '#B7EB8F',
  '#87E8DE',
  '#91D5FF',
  '#ADC6FF',
  '#D3ADF7',
  '#FFADD2',
  '#FF4D4F',
  '#FF7A45',
  '#FFA940',
  '#FFEC3D',
  '#73D13D',
  '#36CFC9',
  '#40A9FF',
  '#597EF7',
  '#9254DE',
  '#F759AB',
  '#CF1322',
  '#D4380D',
  '#D46B08',
  '#D4B106',
  '#389E0D',
  '#08979C',
  '#096DD9',
  '#1D39C4',
  '#531DAB',
  '#C41D7F',
  '#820014',
  '#871400',
  '#873800',
  '#614700',
  '#135200',
  '#00474F',
  '#003A8C',
  '#061178',
  '#22075E',
  '#780650',
] as const

/** Default font size list */
export const DEFAULT_FONT_SIZE_LIST = [
  '10px',
  '11px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '26px',
  '28px',
  '36px',
  '48px',
  '72px',
] as const

/** Default font size value */
export const DEFAULT_FONT_SIZE_VALUE = 'defaut' as const

/** Options for setting video size in the bubble menu */
export enum VIDEO_SIZE {
  'size-small' = 480,
  'size-medium' = 640,
  'size-large' = '100%',
}

export const LINE_HEIGHT_100 = 1.7
export const DEFAULT_LINE_HEIGHT = '1'

/** display in menus */
export const NODE_TYPE_MENU: any = {
  text: [
    'AI',
    'divider',
    'text-bubble',
    'divider',
    'bold',
    'italic',
    'underline',
    'strike',
    'code',
    'link',
    'divider',
    'color',
    'highlight',
    'textAlign',
  ],
  video: ['video-size-small', 'video-size-medium', 'video-size-large', 'divider', 'remove'],
}

const DEFAULT_FONT_FAMILY_NAMES = [
  'Arial',
  'Arial Black',
  'Georgia',
  'Impact',
  'Tahoma',
  'Times New Roman',
  'Verdana',
  'Courier New',
  'Lucida Console',
  'Monaco',
  'monospace',
]

export const DEFAULT_FONT_FAMILY_MAP = DEFAULT_FONT_FAMILY_NAMES.reduce(
  (obj: { [key: string]: string }, type: string) => {
    obj[type] = type
    return obj
  },
  {}
)

// 主题色定义
export type Theme = 'zinc' | 'slate' | 'stone' | 'gray' | 'neutral' | 'red' | 'rose' | 'orange' | 'green' | 'blue' | 'yellow' | 'violet'

export interface ThemeOption {
  name: Theme
  label: string
  light: {
    primary: string
    primaryForeground: string
  },
  activeColor: {
    light: string
    dark: string
  },
  dark: {
    primary: string
    primaryForeground: string
  }
}

export const THEMES: ThemeOption[] = [
  {
    name: 'zinc',
    label: '锌灰',
    activeColor: {
      light: '240 5.9% 10%',
      dark: '240 5.2% 33.9%',
    },
    light: {
      primary: '240 5.9% 10%',
      primaryForeground: '0 0% 98%',
    },
    dark: {
      primary: '0 0% 98%',
      primaryForeground: '240 5.9% 10%',
    },
  },
  {
    name: 'slate',
    label: '石板',
    activeColor: {
      light: '215.4 16.3% 46.9%',
      dark: '215.3 19.3% 34.5%',
    },
    light: {
      primary: '215.4 16.3% 46.9%',
      primaryForeground: '210 40% 98%',
    },
    dark: {
      primary: '210 40% 98%',
      primaryForeground: '215.4 16.3% 46.9%',
    },
  },
  {
    name: 'stone',
    label: '石头',
    activeColor: {
      light: '25 5.3% 44.7%',
      dark: '33.3 5.5% 32.4%',
    },
    light: {
      primary: '25 5.3% 44.7%',
      primaryForeground: '60 9.1% 97.8%',
    },
    dark: {
      primary: '60 9.1% 97.8%',
      primaryForeground: '25 5.3% 44.7%',
    },
  },
  {
    name: 'gray',
    label: '灰色',
    activeColor: {
      light: '220 8.9% 46.1%',
      dark: '215 13.8% 34.1%',
    },
    light: {
      primary: '220 8.9% 46.1%',
      primaryForeground: '210 40% 98%',
    },
    dark: {
      primary: '210 40% 98%',
      primaryForeground: '220 8.9% 46.1%',
    },
  },
  {
    name: 'neutral',
    label: '中性',
    activeColor: {
      light: '0 0% 45.1%',
      dark: '0 0% 32.2%',
    },
    light: {
      primary: '0 0% 9%',
      primaryForeground: '0 0% 98%',
    },
    dark: {
      primary: '0 0% 98%',
      primaryForeground: '0 0% 9%',
    },
  },
  {
    name: 'red',
    label: '红色',
    activeColor: {
      light: '0 72.2% 50.6%',
      dark: '0 72.2% 50.6%',
    },
    light: {
      primary: '0 84.2% 60.2%',
      primaryForeground: '0 0% 98%',
    },
    dark: {
      primary: '0 84.2% 60.2%',
      primaryForeground: '0 0% 98%',
    },
  },
  {
    name: 'rose',
    label: '玫瑰',
    activeColor: {
      light: '346.8 77.2% 49.8%',
      dark: '346.8 77.2% 49.8%',
    },
    light: {
      primary: '346.8 77.2% 49.8%',
      primaryForeground: '355.7 100% 97.3%',
    },
    dark: {
      primary: '346.8 77.2% 49.8%',
      primaryForeground: '355.7 100% 97.3%',
    },
  },
  {
    name: 'orange',
    label: '橙色',
    activeColor: {
      light: '24.6 95% 53.1%',
      dark: '20.5 90.2% 48.2%',
    },
    light: {
      primary: '24.6 95% 53.1%',
      primaryForeground: '60 9.1% 97.8%',
    },
    dark: {
      primary: '20.5 90.2% 48.2%',
      primaryForeground: '60 9.1% 97.8%',
    },
  },
  {
    name: 'green',
    label: '绿色',
    activeColor: {
      light: '142.1 76.2% 36.3%',
      dark: '142.1 70.6% 45.3%',
    },
    light: {
      primary: '142.1 76.2% 36.3%',
      primaryForeground: '355.7 100% 97.3%',
    },
    dark: {
      primary: '142.1 70.6% 45.3%',
      primaryForeground: '144.9 80.4% 10%',
    },
  },
  {
    name: 'blue',
    label: '蓝色',
    activeColor: {
      light: '221.2 83.2% 53.3%',
      dark: '217.2 91.2% 59.8%',
    },
    light: {
      primary: '221.2 83.2% 53.3%',
      primaryForeground: '210 40% 98%',
    },
    dark: {
      primary: '217.2 91.2% 59.8%',
      primaryForeground: '222.2 84% 4.9%',
    },
  },
  {
    name: 'yellow',
    label: '黄色',
    activeColor: {
      light: '47.9 95.8% 53.1%',
      dark: '47.9 95.8% 53.1%',
    },
    light: {
      primary: '47.9 95.8% 53.1%',
      primaryForeground: '26 83.3% 14.1%',
    },
    dark: {
      primary: '47.9 95.8% 53.1%',
      primaryForeground: '26 83.3% 14.1%',
    },
  },
  {
    name: 'violet',
    label: '紫罗兰',
    activeColor: {
      light: '262.1 83.3% 57.8%',
      dark: '263.4 70% 50.4%',
    },
    light: {
      primary: '262.1 83.3% 57.8%',
      primaryForeground: '210 40% 98%',
    },
    dark: {
      primary: '263.4 70% 50.4%',
      primaryForeground: '210 40% 98%',
    },
  },

]

export const DEFAULT_THEME: Theme = 'zinc'

// Border Radius
export type BorderRadius = 0 | 0.25 | 0.5 | 0.75 | 1

export const BORDER_RADIUS = [0, 0.25, 0.5, 0.75, 1]

export const DEFAULT_BORDER_RADIUS = 0.5
