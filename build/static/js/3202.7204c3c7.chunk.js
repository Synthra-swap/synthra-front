"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[3202],{3202:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Fe});var n=r(49849),i=r(54644),o=r(12763),l=r(38338),a=r(70623),s=r(85713);var d=r(20308),c=r(54674);const u=e=>{const[t,r]=(0,c.useState)(Date.now());return(0,d.A)((0,c.useCallback)((()=>{r(Date.now())}),[]),e),t};var p=r(67531),h=r(55815),x=r.n(h),f=r(96410),m=r(33121),g=r(17516),v=r(84522),j=r(11549),w=r(26047),b=r(24738),y=r(33370);const C=f.default.div`
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,$=(0,f.default)(w.A)`
  color: ${e=>{let{theme:t}=e;return t.deprecated_accentWarning}};
`,k=(0,f.default)(m.Gr)`
  color: ${e=>{let{theme:t}=e;return t.black}};
  text-decoration: underline;
`,z=f.default.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,A=f.default.div`
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,E=f.default.div`
  background-color: ${e=>{let{theme:t}=e;return t.surface1}};
  border-radius: 12px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  bottom: 60px;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${b.FI.deprecated_upToMedium}px) {
    display: block;
  }
`;function I(){const{chainId:e}=(0,i.useWeb3React)(),t=(0,l.Ew)(e),r=null===t||void 0===t?void 0:t.label;return(0,y.jsxs)(E,{children:[(0,y.jsxs)(z,{children:[(0,y.jsx)($,{}),(0,y.jsx)(A,{children:(0,y.jsx)(n.x6,{id:"3xf/uJ"})})]}),(0,y.jsxs)(C,{children:[e===j.ChainId.MAINNET?(0,y.jsx)(n.x6,{id:"iXzD8t"}):(0,y.jsx)(n.x6,{id:"3Fxw1j",values:{label:r}})," ",void 0!==t.statusPage&&(0,y.jsxs)("span",{children:[(0,y.jsx)(n.x6,{id:"IHlLC8"})," ",(0,y.jsx)(k,{href:t.statusPage||"",children:(0,y.jsx)(n.x6,{id:"jqVo/k"})})]})]})]})}const _=f.default.div`
  align-items: center;
  bottom: 0;
  color: ${e=>{let{theme:t}=e;return t.neutral3}};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoint.md}}px) {
    display: flex;
  }
`,M=(0,f.default)(m.PR.DeprecatedSmall)`
  color: ${e=>{let{theme:t,warning:r}=e;return r?t.deprecated_yellow3:t.success}};
  transition: opacity 0.25s ease;
  opacity: ${e=>{let{breathe:t,hovering:r}=e;return r?.7:t?1:.5}};
  :hover {
    opacity: 1;
  }

  a {
    color: unset;
  }
  a:hover {
    text-decoration: none;
    color: unset;
  }
`,O=f.default.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${e=>{let{theme:t,warning:r}=e;return r?t.deprecated_yellow3:t.success}};
  transition: 250ms ease background-color;
`,S=f.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,T=f.default.div`
  animation: ${S} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${e=>{let{theme:t,warning:r}=e;return r?t.deprecated_yellow3:t.success}};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`,N=x()("10m"),L=x()("10s");function H(){var e,t;const{chainId:r}=(0,i.useWeb3React)(),d=(0,p.Ay)(),[h,x]=(0,c.useState)(!1),[f,j]=(0,c.useState)(!1),w=u(L),b=(0,a.A)(),C=function(){const{pathname:e}=(0,s.zy)();return e.endsWith("/")}(),$=null!==(e=r?null===(t=(0,l.Qr)(r))||void 0===t?void 0:t.blockWaitMsBeforeWarning:N)&&void 0!==e?e:N,k=Boolean(!!b&&w-b.mul(1e3).toNumber()>$);(0,c.useEffect)((()=>{if(!d)return;x(!0);const e=setTimeout((()=>x(!1)),1e3);return()=>{clearTimeout(e)}}),[d]);const z=(0,c.useMemo)((()=>r&&d?(0,g.a)(r,d.toString(),g.u.BLOCK):""),[d,r]);return C?null:(0,y.jsxs)(o.Bp,{children:[(0,y.jsxs)(_,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[(0,y.jsx)(M,{breathe:h,hovering:f,warning:k,children:(0,y.jsx)(m.Gr,{href:z,children:(0,y.jsxs)(v.PD,{text:(0,y.jsx)(n.x6,{id:"MCr7bN"}),children:[d,"\u2002"]})})}),(0,y.jsx)(O,{warning:k,children:h&&(0,y.jsx)(T,{warning:k})})," "]}),k&&(0,y.jsx)(I,{})]})}var P=r(58938),W=r(3405),R=r(36794),B=r(75423),Z=r(4862),F=r(91168);const D=r.p+"static/media/blank_token.1870729478dcddb2cac513635621d4c9.svg";var q;function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K.apply(null,arguments)}function V(e,t){let{title:r,titleId:n,...i}=e;return c.createElement("svg",K({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,q||(q=c.createElement("path",{d:"M17 3H7C5 3 4 4 4 6V18C4 20 5 21 7 21H17C19 21 20 20 20 18V6C20 4 19 3 17 3ZM8 16.75C7.586 16.75 7.25 16.414 7.25 16C7.25 15.586 7.586 15.25 8 15.25C8.414 15.25 8.75 15.586 8.75 16C8.75 16.414 8.414 16.75 8 16.75ZM8 12.75C7.586 12.75 7.25 12.414 7.25 12C7.25 11.586 7.586 11.25 8 11.25C8.414 11.25 8.75 11.586 8.75 12C8.75 12.414 8.414 12.75 8 12.75ZM8 8.75C7.586 8.75 7.25 8.414 7.25 8C7.25 7.586 7.586 7.25 8 7.25C8.414 7.25 8.75 7.586 8.75 8C8.75 8.414 8.414 8.75 8 8.75ZM16 16.75H11C10.586 16.75 10.25 16.414 10.25 16C10.25 15.586 10.586 15.25 11 15.25H16C16.414 15.25 16.75 15.586 16.75 16C16.75 16.414 16.414 16.75 16 16.75ZM16 12.75H11C10.586 12.75 10.25 12.414 10.25 12C10.25 11.586 10.586 11.25 11 11.25H16C16.414 11.25 16.75 11.586 16.75 12C16.75 12.414 16.414 12.75 16 12.75ZM16 8.75H11C10.586 8.75 10.25 8.414 10.25 8C10.25 7.586 10.586 7.25 11 7.25H16C16.414 7.25 16.75 7.586 16.75 8C16.75 8.414 16.414 8.75 16 8.75Z",fill:"currentColor"})))}const Q=c.forwardRef(V);r.p;var U=r(24357),G=r(9836),J=r(52481),X=r(9844),Y=r(88178),ee=r.n(Y);function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te.apply(this,arguments)}function re(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var ne=(0,c.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,l=re(e,["color","size"]);return c.createElement("svg",te({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),c.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),c.createElement("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),c.createElement("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),c.createElement("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),c.createElement("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),c.createElement("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),c.createElement("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),c.createElement("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"}))}));ne.propTypes={color:ee().string,size:ee().oneOfType([ee().string,ee().number])},ne.displayName="Loader";const ie=ne,oe=(0,f.default)(Q)`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
`,le=f.default.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  position: relative;
  top: 0;
  left: 0;
  img:nth-child(n) {
    width: 19px;
    height: 40px;
    object-fit: cover;
  }
  img:nth-child(1) {
    border-radius: 20px 0 0 20px;
    object-position: 0 0;
  }
  img:nth-child(2) {
    border-radius: 0 20px 20px 0;
    object-position: 100% 0;
  }
`,ae=f.default.div`
  position: relative;
  top: 0;
  left: 0;
`,se=f.default.img`
  border-radius: 8px;
  height: 40px;
  width: 40px;
`,de=f.default.img`
  height: 14px;
  width: 14px;
`,ce=f.default.img`
  height: 100%;
  width: 100%;
`,ue=f.default.img`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
  border-radius: 50%;
`,pe=f.default.div`
  background-color: ${e=>{let{theme:t,hasSquareLogo:r}=e;return r?t.surface2:t.neutral1}};
  border-radius: 2px;
  height: 16px;
  left: 60%;
  position: absolute;
  top: 60%;
  outline: 2px solid ${e=>{let{theme:t}=e;return t.surface1}};
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function he(e){let{logo1:t,onError1:r,logo2:n,onError2:i,size:o}=e;return(0,y.jsxs)(le,{children:[(0,y.jsx)(ue,{size:o,src:null!==t&&void 0!==t?t:D,onError:r}),(0,y.jsx)(ue,{size:o,src:null!==n&&void 0!==n?n:D,onError:i})]})}function xe(e){var t,r,n,i,o,l;let{chainId:a,currencies:s,backupImages:d,size:c}=e;const[u,p]=(0,J.A)(null===s||void 0===s||null===(t=s[0])||void 0===t?void 0:t.wrapped.address,a,null===s||void 0===s||null===(r=s[0])||void 0===r?void 0:r.isNative,null===d||void 0===d?void 0:d[0]),[h,x]=(0,J.A)(null===s||void 0===s||null===(n=s[1])||void 0===n?void 0:n.wrapped.address,a,null===s||void 0===s||null===(i=s[1])||void 0===i?void 0:i.isNative,null===d||void 0===d?void 0:d[1]);return 1===s.length&&u?(0,y.jsx)(ue,{size:c,src:u,onError:p}):s.length>1?(0,y.jsx)(he,{logo1:u,onError1:p,logo2:h,onError2:x,size:c}):(0,y.jsx)(U.h,{size:c,children:null===(o=s[0])||void 0===o||null===(l=o.symbol)||void 0===l?void 0:l.toUpperCase().replace("$","").replace(/\s+/g,"").slice(0,3)})}function fe(e){let{accountAddress:t,size:r}=e;const{avatar:n,loading:i}=(0,X.A)(t,!1);return i?(0,y.jsx)(ie,{size:r}):n?(0,y.jsx)(se,{src:n,alt:"avatar"}):(0,y.jsx)(G.F,{size:40,address:t})}function me(e){let{chainId:t}=e;if(t===j.ChainId.MAINNET)return null;const{squareLogoUrl:r,logoUrl:n}=(0,l.Qr)(t),i=null!==r&&void 0!==r?r:n;return(0,y.jsx)(pe,{hasSquareLogo:!!r,children:r?(0,y.jsx)(ce,{src:i,alt:"chainLogo"}):(0,y.jsx)(de,{src:i,alt:"chainLogo"})})}function ge(e){return(0,y.jsxs)(ae,{children:[ve(e),(0,y.jsx)(me,{chainId:e.chainId})]})}function ve(e){let{chainId:t,accountAddress:r,currencies:n,images:i,size:o="40px"}=e;return r?(0,y.jsx)(fe,{accountAddress:r,size:o}):n&&n.length?(0,y.jsx)(xe,{chainId:t,currencies:n,backupImages:i,size:o}):1===(null===i||void 0===i?void 0:i.length)?(0,y.jsx)(ue,{size:o,src:null!==(l=i[0])&&void 0!==l?l:D}):i&&(null===i||void 0===i?void 0:i.length)>=2?(0,y.jsx)(he,{logo1:i[0],logo2:i[i.length-1],size:o}):(0,y.jsx)(oe,{width:o,height:o});var l}const je=(0,f.default)(o.Ay)`
  gap: 12px;
  height: 68px;
  padding: 0 16px;

  transition: ${e=>{let{theme:t}=e;return`${t.transition.duration.medium} ${t.transition.timing.ease} background-color`}};

  ${e=>{let{onClick:t}=e;return t&&"cursor: pointer"}};

  &:hover {
    cursor: pointer;
  }
`,we=(0,f.default)(B.Ay)`
  align-items: flex-end;
`;function be(e){let{"data-testid":t,left:r,title:n,descriptor:i,right:o,onClick:l}=e;return(0,y.jsxs)(je,{"data-testid":t,onClick:l,children:[r,(0,y.jsxs)(B.mm,{grow:!0,children:[n,i]}),o&&(0,y.jsx)(we,{children:o})]})}var ye=r(4362);var Ce=r(17567),$e=r(98438),ke=r(99756),ze=r(47519),Ae=r(18655),Ee=r(85177);const Ie=(0,f.default)(ke.A)`
  position: absolute;
  right: ${e=>{let{$padding:t}=e;return`${t}px`}};
  top: ${e=>{let{$padding:t}=e;return`${t}px`}};
  color: ${e=>{let{theme:t}=e;return t.neutral2}};

  :hover {
    cursor: pointer;
  }
`,_e=f.default.div`
  display: inline-block;
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.surface1}};
  position: relative;
  border: 1px solid ${e=>{let{theme:t}=e;return t.surface3}};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${e=>{let{theme:t}=e;return t.deprecated_deepShadow}};
  transition: ${e=>{let{theme:t}=e;return`visibility ${t.transition.duration.fast} ease-in-out`}};

  padding: ${e=>{let{padded:t}=e;return t?"20px 35px 20px 20px":"2px 0px"}};

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
  min-width: 290px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`}}
`,Me=(0,f.default)(o.eF)`
  flex-wrap: nowrap;
`,Oe=(0,f.default)(B.mm)`
  margin: 0 12px;
`,Se=(0,f.default)((function(e){let{size:t="16px",...r}=e;const n=(0,f.useTheme)();return(0,y.jsx)(ye.M,{viewBox:"0 0 16 16",fill:n.deprecated_accentWarning,xmlns:"http://www.w3.org/2000/svg",size:t,...r,children:(0,y.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"})})}))`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function Te(e){let{chainId:t,onClose:r}=e;const i=(0,l.Qr)(t);return(0,y.jsxs)(_e,{padded:!0,children:[(0,y.jsx)(Ie,{$padding:20,onClick:r}),(0,y.jsxs)(Me,{gap:"12px",children:[(0,y.jsx)(Se,{}),(0,y.jsxs)(Oe,{gap:"sm",children:[(0,y.jsx)(m.PR.SubHeader,{color:"neutral2",children:(0,y.jsx)(n.x6,{id:"HV8AwX"})}),(0,y.jsx)(m.PR.BodySmall,{color:"neutral2",children:(0,y.jsx)(n.x6,{id:"xTc6i1",values:{0:i.label}})})]})]})]})}const Ne=(0,f.default)(m.PR.BodySmall)`
  ${m.rg}
`;function Le(e){let{activity:t,onClick:r,onClose:n}=e;const i=t.status===Ae.x8.Confirmed&&!t.cancelled,{ENSName:o}=(0,$e.A)(null===t||void 0===t?void 0:t.otherAccount);return(0,y.jsxs)(_e,{children:[(0,y.jsx)(Ie,{$padding:16,onClick:n}),(0,y.jsx)(be,{left:i?(0,y.jsx)(B.Ay,{children:(0,y.jsx)(ge,{chainId:t.chainId,currencies:t.currencies,images:t.logos,accountAddress:t.otherAccount})}):(0,y.jsx)(Se,{}),title:(0,y.jsx)(m.PR.SubHeader,{children:t.title}),descriptor:(0,y.jsxs)(Ne,{color:"neutral2",children:[t.descriptor,null!==o&&void 0!==o?o:t.otherAccount]}),onClick:r})]})}function He(e){let{chainId:t,hash:r,onClose:n}=e;const i=(0,ze.OA)(r),o=(0,Ce.hH)(),{formatNumber:l}=(0,Ee.kc)();if(!i)return null;const a=(0,F.$2)(i,t,o,l);if(!a)return null;return(0,y.jsx)(Le,{activity:a,onClose:n,onClick:()=>window.open((0,g.a)(a.chainId,a.hash,g.u.TRANSACTION),"_blank")})}function Pe(e){let{removeAfterMs:t,content:r,popKey:n}=e;const o=(0,P.uP)(),l=()=>o(n);(0,c.useEffect)((()=>{if(null===t)return;const e=setTimeout((()=>{o(n)}),t);return()=>{clearTimeout(e)}}),[n,t,o]);const{chainId:a}=(0,i.useWeb3React)();switch(r.type){case Z.nl.Transaction:return a?(0,y.jsx)(He,{hash:r.hash,chainId:a,onClose:l}):null;case Z.nl.FailedSwitchNetwork:return(0,y.jsx)(Te,{chainId:r.failedSwitchNetwork,onClose:l})}}const We=f.default.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;
  padding-left: 20px;
  padding-right: 20px;

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `}};
`,Re=f.default.div`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Be=(0,f.default)(B.mm)`
  position: fixed;
  top: ${e=>{let{drawerOpen:t}=e;return 64+(t?-50:0)+"px"}};
  right: 1rem;
  max-width: 348px !important;
  width: 100%;
  z-index: ${W.M.modal};
  transition: ${e=>{let{theme:t}=e;return`top ${t.transition.timing.inOut} ${t.transition.duration.slow}`}};

  ${e=>{let{theme:t}=e;return t.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `}};
`;function Ze(){const[e]=(0,R.OL)(),t=(0,P.JS)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Be,{gap:"20px",drawerOpen:e,"data-testid":"popups",children:t.map((e=>(0,y.jsx)(Pe,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))}),(null===t||void 0===t?void 0:t.length)>0&&(0,y.jsx)(We,{"data-testid":"popups",children:(0,y.jsx)(Re,{children:t.slice(0).reverse().map((e=>(0,y.jsx)(Pe,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))})})]})}function Fe(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Ze,{}),(0,y.jsx)(H,{})]})}}}]);
//# sourceMappingURL=3202.7204c3c7.chunk.js.map