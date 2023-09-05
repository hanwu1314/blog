import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
// @ts-ignore
export default hopeTheme({

    hostname: "https://ycyang.site",
    author: {
        name: "Mr.DanceCold",
        url: "https://mister-hope.com",
    },
    fullscreen: true,
    iconAssets: "//at.alicdn.com/t/c/font_4186552_znl14zslpw.css",

    logo: "/hanwu_logo.png",

    repo: "https://gitee.com/hanwu101/blog",
    repoLabel: "Gitee",
    repoDisplay: false,
    // 文档在仓库中的目录
    docsDir: "src",
    // 仓库地址  默认同主题
    // docsRepo:"",
    docsBranch: "gh-pages",
    navbar,
    sidebar,

    footer: "冀ICP备2022022509号-1",
    copyright: "MIT Licensed | Copyright © 2023-present Mr.DanceCold",
    displayFooter: true,
    darkmode: "enable",
    blog: {

        description: "一个全栈开发者",
        intro: "/intro.html",
        medias: {
            BiliBili: "https://space.bilibili.com/483819511",
            Email: "mailto:hanwu1314@outlook.com",
            Gitee: "https://gitee.com/hanwu101",
            GitHub: "https://github.com/LingHanwu",
            // QQ: "https://example.com",
        },
    },
    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },


    plugins: {
        // prismjs:false,
        components: {
            components: [
                "ArtPlayer",
                "AudioPlayer",
                "Badge",
                "BiliBili",
                "PDF",
                "CodePen",
                "Share",
                "SiteInfo",
                "StackBlitz",
                "VideoPlayer",
                "XiGua",
                "YouTube",
            ]
        },
        blog: true,
        comment: {
            provider: "Waline",
            serverURL: "https://waline-1-r0608039.deta.app/",
            emoji: [
                '//unpkg.com/@waline/emojis@1.1.0/weibo',
                '//unpkg.com/@waline/emojis@1.1.0/bilibili',
                '//unpkg.com/@waline/emojis@1.1.0/qq',
                '//unpkg.com/@waline/emojis@1.1.0/bmoji',
                '//unpkg.com/@waline/emojis@1.1.0/tieba',
                '//unpkg.com/@waline/emojis@1.1.0/alus'
            ],
        },
        mdEnhance: {
            align: true,   // 自动对齐
            attrs: true,//属性支持
            chart: true,//chart图表支持
            codetabs: true,//代码组
            // demo: true,//代码示例
            // echarts: true,//是否启用 echarts 图表支持
            // figure: true,//是否将单独的图片渲染为
            // flowchart: true,// 是否启用 flowchart 流程图
            gfm: true,//是否启用标准的 GitHub Favor Markdown 支持
            imgLazyload: true,//是否启用原生的图片懒加载
            imgSize: true,//是否启用图片大小标记支持
            include: true,//是否启用导入语法支持
            katex: true,// katex语法支持
            mark: true,//是否启用标注支持
            // mermaid: true,//是否启用 Mermaid 流程图支持
            playground: {
                presets: ["ts", "vue"],
            },
            // 是否启用幻灯片支持
            // presentation: ["highlight", "math", "search", "notes", "zoom"],
            // 关键词显示增强选项
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            // 是否启用下角标格式支持
            sub: true,
            // 是否启用上角标格式支持
            sup: true,
            // 是否启用标签页分组
            // tabs: true,
            //是否启用 v-pre 容器
            vPre: true,
            vuePlayground: true,
        },
        // 根据git提交时间决定文件贡献时间
        git: true,
        copyright: {
            global: true,
        },
        copyCode: {
            locales: {
                "/": {
                    copied: "小手一抖，代码就是我的了",
                }
            },
        },

        // uncomment these if you want a PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },

});
