import reactRefresh from "@vitejs/plugin-react-refresh";

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      output: {
        // manualChunks: {
        //   "worker.vendor": ["clsx"],
        // },
      },
    },
  },
};
