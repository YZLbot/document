import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "YZLbot",
  description: "阿绫~阿绫~",
  

  theme: hopeTheme({
    pure: true,
    plugins: {
      mdEnhance: {
        hint: true,
      },
    },
  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
