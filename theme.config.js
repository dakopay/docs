export default {
  github: 'https://github.com/projectrepa/documentation',
  docsRepositoryBase: 'https://github.com/projectrepa/documentation/blob/main',
  titleSuffix: ' – REPA.GG',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">REPA.GG </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="repa.gg documentation" />
      <meta name="og:description" content="repa.gg documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.repa.gg/main.jpg" />
      <meta name="twitter:site:domain" content="repa.gg" />
      <meta name="twitter:url" content="https://docs.repa.gg" />
      <meta name="og:title" content="repa.gg documentation" />
      <meta name="og:image" content="https://docs.repa.gg/main.jpg" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © REPA.GGs.</>,
  unstable_faviconGlyph: '👋',
}
