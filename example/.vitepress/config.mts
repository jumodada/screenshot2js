import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "screenshot2js",
  vite:{
    server:{
      host: true,  // Listen to all IP addresses so that containers can access them
      port: 8080,
      strictPort: true,
    }
  },
  description: "des",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jumodada/screenshot2js' }
    ]
  }
})
