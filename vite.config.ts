import { fileURLToPath, URL } from 'node:url'

import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueRouter(),
    Vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', '@vueuse/core', VueRouterAutoImports, {
        '@vue/apollo-composable': ['useQuery'],
      }],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['src/composables'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue'],
      deep: true,
      dts: 'src/types/auto-components.d.ts',
      directoryAsNamespace: false,
      directives: true,
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Icon'))
            return { name: componentName, from: '@iconify/vue' }
        },
      ],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/node_modules/, /\.git/],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
