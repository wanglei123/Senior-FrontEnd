const path = require("path");
module.exports = {
    title: 'web全栈体系',
    description: 'Hello, my friend!',
    dest: "dist",
    serviceWorker: true, //支持PWA配置
    markdown: {
      lineNumbers: true
    },
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.jpeg`
        }]
    ],
    ga: '',
    evergreen: true,
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.join(__dirname, 'public','assets')
        }
      }
    },

    themeConfig: {
      repo: "hejialianghe/Senior-FrontEnd",
      editLinks: true,
      searchMaxSuggestions:10,
      docsDir: "docs",
      editLinkText: "在 GitHub 上编辑此页",
      lastUpdated: "最新更新时间",
      sidebarDepth: 3,
      logo: '/logo.jpeg',
      adsConfig: [
        {
          title: '联系作者',
          src:"/weixin.jpeg",
        }
      ],
      nav:[
        { text: '极速版阅读', link: 'https://hejialianghe.gitee.io/'},
        { text: 'Blog', link: 'http://youliaowu.com/' }
      ],
        sidebar:[
            {
              title: "指南",
              collapsable: false,
              children: [
                ["guide/",'介绍']
              ]
            },
            {
                title: "JavaScript进阶",
                collapsable: false,
                children: [
                  ["jsadvanced/",'前言'],
                  ["jsadvanced/function",'函数'],
                  ["jsadvanced/asyncpro",'异步编程'],
                  ["jsadvanced/designpattern",'设计模式'],
                ]
              },
              {
                title: "计算机网络",
                collapsable: false,
                children: [
                  ["computerNetwork/protocal",'网络协议'],
                  ["computerNetwork/security",'网络安全'],
                  ["computerNetwork/tools",'工具链和其他']
                ]
              },
              {
                title: "Vue",
                collapsable: false,
                children: [
                  ["vue/",'前言'],
                  ["vue/vueBase",'vue基础'],
                  ["vue/vueComponents",'探索vue的组件世界'],
                  ["vue/sourceCode",'部分源码解析'],
                  ["vue/serverSideRender",'服务端渲染']
                ]
              },
              {
                title: "Vue2.0源码",
                collapsable: false,
                children: [
                  ["vue2.0/",'前言'],
                  ["vue2.0/dataResponse",'响应式'],
                  ["vue2.0/vittualdomAndDiff",'vittualdom和DIff']
                ]
              },
              {
                title: "react",
                collapsable: false,
                children: [
                  ["react/",'入门介绍'],
                  ["react/react-base",'步入react'],
                  ["react/react-positive",'react正篇'],
                  ["react/react-ecology",'react生态'],
                  ["react/react-principle",'react原理'],
                  ["react/react-state-mana",'react状态管理'],
                  ["react/react-actualCombat",'react高级实战']
                ]
              },
              {
                title: "Node.js进阶",
                collapsable: false,
                children: [
                  ["node/",'Node.js基础'],
                  ["node/koa",'koa'],
                  ["node/egg",'企业级框架egg'],
                ]
              },
              {
                title: "工程化",
                collapsable: false,
                children: [
                  ["engineering/script",'脚本世界'],
                  ["engineering/coding-standards",'规范先行'],
                  ["engineering/quality-code",'质量代码'],
                  ["engineering/design",'工程设计'],
                  ["engineering/ctg-art",'构建艺术'],
                  ["engineering/auto-deploy",'持续集成与部署'],
                  ["engineering/git",'Git操作'],
                  ["engineering/tool",'效率工具']
                ]
              },
              {
                title: "项目实战",
                collapsable: false,
                children: [
                  ["projectPractice/",'认识同构及原理'],
                  ["projectPractice/",'实现一个同步的demo'],
                  ["projectPractice/",'同构如何获取数据'],
                  ["projectPractice/",'Nextjs'],
                  ["projectPractice/",'同构如何获取数据']
                ]
              }
        ]
    }
}