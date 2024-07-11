// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const common = require("./common.js");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: common.title,
  tagline: common.description,
  favicon: common.icon,

  // Set the production url of your site here
  // TODO: Change this part
  url: "https://localhost:3000/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/osu-dictionary/",

  // GitHub pages deployment config.
  organizationName: "osu-atri", // Usually your GitHub org/user name.
  projectName: "osu-dictionary", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          /* Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content,
                  options: { wordsPerMinute: 450 },
                }),
          // Please change this to your repo.
          /* Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image
      image: common.cardbanner,
      navbar: {
        title: common.title,
        logo: {
          alt: "osu!dictionary Logo",
          src: common.icon,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "术语表",
          },
          { to: "/blog", label: "新闻", position: "left" },
          {
            href: "https://github.com/NaughtyChas/osu-dictionary-Exp",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "术语表",
                to: "/docs",
              },
              {
                label: "新闻翻译",
                to: "/blog",
              },
            ],
          },
          {
            title: "关于我们",
            items: [
              {
                label: "GitHub",
                href: common.contact.github_org,
              },
              {
                label: "哔哩哔哩",
                href: common.contact.bilibili,
              },
              {
                label: "加入我们",
                href: common.contact.github_join,
              },
            ],
          },
          {
            title: "友情链接",
            items: [
              {
                label: "osu!wiki",
                href: "https://osu.ppy.sh/wiki",
              },
              {
                label: "藕酥汉化组",
                href: "https://github.com/osu-translate-zh",
              },
            ],
          },
        ],
        copyright:
          "This work is licensed under CC BY-NC 4.0, Built with Docusaurus.",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
