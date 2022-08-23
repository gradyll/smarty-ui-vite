import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
}


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: true,
    brotliSize: true, 
    lib: {
      entry: './src/entry.ts',
      name: "SmartyUI",
      fileName: 'smarty-ui',
      formats: ["esm", "umd", "iife"]
    }
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})