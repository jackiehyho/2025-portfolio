// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
      },
    integrations: [(await import("astro-compress")).default()]

});
