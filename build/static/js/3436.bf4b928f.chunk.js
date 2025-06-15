"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[3436],{5294:(e,n,t)=>{t.d(n,{LJ:()=>d,SC:()=>o,ar:()=>c,mO:()=>s,nv:()=>a});var r=t(18223),i=t(92947),l=t(96410);const s=l.default.div`
  position: relative;
  padding: 20px;
`,o=(0,l.default)(i.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${e=>{let{theme:n}=e;return n.accent1}};
`,d=l.default.button`
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
`,a=l.default.span`
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
`,c=(0,l.default)(r.ar)`
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
`},10278:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(54674),i=t(88178),l=t.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,l=e.size,d=void 0===l?24:l,a=o(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));d.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},d.displayName="Plus";const a=d},12991:(e,n,t)=>{t.d(n,{A:()=>o,q:()=>s});var r=t(96410),i=t(3405),l=t(33370);const s=r.default.main`
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
  z-index: ${i.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function o(e){return(0,l.jsx)(s,{...e})}},38835:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var r=t(49849),i=t(54644),l=t(10530),s=t(7951),o=t(67197),d=t.n(o),a=t(54674),c=t(10278),x=t(85713),u=t(92947),p=t(33121),h=t(50645),m=t(21959),g=t(75423),j=t(87014),f=t(53947),v=t(74222),y=t(12763),b=t(21390),E=t(65311),O=t(93405),A=t(91128),S=t(23843),w=t(34342),k=t(97805),T=t(12991),$=t(5294),C=t(33370),I=function(e){return e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1",e}(I||{});function N(){var e,n;const t=new URLSearchParams((0,x.zy)().search),{account:o,chainId:N}=(0,i.useWeb3React)(),[Y,_]=(0,a.useState)(!1),[z,L]=(0,a.useState)(I.TOKEN1),[R,B]=(0,a.useState)((()=>N?(0,O.cz)(N):null)),[W,K]=(0,a.useState)(null),[q,D]=(0,A.ek)(null!==R&&void 0!==R?R:void 0,null!==W&&void 0!==W?W:void 0),J=(0,w.Ep)();(0,a.useEffect)((()=>{D&&J(D)}),[D,J]);const P=q===A.CN.NOT_EXISTS||Boolean(q===A.CN.EXISTS&&D&&d().equal(D.reserve0.quotient,d().BigInt(0))&&d().equal(D.reserve1.quotient,d().BigInt(0))),V=(0,S.nC)(null!==o&&void 0!==o?o:void 0,null===D||void 0===D?void 0:D.liquidityToken),M=Boolean(V&&d().greaterThan(V.quotient,d().BigInt(0))),U=(0,a.useCallback)((e=>{z===I.TOKEN0?B(e):K(e)}),[z]),F=(0,a.useCallback)((()=>{_(!1)}),[_]),X=(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsx)(u.EY,{textAlign:"center",children:o?(0,C.jsx)(r.x6,{id:"pKO91W"}):(0,C.jsx)(r.x6,{id:"4YB3Bt"})})});return(0,s.S)()?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(T.A,{children:[(0,C.jsx)(f.U,{origin:null!==(e=t.get("origin"))&&void 0!==e?e:"/pools/v2"}),(0,C.jsxs)(g.mm,{style:{padding:"1rem"},gap:"md",children:[(0,C.jsx)(m.tZ,{children:(0,C.jsx)(g.mm,{gap:"10px",children:(0,C.jsx)(p.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,C.jsx)(r.x6,{id:"qtO+b3",components:{0:(0,C.jsx)("b",{})}})})})}),(0,C.jsx)(h.KM,{onClick:()=>{_(!0),L(I.TOKEN0)},children:R?(0,C.jsxs)(y.Ay,{children:[(0,C.jsx)(j.A,{currency:R}),(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:R.symbol})]}):(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,C.jsx)(r.x6,{id:"T0Y2+3"})})}),(0,C.jsx)(g.YA,{children:(0,C.jsx)(c.A,{size:"16",color:"#888D9B"})}),(0,C.jsx)(h.KM,{onClick:()=>{_(!0),L(I.TOKEN1)},children:W?(0,C.jsxs)(y.Ay,{children:[(0,C.jsx)(j.A,{currency:W}),(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:W.symbol})]}):(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,C.jsx)(r.x6,{id:"T0Y2+3"})})}),M&&(0,C.jsxs)(g.YA,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,C.jsx)(u.EY,{textAlign:"center",fontWeight:535,children:(0,C.jsx)(r.x6,{id:"lYF0uv"})}),(0,C.jsx)(p.Bl,{to:"pools/v2",children:(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(r.x6,{id:"/4YRTg"})})})]}),R&&W?q===A.CN.EXISTS?M&&D?(0,C.jsx)(v.tA,{pair:D,border:"1px solid #CED0D9"}):(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsxs)(g.mm,{gap:"sm",justify:"center",children:[(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(r.x6,{id:"Lu0Uod"})}),(0,C.jsx)(p.Bl,{to:`/add/${(0,k.V)(R)}/${(0,k.V)(W)}`,children:(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(r.x6,{id:"xJEVlK"})})})]})}):P?(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsxs)(g.mm,{gap:"sm",justify:"center",children:[(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(r.x6,{id:"+8rnEI"})}),(0,C.jsx)(p.Bl,{to:`/add/${(0,k.V)(R)}/${(0,k.V)(W)}`,children:(0,C.jsx)(r.x6,{id:"I1gztT"})})]})}):q===A.CN.INVALID?(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsx)(g.mm,{gap:"sm",justify:"center",children:(0,C.jsx)(u.EY,{textAlign:"center",fontWeight:535,children:(0,C.jsx)(r.x6,{id:"ovVGFw"})})})}):q===A.CN.LOADING?(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsx)(g.mm,{gap:"sm",justify:"center",children:(0,C.jsxs)(u.EY,{textAlign:"center",children:[(0,C.jsx)(r.x6,{id:"yQE2r9"}),(0,C.jsx)($.nv,{})]})})}):null:X]}),(0,C.jsx)(b.A,{isOpen:Y,onCurrencySelect:U,onDismiss:F,showCommonBases:!0,selectedCurrency:null!==(n=z===I.TOKEN0?W:R)&&void 0!==n?n:void 0})]}),(0,C.jsx)(E.j,{})]}):(0,C.jsx)(l.O,{})}},51150:(e,n,t)=>{t.d(n,{U:()=>l});var r=t(9157),i=t(93405);function l(e){var n;if(e.isNative)return e;const t=(0,r.g4)(e.chainId);return t&&null!==(n=i.Im[t])&&void 0!==n&&n.equals(e)?(0,i.cz)(e.chainId):e}},53947:(e,n,t)=>{t.d(n,{U:()=>E,m:()=>A});var r=t(49849),i=t(54644),l=t(86642),s=t(41019),o=t(4126),d=t(85713),a=t(92947),c=t(26467),x=t(56119),u=t(11577),p=t(96410),h=t(33121),m=t(73141),g=t(12763),j=t(33370);const f=p.default.div`
  ${m.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,p.default)(o.N_)`
  flex: ${e=>{let{flex:n}=e;return null!==n&&void 0!==n?n:"none"}};
  display: flex;
  align-items: center;

  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `}};
`,y=(0,p.default)(h.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,p.default)(s.A)`
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
`;function E(e){let{origin:n}=e;return(0,j.jsx)(f,{children:(0,j.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,j.jsx)(o.N_,{to:n,children:(0,j.jsx)(b,{})}),(0,j.jsx)(y,{children:(0,j.jsx)(r.x6,{id:"LCFvJr"})})]})})}const O=(0,p.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function A(e){let{adding:n,creating:t,autoSlippage:s,positionID:o,children:h}=e;const{chainId:m}=(0,i.useWeb3React)(),y=(0,p.useTheme)(),E=(0,c.j)(),A=(0,d.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(o?`/${o.toString()}`:"");return(0,j.jsx)(f,{children:(0,j.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,j.jsx)(v,{to:A,onClick:()=>{n&&(E((0,x.JE)()),E((0,u.JE)()))},flex:h?"1":void 0,children:(0,j.jsx)(b,{stroke:y.neutral2})}),(0,j.jsx)(O,{textAlign:h?"start":"center",children:t?(0,j.jsx)(r.x6,{id:"ma87bD"}):n?(0,j.jsx)(r.x6,{id:"E6MqGy"}):(0,j.jsx)(r.x6,{id:"cJtosk"})}),h&&(0,j.jsx)(a.az,{style:{marginRight:".5rem"},children:h}),(0,j.jsx)(l.A,{autoSlippage:s,chainId:m})]})})}}}]);
//# sourceMappingURL=3436.bf4b928f.chunk.js.map