const highlight = require('./public/js/highlight')

module.exports = {
  title: 'XIA数字化小组',
  evergreen: false,
  host: 'localhost',
  port: 3000,
  base: '/',
  plugins: [
    'vuepress-plugin-medium-zoom',
    ['vuepress-plugin-code-copy', {
      align: "bottom",
      color: "#3963bc",
      successText: "复制成功~"
    }]
  ],
  chainMarkdown(config) {
    config
      .options.highlight(highlight)
      .end()
  },
  themeConfig: {
    docsDir: 'docs',
    logo: '/assets/img/logo.png',
    lastUpdated: '上次更新',
    locales: {
      '/': {
        nav: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: '技术',
            link: '/ie/'
          },
          {
            text: '生产',
            link: '/production/'
          },
          {
            text: '物流',
            link: '/logistics/'
          },
          {
            text: '质量',
            link: '/quality/'
          }
        ],
        sidebar: {
          '/ie/': [
            {
              title: 'AD手册',
              children: [
                // '/ie/ad/',
                'ad/test-program',
              ]
            },
            {
              title: 'TP手册',
              children: [
                // '/ie/ad/',
                'tp/bom-download',
              ]
            },
            {
              title: 'Toolbox工具箱',
              children: [
                'app/O盘文件助手'
              ]
            }
          ],
        }
      }
    }
  },
}

