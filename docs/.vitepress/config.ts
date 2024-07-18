import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Games',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [{ text: 'Get Started', link: '/prerequisites' }],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Prerequisites', link: '/prerequisites' },
          { text: 'BIOS', link: '/bios' },
          { text: 'Arcade', link: '/arcade' },
          { text: 'Retro PC', link: '/retropc' },
        ],
      },
      {
        text: 'Consoles',
        collapsed: 'true',
        items: [
          { text: 'Nintendo', link: '/Consoles/nintendo' },
          { text: 'Sony', link: '/Consoles/sony' },
          { text: 'Microsoft', link: '/Consoles/microsoft' },
          { text: 'Sega', link: '/Consoles/sega' },
          { text: 'Atari', link: '/Consoles/atari' },
          { text: 'Other', link: '/Consoles/other' },
        ],
      },
      {
        text: 'Handhelds',
        collapsed: 'true',
        items: [
          { text: 'Nintendo', link: '/Handhelds/nintendo' },
          { text: 'Sony', link: '/Handhelds/sony' },
          { text: 'Sega', link: '/Handhelds/sega' },
          { text: 'Atari', link: '/Handhelds/atari' },
          { text: 'Other', link: '/Handhelds/other' },
        ],
      },
    ],
  },
});
