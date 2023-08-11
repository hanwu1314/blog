import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "寒舞知识宝库",
  description: "每天比昨天进步一点点",

  theme,
  plugins:[
      searchProPlugin({
          locales:{
              "/":{
                  placeholder:"开始搜索"
              }
          }
      })
  ]
});
