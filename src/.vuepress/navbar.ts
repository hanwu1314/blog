import { navbar } from "vuepress-theme-hope";
export default navbar([
    "/frontEnd/",
    "/backEnd/",
    "/project/",
    {
        text: "网站相关",
        icon: "about",
        children: [
            {
                text: "关于作者",
                link: "/about-the-author/"
            },
            {
                text: "更新历史",
                link: "/timeline/",
            },
        ],
    },
]);
