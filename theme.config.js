export default {
  github: 'https://github.com/dakopay/docs',
  docsRepositoryBase: 'https://github.com/dakopay/docs/blob/main',
  titleSuffix: ' – DAKOPAY',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">DAKOPAY</span>
      <span className="text-gray-600 font-normal hidden md:inline">DOCS</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="dakopay.com documentation" />
      <meta name="og:description" content="dakopay.com documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.dakopay.com/main.jpg" />
      <meta name="twitter:site:domain" content="dakopay.com" />
      <meta name="twitter:url" content="https://docs.dakopay.com" />
      <meta name="og:title" content="dakopay.com documentation" />
      <meta name="og:image" content="https://docs.dakopay.com/main.jpg" />
    </>
  ),
  search: false,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit on GitHub',
  footerText: <>{new Date().getFullYear()} © DAKOPAY</>,
  unstable_faviconGlyph: '👋',
}
