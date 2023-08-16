import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "演示",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "前端",
            icon: "WEBqianduan",
            prefix: "frontEnd/",
            link: "frontEnd/",
            collapsible: true,
            children: "structure",

        },
        {
            text: "后端",
            icon: "houduankaifa",
            prefix: "backEnd/",
            link: "backEnd/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "力扣",
            icon: "leetcode",
            prefix: "leetCode/",
            link: "leetCode/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "图书馆",
            // icon: "books",
            prefix: "books/",
            link: "books/",
            collapsible: true,
            children: "structure",
        },
        "intro",
    ],
});

