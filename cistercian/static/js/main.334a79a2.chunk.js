(this.webpackJsonpcistercian=this.webpackJsonpcistercian||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(11),s=n.n(i),a=(n(20),n(2)),o=n(3),u=(n(21),n(15)),j=n(12),b=n(4),h=n(13),l=n(0),O=[1,2,3,4,6],d={0:[],1:[1],2:[2],3:[3],4:[4],5:[1,4],6:[6],7:[1,6],8:[2,6],9:[1,2,6]};var x=function(e){var t=e.digit,n=e.highlight,r=void 0!==n&&n,c=d[t];if(void 0==c)throw new Error("A cistercian digit can only be generated for Arabic digits 1-9");var i=function(e){var t,n=Object.assign.apply(Object,[{}].concat(Object(h.a)(O.map((function(e){return Object(b.a)({},e,!1)}))))),r=Object(j.a)(e);try{for(r.s();!(t=r.n()).done;)n[t.value]=!0}catch(c){r.e(c)}finally{r.f()}return n}(c);return Object(l.jsxs)("g",{className:"cistercian-glyph ".concat(r?"highlighted":""),children:[i[1]&&Object(l.jsx)("line",{x1:"0",y1:"0",x2:100,y2:"0"}),i[2]&&Object(l.jsx)("line",{x1:"0",y1:"100",x2:"100",y2:"100"}),i[3]&&Object(l.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100"}),i[4]&&Object(l.jsx)("line",{x1:"0",y1:"100",x2:"100",y2:"0"}),i[6]&&Object(l.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"100"})]})},g=function(e){var t=e.position,n=Object(u.a)(e,["position"]),r="units"==t||"hundreds"==t?1:-1,c="tens"==t||"units"==t?1:-1;return Object(l.jsx)("svg",{width:100,height:100,viewBox:"0 0 100 100",overflow:"visible",children:Object(l.jsx)("g",{transform:"scale(".concat(r,", ").concat(c,")"),"transform-origin":"center",children:Object(l.jsx)(x,Object(a.a)({},n))})})};n(23);var m=function(e){var t=e.number,n=e.highlightedPosition,c=r.useMemo((function(){return function(e){if(e<1||e>9999)throw new Error("A Cistercian number can only be shown for integers from 1 to 9999");return e.toString().padStart(4,"0").split("").map((function(e){return parseInt(e,10)}))}(t)}),[t]),i=Object(o.a)(c,4),s=i[0],a=i[1],u=i[2],j=i[3];return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"240",height:"340",viewBox:"0 0 240 340",children:Object(l.jsxs)("g",{className:"cistercian-number",transform:"translate(20,20)",children:[Object(l.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"300"}),Object(l.jsx)("g",{transform:"translate(100,0)",children:Object(l.jsx)(g,{digit:j,position:"units",highlight:"units"===n})}),Object(l.jsx)("g",{transform:"translate(0,0)",children:Object(l.jsx)(g,{digit:u,position:"tens",highlight:"tens"===n})}),Object(l.jsx)("g",{transform:"translate(0, 200)",children:Object(l.jsx)(g,{digit:s,position:"thousands",highlight:"thousands"===n})}),Object(l.jsx)("g",{transform:"translate(100, 200)",children:Object(l.jsx)(g,{digit:a,position:"hundreds",highlight:"hundreds"===n})})]})})},f=function(e){var t=e.number,n=e.change,r=e.minNumber,c=e.maxNumber,i=e.onChangeNumber,s=e.onMouseOver,a=e.onMouseOut,o=t+n,u=o>=r&&o<=c;return Object(l.jsx)("button",{className:"number-btn",disabled:!u,onClick:function(e){return i(o)},onMouseOver:s,onMouseOut:a,children:(n>0?"+":"")+n})},v=n(7),p=n.n(v),y=n(14),w=function(e){var t=window.location.protocol+"//"+window.location.host+window.location.pathname+e;window.history.replaceState({path:t},"",t)};var M=function(e,t,n,c){var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.search;return p.a.parse(t,{ignoreQueryPrefix:!0,parseArrays:!1})[e]}(e),s=""===(null!==i&&void 0!==i?i:"")?void 0:n(i),u=Object(r.useState)(null!==s&&void 0!==s?s:t),j=Object(o.a)(u,2),h=j[0],l=j[1],O=Object(y.a)((function(e,t){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.search,r=p.a.parse(n,{ignoreQueryPrefix:!0,parseArrays:!1}),c=p.a.stringify(Object(a.a)(Object(a.a)({},r),{},Object(b.a)({},e,t)));w("?".concat(c))}(e,c(t))}),1);return Object(r.useEffect)((function(){O(e,h)}),[e,h,O]),[h,l]};var N=function(){var e=Object(r.useState)(void 0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=M("year",(new Date).getFullYear(),(function(e){return parseInt(e,10)}),(function(e){return e.toString()})),s=Object(o.a)(i,2),u=s[0],j=s[1],b=Object(r.useState)(u.toString()),h=Object(o.a)(b,2),O=h[0],d=h[1];Object(r.useEffect)((function(){u.toString()!==O.replace(/^(0+)/,"")&&d(u.toString())}),[u]),Object(r.useEffect)((function(){O&&j(parseInt(O,10))}),[O]);var x={minNumber:1,maxNumber:9999,onChangeNumber:j};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Cistercian numbers"}),Object(l.jsx)("section",{className:"number-section cistercian",children:Object(l.jsx)(m,{number:u,highlightedPosition:n})}),Object(l.jsxs)("section",{className:"number-section decimal",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"negative-change",children:[Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:-1e3},x),{},{onMouseOver:function(e){return c("thousands")},onMouseOut:function(e){return c(void 0)}})),Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:-100},x),{},{onMouseOver:function(e){return c("hundreds")},onMouseOut:function(e){return c(void 0)}})),Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:-10},x),{},{onMouseOver:function(e){return c("tens")},onMouseOut:function(e){return c(void 0)}})),Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:-1},x),{},{onMouseOver:function(e){return c("units")},onMouseOut:function(e){return c(void 0)}}))]}),Object(l.jsx)("input",{className:"year-text-input",type:"text",pattern:"[0-9]{0,4}",maxLength:4,value:O,onChange:function(e){var t=e.target.value.replace(/[^0-9]/,"");d(t)},onBlur:function(){return d(O.replace(/^(0+)/,""))}}),Object(l.jsxs)("span",{className:"positive-change",children:[Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:1},x),{},{onMouseOver:function(e){return c("units")},onMouseOut:function(e){return c(void 0)}})),Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:10},x),{},{onMouseOver:function(e){return c("tens")},onMouseOut:function(e){return c(void 0)}})),Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:100},x),{},{onMouseOver:function(e){return c("hundreds")},onMouseOut:function(e){return c(void 0)}})),Object(l.jsx)(f,Object(a.a)(Object(a.a)({number:u,change:1e3},x),{},{onMouseOver:function(e){return c("thousands")},onMouseOut:function(e){return c(void 0)}}))]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"year-slider-label",children:"0"}),Object(l.jsx)("input",{className:"year-slider",type:"range",min:1,max:9999,step:1,value:u,onChange:function(e){return j(parseInt(e.target.value))}}),Object(l.jsx)("span",{className:"year-slider-label",children:"9999"})]})]}),Object(l.jsxs)("section",{className:"description",children:[Object(l.jsx)("p",{children:"Experiment with a medieval numbering system invented by Cistercian monks!"}),Object(l.jsx)("p",{children:"(copy the website URL to share a link to the selected character)"})]}),Object(l.jsxs)("section",{className:"colophon",children:[Object(l.jsxs)("p",{children:["Created by ",Object(l.jsx)("a",{href:"https://mz8i.com",children:"mz8i"})," (",Object(l.jsx)("a",{href:"https://github.com/mz8i/cistercian",children:"source"}),")."]}),Object(l.jsxs)("p",{children:["Inspired by ",Object(l.jsx)("a",{href:"https://twitter.com/MathematicsUCL/status/1356558846093914114/photo/1",children:"UCL Mathematics"})," on Twitter."]})]})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.334a79a2.chunk.js.map