"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[8031],{272:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(49849),o=n(85389),r=n(26047),s=n(96410),l=n(84522),a=n(33370);const u=s.default.div`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,d=s.default.div`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,c=s.default.span`
  background-color: ${e=>{let{theme:t}=e;return t.success}};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=s.default.div`
  align-items: center;
  color: ${e=>{let{color:t}=e;return t}};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m(e){let{removed:t,inRange:n}=e;const m=(0,s.useTheme)();return(0,a.jsx)(u,{children:t?(0,a.jsx)(l.PD,{text:(0,a.jsx)(i.x6,{id:"MZPP7t"}),children:(0,a.jsxs)(p,{color:m.neutral2,children:[(0,a.jsx)(d,{children:(0,a.jsx)(i.x6,{id:"D87pha"})}),(0,a.jsx)(o.A,{width:12,height:12})]})}):n?(0,a.jsx)(l.PD,{text:(0,a.jsx)(i.x6,{id:"aIvv/z"}),children:(0,a.jsxs)(p,{color:m.success,children:[(0,a.jsx)(d,{children:(0,a.jsx)(i.x6,{id:"vOyUlD"})}),(0,a.jsx)(c,{})]})}):(0,a.jsx)(l.PD,{text:(0,a.jsx)(i.x6,{id:"IwiTcw"}),children:(0,a.jsxs)(p,{color:m.deprecated_accentWarning,children:[(0,a.jsx)(d,{children:(0,a.jsx)(i.x6,{id:"i3Z+/Z"})}),(0,a.jsx)(r.A,{width:12,height:12})]})})})}},5294:(e,t,n)=>{n.d(t,{LJ:()=>a,SC:()=>l,ar:()=>d,mO:()=>s,nv:()=>u});var i=n(18223),o=n(92947),r=n(96410);const s=r.default.div`
  position: relative;
  padding: 20px;
`,l=(0,r.default)(o.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${e=>{let{theme:t}=e;return t.accent1}};
`,a=r.default.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>{let{theme:t}=e;return t.accent2}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.accent2}};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `}};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${e=>{let{theme:t}=e;return t.accent1}};
  :hover {
    border: 1px solid ${e=>{let{theme:t}=e;return t.accent1}};
  }
  :focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.accent1}};
    outline: none;
  }
`,u=r.default.span`
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
`,d=(0,r.default)(i.ar)`
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
`},25916:(e,t,n)=>{n.d(t,{C:()=>a,J:()=>u});var i=n(34203),o=n(66295),r=n(54674),s=n(94999);function l(e){const t=(0,s.TA)(),n=(0,r.useMemo)((()=>e?e.map((e=>[i.gH.from(e)])):[]),[e]),l=(0,o.YS)(t,"positions",n),a=(0,r.useMemo)((()=>l.some((e=>{let{loading:t}=e;return t}))),[l]),u=(0,r.useMemo)((()=>l.some((e=>{let{error:t}=e;return t}))),[l]),d=(0,r.useMemo)((()=>{if(!a&&!u&&e)return l.map(((t,n)=>{const i=e[n],o=t.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[a,u,l,e]);return{loading:a,positions:null===d||void 0===d?void 0:d.map(((e,t)=>({...e,tokenId:n[t][0]})))}}function a(e){var t;const n=l(e?[e]:void 0);return{loading:n.loading,position:null===(t=n.positions)||void 0===t?void 0:t[0]}}function u(e){var t;const n=(0,s.TA)();console.log("useV3Positions",{account:e,positionManager:n});const{loading:a,result:u}=(0,o.DD)(n,"balanceOf",[null!==e&&void 0!==e?e:void 0]),d=null===u||void 0===u||null===(t=u[0])||void 0===t?void 0:t.toNumber();console.log("useV3Positions",{account:e,accountBalance:d,balanceLoading:a});const c=(0,r.useMemo)((()=>{if(d&&e){const t=[];for(let n=0;n<d;n++)t.push([e,n]);return t}return[]}),[e,d]),p=(0,o.YS)(n,"tokenOfOwnerByIndex",c),m=(0,r.useMemo)((()=>p.some((e=>{let{loading:t}=e;return t}))),[p]),y=(0,r.useMemo)((()=>e?p.map((e=>{let{result:t}=e;return t})).filter((e=>!!e)).map((e=>i.gH.from(e[0]))):[]),[e,p]);console.log("useV3Positions",{account:e,tokenIds:y,someTokenIdsLoading:m});const{positions:f,loading:h}=l(y);return{loading:m||a||h,positions:f}}},33083:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(84522),o=n(54674),r=n(96410),s=n(33370);const l=r.default.span`
  margin-left: ${e=>{let{margin:t}=e;return t&&"4px"}};
  font-size: ${e=>{let{fontSize:t}=e;return null!==t&&void 0!==t?t:"inherit"}};

  @media screen and (max-width: 600px) {
    font-size: ${e=>{let{adjustSize:t}=e;return t&&"12px"}};
  }
`,a=e=>{let{text:t,maxCharacters:n=20,margin:r=!1,adjustSize:a=!1,fontSize:u,textColor:d,link:c,...p}=e;const[m,y]=(0,o.useState)(!1);return t?t.length>n?(0,s.jsx)(i.Ay,{text:t,show:m,children:(0,s.jsx)(l,{onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),margin:r,adjustSize:a,textColor:d,link:c,fontSize:u,...p,children:" "+t.slice(0,n-1)+"..."})}):(0,s.jsx)(l,{margin:r,adjustSize:a,link:c,fontSize:u,textColor:d,...p,children:t}):(0,s.jsx)("span",{})}},38814:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(83312),o=n(54674),r=n(11577);function s(e,t,n){return(0,o.useMemo)((()=>({[r.zm.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.zm.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},51150:(e,t,n)=>{n.d(t,{U:()=>r});var i=n(9157),o=n(93405);function r(e){var t;if(e.isNative)return e;const n=(0,i.g4)(e.chainId);return n&&null!==(t=o.Im[n])&&void 0!==t&&t.equals(e)?(0,o.cz)(e.chainId):e}},57281:(e,t,n)=>{n.d(t,{A:()=>E,s:()=>M});var i=n(49849),o=n(83312),r=n(11549),s=n(272),l=n(20295),a=n(33083),u=n(30850),d=n(12763),c=n(17567),p=n(38814),m=n(94687),y=n(54674),f=n(4126),h=n(11577),x=n(96410),v=n(24738),g=n(33121),k=n(85177),w=n(51150),T=n(93405),b=n(33370);const I=(0,x.default)(f.N_)`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${e=>{let{theme:t}=e;return t.deprecated_hoverDefault}};
  }

  @media screen and (min-width: ${v.FI.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `}};
`,j=x.default.div`
  font-size: 14px;
`,S=(0,x.default)(j)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,A=x.default.span`
  font-size: 12px;
  margin: 0 2px;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
`,P=(0,x.default)(g.PR.BodySmall)`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,L=(0,x.default)(g.PR.UtilityBadge)`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${e=>{let{theme:t}=e;return t.neutral3}};
`,_=(0,x.default)(g.PR.BodySmall)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `}};
`,O=x.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function M(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([T.dM,T.pP,T.pI].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(T.Im),T.BC].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function E(e){var t;let{token0:n,token1:f,tokenId:x,fee:v,liquidity:T,tickLower:j,tickUpper:E}=e;const{formatTickPrice:C}=(0,k.kc)(),X=(0,c.rd)(n),z=(0,c.rd)(f);console.log("PositionListItem",{token0Address:n,token1Address:f,token0:X,token1:z,tokenId:x.toString(),feeAmount:v,liquidity:T.toString(),tickLower:j,tickUpper:E});const N=X?(0,w.U)(X):void 0,q=z?(0,w.U)(z):void 0;console.log("PositionListItem currencies",{currency0:null===N||void 0===N?void 0:N.symbol,currency1:null===q||void 0===q?void 0:q.symbol});const[,U]=(0,m.Q)(null!==N&&void 0!==N?N:void 0,null!==q&&void 0!==q?q:void 0,v);console.log("PositionListItem pool",U);const R=(0,y.useMemo)((()=>{if(U)return new o.Position({pool:U,liquidity:T.toString(),tickLower:j,tickUpper:E})}),[T,U,j,E]);console.log("PositionListItem position",R);const D=(0,p.A)(v,j,E);console.log("PositionListItem tickAtLimit",D);const{priceLower:$,priceUpper:G,quote:V,base:B}=M(R);console.log("PositionListItem prices",{priceLower:null===$||void 0===$?void 0:$.toSignificant(6),priceUpper:null===G||void 0===G?void 0:G.toSignificant(6),quote:null===V||void 0===V?void 0:V.symbol,base:null===B||void 0===B?void 0:B.symbol});const Y=V&&(0,w.U)(V),H=B&&(0,w.U)(B);console.log("PositionListItem currencyQuote",null===Y||void 0===Y?void 0:Y.symbol),console.log("PositionListItem currencyBase",null===H||void 0===H?void 0:H.symbol);const W=!!U&&(U.tickCurrent<j||U.tickCurrent>=E);console.log("PositionListItem outOfRange",W);const K="/pools/"+x,Q=null===T||void 0===T?void 0:T.eq(0);return(0,b.jsxs)(I,{to:K,children:[(0,b.jsxs)(d.JA,{children:[(0,b.jsxs)(O,{children:[(0,b.jsx)(l.A,{currency0:H,currency1:Y,size:18,margin:!0}),(0,b.jsxs)(g.PR.SubHeader,{children:["\xa0",null===Y||void 0===Y?void 0:Y.symbol,"\xa0/\xa0",null===H||void 0===H?void 0:H.symbol]}),(0,b.jsx)(L,{children:(0,b.jsx)(i.x6,{id:"hbO8db",values:{0:new r.Percent(v,1e6).toSignificant()}})})]}),(0,b.jsx)(s.A,{removed:Q,inRange:!W})]}),$&&G?(0,b.jsxs)(S,{children:[(0,b.jsxs)(P,{children:[(0,b.jsx)(_,{children:(0,b.jsx)(i.x6,{id:"0uYsLP"})}),(0,b.jsx)(i.x6,{id:"YAzUzD",values:{0:C({price:$,atLimit:D,direction:h.zm.LOWER})},components:{0:(0,b.jsx)("span",{}),1:(0,b.jsx)(a.A,{text:null===Y||void 0===Y?void 0:Y.symbol}),2:(0,b.jsx)(a.A,{text:null!==(t=null===H||void 0===H?void 0:H.symbol)&&void 0!==t?t:""})}})]})," ",(0,b.jsxs)(g.QZ,{children:[(0,b.jsx)(A,{children:"\u2194"})," "]}),(0,b.jsxs)(g.KT,{children:[(0,b.jsx)(A,{children:"\u2194"})," "]}),(0,b.jsxs)(P,{children:[(0,b.jsx)(_,{children:(0,b.jsx)(i.x6,{id:"BniuBY"})}),(0,b.jsx)(i.x6,{id:"YAzUzD",values:{0:C({price:G,atLimit:D,direction:h.zm.UPPER})},components:{0:(0,b.jsx)("span",{}),1:(0,b.jsx)(a.A,{text:null===Y||void 0===Y?void 0:Y.symbol}),2:(0,b.jsx)(a.A,{maxCharacters:10,text:null===H||void 0===H?void 0:H.symbol})}})]})]}):(0,b.jsx)(u.A,{})]})}},94687:(e,t,n)=>{n.d(t,{S:()=>y,Q:()=>f});var i=n(95626);const o=JSON.parse('{"HV":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}');var r=n(83312),s=n(11549),l=n(54644),a=n(67197),u=n.n(a),d=n(66295),c=n(54674);const p=new i.KA(o.HV);class m{static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:s}=n,l=`${e}:${o}:${s}:${i.toString()}`,a=this.addresses.find((e=>e.key===l));if(a)return a.address;const u={key:l,address:(0,r.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i,initCodeHashManualOverride:"0x499aba1e2f07d97749c4eabd822eca2efa521b1d6e34a67285e4a3cb773905dd"})};return this.addresses.unshift(u),u.address}static getPool(e,t,n,i,o,s){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const l=this.pools.find((r=>r.token0===e&&r.token1===t&&r.fee===n&&u().EQ(r.sqrtRatioX96,i)&&u().EQ(r.liquidity,o)&&r.tickCurrent===s));if(l)return l;const a=new r.Pool(e,t,n,i,o,s);return this.pools.unshift(a),a}}m.MAX_ENTRIES=128,m.pools=[],m.addresses=[];let y=function(e){return e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID",e}({});function f(e,t,n){const i=(0,c.useMemo)((()=>[[e,t,n]]),[e,t,n]);return console.log("kiacic@@@@@@@@@@@@",i),function(e){const{chainId:t}=(0,l.useWeb3React)();console.log("CHAIN ID@@@@@@@@@@@@",t);const n=(0,c.useMemo)((()=>t?e.map((e=>{let[t,n,i]=e;if(t&&n&&i){const e=t.wrapped,o=n.wrapped;if(e.equals(o))return;return e.sortsBefore(o)?[e,o,i]:[o,e,i]}})):new Array(e.length)),[t,e]);console.log("poolTokens@@@@@@@@@@@@",n);const i=(0,c.useMemo)((()=>{console.log("CIAO CIAO ENTRATO");const e=t&&s.V3_CORE_FACTORY_ADDRESSES[t];return console.log("V3_CORE_FACTORY_ADDRESSES@@@@@@@@@@@@",e),e?n.map((t=>t&&m.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]);console.log("poolAddresses@@@@@@@@@@@@",i);const o=(0,d._l)(i,p,"slot0"),r=(0,d._l)(i,p,"liquidity");return(0,c.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[y.INVALID,null];const[s,l,a]=i;if(!o[t])return[y.INVALID,null];const{result:u,loading:d,valid:c}=o[t];if(!r[t])return[y.INVALID,null];const{result:p,loading:f,valid:h}=r[t];if(!i||!c||!h)return[y.INVALID,null];if(d||f)return[y.LOADING,null];if(!u||!p)return[y.NOT_EXISTS,null];if(!u.sqrtPriceX96||u.sqrtPriceX96.eq(0))return[y.NOT_EXISTS,null];try{const e=m.getPool(s,l,a,u.sqrtPriceX96,p[0],u.tick);return[y.EXISTS,e]}catch(x){return console.error("Error when constructing the pool",x),[y.NOT_EXISTS,null]}}))),[r,e,o,n])}(i)[0]}}}]);
//# sourceMappingURL=8031.f8769696.chunk.js.map