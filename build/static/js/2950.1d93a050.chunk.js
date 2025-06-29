"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[2950],{62810:(e,t,r)=>{r.d(t,{Pe:()=>c,b:()=>d,sb:()=>u});var n=r(54674),i=r(54644);const a="https://subgraph.synthra.org/subgraphs/name/ianlapham/uniswap-v3-sub",o='\n  query GetTopUsers($first: Int!, $skip: Int!) {\n    users(\n      first: $first\n      skip: $skip\n      orderBy: score\n      orderDirection: desc\n      where: { score_gt: "0" }\n    ) {\n      id\n      totalVolumeUSD\n      totalVolumeETH\n      score\n      txCount\n      firstTransactionTimestamp\n      lastTransactionTimestamp\n    }\n  }\n',s="\n  query GetUserDetails($userId: String!) {\n    user(id: $userId) {\n      id\n      totalVolumeUSD\n      totalVolumeETH\n      score\n      txCount\n      firstTransactionTimestamp\n      lastTransactionTimestamp\n      swaps(first: 10, orderBy: timestamp, orderDirection: desc) {\n        id\n        amountUSD\n        timestamp\n        pool {\n          id\n          token0 {\n            symbol\n          }\n          token1 {\n            symbol\n          }\n        }\n      }\n      userDayData(first: 30, orderBy: date, orderDirection: desc) {\n        id\n        date\n        dailyVolumeUSD\n        dailyVolumeETH\n        dailyScore\n        dailyTxCount\n        user {\n          id\n        }\n      }\n    }\n  }\n",l='\n  query GetUserHistoricalData($userId: String!, $first: Int!, $orderDirection: String!) {\n    userDayDatas(\n      first: $first\n      orderBy: date\n      orderDirection: $orderDirection\n      where: { \n        user: $userId\n        dailyVolumeUSD_gt: "0"\n      }\n    ) {\n      id\n      date\n      dailyVolumeUSD\n      dailyScore\n      dailyTxCount\n      user {\n        id\n      }\n    }\n  }\n';function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;const[r,i]=(0,n.useState)([]),[o,s]=(0,n.useState)(!1),[d,c]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(!e)return;(async()=>{s(!0),c(null);try{const r=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";try{var n;const i=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:l,variables:{userId:e.toLowerCase(),first:t,orderDirection:r}})});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();if(o.errors)throw new Error(`GraphQL errors: ${JSON.stringify(o.errors)}`);return(null===(n=o.data)||void 0===n?void 0:n.userDayDatas)||[]}catch(d){throw console.error("Error fetching user historical data:",d),d}}(e,t,"asc");i(r)}catch(r){c(r instanceof Error?r.message:"Failed to load historical data")}finally{s(!1)}})()}),[e,t]),{data:r,loading:o,error:d}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;const[t,r]=(0,n.useState)([]),[i,s]=(0,n.useState)(!0),[l,d]=(0,n.useState)(null),[c,u]=(0,n.useState)(!0),[p,h]=(0,n.useState)(0),x=async()=>{try{s(!0);const t=p*e,n=await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;try{var r;const n=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:o,variables:{first:e,skip:t}})});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();if(i.errors)throw new Error(`GraphQL errors: ${JSON.stringify(i.errors)}`);return((null===(r=i.data)||void 0===r?void 0:r.users)||[]).map(((e,r)=>({...e,rank:t+r+1})))}catch(l){throw console.error("Error fetching leaderboard data:",l),l}}(e,t);r(0===p?n:e=>[...e,...n]),u(n.length===e),h((e=>e+1))}catch(t){d(t instanceof Error?t.message:"Unknown error")}finally{s(!1)}};return(0,n.useEffect)((()=>{x()}),[]),{users:t,loading:i,error:l,hasMore:c,loadMore:x,refresh:()=>{h(0),r([]),u(!0),d(null),x()}}}function u(e){const{account:t}=(0,i.useWeb3React)(),[r,o]=(0,n.useState)(null),[l,d]=(0,n.useState)(!0),[c,u]=(0,n.useState)(null),p=e||t;return(0,n.useEffect)((()=>{!async function(){if(p)try{d(!0),u(null);const e=await async function(e){try{var t,r,n;const i=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s,variables:{userId:e.toLowerCase()}})});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();if(o.errors)throw new Error(`GraphQL errors: ${JSON.stringify(o.errors)}`);const l=null===(t=o.data)||void 0===t?void 0:t.user;if(!l)return null;const d=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n          query GetUserRank($score: String!) {\n            users(where: { score_gt: $score }) {\n              id\n            }\n          }\n        ",variables:{score:l.score}})}),c=((null===(r=(await d.json()).data)||void 0===r||null===(n=r.users)||void 0===n?void 0:n.length)||0)+1;return{...l,rank:c}}catch(c){throw console.error("Error fetching user details:",c),c}}(p);o(e)}catch(e){u(e instanceof Error?e.message:"Unknown error")}finally{d(!1)}else d(!1)}()}),[p]),{user:r,loading:l,error:c,isOwnProfile:p===t}}},72950:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ze});var n=r(54644),i=r(62810),a=r(54674),o=r(4126),s=r(96410),l=r(33121),d=r(66451),c=r(8136),u=r(94222),p=r(56634),h=r(55370),x=r(48805),f=r(90424),m=r(45022),g=r(30849),b=r(4099),$=r(16187),w=r(73525),y=r(84522),v=r(33370);const j=s.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,k=(0,s.default)(d.ff)`
  max-width: 1400px;
  min-height: 100vh;
  padding: 68px 24px 24px;
  background: ${e=>{let{theme:t}=e;return t.background}};

  @media (max-width: 768px) {
    padding: 68px 16px 16px;
  }
`,M=s.default.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,S=s.default.div`
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
`,D=s.default.div`
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
`,z=s.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-shrink: 0;
`,V=(0,s.default)(l.PR.SubHeader)`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-weight: 600;
`,C=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  flex-shrink: 0;
`,F=s.default.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  background: ${e=>{let{theme:t}=e;return t.surface2}};
  border-radius: 12px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
`,E=s.default.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: ${e=>{let{$active:t,theme:r}=e;return t?r.accent1:"transparent"}};
  color: ${e=>{let{$active:t,theme:r}=e;return t?r.surface1:r.neutral2}};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    background: ${e=>{let{$active:t,theme:r}=e;return t?r.accent1:r.surface3}};
  }
`,T=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I=(0,s.default)(l.PR.LabelMicro)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,U=s.default.input`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${e=>{let{theme:t}=e;return t.surface3}};
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.accent1}};
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.accent1}};
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`,P=(0,s.default)(l.PR.BodySmall)`
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-weight: 600;
  text-align: center;
`,R=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`,O=(0,s.default)(o.N_)`
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
`,B=s.default.div`
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
`,H=s.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`,_=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
  min-width: 80px;
`,G=(0,s.default)(l.PR.BodySmall)`
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 6px ${e=>{let{theme:t}=e;return t.accent1}};
  font-size: 14px;
`,N=s.default.div`
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
`,L=s.default.div`
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
`,A=s.default.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,W=(0,s.default)(l.PR.BodySmall)`
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,q=(0,s.default)(l.PR.LabelMicro)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,J=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    order: 1;
  }
`,Y=s.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,K=s.default.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Q=(0,s.default)(l.PR.HeadlineMedium)`
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`,X=(0,s.default)(l.PR.BodyPrimary)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  margin: 8px 0 0 0;
  font-size: 16px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Z=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ee=s.default.div`
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
`,te=s.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
`,re=(0,s.default)(o.N_)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: ${e=>{let{theme:t}=e;return t.surface2}};
  border-radius: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.surface3}};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    color: inherit;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, 
      ${e=>{let{theme:t}=e;return t.accent1}}15, 
      ${e=>{let{theme:t}=e;return t.accent1}}05
    );
    border-radius: 0 16px 0 60px;
  }
`,ne=s.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ie=s.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`,ae=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`,oe=s.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,se=(0,s.default)(l.PR.SubHeader)`
  color: #fff;
  text-shadow: 0 0 6px ${e=>{let{theme:t}=e;return t.accent1}};
  font-size: 18px;
  font-weight: 700;
`,le=s.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{let{$positive:t,theme:r}=e;return t?r.success:r.critical}};

  &::before {
    content: "${e=>{let{$positive:t}=e;return t?"\ud83d\udcc8":"\ud83d\udcc9"}}";
    font-size: 12px;
  }
`,de=s.default.div`
  height: 40px;
  margin-top: 8px;
  opacity: 0.8;
`,ce=s.default.div`
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
`,ue=e=>{if(0===e)return 500;const t=500+Math.min(4*e,200);return Math.max(500,Math.min(t,800))},pe=s.default.div`
  position: absolute;
  left: ${e=>{let{$x:t}=e;return t}}px;
  top: ${e=>{let{$y:t}=e;return t}}px;
  width: ${e=>{let{$width:t}=e;return t}}px;
  height: ${e=>{let{$height:t}=e;return t}}px;
  background: ${e=>{let{$rank:t,theme:r}=e;return 1===t?"linear-gradient(135deg, #5821B7, #000)":2===t?"linear-gradient(135deg, #D1D5DB, #000)":3===t?"linear-gradient(135deg, #F97316, #000)":"linear-gradient(135deg, #1F2937, #000)"}};
  box-shadow: ${e=>{let{$rank:t}=e;return 1===t?"0 0 12px #8B5CF6aa":2===t?"0 0 10px #D1D5DBcc":3===t?"0 0 10px #F97316cc":"inset 0 0 6px rgba(255,255,255,0.05)"}};
  border-radius: 16px;
  padding: ${e=>{let{$showDetails:t}=e;return t?"16px":"8px"}};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: ${e=>{let{$showDetails:t}=e;return t?"space-between":"center"}};
  align-items: ${e=>{let{$showDetails:t}=e;return t?"stretch":"center"}};
  overflow: hidden;
  animation: ${j} 0.6s ease-out;
  animation-delay: ${e=>{let{$rank:t}=e;return.1*t}}s;
  animation-fill-mode: both;
  opacity: 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    z-index: 10;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,he=s.default.div`
  display: flex;
  align-items: ${e=>{let{$compact:t}=e;return t?"center":"flex-start"}};
  justify-content: ${e=>{let{$compact:t}=e;return t?"center":"space-between"}};
  margin-bottom: ${e=>{let{$compact:t}=e;return t?"0":"8px"}};
  gap: ${e=>{let{$compact:t}=e;return t?"4px":"8px"}};
`,xe=s.default.div`
  display: flex;
  align-items: center;
  gap: ${e=>{let{$compact:t}=e;return t?"4px":"8px"}};
  min-width: 0;
  flex: 1;
  flex-direction: ${e=>{let{$compact:t}=e;return t?"column":"row"}};
`,fe=s.default.div`
  width: ${e=>{let{$size:t}=e;return t}}px;
  height: ${e=>{let{$size:t}=e;return t}}px;
  border-radius: ${e=>{let{$size:t}=e;return Math.max(6,Math.min(t/4,10))}}px;
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
`,me=s.default.div`
  min-width: 0;
  flex: 1;
  text-align: ${e=>{let{$compact:t}=e;return t?"center":"left"}};
`,ge=(0,s.default)(l.PR.BodySmall)`
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-size: ${e=>{let{$fontSize:t}=e;return t}}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`,be=s.default.div`
  background: ${e=>{let{theme:t,$rank:r}=e;return 1===r?`linear-gradient(135deg, ${t.accent1}, ${t.accent2})`:2===r?"linear-gradient(135deg, #C0C0C0, #E8E8E8)":3===r?"linear-gradient(135deg, #CD7F32, #FFB347)":t.surface3}};
  color: ${e=>{let{theme:t,$rank:r}=e;return r<=3?t.surface1:t.neutral1}};
  padding: ${e=>{let{$size:t}=e;return Math.max(2,t/8)}}px ${e=>{let{$size:t}=e;return Math.max(4,t/4)}}px;
  text-shadow: ${e=>{let{$rank:t,theme:r}=e;return t<=3?`0 0 6px ${r.accent1}`:"none"}};
  border-radius: ${e=>{let{$size:t}=e;return Math.max(4,t/6)}}px;
  font-size: ${e=>{let{$size:t}=e;return Math.max(8,t/2)}}px;
  font-weight: 700;
  text-align: center;
  min-width: ${e=>{let{$size:t}=e;return t}}px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`,$e=s.default.div`
  margin-top: auto;
  display: ${e=>{let{$show:t}=e;return t?"block":"none"}};
`,we=(0,s.default)(l.PR.SubHeader)`
  color: #fff;
  text-shadow: 0 0 6px ${e=>{let{theme:t}=e;return t.accent1}};
  font-size: ${e=>{let{$fontSize:t}=e;return t}}px;
  font-weight: 700;
  margin-bottom: 2px;
  line-height: 1.2;
`,ye=s.default.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 40%;
  height: 25%;
  opacity: ${e=>{let{$visible:t}=e;return t?.6:0}};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,ve=e=>{let{userId:t,color:r="rgba(255,255,255,0.8)"}=e;const{data:n}=(0,i.b)(t,7),o=(0,a.useMemo)((()=>{const e=new Date,t=[];for(let n=6;n>=0;n--){const r=new Date(e);r.setDate(r.getDate()-n),r.setUTCHours(0,0,0,0),t.push(Math.floor(r.getTime()/1e3))}if(!n||0===n.length)return t.map(((e,t)=>({index:t,value:20+10*t,timestamp:e,volume:0})));const r=new Map;n.forEach((e=>{const t=e.date||0;r.set(t,parseFloat(e.dailyVolumeUSD||"0"))}));let i=0;const a=t.map((e=>{const t=r.get(e)||0;return i+=t,{timestamp:e,dailyVolume:t,cumulativeVolume:i}})),o=Math.max(...a.map((e=>e.cumulativeVolume)),1);return a.map(((e,t)=>{const r=o>0?20+e.cumulativeVolume/o*60:20+2*t;return{index:t,value:Math.max(20,Math.min(80,r)),timestamp:e.timestamp,volume:e.cumulativeVolume,dailyVolume:e.dailyVolume}}))}),[n]),s=(e=>{if(e.startsWith("rgba(255,255,255"))return"#ffffff";if(e.startsWith("rgba(")){const t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(t){return`#${parseInt(t[1]).toString(16).padStart(2,"0")}${parseInt(t[2]).toString(16).padStart(2,"0")}${parseInt(t[3]).toString(16).padStart(2,"0")}`}}return e})(r);return(0,v.jsx)("div",{style:{width:"100%",height:"100%"},children:(0,v.jsx)(b.u,{width:"100%",height:"100%",children:(0,v.jsxs)($.b,{data:o,margin:{top:5,right:5,left:5,bottom:5},children:[(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:`lineGradient-${t}`,x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,v.jsx)("stop",{offset:"0%",stopColor:s,stopOpacity:.8}),(0,v.jsx)("stop",{offset:"50%",stopColor:s,stopOpacity:1}),(0,v.jsx)("stop",{offset:"100%",stopColor:s,stopOpacity:.6})]}),(0,v.jsxs)("filter",{id:`glow-${t}`,children:[(0,v.jsx)("feGaussianBlur",{stdDeviation:"2",result:"coloredBlur"}),(0,v.jsxs)("feMerge",{children:[(0,v.jsx)("feMergeNode",{in:"coloredBlur"}),(0,v.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,v.jsx)(w.N,{type:"monotone",dataKey:"value",stroke:`url(#lineGradient-${t})`,strokeWidth:2.5,dot:!1,activeDot:{r:4,fill:s,stroke:s,strokeWidth:2,filter:`url(#glow-${t})`},filter:`url(#glow-${t})`})]})})})},je=e=>{let{users:t,totalVolume:r,width:n,height:i,connection:l,maxUsers:d}=e;const c=(0,s.useTheme)(),u=(0,a.useMemo)((()=>{if(!t||0===t.length)return[];const e=t.slice(0,d).map(((e,t)=>{const n=parseFloat(e.totalVolumeUSD||"0");return{id:e.id,originalValue:n,rank:t+1,percentage:r>0?(n/r*100).toFixed(2):"0.00"}}));if(0===e.map((e=>e.originalValue)).filter((e=>e>0)).length)return[];const a=e.map((e=>{let t;return t=e.originalValue<=0?150:1===e.rank?100*Math.log(e.originalValue+1)+800:e.rank<=3?90*Math.log(e.originalValue+1)+500:e.rank<=10?80*Math.log(e.originalValue+1)+300:70*Math.log(e.originalValue+1)+200,{...e,value:t}})),o=f.Sk5({children:a}).sum((e=>e.value)).sort(((e,t)=>(e.rank||0)-(t.rank||0)));return f.hkb().size([n,i]).padding(8).paddingInner(12).paddingOuter(20).round(!0)(o),o.leaves().map((e=>{const t=Math.max(e.x1-e.x0,140),r=Math.max(e.y1-e.y0,100),n=t>180&&r>120,i=t>120&&r>80;return{...e.data,x:e.x0,y:e.y0,width:t,height:r,showFullDetails:n,showMinimalDetails:i}}))}),[t,r,n,i,d]),p=function(e){return e?arguments.length>1&&void 0!==arguments[1]&&arguments[1]?`${e.slice(0,4)}...${e.slice(-2)}`:`${e.slice(0,6)}...${e.slice(-4)}`:"0x..."};return(0,v.jsx)("div",{style:{position:"relative",width:"100%",height:"100%"},children:u.map((e=>{const t=!e.showMinimalDetails,r=e.showFullDetails?36:e.showMinimalDetails?28:20,n=e.showFullDetails?11:e.showMinimalDetails?9:8,i=e.showFullDetails?12:e.showMinimalDetails?10:8,a=e.showFullDetails?24:e.showMinimalDetails?20:16;return(0,v.jsxs)(pe,{$x:e.x,$y:e.y,$width:e.width,$height:e.height,$rank:e.rank,$volume:e.originalValue,$showDetails:e.showMinimalDetails,as:o.N_,to:`/leaderboard/profile/${e.id}`,children:[(0,v.jsxs)(he,{$compact:t,children:[(0,v.jsxs)(xe,{$compact:t,children:[(0,v.jsx)(fe,{$rank:e.rank,$size:r,children:(0,v.jsx)(m.A,{account:e.id,connection:l,size:r,showMiniIcons:!1})}),e.showMinimalDetails&&(0,v.jsx)(me,{$compact:t,children:(0,v.jsx)(ge,{$fontSize:n,children:p(e.id,t)})})]}),(0,v.jsxs)(be,{$rank:e.rank,$size:a,children:["#",e.rank]})]}),(0,v.jsx)($e,{$show:e.showMinimalDetails&&e.height>80,children:(0,v.jsxs)(we,{$fontSize:i,children:["$",(s=e.originalValue,s>=1e6?(s/1e6).toFixed(2)+"M":s>=1e3?(s/1e3).toFixed(2)+"K":s.toFixed(2))]})}),(0,v.jsx)(ye,{$visible:e.showFullDetails&&e.width>200&&e.height>140,children:(0,v.jsx)(ve,{userId:e.id,color:c.accent1})})]},e.id);var s}))})},ke=e=>{let{userId:t,currentVolume:r,children:n}=e;const{data:o}=(0,i.b)(t,7);return n((0,a.useMemo)((()=>{var e,t;if(!o||0===o.length)return{change24h:0,change7d:0};const n=[...o].map((e=>({...e,dailyVolume:parseFloat(e.dailyVolumeUSD||"0"),timestamp:e.date||0}))).sort(((e,t)=>e.timestamp-t.timestamp));let i=0;const a=n.map((e=>(i+=e.dailyVolume,{...e,totalVolume:i}))).sort(((e,t)=>t.timestamp-e.timestamp)),s=null!==(e=null!==r&&void 0!==r?r:null===(t=a[0])||void 0===t?void 0:t.totalVolume)&&void 0!==e?e:0;let l=0,d=0;if(a.length>=2){const e=a[1].totalVolume;l=0===e&&s>0?100:e>0?(s-e)/e*100:0}else 1===a.length&&s>0&&(l=100);if(a.length>=7){const e=a[6].totalVolume;d=0===e&&s>0?100:e>0?(s-e)/e*100:0}else if(a.length>=2){const e=l/100;0!==e&&(d=100*(Math.pow(1+e,7)-1))}else 1===a.length&&s>0&&(d=100);l=Math.max(-99,Math.min(l,1e3)),d=Math.max(-99,Math.min(d,2e3));return{change24h:Math.round(100*l)/100,change7d:Math.round(100*d)/100}}),[o,t,r]))},Me=e=>e?`${e.slice(0,6)}...${e.slice(-4)}`:"0x...",Se=e=>e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2),De=(e,t)=>{const r=parseFloat(e)||0;return 0===t?"0.00%":(r/t*100).toFixed(2)+"%"};function ze(){const{account:e,connector:t}=(0,n.useWeb3React)(),r=(0,s.useTheme)(),[o,l]=(0,a.useState)("treemap"),[d,f]=(0,a.useState)(20),b=(0,a.useRef)(null),[$,w]=(0,a.useState)({width:800,height:720}),j=(0,g.XA)(t),{users:pe,loading:he,error:xe}=(0,i.Pe)(100),me=(null===pe||void 0===pe?void 0:pe.length)||0;(0,a.useEffect)((()=>{me>0&&d>me&&f(Math.min(me,20))}),[me,d]),(0,a.useEffect)((()=>{const e=()=>{if(b.current){const{clientWidth:e,clientHeight:t}=b.current;w({width:e||600,height:Math.max(t-48,500)})}};e();const t=()=>e();return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]);const ge=pe,$e=he,we=xe,ye=(0,a.useMemo)((()=>ge&&0!==ge.length?ge.slice(0,Math.min(d,ge.length)):[]),[ge,d]),ze=(0,a.useMemo)((()=>ye&&0!==ye.length?ye.reduce(((e,t)=>e+parseFloat(t.totalVolumeUSD||"0")),0):0),[ye]),Ve=(0,a.useMemo)((()=>ye&&0!==ye.length?ye.slice(0,10).map(((e,t)=>{const r=parseFloat(e.totalVolumeUSD||"0");return{address:e.id,rank:t+1,volume:Se(r),rawVolume:r,percentage:De(e.totalVolumeUSD,ze),currentVolume:r}})):[]),[ye,ze]),Ce=(0,a.useMemo)((()=>ue(Math.min(d,ye.length))),[ye.length,d]);return(0,v.jsx)(k,{children:(0,v.jsxs)(M,{children:[(0,v.jsx)(S,{children:(0,v.jsxs)(D,{children:[(0,v.jsxs)(z,{children:[(0,v.jsxs)(V,{children:[(0,v.jsx)(c.A,{size:18}),"Leaderboard"]}),(0,v.jsx)(y.PD,{text:(0,v.jsxs)("div",{children:["Ranking of users who generated the most volume.",(0,v.jsx)("br",{}),"Higher rankings increase your chances for airdrops!"]}),placement:"right",children:(0,v.jsx)(u.A,{size:16,color:"#888",style:{cursor:"help"}})})]}),(0,v.jsxs)(C,{children:[(0,v.jsxs)(T,{children:[(0,v.jsx)(I,{children:"View Mode"}),(0,v.jsxs)(F,{children:[(0,v.jsxs)(E,{$active:"treemap"===o,onClick:()=>l("treemap"),children:[(0,v.jsx)(p.A,{size:14}),"Map"]}),(0,v.jsxs)(E,{$active:"grid"===o,onClick:()=>l("grid"),children:[(0,v.jsx)(h.A,{size:14}),"Grid"]})]})]}),(0,v.jsxs)(T,{children:[(0,v.jsxs)(I,{children:["Users Shown: ",d," / ",me]}),(0,v.jsx)(U,{type:"range",min:"10",max:Math.max(10,me),value:Math.min(d,me),onChange:e=>f(parseInt(e.target.value)),disabled:0===me}),(0,v.jsxs)(P,{children:[Math.min(d,me)," of ",me," traders"]})]})]}),(0,v.jsx)(R,{children:Ve.map((e=>(0,v.jsx)(ke,{userId:e.address,currentVolume:e.rawVolume,children:t=>(0,v.jsxs)(O,{to:`/leaderboard/profile/${e.address}`,children:[(0,v.jsxs)(H,{children:[(0,v.jsx)(B,{$rank:e.rank}),(0,v.jsx)(L,{children:(0,v.jsx)(m.A,{account:e.address,connection:j,size:40,showMiniIcons:!1})}),(0,v.jsxs)(A,{children:[(0,v.jsx)(W,{children:Me(e.address)}),(0,v.jsxs)(q,{children:["$",e.volume]})]})]}),(0,v.jsxs)(_,{children:[(0,v.jsxs)(G,{children:["$",e.volume]}),(0,v.jsxs)(N,{$positive:t.change24h>0,children:[t.change24h>0?"+":"",t.change24h.toFixed(1),"%"]})]})]})},e.address)))})]})}),(0,v.jsxs)(J,{children:[(0,v.jsx)(Y,{children:(0,v.jsx)(K,{children:(0,v.jsxs)(Z,{children:[(0,v.jsxs)(Q,{children:[(0,v.jsx)(x.A,{size:24}),"Volume Contest"]}),(0,v.jsx)(X,{children:"Compete with other traders to climb the leaderboard. Use the controls to adjust the view and number of traders shown."})]})})}),"treemap"===o?(0,v.jsx)(ee,{ref:b,children:$e?(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"400px",color:"#9ca3af",fontSize:"18px",fontWeight:"500"},children:(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"24px 32px",background:"rgba(255, 255, 255, 0.05)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:[(0,v.jsx)("div",{style:{width:"20px",height:"20px",border:"2px solid rgba(255, 255, 255, 0.3)",borderTop:"2px solid currentColor",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"Loading leaderboard..."]})}):we?(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"400px",color:"#ef4444",fontSize:"18px",fontWeight:"500"},children:(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"24px 32px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"16px",backdropFilter:"blur(10px)",border:"1px solid rgba(239, 68, 68, 0.2)"},children:["\u26a0\ufe0f Error loading data: ",we]})}):(0,v.jsx)(ce,{$dynamicHeight:Ce,children:(0,v.jsx)(je,{users:ye,totalVolume:ze,width:$.width-48,height:Ce-48,connection:j,maxUsers:d})})}):(0,v.jsx)(te,{children:$e?(0,v.jsx)("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"40px"},children:"Loading..."}):we?(0,v.jsxs)("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"40px",color:"#ef4444"},children:["Error: ",we]}):ye.map(((e,t)=>{const n=parseFloat(e.totalVolumeUSD||"0");return(0,v.jsx)(ke,{userId:e.id,currentVolume:n,children:i=>(0,v.jsxs)(re,{to:`/leaderboard/profile/${e.id}`,children:[(0,v.jsxs)(ne,{children:[(0,v.jsxs)(ie,{children:[(0,v.jsx)(fe,{$rank:t+1,$size:44,children:(0,v.jsx)(m.A,{account:e.id,connection:j,size:44,showMiniIcons:!1})}),(0,v.jsxs)(A,{children:[(0,v.jsx)(W,{children:Me(e.id)}),(0,v.jsxs)(q,{children:["Rank #",t+1]})]})]}),(0,v.jsxs)(be,{$rank:t+1,$size:24,children:["#",t+1]})]}),(0,v.jsxs)(ae,{children:[(0,v.jsxs)(oe,{children:[(0,v.jsxs)(se,{children:["$",Se(n)]}),(0,v.jsxs)(le,{$positive:i.change24h>0,children:[i.change24h>0?"+":"",i.change24h.toFixed(1),"%"]})]}),(0,v.jsx)(de,{children:(0,v.jsx)(ve,{userId:e.id,color:r.accent1})})]})]})},e.id)}))})]})]})})}}}]);
//# sourceMappingURL=2950.1d93a050.chunk.js.map