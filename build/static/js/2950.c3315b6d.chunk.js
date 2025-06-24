"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[2950],{62810:(e,t,r)=>{r.d(t,{Pe:()=>c,b:()=>d,sb:()=>u});var n=r(54674),a=r(54644);const i="https://subgraph.synthra.org/subgraphs/name/ianlapham/uniswap-v3-sub",o='\n  query GetTopUsers($first: Int!, $skip: Int!) {\n    users(\n      first: $first\n      skip: $skip\n      orderBy: score\n      orderDirection: desc\n      where: { score_gt: "0" }\n    ) {\n      id\n      totalVolumeUSD\n      totalVolumeETH\n      score\n      txCount\n      firstTransactionTimestamp\n      lastTransactionTimestamp\n    }\n  }\n',s="\n  query GetUserDetails($userId: String!) {\n    user(id: $userId) {\n      id\n      totalVolumeUSD\n      totalVolumeETH\n      score\n      txCount\n      firstTransactionTimestamp\n      lastTransactionTimestamp\n      swaps(first: 10, orderBy: timestamp, orderDirection: desc) {\n        id\n        amountUSD\n        timestamp\n        pool {\n          id\n          token0 {\n            symbol\n          }\n          token1 {\n            symbol\n          }\n        }\n      }\n      userDayData(first: 30, orderBy: date, orderDirection: desc) {\n        id\n        date\n        dailyVolumeUSD\n        dailyVolumeETH\n        dailyScore\n        dailyTxCount\n        user {\n          id\n        }\n      }\n    }\n  }\n",l='\n  query GetUserHistoricalData($userId: String!, $first: Int!, $orderDirection: String!) {\n    userDayDatas(\n      first: $first\n      orderBy: date\n      orderDirection: $orderDirection\n      where: { \n        user: $userId\n        dailyVolumeUSD_gt: "0"\n      }\n    ) {\n      id\n      date\n      dailyVolumeUSD\n      dailyScore\n      dailyTxCount\n      user {\n        id\n      }\n    }\n  }\n';function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;const[r,a]=(0,n.useState)([]),[o,s]=(0,n.useState)(!1),[d,c]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(!e)return;(async()=>{s(!0),c(null);try{const r=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";try{var n;const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:l,variables:{userId:e.toLowerCase(),first:t,orderDirection:r}})});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const o=await a.json();if(o.errors)throw new Error(`GraphQL errors: ${JSON.stringify(o.errors)}`);return(null===(n=o.data)||void 0===n?void 0:n.userDayDatas)||[]}catch(d){throw console.error("Error fetching user historical data:",d),d}}(e,t,"asc");a(r)}catch(r){c(r instanceof Error?r.message:"Failed to load historical data")}finally{s(!1)}})()}),[e,t]),{data:r,loading:o,error:d}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;const[t,r]=(0,n.useState)([]),[a,s]=(0,n.useState)(!0),[l,d]=(0,n.useState)(null),[c,u]=(0,n.useState)(!0),[p,h]=(0,n.useState)(0),x=async()=>{try{s(!0);const t=p*e,n=await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;try{var r;const n=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:o,variables:{first:e,skip:t}})});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const a=await n.json();if(a.errors)throw new Error(`GraphQL errors: ${JSON.stringify(a.errors)}`);return((null===(r=a.data)||void 0===r?void 0:r.users)||[]).map(((e,r)=>({...e,rank:t+r+1})))}catch(l){throw console.error("Error fetching leaderboard data:",l),l}}(e,t);r(0===p?n:e=>[...e,...n]),u(n.length===e),h((e=>e+1))}catch(t){d(t instanceof Error?t.message:"Unknown error")}finally{s(!1)}};return(0,n.useEffect)((()=>{x()}),[]),{users:t,loading:a,error:l,hasMore:c,loadMore:x,refresh:()=>{h(0),r([]),u(!0),d(null),x()}}}function u(e){const{account:t}=(0,a.useWeb3React)(),[r,o]=(0,n.useState)(null),[l,d]=(0,n.useState)(!0),[c,u]=(0,n.useState)(null),p=e||t;return(0,n.useEffect)((()=>{!async function(){if(p)try{d(!0),u(null);const e=await async function(e){try{var t,r,n;const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s,variables:{userId:e.toLowerCase()}})});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const o=await a.json();if(o.errors)throw new Error(`GraphQL errors: ${JSON.stringify(o.errors)}`);const l=null===(t=o.data)||void 0===t?void 0:t.user;if(!l)return null;const d=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n          query GetUserRank($score: String!) {\n            users(where: { score_gt: $score }) {\n              id\n            }\n          }\n        ",variables:{score:l.score}})}),c=((null===(r=(await d.json()).data)||void 0===r||null===(n=r.users)||void 0===n?void 0:n.length)||0)+1;return{...l,rank:c}}catch(c){throw console.error("Error fetching user details:",c),c}}(p);o(e)}catch(e){u(e instanceof Error?e.message:"Unknown error")}finally{d(!1)}else d(!1)}()}),[p]),{user:r,loading:l,error:c,isOwnProfile:p===t}}},72950:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ce});var n=r(54644),a=r(62810),i=r(54674),o=r(4126),s=r(96410),l=r(33121),d=r(66451),c=r(8136),u=r(94222),p=r(48805),h=r(90424),x=r(45022),f=r(30849),g=r(4099),m=r(16187),b=r(73525),y=r(84522),w=r(33370);const v=s.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$=(0,s.default)(d.ff)`
  max-width: 1400px;
  min-height: 100vh;
  padding: 68px 24px 24px;
  background: ${e=>{let{theme:t}=e;return t.background}};

  @media (max-width: 768px) {
    padding: 68px 16px 16px;
  }
`,k=s.default.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,j=s.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: ${e=>{let{theme:t}=e;return t.surface1}};
  z-index: 1;
  max-height: calc(100vh - 120px);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle at top left,
      rgba(168, 85, 247, 0.4) 0%,
      rgba(124, 58, 237, 0.3) 40%,
      rgba(168, 85, 247, 0.05) 80%,
      transparent 100%
    );
    filter: blur(35px);
    z-index: 0;
    pointer-events: none;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: conic-gradient(
      from 180deg at 50% 50%,
      transparent 0deg,
      transparent 60deg,
      #a855f7 90deg,
      #7c3aed 180deg,
      #a855f7 230deg,
      transparent 300deg,
      transparent 360deg
    );
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 2px;
    z-index: 2;
    pointer-events: none;
  }
`,S=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;
  flex: 1;
  position: relative;
  z-index: 1;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`,V=s.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-shrink: 0;
`,D=(0,s.default)(l.PR.SubHeader)`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-weight: 600;
`,M=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`,T=(0,s.default)(o.N_)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${e=>{let{theme:t}=e;return t.surface2}};
  border-radius: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.surface3}};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    color: inherit;
  }
`,C=s.default.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  box-shadow: ${e=>{let{$rank:t,theme:r}=e;return 1===t?`0 0 8px ${r.accent1}`:2===t?"0 0 6px #C0C0C0":3===t?"0 0 6px #CD7F32":"none"}};
  background: ${e=>{let{theme:t,$rank:r}=e;return 1===r?`linear-gradient(135deg, ${t.accent1}, ${t.accent2})`:2===r?"linear-gradient(135deg, #C0C0C0, #E8E8E8)":3===r?"linear-gradient(135deg, #CD7F32, #FFB347)":t.surface3}};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: ${e=>{let{theme:t,$rank:r}=e;return r<=3?t.surface1:t.neutral1}};
  flex-shrink: 0;

  &::before {
    content: "${e=>{let{$rank:t}=e;return 1===t?"\ud83d\udc51":2===t?"\ud83e\udd48":3===t?"\ud83e\udd49":t.toString()}}";
  }
`,F=s.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`,E=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
  min-width: 80px;
`,z=(0,s.default)(l.PR.BodySmall)`
  font-weight: 700;
  color: #fff;
text-shadow: 0 0 6px ${e=>{let{theme:t}=e;return t.accent1}};
  font-size: 14px;
`,I=s.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>{let{$positive:t,theme:r}=e;return t?r.success:r.critical}};

  &::before {
    content: "${e=>{let{$positive:t}=e;return t?"\ud83d\udcc8":"\ud83d\udcc9"}}";
    font-size: 10px;
  }
`,P=s.default.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${e=>{let{theme:t}=e;return t.surface2}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.surface3}};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Override StatusIcon margin */
  & > div {
    margin-right: 0 !important;
  }
`,U=s.default.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,O=(0,s.default)(l.PR.BodySmall)`
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,B=(0,s.default)(l.PR.LabelMicro)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,H=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    order: 1;
  }
`,R=s.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,_=s.default.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,N=(0,s.default)(l.PR.HeadlineMedium)`
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`,G=(0,s.default)(l.PR.BodyPrimary)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  margin: 8px 0 0 0;
  font-size: 16px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,L=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,W=s.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 24px;
  background: ${e=>{let{theme:t}=e;return t.surface1}};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: conic-gradient(
      from 180deg at 50% 50%,
      transparent 0deg,
      transparent 45deg,
      #a855f7 80deg,
      #7c3aed 120deg,
      #a855f7 180deg,
      transparent 315deg,
      transparent 360deg
    );
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 2px;
    z-index: -1;
    pointer-events: none;
  }
`,q=s.default.div`
  width: 100%;
  height: ${e=>{let{$dynamicHeight:t}=e;return t}}px;
  min-height: 500px;
  max-height: 1200px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: ${e=>{let{theme:t}=e;return t.surface2}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};

  @media (max-width: 768px) {
    height: ${e=>{let{$dynamicHeight:t}=e;return Math.min(.9*t,800)}}px;
    min-height: 400px;
    max-height: 800px;
  }
`,A=e=>{if(0===e)return 500;const t=500+120*Math.log(e)+Math.min(8*e,400);return Math.max(500,Math.min(t,1200))},J=s.default.div`
  position: absolute;
  left: ${e=>{let{$x:t}=e;return t}}px;
  top: ${e=>{let{$y:t}=e;return t}}px;
  width: ${e=>{let{$width:t}=e;return t}}px;
  height: ${e=>{let{$height:t}=e;return t}}px;
  background: ${e=>{let{$rank:t,theme:r}=e;return 1===t?"linear-gradient(135deg, #5821B7, #000)":2===t?"linear-gradient(135deg, #D1D5DB, #000)":3===t?"linear-gradient(135deg, #F97316, #000)":"linear-gradient(135deg, #1F2937, #000)"}};
box-shadow: ${e=>{let{$rank:t}=e;return 1===t?"0 0 12px #8B5CF6aa":2===t?"0 0 10px #D1D5DBcc":3===t?"0 0 10px #F97316cc":"inset 0 0 6px rgba(255,255,255,0.05)"}};
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  animation: ${v} 0.6s ease-out;
  animation-delay: ${e=>{let{$rank:t}=e;return.1*t}}s;
  animation-fill-mode: both;
  opacity: 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    z-index: 10;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background: ${e=>{let{$rank:t,theme:r}=e;return 1===t?"linear-gradient(135deg, #5821B7, #000)":2===t?"linear-gradient(135deg, #D1D5DB, #000)":3===t?"linear-gradient(135deg, #F97316, #000)":"linear-gradient(135deg, #1F2937, #000)"}};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      ${e=>{let{theme:t}=e;return t.accent1}}08, 
      ${e=>{let{theme:t}=e;return t.accent1}}02
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 16px;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,Y=s.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
`,K=s.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,Q=s.default.div`
  width: ${e=>{let{$rank:t}=e;return t<=3?"36px":"28px"}};
  height: ${e=>{let{$rank:t}=e;return t<=3?"36px":"28px"}};
  border-radius: 10px;
  background: ${e=>{let{theme:t}=e;return t.surface2}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.surface3}};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* Override StatusIcon margin */
  & > div {
    margin-right: 0 !important;
  }
`,X=s.default.div`
  min-width: 0;
  flex: 1;
`,Z=(0,s.default)(l.PR.BodySmall)`
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`,ee=s.default.div`
  background: ${e=>{let{theme:t,$rank:r}=e;return 1===r?`linear-gradient(135deg, ${t.accent1}, ${t.accent2})`:2===r?"linear-gradient(135deg, #C0C0C0, #E8E8E8)":3===r?"linear-gradient(135deg, #CD7F32, #FFB347)":t.surface3}};
  color: ${e=>{let{theme:t,$rank:r}=e;return r<=3?t.surface1:t.neutral1}};
  padding: 4px 8px;
  text-shadow: ${e=>{let{$rank:t,theme:r}=e;return t<=3?`0 0 6px ${r.accent1}`:"none"}};
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  min-width: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`,te=s.default.div`
  margin-top: auto;
`,re=(0,s.default)(l.PR.SubHeader)`
 color: #fff;
text-shadow: 0 0 6px ${e=>{let{theme:t}=e;return t.accent1}};
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 2px;
  line-height: 1.2;
`,ne=s.default.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 40%;
  height: 25%;
  opacity: ${e=>{let{$visible:t}=e;return t?.6:0}};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,ae=e=>{let{users:t,totalVolume:r,width:n,height:a,connection:l}=e;const d=(0,s.useTheme)(),c=(0,i.useMemo)((()=>{if(!t||0===t.length)return[];const e=t.map(((e,t)=>{const n=parseFloat(e.totalVolumeUSD||"0");return{id:e.id,originalValue:n,rank:t+1,percentage:r>0?(n/r*100).toFixed(2):"0.00"}})),i=e.map((e=>e.originalValue)).filter((e=>e>0));if(0===i.length)return[];Math.max(...i),Math.min(...i);const o=e.map((e=>{let t;return t=e.originalValue<=0?100:1===e.rank?90*Math.log(e.originalValue+1)+400:e.rank<=3?80*Math.log(e.originalValue+1)+250:e.rank<=10?70*Math.log(e.originalValue+1)+180:60*Math.log(e.originalValue+1)+120,{...e,value:t}})),s=h.Sk5({children:o}).sum((e=>e.value)).sort(((e,t)=>(e.rank||0)-(t.rank||0)));return h.hkb().size([n,a]).padding(6).paddingInner(8).paddingOuter(16).round(!0)(s),s.leaves().map((e=>({...e.data,x:e.x0,y:e.y0,width:Math.max(e.x1-e.x0,120),height:Math.max(e.y1-e.y0,80)})))}),[t,r,n,a]);return(0,w.jsx)("div",{style:{position:"relative",width:"100%",height:"100%"},children:c.map((e=>{return(0,w.jsxs)(J,{$x:e.x,$y:e.y,$width:e.width,$height:e.height,$rank:e.rank,$volume:e.originalValue,as:o.N_,to:`/leaderboard/profile/${e.id}`,children:[(0,w.jsxs)(Y,{children:[(0,w.jsxs)(K,{children:[(0,w.jsx)(Q,{$rank:e.rank,children:(0,w.jsx)(x.A,{account:e.id,connection:l,size:e.rank<=3?36:28,showMiniIcons:!1})}),e.width>120&&(0,w.jsx)(X,{children:(0,w.jsx)(Z,{children:(r=e.id,r?`${r.slice(0,6)}...${r.slice(-4)}`:"0x...")})})]}),(0,w.jsxs)(ee,{$rank:e.rank,children:["#",e.rank]})]}),e.height>60&&(0,w.jsx)(te,{children:(0,w.jsxs)(re,{children:["$",(t=e.originalValue,t>=1e6?(t/1e6).toFixed(2)+"M":t>=1e3?(t/1e3).toFixed(2)+"K":t.toFixed(2))]})}),(0,w.jsx)(ne,{$visible:e.width>140&&e.height>100,children:(0,w.jsx)(ie,{userId:e.id,color:d.accent1})})]},e.id);var t,r}))})},ie=e=>{let{userId:t,color:r="rgba(255,255,255,0.8)"}=e;const{data:n}=(0,a.b)(t,7),o=(0,i.useMemo)((()=>{const e=new Date,t=[];for(let n=6;n>=0;n--){const r=new Date(e);r.setDate(r.getDate()-n),r.setUTCHours(0,0,0,0),t.push(Math.floor(r.getTime()/1e3))}if(!n||0===n.length)return t.map(((e,t)=>({index:t,value:20+10*t,timestamp:e,volume:0})));const r=new Map;n.forEach((e=>{const t=e.date||0;r.set(t,parseFloat(e.dailyVolumeUSD||"0"))}));let a=0;const i=t.map((e=>{const t=r.get(e)||0;return a+=t,{timestamp:e,dailyVolume:t,cumulativeVolume:a}})),o=Math.max(...i.map((e=>e.cumulativeVolume)),1);return i.map(((e,t)=>{const r=o>0?20+e.cumulativeVolume/o*60:20+2*t;return{index:t,value:Math.max(20,Math.min(80,r)),timestamp:e.timestamp,volume:e.cumulativeVolume,dailyVolume:e.dailyVolume}}))}),[n]),s=(e=>{if(e.startsWith("rgba(255,255,255"))return"#ffffff";if(e.startsWith("rgba(")){const t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(t){return`#${parseInt(t[1]).toString(16).padStart(2,"0")}${parseInt(t[2]).toString(16).padStart(2,"0")}${parseInt(t[3]).toString(16).padStart(2,"0")}`}}return e})(r);return(0,w.jsx)("div",{style:{width:"100%",height:"100%"},children:(0,w.jsx)(g.u,{width:"100%",height:"100%",children:(0,w.jsxs)(m.b,{data:o,margin:{top:5,right:5,left:5,bottom:5},children:[(0,w.jsxs)("defs",{children:[(0,w.jsxs)("linearGradient",{id:`lineGradient-${t}`,x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,w.jsx)("stop",{offset:"0%",stopColor:s,stopOpacity:.8}),(0,w.jsx)("stop",{offset:"50%",stopColor:s,stopOpacity:1}),(0,w.jsx)("stop",{offset:"100%",stopColor:s,stopOpacity:.6})]}),(0,w.jsxs)("filter",{id:`glow-${t}`,children:[(0,w.jsx)("feGaussianBlur",{stdDeviation:"2",result:"coloredBlur"}),(0,w.jsxs)("feMerge",{children:[(0,w.jsx)("feMergeNode",{in:"coloredBlur"}),(0,w.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,w.jsx)(b.N,{type:"monotone",dataKey:"value",stroke:`url(#lineGradient-${t})`,strokeWidth:2.5,dot:!1,activeDot:{r:4,fill:s,stroke:s,strokeWidth:2,filter:`url(#glow-${t})`},filter:`url(#glow-${t})`})]})})})},oe=e=>{let{userId:t,currentVolume:r,children:n}=e;const{data:o}=(0,a.b)(t,7);return n((0,i.useMemo)((()=>{var e,n,a,i;if(console.log("UserPerformanceData - userId:",t,"historicalData:",o,"currentVolume:",r),!o||0===o.length)return console.log("No historical data available"),{change24h:0,change7d:0};const s=[...o].map((e=>({...e,dailyVolume:parseFloat(e.dailyVolumeUSD||"0"),timestamp:e.date||0}))).sort(((e,t)=>e.timestamp-t.timestamp));let l=0;const d=s.map((e=>(l+=e.dailyVolume,{...e,totalVolume:l}))).sort(((e,t)=>t.timestamp-e.timestamp));console.log("Sorted data:",d.slice(0,7).map((e=>({date:e.timestamp,formattedDate:new Date(1e3*e.timestamp).toISOString(),totalVolume:e.totalVolume,dailyVolume:e.dailyVolume}))));const c=null!==(e=null!==r&&void 0!==r?r:null===(n=d[0])||void 0===n?void 0:n.totalVolume)&&void 0!==e?e:0;let u=0,p=0;if(d.length>=2){const e=d[1].totalVolume;u=0===e&&c>0?100:e>0?(c-e)/e*100:0}else 1===d.length&&c>0&&(u=100);if(d.length>=7){const e=d[6].totalVolume;p=0===e&&c>0?100:e>0?(c-e)/e*100:0}else if(d.length>=2){const e=u/100;0!==e&&(p=100*(Math.pow(1+e,7)-1))}else 1===d.length&&c>0&&(p=100);u=Math.max(-99,Math.min(u,1e3)),p=Math.max(-99,Math.min(p,2e3));const h={change24h:Math.round(100*u)/100,change7d:Math.round(100*p)/100};return console.log("Performance result:",{...h,dataPoints:d.length,currentTotal:c,yesterdayTotal:null===(a=d[1])||void 0===a?void 0:a.totalVolume,weekAgoTotal:null===(i=d[6])||void 0===i?void 0:i.totalVolume,currentVolumeParam:r}),h}),[o,t,r]))},se=e=>e?`${e.slice(0,6)}...${e.slice(-4)}`:"0x...",le=e=>e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2),de=(e,t)=>{const r=parseFloat(e)||0;return 0===t?"0.00%":(r/t*100).toFixed(2)+"%"};function ce(){const{account:e,connector:t}=(0,n.useWeb3React)(),[r,o]=((0,s.useTheme)(),(0,i.useState)("Top20")),l=(0,i.useRef)(null),[d,h]=(0,i.useState)({width:800,height:720}),g=(0,f.XA)(t),{users:m,loading:b,error:v}=(0,a.Pe)(50);(0,i.useEffect)((()=>{const e=()=>{if(l.current){const{clientWidth:e,clientHeight:t}=l.current;h({width:e||600,height:Math.max(t-48,500)})}};e();const t=()=>e();return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]);const J=m,Y=b,K=v,Q=(0,i.useMemo)((()=>J&&0!==J.length?J.slice(0,30):[]),[J]),X=(0,i.useMemo)((()=>Q&&0!==Q.length?Q.reduce(((e,t)=>e+parseFloat(t.totalVolumeUSD||"0")),0):0),[Q]),Z=(0,i.useMemo)((()=>Q&&0!==Q.length?Q.slice(0,10).map(((e,t)=>{const r=parseFloat(e.totalVolumeUSD||"0");return{address:e.id,rank:t+1,volume:le(r),rawVolume:r,percentage:de(e.totalVolumeUSD,X),currentVolume:r}})):[]),[Q,X]),ee=(0,i.useMemo)((()=>A(Q.length)),[Q.length]);return(0,w.jsx)($,{children:(0,w.jsxs)(k,{children:["        ",(0,w.jsx)(j,{children:(0,w.jsxs)(S,{children:[(0,w.jsxs)(V,{children:[(0,w.jsxs)(D,{children:[(0,w.jsx)(c.A,{size:18}),"Leaderboard"]}),(0,w.jsx)(y.PD,{text:(0,w.jsxs)("div",{children:["Ranking of users who generated the most volume.",(0,w.jsx)("br",{}),"Higher rankings increase your chances for airdrops!"]}),placement:"right",children:(0,w.jsx)(u.A,{size:16,color:"#888",style:{cursor:"help"}})})]}),(0,w.jsx)(M,{children:Z.map((e=>(0,w.jsx)(oe,{userId:e.address,currentVolume:e.rawVolume,children:t=>(0,w.jsxs)(T,{to:`/leaderboard/profile/${e.address}`,children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(C,{$rank:e.rank}),(0,w.jsx)(P,{children:(0,w.jsx)(x.A,{account:e.address,connection:g,size:40,showMiniIcons:!1})}),(0,w.jsxs)(U,{children:[(0,w.jsx)(O,{children:se(e.address)}),(0,w.jsxs)(B,{children:["$",e.volume]})]})]}),(0,w.jsxs)(E,{children:[(0,w.jsxs)(z,{children:["$",e.volume]}),(0,w.jsxs)(I,{$positive:t.change24h>0,children:[t.change24h>0?"+":"",t.change24h.toFixed(1),"%"]})]})]})},e.address)))})]})}),(0,w.jsxs)(H,{children:[(0,w.jsx)(R,{children:(0,w.jsx)(_,{children:(0,w.jsxs)(L,{children:[(0,w.jsxs)(N,{children:[(0,w.jsx)(p.A,{size:24}),"Volume Contest"]}),(0,w.jsx)(G,{children:"Compete with other traders to climb the leaderboard. Higher rankings increase your chances for future airdrops and exclusive rewards!"})]})})}),(0,w.jsx)(W,{ref:l,children:Y?(0,w.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"400px",color:"#9ca3af",fontSize:"18px",fontWeight:"500"},children:(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"24px 32px",background:"rgba(255, 255, 255, 0.05)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:[(0,w.jsx)("div",{style:{width:"20px",height:"20px",border:"2px solid rgba(255, 255, 255, 0.3)",borderTop:"2px solid currentColor",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"Loading leaderboard..."]})}):K?(0,w.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"400px",color:"#ef4444",fontSize:"18px",fontWeight:"500"},children:(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"24px 32px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"16px",backdropFilter:"blur(10px)",border:"1px solid rgba(239, 68, 68, 0.2)"},children:["\u26a0\ufe0f Error loading data: ",K]})}):(0,w.jsx)(q,{$dynamicHeight:ee,children:(0,w.jsx)(ae,{users:Q,totalVolume:X,width:d.width-48,height:ee-48,connection:g})})})]})]})})}}}]);
//# sourceMappingURL=2950.c3315b6d.chunk.js.map