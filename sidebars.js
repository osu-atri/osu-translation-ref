/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [{type: 'autogenerated', dirName: '.'}],

  termtableSidebar: [
    'index',
    {
      type: 'category',
      label: 'osu! 中英翻译术语表',
      link: {
        type: 'doc',
        id: 'termtable/index',
      },
      collapsed: false,
      items: [
        'termtable/general',
        'termtable/beatmap',
        'termtable/gameplay',
        'termtable/client',
        'termtable/people',
        'termtable/tech',
        'termtable/rules',
      ]
    }
  ],

  lazerSidebar: [
    'index',
    'lazer/README',
    {
      type: 'category',
      label: '从零开始的 osu!lazer 入门指南',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        `lazer/lazer-tutorial/index`,
        'lazer/lazer-tutorial/feature',
        'lazer/lazer-tutorial/init',
        'lazer/lazer-tutorial/setting',
        'lazer/lazer-tutorial/interface',
      ],
    },
    {
      type: 'category',
      label: '小提示',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'lazer/lazermap2st',
      ],
    },    
  ],


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
