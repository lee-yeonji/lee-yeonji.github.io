const { description } = require('../../package')

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Lee_yeonji's archive",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "images/maskable_icon_x192.png",
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }], 
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }, ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-LJ9WYBP7M9",
        // GA에서 발급받은 코드
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LJ9WYBP7M9');",
      ],
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      '/intro',
      {
        title: 'UI&UX',
        collapsable: true,
        children: [
          '/UI&UX/UI&UX기초',
          '/UI&UX/UX 개념'
        ],
      },
      {
        title: 'HTML',
        collapsable: true,
        children: ['/frontend_html/html'],
      },
      {
        title: 'CSS',
        collapsable: true,
        children: ['/frontend_css/css'],
      },
      {
        title: 'JAVASCRIPT',
        collapsable: true,
        children: ['/frontend_js/js'],
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  
    [
    "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요😀",
          buttonText: "새로고침",
        },
      },
    ],
    ["sitemap", { hostname: "https://lee-yeonji.github.io/"}],
      "@vuepress/plugin-back-to-top",
  ]
}
