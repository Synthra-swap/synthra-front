"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[81],{10278:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(54674),i=n(88178),r=n.n(i);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=(0,o.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,d=u(e,["color","size"]);return o.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));a.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},a.displayName="Plus";const d=a},12991:(e,t,n)=>{n.d(t,{A:()=>u,q:()=>l});var o=n(96410),i=n(3405),r=n(33370);const l=o.default.main`
  position: relative;
  margin-top: ${e=>{let{$margin:t}=e;return null!==t&&void 0!==t?t:"0px"}};
  max-width: ${e=>{let{$maxWidth:t}=e;return null!==t&&void 0!==t?t:"420px"}};
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.surface1}};
  border-radius: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${i.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function u(e){return(0,r.jsx)(l,{...e})}},14841:(e,t,n)=>{n.d(t,{OC:()=>c,VD:()=>u,W3:()=>s,mO:()=>l,sQ:()=>d,xQ:()=>a});var o=n(75423),i=n(86724),r=n(96410);const l=r.default.div`
  position: relative;
  padding: 26px 16px;
`,u=r.default.div`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `}};

  @media only screen and (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.md}px`}}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    padding-top: 20px;
  }
`,a=(0,r.default)(o.mm)`
  opacity: ${e=>{let{disabled:t}=e;return t?"0.2":"1"}};
  pointer-events: ${e=>{let{disabled:t}=e;return t?"none":"initial"}};
`,d=(0,r.default)(i.p)`
  background-color: ${e=>{let{theme:t}=e;return t.surface1}};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,s=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `}};
`,c=r.default.div`
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `}};
`},19933:(e,t,n)=>{n.d(t,{h:()=>d,e:()=>v});var o=n(65264),i=n(54644),r=n(94999),l=n(45416),u=n(54674),a=n(38740);let d=function(e){return e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e}({});function s(e,t,n){var s;const{chainId:c}=(0,i.useWeb3React)(),p=null!==e&&void 0!==e&&null!==(s=e.currency)&&void 0!==s&&s.isToken?e.currency:void 0,m=function(e,t,n){var o;const{account:r}=(0,i.useWeb3React)(),a=null!==e&&void 0!==e&&null!==(o=e.currency)&&void 0!==o&&o.isToken?e.currency:void 0,{tokenAllowance:s}=(0,l.l)(a,null!==r&&void 0!==r?r:void 0,t),c=n(a,t);return(0,u.useMemo)((()=>e&&t?e.currency.isNative?d.APPROVED:s?s.lessThan(e)?c?d.PENDING:d.NOT_APPROVED:d.APPROVED:d.UNKNOWN:d.UNKNOWN),[e,c,t,s])}(e,t,n),v=(0,r.dV)(null===p||void 0===p?void 0:p.address),f=(0,u.useCallback)((async()=>{function n(e){console.warn(`${(null===p||void 0===p?void 0:p.symbol)||"Token"} approval failed:`,e)}if(m!==d.NOT_APPROVED)return n("approve was called unnecessarily");if(!c)return n("no chainId");if(!p)return n("no token");if(!v)return n("tokenContract is null");if(!e)return n("missing amount to approve");if(!t)return n("no spender");let i=!1;const r=await v.estimateGas.approve(t,o.Is).catch((()=>(i=!0,v.estimateGas.approve(t,e.quotient.toString()))));return v.approve(t,i?e.quotient.toString():o.Is,{gasLimit:(0,a.K)(r)}).then((n=>({response:n,tokenAddress:p.address,spenderAddress:t,amount:e}))).catch((e=>{throw n(e),e}))}),[m,p,v,e,t,c]);return[m,f]}var c=n(47519),p=n(19456);function m(e){const t=(0,c.OQ)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:n,tokenAddress:o,spenderAddress:i,amount:r}=e;t(n,{type:p.D.APPROVAL,tokenAddress:o,spender:i,amount:r.quotient.toString()})}}))),[t,e])}function v(e,t){const[n,o]=s(e,t,c.yI);return[n,m(o)]}},49132:(e,t,n)=>{n.d(t,{Uz:()=>x,wt:()=>h,iG:()=>b,UN:()=>k});var o=n(49849),i=n(83312),r=n(11549),l=n(54644),u=n(94687),a=n(67197),d=n.n(a),s=n(3368),c=n(54674),p=n(4126),m=n(26467);function v(e,t,n){if(e&&t&&"number"===typeof n)return(0,i.tickToPrice)(e,t,n)}var f=n(92627),R=n(23843),C=n(11577),g=n(43319);function P(e,t,n,o){if(!e||!t||!n||!o)return;const r=function(e,t,n){var o;if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[i,r]=n.split("."),l=null!==(o=null===r||void 0===r?void 0:r.length)&&void 0!==o?o:0,u=d().BigInt((null!==i&&void 0!==i?i:"")+(null!==r&&void 0!==r?r:""));return new g.Price(e,t,d().multiply(d().BigInt(10**l),d().BigInt(10**e.decimals)),d().multiply(u,d().BigInt(10**t.decimals)))}(e,t,o);if(!r)return;let l;const u=(0,i.encodeSqrtRatioX96)(r.numerator,r.denominator);return l=d().greaterThanOrEqual(u,i.TickMath.MAX_SQRT_RATIO)?i.TickMath.MAX_TICK:d().lessThanOrEqual(u,i.TickMath.MIN_SQRT_RATIO)?i.TickMath.MIN_TICK:(0,i.priceToClosestTick)(r),(0,i.nearestUsableTick)(l,i.TICK_SPACINGS[n])}var y=n(33370);function k(){return(0,m.G)((e=>e.mintV3))}function b(e){const t=(0,m.j)(),n=(0,c.useCallback)((n=>{t((0,C.$M)({field:C.D0.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),o=(0,c.useCallback)((n=>{t((0,C.$M)({field:C.D0.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e]),[i,r]=(0,p.ok)();return{onFieldAInput:n,onFieldBInput:o,onLeftRangeInput:(0,c.useCallback)((e=>{t((0,C.jG)({typedValue:e}));const n=i.get("minPrice");(!n||n&&n!==e)&&(i.set("minPrice",e),r(i))}),[t,i,r]),onRightRangeInput:(0,c.useCallback)((e=>{t((0,C.Im)({typedValue:e}));const n=i.get("maxPrice");(!n||n&&n!==e)&&(i.set("maxPrice",e),r(i))}),[t,i,r]),onStartPriceInput:(0,c.useCallback)((e=>{t((0,C.qQ)({typedValue:e}))}),[t])}}function h(e,t,n,a,p){var m,g;const{account:b}=(0,l.useWeb3React)(),{independentField:h,typedValue:x,leftRangeTypedValue:E,rightRangeTypedValue:A,startPriceTypedValue:U}=k(),_=h===C.D0.CURRENCY_A?C.D0.CURRENCY_B:C.D0.CURRENCY_A,N=(0,c.useMemo)((()=>({[C.D0.CURRENCY_A]:e,[C.D0.CURRENCY_B]:t})),[e,t]),[T,O,I]=(0,c.useMemo)((()=>[null===e||void 0===e?void 0:e.wrapped,null===t||void 0===t?void 0:t.wrapped,null===a||void 0===a?void 0:a.wrapped]),[e,t,a]),[D,S]=(0,c.useMemo)((()=>T&&O?T.sortsBefore(O)?[T,O]:[O,T]:[void 0,void 0]),[T,O]),w=(0,R.ed)(null!==b&&void 0!==b?b:void 0,(0,c.useMemo)((()=>[N[C.D0.CURRENCY_A],N[C.D0.CURRENCY_B]]),[N])),z={[C.D0.CURRENCY_A]:w[0],[C.D0.CURRENCY_B]:w[1]},[L,j]=(0,u.Q)(N[C.D0.CURRENCY_A],N[C.D0.CURRENCY_B],n),M=L===u.S.NOT_EXISTS,B=Boolean(I&&D&&!I.equals(D)),W=(0,c.useMemo)((()=>{if(!M)return j&&D?j.priceOf(D):void 0;{const t=(0,s.A)(U,B?D:S);if(t&&D&&S){var e;const n=(0,s.A)("1",B?S:D),o=n&&t?new r.Price(n.currency,t.currency,n.quotient,t.quotient):void 0;return null!==(e=B?null===o||void 0===o?void 0:o.invert():o)&&void 0!==e?e:void 0}}}),[M,U,B,S,D,j]),$=(0,c.useMemo)((()=>{const e=W?(0,i.encodeSqrtRatioX96)(W.numerator,W.denominator):void 0;return W&&e&&!(d().greaterThanOrEqual(e,i.TickMath.MIN_SQRT_RATIO)&&d().lessThan(e,i.TickMath.MAX_SQRT_RATIO))}),[W]),q=(0,c.useMemo)((()=>{if(T&&O&&n&&W&&!$){const e=(0,i.priceToClosestTick)(W),t=i.TickMath.getSqrtRatioAtTick(e);return new i.Pool(T,O,n,t,d().BigInt(0),e,[])}}),[n,$,W,T,O]),Y=null!==j&&void 0!==j?j:q,V=(0,c.useMemo)((()=>({[C.zm.LOWER]:n?(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[n]):void 0,[C.zm.UPPER]:n?(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[n]):void 0})),[n]),K=(0,c.useMemo)((()=>({[C.zm.LOWER]:"number"===typeof(null===p||void 0===p?void 0:p.tickLower)?p.tickLower:B&&"boolean"===typeof A||!B&&"boolean"===typeof E?V[C.zm.LOWER]:B?P(S,D,n,A.toString()):P(D,S,n,E.toString()),[C.zm.UPPER]:"number"===typeof(null===p||void 0===p?void 0:p.tickUpper)?p.tickUpper:!B&&"boolean"===typeof A||B&&"boolean"===typeof E?V[C.zm.UPPER]:B?P(S,D,n,E.toString()):P(D,S,n,A.toString())})),[p,n,B,E,A,D,S,V]),{[C.zm.LOWER]:G,[C.zm.UPPER]:Q}=K||{},F=(0,c.useMemo)((()=>({[C.zm.LOWER]:n&&G===V.LOWER,[C.zm.UPPER]:n&&Q===V.UPPER})),[V,G,Q,n]),X=Boolean("number"===typeof G&&"number"===typeof Q&&G>=Q),H=(0,c.useMemo)((()=>({[C.zm.LOWER]:v(D,S,V.LOWER),[C.zm.UPPER]:v(D,S,V.UPPER)})),[D,S,V.LOWER,V.UPPER]),J=(0,c.useMemo)((()=>({[C.zm.LOWER]:v(D,S,K[C.zm.LOWER]),[C.zm.UPPER]:v(D,S,K[C.zm.UPPER])})),[D,S,K]),{[C.zm.LOWER]:Z,[C.zm.UPPER]:ee}=J,te=Boolean(!X&&W&&Z&&ee&&(W.lessThan(Z)||W.greaterThan(ee))),ne=(0,s.A)(x,N[h]),oe=(0,c.useMemo)((()=>{const n=null===ne||void 0===ne?void 0:ne.wrapped,o=_===C.D0.CURRENCY_B?t:e;if(ne&&n&&"number"===typeof G&&"number"===typeof Q&&Y){if(te||X)return;const e=n.currency.equals(Y.token0)?i.Position.fromAmount0({pool:Y,tickLower:G,tickUpper:Q,amount0:ne.quotient,useFullPrecision:!0}):i.Position.fromAmount1({pool:Y,tickLower:G,tickUpper:Q,amount1:ne.quotient}),t=n.currency.equals(Y.token0)?e.amount1:e.amount0;return o&&r.CurrencyAmount.fromRawAmount(o,t.quotient)}}),[ne,te,_,t,e,G,Q,Y,X]),ie=(0,c.useMemo)((()=>({[C.D0.CURRENCY_A]:h===C.D0.CURRENCY_A?ne:oe,[C.D0.CURRENCY_B]:h===C.D0.CURRENCY_A?oe:ne})),[oe,ne,h]),re=Boolean("number"===typeof Q&&Y&&Y.tickCurrent>=Q),le=Boolean("number"===typeof G&&Y&&Y.tickCurrent<=G),ue=X||Boolean(re&&Y&&T&&Y.token0.equals(T)||le&&Y&&T&&Y.token1.equals(T)),ae=X||Boolean(re&&Y&&O&&Y.token0.equals(O)||le&&Y&&O&&Y.token1.equals(O)),de=(0,c.useMemo)((()=>{var e,t;if(!Y||!T||!O||"number"!==typeof G||"number"!==typeof Q||X)return;const n=re?f.CL:null===ie||void 0===ie||null===(e=ie[T.equals(Y.token0)?C.D0.CURRENCY_A:C.D0.CURRENCY_B])||void 0===e?void 0:e.quotient,o=le?f.CL:null===ie||void 0===ie||null===(t=ie[T.equals(Y.token0)?C.D0.CURRENCY_B:C.D0.CURRENCY_A])||void 0===t?void 0:t.quotient;return void 0!==n&&void 0!==o?i.Position.fromAmounts({pool:Y,tickLower:G,tickUpper:Q,amount0:n,amount1:o,useFullPrecision:!0}):void 0}),[ie,Y,T,O,re,le,X,G,Q]);let se;var ce,pe,me;(b||(se=(0,y.jsx)(o.x6,{id:"VHOVEJ"})),L===u.S.INVALID)&&(se=null!==(ce=se)&&void 0!==ce?ce:(0,y.jsx)(o.x6,{id:"R7D79P"}));$&&(se=null!==(pe=se)&&void 0!==pe?pe:(0,y.jsx)(o.x6,{id:"HXBqgG"}));(ie[C.D0.CURRENCY_A]||ue)&&(ie[C.D0.CURRENCY_B]||ae)||(se=null!==(me=se)&&void 0!==me?me:(0,y.jsx)(o.x6,{id:"iPMIoT"}));const{[C.D0.CURRENCY_A]:ve,[C.D0.CURRENCY_B]:fe}=ie;var Re,Ce;ve&&null!==z&&void 0!==z&&null!==(m=z[C.D0.CURRENCY_A])&&void 0!==m&&m.lessThan(ve)&&(se=(0,y.jsx)(o.x6,{id:"m6RmA/",values:{0:null===(Re=N[C.D0.CURRENCY_A])||void 0===Re?void 0:Re.symbol}}));fe&&null!==z&&void 0!==z&&null!==(g=z[C.D0.CURRENCY_B])&&void 0!==g&&g.lessThan(fe)&&(se=(0,y.jsx)(o.x6,{id:"m6RmA/",values:{0:null===(Ce=N[C.D0.CURRENCY_B])||void 0===Ce?void 0:Ce.symbol}}));const ge=L===u.S.INVALID;return{dependentField:_,currencies:N,pool:j,poolState:L,currencyBalances:z,parsedAmounts:ie,ticks:K,price:W,pricesAtTicks:J,pricesAtLimit:H,position:de,noLiquidity:M,errorMessage:se,invalidPool:ge,invalidRange:X,outOfRange:te,depositADisabled:ue,depositBDisabled:ae,invertPrice:B,ticksAtLimit:F}}function x(e,t,n,o,l,u){const a=(0,m.j)(),d=(0,c.useMemo)((()=>null===e||void 0===e?void 0:e.wrapped),[e]),s=(0,c.useMemo)((()=>null===t||void 0===t?void 0:t.wrapped),[t]);return{getDecrementLower:(0,c.useCallback)((()=>{if(d&&s&&"number"===typeof o&&n){return(0,i.tickToPrice)(d,s,o-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&s&&n&&u){return(0,i.tickToPrice)(d,s,u.tickCurrent-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,s,o,n,u]),getIncrementLower:(0,c.useCallback)((()=>{if(d&&s&&"number"===typeof o&&n){return(0,i.tickToPrice)(d,s,o+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&s&&n&&u){return(0,i.tickToPrice)(d,s,u.tickCurrent+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,s,o,n,u]),getDecrementUpper:(0,c.useCallback)((()=>{if(d&&s&&"number"===typeof l&&n){return(0,i.tickToPrice)(d,s,l-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof l&&d&&s&&n&&u){return(0,i.tickToPrice)(d,s,u.tickCurrent-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,s,l,n,u]),getIncrementUpper:(0,c.useCallback)((()=>{if(d&&s&&"number"===typeof l&&n){return(0,i.tickToPrice)(d,s,l+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof l&&d&&s&&n&&u){return(0,i.tickToPrice)(d,s,u.tickCurrent+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,s,l,n,u]),getSetFullRange:(0,c.useCallback)((()=>{a((0,C.jC)())}),[a])}}},82685:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(54644),i=n(66295),r=n(54674),l=n(94999);function u(){var e;const{account:t}=(0,o.useWeb3React)(),n=(0,l._Q)(),u=(0,r.useMemo)((()=>[null!==t&&void 0!==t?t:void 0]),[t]),a=(0,i.DD)(n,"isArgentWallet",u,i.bo);return Boolean(null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e[0])}},94872:(e,t,n)=>{n.d(t,{A:()=>N});var o=n(49849),i=n(50645),r=n(21959),l=n(75423),u=n(54674),a=n(10278),d=n(88178),s=n.n(d);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=(0,u.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,l=p(e,["color","size"]);return u.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),u.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));m.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},m.displayName="Minus";const v=m;var f=n(96410),R=n(33121),C=n(86724),g=n(33370);const P=f.default.div`
  display: flex;
`,y=(0,f.default)(i.EA)`
  border-radius: 8px;
  padding: 4px;
`,k=(0,f.default)(r.l3)`
  border-color: ${e=>{let{active:t,theme:n}=e;return t&&n.deprecated_stateOverlayPressed}};
  padding: 12px;
  animation: ${e=>{let{pulsing:t,theme:n}=e;return t&&(o=n.accent1,f.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${o};
  }

  70% {
    box-shadow: 0 0 0 2px ${o};
  }

  100% {
    box-shadow: 0 0 0 0 ${o};
  }
`);var o}} 0.8s linear;
`,b=(0,f.default)(C.p)`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `}};
`,h=(0,f.default)(l.mm)`
  width: 100%;
`,x=(0,f.default)(R.PR.DeprecatedSmall)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-size: 12px;
  font-weight: 535;
`,E=(0,f.default)(R.PR.DeprecatedWhite)`
  color: ${e=>{let{theme:t,disabled:n}=e;return n?t.neutral2:t.neutral1}} !important;
  display: flex;
`,A=e=>{let{value:t,decrement:n,increment:i,decrementDisabled:r=!1,incrementDisabled:d=!1,width:s,locked:c,onUserInput:p,title:m,tokenA:f,tokenB:R}=e;const[C,A]=(0,u.useState)(!1),[U,_]=(0,u.useState)(""),[N,T]=(0,u.useState)(!1),[O,I]=(0,u.useState)(!1),D=(0,u.useCallback)((()=>{T(!1),A(!1),p(U)}),[U,p]),S=(0,u.useCallback)((()=>{T(!1),p(n())}),[n,p]),w=(0,u.useCallback)((()=>{T(!1),p(i())}),[i,p]);return(0,u.useEffect)((()=>{U===t||N||setTimeout((()=>{_(t),I(!0),setTimeout((function(){I(!1)}),1800)}),0)}),[U,N,t]),(0,g.jsx)(k,{pulsing:O,active:C,onFocus:()=>{T(!0),A(!0)},onBlur:D,width:s,children:(0,g.jsxs)(P,{children:[(0,g.jsxs)(h,{justify:"flex-start",children:[(0,g.jsx)(x,{fontSize:12,textAlign:"center",children:m}),(0,g.jsx)(b,{className:"rate-input-0",value:U,fontSize:"20px",disabled:c,onUserInput:e=>{_(e)}}),(0,g.jsx)(x,{fontSize:12,textAlign:"left",children:(0,g.jsx)(o.x6,{id:"1/LP4K",values:{tokenB:R,tokenA:f}})})]}),(0,g.jsxs)(l.mm,{gap:"8px",children:[!c&&(0,g.jsx)(y,{"data-testid":"increment-price-range",onClick:w,disabled:d,children:(0,g.jsx)(E,{disabled:d,fontSize:"12px",children:(0,g.jsx)(a.A,{size:18})})}),!c&&(0,g.jsx)(y,{"data-testid":"decrement-price-range",onClick:S,disabled:r,children:(0,g.jsx)(E,{disabled:r,fontSize:"12px",children:(0,g.jsx)(v,{size:18})})})]})]})})};var U=n(12763),_=n(11577);function N(e){var t,n,i,r;let{priceLower:l,priceUpper:u,onLeftRangeInput:a,onRightRangeInput:d,getDecrementLower:s,getIncrementLower:c,getDecrementUpper:p,getIncrementUpper:m,currencyA:v,currencyB:f,feeAmount:R,ticksAtLimit:C}=e;const P=null===(t=null!==v&&void 0!==v?v:void 0)||void 0===t?void 0:t.wrapped,y=null===(n=null!==f&&void 0!==f?f:void 0)||void 0===n?void 0:n.wrapped,k=P&&y&&P.sortsBefore(y),b=k?l:null===u||void 0===u?void 0:u.invert(),h=k?u:null===l||void 0===l?void 0:l.invert();return(0,g.jsxs)(U.eF,{gap:"md",children:[(0,g.jsx)(A,{value:C[k?_.zm.LOWER:_.zm.UPPER]?"0":null!==(i=null===b||void 0===b?void 0:b.toSignificant(8))&&void 0!==i?i:"",onUserInput:a,decrement:k?s:m,increment:k?c:p,decrementDisabled:void 0===b||C[k?_.zm.LOWER:_.zm.UPPER],incrementDisabled:void 0===b||C[k?_.zm.LOWER:_.zm.UPPER],feeAmount:R,label:b?`${null===f||void 0===f?void 0:f.symbol}`:"-",title:(0,g.jsx)(o.x6,{id:"uEoBVI"}),tokenA:null===v||void 0===v?void 0:v.symbol,tokenB:null===f||void 0===f?void 0:f.symbol}),(0,g.jsx)(A,{value:C[k?_.zm.UPPER:_.zm.LOWER]?"\u221e":null!==(r=null===h||void 0===h?void 0:h.toSignificant(8))&&void 0!==r?r:"",onUserInput:d,decrement:k?p:c,increment:k?m:s,incrementDisabled:void 0===h||C[k?_.zm.UPPER:_.zm.LOWER],decrementDisabled:void 0===h||C[k?_.zm.UPPER:_.zm.LOWER],feeAmount:R,label:h?`${null===f||void 0===f?void 0:f.symbol}`:"-",tokenA:null===v||void 0===v?void 0:v.symbol,tokenB:null===f||void 0===f?void 0:f.symbol,title:(0,g.jsx)(o.x6,{id:"kAC8rT"})})]})}}}]);
//# sourceMappingURL=81.57e411de.chunk.js.map