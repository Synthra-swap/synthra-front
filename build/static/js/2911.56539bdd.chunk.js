"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[2911],{51150:(e,t,n)=>{n.d(t,{U:()=>r});var d=n(9157),i=n(93405);function r(e){var t;if(e.isNative)return e;const n=(0,d.g4)(e.chainId);return n&&null!==(t=i.Im[n])&&void 0!==t&&t.equals(e)?(0,i.cz)(e.chainId):e}},88296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var d=n(49849),i=n(54644),r=n(10530),o=n(7951),l=n(67197),a=n.n(l),s=n(54674),u=n(69465),c=n(4126),x=n(92947),p=n(96410),h=n(33121),m=n(50645),v=n(21959),j=n(75423),g=n(3327),f=n(74222),A=n(12763),w=n(66451),k=n(65311),y=n(92627),R=n(91128),_=n(23843),T=n(95626),b=n(63901),I=n(1151),B=n(11549),C=n(70623),S=n(66295),M=n(93405);const E=new T.KA(b.HV),N={1:[{tokens:[M.Im[B.ChainId.MAINNET],M.dM],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[M.Im[B.ChainId.MAINNET],M.pP],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[M.Im[B.ChainId.MAINNET],M.pI],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[M.Im[B.ChainId.MAINNET],M.BC],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var W=n(34342),q=n(33370);const D=(0,p.default)(j.mm)`
  max-width: 640px;
  width: 100%;

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `}};
`,z=(0,p.default)(g.pL)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,F=(0,p.default)(A.JA)`
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `}};
`,P=(0,p.default)(A.Bp)`
  gap: 8px;
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `}};
`,$=(0,p.default)(m.$$)`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `}};
`,H=(0,p.default)(m.nR)`
  height: 40px;
  width: fit-content;
  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `}};
`,K=p.default.div`
  border: 1px solid ${e=>{let{theme:t}=e;return t.neutral2}};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function L(){const e=(0,p.useTheme)(),{account:t}=(0,i.useWeb3React)(),n=(0,o.S)();let l=(0,W.K8)();n||(l=[]);const T=(0,s.useMemo)((()=>l.map((e=>({liquidityToken:(0,W.lg)(e),tokens:e})))),[l]),b=(0,s.useMemo)((()=>T.map((e=>e.liquidityToken))),[T]),[L,J]=(0,_.Tz)(null!==t&&void 0!==t?t:void 0,b),G=(0,s.useMemo)((()=>T.filter((e=>{var t;let{liquidityToken:n}=e;return null===(t=L[n.address])||void 0===t?void 0:t.greaterThan("0")}))),[T,L]),U=(0,R.hM)(G.map((e=>{let{tokens:t}=e;return t}))),O=J||(null===U||void 0===U?void 0:U.length)<G.length||(null===U||void 0===U?void 0:U.some((e=>!e))),Q=U.map((e=>{let[,t]=e;return t})).filter((e=>Boolean(e))),V=function(e){const{chainId:t,account:n}=(0,i.useWeb3React)(),d=(0,C.A)(),r=(0,s.useMemo)((()=>{var n,d;return t&&null!==(n=null===(d=N[t])||void 0===d?void 0:d.filter((t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1]))))&&void 0!==n?n:[]}),[t,e]),o=t?M.nf[t]:void 0,l=(0,s.useMemo)((()=>r.map((e=>{let{stakingRewardAddress:t}=e;return t}))),[r]),u=(0,s.useMemo)((()=>[null!==n&&void 0!==n?n:void 0]),[n]),c=(0,S._l)(l,E,"balanceOf",u),x=(0,S._l)(l,E,"earned",u),p=(0,S._l)(l,E,"totalSupply"),h=(0,S._l)(l,E,"rewardRate",void 0,S.bo),m=(0,S._l)(l,E,"periodFinish",void 0,S.bo);return(0,s.useMemo)((()=>t&&o?l.reduce(((e,t,n)=>{const i=c[n],l=x[n],s=p[n],u=h[n],v=m[n];if((null===i||void 0===i||!i.loading)&&(null===l||void 0===l||!l.loading)&&s&&!s.loading&&u&&!u.loading&&v&&!v.loading){var j,g,f,A,w,k,y,R;if(null!==i&&void 0!==i&&i.error||null!==l&&void 0!==l&&l.error||s.error||u.error||v.error)return console.error("Failed to load staking rewards info"),e;const c=r[n].tokens,x=new I.Pair(B.CurrencyAmount.fromRawAmount(c[0],"0"),B.CurrencyAmount.fromRawAmount(c[1],"0")),p=B.CurrencyAmount.fromRawAmount(x.liquidityToken,a().BigInt(null!==(j=null===i||void 0===i||null===(g=i.result)||void 0===g?void 0:g[0])&&void 0!==j?j:0)),h=B.CurrencyAmount.fromRawAmount(x.liquidityToken,a().BigInt(null===(f=s.result)||void 0===f?void 0:f[0])),m=B.CurrencyAmount.fromRawAmount(o,a().BigInt(null===(A=u.result)||void 0===A?void 0:A[0])),_=(e,t,n)=>B.CurrencyAmount.fromRawAmount(o,a().greaterThan(t.quotient,a().BigInt(0))?a().divide(a().multiply(n.quotient,e.quotient),t.quotient):a().BigInt(0)),T=_(p,h,m),b=null===(w=v.result)||void 0===w||null===(k=w[0])||void 0===k?void 0:k.toNumber(),C=1e3*b,S=!b||!d||b>d.toNumber();e.push({stakingRewardAddress:t,tokens:r[n].tokens,periodFinish:C>0?new Date(C):void 0,earnedAmount:B.CurrencyAmount.fromRawAmount(o,a().BigInt(null!==(y=null===l||void 0===l||null===(R=l.result)||void 0===R?void 0:R[0])&&void 0!==y?y:0)),rewardRate:T,totalRewardRate:m,stakedAmount:p,totalStakedAmount:h,getHypotheticalRewardRate:_,active:S})}return e}),[]):[]),[c,t,d,x,r,m,h,l,p,o])}(),Y=null===V||void 0===V?void 0:V.filter((e=>a().greaterThan(e.stakedAmount.quotient,y.CL))),Z=(0,R.hM)(null===Y||void 0===Y?void 0:Y.map((e=>e.tokens))),X=Q.filter((e=>0===(null===Z||void 0===Z?void 0:Z.map((e=>e[1])).filter((t=>(null===t||void 0===t?void 0:t.liquidityToken.address)===e.liquidityToken.address)).length)));return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(D,{children:[(0,q.jsxs)(z,{children:[(0,q.jsx)(g.LR,{}),(0,q.jsx)(g.jK,{}),(0,q.jsx)(g.yj,{children:(0,q.jsxs)(j.mm,{gap:"md",children:[(0,q.jsx)(A.JA,{children:(0,q.jsx)(h.PR.DeprecatedWhite,{fontWeight:535,children:(0,q.jsx)(d.x6,{id:"Vsr1yC"})})}),(0,q.jsx)(A.JA,{children:(0,q.jsx)(h.PR.DeprecatedWhite,{fontSize:14,children:(0,q.jsx)(d.x6,{id:"vRS32S"})})}),(0,q.jsx)(h.Gr,{style:{color:e.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,q.jsx)(h.PR.DeprecatedWhite,{fontSize:14,children:(0,q.jsx)(d.x6,{id:"7bNFf2"})})})]})}),(0,q.jsx)(g.LR,{}),(0,q.jsx)(g.jK,{})]}),n?(0,q.jsx)(j.mm,{gap:"lg",justify:"center",children:(0,q.jsxs)(j.mm,{gap:"md",style:{width:"100%"},children:[(0,q.jsxs)(F,{style:{marginTop:"1rem"},padding:"0",children:[(0,q.jsx)(h.QZ,{children:(0,q.jsx)(h.PR.DeprecatedMediumHeader,{style:{marginTop:"0.5rem",justifySelf:"flex-start"},children:(0,q.jsx)(d.x6,{id:"MbHgIE"})})}),(0,q.jsxs)(P,{children:[(0,q.jsx)(H,{as:c.N_,padding:"6px 8px",to:"/add/v2/ETH",children:(0,q.jsx)(d.x6,{id:"ma87bD"})}),(0,q.jsx)($,{id:"find-pool-button",as:c.N_,to:"/pools/v2/find",padding:"6px 8px",children:(0,q.jsx)(x.EY,{fontWeight:535,fontSize:16,children:(0,q.jsx)(d.x6,{id:"SkceS7"})})}),(0,q.jsx)($,{id:"join-pool-button",as:c.N_,to:"/add/v2/ETH",padding:"6px 8px",children:(0,q.jsx)(x.EY,{fontWeight:535,fontSize:16,children:(0,q.jsx)(d.x6,{id:"knGjuL"})})})]})]}),t?O?(0,q.jsx)(K,{children:(0,q.jsx)(h.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,q.jsx)(w.nv,{children:(0,q.jsx)(d.x6,{id:"yQE2r9"})})})}):(null===Q||void 0===Q?void 0:Q.length)>0||(null===Z||void 0===Z?void 0:Z.length)>0?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(m.nR,{children:(0,q.jsx)(A.JA,{children:(0,q.jsx)(d.x6,{id:"vAuUUB",components:{0:(0,q.jsx)(h.Gr,{href:"https://v2.info.uniswap.org/account/"+t}),1:(0,q.jsx)("span",{})}})})}),X.map((e=>(0,q.jsx)(f.Ay,{pair:e},e.liquidityToken.address))),Z.map(((e,t)=>e[1]&&(0,q.jsx)(f.Ay,{pair:e[1],stakedBalance:Y[t].stakedAmount},Y[t].stakingRewardAddress))),(0,q.jsx)(A.Bp,{justify:"center",style:{width:"100%"},children:(0,q.jsxs)(m.fK,{as:c.N_,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,q.jsx)(u.A,{size:16,style:{marginRight:"8px"}}),(0,q.jsx)(d.x6,{id:"kBAezW"})]})})]}):(0,q.jsx)(K,{children:(0,q.jsx)(h.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,q.jsx)(d.x6,{id:"erwMRf"})})}):(0,q.jsx)(v.Ay,{padding:"40px",children:(0,q.jsx)(h.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,q.jsx)(d.x6,{id:"jWRT4F"})})})]})}):(0,q.jsx)(r.O,{})]}),(0,q.jsx)(k.j,{})]})}}}]);
//# sourceMappingURL=2911.56539bdd.chunk.js.map