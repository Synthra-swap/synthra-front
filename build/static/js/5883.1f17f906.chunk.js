"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[5883],{3327:(e,n,r)=>{r.d(n,{qC:()=>c,LR:()=>s,jK:()=>u,yj:()=>a,pL:()=>d});var t=r(96410);const i=r.p+"static/media/big_unicorn.90ddcbf00b3ff1ad4495.png",o=r.p+"static/media/noise.3c7efafc83614205bd1a.png";var l=r(75423);const d=(0,t.default)(l.mm)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #000000 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,s=t.default.span`
  background: url(${i});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${e=>{let{desaturate:n}=e;return n&&"filter: saturate(0)"}}
`,u=t.default.span`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,a=(0,t.default)(l.mm)`
  padding: 1rem;
  z-index: 1;
  opacity: ${e=>{let{disabled:n}=e;return n&&"0.4"}};
`,c=t.default.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},12991:(e,n,r)=>{r.d(n,{A:()=>d,q:()=>l});var t=r(96410),i=r(3405),o=r(33370);const l=t.default.main`
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
`;function d(e){return(0,o.jsx)(l,{...e})}},15042:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(54674);function i(e,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;const[i,o]=(0,t.useState)((()=>e)),l=(0,t.useRef)(),d=(0,t.useCallback)((e=>{o(e),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n(e),l.current=void 0}),r)}),[r,n]);return(0,t.useEffect)((()=>{l.current&&(clearTimeout(l.current),l.current=void 0),o(e)}),[e]),[i,d]}},53947:(e,n,r)=>{r.d(n,{U:()=>A,m:()=>w});var t=r(49849),i=r(54644),o=r(86642),l=r(41019),d=r(4126),s=r(85713),u=r(92947),a=r(26467),c=r(56119),x=r(11577),p=r(96410),h=r(33121),m=r(73141),g=r(12763),v=r(33370);const f=p.default.div`
  ${m.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,j=(0,p.default)(d.N_)`
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
`,b=(0,p.default)(l.A)`
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
`;function A(e){let{origin:n}=e;return(0,v.jsx)(f,{children:(0,v.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,v.jsx)(d.N_,{to:n,children:(0,v.jsx)(b,{})}),(0,v.jsx)(y,{children:(0,v.jsx)(t.x6,{id:"LCFvJr"})})]})})}const k=(0,p.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function w(e){let{adding:n,creating:r,autoSlippage:l,positionID:d,children:h}=e;const{chainId:m}=(0,i.useWeb3React)(),y=(0,p.useTheme)(),A=(0,a.j)(),w=(0,s.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:"");return(0,v.jsx)(f,{children:(0,v.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,v.jsx)(j,{to:w,onClick:()=>{n&&(A((0,c.JE)()),A((0,x.JE)()))},flex:h?"1":void 0,children:(0,v.jsx)(b,{stroke:y.neutral2})}),(0,v.jsx)(k,{textAlign:h?"start":"center",children:r?(0,v.jsx)(t.x6,{id:"ma87bD"}):n?(0,v.jsx)(t.x6,{id:"E6MqGy"}):(0,v.jsx)(t.x6,{id:"cJtosk"})}),h&&(0,v.jsx)(u.az,{style:{marginRight:".5rem"},children:h}),(0,v.jsx)(o.A,{autoSlippage:l,chainId:m})]})})}},84962:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(54674),i=r(96410),o=r(33370);const l=i.default.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${e=>{let{size:n}=e;return n}}px;
    width: ${e=>{let{size:n}=e;return n}}px;
    background-color: ${e=>{let{theme:n}=e;return n.accent1}};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${e=>{let{theme:n}=e;return n.surface1}};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${e=>{let{size:n}=e;return n}}px;
    width: ${e=>{let{size:n}=e;return n}}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${e=>{let{theme:n}=e;return n.surface1}};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${e=>{let{size:n}=e;return n}}px;
    width: ${e=>{let{size:n}=e;return n}}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${e=>{let{theme:n}=e;return n.surface1}};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${e=>{let{theme:n}=e;return n.accent1}}, ${e=>{let{theme:n}=e;return n.accent1}});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${e=>{let{theme:n}=e;return n.surface4}}, ${e=>{let{theme:n}=e;return n.surface2}});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${e=>{let{theme:n}=e;return n.surface4}};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${e=>{let{theme:n}=e;return n.surface4}};
  }
  &::-ms-fill-upper {
    background: ${e=>{let{theme:n}=e;return n.surface2}};
  }
`;function d(e){let{value:n,onChange:r,min:i=0,step:d=1,max:s=100,size:u=28,...a}=e;const c=(0,t.useCallback)((e=>{r(parseInt(e.target.value))}),[r]);return(0,o.jsx)(l,{size:u,...a,type:"range",value:n,style:{padding:"15px 0"},onChange:c,"aria-labelledby":"input slider",step:d,min:i,max:s})}},90450:(e,n,r)=>{r.d(n,{A:()=>s});var t=r(11549),i=r(67197),o=r.n(i),l=r(33370);const d=new t.Fraction(o().BigInt(1),o().BigInt(1e6));function s(e){let{currencyAmount:n,significantDigits:r=4}=e;return(0,l.jsx)(l.Fragment,{children:n.equalTo(o().BigInt(0))?"0":n.greaterThan(d)?n.toSignificant(r):`<${d.toSignificant(1)}`})}},97650:(e,n,r)=>{r.r(n),r.d(n,{default:()=>ne});var t=r(49849),i=r(34203),o=r(83312),l=r(11549),d=r(54644),s=r(272),u=r(50645),a=r(21959),c=r(75423),x=r(20295),p=r(3327),h=r(90450),m=r(30850),g=r(87014),v=r(53947),f=r(12763),j=r(84962),y=r(34193),b=r(9157),A=r(94999),k=r(15042),w=r(265),z=r(25916),S=r(3517),$=r(42831),C=r(54674),L=r(85713),q=r(92947),I=r(17567),R=r(94687),W=r(5708),E=r(26467),J=r(51150),Y=r(70602),T=r(33370);function _(){return(0,E.G)((e=>e.burnV3))}var V=r(47519),P=r(34342),B=r(96410),D=r(33121),M=r(6612),O=r(57235),F=r(93405),U=r(19456),K=r(38740),N=r(97805),G=r(12991),H=r(5294);const Q=B.default.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `}};
`,X=(0,B.default)(H.LJ)`
  font-size: 12px;
`,Z=(0,B.default)(q.EY)`
  font-size: 40px;
  font-weight: 535;
  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `}};
`,ee=new l.Percent(5,100);function ne(){const{chainId:e}=(0,d.useWeb3React)(),{tokenId:n}=(0,L.g)(),r=(0,L.zy)(),t=(0,C.useMemo)((()=>{try{return i.gH.from(n)}catch{return null}}),[n]),{position:o,loading:l}=(0,z.C)(null!==t&&void 0!==t?t:void 0);return null===t||t.eq(0)?(0,T.jsx)(L.C5,{to:{...r,pathname:"/pools"},replace:!0}):(0,b.Gv)(e)&&(l||o)?(0,T.jsx)(re,{tokenId:t}):(0,T.jsx)($.PositionPageUnsupportedContent,{})}function re(e){var n,r,i,b,$,L,H,ne,re,te,ie;let{tokenId:oe}=e;const{position:le}=(0,z.C)(oe),de=(0,B.useTheme)(),{account:se,chainId:ue,provider:ae}=(0,d.useWeb3React)(),[ce,xe]=(0,C.useState)(!1),pe=(0,S.A)(ue).wrapped.symbol,{percent:he}=_(),{position:me,liquidityPercentage:ge,liquidityValue0:ve,liquidityValue1:fe,feeValue0:je,feeValue1:ye,outOfRange:be,error:Ae}=function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{account:r}=(0,d.useWeb3React)(),{percent:i}=_(),s=(0,I.rd)(null===e||void 0===e?void 0:e.token0),u=(0,I.rd)(null===e||void 0===e?void 0:e.token1),[,a]=(0,R.Q)(null!==s&&void 0!==s?s:void 0,null!==u&&void 0!==u?u:void 0,null===e||void 0===e?void 0:e.fee),c=(0,C.useMemo)((()=>a&&null!==e&&void 0!==e&&e.liquidity&&"number"===typeof(null===e||void 0===e?void 0:e.tickLower)&&"number"===typeof(null===e||void 0===e?void 0:e.tickUpper)?new o.Position({pool:a,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0),[a,e]),x=new l.Percent(i,100),p=c?x.multiply(c.amount0.quotient).quotient:void 0,h=c?x.multiply(c.amount1.quotient).quotient:void 0,m=s&&p?l.CurrencyAmount.fromRawAmount(n?s:(0,J.U)(s),p):void 0,g=u&&h?l.CurrencyAmount.fromRawAmount(n?u:(0,J.U)(u),h):void 0,[v,f]=(0,W.R)(null!==a&&void 0!==a?a:void 0,null===e||void 0===e?void 0:e.tokenId,n),j=!(!a||!e)&&(a.tickCurrent<e.tickLower||a.tickCurrent>e.tickUpper);let y;var b;return r||(y=(0,T.jsx)(t.x6,{id:"VHOVEJ"})),0===i&&(y=null!==(b=y)&&void 0!==b?b:(0,T.jsx)(t.x6,{id:"Sta9CR"})),{position:c,liquidityPercentage:x,liquidityValue0:m,liquidityValue1:g,feeValue0:v,feeValue1:f,outOfRange:j,error:y}}(le,ce),{onPercentSelect:ke}=function(){const e=(0,E.j)();return{onPercentSelect:(0,C.useCallback)((n=>{e((0,Y.g)({percent:n}))}),[e])}}(),we=null===le||void 0===le||null===(n=le.liquidity)||void 0===n?void 0:n.eq(0),[ze,Se]=(0,k.A)(he,ke),$e=(0,w.A)(),Ce=(0,P.co)(ee),[Le,qe]=(0,C.useState)(!1),[Ie,Re]=(0,C.useState)(!1),[We,Ee]=(0,C.useState)(),Je=(0,V.OQ)(),Ye=(0,A.TA)(),Te=(0,C.useCallback)((async()=>{if(Re(!0),!Ye||!ve||!fe||!$e||!se||!ue||!me||!ge||!ae)return;const{calldata:e,value:n}=o.NonfungiblePositionManager.removeCallParameters(me,{tokenId:oe.toString(),liquidityPercentage:ge,slippageTolerance:Ce,deadline:$e.toString(),collectOptions:{expectedCurrencyOwed0:null!==je&&void 0!==je?je:l.CurrencyAmount.fromRawAmount(ve.currency,0),expectedCurrencyOwed1:null!==ye&&void 0!==ye?ye:l.CurrencyAmount.fromRawAmount(fe.currency,0),recipient:se}}),r={to:Ye.address,data:e,value:n},t=await ae.getSigner().getChainId();if(ue!==t)throw new M.$c;ae.getSigner().estimateGas(r).then((e=>{const n={...r,gasLimit:(0,K.K)(e)};return ae.getSigner().sendTransaction(n).then((e=>{Ee(e.hash),Re(!1),Je(e,{type:U.D.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,N.V)(ve.currency),quoteCurrencyId:(0,N.V)(fe.currency),expectedAmountBaseRaw:ve.quotient.toString(),expectedAmountQuoteRaw:fe.quotient.toString()})}))})).catch((e=>{Re(!1),console.error(e)}))}),[Ye,ve,fe,$e,se,ue,me,ge,ae,oe,Ce,je,ye,Je]),_e=(0,C.useCallback)((()=>{qe(!1),We&&Se(0),Re(!1),Ee("")}),[Se,We]),Ve=(0,T.jsx)(t.x6,{id:"F8SmOj",values:{0:null===ve||void 0===ve?void 0:ve.toSignificant(6),1:null===ve||void 0===ve||null===(r=ve.currency)||void 0===r?void 0:r.symbol,2:null===fe||void 0===fe?void 0:fe.toSignificant(6),3:null===fe||void 0===fe||null===(i=fe.currency)||void 0===i?void 0:i.symbol}});function Pe(){var e,n,r,i;return(0,T.jsxs)(c.mm,{gap:"sm",style:{padding:"16px"},children:[(0,T.jsxs)(f.JA,{align:"flex-end",children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(t.x6,{id:"I4bzgz",values:{0:null===ve||void 0===ve||null===(e=ve.currency)||void 0===e?void 0:e.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ve&&(0,T.jsx)(h.A,{currencyAmount:ve})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ve||void 0===ve?void 0:ve.currency})]})]}),(0,T.jsxs)(f.JA,{align:"flex-end",children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(t.x6,{id:"I4bzgz",values:{0:null===fe||void 0===fe||null===(n=fe.currency)||void 0===n?void 0:n.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:fe&&(0,T.jsx)(h.A,{currencyAmount:fe})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===fe||void 0===fe?void 0:fe.currency})]})]}),null!==je&&void 0!==je&&je.greaterThan(0)||null!==ye&&void 0!==ye&&ye.greaterThan(0)?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(D.PR.DeprecatedItalic,{fontSize:12,color:de.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,T.jsx)(t.x6,{id:"QwTcLK"})}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(t.x6,{id:"Vn8uJL",values:{0:null===je||void 0===je||null===(r=je.currency)||void 0===r?void 0:r.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:je&&(0,T.jsx)(h.A,{currencyAmount:je})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===je||void 0===je?void 0:je.currency})]})]}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(t.x6,{id:"Vn8uJL",values:{0:null===ye||void 0===ye||null===(i=ye.currency)||void 0===i?void 0:i.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ye&&(0,T.jsx)(h.A,{currencyAmount:ye})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ye||void 0===ye?void 0:ye.currency})]})]})]}):null,(0,T.jsx)(u.$$,{mt:"16px",onClick:Te,children:(0,T.jsx)(t.x6,{id:"t/YqKh"})})]})}const Be=Boolean((null===ve||void 0===ve?void 0:ve.currency)&&(null===fe||void 0===fe?void 0:fe.currency)&&(ve.currency.isNative||fe.currency.isNative||(null===(b=F.Im[ve.currency.chainId])||void 0===b?void 0:b.equals(ve.currency.wrapped))||(null===($=F.Im[fe.currency.chainId])||void 0===$?void 0:$.equals(fe.currency.wrapped))));return(0,T.jsxs)(c.mm,{children:[(0,T.jsx)(O.A,{isOpen:Le,onDismiss:_e,attemptingTxn:Ie,hash:null!==We&&void 0!==We?We:"",reviewContent:()=>(0,T.jsx)(O.Y,{title:(0,T.jsx)(t.x6,{id:"cJtosk"}),onDismiss:_e,topContent:Pe}),pendingText:Ve}),(0,T.jsxs)(G.A,{$maxWidth:"unset",children:[(0,T.jsx)(v.m,{creating:!1,adding:!1,positionID:oe.toString(),autoSlippage:ee}),(0,T.jsx)(Q,{children:le?(0,T.jsxs)(c.mm,{gap:"lg",children:[(0,T.jsxs)(f.JA,{children:[(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(x.A,{currency0:null===ve||void 0===ve?void 0:ve.currency,currency1:null===fe||void 0===fe?void 0:fe.currency,size:20,margin:!0}),(0,T.jsx)(D.PR.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===ve||void 0===ve||null===(L=ve.currency)||void 0===L?void 0:L.symbol}/${null===fe||void 0===fe||null===(H=fe.currency)||void 0===H?void 0:H.symbol}`})]}),(0,T.jsx)(s.A,{removed:we,inRange:!be})]}),(0,T.jsx)(a.R4,{children:(0,T.jsxs)(c.mm,{gap:"md",children:[(0,T.jsx)(D.PR.DeprecatedMain,{fontWeight:485,children:(0,T.jsx)(t.x6,{id:"hehnjM"})}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(Z,{children:(0,T.jsx)(t.x6,{id:"AGSFTV",values:{percentForSlider:ze}})}),(0,T.jsxs)(f.eF,{gap:"4px",justify:"flex-end",children:[(0,T.jsx)(X,{onClick:()=>ke(25),width:"20%",children:(0,T.jsx)(t.x6,{id:"Xeb0wM"})}),(0,T.jsx)(X,{onClick:()=>ke(50),width:"20%",children:(0,T.jsx)(t.x6,{id:"wW+u6Y"})}),(0,T.jsx)(X,{onClick:()=>ke(75),width:"20%",children:(0,T.jsx)(t.x6,{id:"N+aNR1"})}),(0,T.jsx)(X,{onClick:()=>ke(100),width:"20%",children:(0,T.jsx)(t.x6,{id:"CK1KXz"})})]})]}),(0,T.jsx)(j.A,{value:ze,onChange:Se})]})}),(0,T.jsx)(a.R4,{children:(0,T.jsxs)(c.mm,{gap:"md",children:[(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,T.jsx)(t.x6,{id:"I4bzgz",values:{0:null===ve||void 0===ve||null===(ne=ve.currency)||void 0===ne?void 0:ne.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ve&&(0,T.jsx)(h.A,{currencyAmount:ve})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ve||void 0===ve?void 0:ve.currency})]})]}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,T.jsx)(t.x6,{id:"I4bzgz",values:{0:null===fe||void 0===fe||null===(re=fe.currency)||void 0===re?void 0:re.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:fe&&(0,T.jsx)(h.A,{currencyAmount:fe})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===fe||void 0===fe?void 0:fe.currency})]})]}),null!==je&&void 0!==je&&je.greaterThan(0)||null!==ye&&void 0!==ye&&ye.greaterThan(0)?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(p.qC,{}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(t.x6,{id:"Vn8uJL",values:{0:null===je||void 0===je||null===(te=je.currency)||void 0===te?void 0:te.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:je&&(0,T.jsx)(h.A,{currencyAmount:je})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===je||void 0===je?void 0:je.currency})]})]}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(t.x6,{id:"Vn8uJL",values:{0:null===ye||void 0===ye||null===(ie=ye.currency)||void 0===ie?void 0:ie.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ye&&(0,T.jsx)(h.A,{currencyAmount:ye})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ye||void 0===ye?void 0:ye.currency})]})]})]}):null]})}),Be&&(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(D.PR.DeprecatedMain,{children:(0,T.jsx)(t.x6,{id:"oCijuv",values:{nativeWrappedSymbol:pe}})}),(0,T.jsx)(y.A,{id:"receive-as-weth",isActive:ce,toggle:()=>xe((e=>!e))})]}),(0,T.jsx)("div",{style:{display:"flex"},children:(0,T.jsx)(c.mm,{gap:"md",style:{flex:"1"},children:(0,T.jsx)(u.m$,{confirmed:!1,disabled:we||0===he||!ve,onClick:()=>qe(!0),children:we?(0,T.jsx)(t.x6,{id:"D87pha"}):null!==Ae&&void 0!==Ae?Ae:(0,T.jsx)(t.x6,{id:"t/YqKh"})})})})]}):(0,T.jsx)(m.A,{})})]})]})}}}]);
//# sourceMappingURL=5883.1f17f906.chunk.js.map