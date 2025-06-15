"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[290],{10278:(e,n,t)=>{t.d(n,{A:()=>a});var i=t(54674),r=t(88178),o=t.n(r);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,d=void 0===o?24:o,a=s(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Plus";const a=d},12991:(e,n,t)=>{t.d(n,{A:()=>s,q:()=>l});var i=t(96410),r=t(3405),o=t(33370);const l=i.default.main`
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
`;function s(e){return(0,o.jsx)(l,{...e})}},15042:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(54674);function r(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;const[r,o]=(0,i.useState)((()=>e)),l=(0,i.useRef)(),s=(0,i.useCallback)((e=>{o(e),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n(e),l.current=void 0}),t)}),[t,n]);return(0,i.useEffect)((()=>{l.current&&(clearTimeout(l.current),l.current=void 0),o(e)}),[e]),[r,s]}},19933:(e,n,t)=>{t.d(n,{h:()=>a,e:()=>m});var i=t(65264),r=t(54644),o=t(94999),l=t(45416),s=t(54674),d=t(38740);let a=function(e){return e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e}({});function u(e,n,t){var u;const{chainId:c}=(0,r.useWeb3React)(),h=null!==e&&void 0!==e&&null!==(u=e.currency)&&void 0!==u&&u.isToken?e.currency:void 0,p=function(e,n,t){var i;const{account:o}=(0,r.useWeb3React)(),d=null!==e&&void 0!==e&&null!==(i=e.currency)&&void 0!==i&&i.isToken?e.currency:void 0,{tokenAllowance:u}=(0,l.l)(d,null!==o&&void 0!==o?o:void 0,n),c=t(d,n);return(0,s.useMemo)((()=>e&&n?e.currency.isNative?a.APPROVED:u?u.lessThan(e)?c?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN:a.UNKNOWN),[e,c,n,u])}(e,n,t),m=(0,o.dV)(null===h||void 0===h?void 0:h.address),v=(0,s.useCallback)((async()=>{function t(e){console.warn(`${(null===h||void 0===h?void 0:h.symbol)||"Token"} approval failed:`,e)}if(p!==a.NOT_APPROVED)return t("approve was called unnecessarily");if(!c)return t("no chainId");if(!h)return t("no token");if(!m)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let r=!1;const o=await m.estimateGas.approve(n,i.Is).catch((()=>(r=!0,m.estimateGas.approve(n,e.quotient.toString()))));return m.approve(n,r?e.quotient.toString():i.Is,{gasLimit:(0,d.K)(o)}).then((t=>({response:t,tokenAddress:h.address,spenderAddress:n,amount:e}))).catch((e=>{throw t(e),e}))}),[p,h,m,e,n,c]);return[p,v]}var c=t(47519),h=t(19456);function p(e){const n=(0,c.OQ)();return(0,s.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:i,spenderAddress:r,amount:o}=e;n(t,{type:h.D.APPROVAL,tokenAddress:i,spender:r,amount:o.quotient.toString()})}}))),[n,e])}function m(e,n){const[t,i]=u(e,n,c.yI);return[t,p(i)]}},21982:(e,n,t)=>{t.d(n,{a:()=>b});var i=t(86762),r=t(11549),o=t(54644),l=t(67197),s=t.n(l),d=t(66295),a=t(54674),u=t(93405),c=t(94999),h=t(82685);let p=function(e){return e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED",e}({});const m=1200,v={[r.ChainId.MAINNET]:{[u.pP.address]:{type:p.AMOUNT,name:"USD Coin",version:"2"},[u.dM.address]:{type:p.ALLOWED,name:"Dai Stablecoin",version:"1"},[u.nf[r.ChainId.MAINNET].address]:{type:p.AMOUNT,name:"Uniswap"}},[r.ChainId.GOERLI]:{[u.nf[r.ChainId.GOERLI].address]:{type:p.AMOUNT,name:"Uniswap"}},[r.ChainId.SEPOLIA]:{[u.nf[r.ChainId.SEPOLIA].address]:{type:p.AMOUNT,name:"Uniswap"}}};var x=function(e){return e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED",e}(x||{});const g=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],f=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],y=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],I=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];var C=t(265);const j={version:"1",name:"Uniswap V2",type:p.AMOUNT};function b(e,n){return function(e,n,t,r){var l,u;const{account:C,chainId:j,provider:b}=(0,o.useWeb3React)(),E=null!==e&&void 0!==e&&null!==(l=e.currency)&&void 0!==l&&l.isToken?e.currency.address:void 0,D=(0,c.Z7)(E),R=(0,h.A)(),A=(0,a.useMemo)((()=>[null!==C&&void 0!==C?C:void 0]),[C]),N=(0,d.DD)(D,"nonces",A),T=null!==r&&void 0!==r?r:j&&E?null===(u=v[j])||void 0===u?void 0:u[E]:void 0,[w,U]=(0,a.useState)(null);return(0,a.useMemo)((()=>{var r,o;if(R||!e||!D||!C||!j||!t||!b||!N.valid||!E||!n||!T)return{state:x.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const l=null===(r=N.result)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.toNumber();if(N.loading||"number"!==typeof l)return{state:x.LOADING,signatureData:null,gatherPermitSignature:null};const d=w&&w.owner===C&&w.deadline>=t.toNumber()&&w.tokenAddress===E&&w.nonce===l&&w.spender===n&&("allowed"in w||s().greaterThanOrEqual(s().BigInt(w.amount),e.quotient));return{state:d?x.SIGNED:x.NOT_SIGNED,signatureData:d?w:null,gatherPermitSignature:async function(){const r=T.type===p.ALLOWED,o=t.toNumber()+m,s=e.quotient.toString(),d=r?{holder:C,spender:n,allowed:r,nonce:l,expiry:o}:{owner:C,spender:n,value:s,nonce:l,deadline:o},a=T.version?{name:T.name,version:T.version,verifyingContract:E,chainId:j}:{name:T.name,verifyingContract:E,chainId:j},u=JSON.stringify({types:{EIP712Domain:T.version?g:f,Permit:r?I:y},domain:a,primaryType:"Permit",message:d});return b.send("eth_signTypedData_v4",[C,u]).then(i.splitSignature).then((e=>{U({v:e.v,r:e.r,s:e.s,deadline:o,...r?{allowed:r}:{amount:s},nonce:l,chainId:j,owner:C,spender:n,tokenAddress:E,permitType:T.type})}))}}}),[e,D,C,j,R,t,b,N.loading,N.valid,N.result,E,n,T,w])}(e,n,(0,C.A)(),j)}},53947:(e,n,t)=>{t.d(n,{U:()=>j,m:()=>E});var i=t(49849),r=t(54644),o=t(86642),l=t(41019),s=t(4126),d=t(85713),a=t(92947),u=t(26467),c=t(56119),h=t(11577),p=t(96410),m=t(33121),v=t(73141),x=t(12763),g=t(33370);const f=p.default.div`
  ${v.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,p.default)(s.N_)`
  flex: ${e=>{let{flex:n}=e;return null!==n&&void 0!==n?n:"none"}};
  display: flex;
  align-items: center;

  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `}};
`,I=(0,p.default)(m.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,C=(0,p.default)(l.A)`
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
`;function j(e){let{origin:n}=e;return(0,g.jsx)(f,{children:(0,g.jsxs)(x.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,g.jsx)(s.N_,{to:n,children:(0,g.jsx)(C,{})}),(0,g.jsx)(I,{children:(0,g.jsx)(i.x6,{id:"LCFvJr"})})]})})}const b=(0,p.default)(m.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function E(e){let{adding:n,creating:t,autoSlippage:l,positionID:s,children:m}=e;const{chainId:v}=(0,r.useWeb3React)(),I=(0,p.useTheme)(),j=(0,u.j)(),E=(0,d.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:"");return(0,g.jsx)(f,{children:(0,g.jsxs)(x.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,g.jsx)(y,{to:E,onClick:()=>{n&&(j((0,c.JE)()),j((0,h.JE)()))},flex:m?"1":void 0,children:(0,g.jsx)(C,{stroke:I.neutral2})}),(0,g.jsx)(b,{textAlign:m?"start":"center",children:t?(0,g.jsx)(i.x6,{id:"ma87bD"}):n?(0,g.jsx)(i.x6,{id:"E6MqGy"}):(0,g.jsx)(i.x6,{id:"cJtosk"})}),m&&(0,g.jsx)(a.az,{style:{marginRight:".5rem"},children:m}),(0,g.jsx)(o.A,{autoSlippage:l,chainId:v})]})})}},60290:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ie});var i=t(49849),r=t(34203),o=t(11549),l=t(54644),s=t(36794),d=t(10530),a=t(9157),u=t(7951),c=t(21982),h=t(42831),p=t(54674),m=t(10278),v=t(78066),x=t(85713),g=t(92947),f=t(96410),y=t(33121),I=t(50645),C=t(21959),j=t(75423),b=t(70694),E=t(20295),D=t(87014),R=t(53947),A=t(74222),N=t(12763),T=t(84962),w=t(66451),U=t(57235),k=t(93405),Y=t(17567),P=t(19933),S=t(94999),_=t(15042),O=t(265),$=t(51374),L=t(67197),q=t.n(L),B=t(3368),z=t(26467),W=t(41580),Q=t(91128),V=t(23843),M=t(33370);function J(){return(0,z.G)((e=>e.burn))}var G=t(47519),H=t(19456),F=t(34342),K=t(38740),Z=t(87314),X=t(97805),ee=t(12991),ne=t(5294);const te=new o.Percent(5,100);function ie(){var e,n;const{chainId:t}=(0,l.useWeb3React)(),{currencyIdA:i,currencyIdB:r}=(0,x.g)(),[o,s]=[null!==(e=(0,Y.H2)(i))&&void 0!==e?e:void 0,null!==(n=(0,Y.H2)(r))&&void 0!==n?n:void 0];return(0,a.Gv)(t)&&o!==s?(0,M.jsx)(re,{}):(0,M.jsx)(h.PositionPageUnsupportedContent,{})}function re(){var e,n,t,a,h,L,ie,re,oe,le,se,de,ae,ue,ce,he,pe,me;const ve=(0,x.Zp)(),{currencyIdA:xe,currencyIdB:ge}=(0,x.g)(),[fe,ye]=[null!==(e=(0,Y.H2)(xe))&&void 0!==e?e:void 0,null!==(n=(0,Y.H2)(ge))&&void 0!==n?n:void 0],{account:Ie,chainId:Ce,provider:je}=(0,l.useWeb3React)(),[be,Ee]=(0,p.useMemo)((()=>[null===fe||void 0===fe?void 0:fe.wrapped,null===ye||void 0===ye?void 0:ye.wrapped]),[fe,ye]),De=(0,f.useTheme)(),Re=(0,s.QO)(),{independentField:Ae,typedValue:Ne}=J(),{pair:Te,parsedAmounts:we,error:Ue}=function(e,n){var t,r;const{account:s}=(0,l.useWeb3React)(),{independentField:d,typedValue:a}=J(),[,u]=(0,Q.ek)(e,n),c=(0,V.mK)(null!==s&&void 0!==s?s:void 0,[null===u||void 0===u?void 0:u.liquidityToken]),h=null===c||void 0===c?void 0:c[null!==(t=null===u||void 0===u||null===(r=u.liquidityToken)||void 0===r?void 0:r.address)&&void 0!==t?t:""],[p,m]=[null===e||void 0===e?void 0:e.wrapped,null===n||void 0===n?void 0:n.wrapped],v={[$.D.CURRENCY_A]:p,[$.D.CURRENCY_B]:m,[$.D.LIQUIDITY]:null===u||void 0===u?void 0:u.liquidityToken},x=(0,W.P)(null===u||void 0===u?void 0:u.liquidityToken),g=u&&x&&h&&p&&q().greaterThanOrEqual(x.quotient,h.quotient)?o.CurrencyAmount.fromRawAmount(p,u.getLiquidityValue(p,x,h,!1).quotient):void 0,f=u&&x&&h&&m&&q().greaterThanOrEqual(x.quotient,h.quotient)?o.CurrencyAmount.fromRawAmount(m,u.getLiquidityValue(m,x,h,!1).quotient):void 0,y={[$.D.CURRENCY_A]:g,[$.D.CURRENCY_B]:f};let I=new o.Percent("0","100");if(d===$.D.LIQUIDITY_PERCENT)I=new o.Percent(a,"100");else if(d===$.D.LIQUIDITY){if(null!==u&&void 0!==u&&u.liquidityToken){const e=(0,B.A)(a,u.liquidityToken);e&&h&&!e.greaterThan(h)&&(I=new o.Percent(e.quotient,h.quotient))}}else if(v[d]){const e=(0,B.A)(a,v[d]),n=y[d];e&&n&&!e.greaterThan(n)&&(I=new o.Percent(e.quotient,n.quotient))}const C={[$.D.LIQUIDITY_PERCENT]:I,[$.D.LIQUIDITY]:h&&I&&I.greaterThan("0")?o.CurrencyAmount.fromRawAmount(h.currency,I.multiply(h.quotient).quotient):void 0,[$.D.CURRENCY_A]:p&&I&&I.greaterThan("0")&&g?o.CurrencyAmount.fromRawAmount(p,I.multiply(g.quotient).quotient):void 0,[$.D.CURRENCY_B]:m&&I&&I.greaterThan("0")&&f?o.CurrencyAmount.fromRawAmount(m,I.multiply(f.quotient).quotient):void 0};let j;var b;return s||(j=(0,M.jsx)(i.x6,{id:"VHOVEJ"})),C[$.D.LIQUIDITY]&&C[$.D.CURRENCY_A]&&C[$.D.CURRENCY_B]||(j=null!==(b=j)&&void 0!==b?b:(0,M.jsx)(i.x6,{id:"iPMIoT"})),{pair:u,parsedAmounts:C,error:j}}(null!==fe&&void 0!==fe?fe:void 0,null!==ye&&void 0!==ye?ye:void 0),{onUserInput:ke}=function(){const e=(0,z.j)();return{onUserInput:(0,p.useCallback)(((n,t)=>{e((0,$.$)({field:n,typedValue:t}))}),[e])}}(),Ye=!Ue,[Pe,Se]=(0,p.useState)(!1),[_e,Oe]=(0,p.useState)(!1),[$e,Le]=(0,p.useState)(!1),[qe,Be]=(0,p.useState)(""),ze=(0,O.A)(),We=(0,F.co)(te),Qe={[$.D.LIQUIDITY_PERCENT]:we[$.D.LIQUIDITY_PERCENT].equalTo("0")?"0":we[$.D.LIQUIDITY_PERCENT].lessThan(new o.Percent("1","100"))?"<1":we[$.D.LIQUIDITY_PERCENT].toFixed(0),[$.D.LIQUIDITY]:Ae===$.D.LIQUIDITY?Ne:null!==(t=null===(a=we[$.D.LIQUIDITY])||void 0===a?void 0:a.toSignificant(6))&&void 0!==t?t:"",[$.D.CURRENCY_A]:Ae===$.D.CURRENCY_A?Ne:null!==(h=null===(L=we[$.D.CURRENCY_A])||void 0===L?void 0:L.toSignificant(6))&&void 0!==h?h:"",[$.D.CURRENCY_B]:Ae===$.D.CURRENCY_B?Ne:null!==(ie=null===(re=we[$.D.CURRENCY_B])||void 0===re?void 0:re.toSignificant(6))&&void 0!==ie?ie:""},Ve=null===(oe=we[$.D.LIQUIDITY_PERCENT])||void 0===oe?void 0:oe.equalTo(new o.Percent("1")),Me=(0,S.Qg)(null===Te||void 0===Te||null===(le=Te.liquidityToken)||void 0===le?void 0:le.address),Je=(0,S.Ps)(),{gatherPermitSignature:Ge,signatureData:He}=(0,c.a)(we[$.D.LIQUIDITY],null===Je||void 0===Je?void 0:Je.address),[Fe,Ke]=(0,P.e)(we[$.D.LIQUIDITY],null===Je||void 0===Je?void 0:Je.address);const Ze=(0,p.useCallback)(((e,n)=>ke(e,n)),[ke]),Xe=(0,p.useCallback)((e=>Ze($.D.LIQUIDITY,e)),[Ze]),en=(0,p.useCallback)((e=>Ze($.D.CURRENCY_A,e)),[Ze]),nn=(0,p.useCallback)((e=>Ze($.D.CURRENCY_B,e)),[Ze]),tn=(0,G.OQ)(),rn=(0,u.S)();async function on(){if(!Ce||!je||!Ie||!ze||!Je||!rn)throw new Error("missing dependencies");const{[$.D.CURRENCY_A]:e,[$.D.CURRENCY_B]:n}=we;if(!e||!n)throw new Error("missing currency amounts");const t={[$.D.CURRENCY_A]:(0,Z.w)(e,We)[0],[$.D.CURRENCY_B]:(0,Z.w)(n,We)[0]};if(!fe||!ye)throw new Error("missing tokens");const i=we[$.D.LIQUIDITY];if(!i)throw new Error("missing liquidity amount");const o=ye.isNative,l=fe.isNative||o;if(!be||!Ee)throw new Error("could not wrap");let s,d;if(Fe===P.h.APPROVED)l?(s=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],d=[o?be.address:Ee.address,i.quotient.toString(),t[o?$.D.CURRENCY_A:$.D.CURRENCY_B].toString(),t[o?$.D.CURRENCY_B:$.D.CURRENCY_A].toString(),Ie,ze.toHexString()]):(s=["removeLiquidity"],d=[be.address,Ee.address,i.quotient.toString(),t[$.D.CURRENCY_A].toString(),t[$.D.CURRENCY_B].toString(),Ie,ze.toHexString()]);else{if(null===He)throw new Error("Attempting to confirm without approval or a signature. Please contact support.");l?(s=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],d=[o?be.address:Ee.address,i.quotient.toString(),t[o?$.D.CURRENCY_A:$.D.CURRENCY_B].toString(),t[o?$.D.CURRENCY_B:$.D.CURRENCY_A].toString(),Ie,He.deadline,!1,He.v,He.r,He.s]):(s=["removeLiquidityWithPermit"],d=[be.address,Ee.address,i.quotient.toString(),t[$.D.CURRENCY_A].toString(),t[$.D.CURRENCY_B].toString(),Ie,He.deadline,!1,He.v,He.r,He.s])}const a=await Promise.all(s.map((e=>Je.estimateGas[e](...d).then((e=>(0,K.K)(e))).catch((n=>{console.error("estimateGas failed",e,d,n)}))))),u=a.findIndex((e=>r.gH.isBigNumber(e)));if(-1===u)console.error("This transaction would fail. Please contact support.");else{const e=s[u],n=a[u];Le(!0),await Je[e](...d,{gasLimit:n}).then((e=>{var n,t,i,r;Le(!1),tn(e,{type:H.D.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,X.V)(fe),quoteCurrencyId:(0,X.V)(ye),expectedAmountBaseRaw:null!==(n=null===(t=we[$.D.CURRENCY_A])||void 0===t?void 0:t.quotient.toString())&&void 0!==n?n:"0",expectedAmountQuoteRaw:null!==(i=null===(r=we[$.D.CURRENCY_B])||void 0===r?void 0:r.quotient.toString())&&void 0!==i?i:"0"}),Be(e.hash)})).catch((e=>{Le(!1),console.error(e)}))}}function ln(){var e,n;return(0,M.jsxs)(j.mm,{gap:"md",style:{marginTop:"20px"},children:[(0,M.jsxs)(N.JA,{align:"flex-end",children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:null===(e=we[$.D.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),(0,M.jsxs)(N.Bp,{gap:"4px",children:[(0,M.jsx)(D.A,{currency:fe,size:"24px"}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:null===fe||void 0===fe?void 0:fe.symbol})]})]}),(0,M.jsx)(N.Bp,{children:(0,M.jsx)(m.A,{size:"16",color:De.neutral2})}),(0,M.jsxs)(N.JA,{align:"flex-end",children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:null===(n=we[$.D.CURRENCY_B])||void 0===n?void 0:n.toSignificant(6)}),(0,M.jsxs)(N.Bp,{gap:"4px",children:[(0,M.jsx)(D.A,{currency:ye,size:"24px"}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:null===ye||void 0===ye?void 0:ye.symbol})]})]}),(0,M.jsx)(y.PR.DeprecatedItalic,{fontSize:12,color:De.neutral2,textAlign:"left",padding:"12px 0 0 0",children:(0,M.jsx)(i.x6,{id:"4nBvG6",values:{0:We.toSignificant(4)}})})]})}function sn(){var e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{color:De.neutral2,fontWeight:535,fontSize:16,children:(0,M.jsx)(i.x6,{id:"pKfYXn",values:{0:null===fe||void 0===fe?void 0:fe.symbol,1:null===ye||void 0===ye?void 0:ye.symbol}})}),(0,M.jsxs)(N.Bp,{children:[(0,M.jsx)(E.A,{currency0:fe,currency1:ye,margin:!0}),(0,M.jsx)(g.EY,{fontWeight:535,fontSize:16,children:null===(e=we[$.D.LIQUIDITY])||void 0===e?void 0:e.toSignificant(6)})]})]}),Te&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{color:De.neutral2,fontWeight:535,fontSize:16,children:(0,M.jsx)(i.x6,{id:"a7u1N9"})}),(0,M.jsxs)(g.EY,{fontWeight:535,fontSize:16,color:De.neutral1,children:["1 ",null===fe||void 0===fe?void 0:fe.symbol," = ",be?Te.priceOf(be).toSignificant(6):"-"," ",null===ye||void 0===ye?void 0:ye.symbol]})]}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)("div",{}),(0,M.jsxs)(g.EY,{fontWeight:535,fontSize:16,color:De.neutral1,children:["1 ",null===ye||void 0===ye?void 0:ye.symbol," = ",Ee?Te.priceOf(Ee).toSignificant(6):"-"," ",null===fe||void 0===fe?void 0:fe.symbol]})]})]}),(0,M.jsx)(I.$$,{disabled:!(Fe===P.h.APPROVED||null!==He),onClick:on,children:(0,M.jsx)(g.EY,{fontWeight:535,fontSize:20,children:(0,M.jsx)(i.x6,{id:"7VpPHA"})})})]})}const dn=(0,M.jsx)(i.x6,{id:"OqNe1s",values:{0:null===(se=we[$.D.CURRENCY_A])||void 0===se?void 0:se.toSignificant(6),1:null===fe||void 0===fe?void 0:fe.symbol,2:null===(de=we[$.D.CURRENCY_B])||void 0===de?void 0:de.toSignificant(6),3:null===ye||void 0===ye?void 0:ye.symbol}}),an=(0,p.useCallback)((e=>{Ze($.D.LIQUIDITY_PERCENT,e.toString())}),[Ze]),un=(null===fe||void 0===fe?void 0:fe.isNative)||(null===ye||void 0===ye?void 0:ye.isNative),cn=Boolean(Ce&&k.Im[Ce]&&(fe&&(null===(ae=k.Im[Ce])||void 0===ae?void 0:ae.equals(fe))||ye&&(null===(ue=k.Im[Ce])||void 0===ue?void 0:ue.equals(ye)))),hn=(0,p.useCallback)((e=>{ge&&(0,X.V)(e)===ge?ve(`/remove/v2/${(0,X.V)(e)}/${xe}`):ve(`/remove/v2/${(0,X.V)(e)}/${ge}`)}),[xe,ge,ve]),pn=(0,p.useCallback)((e=>{xe&&(0,X.V)(e)===xe?ve(`/remove/v2/${ge}/${(0,X.V)(e)}`):ve(`/remove/v2/${xe}/${(0,X.V)(e)}`)}),[xe,ge,ve]),mn=(0,p.useCallback)((()=>{Se(!1),qe&&Ze($.D.LIQUIDITY_PERCENT,"0"),Be("")}),[Ze,qe]),[vn,xn]=(0,_.A)(Number.parseInt(we[$.D.LIQUIDITY_PERCENT].toFixed(0)),an);return rn?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(ee.A,{children:[(0,M.jsx)(R.m,{creating:!1,adding:!1,autoSlippage:te}),(0,M.jsxs)(ne.mO,{children:[(0,M.jsx)(U.A,{isOpen:Pe,onDismiss:mn,attemptingTxn:$e,hash:qe||"",reviewContent:()=>(0,M.jsx)(U.Y,{title:(0,M.jsx)(i.x6,{id:"AeZIvT"}),onDismiss:mn,topContent:ln,bottomContent:sn}),pendingText:dn}),(0,M.jsxs)(j.mm,{gap:"md",children:[(0,M.jsx)(C.tZ,{children:(0,M.jsx)(j.mm,{gap:"10px",children:(0,M.jsx)(y.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,M.jsx)(i.x6,{id:"Vp58p0",components:{0:(0,M.jsx)("b",{})}})})})}),(0,M.jsx)(C.R4,{children:(0,M.jsxs)(j.mm,{gap:"20px",children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{fontWeight:535,children:(0,M.jsx)(i.x6,{id:"nC4M5t"})}),(0,M.jsx)(ne.SC,{fontWeight:535,onClick:()=>{Oe(!_e)},children:_e?(0,M.jsx)(i.x6,{id:"AQK14J"}):(0,M.jsx)(i.x6,{id:"tUVwfQ"})})]}),(0,M.jsx)(N.Ay,{style:{alignItems:"flex-end"},children:(0,M.jsxs)(g.EY,{fontSize:72,fontWeight:535,children:[Qe[$.D.LIQUIDITY_PERCENT],"%"]})}),!_e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(T.A,{value:vn,onChange:xn}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"25"),width:"20%",children:"25%"}),(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"50"),width:"20%",children:"50%"}),(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"75"),width:"20%",children:"75%"}),(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"100"),width:"20%",children:"Max"})]})]})]})}),!_e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(j.YA,{children:(0,M.jsx)(v.A,{size:"16",color:De.neutral2})}),(0,M.jsx)(C.R4,{children:(0,M.jsxs)(j.mm,{gap:"10px",children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:Qe[$.D.CURRENCY_A]||"-"}),(0,M.jsxs)(N.Bp,{children:[(0,M.jsx)(D.A,{currency:fe,style:{marginRight:"12px"}}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokena-symbol",children:null===fe||void 0===fe?void 0:fe.symbol})]})]}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:Qe[$.D.CURRENCY_B]||"-"}),(0,M.jsxs)(N.Bp,{children:[(0,M.jsx)(D.A,{currency:ye,style:{marginRight:"12px"}}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokenb-symbol",children:null===ye||void 0===ye?void 0:ye.symbol})]})]}),Ce&&(cn||un)?(0,M.jsx)(N.JA,{style:{justifyContent:"flex-end"},children:un?(0,M.jsx)(y.Bl,{to:`/remove/v2/${null!==fe&&void 0!==fe&&fe.isNative&&Ce&&k.Im[Ce]?null===(ce=k.Im[Ce])||void 0===ce?void 0:ce.address:xe}/${null!==ye&&void 0!==ye&&ye.isNative&&Ce&&k.Im[Ce]?null===(he=k.Im[Ce])||void 0===he?void 0:he.address:ge}`,children:"Receive WETH"}):cn?(0,M.jsx)(y.Bl,{to:`/remove/v2/${fe&&null!==(pe=k.Im[Ce])&&void 0!==pe&&pe.equals(fe)?"ETH":xe}/${ye&&null!==(me=k.Im[Ce])&&void 0!==me&&me.equals(ye)?"ETH":ge}`,children:"Receive ETH"}):null}):null]})})]}),_e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(b.A,{value:Qe[$.D.LIQUIDITY],onUserInput:Xe,onMax:()=>{Ze($.D.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ve,currency:null===Te||void 0===Te?void 0:Te.liquidityToken,pair:Te,id:"liquidity-amount"}),(0,M.jsx)(j.YA,{children:(0,M.jsx)(v.A,{size:"16",color:De.neutral2})}),(0,M.jsx)(b.A,{hideBalance:!0,value:Qe[$.D.CURRENCY_A],onUserInput:en,onMax:()=>Ze($.D.LIQUIDITY_PERCENT,"100"),showMaxButton:!Ve,currency:fe,label:"Output",onCurrencySelect:hn,id:"remove-liquidity-tokena"}),(0,M.jsx)(j.YA,{children:(0,M.jsx)(m.A,{size:"16",color:De.neutral2})}),(0,M.jsx)(b.A,{hideBalance:!0,value:Qe[$.D.CURRENCY_B],onUserInput:nn,onMax:()=>Ze($.D.LIQUIDITY_PERCENT,"100"),showMaxButton:!Ve,currency:ye,label:"Output",onCurrencySelect:pn,id:"remove-liquidity-tokenb"})]}),Te&&(0,M.jsxs)("div",{style:{padding:"10px 20px"},children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(i.x6,{id:"rcNnsQ"}),(0,M.jsxs)("div",{children:["1 ",null===fe||void 0===fe?void 0:fe.symbol," = ",be?Te.priceOf(be).toSignificant(6):"-"," ",null===ye||void 0===ye?void 0:ye.symbol]})]}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)("div",{}),(0,M.jsxs)("div",{children:["1 ",null===ye||void 0===ye?void 0:ye.symbol," = ",Ee?Te.priceOf(Ee).toSignificant(6):"-"," ",null===fe||void 0===fe?void 0:fe.symbol]})]})]}),(0,M.jsx)("div",{style:{position:"relative"},children:Ie?(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(I.m$,{onClick:async function(){if(!Me||!Te||!je||!ze)throw new Error("missing dependencies");if(!we[$.D.LIQUIDITY])throw new Error("missing liquidity amount");if(Ge)try{await Ge()}catch(Ue){4001!==(null===Ue||void 0===Ue?void 0:Ue.code)&&await Ke()}else await Ke()},confirmed:Fe===P.h.APPROVED||null!==He,disabled:Fe!==P.h.NOT_APPROVED||null!==He,mr:"0.5rem",fontWeight:535,fontSize:16,children:Fe===P.h.PENDING?(0,M.jsx)(w.nv,{children:(0,M.jsx)(i.x6,{id:"j2Uisd"})}):Fe===P.h.APPROVED||null!==He?(0,M.jsx)(i.x6,{id:"7kb4LU"}):(0,M.jsx)(i.x6,{id:"Z7ZXbT"})}),(0,M.jsx)(I.Jk,{onClick:()=>{Se(!0)},disabled:!Ye||null===He&&Fe!==P.h.APPROVED,error:!Ye&&!!we[$.D.CURRENCY_A]&&!!we[$.D.CURRENCY_B],children:(0,M.jsx)(g.EY,{fontSize:16,fontWeight:535,children:Ue||(0,M.jsx)(i.x6,{id:"t/YqKh"})})})]}):(0,M.jsx)(I.N$,{onClick:Re,children:(0,M.jsx)(i.x6,{id:"VHOVEJ"})})})]})]})]}),Te?(0,M.jsx)(j.mm,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,M.jsx)(A.tA,{showUnwrapped:cn,pair:Te})}):null]}):(0,M.jsx)(d.O,{})}},70694:(e,n,t)=>{t.d(n,{A:()=>P});var i=t(49849),r=t(54644),o=t(18223),l=t(9157),s=t(54563),d=t(54674),a=t(96410),u=t(33121),c=t(73141),h=t(80672),p=t(49225),m=t(23843),v=t(50645),x=t(20295),g=t(87014),f=t(86724),y=t(12763),I=t(21390),C=t(17176),j=t(33370);const b=a.default.div`
  ${c.ZZ};
  position: relative;
  border-radius: ${e=>{let{hideInput:n}=e;return n?"16px":"20px"}};
  background-color: ${e=>{let{theme:n,hideInput:t}=e;return t?"transparent":n.surface2}};

  z-index: 1;
  width: ${e=>{let{hideInput:n}=e;return n?"100%":"initial"}};
  transition: height 1s ease;
  will-change: height;
`,E=a.default.div`
  border-radius: ${e=>{let{hideInput:n}=e;return n?"16px":"20px"}};
  border: 1px solid ${e=>{let{theme:n}=e;return n.surface3}};
  background-color: ${e=>{let{theme:n}=e;return n.surface2}};
  width: ${e=>{let{hideInput:n}=e;return n?"100%":"initial"}};
  ${e=>{let{theme:n,hideInput:t,disabled:i}=e;return!i&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":n.surface2};\n    }\n  `}}
`,D=(0,a.default)(v.EA)`
  align-items: center;
  background-color: ${e=>{let{selected:n,theme:t}=e;return n?t.surface1:t.accent1}};
  opacity: ${e=>{let{disabled:n}=e;return n?.4:1}};
  box-shadow: ${e=>{let{theme:n}=e;return n.deprecated_shallowShadow}};
  color: ${e=>{let{selected:n,theme:t}=e;return n?t.neutral1:t.white}};
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
    background-color: ${e=>{let{selected:n,theme:t}=e;return n?t.surface2:(0,s.e$)(.05,t.accent1)}};
  }
  visibility: ${e=>{let{visible:n}=e;return n?"visible":"hidden"}};
  ${e=>{let{pointerEvents:n}=e;return n&&"pointer-events: none"}}
`,R=a.default.div`
  ${c.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${e=>{let{selected:n}=e;return n?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"}};
`,A=a.default.div`
  ${c.BI};
  align-items: center;
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${e=>{let{theme:n}=e;return(0,s.e$)(.2,n.neutral2)}};
  }
`,N=(0,a.default)(A)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,T=a.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,w=(0,a.default)(p.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${e=>{let{selected:n,theme:t}=e;return n?t.neutral1:t.white}};
    stroke-width: 1.5px;
  }
`,U=a.default.span`
  ${e=>{let{active:n}=e;return"  margin: 0 0.25rem 0 0.25rem;"}}
  font-size: 20px;
`,k=a.default.button`
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
`,Y=(0,a.default)(f.p)`
  ${o.fp};
  text-align: left;
`;function P(e){let{value:n,onUserInput:t,onMax:s,showMaxButton:c,onCurrencySelect:p,currency:v,otherCurrency:f,id:A,showCommonBases:P,showCurrencyAmount:S,disableNonToken:_,renderBalance:O,fiatValue:$,hideBalance:L=!1,pair:q=null,hideInput:B=!1,locked:z=!1,loading:W=!1,...Q}=e;const[V,M]=(0,d.useState)(!1),{account:J,chainId:G}=(0,r.useWeb3React)(),H=(0,m.rL)(null!==J&&void 0!==J?J:void 0,null!==v&&void 0!==v?v:void 0),F=(0,a.useTheme)(),K=(0,d.useCallback)((()=>{M(!1)}),[M]),Z=(0,l.Gv)(G);return(0,j.jsxs)(b,{id:A,hideInput:B,...Q,children:[!z&&(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(E,{hideInput:B,disabled:!Z,children:[(0,j.jsxs)(R,{style:B?{padding:"0",borderRadius:"8px"}:{},selected:!p,children:[!B&&(0,j.jsx)(Y,{className:"token-amount-input",value:n,onUserInput:t,disabled:!Z,$loading:W}),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(D,{disabled:!Z,visible:void 0!==v,selected:!!v,hideInput:B,className:"open-currency-select-button",onClick:()=>{p&&M(!0)},pointerEvents:p?void 0:"none",children:(0,j.jsxs)(T,{children:[(0,j.jsxs)(y.Bp,{children:[q?(0,j.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,j.jsx)(x.A,{currency0:q.token0,currency1:q.token1,size:24,margin:!0})}):v&&(0,j.jsx)(g.A,{style:{marginRight:"0.5rem"},currency:v,size:"24px"}),q?(0,j.jsxs)(U,{className:"pair-name-container",children:[null===q||void 0===q?void 0:q.token0.symbol,":",null===q||void 0===q?void 0:q.token1.symbol]}):(0,j.jsx)(U,{className:"token-symbol-container",active:Boolean(v&&v.symbol),children:(v&&v.symbol&&v.symbol.length>20?v.symbol.slice(0,4)+"..."+v.symbol.slice(v.symbol.length-5,v.symbol.length):null===v||void 0===v?void 0:v.symbol)||(0,j.jsx)(i.x6,{id:"T0Y2+3"})})]}),p&&(0,j.jsx)(w,{selected:!!v})]})})})]}),Boolean(!B&&!L&&v)&&(0,j.jsx)(N,{children:(0,j.jsxs)(y.JA,{children:[(0,j.jsx)(o.N3,{$loading:W,children:$&&(0,j.jsx)(C.s,{fiatValue:$})}),J&&(0,j.jsxs)(y.Bp,{style:{height:"17px"},children:[(0,j.jsx)(u.PR.DeprecatedBody,{onClick:s,color:F.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!L&&v&&H)&&((null===O||void 0===O?void 0:O(H))||(0,j.jsx)(i.x6,{id:"VuFd5C",values:{0:(0,h.N)(H,4)}}))}),Boolean(c&&H)&&(0,j.jsx)(k,{onClick:s,children:(0,j.jsx)(i.x6,{id:"4HtGBb"})})]})]})})]})}),p&&(0,j.jsx)(I.A,{isOpen:V,onDismiss:K,onCurrencySelect:p,selectedCurrency:v,otherSelectedCurrency:f,showCommonBases:P,showCurrencyAmount:S,disableNonToken:_})]})}},82685:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(54644),r=t(66295),o=t(54674),l=t(94999);function s(){var e;const{account:n}=(0,i.useWeb3React)(),t=(0,l._Q)(),s=(0,o.useMemo)((()=>[null!==n&&void 0!==n?n:void 0]),[n]),d=(0,r.DD)(t,"isArgentWallet",s,r.bo);return Boolean(null===d||void 0===d||null===(e=d.result)||void 0===e?void 0:e[0])}},84962:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(54674),r=t(96410),o=t(33370);const l=r.default.input`
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
`;function s(e){let{value:n,onChange:t,min:r=0,step:s=1,max:d=100,size:a=28,...u}=e;const c=(0,i.useCallback)((e=>{t(parseInt(e.target.value))}),[t]);return(0,o.jsx)(l,{size:a,...u,type:"range",value:n,style:{padding:"15px 0"},onChange:c,"aria-labelledby":"input slider",step:s,min:r,max:d})}},87314:(e,n,t)=>{t.d(n,{w:()=>r});const i=new(t(11549).Fraction)(1,1);function r(e,n){if(n.lessThan(0)||n.greaterThan(i))throw new Error("Unexpected slippage");return[e.multiply(i.subtract(n)).quotient,e.multiply(i.add(n)).quotient]}}}]);
//# sourceMappingURL=290.8b6231fa.chunk.js.map