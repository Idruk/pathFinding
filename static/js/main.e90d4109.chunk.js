(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c=n(6),a=n.n(c),s=n(4),f=n.n(s),i=n(7),l=n(5),u=n(2);var p=function(t){return new Promise((function(e,n){var o=[],r=[],c={};for(o.push({row:10,col:15}),r.push("10x15");o.length>0;){var a=o.shift(),s=a.row,f=a.col;if(10===s&&50===f)break;for(var i=[{row:s-1,col:f},{row:s,col:f+1},{row:s+1,col:f},{row:s,col:f-1}],l=0;l<4;l++){var u=i[l].row,p=i[l].col,b="".concat(u,"x").concat(p);u>=20||u<0||p>=70||p<0||(r.includes(b)||"wall"===t[70*u+p].state||(o.push({row:u,col:p}),r.push(b),c[b]="".concat(s,"x").concat(f)))}if(o.length>2e3)break}var d=[],x="10x50",j=0;do{if(d.push(x),x=c[x],++j>1500)return console.log("no path"),void e(null)}while("10x15"!==x);d.push(x),console.log("resolving"),e([d,r])}))},b=n(8),d=n.n(b),x=n(1);var j=function(){var t=Object(o.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)([]),s=Object(u.a)(a,2),b=s[0],j=s[1],v=Object(o.useState)(!1),h=Object(u.a)(v,2),y=h[0],O=h[1];function w(t){var e=Object(o.useState)(t.color),r=Object(u.a)(e,2),c=r[0],a=r[1];return Object(o.useImperativeHandle)(t.reff,(function(){return{changeColor:function(e){var n=setInterval((function(){a(e),clearTimeout(n)}),t.animationDelay)}}})),Object(x.jsx)("div",{ref:t.reff,onMouseEnter:function(){y&&715!==t.index&&750!==t.index&&(n[t.index].color="#000000ff",n[t.index].state="wall",a("#000000ff"))},className:d.a.divstyle,style:Object(l.a)(Object(l.a)({},t.style),{backgroundColor:c})},t.keyit)}function m(){return(m=Object(i.a)(f.a.mark((function t(){var e,o,r,c,a,s,i,l,u,d,x,j;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(n);case 2:for(e=t.sent,o=e[0],r=e[1],c=2e3,a=0;r[a];a++)"10x15"!==r[a]&&"10x50"!==r[a]&&(s=r[a].split("x"),i=parseInt(s[0]),l=parseInt(s[1]),c+=2e3,n[70*i+l].animationDelay=c,b[70*i+l].current.changeColor("#345ad9ff"));for(c+=2e4,o=o.reverse(),u=0;o[u];u++)"10x15"!==o[u]&&"10x50"!==o[u]&&(d=o[u].split("x"),x=parseInt(d[0]),j=parseInt(d[1]),c+=2e3,n[70*x+j].animationDelay=c,b[70*x+j].current.changeColor("#39bd2dff"));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){for(var t=[],e=0,n=0,o="#ffffffff",a=0;a<20;a++){for(var s=0;s<70;s++)o=10===a&&15===s?"#cc1616ff":10===a&&50===s?"#cc8f16ff":"#ffffffff",t.push({style:{top:e,left:n,zindex:1},keyit:"t-".concat(a,"-").concat(s),animationDelay:0,pos:{x:a,y:s},color:o,state:"blanc"}),n+=25;n=0,e+=25}j((function(t){return Array(1400).fill().map((function(e,n){return t[n]||r.a.createRef()}))})),c(t)}()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",onClick:function(){O(!1===y)},children:"Add Walls"}),Object(x.jsx)("button",{type:"button",onClick:function(){return m.apply(this,arguments)},children:"Find path"}),Object(x.jsx)("div",{style:{position:"absolute"},children:n.map((function(t,e){return Object(x.jsx)(w,{reff:b[e],style:t.style,pos:t.pos,state:t.state,index:e,color:t.color},t.keyit)}))})]})};var v=function(){return Object(x.jsx)(j,{})};a.a.render(Object(x.jsx)(v,{}),document.getElementById("root"))},8:function(t,e,n){t.exports={divstyle:"tablecss_divstyle__16Ixq"}}},[[15,1,2]]]);
//# sourceMappingURL=main.e90d4109.chunk.js.map