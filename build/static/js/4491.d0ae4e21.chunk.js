"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[4491],{4491:(e,t,r)=>{r.r(t),r.d(t,{default:()=>We});var n=r(54644),a=r(62810),i=r(54674),o=r(96410),s=r(4099),l=r(64062),d=r(45265),c=r(81898),p=r(13017),u=r(26546),x=r(93242),h=r(33121),f=r(33370);const g=o.default.div`
  height: 300px;
  width: 100%;
  margin-top: 16px;
`,m=o.default.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
`,b=o.default.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  text-align: center;
`,$=o.default.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  text-align: center;
`,y=o.default.div`
  width: 32px;
  height: 32px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.surface3}};
  border-top: 2px solid ${e=>{let{theme:t}=e;return t.accent1}};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,w=(e,t)=>"volume"===t?e>=1e6?`$${(e/1e6).toFixed(1)}M`:e>=1e3?`$${(e/1e3).toFixed(1)}K`:`$${e.toFixed(0)}`:"score"===t?e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toFixed(1):e.toString(),v=e=>new Date(1e3*e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function j(e){let{active:t,payload:r,label:n,type:a}=e;const i=(0,o.useTheme)();if(!t||!r||!r.length)return null;const s=r[0].value,l=w(s,a),d=new Date(1e3*n).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"});return(0,f.jsxs)("div",{style:{background:`${i.surface1}f0`,border:`1px solid ${i.surface3}`,borderRadius:"8px",padding:"12px",backdropFilter:"blur(12px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.12)"},children:[(0,f.jsx)("div",{style:{fontSize:"12px",color:i.neutral2,marginBottom:"4px"},children:d}),(0,f.jsxs)("div",{style:{fontSize:"14px",fontWeight:"600",color:i.neutral1},children:["volume"===a&&"Total Volume: ","score"===a&&"Score: ","trades"===a&&"Trades: ",l]})]})}function k(e){let{userId:t,type:r,days:n,currentVolume:k}=e;const S=(0,o.useTheme)(),{data:z,loading:T,error:D}=(0,a.b)(t,n),F=(0,i.useMemo)((()=>{if(!z.length)return[];const e=z.filter((e=>parseFloat(e.dailyVolumeUSD)>0||parseFloat(e.dailyScore)>0||parseInt(e.dailyTxCount)>0)).sort(((e,t)=>e.date-t.date));if("volume"===r){console.log("UserTradingChart - Volume calculation",{userId:t,currentVolume:k,dataLength:e.length,sortedData:e.slice(0,5)});const r=[];let n=0;for(let t=0;t<e.length;t++){const a=e[t];n+=parseFloat(a.dailyVolumeUSD),r.push({date:a.date,value:n,formattedDate:v(a.date)})}return r}return e.map((e=>({date:e.date,value:"score"===r?parseFloat(e.dailyScore):parseInt(e.dailyTxCount),formattedDate:v(e.date)})))}),[z,r,t,k]);if(T)return(0,f.jsx)(m,{children:(0,f.jsx)(y,{})});if(D)return(0,f.jsxs)(b,{children:[(0,f.jsx)(h.PR.BodyPrimary,{style:{color:"inherit",marginBottom:"8px"},children:"Failed to load chart data"}),(0,f.jsx)(h.PR.BodySecondary,{style:{color:"inherit"},children:D})]});if(!F.length)return(0,f.jsxs)($,{children:[(0,f.jsx)(h.PR.BodyPrimary,{style:{color:"inherit",marginBottom:"8px"},children:"No activity data"}),(0,f.jsx)(h.PR.BodySecondary,{style:{color:"inherit"},children:"Start trading to see your performance analytics"})]});const V=()=>"volume"===r?S.accent1:"score"===r?S.success:S.accent2,C=`gradient-${r}`;return(0,f.jsx)(g,{children:(0,f.jsx)(s.u,{width:"100%",height:"100%",children:(0,f.jsxs)(l.Q,{data:F,margin:{top:5,right:5,left:5,bottom:5},children:[(0,f.jsx)("defs",{children:(0,f.jsxs)("linearGradient",{id:C,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,f.jsx)("stop",{offset:"5%",stopColor:V(),stopOpacity:.3}),(0,f.jsx)("stop",{offset:"95%",stopColor:V(),stopOpacity:.05})]})}),(0,f.jsx)(d.d,{strokeDasharray:"3 3",stroke:S.surface3,opacity:.3}),(0,f.jsx)(c.W,{dataKey:"date",tickFormatter:v,axisLine:!1,tickLine:!1,tick:{fill:S.neutral2,fontSize:11},interval:"preserveStartEnd"}),(0,f.jsx)(p.h,{tickFormatter:e=>w(e,r),axisLine:!1,tickLine:!1,tick:{fill:S.neutral2,fontSize:11},width:60}),(0,f.jsx)(u.m,{content:(0,f.jsx)(j,{type:r}),cursor:{stroke:V(),strokeWidth:1,strokeDasharray:"3 3"}}),(0,f.jsx)(x.G,{type:"monotone",dataKey:"value",stroke:V(),strokeWidth:2,fill:`url(#${C})`,dot:!1,activeDot:{r:4,fill:V(),stroke:S.surface1,strokeWidth:2}})]})})})}var S=r(85713),z=r(66451),T=r(45022),D=r(30849),F=r(41019),V=r(49115),C=r(75136),A=r(1372),U=r(30953),M=r(43124),E=r(93491),I=r(23082),P=r(8136),L=r(48805),N=r(87147);const B=o.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,O=o.keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,_=(o.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,o.keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`),R=(o.keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,o.keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`),Y=(0,o.default)(z.ff)`
  max-width: 1400px;
  min-height: 100vh;
  padding: 68px 24px 24px;
  background: ${e=>{let{theme:t}=e;return t.background}};
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, ${e=>{let{theme:t}=e;return t.accent1}}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${e=>{let{theme:t}=e;return t.accent2}}15 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 68px 16px 16px;
  }
`,W=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,G=o.default.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0;
  margin-bottom: 8px;
  transition: all 0.2s ease;
  animation: ${O} 0.4s ease-out;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.neutral1}};
    transform: translateX(-4px);
  }
`,q=o.default.div`
  background: ${e=>{let{theme:t}=e;return`${t.surface1}80`}};
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 40px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}40`}};
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  animation: ${B} 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}}08, ${e=>{let{theme:t}=e;return t.accent2}}08);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.accent1}}, ${e=>{let{theme:t}=e;return t.accent2}});
    border-radius: 32px 32px 0 0;
  }
`,J=o.default.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 32px;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }
`,H=o.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: ${e=>{let{theme:t}=e;return`${t.surface3}60`}};
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.accent1}30`}};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return`${t.surface3}80`}};
    border-color: ${e=>{let{theme:t}=e;return`${t.accent1}50`}};
    transform: scale(1.05);
  }
`,K=o.default.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${e=>{let{theme:t}=e;return`${t.surface3}40`}};
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}50`}};
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return`${t.surface3}60`}};
    border-color: ${e=>{let{theme:t}=e;return`${t.accent1}40`}};
  }
`,Q=o.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,X=o.default.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${R} 3s ease-in-out infinite;
  
  ${e=>{let{$userType:t,theme:r}=e;switch(t){case"whale":return"\n          background: linear-gradient(135deg, #1e3a8a, #3b82f6);\n          color: white;\n          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);\n        ";case"shark":return"\n          background: linear-gradient(135deg, #7c2d12, #ea580c);\n          color: white;\n          box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);\n        ";case"fish":return"\n          background: linear-gradient(135deg, #065f46, #10b981);\n          color: white;\n          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);\n        ";case"shrimp":return"\n          background: linear-gradient(135deg, #7c2d12, #f59e0b);\n          color: white;\n          box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);\n        ";default:return`\n          background: ${r.surface2};\n          color: ${r.neutral1};\n        `}}}
  
  &::before {
    content: '${e=>{let{$userType:t}=e;switch(t){case"whale":return"\ud83d\udc0b";case"shark":return"\ud83e\udd88";case"fish":return"\ud83d\udc1f";case"shrimp":return"\ud83e\udd90";default:return"\ud83d\udc20"}}}';
    font-size: 16px;
  }
`,Z=o.default.div`
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  position: relative;
  backdrop-filter: blur(10px);
  animation: ${R} 4s ease-in-out infinite;
  
  ${e=>{let{$rank:t,theme:r}=e;return 1===t?"\n      background: linear-gradient(135deg, #FFD700, #FFA500); \n      color: #000;\n      box-shadow: \n        0 12px 40px rgba(255, 215, 0, 0.4),\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\n    ":2===t?"\n      background: linear-gradient(135deg, #C0C0C0, #E5E5E5); \n      color: #000;\n      box-shadow: \n        0 12px 40px rgba(192, 192, 192, 0.4),\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\n    ":3===t?"\n      background: linear-gradient(135deg, #CD7F32, #D2691E); \n      color: #fff;\n      box-shadow: \n        0 12px 40px rgba(205, 127, 50, 0.4),\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\n    ":`\n      background: linear-gradient(135deg, ${r.accent1}, ${r.accent2}); \n      color: ${r.surface1};\n      box-shadow: \n        0 12px 40px rgba(0, 0, 0, 0.2),\n        inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    `}}
  
  &::before {
    content: '${e=>{let{$rank:t}=e;return 1===t?"\ud83d\udc51":2===t?"\ud83e\udd48":3===t?"\ud83e\udd49":"#"}}';
    ${e=>{let{$rank:t}=e;return t>3?"margin-right: 4px;":""}}
  }
  
  &::after {
    content: '${e=>{let{$rank:t}=e;return t>3?t.toString():""}}';
  }
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`,ee=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`,te=o.default.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  padding: 12px 16px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    padding: 8px 12px;
  }
`,re=o.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-size: 16px;
  font-weight: 500;
  flex-wrap: wrap;
  background: ${e=>{let{theme:t}=e;return`${t.surface2}40`}};
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}30`}};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.accent1}}50, ${e=>{let{theme:t}=e;return t.accent2}}50);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 8px;
  }
`,ne=o.default.div`
  display: flex;
  gap: 12px;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-top: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,ae=o.default.button`
  background: ${e=>{let{theme:t}=e;return`${t.surface2}80`}};
  backdrop-filter: blur(15px);
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}50`}};
  border-radius: 16px;
  padding: 16px;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return`${t.surface3}90`}};
    color: ${e=>{let{theme:t}=e;return t.neutral1}};
    transform: translateY(-4px) scale(1.05);
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    border-color: ${e=>{let{theme:t}=e;return`${t.accent1}50`}};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }
  
  /* Success state for copy button */
  &.success {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2));
    border-color: rgba(34, 197, 94, 0.5);
    color: #22c55e;
    
    &:hover {
      background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
    }
  }
`,ie=o.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`,oe=o.default.div`
  background: ${e=>{let{theme:t}=e;return`${t.surface2}40`}};
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 28px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}30`}};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}}05, ${e=>{let{theme:t}=e;return t.accent2}}05);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.accent1}}, ${e=>{let{theme:t}=e;return t.accent2}});
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: ${e=>{let{theme:t}=e;return`${t.surface3}50`}};
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.05);
    border-color: ${e=>{let{theme:t}=e;return`${t.accent1}30`}};
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
`,se=o.default.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}}20, ${e=>{let{theme:t}=e;return t.accent2}}20);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: ${e=>{let{theme:t}=e;return t.white}};
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.accent1}20`}};

`,le=o.default.div`
  font-size: 28px;
  font-weight: 800;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`,de=o.default.div`
  font-size: 15px;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ce=o.default.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,pe=o.default.div`
  background: ${e=>{let{theme:t}=e;return`${t.surface1}70`}};
  backdrop-filter: blur(25px);
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}30`}};
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: ${B} 0.8s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}}03, ${e=>{let{theme:t}=e;return t.accent2}}03);
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 25px 80px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-color: ${e=>{let{theme:t}=e;return`${t.accent1}20`}};
  }
`,ue=o.default.div`
  padding: 32px 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${e=>{let{theme:t}=e;return`${t.surface2}20`}};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}20`}};
`,xe=o.default.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.3px;
`,he=o.default.div`
  padding: 32px;
`,fe=o.default.div`
  height: 420px;
  position: relative;
  margin-top: 24px;
  background: ${e=>{let{theme:t}=e;return`${t.surface2}30`}};
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}30`}};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.accent1}}, ${e=>{let{theme:t}=e;return t.accent2}});
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    height: 320px;
  }
`,ge=o.default.div`
  display: flex;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }
`,me=o.default.div`
  display: flex;
  gap: 8px;
  padding: 6px;
  background: ${e=>{let{theme:t}=e;return`${t.surface2}20`}};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}30`}};
`,be=o.default.button`
  background: ${e=>{let{$active:t,theme:r}=e;return t?`linear-gradient(135deg, ${r.accent1}, ${r.accent2})`:"transparent"}};
  color: ${e=>{let{$active:t,theme:r}=e;return t?r.surface1:r.neutral2}};
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: ${e=>{let{$active:t,theme:r}=e;return t?r.surface1:r.neutral1}};
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(0.98);
  }
`,$e=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 500px;
  overflow-y: auto;
  padding: 4px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${e=>{let{theme:t}=e;return`${t.surface2}30`}};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${e=>{let{theme:t}=e;return`${t.surface3}60`}};
    border-radius: 4px;
    
    &:hover {
      background: ${e=>{let{theme:t}=e;return`${t.surface3}80`}};
    }
  }
`,ye=o.default.div`
  background: ${e=>{let{theme:t}=e;return`${t.surface2}25`}};
  backdrop-filter: blur(12px);
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}30`}};
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: visible;
  min-height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}}05, ${e=>{let{theme:t}=e;return t.accent2}}05);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.accent1}}, ${e=>{let{theme:t}=e;return t.accent2}});
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px 20px 0 0;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-3px);
    background: ${e=>{let{theme:t}=e;return`${t.surface2}40`}};
    border-color: ${e=>{let{theme:t}=e;return`${t.accent1}50`}};
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.08);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
`,we=o.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`,ve=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 0;
`,je=o.default.div`
  font-size: 18px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.2px;
  line-height: 1.2;
  
  &::before {
    content: '🔄';
    font-size: 16px;
    opacity: 0.8;
    flex-shrink: 0;
  }
`,ke=o.default.div`
  font-size: 11px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.accent1}};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  background: ${e=>{let{theme:t}=e;return`${t.accent1}20`}};
  padding: 6px 12px;
  border-radius: 12px;
  display: inline-block;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.accent1}30`}};
  width: fit-content;
`,Se=o.default.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  flex-shrink: 0;
`,ze=o.default.div`
  font-size: 20px;
  font-weight: 800;
  color: ${e=>{let{theme:t}=e;return t.success}};
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.1;
  
  &::before {
    content: '💰';
    font-size: 16px;
    flex-shrink: 0;
  }
`,Te=(o.default.div`
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.neutral3}};
  font-weight: 500;
  line-height: 1;
`,o.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}25`}};
  width: 100%;
  gap: 12px;
`),De=o.default.div`
  font-size: 13px;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  line-height: 1;
  flex: 1;
`,Fe=o.default.div`
  font-size: 11px;
  color: ${e=>{let{theme:t}=e;return t.neutral3}};
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: ${e=>{let{theme:t}=e;return`${t.surface3}25`}};
  padding: 8px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}20`}};
  line-height: 1;
  flex-shrink: 0;
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return`${t.surface3}50`}};
    color: ${e=>{let{theme:t}=e;return t.neutral2}};
    border-color: ${e=>{let{theme:t}=e;return`${t.surface3}40`}};
    transform: scale(1.02);
  }
  
  &::after {
    content: '📋';
    font-size: 10px;
    opacity: 0.7;
    flex-shrink: 0;
  }
`,Ve=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  gap: 20px;
  min-height: 200px;
  
  .icon {
    font-size: 64px;
    opacity: 0.7;
    margin-bottom: 12px;
    animation: ${_} 2s ease-in-out infinite;
    line-height: 1;
  }
  
  .title {
    font-size: 20px;
    font-weight: 700;
    color: ${e=>{let{theme:t}=e;return t.neutral1}};
    margin-bottom: 8px;
    line-height: 1.2;
  }
  
  .subtitle {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.8;
    max-width: 300px;
    line-height: 1.4;
  }
`,Ce=o.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  gap: 16px;
  
  div {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`,Ae=(o.default.div`
  text-align: center;
  padding: 80px 40px;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  
  div {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`,o.default.div`
  text-align: center;
  padding: 80px 40px;
  color: ${e=>{let{theme:t}=e;return t.critical}};
  
  div {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`),Ue=o.default.div`
  background: ${e=>{let{theme:t}=e;return`${t.surface2}30`}};
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${e=>{let{theme:t}=e;return`${t.surface3}40`}};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.accent1}}05, ${e=>{let{theme:t}=e;return t.accent2}}05);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    border-color: ${e=>{let{theme:t}=e;return`${t.accent1}30`}};
    
    &::before {
      opacity: 1;
    }
  }
`,Me=o.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,Ee=o.default.div`
  font-size: 14px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Ie=o.default.div`
  font-size: 28px;
  font-weight: 800;
  color: ${e=>{let{$positive:t,$neutral:r,theme:n}=e;return r?n.neutral1:t?n.success:n.critical}};
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.5px;
  
  &::before {
    content: '${e=>{let{$positive:t,$neutral:r}=e;return r?"":t?"\ud83d\udcc8":"\ud83d\udcc9"}}';
    font-size: 20px;
    animation: ${e=>e?_:"none"} 1.5s ease-in-out infinite;
  }
`,Pe=e=>{let{userId:t,currentVolume:r,children:n}=e;const{data:o,loading:s}=(0,a.b)(t,7);return n((0,i.useMemo)((()=>{var e,n,a,i;if(console.log("UserPerformanceData - userId:",t,"historicalData:",o,"currentVolume:",r),s)return{change24h:0,change7d:0,loading:!0};if(!o||0===o.length)return console.log("No historical data available"),{change24h:0,change7d:0,loading:!1};const l=[...o].map((e=>({...e,dailyVolume:parseFloat(e.dailyVolumeUSD||"0"),timestamp:e.date||0}))).sort(((e,t)=>e.timestamp-t.timestamp));let d=0;const c=l.map((e=>(d+=e.dailyVolume,{...e,totalVolume:d}))).sort(((e,t)=>t.timestamp-e.timestamp));console.log("Sorted data:",c.slice(0,7).map((e=>({date:e.timestamp,formattedDate:new Date(1e3*e.timestamp).toISOString(),totalVolume:e.totalVolume,dailyVolume:e.dailyVolume}))));const p=null!==(e=null!==r&&void 0!==r?r:null===(n=c[0])||void 0===n?void 0:n.totalVolume)&&void 0!==e?e:0;let u=0,x=0;if(c.length>=2){const e=c[1].totalVolume;u=0===e&&p>0?100:e>0?(p-e)/e*100:0}else 1===c.length&&p>0&&(u=100);if(c.length>=7){const e=c[6].totalVolume;x=0===e&&p>0?100:e>0?(p-e)/e*100:0}else if(c.length>=2){const e=u/100;0!==e&&(x=100*(Math.pow(1+e,7)-1))}else 1===c.length&&p>0&&(x=100);u=Math.max(-99,Math.min(u,1e3)),x=Math.max(-99,Math.min(x,2e3));const h={change24h:Math.round(100*u)/100,change7d:Math.round(100*x)/100,loading:!1};return console.log("Performance result:",{...h,dataPoints:c.length,currentTotal:p,yesterdayTotal:null===(a=c[1])||void 0===a?void 0:a.totalVolume,weekAgoTotal:null===(i=c[6])||void 0===i?void 0:i.totalVolume,currentVolumeParam:r}),h}),[o,t,r,s]))},Le=e=>e?"undefined"!==typeof window&&window.innerWidth<480?`${e.slice(0,4)}...${e.slice(-4)}`:"undefined"!==typeof window&&window.innerWidth<768?`${e.slice(0,6)}...${e.slice(-6)}`:`${e.slice(0,6)}...${e.slice(-4)}`:"0x...",Ne=e=>{const t="string"===typeof e?parseFloat(e):e;return isNaN(t)?"$0":t>=1e6?`$${(t/1e6).toFixed(1)}M`:t>=1e3?`$${(t/1e3).toFixed(1)}K`:`$${t.toFixed(0)}`},Be=e=>{const t="string"===typeof e?parseFloat(e):e;return isNaN(t)?"0":t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toFixed(0)},Oe=e=>{const t=Date.now()-("string"===typeof e?1e3*parseInt(e):1e3*e),r=Math.floor(t/6e4),n=Math.floor(t/36e5),a=Math.floor(t/864e5);return a>0?`${a}d ago`:n>0?`${n}h ago`:r>0?`${r}m ago`:"Just now"},_e=e=>{const t=Date.now(),r="string"===typeof e?1e3*parseInt(e):1e3*e;return Math.floor((t-r)/864e5)},Re=e=>{const t="string"===typeof e?parseFloat(e):e;return t>=1e6?"whale":t>=1e5?"shark":t>=5e3?"fish":"shrimp"},Ye=e=>{switch(e){case"whale":return"Whale Trader";case"shark":return"Shark Trader";case"fish":return"Fish Trader";case"shrimp":return"Shrimp Trader";default:return"Trader"}};function We(){const{userId:e}=(0,S.g)(),t=(0,S.Zp)(),{account:r,connector:s}=(0,n.useWeb3React)(),[l,d]=((0,o.useTheme)(),(0,i.useState)(!1)),[c,p]=(0,i.useState)("volume"),[u,x]=(0,i.useState)(30),{user:h,loading:g,error:m,isOwnProfile:b}=(0,a.sb)(e),$=(0,D.XA)(s),y=h?Re(h.totalVolumeUSD):"shrimp";return g?(0,f.jsx)(Y,{children:(0,f.jsxs)(W,{children:[(0,f.jsxs)(G,{onClick:()=>t("/leaderboard"),children:[(0,f.jsx)(F.A,{size:16}),"Back to Leaderboard"]}),(0,f.jsxs)(Ce,{children:[(0,f.jsx)("div",{style:{width:"40px",height:"40px",border:"3px solid rgba(255, 255, 255, 0.3)",borderTop:"3px solid currentColor",borderRadius:"50%",animation:"spin 1s linear infinite"}}),(0,f.jsx)("div",{children:"Loading profile..."})]})]})}):m||!h?(0,f.jsx)(Y,{children:(0,f.jsxs)(W,{children:[(0,f.jsxs)(G,{onClick:()=>t("/leaderboard"),children:[(0,f.jsx)(F.A,{size:16}),"Back to Leaderboard"]}),(0,f.jsxs)(Ae,{children:[(0,f.jsx)(V.A,{size:48}),(0,f.jsx)("div",{children:m?"Failed to load profile":"User not found"})]})]})}):(0,f.jsx)(Y,{children:(0,f.jsxs)(W,{children:[(0,f.jsxs)(G,{onClick:()=>t("/leaderboard"),children:[(0,f.jsx)(F.A,{size:16}),"Back to Leaderboard"]}),(0,f.jsxs)(q,{children:[(0,f.jsxs)(J,{children:[(0,f.jsx)(Z,{$rank:h.rank}),(0,f.jsxs)(ee,{children:[(0,f.jsx)(te,{children:Le(h.id)}),(0,f.jsx)(re,{children:(0,f.jsxs)(Q,{children:[(0,f.jsx)(H,{children:(0,f.jsx)(T.A,{account:h.id,connection:$,size:24,showMiniIcons:!1})}),(0,f.jsxs)(K,{children:[(0,f.jsx)(C.A,{size:16}),"Rank #",h.rank]}),(0,f.jsx)(X,{$userType:y,children:Ye(y)}),(0,f.jsxs)(K,{children:[(0,f.jsx)(A.A,{size:16}),_e(h.firstTransactionTimestamp)," days active"]}),b&&(0,f.jsxs)(K,{style:{background:"linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))",borderColor:"rgba(255, 215, 0, 0.3)",color:"#FFD700"},children:[(0,f.jsx)(U.A,{size:16}),"Your Profile"]})]})})]}),(0,f.jsxs)(ne,{children:[(0,f.jsx)(ae,{className:l?"success":"",onClick:async()=>{if(h)try{await navigator.clipboard.writeText(h.id),d(!0),setTimeout((()=>d(!1)),2e3)}catch(e){console.error("Failed to copy address:",e)}},title:l?"Address copied!":"Copy address",children:l?(0,f.jsx)(M.A,{size:16}):(0,f.jsx)(E.A,{size:16})}),(0,f.jsx)(ae,{onClick:()=>{h&&window.open(`https://explorer.vana.org/address/${h.id}`,"_blank")},title:"View on explorer",children:(0,f.jsx)(I.A,{size:16})})]})]}),(0,f.jsxs)(ie,{children:[(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{children:(0,f.jsx)(P.A,{size:20})}),(0,f.jsx)(le,{children:Ne(h.totalVolumeUSD)}),(0,f.jsxs)(de,{children:[(0,f.jsx)(L.A,{size:12}),"Total Volume"]})]}),(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{children:(0,f.jsx)(N.A,{size:20})}),(0,f.jsx)(le,{children:h.txCount}),(0,f.jsxs)(de,{children:[(0,f.jsx)(V.A,{size:12}),"Total Trades"]})]}),(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{children:(0,f.jsx)(U.A,{size:20})}),(0,f.jsx)(le,{children:Be(h.score)}),(0,f.jsxs)(de,{children:[(0,f.jsx)(C.A,{size:12}),"Trading Score"]})]}),(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{children:(0,f.jsx)(A.A,{size:20})}),(0,f.jsx)(le,{children:_e(h.firstTransactionTimestamp)}),(0,f.jsxs)(de,{children:[(0,f.jsx)(N.A,{size:12}),"Days Active"]})]})]})]}),(0,f.jsxs)(ce,{children:[(0,f.jsxs)(pe,{children:[(0,f.jsx)(ue,{children:(0,f.jsxs)(xe,{children:[(0,f.jsx)(P.A,{size:18}),"Performance Analytics"]})}),(0,f.jsxs)(he,{children:[(0,f.jsx)(Pe,{userId:h.id,currentVolume:parseFloat(h.totalVolumeUSD||"0"),children:e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px",marginBottom:"24px"},children:[(0,f.jsxs)(Ue,{children:[(0,f.jsx)(Me,{children:(0,f.jsx)(Ee,{children:"Total Volume Change (24h)"})}),(0,f.jsx)(Ie,{$positive:e.change24h>0,$neutral:0===e.change24h,children:e.loading?"Loading...":`${e.change24h>0?"+":""}${e.change24h.toFixed(1)}%`})]}),(0,f.jsxs)(Ue,{children:[(0,f.jsx)(Me,{children:(0,f.jsx)(Ee,{children:"Total Volume Change (7d)"})}),(0,f.jsx)(Ie,{$positive:e.change7d>0,$neutral:0===e.change7d,children:e.loading?"Loading...":`${e.change7d>0?"+":""}${e.change7d.toFixed(1)}%`})]})]})})}),(0,f.jsxs)(ge,{children:[(0,f.jsxs)(me,{children:[(0,f.jsx)(be,{$active:"volume"===c,onClick:()=>p("volume"),children:"Volume"}),(0,f.jsx)(be,{$active:"score"===c,onClick:()=>p("score"),children:"Score"}),(0,f.jsx)(be,{$active:"trades"===c,onClick:()=>p("trades"),children:"Trades"})]}),(0,f.jsxs)(me,{children:[(0,f.jsx)(be,{$active:7===u,onClick:()=>x(7),children:"7D"}),(0,f.jsx)(be,{$active:30===u,onClick:()=>x(30),children:"30D"})]})]}),(0,f.jsx)(fe,{children:(0,f.jsx)(k,{userId:h.id,type:c,days:u,currentVolume:parseFloat(h.totalVolumeUSD||"0")})})]})]}),(0,f.jsxs)(pe,{children:[(0,f.jsx)(ue,{children:(0,f.jsxs)(xe,{children:[(0,f.jsx)(N.A,{size:18}),"Recent Activity"]})}),(0,f.jsx)(he,{children:h.swaps&&0!==h.swaps.length?(0,f.jsx)($e,{children:h.swaps.slice(0,10).map(((e,t)=>(0,f.jsxs)(ye,{children:[(0,f.jsxs)(we,{children:[(0,f.jsxs)(ve,{children:[(0,f.jsxs)(je,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,f.jsx)(ke,{children:"Swap"})]}),(0,f.jsx)(Se,{children:(0,f.jsx)(ze,{children:Ne(e.amountUSD)})})]}),(0,f.jsxs)(Te,{children:[(0,f.jsxs)(De,{children:[(0,f.jsx)(A.A,{size:12}),Oe(e.timestamp)]}),(0,f.jsxs)(Fe,{onClick:()=>navigator.clipboard.writeText(e.id),title:"Click to copy transaction hash",children:[e.id.slice(0,8),"...",e.id.slice(-4)]})]})]},e.id)))}):(0,f.jsxs)(Ve,{children:[(0,f.jsx)("div",{className:"icon",children:"\ud83d\udcc8"}),(0,f.jsx)("div",{className:"title",children:"No Recent Activity"}),(0,f.jsx)("div",{className:"subtitle",children:"Start trading to see your transaction history here"})]})})]})]})]})})}},62810:(e,t,r)=>{r.d(t,{Pe:()=>c,b:()=>d,sb:()=>p});var n=r(54674),a=r(54644);const i="https://subgraph.synthra.org/subgraphs/name/ianlapham/uniswap-v3-sub",o='\n  query GetTopUsers($first: Int!, $skip: Int!) {\n    users(\n      first: $first\n      skip: $skip\n      orderBy: score\n      orderDirection: desc\n      where: { score_gt: "0" }\n    ) {\n      id\n      totalVolumeUSD\n      totalVolumeETH\n      score\n      txCount\n      firstTransactionTimestamp\n      lastTransactionTimestamp\n    }\n  }\n',s="\n  query GetUserDetails($userId: String!) {\n    user(id: $userId) {\n      id\n      totalVolumeUSD\n      totalVolumeETH\n      score\n      txCount\n      firstTransactionTimestamp\n      lastTransactionTimestamp\n      swaps(first: 10, orderBy: timestamp, orderDirection: desc) {\n        id\n        amountUSD\n        timestamp\n        pool {\n          id\n          token0 {\n            symbol\n          }\n          token1 {\n            symbol\n          }\n        }\n      }\n      userDayData(first: 30, orderBy: date, orderDirection: desc) {\n        id\n        date\n        dailyVolumeUSD\n        dailyVolumeETH\n        dailyScore\n        dailyTxCount\n        user {\n          id\n        }\n      }\n    }\n  }\n",l='\n  query GetUserHistoricalData($userId: String!, $first: Int!, $orderDirection: String!) {\n    userDayDatas(\n      first: $first\n      orderBy: date\n      orderDirection: $orderDirection\n      where: { \n        user: $userId\n        dailyVolumeUSD_gt: "0"\n      }\n    ) {\n      id\n      date\n      dailyVolumeUSD\n      dailyScore\n      dailyTxCount\n      user {\n        id\n      }\n    }\n  }\n';function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;const[r,a]=(0,n.useState)([]),[o,s]=(0,n.useState)(!1),[d,c]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(!e)return;(async()=>{s(!0),c(null);try{const r=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";try{var n;const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:l,variables:{userId:e.toLowerCase(),first:t,orderDirection:r}})});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const o=await a.json();if(o.errors)throw new Error(`GraphQL errors: ${JSON.stringify(o.errors)}`);return(null===(n=o.data)||void 0===n?void 0:n.userDayDatas)||[]}catch(d){throw console.error("Error fetching user historical data:",d),d}}(e,t,"asc");a(r)}catch(r){c(r instanceof Error?r.message:"Failed to load historical data")}finally{s(!1)}})()}),[e,t]),{data:r,loading:o,error:d}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;const[t,r]=(0,n.useState)([]),[a,s]=(0,n.useState)(!0),[l,d]=(0,n.useState)(null),[c,p]=(0,n.useState)(!0),[u,x]=(0,n.useState)(0),h=async()=>{try{s(!0);const t=u*e,n=await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;try{var r;const n=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:o,variables:{first:e,skip:t}})});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const a=await n.json();if(a.errors)throw new Error(`GraphQL errors: ${JSON.stringify(a.errors)}`);return((null===(r=a.data)||void 0===r?void 0:r.users)||[]).map(((e,r)=>({...e,rank:t+r+1})))}catch(l){throw console.error("Error fetching leaderboard data:",l),l}}(e,t);r(0===u?n:e=>[...e,...n]),p(n.length===e),x((e=>e+1))}catch(t){d(t instanceof Error?t.message:"Unknown error")}finally{s(!1)}};return(0,n.useEffect)((()=>{h()}),[]),{users:t,loading:a,error:l,hasMore:c,loadMore:h,refresh:()=>{x(0),r([]),p(!0),d(null),h()}}}function p(e){const{account:t}=(0,a.useWeb3React)(),[r,o]=(0,n.useState)(null),[l,d]=(0,n.useState)(!0),[c,p]=(0,n.useState)(null),u=e||t;return(0,n.useEffect)((()=>{!async function(){if(u)try{d(!0),p(null);const e=await async function(e){try{var t,r,n;const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s,variables:{userId:e.toLowerCase()}})});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const o=await a.json();if(o.errors)throw new Error(`GraphQL errors: ${JSON.stringify(o.errors)}`);const l=null===(t=o.data)||void 0===t?void 0:t.user;if(!l)return null;const d=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n          query GetUserRank($score: String!) {\n            users(where: { score_gt: $score }) {\n              id\n            }\n          }\n        ",variables:{score:l.score}})}),c=((null===(r=(await d.json()).data)||void 0===r||null===(n=r.users)||void 0===n?void 0:n.length)||0)+1;return{...l,rank:c}}catch(c){throw console.error("Error fetching user details:",c),c}}(u);o(e)}catch(e){p(e instanceof Error?e.message:"Unknown error")}finally{d(!1)}else d(!1)}()}),[u]),{user:r,loading:l,error:c,isOwnProfile:u===t}}}}]);
//# sourceMappingURL=4491.d0ae4e21.chunk.js.map