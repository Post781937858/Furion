(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(b,".").concat(u)]||d[u]||p[u]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var s=2;s<c;s++)b[s]=n[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},136:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},137:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return b}));var a=n(136),r=n(138);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const b=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+b:b}(t,e,n,a)}}function b(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},138:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=(n(0),n(135)),b=n(137),i={id:"dbcontext-read-write",title:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",sidebar_label:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236"},o={unversionedId:"dbcontext-read-write",id:"dbcontext-read-write",isDocsHomePage:!1,title:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",description:"8.25.1 \u8bfb\u5199\u5206\u79bb",source:"@site/docs\\dbcontext-read-write.mdx",slug:"/dbcontext-read-write",permalink:"/docs/dbcontext-read-write",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/dbcontext-read-write.mdx",version:"current",sidebar_label:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",sidebar:"docs",previous:{title:"8.24 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",permalink:"/docs/tran"},next:{title:"8.26 \u5206\u8868\u5206\u5e93",permalink:"/docs/split-db"}},s=[{value:"8.25.1 \u8bfb\u5199\u5206\u79bb",id:"8251-\u8bfb\u5199\u5206\u79bb",children:[{value:"8.25.1.1 \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",id:"82511-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",children:[]},{value:"8.25.1.2 \u6ce8\u610f\u4e8b\u9879",id:"82512-\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"8.25.2 \u5982\u4f55\u5b9e\u73b0",id:"8252-\u5982\u4f55\u5b9e\u73b0",children:[{value:"8.25.2.1 \u521b\u5efa <code>\u4e3b\u5e93</code> \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"82521-\u521b\u5efa-\u4e3b\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"8.25.2.2 \u521b\u5efa <code>\u4ece\u5e93</code> \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"82522-\u521b\u5efa-\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"8.25.2.3 \u6ce8\u518c <code>\u4e3b\u4ece\u5e93</code> \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"82523-\u6ce8\u518c-\u4e3b\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"8.25.2.4 \u521b\u5efa <code>Person</code> \u5b9e\u4f53",id:"82524-\u521b\u5efa-person-\u5b9e\u4f53",children:[]},{value:"8.25.2.5 \u5c06 <code>Person</code> \u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868",id:"82525-\u5c06-person-\u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868",children:[]},{value:"8.25.2.6 \u4f7f\u7528\u4f8b\u5b50",id:"82526-\u4f7f\u7528\u4f8b\u5b50",children:[]}]},{value:"8.25.3 \u4e3b\u4ece\u590d\u5236",id:"8253-\u4e3b\u4ece\u590d\u5236",children:[]},{value:"8.25.4 \u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f",id:"8254-\u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f",children:[{value:"8.25.4.1 \u540c\u6b65\u590d\u5236",id:"82541-\u540c\u6b65\u590d\u5236",children:[]},{value:"8.25.4.2 \u5f02\u6b65\u590d\u5236",id:"82542-\u5f02\u6b65\u590d\u5236",children:[]},{value:"8.25.4.3 \u534a\u540c\u6b65\u590d\u5236",id:"82543-\u534a\u540c\u6b65\u590d\u5236",children:[]}]},{value:"8.25.5 <code>SqlServer</code> \u4e3b\u5e93\u914d\u7f6e",id:"8255-sqlserver-\u4e3b\u5e93\u914d\u7f6e",children:[{value:"8.25.5.1 \u6dfb\u52a0 <code>\u672c\u5730\u53d1\u5e03</code>",id:"82551-\u6dfb\u52a0-\u672c\u5730\u53d1\u5e03",children:[]},{value:"8.25.5.2 \u9009\u62e9 <code>\u5206\u53d1\u670d\u52a1\u5668</code>",id:"82552-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668",children:[]},{value:"8.25.5.3 \u542f\u7528 <code>\u4ee3\u7406</code>",id:"82553-\u542f\u7528-\u4ee3\u7406",children:[]},{value:"8.25.5.4 \u53d1\u5e03\u6570\u636e\u5e93",id:"82554-\u53d1\u5e03\u6570\u636e\u5e93",children:[]},{value:"8.25.5.5 \u5feb\u7167\u53d1\u5e03",id:"82555-\u5feb\u7167\u53d1\u5e03",children:[]},{value:"8.25.5.6 \u9009\u62e9\u53d1\u5e03\u9879\u76ee",id:"82556-\u9009\u62e9\u53d1\u5e03\u9879\u76ee",children:[]},{value:"8.25.5.7 \u914d\u7f6e\u5206\u53d1\u8ba1\u5212",id:"82557-\u914d\u7f6e\u5206\u53d1\u8ba1\u5212",children:[]},{value:"8.25.5.8 \u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e",id:"82558-\u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e",children:[]},{value:"8.25.5.9 \u5b8c\u6210\u914d\u7f6e",id:"82559-\u5b8c\u6210\u914d\u7f6e",children:[]}]},{value:"8.25.6 <code>SqlServer</code> \u4ece\u5e93\u914d\u7f6e",id:"8256-sqlserver-\u4ece\u5e93\u914d\u7f6e",children:[{value:"8.25.6.1 \u6dfb\u52a0 <code>\u672c\u5730\u8ba2\u9605</code>",id:"82561-\u6dfb\u52a0-\u672c\u5730\u8ba2\u9605",children:[]},{value:"8.25.6.2 \u9009\u62e9 <code>\u5206\u53d1\u670d\u52a1\u5668</code>",id:"82562-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668",children:[]},{value:"8.25.6.3 \u9009\u62e9 <code>\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e</code>",id:"82563-\u9009\u62e9-\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e",children:[]},{value:"8.25.6.4 \u9009\u62e9 <code>\u8ba2\u9605\u6570\u636e\u5e93</code>",id:"82564-\u9009\u62e9-\u8ba2\u9605\u6570\u636e\u5e93",children:[]},{value:"8.25.6.5 \u9009\u62e9 <code>\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e</code>",id:"82565-\u9009\u62e9-\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e",children:[]},{value:"8.25.6.6 \u9009\u62e9 <code>\u540c\u6b65\u8ba1\u5212</code>",id:"82566-\u9009\u62e9-\u540c\u6b65\u8ba1\u5212",children:[]},{value:"8.25.6.7 \u5b8c\u6210\u8ba2\u9605",id:"82567-\u5b8c\u6210\u8ba2\u9605",children:[]}]},{value:"8.25.7 \u5206\u53d1\u5b9a\u4e49\u76d1\u89c6",id:"8257-\u5206\u53d1\u5b9a\u4e49\u76d1\u89c6",children:[]},{value:"8.25.8 \u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c",id:"8258-\u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c",children:[]},{value:"8.25.9 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"8259-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"8251-\u8bfb\u5199\u5206\u79bb"},"8.25.1 \u8bfb\u5199\u5206\u79bb"),Object(c.b)("p",null,"\u5176\u5b9e\u5c31\u662f\u5c06\u6570\u636e\u5e93\u5206\u4e3a\u4e86\u4e3b\u4ece\u5e93\uff0c\u4e00\u4e2a\u4e3b\u5e93\u7528\u4e8e\u5199\u6570\u636e\uff0c\u591a\u4e2a\u4ece\u5e93\u5b8c\u6210\u8bfb\u6570\u636e\u7684\u64cd\u4f5c\uff0c\u4e3b\u4ece\u5e93\u4e4b\u95f4\u901a\u8fc7\u67d0\u79cd\u673a\u5236\u8fdb\u884c\u6570\u636e\u7684\u540c\u6b65\uff0c\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u6570\u636e\u5e93\u67b6\u6784\u3002"),Object(c.b)("img",{src:Object(b.a)("img/readwrite.png"),style:{height:300}}),Object(c.b)("h3",{id:"82511-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"},"8.25.1.1 \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"),Object(c.b)("p",null,"\u5927\u591a\u6570\u4e92\u8054\u7f51\u4e1a\u52a1\uff0c\u5f80\u5f80\u8bfb\u591a\u5199\u5c11\uff0c\u8fd9\u65f6\u5019\uff0c\u6570\u636e\u5e93\u7684\u8bfb\u4f1a\u9996\u5148\u79f0\u4e3a\u6570\u636e\u5e93\u7684\u74f6\u9888\uff0c\u8fd9\u65f6\uff0c\u5982\u679c\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u7ebf\u6027\u7684\u63d0\u5347\u6570\u636e\u5e93\u7684\u8bfb\u6027\u80fd\uff0c\u6d88\u9664\u8bfb\u5199\u9501\u51b2\u7a81\u4ece\u800c\u63d0\u5347\u6570\u636e\u5e93\u7684\u5199\u6027\u80fd\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528\u201c\u5206\u7ec4\u67b6\u6784\u201d\uff08\u8bfb\u5199\u5206\u79bb\u67b6\u6784\uff09\u3002"),Object(c.b)("p",null,"\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\uff0c\u8bfb\u5199\u5206\u79bb\u662f\u7528\u6765\u89e3\u51b3\u6570\u636e\u5e93\u7684\u8bfb\u6027\u80fd\u74f6\u9888\u7684\u3002"),Object(c.b)("h3",{id:"82512-\u6ce8\u610f\u4e8b\u9879"},"8.25.1.2 \u6ce8\u610f\u4e8b\u9879"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u8981\u8fdb\u884c\u533a\u5206\uff0c\u54ea\u4e9b\u662f\u8bfb\u8fde\u63a5\u6c60\uff0c\u54ea\u4e2a\u662f\u5199\u8fde\u63a5\u6c60\uff0c\u7814\u53d1\u7684\u96be\u5ea6\u4f1a\u589e\u52a0\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u53ef\u7528\uff0c\u8bfb\u8fde\u63a5\u6c60\u8981\u80fd\u591f\u5b9e\u73b0\u6545\u969c\u81ea\u52a8\u8f6c\u79fb\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u4e3b\u4ece\u7684\u4e00\u81f4\u6027\u95ee\u9898\u9700\u8981\u8003\u8651\u3002")),Object(c.b)("h2",{id:"8252-\u5982\u4f55\u5b9e\u73b0"},"8.25.2 \u5982\u4f55\u5b9e\u73b0"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Fur")," \u5728\u6570\u636e\u5e93\u6a21\u5757\u8bbe\u8ba1\u4e4b\u521d\uff0c\u5c31\u8003\u8651\u4e86\u8bfb\u5199\u5206\u79bb\u8fd9\u79cd\u60c5\u51b5\uff0c\u6240\u4ee5\u4ece\u5e95\u5c42\u5c31\u652f\u6301\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u53ca\u8bfb\u5199\u64cd\u4f5c\u65b9\u6cd5\u7ea6\u675f\u3002"),Object(c.b)("p",null,"\u8bfb\u5199\u5206\u79bb\u64cd\u4f5c\u4e3b\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"IAdjustableRepository")," \u4ed3\u50a8\uff0c\u8be5\u4ed3\u50a8\u5df2\u7ecf\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u65b9\u4fbf\u7684\u64cd\u4f5c\u8c03\u7528\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u8be5\u4ed3\u50a8\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u5c31\u7ed9\u5927\u5bb6\u6f14\u793a\u5982\u4f55\u8bfb\u5199\u591a\u5e93\u8bfb\u5199\u64cd\u4f5c\u3002"),Object(c.b)("h3",{id:"82521-\u521b\u5efa-\u4e3b\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"8.25.2.1 \u521b\u5efa ",Object(c.b)("inlineCode",{parentName:"h3"},"\u4e3b\u5e93")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    /// <summary>\n    /// \u4e3b\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n    /// </summary>\n    [DbContext("MasterConnectionString")]\n    public class MasterDbContext : AppDbContext<MasterDbContext>\n    {\n        public MasterDbContext(DbContextOptions<MasterDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ConnectionStrings": {\n    "MasterConnectionString": "Server=localhost;Database=Fur;User=sa;Password=000000;MultipleActiveResultSets=True;"\n  }\n}\n')),Object(c.b)("h3",{id:"82522-\u521b\u5efa-\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"8.25.2.2 \u521b\u5efa ",Object(c.b)("inlineCode",{parentName:"h3"},"\u4ece\u5e93")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{11}","{11}":!0}),'using Fur.Core;\nusing Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    /// <summary>\n    /// \u4ece\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n    /// </summary>\n    [DbContext("SlaveConnectionString")]\n    public class SlaveDbContext : AppDbContext<SlaveDbContext, SlaveDbContextLocator>\n    {\n        public SlaveDbContext(DbContextOptions<SlaveDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u9664\u4e86\u9ed8\u8ba4\u6570\u636e\u5e93\u65e0\u9700\u81ea\u5b9a\u4e49 ",Object(c.b)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668"),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u90fd\u9700\u8981\u6709\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u3002\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"SlaveDbContextLocator")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u4ece\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{8}","{8}":!0}),"using Fur.DatabaseAccessor;\n\nnamespace Fur.Core\n{\n    /// <summary>\n    /// \u4ece\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\n    /// </summary>\n    public class SlaveDbContextLocator : IDbContextLocator\n    {\n    }\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ConnectionStrings": {\n    "SlaveConnectionString": "Server=localhost;Database=FurSlave;User=sa;Password=000000;MultipleActiveResultSets=True;"\n  }\n}\n')),Object(c.b)("h3",{id:"82523-\u6ce8\u518c-\u4e3b\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"8.25.2.3 \u6ce8\u518c ",Object(c.b)("inlineCode",{parentName:"h3"},"\u4e3b\u4ece\u5e93")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{13-14}","{13-14}":!0}),"using Fur.Core;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Fur.EntityFramework.Core\n{\n    [Startup(600)]\n    public sealed class FurEntityFrameworkCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddDatabaseAccessor(options =>\n            {\n                services.AddSqlServerPool<MasterDbContext>();\n                services.AddSqlServerPool<SlaveDbContext, SlaveDbContextLocator>();\n            });\n        }\n    }\n}\n")),Object(c.b)("h3",{id:"82524-\u521b\u5efa-person-\u5b9e\u4f53"},"8.25.2.4 \u521b\u5efa ",Object(c.b)("inlineCode",{parentName:"h3"},"Person")," \u5b9e\u4f53"),Object(c.b)("p",null,"\u7531\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"\u4e3b\u4ece\u5e93")," \u5177\u6709\u76f8\u540c\u7684\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u6240\u4ee5\u5b9e\u4f53\u4e5f\u5fc5\u987b\u58f0\u660e ",Object(c.b)("inlineCode",{parentName:"p"},"\u4e3b\u4ece\u5e93"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{7}","{7}":!0}),"using Fur.DatabaseAccessor;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Fur.Core\n{\n    public class Person : IEntity<MasterDbContextLocator, SlaveDbContextLocator>\n    {\n        /// <summary>\n        /// \u4e3b\u952eId\n        /// </summary>\n        [Key]\n        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n    }\n}\n")),Object(c.b)("h3",{id:"82525-\u5c06-person-\u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868"},"8.25.2.5 \u5c06 ",Object(c.b)("inlineCode",{parentName:"h3"},"Person")," \u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u521b\u5efa\u4e3b\u5e93\u6570\u636e\u5e93\u8868\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Add-Migration v0.0.1 -Context MasterDbContext\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Update-Database -Context MasterDbContext\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u521b\u5efa\u4ece\u5e93\u6570\u636e\u5e93\u8868\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Add-Migration v0.0.1 -Context SlaveDbContext\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Update-Database -Context SlaveDbContext\n")),Object(c.b)("img",{src:Object(b.a)("img/readwrite1.png")}),Object(c.b)("img",{src:Object(b.a)("img/readwrite2.png")}),Object(c.b)("h3",{id:"82526-\u4f7f\u7528\u4f8b\u5b50"},"8.25.2.6 \u4f7f\u7528\u4f8b\u5b50"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{13,19,31,40}","{13,19,31,40}":!0}),'using Fur.Core;\nusing Fur.DatabaseAccessor;\nusing Fur.DynamicApiController;\nusing System.Collections.Generic;\n\nnamespace Fur.Application\n{\n    public class PersonService : IDynamicApiController\n    {\n        /// <summary>\n        /// \u53ef\u8c03\u914d\u4ed3\u50a8\uff08\u8bfb\u5199\u5206\u79bb\uff09\n        /// </summary>\n        private readonly IAdjustableRepository<MasterDbContextLocator, SlaveDbContextLocator> _adjustableRepository;\n\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\u521d\u59cb\u5316\n        /// </summary>\n        /// <param name="adjustableRepository"></param>\n        public PersonService(IAdjustableRepository<MasterDbContextLocator, SlaveDbContextLocator> adjustableRepository)\n        {\n            _adjustableRepository = adjustableRepository;\n        }\n\n        /// <summary>\n        /// \u65b0\u589e\u8d70\u4e3b\u5e93\n        /// </summary>\n        /// <param name="person"></param>\n        /// <returns></returns>\n        public void Insert(Person person)\n        {\n            _adjustableRepository.Master<Person>().Insert(person);\n        }\n\n        /// <summary>\n        /// \u67e5\u8be2\u8d70\u4ece\u5e93\n        /// </summary>\n        /// <returns></returns>\n        public List<Person> Get()\n        {\n            return _adjustableRepository.Slave1<Person>().AsEnumerable();\n        }\n    }\n}\n')),Object(c.b)("h2",{id:"8253-\u4e3b\u4ece\u590d\u5236"},"8.25.3 \u4e3b\u4ece\u590d\u5236"),Object(c.b)("p",null,"\u4e3b\u4ece\u590d\u5236\uff1a\u662f\u4e00\u79cd\u6570\u636e\u5907\u4efd\u7684\u65b9\u6848\u3002"),Object(c.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u662f\u4f7f\u7528\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u76f8\u540c\u7684\u6570\u636e\u5e93\uff0c\u5c06\u4e00\u4e2a\u6570\u636e\u5e93\u5f53\u505a\u4e3b\u6570\u636e\u5e93\uff0c\u800c\u53e6\u4e00\u4e2a\u6570\u636e\u5e93\u5f53\u505a\u4ece\u6570\u636e\u5e93\u3002",Object(c.b)("strong",{parentName:"p"},"\u5728\u4e3b\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u76f8\u5e94\u64cd\u4f5c\u65f6\uff0c\u4ece\u6570\u636e\u5e93\u8bb0\u5f55\u4e0b\u6240\u6709\u4e3b\u6570\u636e\u5e93\u7684\u64cd\u4f5c\uff0c\u4f7f\u5176\u4e8c\u8005\u4e00\u6a21\u4e00\u6837\u3002")),Object(c.b)("h2",{id:"8254-\u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f"},"8.25.4 \u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f"),Object(c.b)("h3",{id:"82541-\u540c\u6b65\u590d\u5236"},"8.25.4.1 \u540c\u6b65\u590d\u5236"),Object(c.b)("p",null,"\u6240\u8c13\u7684\u540c\u6b65\u590d\u5236\uff0c\u610f\u601d\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"Master")," \u7684\u53d8\u5316\uff0c\u5fc5\u987b\u7b49\u5f85 ",Object(c.b)("inlineCode",{parentName:"p"},"Slave-1\uff0cSlave-2\uff0c...\uff0cSlave-n")," \u5b8c\u6210\u540e\u624d\u80fd\u8fd4\u56de\u3002\n\u8fd9\u6837\uff0c\u663e\u7136\u4e0d\u53ef\u53d6\uff0c\u6bd4\u5982\uff0c\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Web")," \u524d\u7aef\u9875\u9762\u4e0a\uff0c\u7528\u6237\u589e\u52a0\u4e86\u6761\u8bb0\u5f55\uff0c\u9700\u8981\u7b49\u5f85\u5f88\u957f\u65f6\u95f4\u3002"),Object(c.b)("h3",{id:"82542-\u5f02\u6b65\u590d\u5236"},"8.25.4.2 \u5f02\u6b65\u590d\u5236"),Object(c.b)("p",null,"\u5982\u540c AJAX \u8bf7\u6c42\u4e00\u6837\u3002",Object(c.b)("inlineCode",{parentName:"p"},"Master")," \u53ea\u9700\u8981\u5b8c\u6210\u81ea\u5df1\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5373\u53ef\u3002\u81f3\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"Slaves")," \u662f\u5426\u6536\u5230\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff0c\u662f\u5426\u5b8c\u6210\u64cd\u4f5c\uff0c\u4e0d\u7528\u5173\u5fc3\u3002",Object(c.b)("strong",{parentName:"p"},"\uff08\u63a8\u8350\u65b9\u5f0f\uff09")),Object(c.b)("h3",{id:"82543-\u534a\u540c\u6b65\u590d\u5236"},"8.25.4.3 \u534a\u540c\u6b65\u590d\u5236"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Master")," \u53ea\u4fdd\u8bc1 ",Object(c.b)("inlineCode",{parentName:"p"},"Slaves")," \u4e2d\u7684\u4e00\u4e2a\u64cd\u4f5c\u6210\u529f\uff0c\u5c31\u8fd4\u56de\uff0c\u5176\u4ed6 ",Object(c.b)("inlineCode",{parentName:"p"},"Slave")," \u4e0d\u7ba1\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u5c06\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"SqlServer")," \u7b80\u5355\u914d\u7f6e\u4e3b\u4ece\u590d\u5236\u529f\u80fd\u3002"),Object(c.b)("h2",{id:"8255-sqlserver-\u4e3b\u5e93\u914d\u7f6e"},"8.25.5 ",Object(c.b)("inlineCode",{parentName:"h2"},"SqlServer")," \u4e3b\u5e93\u914d\u7f6e"),Object(c.b)("h3",{id:"82551-\u6dfb\u52a0-\u672c\u5730\u53d1\u5e03"},"8.25.5.1 \u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u672c\u5730\u53d1\u5e03")),Object(c.b)("img",{src:Object(b.a)("img/dbcopy1.png")}),Object(c.b)("h3",{id:"82552-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668"},"8.25.5.2 \u9009\u62e9 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u5206\u53d1\u670d\u52a1\u5668")),Object(c.b)("img",{src:Object(b.a)("img/dbcopy2.png")}),Object(c.b)("h3",{id:"82553-\u542f\u7528-\u4ee3\u7406"},"8.25.5.3 \u542f\u7528 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u4ee3\u7406")),Object(c.b)("img",{src:Object(b.a)("img/dbcopy3.png")}),Object(c.b)("h3",{id:"82554-\u53d1\u5e03\u6570\u636e\u5e93"},"8.25.5.4 \u53d1\u5e03\u6570\u636e\u5e93"),Object(c.b)("img",{src:Object(b.a)("img/dbcopy4.png")}),Object(c.b)("h3",{id:"82555-\u5feb\u7167\u53d1\u5e03"},"8.25.5.5 \u5feb\u7167\u53d1\u5e03"),Object(c.b)("img",{src:Object(b.a)("img/dbcopy5.png")}),Object(c.b)("p",null,"\u5177\u4f53\u9009\u62e9\u4f55\u79cd\u53d1\u5e03\u7c7b\u578b\uff0c\u89c6\u5177\u4f53\u4e1a\u52a1\u573a\u666f\u800c\u5b9a\u3002"),Object(c.b)("h3",{id:"82556-\u9009\u62e9\u53d1\u5e03\u9879\u76ee"},"8.25.5.6 \u9009\u62e9\u53d1\u5e03\u9879\u76ee"),Object(c.b)("img",{src:Object(b.a)("img/dbcopy6.png")}),Object(c.b)("h3",{id:"82557-\u914d\u7f6e\u5206\u53d1\u8ba1\u5212"},"8.25.5.7 \u914d\u7f6e\u5206\u53d1\u8ba1\u5212"),Object(c.b)("img",{src:Object(b.a)("img/dbcopy7.png")}),Object(c.b)("img",{src:Object(b.a)("img/dbcopy8.png")}),Object(c.b)("h3",{id:"82558-\u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e"},"8.25.5.8 \u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e"),Object(c.b)("img",{src:Object(b.a)("img/dbcopy9.png")}),Object(c.b)("img",{src:Object(b.a)("img/dbcopy10.png")}),Object(c.b)("h3",{id:"82559-\u5b8c\u6210\u914d\u7f6e"},"8.25.5.9 \u5b8c\u6210\u914d\u7f6e"),Object(c.b)("img",{src:Object(b.a)("img/dbcopy11.png")}),Object(c.b)("img",{src:Object(b.a)("img/dbcopy12.png")}),Object(c.b)("h2",{id:"8256-sqlserver-\u4ece\u5e93\u914d\u7f6e"},"8.25.6 ",Object(c.b)("inlineCode",{parentName:"h2"},"SqlServer")," \u4ece\u5e93\u914d\u7f6e"),Object(c.b)("h3",{id:"82561-\u6dfb\u52a0-\u672c\u5730\u8ba2\u9605"},"8.25.6.1 \u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u672c\u5730\u8ba2\u9605")),Object(c.b)("img",{src:Object(b.a)("img/dbrece1.png")}),Object(c.b)("h3",{id:"82562-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668"},"8.25.6.2 \u9009\u62e9 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u5206\u53d1\u670d\u52a1\u5668")),Object(c.b)("img",{src:Object(b.a)("img/dbrece2.png")}),Object(c.b)("h3",{id:"82563-\u9009\u62e9-\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e"},"8.25.6.3 \u9009\u62e9 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e")),Object(c.b)("img",{src:Object(b.a)("img/dbrece3.png")}),Object(c.b)("h3",{id:"82564-\u9009\u62e9-\u8ba2\u9605\u6570\u636e\u5e93"},"8.25.6.4 \u9009\u62e9 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u8ba2\u9605\u6570\u636e\u5e93")),Object(c.b)("img",{src:Object(b.a)("img/dbrece4.png")}),Object(c.b)("h3",{id:"82565-\u9009\u62e9-\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e"},"8.25.6.5 \u9009\u62e9 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e")),Object(c.b)("img",{src:Object(b.a)("img/dbrece5.png")}),Object(c.b)("img",{src:Object(b.a)("img/dbrece6.png")}),Object(c.b)("h3",{id:"82566-\u9009\u62e9-\u540c\u6b65\u8ba1\u5212"},"8.25.6.6 \u9009\u62e9 ",Object(c.b)("inlineCode",{parentName:"h3"},"\u540c\u6b65\u8ba1\u5212")),Object(c.b)("img",{src:Object(b.a)("img/dbrece7.png")}),Object(c.b)("h3",{id:"82567-\u5b8c\u6210\u8ba2\u9605"},"8.25.6.7 \u5b8c\u6210\u8ba2\u9605"),Object(c.b)("img",{src:Object(b.a)("img/dbrece8.png")}),Object(c.b)("h2",{id:"8257-\u5206\u53d1\u5b9a\u4e49\u76d1\u89c6"},"8.25.7 \u5206\u53d1\u5b9a\u4e49\u76d1\u89c6"),Object(c.b)("img",{src:Object(b.a)("img/dbrece9.png")}),Object(c.b)("h2",{id:"8258-\u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c"},"8.25.8 \u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c"),Object(c.b)("img",{src:Object(b.a)("img/dbrece10.png")}),Object(c.b)("img",{src:Object(b.a)("img/dbrece11.png")}),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u7279\u6027")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'\u4e3b\u4ece\u590d\u5236\u6709\u4e00\u5b9a\u8fdf\u5ef6\u6027\uff0c\u6240\u4ee5\u7cfb\u7edf\u8bbe\u8ba1\u8981\u6709\u4e00\u5b9a\u201c\u5bb9\u5fcd\u6027"\u3002'))),Object(c.b)("h2",{id:"8259-\u53cd\u9988\u4e0e\u5efa\u8bae"},"8.25.9 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))))}d.isMDXComponent=!0}}]);