import { defineConfig, sharpImageService } from 'astro/config'
import sassGlobImport from 'vite-plugin-sass-glob-import'
import icons from 'astro-svg'

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  compressHTML: false,
  output: 'static',
  publicDir: './public',
  build: {
    assets: 'assets',
    format: 'file', // вытаскивает вложенные страницы в корень src/pages/subpage/subpage.html => dist/subpage.html
    inlineStylesheets: 'never' // запрещает инлайн стилей
  },
  image: {
    service: sharpImageService()
  },
  integrations: [icons({ input: 'src/shared/icons' })],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    resolve: {
      alias: {
        '@': '/src',
        '@styles': '/src/shared/styles'
      }
    },
    build: {
      assetsInlineLimit: 0, // запрещает инлайн скриптов. по дефолту инлайнит скрипты в html
      cssCodeSplit: false, // css в один файл
      rollupOptions: {
        output: {
          entryFileNames: 'assets/scripts.js',
          assetFileNames: (assetInfo) => {
            if (!assetInfo.names) return ''

            console.log(assetInfo.names[0])

            return assetInfo.names[0] === 'style.css'
              ? `assets/${assetInfo.names[0]}` // задается имя и папка (корень) для css
              : `assets/images/${assetInfo.names[0]}` // задается имя и папка картинкам
          }
        }
      }
    },
    plugins: [sassGlobImport()]
  }
})
