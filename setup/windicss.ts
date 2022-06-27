import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
    'bg-barBottom': 'bg-purple-900 text-purple-50 dark:(bg-purple-900 text-purple-50)',
  },
  theme: {
    extend: {
      colors: {
        'maroon': '#500000'
      }
    }
  }
}))
