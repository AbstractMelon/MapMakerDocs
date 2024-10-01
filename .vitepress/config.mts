import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Map Maker Docs',
  description: 'The docs for the map maker bopl mod!',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/MapMakerDocs/',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Map Maker Docs',
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Install Guide', link: '/makerguide/install-guide' },
      { text: 'Maker\'s Guide', link: '/makerguide/' },
      { text: 'Lua Docs', link: '/lua/' },
      { text: 'Lua Snippets', link: '/lua/useful-snippets' },
      { text: 'Troubleshooting', link: '/troubleshooting/' },
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Credits', link: '/credits/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Install Guide', link: '/makerguide/install-guide' },
          { text: 'Maker\'s Guide', link: '/makerguide/' },
          { text: 'Lua Docs', link: '/lua/' },
          { text: 'Lua Snippets', link: '/lua/useful-snippets' },
          { text: 'Troubleshooting', link: '/troubleshooting/' },
          { text: 'Notes', link: '/notes' }
        ]
      },
      {
        text: 'Maker\'s Guide',
        items: [
          { text: 'Basic Map Making', link: '/makerguide/basic' },
          { text: 'Save/Publish Guide', link: '/makerguide/finish' },
          { text: 'UI Guide', link: '/makerguide/ui' }
        ]
      },
      {
        text: 'Lua Documentation',
        items: [
          { text: 'Lua Snippets', link: '/lua/useful-snippets' },
          { text: 'Spawn Functions', link: '/lua/spawn-functions' },
          { text: 'Raycast Functions', link: '/lua/raycast-functions' },
          { text: 'Misc Functions', link: '/lua/misc-functions' },
          { text: 'Player', link: '/lua/player' },
          { text: 'Platform', link: '/lua/platform' },
          { text: 'BoplBody', link: '/lua/boplbody' },
          { text: 'Errors', link: '/lua/errors' }
        ]
      }      
    ]
  }
})
