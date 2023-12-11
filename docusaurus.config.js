// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const liveCode=require("")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "foolishandi gone",
  tagline: "前端知识库",
  url: "https://zingy-fudge-57d344.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Laptop2.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "own", // Usually your GitHub org/user name.
  projectName: "my repository", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["zh"], // language codes
        excludeRoutes: [
          "docs/**/*", // exclude changelogs from indexing
        ],
      },
    ],
    // [
    //   require.resolve("docusaurus-plugin-search-local"),
    //   {
    //     // ... Your options.
    //     // `hashed` is recommended as long-term-cache of index file is possible.
    //     hashed: true,
    //     // For Docs using Chinese, The `language` is recommended to set to:
    //     // ```
    //     // language: ["en", "zh"],
    //     // ```
    //     // When applying `zh` in language, please install `nodejieba` in your project.
    //   },
    // ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/foolishandi/myblog/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/foolishandi/myblog/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "foolishandi",
        logo: {
          alt: "My Site Logo",
          src: "img/Laptop2.svg",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro/index",
            position: "left",
            label: "工作笔记",
          },
          { to: "/blog", label: "日志记录", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          //   {
          //     title: "Docs",
          //     items: [
          //       {
          //         label: "Tutorial",
          //         to: "/docs/intro",
          //       },
          //     ],
          //   },
          //   {
          //     title: "Community",
          //     items: [
          //       {
          //         label: "Stack Overflow",
          //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //       },
          //       {
          //         label: "Discord",
          //         href: "https://discordapp.com/invite/docusaurus",
          //       },
          //       {
          //         label: "Twitter",
          //         href: "https://twitter.com/docusaurus",
          //       },
          //     ],
          //   },
          //   {
          //     title: "More",
          //     items: [
          //       {
          //         label: "Blog",
          //         to: "/blog",
          //       },
          //       {
          //         label: "GitHub",
          //         href: "https://github.com/facebook/docusaurus",
          //       },
          //     ],
          //   },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
