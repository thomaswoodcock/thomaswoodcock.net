(this["webpackJsonpthomaswoodcock.net"]=this["webpackJsonpthomaswoodcock.net"]||[]).push([[0],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(5),r=n(1),o=n(20),c=n(6),a=Object(c.a)((function(e){return{centralized:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",textAlign:"center"},contained:{marginLeft:"auto",marginRight:"auto",maxWidth:"35rem",paddingLeft:e.sizing.getSize(2),paddingRight:e.sizing.getSize(2)}}})),s=function(e){var t=e.children,n=e.variant,c=Object(o.a)(e,["children","variant"]),s=a();return Object(r.a)("div",Object(i.a)(Object(i.a)({css:n&&s[n]},c),{},{children:t}))}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(5),r=n(1),o=n(20),c=n(6),a={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},s=Object(c.a)((function(e){return{h1:{fontSize:e.sizing.getSize(4)},h2:{fontSize:e.sizing.getSize(3)},h3:{fontSize:e.sizing.getSize(2)},h4:{fontSize:e.sizing.getSize(1)},h5:{fontSize:e.sizing.getSize(0)},h6:{fontSize:e.sizing.getSize(-1)},serif:{fontFamily:e.typography.serif,fontWeight:700,hyphens:"auto",lineHeight:"calc(0.8 * ".concat(e.sizing.ratio,")")}}})),l=function(e){var t=e.children,n=e.level,c=void 0===n?1:n,l=Object(o.a)(e,["children","level"]),b=s(),u=a[c]||a[1];return Object(r.a)(u,Object(i.a)(Object(i.a)({css:[b[u],(1===c||2===c)&&b.serif]},l),{},{children:t}))}},46:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var i=n(9),r=n(0),o=n(33),c=n(13),a=(n(46),n(1)),s=n(2),l=n(21),b=n(4),u=n(34),d=n(35),h=n(40),g=n(38),f=n(16),j=n(5),p=n(20),O=n(6),m=Object(O.a)((function(e){return{backgroundColor:e.colors.background.secondary,borderColor:e.colors.border.primary,borderWidth:e.sizing.getSize(-5),color:e.colors.typography.secondary,cursor:"pointer",display:"inline-block",fontFamily:e.typography.special,fontSize:"inherit",fontWeight:700,outlineColor:e.colors.border.primary,padding:e.sizing.getSize(-2,1)}})),z=function(e){var t=e.children,n=Object(p.a)(e,["children"]),i=m();return Object(a.a)("button",Object(j.a)(Object(j.a)({css:i},n),{},{children:t}))},y=n(25),v=Object(O.a)((function(e){return{button:{marginTop:e.sizing.getSize(1)},heading:{fontSize:e.sizing.getSize(5)}}})),k=function(e){var t=e.resetError,n=v();return Object(a.b)(f.a,{variant:"centralized",children:[Object(a.a)(y.a,{css:n.heading,level:1,children:"Error"}),Object(a.a)(y.a,{level:2,children:"Something went wrong."}),Object(a.a)(z,{css:n.button,onClick:t,children:"Reload"})]})},S=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={error:null},e.resetError=function(){e.setState({error:null})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.component||k;return this.state.error?Object(a.a)(e,{error:this.state.error,resetError:this.resetError}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),n}(r.Component),x=Object(O.a)((function(e){return{padding:e.sizing.getSize(3),textAlign:"center"}})),w=function(){var e=x();return Object(a.a)("footer",{css:e,children:Object(a.a)(f.a,{variant:"contained",children:Object(a.a)("p",{children:Object(a.b)("small",{children:["\xa9"," ",Object(a.a)("a",{href:"https://github.com/thomaswoodcock",children:"Thomas Woodcock"})," 2020"]})})})})},C=n(39),E=n(11),F=Object(O.a)((function(e){return{button:Object(E.a)({width:"100%"},e.breakpoints.up("sm"),{display:"none"}),home:{fontFamily:e.typography.serif,textDecoration:"none"},icon:Object(E.a)({},e.breakpoints.down("xs"),{height:"0.75rem",marginRight:e.sizing.getSize(-3),width:"0.75rem"}),nav:Object(E.a)({display:"flex",flexGrow:1},e.breakpoints.down("xs"),{alignItems:"center",flexDirection:"column","[aria-expanded='false'] + &":{display:"none"}}),navItem:Object(E.a)({display:"inline-block",marginLeft:e.sizing.getSize(-1),marginRight:e.sizing.getSize(-1)},e.breakpoints.down("xs"),{display:"block",marginBottom:e.sizing.getSize(-2),marginTop:e.sizing.getSize(-2)}),root:Object(E.a)({display:"flex",listStyle:"none",padding:e.sizing.getSize(-1)},e.breakpoints.down("xs"),{alignItems:"center",flexDirection:"column"})}})),I=function(e){var t=e.links,n=void 0===t?[]:t,i=Object(r.useState)(!1),o=Object(C.a)(i,2),s=o[0],l=o[1],u=Object(b.l)(),d=F();return Object(r.useEffect)((function(){l(!1)}),[u]),Object(a.b)("nav",{css:d.root,children:[Object(a.b)(c.Link,{css:[d.navItem,d.home],to:"/",children:["Thomas Woodcock ",Object(a.a)("span",{className:"visually-hidden",children:"Home"})]}),n.length>0&&Object(a.b)(r.Fragment,{children:[Object(a.b)(z,{"aria-expanded":s,css:[d.navItem,d.button],onClick:function(){return l((function(e){return!e}))},children:[Object(a.a)("svg",{css:d.icon,viewBox:"0 0 100 100",children:Object(a.a)("path",{d:"M3,7 95,7 M3,50 95,50 M3,92 93,93",fill:"none",focusable:"false",stroke:"currentColor",strokeWidth:"15"})}),"Menu"]}),Object(a.a)("ul",{css:d.nav,children:n.map((function(e,t){return Object(a.a)("li",{css:d.navItem,children:Object(a.a)(c.Link,{to:e.url,children:e.title})},t)}))})]})]})},L=n(36),W=Object(O.a)((function(e){return{backgroundColor:e.colors.background.secondary,color:e.colors.typography.secondary,display:"inline-block",padding:e.sizing.getSize(-1),position:"absolute",top:"-10rem","&:focus":{outline:"none",top:0,zIndex:1}}})),D=function(){var e=W();return Object(a.a)(L.HashLink,{css:e,to:"#main",children:"Skip to content"})},A=n(37);function H(){var e=Object(A.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return H=function(){return e},e}var M=Object(l.b)(H()),R=Object(O.a)({animation:"".concat(M," 1s infinite linear"),height:"50px",width:"50px"}),B=function(){var e=R();return Object(a.a)(f.a,{role:"progressbar",variant:"centralized",children:Object(a.a)("svg",{css:e,viewBox:"0 0 100 100",children:Object(a.a)("circle",{cx:"50",cy:"50",fill:"none",r:"42",stroke:"currentColor",strokeDasharray:"280",strokeDashoffset:"75",strokeWidth:"15"})})})},T=Object(O.b)(),J=Object(O.a)((function(e){return{global:{"&:focus":{outlineOffset:e.sizing.getSize(-5),outlineStyle:"solid",outlineWidth:e.sizing.getSize(-5)},"&:root":{fontSize:"calc(0.333vw + 1em)",lineHeight:e.sizing.ratio}},main:{flex:1},root:{backgroundColor:e.colors.background.primary,borderColor:e.colors.border.primary,color:e.colors.typography.primary,display:"flex",flexDirection:"column",fontFamily:e.typography.sans,height:"100vh",outlineColor:e.colors.border.primary}}})),P=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,53))})),q=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,54))})),G=function(){var e=J();return Object(a.b)(s.c,{theme:T,children:[Object(a.a)(l.a,{styles:e.global}),Object(a.a)("div",{css:e.root,children:Object(a.a)(S,{children:Object(a.a)(r.Suspense,{fallback:Object(a.a)(B,{}),children:Object(a.b)(b.g,{children:[Object(a.a)(b.d,{component:q,exact:!0,path:"/404"}),Object(a.b)(b.d,{children:[Object(a.a)(D,{}),Object(a.a)(I,{links:[]}),Object(a.a)("main",{css:e.main,id:"main",children:Object(a.a)(r.Suspense,{fallback:Object(a.a)(B,{}),children:Object(a.b)(b.g,{children:[Object(a.a)(b.d,{component:P,exact:!0,path:"/"}),Object(a.a)(b.d,{component:function(){return Object(a.a)(b.c,{to:"/404"})}})]})})}),Object(a.a)(w,{})]})]})})})})]})};Object(o.render)(Object(i.jsx)(r.StrictMode,{children:Object(i.jsx)(c.HashRouter,{basename:"/",children:Object(i.jsx)(G,{})})}),document.getElementById("root"))},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),r=n(2),o=n(5),c="#252525",a="#F5F5F5",s={breakpoints:{xs:{min:0,max:600},sm:{min:601,max:1024},md:{min:1025,max:1440},lg:{min:1441,max:1920}},colors:{background:{primary:a,secondary:c},border:{primary:c,secondary:a},typography:{primary:c,secondary:a}},sizing:{ratio:1.4,unit:"1rem"},typography:{sans:'"Lato", Arial, Helvetica, sans-serif',serif:'"Lora", "Palatino Linotype", "Book Antiqua", Palatino, serif',special:'"Exo", Arial, Helvetica, sans-serif'}},l=function(e,t){return t.slice(0,3).map((function(t){if(0===t)return e.sizing.unit;var n=" ".concat(t>0?"*":"/"," ").concat(e.sizing.ratio);return"calc(".concat(e.sizing.unit).concat(n.repeat(Math.abs(t)),")")})).join(" ")},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,n=Object(o.a)(Object(o.a)({},t),e);return Object(o.a)(Object(o.a)({},n),{},{breakpoints:Object(o.a)(Object(o.a)({},n.breakpoints),{},{down:function(e){return"@media (max-width: ".concat(n.breakpoints[e].max,"px)")},up:function(e){return"@media (min-width: ".concat(n.breakpoints[e].min,"px)")}}),sizing:Object(o.a)(Object(o.a)({},n.sizing),{},{getSize:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return l(n,t)}})})},u=function(e){return function(){var t=Object(r.f)();return Object(i.useMemo)((function(){if("function"===typeof e){var n=0===Object.keys(t).length&&b()||t;return e(n)}return e}),[t])}};n(9)}},[[52,1,2]]]);
//# sourceMappingURL=main.519c0ea4.chunk.js.map