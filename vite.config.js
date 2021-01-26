import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
	css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
  plugins: [vue()]
}
