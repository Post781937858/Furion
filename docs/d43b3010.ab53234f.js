(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(135)),o={id:"dbcontext-repository",title:"8.4 \u5173\u4e8e\u4ed3\u50a8",sidebar_label:"8.4 \u5173\u4e8e\u4ed3\u50a8"},l={unversionedId:"dbcontext-repository",id:"dbcontext-repository",isDocsHomePage:!1,title:"8.4 \u5173\u4e8e\u4ed3\u50a8",description:"8.4.1 \u4ec0\u4e48\u662f\u4ed3\u50a8",source:"@site/docs\\dbcontext-repository.mdx",slug:"/dbcontext-repository",permalink:"/docs/dbcontext-repository",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/dbcontext-repository.mdx",version:"current",sidebar_label:"8.4 \u5173\u4e8e\u4ed3\u50a8",sidebar:"docs",previous:{title:"8.3 \u6570\u636e\u5e93\u5b9e\u4f53",permalink:"/docs/entity"},next:{title:"8.5 \u65b0\u589e\u64cd\u4f5c",permalink:"/docs/dbcontext-add"}},b=[{value:"8.4.1 \u4ec0\u4e48\u662f\u4ed3\u50a8",id:"841-\u4ec0\u4e48\u662f\u4ed3\u50a8",children:[]},{value:"8.4.1 \u5185\u7f6e\u4ed3\u50a8",id:"841-\u5185\u7f6e\u4ed3\u50a8",children:[{value:"8.4.1.1 \u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8",id:"8411-\u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8",children:[]},{value:"8.4.1.2 \u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8",id:"8412-\u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8",children:[]},{value:"8.4.1.3 \u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8",id:"8413-\u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8",children:[]},{value:"8.4.1.4 <code>Sql</code> \u64cd\u4f5c\u4ed3\u50a8",id:"8414-sql-\u64cd\u4f5c\u4ed3\u50a8",children:[]},{value:"8.4.1.5 \u591a\u6570\u636e\u5e93 <code>Sql</code> \u64cd\u4f5c\u4ed3\u50a8",id:"8415-\u591a\u6570\u636e\u5e93-sql-\u64cd\u4f5c\u4ed3\u50a8",children:[]},{value:"8.4.1.6 \u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"8416-\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.7 \u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"8417-\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.8 \u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"8418-\u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.9 \u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"8419-\u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.10 \u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"84110-\u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.11 \u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"84111-\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.12 \u53ea\u5141\u8bb8 <code>Sql</code> \u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"84112-\u53ea\u5141\u8bb8-sql-\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.13 \u53ea\u5141\u8bb8 <code>Sql</code> \u975e\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"84113-\u53ea\u5141\u8bb8-sql-\u975e\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",children:[]},{value:"8.4.1.14 \u8bfb\u5199\u5206\u79bb\u4ed3\u50a8",id:"84114-\u8bfb\u5199\u5206\u79bb\u4ed3\u50a8",children:[]}]},{value:"8.4.2 \u4ed3\u50a8\u4f7f\u7528",id:"842-\u4ed3\u50a8\u4f7f\u7528",children:[{value:"8.4.2.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165",id:"8421-\u6784\u9020\u51fd\u6570\u6ce8\u5165",children:[]},{value:"8.4.2.2 \u65b9\u6cd5\u53c2\u6570\u6ce8\u5165",id:"8422-\u65b9\u6cd5\u53c2\u6570\u6ce8\u5165",children:[]},{value:"8.4.2.3 <code>App.GetRepository</code> \u83b7\u53d6",id:"8423-appgetrepository-\u83b7\u53d6",children:[]}]},{value:"8.4.3 \u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5",id:"843-\u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5",children:[{value:"8.4.3.1 \u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8",id:"8431-\u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8",children:[]},{value:"8.4.3.2 \u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b",id:"8432-\u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b",children:[]},{value:"8.4.3.3 \u83b7\u53d6 <code>Sql</code> \u64cd\u4f5c\u4ed3\u50a8",id:"8433-\u83b7\u53d6-sql-\u64cd\u4f5c\u4ed3\u50a8",children:[]}]},{value:"8.4.4 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",id:"844-\u591a\u6570\u636e\u5e93\u64cd\u4f5c",children:[{value:"8.4.4.1 \u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93",id:"8441-\u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93",children:[]}]},{value:"8.4.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"845-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"841-\u4ec0\u4e48\u662f\u4ed3\u50a8"},"8.4.1 \u4ec0\u4e48\u662f\u4ed3\u50a8"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728\u9886\u57df\u5c42\u548c\u6570\u636e\u6620\u5c04\u5c42\u7684\u4e2d\u4ecb,\u4f7f\u7528\u7c7b\u4f3c\u96c6\u5408\u7684\u63a5\u53e3\u6765\u5b58\u53d6\u9886\u57df\u5bf9\u8c61\uff0c\u5b9e\u9645\u4e0a\uff0c\u4ed3\u50a8\u88ab\u7528\u4e8e\u9886\u57df\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e0a\u7684\u64cd\u4f5c\uff08\u5b9e\u4f53 Entity \u548c\u503c\u5bf9\u8c61 Value types\uff09\u3002\u4e00\u822c\u6765\u8bf4,\u6211\u4eec\u9488\u5bf9\u4e0d\u540c\u7684\u5b9e\u4f53(\u6216\u805a\u5408\u6839 Aggregate Root)\u4f1a\u521b\u5efa\u76f8\u5bf9\u5e94\u7684\u4ed3\u50a8\u3002")),Object(i.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u4ed3\u50a8\u5c31\u662f\u6570\u636e\u5b58\u53d6\u64cd\u4f5c\u7684\u8f7d\u4f53\uff0c\u4f46\u4e0d\u9650\u5b9a\u4e8e\u6570\u636e\u5e93\u3002"),Object(i.b)("h2",{id:"841-\u5185\u7f6e\u4ed3\u50a8"},"8.4.1 \u5185\u7f6e\u4ed3\u50a8"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u5185\u7f6e\u4e86\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u4ed3\u50a8\uff0c\u65b9\u4fbf\u5927\u5bb6\u62d3\u5c55\u548c\u96c6\u6210\uff1a"),Object(i.b)("h3",{id:"8411-\u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8"},"8.4.1.1 \u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IRepository"),"\uff1a\u9ed8\u8ba4\u975e\u6cdb\u578b\u4ed3\u50a8\u63a5\u53e3\uff0c\u652f\u6301\u5207\u6362\u5230\u4efb\u4f55\u4ed3\u50a8"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EFCoreRepository"),"\uff1a\u9ed8\u8ba4\u975e\u6cdb\u578b\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8412-\u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8"},"8.4.1.2 \u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EFCoreRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8413-\u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8"},"8.4.1.3 \u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IRepository<TEntity, TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EFCoreRepository<TEntity, TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8414-sql-\u64cd\u4f5c\u4ed3\u50a8"},"8.4.1.4 ",Object(i.b)("inlineCode",{parentName:"h3"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ISqlRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SqlRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8415-\u591a\u6570\u636e\u5e93-sql-\u64cd\u4f5c\u4ed3\u50a8"},"8.4.1.5 \u591a\u6570\u636e\u5e93 ",Object(i.b)("inlineCode",{parentName:"h3"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ISqlRepository<TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SqlRepository<TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8416-\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.6 \u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IReadableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IReadableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8417-\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.7 \u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IWritableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IWritableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8418-\u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.8 \u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IInsertableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u65b0\u589e\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IInsertableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u65b0\u589e\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"8419-\u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.9 \u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IUpdateableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u66f4\u65b0\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IUpdateableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u66f4\u65b0\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"84110-\u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.10 \u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IDeletableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u5220\u9664\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IDeletableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u5220\u9664\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"84111-\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.11 \u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IOperableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IOperableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"84112-\u53ea\u5141\u8bb8-sql-\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.12 \u53ea\u5141\u8bb8 ",Object(i.b)("inlineCode",{parentName:"h3"},"Sql")," \u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ISqlReaderRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u67e5\u8be2\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ISqlReaderRepository<TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u67e5\u8be2\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"84113-\u53ea\u5141\u8bb8-sql-\u975e\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"},"8.4.1.13 \u53ea\u5141\u8bb8 ",Object(i.b)("inlineCode",{parentName:"h3"},"Sql")," \u975e\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ISqlExecutableRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u975e\u67e5\u8be2\u4ed3\u50a8\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ISqlExecutableRepository<TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u975e\u67e5\u8be2\u4ed3\u50a8\u5b9e\u73b0")),Object(i.b)("h3",{id:"84114-\u8bfb\u5199\u5206\u79bb\u4ed3\u50a8"},"8.4.1.14 \u8bfb\u5199\u5206\u79bb\u4ed3\u50a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IAdjustableRepository"),"\uff1a\u6700\u591a\u652f\u6301 ",Object(i.b)("strong",{parentName:"li"},"\u4e00\u4e3b7\u4ece")," \u4ed3\u50a8")),Object(i.b)("h2",{id:"842-\u4ed3\u50a8\u4f7f\u7528"},"8.4.2 \u4ed3\u50a8\u4f7f\u7528"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u63d0\u4f9b\u4e86\u975e\u5e38\u591a\u7684\u65b9\u5f0f\u521b\u5efa\u4ed3\u50a8\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u5927\u5bb6\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u573a\u666f\u4e2d\u4f7f\u7528\u3002"),Object(i.b)("h3",{id:"8421-\u6784\u9020\u51fd\u6570\u6ce8\u5165"},"8.4.2.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{2}","{2}":!0}),"private readonly IRepository<Person> _personRepository;\npublic FurService(IRepository<Person> personRepository)\n{\n    _personRepository = personRepository;\n}\n")),Object(i.b)("h3",{id:"8422-\u65b9\u6cd5\u53c2\u6570\u6ce8\u5165"},"8.4.2.2 \u65b9\u6cd5\u53c2\u6570\u6ce8\u5165"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1}","{1}":!0}),"public async Task<List<PersonDto>> GetAll([FromServices] IRepository<Person> repository, string keyword)\n{\n    var persons = await repository.AsQueryable().ToListAsync();\n    return persons.Adapt<List<PersonDto>>();\n}\n")),Object(i.b)("h3",{id:"8423-appgetrepository-\u83b7\u53d6"},"8.4.2.3 ",Object(i.b)("inlineCode",{parentName:"h3"},"App.GetRepository")," \u83b7\u53d6"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u975e\u6cdb\u578b\u4ed3\u50a8\nvar repository = App.GetRepository();\n\n// \u6cdb\u578b\u4ed3\u50a8\nvar repository = App.GetRepository<Person>();\n\n// Sql \u4ed3\u50a8\nvar sqlRepository = App.GetSqlRepository();\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u8bf4\u660e")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e0d\u7ba1\u91c7\u7528\u90a3\u79cd\u65b9\u5f0f\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u90fd\u4fdd\u8bc1\u4e86\u4ed3\u50a8\u4e00\u6b21\u8bf7\u6c42\u552f\u4e00\u6027\u3002\u540c\u65f6 ",Object(i.b)("inlineCode",{parentName:"p"},"App.GetRepository<TEntity>()")," \u65b9\u5f0f\u652f\u6301\u4efb\u4f55\u9759\u6001\u7c7b\u4e2d\u4f7f\u7528\u3002"))),Object(i.b)("h2",{id:"843-\u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5"},"8.4.3 \u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5"),Object(i.b)("h3",{id:"8431-\u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8"},"8.4.3.1 \u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var userRepository = personRepository.Change<User>();\n")),Object(i.b)("h3",{id:"8432-\u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b"},"8.4.3.2 \u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b"),Object(i.b)("p",null,"\u6bd4\u5982\uff0c\u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u5e93\u4ed3\u50a8\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u53ea\u8bfb\u4ed3\u50a8\nvar readRepository = personRepository.Constraint<IReadableRepository<User>>();\n\n// \u53ea\u5199\u4ed3\u50a8\nvar readRepository = personRepository.Constraint<IWritableRepository<User>>();\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},".Constraint")," \u652f\u6301\u5207\u6362\u4efb\u4f55\u4ed3\u50a8\u7c7b\u578b\u3002"))),Object(i.b)("h3",{id:"8433-\u83b7\u53d6-sql-\u64cd\u4f5c\u4ed3\u50a8"},"8.4.3.3 \u83b7\u53d6 ",Object(i.b)("inlineCode",{parentName:"h3"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var sqlRepository = repository.Sql();\n")),Object(i.b)("h2",{id:"844-\u591a\u6570\u636e\u5e93\u64cd\u4f5c"},"8.4.4 \u591a\u6570\u636e\u5e93\u64cd\u4f5c"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"DbContextLocator")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5b9e\u73b0\u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u53ef\u4ee5\u968f\u610f\u5207\u6362\u6570\u636e\u5e93"),Object(i.b)("h3",{id:"8441-\u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93"},"8.4.4.1 \u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93"),Object(i.b)("h4",{id:"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93"},"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = repository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = repository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = repository.Change<Person, SqliteDbContextLocator>();\n\n// \u5176\u4ed6\u66f4\u591a\u6570\u636e\u5e93\u4e00\u6837\u7684\u64cd\u4f5c\n")),Object(i.b)("h4",{id:"\u53e6\u5916\u4efb\u4f55\u4ed3\u50a8\u6216\u5b9e\u4f53\u914d\u7f6e\u90fd\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u540c\u65f6\u64cd\u4f5c"},"\u53e6\u5916\u4efb\u4f55\u4ed3\u50a8\u6216\u5b9e\u4f53\u914d\u7f6e\u90fd\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u540c\u65f6\u64cd\u4f5c"),Object(i.b)("p",null,"\u4ed3\u50a8\u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"IRepository<Person, MsSqlDbContextLocator> mssqlRepository\n\nISqlRepository<MsSqlDbContextLocator> mssqlRepository;\n")),Object(i.b)("p",null,"\u52a8\u6001 ",Object(i.b)("inlineCode",{parentName:"p"},"sql")," \u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'"select * from person".Change<MsSqlDbContextLocator>().SqlQuery();\n')),Object(i.b)("p",null,"\u5b9e\u4f53\u914d\u7f6e\u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"public class User:Entity<MsSqlDbContextLocator, MySqlDbContextLocator>\n{\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[SqlFunction("funcName", DbContextLocator = typeof(MySqlDbContextLocator))]\nint GetAge(int id);\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Linq")," \u4e2d\u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'[QueryableFunction("funcName","dbo", DbContextLocator = typeof(MySqlDbContextLocator))]\nstring GetName()=> throw Oops.Oh("\u4e0d\u652f\u6301\u8be5\u6570\u636e\u5e93\u64cd\u4f5c");\n')),Object(i.b)("h2",{id:"845-\u53cd\u9988\u4e0e\u5efa\u8bae"},"8.4.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,j=s["".concat(o,".").concat(O)]||s[O]||d[O]||i;return n?r.a.createElement(j,l(l({ref:t},c),{},{components:n})):r.a.createElement(j,l({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);