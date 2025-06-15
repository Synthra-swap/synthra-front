"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[87],{7951:(e,t,r)=>{r.d(t,{S:()=>o});var n=r(54644),i=r(9157);function o(){const{chainId:e}=(0,n.useWeb3React)();return e&&i.vC.includes(e)}},80087:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Te});var n,i,o,l=r(49849),s=r(54644),d=r(36794),a=r(50645),c=r(75423),p=r(54674),u=r(4126),x=r(96410),h=r(33121);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(null,arguments)}function m(e,t){let{title:r,titleId:l,...s}=e;return p.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},s),r?p.createElement("title",{id:l},r):null,n||(n=p.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=p.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=p.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const g=p.forwardRef(m);r.p;var j=r(55955),v=r(58938),w=r(4862),y=r(33370);let b=function(e){return e.LEFT="LEFT",e.RIGHT="RIGHT",e}({});const k=(0,x.default)(g)`
  path {
    stroke: ${e=>{let{theme:t}=e;return t.neutral1}};
  }
`,O=x.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,$=x.default.span`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${e=>{let{theme:t}=e;return t.surface1}};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface1}};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${e=>{let{flyoutAlignment:t=b.RIGHT}=e;return t===b.RIGHT?x.css`
          right: 0rem;
        `:x.css`
          left: 0rem;
        `}};
`,E=(0,x.default)(h.Gr)`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  :hover {
    color: ${e=>{let{theme:t}=e;return t.neutral1}};
    cursor: pointer;
    text-decoration: none;
  }
`,z=(0,x.default)(u.N_)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.neutral1}};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,L=(0,x.default)(E)`
  width: max-content;
  text-decoration: none;
`;var P=r(57281),C=r(24738);const T=x.default.div`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};

  @media screen and (min-width: ${C.FI.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,_=x.default.div`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};

  @media screen and (min-width: ${C.FI.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${C.FI.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,I=x.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,R=x.default.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.accent1}};
  font-size: 14px;
  font-weight: 485;
`;function A(e){let{positions:t,setUserHideClosedPositions:r,userHideClosedPositions:n}=e;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(T,{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(l.x6,{id:"LcLwJZ"}),t&&" ("+t.length+")"]}),(0,y.jsx)(R,{id:"desktop-hide-closed-positions",onClick:()=>{r(!n)},children:n?(0,y.jsx)(l.x6,{id:"GOctE4"}):(0,y.jsx)(l.x6,{id:"l+HNUa"})})]}),(0,y.jsxs)(_,{children:[(0,y.jsx)(l.x6,{id:"LcLwJZ"}),(0,y.jsx)(I,{children:(0,y.jsx)(R,{onClick:()=>{r(!n)},children:n?(0,y.jsx)(l.x6,{id:"GOctE4"}):(0,y.jsx)(l.x6,{id:"l+HNUa"})})})]}),t.map((e=>(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(P.A,{...e},e.tokenId.toString())})))]})}var W=r(12763),S=r(65311),H=r(9157);function Z(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}var F=r(17567),M=r(95626),G=r(96503),B=r(66295);const U=new M.KA(G);function N(e){const{chainId:t}=(0,s.useWeb3React)(),r=(0,F.VU)(t),n=(0,p.useMemo)((()=>function(e){return Array.from(new Set(e.reduce(((e,t)=>e.concat(t.token0,t.token1)),[])))}(e).filter((e=>!r[e]))),[e,r]),i=(o=n,l="symbol",(0,B._l)(o,U,l,void 0,B.bo));var o,l;const d=(0,p.useMemo)((()=>{const e={};for(let t=0;t<n.length;t++){const r=i[t].result;if(!r)continue;e[n[t]]=r}return e}),[n,i]);return(0,p.useMemo)((()=>e.filter((e=>{var t,n;let i=0;const o=r[e.token0],l=r[e.token1];if(o&&i++,l&&i++,2===i)return!0;let s=0;return Z(null!==(t=null===o||void 0===o?void 0:o.symbol)&&void 0!==t?t:d[e.token0])&&s++,Z(null!==(n=null===l||void 0===l?void 0:l.symbol)&&void 0!==n?n:d[e.token1])&&s++,1===i&&s<2||0===s}))),[d,e,r])}var J=r(7951),Q=r(25916),V=r(26047),Y=r(88178),q=r.n(Y);function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D.apply(this,arguments)}function K(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var X=(0,p.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,l=K(e,["color","size"]);return p.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),p.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),p.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));X.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},X.displayName="Inbox";const ee=X;var te=r(69465);function re(){return re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},re.apply(this,arguments)}function ne(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var ie=(0,p.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,l=ne(e,["color","size"]);return p.createElement("svg",re({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),p.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),p.createElement("polyline",{points:"2 17 12 22 22 17"}),p.createElement("polyline",{points:"2 12 12 17 22 12"}))}));ie.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},ie.displayName="Layers";const oe=ie;function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},le.apply(this,arguments)}function se(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var de=(0,p.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,l=se(e,["color","size"]);return p.createElement("svg",le({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),p.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),p.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));de.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},de.displayName="BookOpen";const ae=de;var ce=r(62912),pe=r(34342),ue=r(38338);const xe=x.default.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `}};
`;(0,x.default)(h.Gr)`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};

  * {
    color: ${e=>{let{theme:t}=e;return t.neutral1}};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,(0,x.default)(h.PR.DeprecatedLabel)`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `}};
`,(0,x.default)(c.mm)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `}};
  justify-content: space-between;
`;function he(){const{chainId:e}=(0,s.useWeb3React)(),{infoLink:t}=(0,ue.Ew)(e);return(0,y.jsx)(xe,{})}var fe=r(5294);const me=(0,x.default)(c.mm)`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.md}px`}}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,ge=(0,x.default)(W.JA)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,je=(0,x.default)(W.Bp)`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,ve=(0,x.default)((e=>{let{flyoutAlignment:t=b.RIGHT,ToggleUI:r,menuItems:n,...i}=e;const o=(0,p.useRef)(),l=(0,v.VQ)(w.U6.POOL_OVERVIEW_OPTIONS),s=(0,v.nf)(w.U6.POOL_OVERVIEW_OPTIONS);(0,j.W)(o,l?s:void 0);const d=r||k;return(0,y.jsxs)(O,{ref:o,...i,children:[(0,y.jsx)(d,{onClick:s}),l&&(0,y.jsx)($,{flyoutAlignment:t,children:n.map(((e,t)=>{let{content:r,link:n,external:i}=e;return i?(0,y.jsx)(L,{href:n,children:r},t):(0,y.jsx)(z,{to:n,children:r},t)}))})]})}))`
  margin-left: 0;
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,we=x.default.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,ye=(0,x.default)(a.EA)`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.surface1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  margin-right: 8px;
`,be=(0,x.default)(h.PR.BodyPrimary)`
  align-items: center;
  display: flex;
`,ke=x.default.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
  
  .icon-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 2em;
  }
`,Oe=x.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,$e=(0,x.default)(V.A)`
  ${Oe}
`,Ee=(0,x.default)(ee)`
  ${Oe}
`,ze=(0,x.default)(a.$$)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,Le=x.default.main`
  background-color: ${e=>{let{theme:t}=e;return t.surface1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Pe(){return(0,y.jsxs)(fe.ar,{children:[(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{})]})}function Ce(){const e=(0,x.useTheme)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(me,{children:(0,y.jsx)(c.mm,{gap:"lg",justify:"center",children:(0,y.jsxs)(c.mm,{gap:"lg",style:{width:"100%"},children:[(0,y.jsx)(ge,{padding:"0",children:(0,y.jsx)(h.PR.LargeHeader,{children:(0,y.jsx)(l.x6,{id:"lQfOr9"})})}),(0,y.jsx)(Le,{children:(0,y.jsx)(ke,{children:(0,y.jsxs)(h.PR.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,y.jsx)($e,{strokeWidth:1.2}),(0,y.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,y.jsx)(l.x6,{id:"nFZR3H"})})]})})})]})})}),(0,y.jsx)(S.j,{})]})}function Te(){var e;const{account:t,chainId:r}=(0,s.useWeb3React)(),n=(0,J.S)(),i=(0,d.QO)(),o=(0,x.useTheme)(),[f,m]=(0,pe.z3)(),{positions:g,loading:j}=(0,Q.J)(t),[v,w]=null!==(e=null===g||void 0===g?void 0:g.reduce(((e,t)=>{var r;return e[null!==(r=t.liquidity)&&void 0!==r&&r.isZero()?1:0].push(t),e}),[[],[]]))&&void 0!==e?e:[[],[]],k=N((0,p.useMemo)((()=>[...v,...f?[]:w]),[w,v,f]));if(console.log("@@@@@@@ filteredPositions",k),!(0,H.Gv)(r))return(0,y.jsx)(Ce,{});const O=Boolean(!t),$=[{content:(0,y.jsxs)(we,{children:[(0,y.jsx)(l.x6,{id:"y5rS9U"}),(0,y.jsx)(te.A,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,y.jsxs)(we,{children:[(0,y.jsx)(l.x6,{id:"F+Ocff"}),(0,y.jsx)(oe,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,y.jsxs)(we,{children:[(0,y.jsx)(l.x6,{id:"rjZpLn"}),(0,y.jsx)(ae,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(me,{children:(0,y.jsx)(c.mm,{gap:"lg",justify:"center",children:(0,y.jsxs)(c.mm,{gap:"lg",style:{width:"100%"},children:[(0,y.jsxs)(ge,{padding:"0",children:[(0,y.jsx)(h.PR.LargeHeader,{children:(0,y.jsx)(l.x6,{id:"lQfOr9"})}),(0,y.jsxs)(je,{children:[n&&(0,y.jsx)(ve,{menuItems:$,flyoutAlignment:b.LEFT,ToggleUI:e=>(0,y.jsx)(ye,{...e,children:(0,y.jsxs)(be,{children:[(0,y.jsx)(l.x6,{id:"2FYpfJ"}),(0,y.jsx)(ce.A,{size:15})]})})}),(0,y.jsxs)(ze,{"data-cy":"join-pool-button",id:"join-pool-button",as:u.N_,to:"/add/UOMI",children:["+ ",(0,y.jsx)(l.x6,{id:"1k0YWs"})]})]})]}),(0,y.jsx)(Le,{children:j?(0,y.jsx)(Pe,{}):k&&w&&k.length>0?(0,y.jsx)(A,{positions:k,setUserHideClosedPositions:m,userHideClosedPositions:f}):(0,y.jsxs)(ke,{children:[(0,y.jsxs)(h.PR.BodyPrimary,{color:o.neutral3,textAlign:"center",children:[(0,y.jsx)("div",{className:"icon-container",children:(0,y.jsx)(Ee,{strokeWidth:1})}),(0,y.jsx)("div",{children:(0,y.jsx)(l.x6,{id:"YgSnQ0"})})]}),!O&&w.length>0&&(0,y.jsx)(a.C3,{style:{marginTop:".5rem"},onClick:()=>m(!f),children:(0,y.jsx)(l.x6,{id:"GOctE4"})}),O&&(0,y.jsx)(a.$$,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:i,children:(0,y.jsx)(l.x6,{id:"GdzYJ9"})})]})}),(0,y.jsx)(h.QZ,{children:(0,y.jsx)(he,{})})]})})}),(0,y.jsx)(S.j,{})]})}}}]);
//# sourceMappingURL=87.0fff7a6f.chunk.js.map