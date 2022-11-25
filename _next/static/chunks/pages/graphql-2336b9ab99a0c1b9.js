(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{2616:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/graphql",function(){return e(5408)}])},7845:function(t,n,e){"use strict";var a=e(5893);n.Z={github:"https://github.com/projectrepa/documentation",docsRepositoryBase:"https://github.com/projectrepa/documentation/blob/main",titleSuffix:" \u2013 REPA.GG",logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"REPA.GG "}),(0,a.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"Documentation"})]}),head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:"repa.gg documentation"}),(0,a.jsx)("meta",{name:"og:description",content:"repa.gg documentation"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://docs.repa.gg/main.jpg"}),(0,a.jsx)("meta",{name:"twitter:site:domain",content:"repa.gg"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://docs.repa.gg"}),(0,a.jsx)("meta",{name:"og:title",content:"repa.gg documentation"}),(0,a.jsx)("meta",{name:"og:image",content:"https://docs.repa.gg/main.jpg"})]}),search:!1,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit on GitHub",footerText:(0,a.jsxs)(a.Fragment,{children:[(new Date).getFullYear()," \xa9 REPA.GG"]}),unstable_faviconGlyph:"\ud83d\udc4b"}},5408:function(t,n,e){"use strict";e.r(n);var a=e(5893),s=e(7829),i=e.n(s),r=e(3805),o=e(7845),c=function(t){return(0,r.withSSG)(i()({filename:"graphql.mdx",route:"/graphql",meta:{},pageMap:[{name:"graphql",route:"/graphql"},{name:"guide",children:[{name:"create",route:"/guide/create"},{name:"join",route:"/guide/join"},{name:"meta.json",meta:{create:"Create Subscription",join:"Join Subscription"}}],route:"/guide"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction",sdk:"SDK",graphql:"GraphQL"}},{name:"sdk",route:"/sdk"}]},o.Z))(t)};function d(t){var n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},t.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"graphql"}),"\n",(0,a.jsx)(n.p,{children:"You can query all data using graphql:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { setChain, graphSubscriptions, graphTransfers } from 'repa-sdk';\n\n// set testnet\nsetChain(5);\n\ngraphSubscriptions('first: 10');\n"})}),"\n",(0,a.jsx)(n.p,{children:"Types :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"\ntype subscriptionList @entity {\n\tid: ID!\n\tactive: Boolean!\n\ttxn: Bytes! # address\n\ttimestamp: BigInt! # uint256\n\tsub: Bytes! # uint256\n\tplan: Bytes! # uint256\n\tboss: Bytes! # address\n\tuser: Bytes! # address\n\tcost: BigInt! # uint256\n\ttoken: Bytes! # address\n\ttoken_name: String! # string\n\ttoken_symbol: String! # string\n\ttoken_decimal: BigInt! # uint8\n}\n\ntype transferList @entity {\n\tid: ID!\n\ttxn: Bytes! # address\n\ttimestamp: BigInt! # uint256\n\tsub: Bytes! # address\n        plan: Bytes! # uint256\n\tuser: Bytes! # address\n\tboss: Bytes! # address\n\tamount: BigInt! # uint256\n\ttoken: Bytes! # address\n\ttoken_name: String! # string\n\ttoken_symbol: String! # string\n        token_decimal: BigInt!\n\ttoken_balance: BigInt! # uint256\n\ttoken_allowance: BigInt! # uint256\n}\n\n"})})]})}n.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(c,Object.assign({},t,{children:(0,a.jsx)(d,t)}))}}},function(t){t.O(0,[511,774,888,179],(function(){return n=2616,t(t.s=n);var n}));var n=t.O();_N_E=n}]);