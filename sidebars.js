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
    {
      type: 'category',
      label: '从零开始的 osu!lazer 入门指南',
      collapsed: false,
      items: [
        'lazer/lazer-tutorial/feature',
        'lazer/lazer-tutorial/init',
        'lazer/lazer-tutorial/setting',
        {
          type: 'category',
          label: 'osu!lazer 指南',
          collapsed: false,
          items: [
            'lazer/lazermap2st',
          ],
        },    
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
