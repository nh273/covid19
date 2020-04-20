module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  lessonsDir: 'lessons', // The name of the directory that contains lessons or docs.
  siteTitle: 'Thông Tin COVID-19', // Site title.
  siteTitleAlt: 'Thông tin chính xác về virus corona COVID-19', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://thongtincovid.com/', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'Tất cả những gì bạn cần biết về COVID-19, không thừa không thiếu.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: null, // FB Application ID for using app insights
  googleAnalyticsID: 'UA-163205207-1', // GA tracking ID.
  disqusShortname: null, // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'User', // Username to display in the author segment.
  userTwitter: 'pnguyen', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Elmhurst, NY', // User location to display in the author segment.
  userAvatar: null, // User avatar to display in the author segment.
  userDescription: 'https://www.linkedin.com/in/phongphillipnguyen/', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/nh273/covid19',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Email',
      url: 'mailto:nh273@cornell.edu',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2020.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ['', 'Chapter 1', 'Chapter 2'], // Used to generate the Table Of Contents. Index 0 should be blank.
}
