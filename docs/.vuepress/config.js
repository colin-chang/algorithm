module.exports = {
    title: '数据结构与算法',
    description: '深入浅出的数据结构与算法学习文档。',
    base: '/algorithm/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        ['@vuepress/google-analytics', {
            ga: 'UA-131744342-1'
        }]
    ],
    themeConfig: {
        repo: 'https://github.com/colin-chang/algorithm',
        nav: [{
                text: 'Get Start',
                link: '/basic/intro'
            },
            {
                text: 'Books',
                items: [
                    { text: '.Net Core', link: 'https://netcore.colinchang.net/' },
                    { text: 'Python', link: 'https://python.colinchang.net/' },
                    { text: 'Linux', link: 'https://linux.colinchang.net/' },
                    { text: '系统架构设计', link: 'https://architecture.colinchang.net/' }
                  ]
            },
            {
                text: 'Blog',
                link: 'https://colinchang.net/'
            }
        ],
        sidebar:[
            {
                title: '基础篇',
                collapsable: false,
                children: [
                    '/basic/intro'
                ]
            },
            {
                title: '高级篇',
                collapsable: false,
                children: [
                    '/senior/todo'
                ]
            },
            {
                title: '实战篇',
                collapsable: false,
                children: [
                    '/practice/todo'
                ]
            }
        ],
        displayAllHeaders: true,
        lastUpdated: '更新时间',
    },
    markdown: {
        lineNumbers: true
    }
}
