"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[9627],{79627:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var i=n(54644),r=n(50645),a=n(20295),o=n(18223),s=n(94687),l=n(54674),d=n(11549),p=n(83312);const u="https://subgraph.synthra.org/subgraphs/name/ianlapham/uniswap-v3-sub",c='\n  query GetTopPools {\n    pools(\n      first: 15\n      orderBy: totalValueLockedUSD\n      orderDirection: desc\n      where: { totalValueLockedUSD_gt: "1000" }\n    ) {\n      id\n      token0 {\n        id\n        symbol\n        name\n        decimals\n      }\n      token1 {\n        id\n        symbol\n        name\n        decimals\n      }\n      feeTier\n      liquidity\n      totalValueLockedUSD\n      volumeUSD\n      feesUSD\n      txCount\n    }\n  }\n';function m(e,t){return new d.Token(t,e.id,parseInt(e.decimals),e.symbol,e.name)}function x(e){const t=parseFloat(e);return t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(2)}K`:t.toFixed(2)}function h(e){const t=parseFloat(e);return t>=1e6?`$${(t/1e6).toFixed(2)}M`:t>=1e3?`$${(t/1e3).toFixed(2)}K`:`$${t.toFixed(2)}`}function y(e,t){const n=parseFloat(e),i=parseFloat(t);if(0===i)return"0.00";return(365*(n/i)*100).toFixed(2)}function f(){const{chainId:e}=(0,i.useWeb3React)(),[t,n]=(0,l.useState)([]),[r,a]=(0,l.useState)(!0),[o,s]=(0,l.useState)(null);return(0,l.useEffect)((()=>{!async function(){if(e)try{a(!0),s(null);const t=await async function(){try{var e;const t=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:c})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();if(n.errors)throw new Error(`GraphQL errors: ${JSON.stringify(n.errors)}`);return(null===(e=n.data)||void 0===e?void 0:e.pools)||[]}catch(o){throw console.error("Error fetching subgraph data:",o),o}}(),i=t.map((t=>{const n=m(t.token0,e),i=m(t.token1,e);let r;switch(t.feeTier){case"100":r=p.FeeAmount.LOWEST;break;case"500":r=p.FeeAmount.LOW;break;case"3000":default:r=p.FeeAmount.MEDIUM;break;case"10000":r=p.FeeAmount.HIGH}return{token0:n,token1:i,fee:r,liquidity:t.liquidity,volume24h:h(t.volumeUSD),fees24h:h(t.feesUSD),apr:y(t.feesUSD,t.totalValueLockedUSD),tvlUSD:x(t.totalValueLockedUSD)}}));n(i)}catch(t){console.error("Error loading pools:",t),s(t instanceof Error?t.message:"Unknown error")}finally{a(!1)}else a(!1)}()}),[e]),{pools:t,loading:r,error:o}}var g=n(4126),b=n(96410),w=n(33121),k=n(97805),$=n(33370);const T=b.default.div`
  padding: 100px 24px 0px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.lg}px`}}) {
    max-width: 1000px;
    padding: 80px 20px 0px;
  }

  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.md}px`}}) {
    max-width: 800px;
    padding: 60px 16px 0px;
  }

  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    max-width: 100%;
    padding: 40px 12px 0px;
  }
`,j=b.default.div`
  text-align: center;
  margin-bottom: 48px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    margin-bottom: 32px;
  }
`,v=b.default.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}} 0%, ${e=>{let{theme:t}=e;return t.accent2}} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.md}px`}}) {
    font-size: 36px;
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    font-size: 28px;
  }
`,S=b.default.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.5;
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    font-size: 16px;
  }
`,I=b.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 4px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`,A=b.default.div`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-size: 16px;
  font-weight: 500;
`,E=b.default.div`
  background: ${e=>{let{theme:t}=e;return t.surface1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  border-radius: 24px;
  padding: 24px;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.accent1}} 0%, ${e=>{let{theme:t}=e;return t.accent2}} 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.accent1}};
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    
    &:before {
      opacity: 1;
    }
  }
`,P=b.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    flex-direction: column;
    gap: 16px;
  }
`,_=b.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,N=b.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=b.default.div`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
`,D=b.default.div`
  background: ${e=>{let{theme:t}=e;return t.accent1}};
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,R=b.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,q=b.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,L=b.default.span`
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.neutral3}};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`,X=b.default.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
`,C=(0,b.default)(X)`
  color: ${e=>{let{theme:t}=e;return t.success}};
  font-size: 18px;
`,F=(0,b.default)(r.$$)`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}} 0%, ${e=>{let{theme:t}=e;return t.accent2}} 100%);
  border: none;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    padding: 14px;
    font-size: 15px;
  }
`,M=b.default.div`
  background: ${e=>{let{theme:t}=e;return t.surface1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
`,V=b.default.div`
  background: ${e=>{let{theme:t}=e;return t.surface1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
`,z=b.default.div`
  background: ${e=>{let{theme:t}=e;return t.surface1}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.critical}};
  border-radius: 24px;
  padding: 40px;
  text-align: center;
`,G=b.default.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.lg}px`}}) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.md}px`}}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return`${t.breakpoint.sm}px`}}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;function B(e){let{poolInfo:t}=e;(0,b.useTheme)();const[n,i]=(0,s.Q)(t.token0,t.token1,t.fee),r=n===s.S.LOADING,l=t.fee/1e4;return r?(0,$.jsx)(E,{children:(0,$.jsxs)(o.ar,{children:[(0,$.jsx)("div",{}),(0,$.jsx)("div",{}),(0,$.jsx)("div",{})]})}):(0,$.jsxs)(E,{children:[(0,$.jsx)(P,{children:(0,$.jsxs)(_,{children:[(0,$.jsx)(a.A,{currency0:t.token0,currency1:t.token1,size:32}),(0,$.jsxs)(N,{children:[(0,$.jsxs)(O,{children:[t.token0.symbol,"/",t.token1.symbol]}),(0,$.jsxs)(D,{children:[l,"% Fee"]})]})]})}),(0,$.jsxs)(R,{children:[(0,$.jsxs)(q,{children:[(0,$.jsx)(L,{children:"Total Value Locked"}),(0,$.jsxs)(X,{children:["$",t.tvlUSD||"---"]})]}),(0,$.jsxs)(q,{children:[(0,$.jsx)(L,{children:"24h Volume"}),(0,$.jsx)(X,{children:t.volume24h||"---"})]}),(0,$.jsxs)(q,{children:[(0,$.jsx)(L,{children:"24h Fees"}),(0,$.jsx)(X,{children:t.fees24h||"---"})]}),(0,$.jsxs)(q,{children:[(0,$.jsx)(L,{children:"APR"}),(0,$.jsx)(C,{children:t.apr?`${t.apr}%`:"---"})]})]}),(0,$.jsx)(F,{as:g.N_,to:`/add/${(0,k.V)(t.token0)}/${(0,k.V)(t.token1)}/${t.fee}`,children:(0,$.jsx)("p",{children:"Add Liquidity & Earn"})})]})}function U(){const e=(0,b.useTheme)(),{chainId:t}=(0,i.useWeb3React)(),{pools:n,loading:r,error:a}=f();return t?(0,$.jsxs)(T,{children:[(0,$.jsxs)(j,{children:[(0,$.jsx)(v,{children:"Earn Rewards"}),(0,$.jsx)(S,{children:"Provide liquidity to top-performing pools and earn trading fees plus rewards. Higher TVL pools typically offer more stable and consistent returns."})]}),a?(0,$.jsxs)(z,{children:[(0,$.jsx)(w.PR.HeadlineSmall,{style:{marginBottom:"16px",color:e.critical},children:(0,$.jsx)("p",{children:"\u26a0\ufe0f Connection Error"})}),(0,$.jsx)(w.PR.BodyPrimary,{color:e.critical,style:{marginBottom:"8px"},children:(0,$.jsxs)("p",{children:["Failed to load pool data: ",a]})}),(0,$.jsx)(w.PR.Caption,{style:{color:e.neutral2},children:(0,$.jsx)("p",{children:"Please check your connection and try again"})})]}):r?(0,$.jsxs)(M,{children:[(0,$.jsx)(w.PR.HeadlineSmall,{style:{marginBottom:"24px"},children:(0,$.jsx)("p",{children:"\ud83d\udd04 Loading Pools..."})}),(0,$.jsx)(w.PR.BodyPrimary,{style:{marginBottom:"20px"},children:(0,$.jsx)("p",{children:"Fetching the latest pool data from the network"})}),(0,$.jsxs)(o.ar,{children:[(0,$.jsx)("div",{}),(0,$.jsx)("div",{}),(0,$.jsx)("div",{})]})]}):0===n.length?(0,$.jsxs)(V,{children:[(0,$.jsx)(w.PR.HeadlineSmall,{style:{marginBottom:"16px"},children:(0,$.jsx)("p",{children:"\ud83d\udcca No Pools Available"})}),(0,$.jsx)(w.PR.BodyPrimary,{children:(0,$.jsx)("p",{children:"No liquidity pools are currently available on this network. Try switching to a different network."})})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(I,{children:(0,$.jsx)(A,{children:(0,$.jsxs)("p",{children:["Showing ",n.length," top liquidity pools"]})})}),(0,$.jsx)(G,{children:n.map(((e,t)=>(0,$.jsx)(B,{poolInfo:e},`${e.token0.wrapped.address}-${e.token1.wrapped.address}-${e.fee}`)))})]})]}):(0,$.jsxs)(T,{children:[(0,$.jsxs)(j,{children:[(0,$.jsx)(v,{children:"Connect Wallet"}),(0,$.jsx)(S,{children:"Connect your wallet to explore earning opportunities"})]}),(0,$.jsxs)(V,{children:[(0,$.jsx)(w.PR.HeadlineSmall,{style:{marginBottom:"16px"},children:(0,$.jsx)("p",{children:"\ud83d\udd17 Wallet Connection Required"})}),(0,$.jsx)(w.PR.BodyPrimary,{children:(0,$.jsx)("p",{children:"Connect your wallet to view the top liquidity pools and start earning rewards."})})]})]})}},94687:(e,t,n)=>{n.d(t,{S:()=>x,Q:()=>h});var i=n(95626);const r=JSON.parse('{"HV":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}');var a=n(83312),o=n(11549),s=n(54644),l=n(67197),d=n.n(l),p=n(66295),u=n(54674);const c=new i.KA(r.HV);class m{static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:r}=t,{address:o}=n,s=`${e}:${r}:${o}:${i.toString()}`,l=this.addresses.find((e=>e.key===s));if(l)return l.address;const d={key:s,address:(0,a.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i,initCodeHashManualOverride:"0x499aba1e2f07d97749c4eabd822eca2efa521b1d6e34a67285e4a3cb773905dd"})};return this.addresses.unshift(d),d.address}static getPool(e,t,n,i,r,o){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const s=this.pools.find((a=>a.token0===e&&a.token1===t&&a.fee===n&&d().EQ(a.sqrtRatioX96,i)&&d().EQ(a.liquidity,r)&&a.tickCurrent===o));if(s)return s;const l=new a.Pool(e,t,n,i,r,o);return this.pools.unshift(l),l}}m.MAX_ENTRIES=128,m.pools=[],m.addresses=[];let x=function(e){return e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID",e}({});function h(e,t,n){const i=(0,u.useMemo)((()=>[[e,t,n]]),[e,t,n]);return console.log("kiacic@@@@@@@@@@@@",i),function(e){const{chainId:t}=(0,s.useWeb3React)();console.log("CHAIN ID@@@@@@@@@@@@",t);const n=(0,u.useMemo)((()=>t?e.map((e=>{let[t,n,i]=e;if(t&&n&&i){const e=t.wrapped,r=n.wrapped;if(e.equals(r))return;return e.sortsBefore(r)?[e,r,i]:[r,e,i]}})):new Array(e.length)),[t,e]);console.log("poolTokens@@@@@@@@@@@@",n);const i=(0,u.useMemo)((()=>{console.log("CIAO CIAO ENTRATO");const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return console.log("V3_CORE_FACTORY_ADDRESSES@@@@@@@@@@@@",e),e?n.map((t=>t&&m.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]);console.log("poolAddresses@@@@@@@@@@@@",i);const r=(0,p._l)(i,c,"slot0"),a=(0,p._l)(i,c,"liquidity");return(0,u.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[x.INVALID,null];const[o,s,l]=i;if(!r[t])return[x.INVALID,null];const{result:d,loading:p,valid:u}=r[t];if(!a[t])return[x.INVALID,null];const{result:c,loading:h,valid:y}=a[t];if(!i||!u||!y)return[x.INVALID,null];if(p||h)return[x.LOADING,null];if(!d||!c)return[x.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=m.getPool(o,s,l,d.sqrtPriceX96,c[0],d.tick);return[x.EXISTS,e]}catch(f){return console.error("Error when constructing the pool",f),[x.NOT_EXISTS,null]}}))),[a,e,r,n])}(i)[0]}}}]);
//# sourceMappingURL=9627.102bbdf0.chunk.js.map