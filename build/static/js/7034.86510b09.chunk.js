"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[7034],{5294:(e,n,i)=>{i.d(n,{LJ:()=>s,SC:()=>l,ar:()=>c,mO:()=>d,nv:()=>a});var t=i(18223),r=i(92947),o=i(96410);const d=o.default.div`
  position: relative;
  padding: 20px;
`,l=(0,o.default)(r.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${e=>{let{theme:n}=e;return n.accent1}};
`,s=o.default.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>{let{theme:n}=e;return n.accent2}};
  border: 1px solid ${e=>{let{theme:n}=e;return n.accent2}};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `}};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${e=>{let{theme:n}=e;return n.accent1}};
  :hover {
    border: 1px solid ${e=>{let{theme:n}=e;return n.accent1}};
  }
  :focus {
    border: 1px solid ${e=>{let{theme:n}=e;return n.accent1}};
    outline: none;
  }
`,a=o.default.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,c=(0,o.default)(t.ar)`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},10278:(e,n,i)=>{i.d(n,{A:()=>a});var t=i(54674),r=i(88178),o=i.n(r);function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},d.apply(this,arguments)}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=(0,t.forwardRef)((function(e,n){var i=e.color,r=void 0===i?"currentColor":i,o=e.size,s=void 0===o?24:o,a=l(e,["color","size"]);return t.createElement("svg",d({ref:n,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),t.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));s.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},s.displayName="Plus";const a=s},12991:(e,n,i)=>{i.d(n,{A:()=>l,q:()=>d});var t=i(96410),r=i(3405),o=i(33370);const d=t.default.main`
  position: relative;
  margin-top: ${e=>{let{$margin:n}=e;return null!==n&&void 0!==n?n:"0px"}};
  max-width: ${e=>{let{$maxWidth:n}=e;return null!==n&&void 0!==n?n:"420px"}};
  width: 100%;
  background: ${e=>{let{theme:n}=e;return n.surface1}};
  border-radius: 16px;
  border: 1px solid ${e=>{let{theme:n}=e;return n.surface3}};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${r.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function l(e){return(0,o.jsx)(d,{...e})}},19933:(e,n,i)=>{i.d(n,{h:()=>a,e:()=>h});var t=i(65264),r=i(54644),o=i(94999),d=i(45416),l=i(54674),s=i(38740);let a=function(e){return e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e}({});function c(e,n,i){var c;const{chainId:u}=(0,r.useWeb3React)(),p=null!==e&&void 0!==e&&null!==(c=e.currency)&&void 0!==c&&c.isToken?e.currency:void 0,x=function(e,n,i){var t;const{account:o}=(0,r.useWeb3React)(),s=null!==e&&void 0!==e&&null!==(t=e.currency)&&void 0!==t&&t.isToken?e.currency:void 0,{tokenAllowance:c}=(0,d.l)(s,null!==o&&void 0!==o?o:void 0,n),u=i(s,n);return(0,l.useMemo)((()=>e&&n?e.currency.isNative?a.APPROVED:c?c.lessThan(e)?u?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN:a.UNKNOWN),[e,u,n,c])}(e,n,i),h=(0,o.dV)(null===p||void 0===p?void 0:p.address),v=(0,l.useCallback)((async()=>{function i(e){console.warn(`${(null===p||void 0===p?void 0:p.symbol)||"Token"} approval failed:`,e)}if(x!==a.NOT_APPROVED)return i("approve was called unnecessarily");if(!u)return i("no chainId");if(!p)return i("no token");if(!h)return i("tokenContract is null");if(!e)return i("missing amount to approve");if(!n)return i("no spender");let r=!1;const o=await h.estimateGas.approve(n,t.Is).catch((()=>(r=!0,h.estimateGas.approve(n,e.quotient.toString()))));return h.approve(n,r?e.quotient.toString():t.Is,{gasLimit:(0,s.K)(o)}).then((i=>({response:i,tokenAddress:p.address,spenderAddress:n,amount:e}))).catch((e=>{throw i(e),e}))}),[x,p,h,e,n,u]);return[x,v]}var u=i(47519),p=i(19456);function x(e){const n=(0,u.OQ)();return(0,l.useCallback)((()=>e().then((e=>{if(e){const{response:i,tokenAddress:t,spenderAddress:r,amount:o}=e;n(i,{type:p.D.APPROVAL,tokenAddress:t,spender:r,amount:o.quotient.toString()})}}))),[n,e])}function h(e,n){const[i,t]=c(e,n,u.yI);return[i,x(t)]}},42789:(e,n,i)=>{i.d(n,{A:()=>j});var t=i(49849),r=i(54644),o=i(50645),d=i(21959),l=i(75423),s=i(87014),a=i(70464),c=i(12763),u=i(54674),p=i(96410),x=i(33121),h=i(3405),v=i(17567),m=i(17516),R=i(33370);const C=p.default.div`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${e=>{let{theme:n}=e;return n.neutral2}};
  background-color: ${e=>{let{theme:n}=e;return n.surface2}};
  z-index: ${h.M.deprecated_zero};

  transform: ${e=>{let{show:n}=e;return n?"translateY(0%)":"translateY(-100%)"}};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,g=(0,p.default)(o.Wv)`
  text-decoration: none;
`,f=(0,p.default)(x.PR.DeprecatedBlue)`
  font-size: 12px;

  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}}
`;function j(e){let{show:n,currencies:i}=e;const{chainId:o}=(0,r.useWeb3React)(),[p,h]=(0,u.useState)(!1),j=o&&i?i.map((e=>null===e||void 0===e?void 0:e.wrapped)):[],y=(0,v.rN)();return(0,R.jsxs)(C,{show:n,children:[(0,R.jsx)(a.A,{isOpen:p,onDismiss:()=>h(!1),children:(0,R.jsx)(d.Ay,{padding:"2rem",children:(0,R.jsxs)(l.mm,{gap:"lg",children:[(0,R.jsxs)(c.JA,{children:[(0,R.jsx)(x.PR.DeprecatedMediumHeader,{children:(0,R.jsx)(t.x6,{id:"7Osz32"})}),(0,R.jsx)(x.US,{onClick:()=>h(!1),"data-testid":"close-icon"})]}),j.map((e=>{var n;return e&&y&&Object.keys(y).includes(e.address)&&(0,R.jsx)(d.l3,{"data-testid":"unsupported-token-card",children:(0,R.jsxs)(l.mm,{gap:"10px",children:[(0,R.jsxs)(c.eF,{gap:"5px",align:"center",children:[(0,R.jsx)(s.A,{currency:e,size:"24px"}),(0,R.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),o&&(0,R.jsx)(x.Gr,{href:(0,m.a)(o,e.address,m.u.ADDRESS),children:(0,R.jsx)(f,{children:e.address})})]})},null===(n=e.address)||void 0===n?void 0:n.concat("not-supported"))})),(0,R.jsx)(l.mm,{gap:"lg",children:(0,R.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:(0,R.jsx)(t.x6,{id:"l7X7DE"})})})]})})}),(0,R.jsx)(g,{padding:"0",onClick:()=>h(!0),"data-testid":"read-more-button",children:(0,R.jsx)(x.PR.DeprecatedBlue,{children:(0,R.jsx)(t.x6,{id:"bIjYSY"})})})]})}},51150:(e,n,i)=>{i.d(n,{U:()=>o});var t=i(9157),r=i(93405);function o(e){var n;if(e.isNative)return e;const i=(0,t.g4)(e.chainId);return i&&null!==(n=r.Im[i])&&void 0!==n&&n.equals(e)?(0,r.cz)(e.chainId):e}},53947:(e,n,i)=>{i.d(n,{U:()=>y,m:()=>N});var t=i(49849),r=i(54644),o=i(86642),d=i(41019),l=i(4126),s=i(85713),a=i(92947),c=i(26467),u=i(56119),p=i(11577),x=i(96410),h=i(33121),v=i(73141),m=i(12763),R=i(33370);const C=x.default.div`
  ${v.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,g=(0,x.default)(l.N_)`
  flex: ${e=>{let{flex:n}=e;return null!==n&&void 0!==n?n:"none"}};
  display: flex;
  align-items: center;

  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `}};
`,f=(0,x.default)(h.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,x.default)(d.A)`
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
`;function y(e){let{origin:n}=e;return(0,R.jsx)(C,{children:(0,R.jsxs)(m.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,R.jsx)(l.N_,{to:n,children:(0,R.jsx)(j,{})}),(0,R.jsx)(f,{children:(0,R.jsx)(t.x6,{id:"LCFvJr"})})]})})}const D=(0,x.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function N(e){let{adding:n,creating:i,autoSlippage:d,positionID:l,children:h}=e;const{chainId:v}=(0,r.useWeb3React)(),f=(0,x.useTheme)(),y=(0,c.j)(),N=(0,s.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(l?`/${l.toString()}`:"");return(0,R.jsx)(C,{children:(0,R.jsxs)(m.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,R.jsx)(g,{to:N,onClick:()=>{n&&(y((0,u.JE)()),y((0,p.JE)()))},flex:h?"1":void 0,children:(0,R.jsx)(j,{stroke:f.neutral2})}),(0,R.jsx)(D,{textAlign:h?"start":"center",children:i?(0,R.jsx)(t.x6,{id:"ma87bD"}):n?(0,R.jsx)(t.x6,{id:"E6MqGy"}):(0,R.jsx)(t.x6,{id:"cJtosk"})}),h&&(0,R.jsx)(a.az,{style:{marginRight:".5rem"},children:h}),(0,R.jsx)(o.A,{autoSlippage:d,chainId:v})]})})}},70694:(e,n,i)=>{i.d(n,{A:()=>P});var t=i(49849),r=i(54644),o=i(18223),d=i(9157),l=i(54563),s=i(54674),a=i(96410),c=i(33121),u=i(73141),p=i(80672),x=i(49225),h=i(23843),v=i(50645),m=i(20295),R=i(87014),C=i(86724),g=i(12763),f=i(21390),j=i(17176),y=i(33370);const D=a.default.div`
  ${u.ZZ};
  position: relative;
  border-radius: ${e=>{let{hideInput:n}=e;return n?"16px":"20px"}};
  background-color: ${e=>{let{theme:n,hideInput:i}=e;return i?"transparent":n.surface2}};

  z-index: 1;
  width: ${e=>{let{hideInput:n}=e;return n?"100%":"initial"}};
  transition: height 1s ease;
  will-change: height;
`,N=a.default.div`
  border-radius: ${e=>{let{hideInput:n}=e;return n?"16px":"20px"}};
  border: 1px solid ${e=>{let{theme:n}=e;return n.surface3}};
  background-color: ${e=>{let{theme:n}=e;return n.surface2}};
  width: ${e=>{let{hideInput:n}=e;return n?"100%":"initial"}};
  ${e=>{let{theme:n,hideInput:i,disabled:t}=e;return!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${i?" transparent":n.surface2};\n    }\n  `}}
`,E=(0,a.default)(v.EA)`
  align-items: center;
  background-color: ${e=>{let{selected:n,theme:i}=e;return n?i.surface1:i.accent1}};
  opacity: ${e=>{let{disabled:n}=e;return n?.4:1}};
  box-shadow: ${e=>{let{theme:n}=e;return n.deprecated_shallowShadow}};
  color: ${e=>{let{selected:n,theme:i}=e;return n?i.neutral1:i.white}};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${e=>{let{hideInput:n}=e;return n?"2.8rem":"2.4rem"}};
  width: ${e=>{let{hideInput:n}=e;return n?"100%":"initial"}};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${e=>{let{hideInput:n}=e;return n?"0":"12px"}};
  :focus,
  :hover {
    background-color: ${e=>{let{selected:n,theme:i}=e;return n?i.surface2:(0,l.e$)(.05,i.accent1)}};
  }
  visibility: ${e=>{let{visible:n}=e;return n?"visible":"hidden"}};
  ${e=>{let{pointerEvents:n}=e;return n&&"pointer-events: none"}}
`,b=a.default.div`
  ${u.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${e=>{let{selected:n}=e;return n?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"}};
`,A=a.default.div`
  ${u.BI};
  align-items: center;
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${e=>{let{theme:n}=e;return(0,l.e$)(.2,n.neutral2)}};
  }
`,_=(0,a.default)(A)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,Y=a.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,U=(0,a.default)(x.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${e=>{let{selected:n,theme:i}=e;return n?i.neutral1:i.white}};
    stroke-width: 1.5px;
  }
`,B=a.default.span`
  ${e=>{let{active:n}=e;return"  margin: 0 0.25rem 0 0.25rem;"}}
  font-size: 20px;
`,w=a.default.button`
  background-color: transparent;
  background-color: ${e=>{let{theme:n}=e;return n.accent2}};
  border: none;
  border-radius: 12px;
  color: ${e=>{let{theme:n}=e;return n.accent1}};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${e=>{let{disabled:n}=e;return n?.4:1}};
  padding: 4px 6px;
  pointer-events: ${e=>{let{disabled:n}=e;return n?"none":"initial"}};

  :hover {
    opacity: ${e=>{let{disabled:n}=e;return n?.4:.8}};
  }

  :focus {
    outline: none;
  }
`,$=(0,a.default)(C.p)`
  ${o.fp};
  text-align: left;
`;function P(e){let{value:n,onUserInput:i,onMax:l,showMaxButton:u,onCurrencySelect:x,currency:v,otherCurrency:C,id:A,showCommonBases:P,showCurrencyAmount:k,disableNonToken:S,renderBalance:I,fiatValue:O,hideBalance:T=!1,pair:q=null,hideInput:V=!1,locked:z=!1,loading:L=!1,...W}=e;const[F,M]=(0,s.useState)(!1),{account:G,chainId:J}=(0,r.useWeb3React)(),H=(0,h.rL)(null!==G&&void 0!==G?G:void 0,null!==v&&void 0!==v?v:void 0),Z=(0,a.useTheme)(),X=(0,s.useCallback)((()=>{M(!1)}),[M]),Q=(0,d.Gv)(J);return(0,y.jsxs)(D,{id:A,hideInput:V,...W,children:[!z&&(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(N,{hideInput:V,disabled:!Q,children:[(0,y.jsxs)(b,{style:V?{padding:"0",borderRadius:"8px"}:{},selected:!x,children:[!V&&(0,y.jsx)($,{className:"token-amount-input",value:n,onUserInput:i,disabled:!Q,$loading:L}),(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(E,{disabled:!Q,visible:void 0!==v,selected:!!v,hideInput:V,className:"open-currency-select-button",onClick:()=>{x&&M(!0)},pointerEvents:x?void 0:"none",children:(0,y.jsxs)(Y,{children:[(0,y.jsxs)(g.Bp,{children:[q?(0,y.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,y.jsx)(m.A,{currency0:q.token0,currency1:q.token1,size:24,margin:!0})}):v&&(0,y.jsx)(R.A,{style:{marginRight:"0.5rem"},currency:v,size:"24px"}),q?(0,y.jsxs)(B,{className:"pair-name-container",children:[null===q||void 0===q?void 0:q.token0.symbol,":",null===q||void 0===q?void 0:q.token1.symbol]}):(0,y.jsx)(B,{className:"token-symbol-container",active:Boolean(v&&v.symbol),children:(v&&v.symbol&&v.symbol.length>20?v.symbol.slice(0,4)+"..."+v.symbol.slice(v.symbol.length-5,v.symbol.length):null===v||void 0===v?void 0:v.symbol)||(0,y.jsx)(t.x6,{id:"T0Y2+3"})})]}),x&&(0,y.jsx)(U,{selected:!!v})]})})})]}),Boolean(!V&&!T&&v)&&(0,y.jsx)(_,{children:(0,y.jsxs)(g.JA,{children:[(0,y.jsx)(o.N3,{$loading:L,children:O&&(0,y.jsx)(j.s,{fiatValue:O})}),G&&(0,y.jsxs)(g.Bp,{style:{height:"17px"},children:[(0,y.jsx)(c.PR.DeprecatedBody,{onClick:l,color:Z.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!T&&v&&H)&&((null===I||void 0===I?void 0:I(H))||(0,y.jsx)(t.x6,{id:"VuFd5C",values:{0:(0,p.N)(H,4)}}))}),Boolean(u&&H)&&(0,y.jsx)(w,{onClick:l,children:(0,y.jsx)(t.x6,{id:"4HtGBb"})})]})]})})]})}),x&&(0,y.jsx)(f.A,{isOpen:F,onDismiss:X,onCurrencySelect:x,selectedCurrency:v,otherSelectedCurrency:C,showCommonBases:P,showCurrencyAmount:k,disableNonToken:S})]})}},80672:(e,n,i)=>{i.d(n,{N:()=>s});var t=i(11549),r=i(99900),o=i(67197),d=i.n(o);function l(e){let n,i,{number:t,locale:o,sigFigs:d,fixedDecimals:l,options:s={}}=e;if(n=!o||o&&!r.dI.includes(o)?r.Xn:[o,r.Xn],s.minimumFractionDigits=s.minimumFractionDigits||l,s.maximumFractionDigits=s.maximumFractionDigits||l,s.maximumSignificantDigits=s.maximumSignificantDigits||l?void 0:d,"number"===typeof t)i=l?parseFloat(t.toFixed(l)):t;else{const e=parseFloat(t.toSignificant(d));i=l?parseFloat(e.toFixed(l)):e}return i.toLocaleString(n,s)}function s(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.Xn,o=arguments.length>3?arguments[3]:void 0;return e?d().equal(e.quotient,d().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new t.Fraction(1,1e5))?`<${l({number:1e-5,locale:i})}`:l({number:e,locale:i,sigFigs:n,fixedDecimals:o}):"-"}},87314:(e,n,i)=>{i.d(n,{w:()=>r});const t=new(i(11549).Fraction)(1,1);function r(e,n){if(n.lessThan(0)||n.greaterThan(t))throw new Error("Unexpected slippage");return[e.multiply(t.subtract(n)).quotient,e.multiply(t.add(n)).quotient]}},97709:(e,n,i)=>{i.r(n),i.d(n,{default:()=>de});var t=i(85713),r=i(49849),o=i(34203),d=i(11549),l=i(54644),s=i(36794),a=i(42789),c=i(65311),u=i(10530),p=i(7951),x=i(54674),h=i(10278),v=i(92947),m=i(96410),R=i(33121),C=i(50645),g=i(21959),f=i(75423),j=i(70694),y=i(20295),D=i(53947),N=i(74222),E=i(12763),b=i(57235),A=i(92627),_=i(93405),Y=i(17567),U=i(19933),B=i(94999),w=i(90495),$=i(265),P=i(91128),k=i(56119),S=i(67197),I=i.n(S),O=i(3368),T=i(26467),q=i(41580),V=i(23843),z=i(33370);const L=I().BigInt(0);function W(){return(0,T.G)((e=>e.mint))}var F=i(47519),M=i(19456),G=i(34342),J=i(38740),H=i(87314),Z=i(97805),X=i(16649),Q=i(12991),K=i(5294),ee=i(87014);function ne(e){var n,i,t,o,d,l,s,a;let{noLiquidity:c,price:u,currencies:p,parsedAmounts:x,poolTokenPercentage:h,onAdd:m}=e;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(r.x6,{id:"C7f3au",values:{0:null===(n=p[k.D0.CURRENCY_A])||void 0===n?void 0:n.symbol}})}),(0,z.jsxs)(E.Bp,{children:[(0,z.jsx)(ee.A,{currency:p[k.D0.CURRENCY_A],style:{marginRight:"8px"}}),(0,z.jsx)(R.PR.DeprecatedBody,{children:null===(i=x[k.D0.CURRENCY_A])||void 0===i?void 0:i.toSignificant(6)})]})]}),(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(r.x6,{id:"C7f3au",values:{0:null===(t=p[k.D0.CURRENCY_B])||void 0===t?void 0:t.symbol}})}),(0,z.jsxs)(E.Bp,{children:[(0,z.jsx)(ee.A,{currency:p[k.D0.CURRENCY_B],style:{marginRight:"8px"}}),(0,z.jsx)(R.PR.DeprecatedBody,{children:null===(o=x[k.D0.CURRENCY_B])||void 0===o?void 0:o.toSignificant(6)})]})]}),(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(r.x6,{id:"3XOwjg"})}),(0,z.jsx)(R.PR.DeprecatedBody,{children:`1 ${null===(d=p[k.D0.CURRENCY_A])||void 0===d?void 0:d.symbol} = ${null===u||void 0===u?void 0:u.toSignificant(4)} ${null===(l=p[k.D0.CURRENCY_B])||void 0===l?void 0:l.symbol}`})]}),(0,z.jsx)(E.JA,{style:{justifyContent:"flex-end"},children:(0,z.jsx)(R.PR.DeprecatedBody,{children:`1 ${null===(s=p[k.D0.CURRENCY_B])||void 0===s?void 0:s.symbol} = ${null===u||void 0===u?void 0:u.invert().toSignificant(4)} ${null===(a=p[k.D0.CURRENCY_A])||void 0===a?void 0:a.symbol}`})}),(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(r.x6,{id:"6MJHcQ"})}),(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(r.x6,{id:"hbO8db",values:{0:c?"100":null===h||void 0===h?void 0:h.toSignificant(4)}})})]}),(0,z.jsx)(C.$$,{style:{margin:"20px 0 0 0"},onClick:m,children:(0,z.jsx)(v.EY,{fontWeight:535,fontSize:20,children:c?(0,z.jsx)(r.x6,{id:"ELJdCv"}):(0,z.jsx)(r.x6,{id:"xqNrBs"})})})]})}function ie(e){var n,i,t,o,d,l,s;let{currencies:a,noLiquidity:c,poolTokenPercentage:u,price:p}=e;const x=(0,m.useTheme)();let h;try{var C;h=null===p||void 0===p||null===(C=p.invert())||void 0===C?void 0:C.toSignificant(6)}catch(g){h=void 0}return(0,z.jsx)(f.mm,{gap:"md",children:(0,z.jsxs)(E.eF,{justify:"space-around",gap:"4px",children:[(0,z.jsxs)(f.mm,{justify:"center",children:[(0,z.jsx)(R.PR.DeprecatedBlack,{"data-testid":"currency-b-price",children:null!==(n=null===p||void 0===p?void 0:p.toSignificant(6))&&void 0!==n?n:"-"}),(0,z.jsx)(v.EY,{fontWeight:535,fontSize:14,color:x.neutral2,pt:1,children:(0,z.jsx)(r.x6,{id:"7Z4WfS",values:{0:null===(i=a[k.D0.CURRENCY_B])||void 0===i?void 0:i.symbol,1:null===(t=a[k.D0.CURRENCY_A])||void 0===t?void 0:t.symbol}})})]}),(0,z.jsxs)(f.mm,{justify:"center",children:[(0,z.jsx)(R.PR.DeprecatedBlack,{"data-testid":"currency-a-price",children:null!==(o=h)&&void 0!==o?o:"-"}),(0,z.jsx)(v.EY,{fontWeight:535,fontSize:14,color:x.neutral2,pt:1,children:(0,z.jsx)(r.x6,{id:"7Z4WfS",values:{0:null===(d=a[k.D0.CURRENCY_A])||void 0===d?void 0:d.symbol,1:null===(l=a[k.D0.CURRENCY_B])||void 0===l?void 0:l.symbol}})})]}),(0,z.jsxs)(f.mm,{justify:"center",children:[(0,z.jsxs)(R.PR.DeprecatedBlack,{children:[c&&p?"100":null!==(s=null!==u&&void 0!==u&&u.lessThan(A.u4)?"<0.01":null===u||void 0===u?void 0:u.toFixed(2))&&void 0!==s?s:"0","%"]}),(0,z.jsx)(v.EY,{fontWeight:535,fontSize:14,color:x.neutral2,pt:1,children:(0,z.jsx)(r.x6,{id:"SbBMxj"})})]})]})})}const te=new d.Percent(50,1e4),re=(0,m.default)(f.mm)`
  gap: 20px;
  margin-bottom: 16px;
`;function oe(){var e,n,i,S,ee,oe,de,le,se,ae,ce,ue;const{currencyIdA:pe,currencyIdB:xe}=(0,t.g)(),he=(0,t.Zp)(),{account:ve,chainId:me,provider:Re}=(0,l.useWeb3React)(),Ce=(0,m.useTheme)(),ge=(0,Y.H2)(pe),fe=(0,Y.H2)(xe),je=me?_.Im[me]:void 0,ye=Boolean(me&&je&&(ge&&ge.equals(je)||fe&&fe.equals(je))),De=(0,s.QO)(),{independentField:Ne,typedValue:Ee,otherTypedValue:be}=W(),{dependentField:Ae,currencies:_e,pair:Ye,pairState:Ue,currencyBalances:Be,parsedAmounts:we,price:$e,noLiquidity:Pe,liquidityMinted:ke,poolTokenPercentage:Se,error:Ie}=function(e,n){var i,t;const{account:o}=(0,l.useWeb3React)(),{independentField:s,typedValue:a,otherTypedValue:c}=W(),u=s===k.D0.CURRENCY_A?k.D0.CURRENCY_B:k.D0.CURRENCY_A,p=(0,x.useMemo)((()=>({[k.D0.CURRENCY_A]:null!==e&&void 0!==e?e:void 0,[k.D0.CURRENCY_B]:null!==n&&void 0!==n?n:void 0})),[e,n]),[h,v]=(0,P.ek)(p[k.D0.CURRENCY_A],p[k.D0.CURRENCY_B]),m=(0,q.P)(null===v||void 0===v?void 0:v.liquidityToken),R=h===P.CN.NOT_EXISTS||Boolean(m&&I().equal(m.quotient,L))||Boolean(h===P.CN.EXISTS&&v&&I().equal(v.reserve0.quotient,L)&&I().equal(v.reserve1.quotient,L)),C=(0,V.ed)(null!==o&&void 0!==o?o:void 0,(0,x.useMemo)((()=>[p[k.D0.CURRENCY_A],p[k.D0.CURRENCY_B]]),[p])),g={[k.D0.CURRENCY_A]:C[0],[k.D0.CURRENCY_B]:C[1]},f=(0,O.A)(a,p[s]),j=(0,x.useMemo)((()=>{if(R)return c&&p[u]?(0,O.A)(c,p[u]):void 0;if(f){const i=null===f||void 0===f?void 0:f.wrapped,[t,r]=[null===e||void 0===e?void 0:e.wrapped,null===n||void 0===n?void 0:n.wrapped];if(t&&r&&i&&v){const o=u===k.D0.CURRENCY_B?n:e,l=u===k.D0.CURRENCY_B?v.priceOf(t).quote(i):v.priceOf(r).quote(i);return null!==o&&void 0!==o&&o.isNative?d.CurrencyAmount.fromRawAmount(o,l.quotient):l}}}),[R,c,p,u,f,e,n,v]),y=(0,x.useMemo)((()=>({[k.D0.CURRENCY_A]:s===k.D0.CURRENCY_A?f:j,[k.D0.CURRENCY_B]:s===k.D0.CURRENCY_A?j:f})),[j,f,s]),D=(0,x.useMemo)((()=>{if(!R){const n=null===e||void 0===e?void 0:e.wrapped;return v&&n?v.priceOf(n):void 0}{const{[k.D0.CURRENCY_A]:e,[k.D0.CURRENCY_B]:n}=y;if(null!==e&&void 0!==e&&e.greaterThan(0)&&null!==n&&void 0!==n&&n.greaterThan(0)){const i=n.divide(e);return new d.Price(e.currency,n.currency,i.denominator,i.numerator)}}}),[e,R,v,y]),N=(0,x.useMemo)((()=>{const{[k.D0.CURRENCY_A]:e,[k.D0.CURRENCY_B]:n}=y,[i,t]=[null===e||void 0===e?void 0:e.wrapped,null===n||void 0===n?void 0:n.wrapped];if(v&&m&&i&&t)try{return v.getLiquidityMinted(m,i,t)}catch(b){return void console.error(b)}}),[y,v,m]),E=(0,x.useMemo)((()=>N&&m?new d.Percent(N.quotient,m.add(N).quotient):void 0),[N,m]);let b;var A,_;o||(b=(0,z.jsx)(r.x6,{id:"VHOVEJ"})),h===P.CN.INVALID&&(b=null!==(A=b)&&void 0!==A?A:(0,z.jsx)(r.x6,{id:"R7D79P"})),y[k.D0.CURRENCY_A]&&y[k.D0.CURRENCY_B]||(b=null!==(_=b)&&void 0!==_?_:(0,z.jsx)(r.x6,{id:"iPMIoT"}));const{[k.D0.CURRENCY_A]:Y,[k.D0.CURRENCY_B]:U}=y;var B,w;return Y&&null!==g&&void 0!==g&&null!==(i=g[k.D0.CURRENCY_A])&&void 0!==i&&i.lessThan(Y)&&(b=(0,z.jsx)(r.x6,{id:"m6RmA/",values:{0:null===(B=p[k.D0.CURRENCY_A])||void 0===B?void 0:B.symbol}})),U&&null!==g&&void 0!==g&&null!==(t=g[k.D0.CURRENCY_B])&&void 0!==t&&t.lessThan(U)&&(b=(0,z.jsx)(r.x6,{id:"m6RmA/",values:{0:null===(w=p[k.D0.CURRENCY_B])||void 0===w?void 0:w.symbol}})),{dependentField:u,currencies:p,pair:v,pairState:h,currencyBalances:g,parsedAmounts:y,price:D,noLiquidity:R,liquidityMinted:N,poolTokenPercentage:E,error:b}}(null!==ge&&void 0!==ge?ge:void 0,null!==fe&&void 0!==fe?fe:void 0),{onFieldAInput:Oe,onFieldBInput:Te}=function(e){const n=(0,T.j)();return{onFieldAInput:(0,x.useCallback)((i=>{n((0,k.$M)({field:k.D0.CURRENCY_A,typedValue:i,noLiquidity:!0===e}))}),[n,e]),onFieldBInput:(0,x.useCallback)((i=>{n((0,k.$M)({field:k.D0.CURRENCY_B,typedValue:i,noLiquidity:!0===e}))}),[n,e])}}(Pe),qe=!Ie,[Ve,ze]=(0,x.useState)(!1),[Le,We]=(0,x.useState)(!1),Fe=(0,$.A)(),Me=(0,G.co)(te),[Ge,Je]=(0,x.useState)(""),He={[Ne]:Ee,[Ae]:Pe?be:null!==(e=null===(n=we[Ae])||void 0===n?void 0:n.toSignificant(6))&&void 0!==e?e:""},Ze=[k.D0.CURRENCY_A,k.D0.CURRENCY_B].reduce(((e,n)=>({...e,[n]:(0,X.r)(Be[n])})),{}),Xe=[k.D0.CURRENCY_A,k.D0.CURRENCY_B].reduce(((e,n)=>{var i,t;return{...e,[n]:null===(i=Ze[n])||void 0===i?void 0:i.equalTo(null!==(t=we[n])&&void 0!==t?t:"0")}}),{}),Qe=(0,B.Ps)(),[Ke,en]=(0,U.e)(we[k.D0.CURRENCY_A],null===Qe||void 0===Qe?void 0:Qe.address),[nn,tn]=(0,U.e)(we[k.D0.CURRENCY_B],null===Qe||void 0===Qe?void 0:Qe.address),rn=(0,F.OQ)(),on=(0,p.S)();async function dn(){if(!me||!Re||!ve||!Qe||!on)return;const{[k.D0.CURRENCY_A]:e,[k.D0.CURRENCY_B]:n}=we;if(!e||!n||!ge||!fe||!Fe)return;const i={[k.D0.CURRENCY_A]:(0,H.w)(e,Pe?A.dU:Me)[0],[k.D0.CURRENCY_B]:(0,H.w)(n,Pe?A.dU:Me)[0]};let t,r,d,l;if(ge.isNative||fe.isNative){var s,a,c;const u=fe.isNative;t=Qe.estimateGas.addLiquidityETH,r=Qe.addLiquidityETH,d=[null!==(s=null===(a=u?ge:fe)||void 0===a||null===(c=a.wrapped)||void 0===c?void 0:c.address)&&void 0!==s?s:"",(u?e:n).quotient.toString(),i[u?k.D0.CURRENCY_A:k.D0.CURRENCY_B].toString(),i[u?k.D0.CURRENCY_B:k.D0.CURRENCY_A].toString(),ve,Fe.toHexString()],l=o.gH.from((u?n:e).quotient.toString())}else{var u,p,x,h;t=Qe.estimateGas.addLiquidity,r=Qe.addLiquidity,d=[null!==(u=null===ge||void 0===ge||null===(p=ge.wrapped)||void 0===p?void 0:p.address)&&void 0!==u?u:"",null!==(x=null===fe||void 0===fe||null===(h=fe.wrapped)||void 0===h?void 0:h.address)&&void 0!==x?x:"",e.quotient.toString(),n.quotient.toString(),i[k.D0.CURRENCY_A].toString(),i[k.D0.CURRENCY_B].toString(),ve,Fe.toHexString()],l=null}We(!0),await t(...d,l?{value:l}:{}).then((e=>r(...d,{...l?{value:l}:{},gasLimit:(0,J.K)(e)}).then((e=>{var n,i,t,r;We(!1);const o={type:M.D.ADD_LIQUIDITY_V2_POOL,baseCurrencyId:(0,Z.V)(ge),expectedAmountBaseRaw:null!==(n=null===(i=we[k.D0.CURRENCY_A])||void 0===i?void 0:i.quotient.toString())&&void 0!==n?n:"0",quoteCurrencyId:(0,Z.V)(fe),expectedAmountQuoteRaw:null!==(t=null===(r=we[k.D0.CURRENCY_B])||void 0===r?void 0:r.quotient.toString())&&void 0!==t?t:"0"};rn(e,o),Je(e.hash)})))).catch((e=>{We(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)}))}const ln=()=>{var e,n,i,t;return(0,z.jsx)(re,{children:Pe?(0,z.jsx)(g.R4,{mt:"20px",$borderRadius:"20px",children:(0,z.jsxs)(E.eF,{justify:"space-between",children:[(0,z.jsx)(v.EY,{fontSize:"24px",fontWeight:535,lineHeight:"42px",marginRight:10,children:(null===(e=_e[k.D0.CURRENCY_A])||void 0===e?void 0:e.symbol)+"/"+(null===(n=_e[k.D0.CURRENCY_B])||void 0===n?void 0:n.symbol)}),(0,z.jsx)(y.A,{currency0:_e[k.D0.CURRENCY_A],currency1:_e[k.D0.CURRENCY_B],size:30})]})}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(E.sZ,{style:{marginTop:"20px"},children:[(0,z.jsx)(v.EY,{fontSize:"48px",fontWeight:535,lineHeight:"42px",marginRight:10,children:null===ke||void 0===ke?void 0:ke.toSignificant(6)}),(0,z.jsx)(y.A,{currency0:_e[k.D0.CURRENCY_A],currency1:_e[k.D0.CURRENCY_B],size:30})]}),(0,z.jsx)(E.Ay,{children:(0,z.jsx)(v.EY,{fontSize:"24px",children:(null===(i=_e[k.D0.CURRENCY_A])||void 0===i?void 0:i.symbol)+"/"+(null===(t=_e[k.D0.CURRENCY_B])||void 0===t?void 0:t.symbol)+" Pool Tokens"})}),(0,z.jsx)(R.PR.DeprecatedItalic,{fontSize:12,textAlign:"left",padding:"8px 0 0 0 ",children:(0,z.jsx)(r.x6,{id:"4nBvG6",values:{0:Me.toSignificant(4)}})})]})})},sn=()=>(0,z.jsx)(ne,{price:$e,currencies:_e,parsedAmounts:we,noLiquidity:Pe,onAdd:dn,poolTokenPercentage:Se}),an=(0,z.jsx)(r.x6,{id:"+U2TkE",values:{0:null===(i=we[k.D0.CURRENCY_A])||void 0===i?void 0:i.toSignificant(6),1:null===(S=_e[k.D0.CURRENCY_A])||void 0===S?void 0:S.symbol,2:null===(ee=we[k.D0.CURRENCY_B])||void 0===ee?void 0:ee.toSignificant(6),3:null===(oe=_e[k.D0.CURRENCY_B])||void 0===oe?void 0:oe.symbol}}),cn=(0,x.useCallback)((e=>{const n=(0,Z.V)(e);he(n===xe?`/add/v2/${xe}/${pe}`:`/add/v2/${n}/${xe}`)}),[xe,he,pe]),un=(0,x.useCallback)((e=>{const n=(0,Z.V)(e);he(pe===n?xe?`/add/v2/${xe}/${n}`:`/add/v2/${n}`:`/add/v2/${pe||"ETH"}/${n}`)}),[pe,he,xe]),pn=(0,x.useCallback)((()=>{ze(!1),Ge&&Oe(""),Je("")}),[Oe,Ge]),{pathname:xn}=(0,t.zy)(),hn=xn.includes("/create"),vn=(0,w.C)(null===_e||void 0===_e?void 0:_e.CURRENCY_A,null===_e||void 0===_e?void 0:_e.CURRENCY_B);return on?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(Q.A,{children:[(0,z.jsx)(D.m,{creating:hn,adding:!0,autoSlippage:te}),(0,z.jsxs)(K.mO,{children:[(0,z.jsx)(b.A,{isOpen:Ve,onDismiss:pn,attemptingTxn:Le,hash:Ge,reviewContent:()=>(0,z.jsx)(b.Y,{title:Pe?(0,z.jsx)(r.x6,{id:"aM1tos"}):(0,z.jsx)(r.x6,{id:"AeZIvT"}),onDismiss:pn,topContent:ln,bottomContent:sn}),pendingText:an,currencyToAdd:null===Ye||void 0===Ye?void 0:Ye.liquidityToken}),(0,z.jsxs)(f.mm,{gap:"20px",children:[Pe||(hn?(0,z.jsx)(f.YA,{children:(0,z.jsx)(g.tZ,{children:(0,z.jsxs)(f.mm,{gap:"10px",children:[(0,z.jsx)(R.PR.DeprecatedLink,{fontWeight:535,color:"accent1",children:(0,z.jsx)(r.x6,{id:"thdBpY"})}),(0,z.jsx)(R.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,z.jsx)(r.x6,{id:"TscS1q"})}),(0,z.jsx)(R.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,z.jsx)(r.x6,{id:"UEmvHF"})})]})})}):(0,z.jsx)(f.YA,{children:(0,z.jsx)(g.tZ,{children:(0,z.jsx)(f.mm,{gap:"10px",children:(0,z.jsxs)(R.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:[(0,z.jsx)("b",{children:(0,z.jsx)(r.x6,{id:"0l56BI"})})," ",(0,z.jsx)(r.x6,{id:"NqgbmN"})]})})})})),(0,z.jsx)(j.A,{value:He[k.D0.CURRENCY_A],onUserInput:Oe,onMax:()=>{var e,n;Oe(null!==(e=null===(n=Ze[k.D0.CURRENCY_A])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},onCurrencySelect:cn,showMaxButton:!Xe[k.D0.CURRENCY_A],currency:null!==(de=_e[k.D0.CURRENCY_A])&&void 0!==de?de:null,id:"add-liquidity-input-tokena",showCommonBases:!0}),(0,z.jsx)(f.YA,{children:(0,z.jsx)(h.A,{size:"16",color:Ce.neutral2})}),(0,z.jsx)(j.A,{value:He[k.D0.CURRENCY_B],onUserInput:Te,onCurrencySelect:un,onMax:()=>{var e,n;Te(null!==(e=null===(n=Ze[k.D0.CURRENCY_B])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},showMaxButton:!Xe[k.D0.CURRENCY_B],currency:null!==(le=_e[k.D0.CURRENCY_B])&&void 0!==le?le:null,id:"add-liquidity-input-tokenb",showCommonBases:!0}),_e[k.D0.CURRENCY_A]&&_e[k.D0.CURRENCY_B]&&Ue!==P.CN.INVALID&&(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(g.R4,{padding:"0px",$borderRadius:"20px",children:[(0,z.jsx)(E.JA,{padding:"1rem",children:(0,z.jsx)(R.PR.DeprecatedSubHeader,{fontWeight:535,fontSize:14,children:Pe?(0,z.jsx)(r.x6,{id:"D52j9u"}):(0,z.jsx)(r.x6,{id:"vmTbpu"})})})," ",(0,z.jsx)(g.R4,{padding:"1rem",$borderRadius:"20px",children:(0,z.jsx)(ie,{currencies:_e,poolTokenPercentage:Se,noLiquidity:Pe,price:$e})})]})}),vn?(0,z.jsx)(C.$$,{disabled:!0,children:(0,z.jsx)(R.PR.DeprecatedMain,{mb:"4px",children:(0,z.jsx)(r.x6,{id:"Z941Tw"})})}):ve?(0,z.jsxs)(f.mm,{gap:"md",children:[(Ke===U.h.NOT_APPROVED||Ke===U.h.PENDING||nn===U.h.NOT_APPROVED||nn===U.h.PENDING)&&qe&&(0,z.jsxs)(E.JA,{children:[Ke!==U.h.APPROVED&&(0,z.jsx)(C.$$,{onClick:en,disabled:Ke===U.h.PENDING,width:nn!==U.h.APPROVED?"48%":"100%",children:Ke===U.h.PENDING?(0,z.jsx)(K.nv,{children:(0,z.jsx)(r.x6,{id:"MfyhMG",values:{0:null===(se=_e[k.D0.CURRENCY_A])||void 0===se?void 0:se.symbol}})}):(0,z.jsx)(r.x6,{id:"fgGids",values:{0:null===(ae=_e[k.D0.CURRENCY_A])||void 0===ae?void 0:ae.symbol}})}),nn!==U.h.APPROVED&&(0,z.jsx)(C.$$,{onClick:tn,disabled:nn===U.h.PENDING,width:Ke!==U.h.APPROVED?"48%":"100%",children:nn===U.h.PENDING?(0,z.jsx)(K.nv,{children:(0,z.jsx)(r.x6,{id:"MfyhMG",values:{0:null===(ce=_e[k.D0.CURRENCY_B])||void 0===ce?void 0:ce.symbol}})}):(0,z.jsx)(r.x6,{id:"fgGids",values:{0:null===(ue=_e[k.D0.CURRENCY_B])||void 0===ue?void 0:ue.symbol}})})]}),(0,z.jsx)(C.Jk,{onClick:()=>{ze(!0)},disabled:!qe||Ke!==U.h.APPROVED||nn!==U.h.APPROVED,error:!qe&&!!we[k.D0.CURRENCY_A]&&!!we[k.D0.CURRENCY_B],children:(0,z.jsx)(v.EY,{fontSize:20,fontWeight:535,children:null!==Ie&&void 0!==Ie?Ie:(0,z.jsx)(r.x6,{id:"bwSQI0"})})})]}):(0,z.jsx)(C.N$,{onClick:De,children:(0,z.jsx)(r.x6,{id:"VHOVEJ"})})]})]})]}),(0,z.jsx)(c.j,{}),vn?(0,z.jsx)(a.A,{show:vn,currencies:[_e.CURRENCY_A,_e.CURRENCY_B]}):Ye&&!Pe&&Ue!==P.CN.INVALID?(0,z.jsx)(f.mm,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,z.jsx)(N.tA,{showUnwrapped:ye,pair:Ye})}):null]}):(0,z.jsx)(u.O,{})}function de(){const{currencyIdA:e,currencyIdB:n}=(0,t.g)();return e&&n&&e.toLowerCase()===n.toLowerCase()?(0,z.jsx)(t.C5,{to:`/add/v2/${e}`,replace:!0}):(0,z.jsx)(oe,{})}}}]);
//# sourceMappingURL=7034.86510b09.chunk.js.map