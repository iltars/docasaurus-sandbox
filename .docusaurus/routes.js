import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docasaurus-sandbox/__docusaurus/debug',
    component: ComponentCreator('/docasaurus-sandbox/__docusaurus/debug', '128'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/__docusaurus/debug/config',
    component: ComponentCreator('/docasaurus-sandbox/__docusaurus/debug/config', '054'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/__docusaurus/debug/content',
    component: ComponentCreator('/docasaurus-sandbox/__docusaurus/debug/content', '3f7'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/__docusaurus/debug/globalData',
    component: ComponentCreator('/docasaurus-sandbox/__docusaurus/debug/globalData', '7cd'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/__docusaurus/debug/metadata',
    component: ComponentCreator('/docasaurus-sandbox/__docusaurus/debug/metadata', '548'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/__docusaurus/debug/registry',
    component: ComponentCreator('/docasaurus-sandbox/__docusaurus/debug/registry', 'c09'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/__docusaurus/debug/routes',
    component: ComponentCreator('/docasaurus-sandbox/__docusaurus/debug/routes', 'f39'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/blog',
    component: ComponentCreator('/docasaurus-sandbox/blog', '86a'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/blog/archive',
    component: ComponentCreator('/docasaurus-sandbox/blog/archive', '3d9'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/blog/authors',
    component: ComponentCreator('/docasaurus-sandbox/blog/authors', '9b7'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/blog/mdx-blog-post',
    component: ComponentCreator('/docasaurus-sandbox/blog/mdx-blog-post', 'de9'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/blog/tags',
    component: ComponentCreator('/docasaurus-sandbox/blog/tags', 'bd3'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/blog/tags/docusaurus',
    component: ComponentCreator('/docasaurus-sandbox/blog/tags/docusaurus', '574'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/blog/tags/hola',
    component: ComponentCreator('/docasaurus-sandbox/blog/tags/hola', '2b1'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/markdown-page',
    component: ComponentCreator('/docasaurus-sandbox/markdown-page', '79b'),
    exact: true
  },
  {
    path: '/docasaurus-sandbox/docs',
    component: ComponentCreator('/docasaurus-sandbox/docs', 'd5e'),
    routes: [
      {
        path: '/docasaurus-sandbox/docs',
        component: ComponentCreator('/docasaurus-sandbox/docs', '7c2'),
        routes: [
          {
            path: '/docasaurus-sandbox/docs',
            component: ComponentCreator('/docasaurus-sandbox/docs', '57a'),
            routes: [
              {
                path: '/docasaurus-sandbox/docs/category/microservices-deployment',
                component: ComponentCreator('/docasaurus-sandbox/docs/category/microservices-deployment', '5da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docasaurus-sandbox/docs/category/salesforce-guides',
                component: ComponentCreator('/docasaurus-sandbox/docs/category/salesforce-guides', '48a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docasaurus-sandbox/docs/intro',
                component: ComponentCreator('/docasaurus-sandbox/docs/intro', '5fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docasaurus-sandbox/docs/pipeline-services/administration-guide',
                component: ComponentCreator('/docasaurus-sandbox/docs/pipeline-services/administration-guide', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docasaurus-sandbox/docs/salesforce-guides/Creating_an_Offline_Order',
                component: ComponentCreator('/docasaurus-sandbox/docs/salesforce-guides/Creating_an_Offline_Order', '2c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docasaurus-sandbox/docs/salesforce-guides/markdown-features',
                component: ComponentCreator('/docasaurus-sandbox/docs/salesforce-guides/markdown-features', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docasaurus-sandbox/',
    component: ComponentCreator('/docasaurus-sandbox/', '21e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
