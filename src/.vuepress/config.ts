import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "寒舞博客",
  description: "每天比昨天进步一点点",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
