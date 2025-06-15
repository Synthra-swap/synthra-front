"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[604],{3327:(e,n,t)=>{t.d(n,{qC:()=>u,LR:()=>s,jK:()=>a,yj:()=>c,pL:()=>l});var i=t(96410);const r=t.p+"static/media/big_unicorn.90ddcbf00b3ff1ad4495.png",d=t.p+"static/media/noise.3c7efafc83614205bd1a.png";var o=t(75423);const l=(0,i.default)(o.mm)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #000000 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,s=i.default.span`
  background: url(${r});
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
`,a=i.default.span`
  background: url(${d});
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
`,c=(0,i.default)(o.mm)`
  padding: 1rem;
  z-index: 1;
  opacity: ${e=>{let{disabled:n}=e;return n&&"0.4"}};
`,u=i.default.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},40909:(e,n,t)=>{t.r(n),t.d(n,{default:()=>De});var i=t(49849),r=t(34203),d=t(83312),o=t(11549),l=t(54644),s=t(36794),a=t(26047),c=t(96410),u=t(33121),p=t(33370);const x=c.default.div`
  color: ${e=>{let{theme:n}=e;return n.neutral2}};
`,h=c.default.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${e=>{let{theme:n}=e;return n.deprecated_accentWarning}};
  margin-bottom: 8px;
`,m=c.default.div`
  background-color: ${e=>{let{theme:n}=e;return n.deprecated_accentWarningSoft}};
  border-radius: 16px;
  margin-top: 12px;
  max-width: 480px;
  padding: 12px 20px;
  width: 100%;
`,v=e=>{let{ownerAddress:n}=e;return(0,p.jsxs)(m,{children:[(0,p.jsxs)(h,{children:[(0,p.jsx)(a.A,{style:{marginRight:"8px"}}),(0,p.jsx)(u.PR.SubHeader,{color:"deprecated_accentWarning",children:(0,p.jsx)(i.x6,{id:"r6y+jM"})})]}),(0,p.jsx)(x,{children:(0,p.jsx)(i.x6,{id:"7o/WJ5",values:{ownerAddress:n}})})]})};var g=t(42789),j=t(9157),R=t(31688),f=t(66295),y=t(12991),b=t(42831),C=t(54674),A=t(85713),D=t(4126),E=t(92947),N=t(49132);function P(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}var S=t(6612),k=t(50645),_=t(21959),w=t(75423),U=t(70694),B=t(33083),$=t(53947),I=t(272),Y=t(20295),L=t(3327),O=t(87014),z=t(63520),M=t(12763),T=t(67197),W=t.n(T),F=t(11577),G=t(85177),J=t(51150);const V=e=>{var n;let{position:t,title:r,inRange:d,baseCurrencyDefault:o,ticksAtLimit:l}=e;const s=(0,c.useTheme)(),{formatTickPrice:a}=(0,G.kc)(),x=(0,J.U)(t.pool.token0),h=(0,J.U)(t.pool.token1),[m,v]=(0,C.useState)(o?o===x?x:o===h?h:x:x),g=m===x,j=g?h:x,R=g?t.pool.priceOf(t.pool.token0):t.pool.priceOf(t.pool.token1),f=g?t.token0PriceLower:t.token0PriceUpper.invert(),y=g?t.token0PriceUpper:t.token0PriceLower.invert(),b=(0,C.useCallback)((()=>{v(j)}),[j]),A=(null===t||void 0===t?void 0:t.liquidity)&&W().equal(null===t||void 0===t?void 0:t.liquidity,W().BigInt(0));return(0,p.jsxs)(w.mm,{gap:"md",style:{marginTop:"0.5rem"},children:[(0,p.jsxs)(M.JA,{style:{marginBottom:"0.5rem"},children:[(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(Y.A,{currency0:null!==x&&void 0!==x?x:void 0,currency1:null!==h&&void 0!==h?h:void 0,size:24,margin:!0}),(0,p.jsxs)(u.PR.DeprecatedLabel,{ml:"10px",fontSize:"24px",children:[null===x||void 0===x?void 0:x.symbol," / ",null===h||void 0===h?void 0:h.symbol]})]}),(0,p.jsx)(I.A,{removed:A,inRange:d})]}),(0,p.jsx)(_.R4,{children:(0,p.jsxs)(w.mm,{gap:"md",children:[(0,p.jsxs)(M.JA,{children:[(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(O.A,{currency:x}),(0,p.jsx)(u.PR.DeprecatedLabel,{ml:"8px",children:null===x||void 0===x?void 0:x.symbol})]}),(0,p.jsx)(M.Bp,{children:(0,p.jsx)(u.PR.DeprecatedLabel,{mr:"8px",children:t.amount0.toSignificant(4)})})]}),(0,p.jsxs)(M.JA,{children:[(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(O.A,{currency:h}),(0,p.jsx)(u.PR.DeprecatedLabel,{ml:"8px",children:null===h||void 0===h?void 0:h.symbol})]}),(0,p.jsx)(M.Bp,{children:(0,p.jsx)(u.PR.DeprecatedLabel,{mr:"8px",children:t.amount1.toSignificant(4)})})]}),(0,p.jsx)(L.qC,{}),(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(i.x6,{id:"EU3wU4"})}),(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(i.x6,{id:"hbO8db",values:{0:(null===t||void 0===t||null===(n=t.pool)||void 0===n?void 0:n.fee)/1e4}})})]})]})}),(0,p.jsxs)(w.mm,{gap:"md",children:[(0,p.jsxs)(M.JA,{children:[r?(0,p.jsx)(u.PR.DeprecatedMain,{children:r}):(0,p.jsx)("div",{}),(0,p.jsx)(z.A,{currencyA:g?x:h,currencyB:g?h:x,handleRateToggle:b})]}),(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(_.R4,{width:"48%",padding:"8px",children:(0,p.jsxs)(w.mm,{gap:"4px",justify:"center",children:[(0,p.jsx)(u.PR.DeprecatedMain,{fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"EQs1sJ"})}),(0,p.jsx)(u.PR.DeprecatedMediumHeader,{textAlign:"center",children:a({price:f,atLimit:l,direction:F.zm.LOWER})}),(0,p.jsx)(u.PR.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"7Z4WfS",values:{0:j.symbol,1:m.symbol}})}),(0,p.jsx)(u.PR.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,p.jsx)(i.x6,{id:"WgTuci",values:{0:null===m||void 0===m?void 0:m.symbol}})})]})}),(0,p.jsx)(_.R4,{width:"48%",padding:"8px",children:(0,p.jsxs)(w.mm,{gap:"4px",justify:"center",children:[(0,p.jsx)(u.PR.DeprecatedMain,{fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"5etEUX"})}),(0,p.jsx)(u.PR.DeprecatedMediumHeader,{textAlign:"center",children:a({price:y,atLimit:l,direction:F.zm.UPPER})}),(0,p.jsx)(u.PR.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"7Z4WfS",values:{0:j.symbol,1:m.symbol}})}),(0,p.jsx)(u.PR.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,p.jsx)(i.x6,{id:"WgTuci",values:{0:null===j||void 0===j?void 0:j.symbol}})})]})})]}),(0,p.jsx)(_.R4,{padding:"12px ",children:(0,p.jsxs)(w.mm,{gap:"4px",justify:"center",children:[(0,p.jsx)(u.PR.DeprecatedMain,{fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"DWd30U"})}),(0,p.jsx)(u.PR.DeprecatedMediumHeader,{children:`${R.toSignificant(5)} `}),(0,p.jsx)(u.PR.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"7Z4WfS",values:{0:j.symbol,1:m.symbol}})})]})})]})]})};var q=t(94872);const H=(0,c.default)(k.fK).attrs((()=>({padding:"6px",$borderRadius:"8px"})))`
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
  flex: 1;
`;function Q(e){let{onSetFullRange:n}=e;return(0,p.jsx)(M.eF,{gap:"4px",width:"auto",children:(0,p.jsx)(H,{"data-testid":"set-full-range",onClick:n,children:(0,p.jsx)(u.PR.DeprecatedBody,{fontSize:12,children:(0,p.jsx)(i.x6,{id:"5IHTSS"})})})})}var Z=t(65311),K=t(57235),X=t(92627),ee=t(93405),ne=t(17567),te=t(19933);const ie=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]');var re=t(94999),de=t(82685);var oe=t(94687);var le=t(90495),se=t(33778),ae=t(265),ce=t(25916),ue=t(47519),pe=t(19456),xe=t(34342);const he=new(t(95626).KA)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function me(e,n){if(!e.currency.isToken)throw new Error("Must call with an amount of token");const t=he.encodeFunctionData("approve",[n,(0,d.toHex)(e.quotient)]);return{to:e.currency.address,data:t,value:"0x0"}}var ve=t(38740),ge=t(97805),je=t(16649),Re=t(5294);const fe=c.default.div`
  padding-top: 12px;
`;function ye(e){let{position:n,outOfRange:t,ticksAtLimit:i}=e;return(0,p.jsx)(fe,{children:(0,p.jsx)(w.mm,{gap:"lg",children:n?(0,p.jsx)(V,{position:n,inRange:!t,ticksAtLimit:i,title:"Selected Range"}):null})})}var be=t(14841);const Ce=new o.Percent(50,1e4),Ae=(0,c.default)(y.q)`
  padding: ${e=>{let{$hasExistingPosition:n}=e;return n?"10px":0}};
  max-width: 640px;
`;function De(){const{chainId:e}=(0,l.useWeb3React)();return(0,j.Gv)(e)?(0,p.jsx)(Ee,{}):(0,p.jsx)(b.PositionPageUnsupportedContent,{})}function Ee(){var e,n,t,x,h,m,j,y,b,I,Y,L;const O=(0,A.Zp)(),{currencyIdA:T,currencyIdB:W,feeAmount:G,tokenId:J}=(0,A.g)(),{account:H,chainId:he,provider:fe}=(0,l.useWeb3React)(),De=(0,c.useTheme)(),Ee=(0,s.QO)(),Ne=(0,ue.OQ)(),Pe=(0,re.TA)(),{position:Se,loading:ke}=(0,ce.C)(J?r.gH.from(J):void 0),_e=!!Se&&!ke,{position:we}=function(e){const n=(0,ne.H2)(null===e||void 0===e?void 0:e.token0),t=(0,ne.H2)(null===e||void 0===e?void 0:e.token1),[,i]=(0,oe.Q)(null!==n&&void 0!==n?n:void 0,null!==t&&void 0!==t?t:void 0,null===e||void 0===e?void 0:e.fee);let r;return i&&e&&(r=new d.Position({pool:i,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper})),{position:r,pool:null!==i&&void 0!==i?i:void 0}}(Se),Ue=G&&Object.values(d.FeeAmount).includes(parseFloat(G))?parseFloat(G):void 0,Be=(0,ne.H2)(T),$e=(0,ne.H2)(W),Ie=Be&&$e&&Be.wrapped.equals($e.wrapped)?void 0:$e,{independentField:Ye,typedValue:Le,startPriceTypedValue:Oe}=(0,N.UN)(),{pool:ze,ticks:Me,dependentField:Te,price:We,pricesAtTicks:Fe,pricesAtLimit:Ge,parsedAmounts:Je,currencyBalances:Ve,position:qe,noLiquidity:He,currencies:Qe,errorMessage:Ze,invalidPool:Ke,invalidRange:Xe,outOfRange:en,depositADisabled:nn,depositBDisabled:tn,invertPrice:rn,ticksAtLimit:dn}=(0,N.wt)(null!==Be&&void 0!==Be?Be:void 0,null!==Ie&&void 0!==Ie?Ie:void 0,Ue,null!==Be&&void 0!==Be?Be:void 0,we),{onFieldAInput:on,onFieldBInput:ln,onLeftRangeInput:sn,onRightRangeInput:an,onStartPriceInput:cn}=(0,N.iG)(He),un=!Ze&&!Xe,[pn,xn]=(0,C.useState)(!1),[hn,mn]=(0,C.useState)(!1),vn=(0,ae.A)(),[gn,jn]=(0,C.useState)(""),Rn={[Ye]:Le,[Te]:null!==(e=null===(n=Je[Te])||void 0===n?void 0:n.toSignificant(6))&&void 0!==e?e:""},fn={[F.D0.CURRENCY_A]:(0,se.z8)(Je[F.D0.CURRENCY_A]),[F.D0.CURRENCY_B]:(0,se.z8)(Je[F.D0.CURRENCY_B])},yn=[F.D0.CURRENCY_A,F.D0.CURRENCY_B].reduce(((e,n)=>({...e,[n]:(0,je.r)(Ve[n])})),{}),bn=[F.D0.CURRENCY_A,F.D0.CURRENCY_B].reduce(((e,n)=>{var t,i;return{...e,[n]:null===(t=yn[n])||void 0===t?void 0:t.equalTo(null!==(i=Je[n])&&void 0!==i?i:"0")}}),{}),Cn=function(){const{account:e}=(0,l.useWeb3React)(),n=(0,de.A)();return(0,re.ku)(n&&null!==e&&void 0!==e?e:void 0,ie,!0)}(),[An,Dn]=(0,te.e)(Cn?void 0:Je[F.D0.CURRENCY_A],he?o.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he]:void 0),[En,Nn]=(0,te.e)(Cn?void 0:Je[F.D0.CURRENCY_B],he?o.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he]:void 0),Pn=(0,xe.co)(en?X.dU:Ce);async function Sn(){if(he&&fe&&H&&Pe&&Be&&Ie&&qe&&H&&vn){const e=Be.isNative?Be:Ie.isNative?Ie:void 0,{calldata:n,value:t}=_e&&J?d.NonfungiblePositionManager.addCallParameters(qe,{tokenId:J,slippageTolerance:Pn,deadline:vn.toString(),useNative:e}):d.NonfungiblePositionManager.addCallParameters(qe,{slippageTolerance:Pn,recipient:H,deadline:vn.toString(),useNative:e,createPool:He});let i={to:o.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he],data:n,value:t};if(Cn){const e=Je[F.D0.CURRENCY_A],n=Je[F.D0.CURRENCY_B],t=[...e&&e.currency.isToken?[me(e,o.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he])]:[],...n&&n.currency.isToken?[me(n,o.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he])]:[],{to:i.to,data:i.data,value:i.value}],r=Cn.interface.encodeFunctionData("wc_multiCall",[t]);i={to:Cn.address,data:r,value:"0x0"}}const r=await fe.getSigner().getChainId();if(he!==r)throw new S.$c;mn(!0),fe.getSigner().estimateGas(i).then((e=>{const n={...i,gasLimit:(0,ve.K)(e)};return fe.getSigner().sendTransaction(n).then((e=>{var n,t,i,r,d,o;mn(!1);const l={type:pe.D.ADD_LIQUIDITY_V3_POOL,baseCurrencyId:(0,ge.V)(Be),quoteCurrencyId:(0,ge.V)(Ie),createPool:Boolean(He),expectedAmountBaseRaw:null!==(n=null===(t=Je[F.D0.CURRENCY_A])||void 0===t||null===(i=t.quotient)||void 0===i?void 0:i.toString())&&void 0!==n?n:"0",expectedAmountQuoteRaw:null!==(r=null===(d=Je[F.D0.CURRENCY_B])||void 0===d||null===(o=d.quotient)||void 0===o?void 0:o.toString())&&void 0!==r?r:"0",feeAmount:qe.pool.fee};Ne(e,l),jn(e.hash)}))})).catch((e=>{console.error("Failed to send transaction",e),mn(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)}))}}const kn=(0,C.useCallback)(((e,n)=>{const t=(0,ge.V)(e);if(t===n)return[t,void 0];{var i,r;const e="ETH"===t||void 0!==he&&t===(null===(i=ee.Im[he])||void 0===i?void 0:i.address),d=void 0!==n&&("ETH"===n||void 0!==he&&n===(null===(r=ee.Im[he])||void 0===r?void 0:r.address));return e&&d?[t,void 0]:[t,n]}}),[he]),_n=(0,C.useCallback)((e=>{const[n,t]=kn(e,W);O(void 0===t?`/add/${n}`:`/add/${n}/${t}/3000`)}),[kn,W,O]),wn=(0,C.useCallback)((e=>{const[n,t]=kn(e,T);O(void 0===t?`/add/${n}`:`/add/${t}/${n}/3000`)}),[kn,T,O]),Un=(0,C.useCallback)((()=>{xn(!1),gn&&(on(""),O("/pools")),jn("")}),[O,on,gn]),Bn=(0,le.C)(null===Qe||void 0===Qe?void 0:Qe.CURRENCY_A,null===Qe||void 0===Qe?void 0:Qe.CURRENCY_B),$n=(0,C.useCallback)((()=>{on(""),ln(""),sn(""),an(""),O("/add")}),[O,on,ln,sn,an]),{[F.zm.LOWER]:In,[F.zm.UPPER]:Yn}=Me,{[F.zm.LOWER]:Ln,[F.zm.UPPER]:On}=Fe,{getDecrementLower:zn,getIncrementLower:Mn,getDecrementUpper:Tn,getIncrementUpper:Wn,getSetFullRange:Fn}=(0,N.Uz)(null!==Be&&void 0!==Be?Be:void 0,null!==Ie&&void 0!==Ie?Ie:void 0,Ue,In,Yn,ze),Gn=!Cn&&An!==te.h.APPROVED&&!!Je[F.D0.CURRENCY_A],Jn=!Cn&&En!==te.h.APPROVED&&!!Je[F.D0.CURRENCY_B],Vn=`Supplying ${nn?"":null===(t=Je[F.D0.CURRENCY_A])||void 0===t?void 0:t.toSignificant(6)} ${nn?"":null===(x=Qe[F.D0.CURRENCY_A])||void 0===x?void 0:x.symbol} ${en?"":"and"} ${tn?"":null===(h=Je[F.D0.CURRENCY_B])||void 0===h?void 0:h.toSignificant(6)} ${tn?"":null===(m=Qe[F.D0.CURRENCY_B])||void 0===m?void 0:m.symbol}`,[qn,Hn]=(0,D.ok)(),Qn=(0,C.useCallback)((()=>{Fn();const e=Ge[F.zm.LOWER];e&&qn.set("minPrice",e.toSignificant(5));const n=Ge[F.zm.UPPER];n&&qn.set("maxPrice",n.toSignificant(5)),Hn(qn)}),[Fn,Ge,qn,Hn]),Zn=(0,R.A)(qn);(0,C.useEffect)((()=>{const e=qn.get("minPrice"),n=null===Zn||void 0===Zn?void 0:Zn.get("minPrice");!e||"string"!==typeof e||isNaN(e)||n&&n===e||sn(e)}),[qn]),(0,C.useEffect)((()=>{const e=qn.get("maxPrice"),n=null===Zn||void 0===Zn?void 0:Zn.get("maxPrice");!e||"string"!==typeof e||isNaN(e)||n&&n===e||an(e)}),[qn]);const Kn=()=>{var e,n,t,r;return Bn?(0,p.jsx)(k.$$,{disabled:!0,$borderRadius:"12px",padding:"12px",children:(0,p.jsx)(u.PR.DeprecatedMain,{mb:"4px",children:(0,p.jsx)(i.x6,{id:"Iac4Ia"})})}):H?(0,p.jsxs)(w.mm,{gap:"md",children:[(An===te.h.NOT_APPROVED||An===te.h.PENDING||En===te.h.NOT_APPROVED||En===te.h.PENDING)&&un&&(0,p.jsxs)(M.JA,{children:[Gn&&(0,p.jsx)(k.$$,{onClick:Dn,disabled:An===te.h.PENDING,width:Jn?"48%":"100%",children:An===te.h.PENDING?(0,p.jsx)(Re.nv,{children:(0,p.jsx)(i.x6,{id:"MfyhMG",values:{0:null===(e=Qe[F.D0.CURRENCY_A])||void 0===e?void 0:e.symbol}})}):(0,p.jsx)(i.x6,{id:"fgGids",values:{0:null===(n=Qe[F.D0.CURRENCY_A])||void 0===n?void 0:n.symbol}})}),Jn&&(0,p.jsx)(k.$$,{onClick:Nn,disabled:En===te.h.PENDING,width:Gn?"48%":"100%",children:En===te.h.PENDING?(0,p.jsx)(Re.nv,{children:(0,p.jsx)(i.x6,{id:"MfyhMG",values:{0:null===(t=Qe[F.D0.CURRENCY_B])||void 0===t?void 0:t.symbol}})}):(0,p.jsx)(i.x6,{id:"fgGids",values:{0:null===(r=Qe[F.D0.CURRENCY_B])||void 0===r?void 0:r.symbol}})})]}),(0,p.jsx)(k.Jk,{onClick:()=>{xn(!0)},disabled:!un||!Cn&&An!==te.h.APPROVED&&!nn||!Cn&&En!==te.h.APPROVED&&!tn||void 0===Ln||void 0===On,error:!un&&!!Je[F.D0.CURRENCY_A]&&!!Je[F.D0.CURRENCY_B],children:(0,p.jsx)(E.EY,{fontWeight:535,children:Ze||(0,p.jsx)(i.x6,{id:"rdUucN"})})})]}):(0,p.jsx)(k.N$,{onClick:Ee,$borderRadius:"12px",padding:"12px",children:(0,p.jsx)(i.x6,{id:"VHOVEJ"})})},Xn=fn[F.D0.CURRENCY_A],et=fn[F.D0.CURRENCY_B],nt=(0,C.useMemo)((()=>({data:Xn?parseFloat(Xn.toSignificant()):void 0,isLoading:!1})),[Xn]),tt=(0,C.useMemo)((()=>({data:et?parseFloat(et.toSignificant()):void 0,isLoading:!1})),[et]),it=null===(j=(0,f.DD)(J?Pe:null,"ownerOf",[J]).result)||void 0===j?void 0:j[0],rt=P(it,H)||P(null===Se||void 0===Se?void 0:Se.operator,H),dt=Boolean(_e&&H&&!rt);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(be.VD,{children:[(0,p.jsx)(K.A,{isOpen:pn,onDismiss:Un,attemptingTxn:hn,hash:gn,reviewContent:()=>(0,p.jsx)(K.Y,{title:(0,p.jsx)(i.x6,{id:"OBdohg"}),onDismiss:Un,topContent:()=>(0,p.jsx)(ye,{parsedAmounts:Je,position:qe,existingPosition:we,priceLower:Ln,priceUpper:On,outOfRange:en,ticksAtLimit:dn}),bottomContent:()=>(0,p.jsx)(k.$$,{style:{marginTop:"1rem"},onClick:Sn,children:(0,p.jsx)(E.EY,{fontWeight:535,fontSize:20,children:(0,p.jsx)(i.x6,{id:"m16xKo"})})})}),pendingText:Vn}),(0,p.jsxs)(Ae,{$hasExistingPosition:_e,children:[(0,p.jsx)($.m,{creating:!1,adding:!0,positionID:J,autoSlippage:Ce,showBackLink:!_e,children:!_e&&(0,p.jsx)(M.Ay,{justifyContent:"flex-end",style:{width:"fit-content",minWidth:"fit-content"},children:(0,p.jsx)(be.OC,{children:(0,p.jsx)(k.C3,{onClick:$n,children:(0,p.jsx)(u.PR.DeprecatedBlue,{fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"yYxB17"})})})})})}),(0,p.jsx)(be.mO,{children:(0,p.jsxs)(be.W3,{wide:!_e,children:[(0,p.jsxs)(w.mm,{gap:"lg",children:[!_e&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(w.mm,{gap:"md",children:[(0,p.jsx)(M.JA,{paddingBottom:"20px",children:(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(i.x6,{id:"nxRg31"})})}),(0,p.jsxs)(M.JA,{gap:"md",children:[(0,p.jsx)(U.A,{value:Rn[F.D0.CURRENCY_A],onUserInput:on,hideInput:!0,onMax:()=>{var e,n;on(null!==(e=null===(n=yn[F.D0.CURRENCY_A])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},onCurrencySelect:_n,showMaxButton:!bn[F.D0.CURRENCY_A],currency:null!==(y=Qe[F.D0.CURRENCY_A])&&void 0!==y?y:null,id:"add-liquidity-input-tokena",showCommonBases:!0}),(0,p.jsx)(U.A,{value:Rn[F.D0.CURRENCY_B],hideInput:!0,onUserInput:ln,onCurrencySelect:wn,onMax:()=>{var e,n;ln(null!==(e=null===(n=yn[F.D0.CURRENCY_B])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},showMaxButton:!bn[F.D0.CURRENCY_B],currency:null!==(b=Qe[F.D0.CURRENCY_B])&&void 0!==b?b:null,id:"add-liquidity-input-tokenb",showCommonBases:!0})]})]})," "]}),_e&&we&&(0,p.jsx)(V,{position:we,title:(0,p.jsx)(i.x6,{id:"dWPDm3"}),inRange:!en,ticksAtLimit:dn})]}),!_e&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(be.xQ,{gap:"md",disabled:!Ue||Ke,children:[(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(i.x6,{id:"5CZbyC"})}),Boolean(Be&&Ie)&&(0,p.jsxs)(M.Bp,{gap:"8px",children:[(0,p.jsx)(Q,{onSetFullRange:Qn}),(0,p.jsx)(z.A,{currencyA:Be,currencyB:Ie,handleRateToggle:()=>{var e,n,t,i,r;dn[F.zm.LOWER]||dn[F.zm.UPPER]||(sn(null!==(e=null===(n=rn?Ln:null===On||void 0===On?void 0:On.invert())||void 0===n?void 0:n.toSignificant(6))&&void 0!==e?e:""),an(null!==(t=null===(i=rn?On:null===Ln||void 0===Ln?void 0:Ln.invert())||void 0===i?void 0:i.toSignificant(6))&&void 0!==t?t:""),on(null!==(r=Rn[F.D0.CURRENCY_B])&&void 0!==r?r:""));O(`/add/${W}/${T}${Ue?"/"+Ue:""}`)}})]})]}),(0,p.jsx)(q.A,{priceLower:Ln,priceUpper:On,getDecrementLower:zn,getIncrementLower:Mn,getDecrementUpper:Tn,getIncrementUpper:Wn,onLeftRangeInput:sn,onRightRangeInput:an,currencyA:Be,currencyB:Ie,feeAmount:Ue,ticksAtLimit:dn}),en&&(0,p.jsx)(_.tL,{padding:"8px 12px",$borderRadius:"12px",children:(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(a.A,{stroke:De.deprecated_yellow3,size:"16px"}),(0,p.jsx)(u.PR.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"b+KjnH"})})]})}),Xe&&(0,p.jsx)(_.tL,{padding:"8px 12px",$borderRadius:"12px",children:(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(a.A,{stroke:De.deprecated_yellow3,size:"16px"}),(0,p.jsx)(u.PR.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,p.jsx)(i.x6,{id:"Jh223O"})})]})})]}),(0,p.jsx)(be.xQ,{gap:"md",disabled:!Ue||Ke,children:He?(0,p.jsxs)(w.mm,{gap:"md",children:[He&&(0,p.jsx)(_.tZ,{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"1rem 1rem"},children:(0,p.jsx)(u.PR.DeprecatedBody,{fontSize:14,style:{fontWeight:535},textAlign:"left",color:De.accent1,children:(0,p.jsx)(i.x6,{id:"X6T02b"})})}),(0,p.jsx)(_.l3,{padding:"12px",children:(0,p.jsx)(be.sQ,{className:"start-price-input",value:Oe,onUserInput:cn})}),(0,p.jsxs)(M.JA,{style:{backgroundColor:De.surface1,padding:"12px",borderRadius:"12px"},children:[(0,p.jsx)(u.PR.DeprecatedMain,{children:(0,p.jsx)(i.x6,{id:"Ay/EYV",values:{0:null===Be||void 0===Be?void 0:Be.symbol}})}),(0,p.jsx)(u.PR.DeprecatedMain,{children:We?(0,p.jsx)(u.PR.DeprecatedMain,{children:(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(B.A,{maxCharacters:20,text:rn?null===We||void 0===We||null===(I=We.invert())||void 0===I?void 0:I.toSignificant(8):null===We||void 0===We?void 0:We.toSignificant(8)})," ",(0,p.jsxs)("span",{style:{marginLeft:"4px"},children:[null===Ie||void 0===Ie?void 0:Ie.symbol," per ",null===Be||void 0===Be?void 0:Be.symbol]})]})}):"-"})]})]}):(0,p.jsx)(p.Fragment,{children:Boolean(We&&Be&&Ie&&!He)&&(0,p.jsx)(w.mm,{gap:"2px",style:{marginTop:"0.5rem"},children:(0,p.jsx)(i.x6,{id:"7k623k",values:{0:We&&(0,p.jsx)(B.A,{maxCharacters:20,text:rn?We.invert().toSignificant(6):We.toSignificant(6)}),1:Be&&(0,p.jsxs)(u.PR.DeprecatedBody,{color:"text2",fontSize:12,children:[null===Ie||void 0===Ie?void 0:Ie.symbol," per ",Be.symbol]})},components:{0:(0,p.jsx)(u.PR.DeprecatedMain,{fontWeight:535,fontSize:12,color:"text1"}),1:(0,p.jsx)(u.PR.DeprecatedBody,{fontWeight:535,fontSize:20,color:"text1"})}})})})})]}),(0,p.jsx)("div",{children:(0,p.jsx)(be.xQ,{disabled:Ke||Xe||He&&!Oe,children:(0,p.jsxs)(w.mm,{gap:"md",children:[(0,p.jsx)(u.PR.DeprecatedLabel,{children:_e?(0,p.jsx)(i.x6,{id:"BRi+RY"}):(0,p.jsx)(i.x6,{id:"MU9s7M"})}),(0,p.jsx)(U.A,{value:Rn[F.D0.CURRENCY_A],onUserInput:on,onMax:()=>{var e,n;on(null!==(e=null===(n=yn[F.D0.CURRENCY_A])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},showMaxButton:!bn[F.D0.CURRENCY_A],currency:null!==(Y=Qe[F.D0.CURRENCY_A])&&void 0!==Y?Y:null,id:"add-liquidity-input-tokena",fiatValue:nt,showCommonBases:!0,locked:nn}),(0,p.jsx)(U.A,{value:Rn[F.D0.CURRENCY_B],onUserInput:ln,onMax:()=>{var e,n;ln(null!==(e=null===(n=yn[F.D0.CURRENCY_B])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},showMaxButton:!bn[F.D0.CURRENCY_B],fiatValue:tt,currency:null!==(L=Qe[F.D0.CURRENCY_B])&&void 0!==L?L:null,id:"add-liquidity-input-tokenb",showCommonBases:!0,locked:tn})]})})}),(0,p.jsx)(Kn,{})]})})]}),dt&&(0,p.jsx)(v,{ownerAddress:it}),Bn&&(0,p.jsx)(g.A,{show:Bn,currencies:[Qe.CURRENCY_A,Qe.CURRENCY_B]})]}),(0,p.jsx)(Z.j,{})]})}},42789:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(49849),r=t(54644),d=t(50645),o=t(21959),l=t(75423),s=t(87014),a=t(70464),c=t(12763),u=t(54674),p=t(96410),x=t(33121),h=t(3405),m=t(17567),v=t(17516),g=t(33370);const j=p.default.div`
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
`,R=(0,p.default)(d.Wv)`
  text-decoration: none;
`,f=(0,p.default)(x.PR.DeprecatedBlue)`
  font-size: 12px;

  ${e=>{let{theme:n}=e;return n.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}}
`;function y(e){let{show:n,currencies:t}=e;const{chainId:d}=(0,r.useWeb3React)(),[p,h]=(0,u.useState)(!1),y=d&&t?t.map((e=>null===e||void 0===e?void 0:e.wrapped)):[],b=(0,m.rN)();return(0,g.jsxs)(j,{show:n,children:[(0,g.jsx)(a.A,{isOpen:p,onDismiss:()=>h(!1),children:(0,g.jsx)(o.Ay,{padding:"2rem",children:(0,g.jsxs)(l.mm,{gap:"lg",children:[(0,g.jsxs)(c.JA,{children:[(0,g.jsx)(x.PR.DeprecatedMediumHeader,{children:(0,g.jsx)(i.x6,{id:"7Osz32"})}),(0,g.jsx)(x.US,{onClick:()=>h(!1),"data-testid":"close-icon"})]}),y.map((e=>{var n;return e&&b&&Object.keys(b).includes(e.address)&&(0,g.jsx)(o.l3,{"data-testid":"unsupported-token-card",children:(0,g.jsxs)(l.mm,{gap:"10px",children:[(0,g.jsxs)(c.eF,{gap:"5px",align:"center",children:[(0,g.jsx)(s.A,{currency:e,size:"24px"}),(0,g.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),d&&(0,g.jsx)(x.Gr,{href:(0,v.a)(d,e.address,v.u.ADDRESS),children:(0,g.jsx)(f,{children:e.address})})]})},null===(n=e.address)||void 0===n?void 0:n.concat("not-supported"))})),(0,g.jsx)(l.mm,{gap:"lg",children:(0,g.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:(0,g.jsx)(i.x6,{id:"l7X7DE"})})})]})})}),(0,g.jsx)(R,{padding:"0",onClick:()=>h(!0),"data-testid":"read-more-button",children:(0,g.jsx)(x.PR.DeprecatedBlue,{children:(0,g.jsx)(i.x6,{id:"bIjYSY"})})})]})}},53947:(e,n,t)=>{t.d(n,{U:()=>b,m:()=>A});var i=t(49849),r=t(54644),d=t(86642),o=t(41019),l=t(4126),s=t(85713),a=t(92947),c=t(26467),u=t(56119),p=t(11577),x=t(96410),h=t(33121),m=t(73141),v=t(12763),g=t(33370);const j=x.default.div`
  ${m.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,R=(0,x.default)(l.N_)`
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
`,y=(0,x.default)(o.A)`
  color: ${e=>{let{theme:n}=e;return n.neutral1}};
`;function b(e){let{origin:n}=e;return(0,g.jsx)(j,{children:(0,g.jsxs)(v.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,g.jsx)(l.N_,{to:n,children:(0,g.jsx)(y,{})}),(0,g.jsx)(f,{children:(0,g.jsx)(i.x6,{id:"LCFvJr"})})]})})}const C=(0,x.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function A(e){let{adding:n,creating:t,autoSlippage:o,positionID:l,children:h}=e;const{chainId:m}=(0,r.useWeb3React)(),f=(0,x.useTheme)(),b=(0,c.j)(),A=(0,s.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(l?`/${l.toString()}`:"");return(0,g.jsx)(j,{children:(0,g.jsxs)(v.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,g.jsx)(R,{to:A,onClick:()=>{n&&(b((0,u.JE)()),b((0,p.JE)()))},flex:h?"1":void 0,children:(0,g.jsx)(y,{stroke:f.neutral2})}),(0,g.jsx)(C,{textAlign:h?"start":"center",children:t?(0,g.jsx)(i.x6,{id:"ma87bD"}):n?(0,g.jsx)(i.x6,{id:"E6MqGy"}):(0,g.jsx)(i.x6,{id:"cJtosk"})}),h&&(0,g.jsx)(a.az,{style:{marginRight:".5rem"},children:h}),(0,g.jsx)(d.A,{autoSlippage:o,chainId:m})]})})}},70694:(e,n,t)=>{t.d(n,{A:()=>B});var i=t(49849),r=t(54644),d=t(18223),o=t(9157),l=t(54563),s=t(54674),a=t(96410),c=t(33121),u=t(73141),p=t(80672),x=t(49225),h=t(23843),m=t(50645),v=t(20295),g=t(87014),j=t(86724),R=t(12763),f=t(21390),y=t(17176),b=t(33370);const C=a.default.div`
  ${u.ZZ};
  position: relative;
  border-radius: ${e=>{let{hideInput:n}=e;return n?"16px":"20px"}};
  background-color: ${e=>{let{theme:n,hideInput:t}=e;return t?"transparent":n.surface2}};

  z-index: 1;
  width: ${e=>{let{hideInput:n}=e;return n?"100%":"initial"}};
  transition: height 1s ease;
  will-change: height;
`,A=a.default.div`
  border-radius: ${e=>{let{hideInput:n}=e;return n?"16px":"20px"}};
  border: 1px solid ${e=>{let{theme:n}=e;return n.surface3}};
  background-color: ${e=>{let{theme:n}=e;return n.surface2}};
  width: ${e=>{let{hideInput:n}=e;return n?"100%":"initial"}};
  ${e=>{let{theme:n,hideInput:t,disabled:i}=e;return!i&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":n.surface2};\n    }\n  `}}
`,D=(0,a.default)(m.EA)`
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
    background-color: ${e=>{let{selected:n,theme:t}=e;return n?t.surface2:(0,l.e$)(.05,t.accent1)}};
  }
  visibility: ${e=>{let{visible:n}=e;return n?"visible":"hidden"}};
  ${e=>{let{pointerEvents:n}=e;return n&&"pointer-events: none"}}
`,E=a.default.div`
  ${u.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${e=>{let{selected:n}=e;return n?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"}};
`,N=a.default.div`
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
`,P=(0,a.default)(N)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,S=a.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,k=(0,a.default)(x.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${e=>{let{selected:n,theme:t}=e;return n?t.neutral1:t.white}};
    stroke-width: 1.5px;
  }
`,_=a.default.span`
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
`,U=(0,a.default)(j.p)`
  ${d.fp};
  text-align: left;
`;function B(e){let{value:n,onUserInput:t,onMax:l,showMaxButton:u,onCurrencySelect:x,currency:m,otherCurrency:j,id:N,showCommonBases:B,showCurrencyAmount:$,disableNonToken:I,renderBalance:Y,fiatValue:L,hideBalance:O=!1,pair:z=null,hideInput:M=!1,locked:T=!1,loading:W=!1,...F}=e;const[G,J]=(0,s.useState)(!1),{account:V,chainId:q}=(0,r.useWeb3React)(),H=(0,h.rL)(null!==V&&void 0!==V?V:void 0,null!==m&&void 0!==m?m:void 0),Q=(0,a.useTheme)(),Z=(0,s.useCallback)((()=>{J(!1)}),[J]),K=(0,o.Gv)(q);return(0,b.jsxs)(C,{id:N,hideInput:M,...F,children:[!T&&(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(A,{hideInput:M,disabled:!K,children:[(0,b.jsxs)(E,{style:M?{padding:"0",borderRadius:"8px"}:{},selected:!x,children:[!M&&(0,b.jsx)(U,{className:"token-amount-input",value:n,onUserInput:t,disabled:!K,$loading:W}),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(D,{disabled:!K,visible:void 0!==m,selected:!!m,hideInput:M,className:"open-currency-select-button",onClick:()=>{x&&J(!0)},pointerEvents:x?void 0:"none",children:(0,b.jsxs)(S,{children:[(0,b.jsxs)(R.Bp,{children:[z?(0,b.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,b.jsx)(v.A,{currency0:z.token0,currency1:z.token1,size:24,margin:!0})}):m&&(0,b.jsx)(g.A,{style:{marginRight:"0.5rem"},currency:m,size:"24px"}),z?(0,b.jsxs)(_,{className:"pair-name-container",children:[null===z||void 0===z?void 0:z.token0.symbol,":",null===z||void 0===z?void 0:z.token1.symbol]}):(0,b.jsx)(_,{className:"token-symbol-container",active:Boolean(m&&m.symbol),children:(m&&m.symbol&&m.symbol.length>20?m.symbol.slice(0,4)+"..."+m.symbol.slice(m.symbol.length-5,m.symbol.length):null===m||void 0===m?void 0:m.symbol)||(0,b.jsx)(i.x6,{id:"T0Y2+3"})})]}),x&&(0,b.jsx)(k,{selected:!!m})]})})})]}),Boolean(!M&&!O&&m)&&(0,b.jsx)(P,{children:(0,b.jsxs)(R.JA,{children:[(0,b.jsx)(d.N3,{$loading:W,children:L&&(0,b.jsx)(y.s,{fiatValue:L})}),V&&(0,b.jsxs)(R.Bp,{style:{height:"17px"},children:[(0,b.jsx)(c.PR.DeprecatedBody,{onClick:l,color:Q.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!O&&m&&H)&&((null===Y||void 0===Y?void 0:Y(H))||(0,b.jsx)(i.x6,{id:"VuFd5C",values:{0:(0,p.N)(H,4)}}))}),Boolean(u&&H)&&(0,b.jsx)(w,{onClick:l,children:(0,b.jsx)(i.x6,{id:"4HtGBb"})})]})]})})]})}),x&&(0,b.jsx)(f.A,{isOpen:G,onDismiss:Z,onCurrencySelect:x,selectedCurrency:m,otherSelectedCurrency:j,showCommonBases:B,showCurrencyAmount:$,disableNonToken:I})]})}}}]);
//# sourceMappingURL=604.dc919e02.chunk.js.map