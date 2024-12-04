// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';  

// https://astro.build/config
export default defineConfig({
    site: 'https://fwatt.dev',
    integrations: [
        icon({
            iconDir: "src/assets/icons",
            include: {
                ri: ["*"],
            }
        })
    ],

});
