// vite.config.js
import { defineConfig } from "file:///C:/Users/giove/OneDrive/Documenti/Nuova%20cartella/Desktop/Nuova%20cartella/comanda1/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/Users/giove/OneDrive/Documenti/Nuova%20cartella/Desktop/Nuova%20cartella/comanda1/node_modules/laravel-vite-plugin/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel([
      "esources/css/app.css",
      {
        scss: {
          enabled: true,
          files: ["resources/scss/app.scss"]
        }
      }
    ])
  ],
  build: {
    mode: "production",
    css: {
      // Enable CSS optimization and compression
      optimize: true,
      // Include CSS files in the production build
      output: "css/[name].css"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnaW92ZVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudGlcXFxcTnVvdmEgY2FydGVsbGFcXFxcRGVza3RvcFxcXFxOdW92YSBjYXJ0ZWxsYVxcXFxjb21hbmRhMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZ2lvdmVcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRpXFxcXE51b3ZhIGNhcnRlbGxhXFxcXERlc2t0b3BcXFxcTnVvdmEgY2FydGVsbGFcXFxcY29tYW5kYTFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2dpb3ZlL09uZURyaXZlL0RvY3VtZW50aS9OdW92YSUyMGNhcnRlbGxhL0Rlc2t0b3AvTnVvdmElMjBjYXJ0ZWxsYS9jb21hbmRhMS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGxhcmF2ZWwgZnJvbSAnbGFyYXZlbC12aXRlLXBsdWdpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKFtcbiAgICAgICAgICAgICdlc291cmNlcy9jc3MvYXBwLmNzcycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2Nzczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWxlczogWydyZXNvdXJjZXMvc2Nzcy9hcHAuc2NzcyddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG1vZGU6ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAvLyBFbmFibGUgQ1NTIG9wdGltaXphdGlvbiBhbmQgY29tcHJlc3Npb25cbiAgICAgICAgICAgIG9wdGltaXplOiB0cnVlLFxuICAgICAgICAgICAgLy8gSW5jbHVkZSBDU1MgZmlsZXMgaW4gdGhlIHByb2R1Y3Rpb24gYnVpbGRcbiAgICAgICAgICAgIG91dHB1dDogJ2Nzcy9bbmFtZV0uY3NzJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF3YixTQUFTLG9CQUFvQjtBQUNyZCxPQUFPLGFBQWE7QUFFcEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsUUFDSSxNQUFNO0FBQUEsVUFDRixTQUFTO0FBQUEsVUFDVCxPQUFPLENBQUMseUJBQXlCO0FBQUEsUUFDckM7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsTUFFRCxVQUFVO0FBQUE7QUFBQSxNQUVWLFFBQVE7QUFBQSxJQUNaO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
