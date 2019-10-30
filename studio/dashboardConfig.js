export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db9a341b8c7766e6f44c192',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8pvw1ati',
                  apiId: '09fa17ed-88fc-46f1-a6c6-a2385b83254c'
                },
                {
                  buildHookId: '5db9a341d83c1f986a3e15fc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ig7mrga7',
                  apiId: '47fea97d-2f6a-465e-a2a9-b0478f64325a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/terenas911/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ig7mrga7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
