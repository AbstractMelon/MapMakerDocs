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
      { text: 'Links', link: '/links/' },
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
          { text: 'Changelog', link: '/changelog/' },
          { text: 'Links', link: '/links/' },
          { text: 'Credits', link: '/credits/' },
          { text: 'Notes', link: '/notes' }
        ]
      },
      {
        text: 'Maker\'s Guide',
        items: [
          { text: 'Index', link: '/makerguide/' },
          { text: 'Basic Map Making', link: '/makerguide/basic' },
          { text: 'Save/Publish Guide', link: '/makerguide/finish' },
          { text: 'UI Guide', link: '/makerguide/ui' }
        ]
      },
      {
        text: 'Lua Documentation',
        items: [
          { text: 'Overview', link: '/lua/' },
          { text: 'Sequence', link: '/lua/sequence' },
          { text: 'Global Functions', link: '/lua/global-functions' },
          { text: 'Player Methods', link: '/lua/player-functions' },
          { text: 'Platform Methods', link: '/lua/platform-functions' },
          { text: 'BoplBody Methods', link: '/lua/boplbody-functions' },
          { text: 'Errors', link: '/lua/errors' }
        ]
      }      
    ]
  }
})
