"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[415],{5415:function(e,n,o){o.r(n),o.d(n,{default:function(){return m}});var r=o(9439),t=o(1614),i=o(890),a=o(533),c=o(8627),s=o(2791),u=o(9434),l=o(1087),d=o(7062),p=o(7091),h=o(3329);function m(){var e=(0,u.I0)(),n=(0,l.lr)(),o=(0,r.Z)(n,1)[0],m=o.get("accessToken"),f=o.get("refreshToken"),Z=(0,c.a)().isLoggedIn;return(0,s.useEffect)((function(){m&&f&&((0,p.o4)(m),e((0,d.M)(m)),localStorage.setItem("refreshToken",f))}),[e,m,f]),Z?(0,h.jsx)(t.Z,{sx:{my:4},children:(0,h.jsxs)(i.Z,{variant:"h3",component:"h1",sx:{textAlign:"center"},children:["Welcome to your personal phonebook.",(0,h.jsx)("br",{}),(0,h.jsx)(a.Z,{to:"/contacts",component:l.OL,children:"Add your contacts"})]})}):(0,h.jsx)(t.Z,{children:(0,h.jsxs)(i.Z,{variant:"h3",component:"h1",sx:{textAlign:"center"},children:["Welcome to your personal phonebook. Please",(0,h.jsx)("br",{}),(0,h.jsx)(a.Z,{to:"/register",component:l.OL,children:"register"})," ","or"," ",(0,h.jsx)(a.Z,{to:"/login",component:l.OL,children:"login"})]})})}},533:function(e,n,o){o.d(n,{Z:function(){return D}});var r=o(3433),t=o(9439),i=o(4942),a=o(3366),c=o(7462),s=o(2791),u=o(8182),l=o(4419),d=o(4036),p=o(6934),h=o(1402),m=o(3031),f=o(2071),Z=o(890),b=o(5878),v=o(1217);function x(e){return(0,v.Z)("MuiLink",e)}var y=(0,b.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=o(8529),k=o(2065),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(e){var n=e.theme,o=e.ownerState,r=function(e){return w[e]||e}(o.color),t=(0,g.DW)(n,"palette.".concat(r),!1)||o.color,i=(0,g.DW)(n,"palette.".concat(r,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,k.Fq)(t,.4)},S=o(3329),A=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,p.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState;return(0,c.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:j({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),D=s.forwardRef((function(e,n){var o=(0,h.Z)({props:e,name:"MuiLink"}),i=o.className,p=o.color,Z=void 0===p?"primary":p,b=o.component,v=void 0===b?"a":b,y=o.onBlur,g=o.onFocus,k=o.TypographyClasses,j=o.underline,D=void 0===j?"always":j,L=o.variant,_=void 0===L?"inherit":L,F=o.sx,M=(0,a.Z)(o,A),T=(0,m.Z)(),V=T.isFocusVisibleRef,W=T.onBlur,R=T.onFocus,B=T.ref,N=s.useState(!1),O=(0,t.Z)(N,2),I=O[0],P=O[1],z=(0,f.Z)(n,B),H=(0,c.Z)({},o,{color:Z,component:v,focusVisible:I,underline:D,variant:_}),q=function(e){var n=e.classes,o=e.component,r=e.focusVisible,t=e.underline,i={root:["root","underline".concat((0,d.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,l.Z)(i,x,n)}(H);return(0,S.jsx)(C,(0,c.Z)({color:Z,className:(0,u.Z)(q.root,i),classes:k,component:v,onBlur:function(e){W(e),!1===V.current&&P(!1),y&&y(e)},onFocus:function(e){R(e),!0===V.current&&P(!0),g&&g(e)},ref:z,ownerState:H,variant:_,sx:[].concat((0,r.Z)(Object.keys(w).includes(Z)?[]:[{color:Z}]),(0,r.Z)(Array.isArray(F)?F:[F]))},M))}))}}]);
//# sourceMappingURL=415.4feac931.chunk.js.map