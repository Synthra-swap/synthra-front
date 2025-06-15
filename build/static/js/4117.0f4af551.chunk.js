"use strict";(self.webpackChunk_synthra_swap_synthra_front_end=self.webpackChunk_synthra_swap_synthra_front_end||[]).push([[4117],{28061:(e,t,A)=>{A.r(t),A.d(t,{default:()=>xe});var n=A(49849),r=A(4126),i=A(96410),o=A(24738),a=A(47608),d=A(33370);let s=function(e){return e.Primary="Primary",e.Secondary="Secondary",e}({});const l=i.default.div`
  display: flex;
  background: ${e=>{let{$isDarkMode:t,$backgroundImgSrc:A,$type:n,theme:r}=e;return t?`${r.surface2} ${A?` url(${A})`:""}`:`${n===s.Primary?"white":r.surface2} ${A?` url(${A})`:""}`}};
  background-size: auto 100%;
  background-position: right;
  background-repeat: no-repeat;
  background-origin: border-box;

  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.neutral1}};
  padding: 24px;
  height: 212px;
  border-radius: 24px;
  border: 1px solid ${e=>{let{theme:t,$type:A}=e;return A===s.Primary?"transparent":t.surface3}};
  transition: ${e=>{let{theme:t}=e;return`${t.transition.duration.medium} ${t.transition.timing.ease} border`}};

  &:hover {
    border: 1px solid ${e=>{let{theme:t,$isDarkMode:A}=e;return A?t.surface3:t.neutral3}};
  }
  @media screen and (min-width: ${o.LO.sm}px) {
    height: ${e=>{let{$backgroundImgSrc:t}=e;return t?360:260}}px;
  }
  @media screen and (min-width: ${o.LO.xl}px) {
    padding: 32px;
  }
`,g=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,c=i.default.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 535;

  @media screen and (min-width: ${o.LO.lg}px) {
    font-size: 28px;
    line-height: 36px;
  }
`,p=i.default.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  color: ${e=>{let{theme:t,type:A}=e;return((e,t)=>e===s.Secondary?t.neutral2:t.neutral1)(A,t)}};
  padding: 0 40px 0 0;
  max-width: 480px;

  @media screen and (min-width: ${o.LO.xl}px) {
    font-size: 20px;
    line-height: 28px;
    max-width: 480px;
  }
`,h=(0,i.default)(p)`
  color: ${e=>{let{theme:t}=e;return t.accent1}};
  font-weight: 535;
  margin: 24px 0 0;
  cursor: pointer;

  transition: ${e=>{let{theme:t}=e;return`${t.transition.duration.medium} ${t.transition.timing.ease} opacity`}};

  &:hover {
    opacity: 0.6;
  }
`,u=e=>{let{type:t=s.Primary,title:A,description:n,cta:i,to:o,external:u,backgroundImgSrc:x,icon:m}=e;const f=(0,a.hJ)();return(0,d.jsxs)(l,{as:u?"a":r.N_,to:u?void 0:o,href:u?o:void 0,target:u?"_blank":void 0,rel:u?"noopenener noreferrer":void 0,$backgroundImgSrc:x,$isDarkMode:f,$type:t,children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(c,{children:A}),m]}),(0,d.jsxs)(p,{type:t,children:[n,(0,d.jsx)(h,{type:t,children:i})]})]})};var x=A(54674),m=A(88178),f=A.n(m);function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},B.apply(this,arguments)}function w(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var b=(0,x.forwardRef)((function(e,t){var A=e.color,n=void 0===A?"currentColor":A,r=e.size,i=void 0===r?24:r,o=w(e,["color","size"]);return x.createElement("svg",B({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),x.createElement("polyline",{points:"4 17 10 11 4 5"}),x.createElement("line",{x1:"12",y1:"19",x2:"20",y2:"19"}))}));b.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},b.displayName="Terminal";const y=b;var I=A(58067);const C=A.p+"static/media/swapCard.1a0376fd97213efb0859.png",v=[{to:"/swap",title:"Swap tokens",description:"Buy, sell, and explore data token on Synthra.",cta:"Trade Tokens",darkBackgroundImgSrc:C,lightBackgroundImgSrc:C}],k=i.default.img`
  min-width: 20px;
  min-height: 20px;
  max-height: 48px;
  max-width: 48px;
`,Q=[{to:"/pools",title:"Earn",description:"Provide liquidity to pools on Synthra and earn fees on swaps.",lightIcon:(0,d.jsx)(k,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAYCAYAAABnRtT+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGpSURBVHgBzdbBUcJAFAbg9xLH8SZHj5RgCaQEG3DYk8N4sAS0AuUkngI2oB0QOqCElBBPjs4kz/cgODHJZjcxhPwXdpZk+di8t4DQYebL9R0A3fNwYHM9AmyShK5c6Ci+vxrECAEPz2rcdoEI6EDfg3jeGVIpL6KEHngYQc0g9CAvy/WUdrVaDMLi6I+7EpjmqEgboOQEGkQ69dOFMddKNLn2FtAgGmDIc0tu6Gl2snZNPvurITq44uEwXWBzmpAnjWG7hhbI64ALIyT0M8J6NSk76Dj4tgdKCODyy8VH2zWqgBPlhWX3WCMF+M07KKjCmwTj+Wvgm9bQAKMqoDWyEmgJ1QFjA9AKqQNKLfJLCBbQKuCt8jZ/ZuP8mvThNAVKs2wL3QCtBeTwrga8yCz9oIASeMKmwH0357s9c+GCuzSsA9RFu5M2QInUk25H2wBqkfK4bIBGaAvAUuS2nngXctOh/PmsOrBNUExINQEWkDqg6RwzQXlO3SjvHRoG2wJms20md/fThjHN/gP8RbYJPESQv/UoPUKy6Q1QUtbdvQJKnOIJ3y+g5AcNXVshcKhY4gAAAABJRU5ErkJggg==",alt:"Analytics"}),darkIcon:(0,d.jsx)(k,{src:"data:image/png;base64,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",alt:"Analytics"}),cta:"Provide liquidity"},{to:"https://docs.datadex.me",external:!0,title:"Build dApps",description:"Build apps and tools on the largest DeFi protocol on Synthra.",lightIcon:(0,d.jsx)(y,{color:I._k.neutral3,size:48}),darkIcon:(0,d.jsx)(k,{src:"data:image/png;base64,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",alt:"Developers"}),cta:"Developer docs"}];var D=A(50645),j=A(54563);const P="data:image/png;base64,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",Y=i.default.div`
  height: 340px;
  width: 100%;
  border-radius: 32px;
  max-width: 1440px;
  margin: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 48px;

  box-shadow: 0px 10px 24px rgba(51, 53, 72, 0.04);

  background: ${e=>{let{isDarkMode:t,theme:A}=e;return t?`url(${P}), linear-gradient(90deg, ${I.Tj.blueVibrant} 0%, ${I.Tj.purple300} 100%)`:`url(${P}), linear-gradient(90deg, ${(0,j.e$)(.1,A.accent1)} 0%, ${(0,j.a)(.25,A.accent1)} 100%);`}};

  @media screen and (min-width: ${o.LO.lg}px) {
    height: 140px;
    flex-direction: row;
  }
`,E=i.default.div`
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
`,G=i.default.div`
  font-weight: 535;
  font-size: 28px;
  line-height: 36px;

  @media screen and (min-width: ${o.LO.xl}px) {
    font-size: 28px;
    line-height: 36px;
  }
`,T=i.default.div`
  margin: 10px 10px 0 0;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;

  @media screen and (min-width: ${o.LO.xl}px) {
    font-size: 20px;
    line-height: 28px;
  }
`,S=i.default.div`
  width: 100%;
  display: flex;
  align-items: center;

  transition: ${e=>{let{theme:t}=e;return`${t.transition.duration.medium} ${t.transition.timing.ease} opacity`}};

  &:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: ${o.LO.lg}px) {
    width: auto;
  }
`,F=(0,i.default)(D.Wv)`
  color: white;
  border: 1px solid white;
`,K=()=>{const e=(0,a.hJ)();return(0,d.jsxs)(Y,{isDarkMode:e,children:[(0,d.jsxs)(E,{children:[(0,d.jsx)(G,{children:"Powered by the Synthra Protocol"}),(0,d.jsx)(T,{children:"The leading decentralized crypto trading protocol, governed by a global community."})]}),(0,d.jsx)(S,{children:(0,d.jsx)(F,{width:"200px",as:"a",href:"https://synthra.org",rel:"noopener noreferrer",target:"_blank",children:"Learn more"})})]})};var z=A(36794),O=A(93153),L=A(20571);function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},M.apply(this,arguments)}function H(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var W=(0,x.forwardRef)((function(e,t){var A=e.color,n=void 0===A?"currentColor":A,r=e.size,i=void 0===r?24:r,o=H(e,["color","size"]);return x.createElement("svg",M({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),x.createElement("circle",{cx:"12",cy:"12",r:"10"}),x.createElement("polyline",{points:"8 12 12 16 16 12"}),x.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}))}));W.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},W.displayName="ArrowDownCircle";const X=W;var V=A(85713),N=A(26467),R=A(73141),U=A(3405);const J=i.default.div`
  padding: ${e=>{let{theme:t}=e;return t.navHeight}}px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  overflow-x: hidden;
`,Z=i.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 100%;
  min-height: 550px;
  ${e=>{let{isDarkMode:t}=e;return t?i.css`
          background: linear-gradient(rgba(8, 10, 24, 0) 0%, rgb(8 10 24 / 100%) 45%);
        `:i.css`
          background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255 255 255 /100%) 45%);
        `}};
  z-index: ${U.M.under_dropdown};
  pointer-events: none;
  height: ${e=>{let{theme:t}=e;return`calc(100vh - ${t.mobileBottomBarHeight}px)`}};
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoint.md}}px) {
    height: 100vh;
  }
`,q=i.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow-y: hidden;
  height: ${e=>{let{theme:t}=e;return`calc(100vh - ${t.mobileBottomBarHeight}px)`}};
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoint.md}}px) {
    height: 100vh;
  }
`,$=i.default.div`
  position: absolute;
  top: 68px;
  bottom: 0;
  background: radial-gradient(
    75% 75% at 50% 0%,
    ${e=>{let{theme:t}=e;return t.accent1}} 0%,
    ${e=>{let{theme:t}=e;return t.accent2}} 100%
  );
  filter: blur(72px);
  border-radius: 24px;
  max-width: 480px;
  width: 100%;
  height: 100%;
`,_=i.default.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0 0 40px;
  max-width: min(720px, 90%);
  min-height: 535px;
  z-index: ${U.M.under_dropdown};
  transition: ${e=>{let{theme:t}=e;return`${t.transition.duration.medium} ${t.transition.timing.ease} opacity`}};
  height: ${e=>{let{theme:t}=e;return`calc(100vh - ${t.navHeight+t.mobileBottomBarHeight}px)`}};
  pointer-events: none;
  * {
    pointer-events: auto;
  }
`,ee=i.default.h1`
  color: transparent;
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  text-align: center;
  margin: 0 0 24px;
  ${e=>{let{isDarkMode:t}=e;return t?i.css`
          background: linear-gradient(
            20deg,
            ${e=>{let{theme:t}=e;return(0,j.a)(.5,(0,j.aq)(290,t.accent1))}} 10%,
            ${e=>{let{theme:t}=e;return t.accent1}} 100%
          );
        `:i.css`
          background: linear-gradient(
            20deg,
            ${e=>{let{theme:t}=e;return t.accent1}} 10%,
            ${e=>{let{theme:t}=e;return(0,j.a)(.4,(0,j.aq)(300,t.accent1))}} 100%
          );
        `}};
  background-clip: text;
  -webkit-background-clip: text;

  ${e=>{let{$visible:t}=e;return t?i.css`
          ${R.bo}
        `:"opacity: 0;"}}

  @media screen and (min-width: ${o.LO.sm}px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media screen and (min-width: ${o.LO.md}px) {
    font-size: 64px;
    line-height: 72px;
  }
`,te=i.default.div`
  color: ${e=>{let{theme:t}=e;return t.neutral2}};
  font-size: 16px;
  line-height: 24px;
  font-weight: 535;
  text-align: center;
  max-width: 500px;
  margin: 0 0 32px;

  @media screen and (min-width: ${o.LO.md}px) {
    font-size: 20px;
    line-height: 28px;
  }
`,Ae=i.default.div`
  display: flex;
  justify-content: center;

  ${e=>{let{$visible:t}=e;return t?i.css`
          ${R.bo}
        `:"opacity: 0;"}}
`,ne=(0,i.default)(D.SC)`
  padding: 16px 0px;
  border-radius: 24px;
`,re=(0,i.default)(ne)`
  background: linear-gradient(
    93.06deg,
    ${e=>{let{theme:t}=e;return t.accent1}} 2.66%,
    ${e=>{let{theme:t}=e;return(0,j.a)(.3,t.accent1)}} 98.99%
  );
  border: none;
  color: ${e=>{let{theme:t}=e;return t.white}};
  transition: ${e=>{let{theme:t}=e;return`all ${t.transition.duration.medium} ${t.transition.timing.ease}`}};

  &:hover {
    box-shadow: 0px 4px 20px 0px ${e=>{let{theme:t}=e;return t.accent1}}40;
    
    //shadow color
    background: linear-gradient(
      93.06deg,
      ${e=>{let{theme:t}=e;return t.accent1}} 2.66%,
      ${e=>{let{theme:t}=e;return(0,j.a)(.3,t.accent1)}} 98.99%
    );
    border: none;
    color: ${e=>{let{theme:t}=e;return t.white}};
    transform: translateY(-4px);
    transition: ${e=>{let{theme:t}=e;return`all ${t.transition.duration.medium} ${t.transition.timing.ease}`}};

  }
`,ie=i.default.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 535;
  white-space: nowrap;

  @media screen and (min-width: ${o.LO.sm}px) {
    font-size: 20px;
  }
`,oe=i.default.span`
  max-width: 300px;
  width: 100%;
  pointer-events: auto;
`,ae=i.default.div`
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.neutral3}};
  cursor: pointer;
  font-size: 20px;
  font-weight: 535;
  margin: 36px 0;
  display: flex;
  visibility: hidden;
  pointer-events: auto;
  @media screen and (min-width: ${o.LO.sm}px) {
    visibility: visible;
  }

  transition: ${e=>{let{theme:t}=e;return`${t.transition.duration.medium} ${t.transition.timing.ease} opacity`}};

  &:hover {
    opacity: 0.6;
  }
`,de=(0,i.default)(X)`
  margin-left: 14px;
  size: 20px;
`,se=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 5rem;
  width: 100%;
  ${e=>{let{isDarkMode:t}=e;return t?i.css`
          background: linear-gradient(179.82deg, rgba(0, 0, 0, 0) 0.16%, #050026 99.85%);
        `:i.css`
          background: linear-gradient(179.82deg, rgba(255, 255, 255, 0) 0.16%, #eaeaea 99.85%);
        `}};
  @media screen and (min-width: ${o.LO.md}px) {
    padding: 0 96px 5rem;
  }
`,le=i.default.div`
  display: grid;
  gap: 12px;
  width: 100%;
  padding: 24px 0 0;
  max-width: 1440px;
  scroll-margin: ${e=>{let{theme:t}=e;return`${t.navHeight}px 0 0`}};

  grid-template-columns: 1fr;
  @media screen and (min-width: ${o.LO.sm}px) {
    // At this screen size, we show up to 2 columns.
    grid-template-columns: ${e=>{let{cols:t}=e;return Array.from(Array(2===t?2:1)).map((()=>"1fr")).join(" ")}};
    gap: 32px;
  }

  @media screen and (min-width: ${o.LO.lg}px) {
    // at this screen size, always show the max number of columns
    grid-template-columns: ${e=>{let{cols:t}=e;return Array.from(Array(t)).map((()=>"1fr")).join(" ")}};
    gap: 32px;
  }
`,ge=i.default.div`
  height: ${e=>{let{theme:t}=e;return`calc(100vh - ${t.mobileBottomBarHeight}px)`}};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`,ce=i.css`
  * {
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    transition: ${e=>{let{theme:t}=e;return`transform ${t.transition.duration.medium} ${t.transition.timing.ease}`}};
  }
`,pe=i.css`
  text-decoration: none;
  max-width: 480px;
  width: 100%;
`,he=(0,i.default)(O.Ay)`
  ${ce}
  &:hover {
    border: 1px solid ${e=>{let{theme:t}=e;return t.accent1}};
  }
`,ue=(0,i.default)(r.N_)`
  ${pe}
`;function xe(){const e=(0,a.hJ)(),t=(0,x.useRef)(null),A=(0,N.G)((e=>e.user.selectedWallet)),r=v,i=Q,[o]=(0,z.OL)(),l=(0,V.Zp)();(0,x.useEffect)((()=>{o&&setTimeout((()=>{l("/swap")}),R.YD.fast)}),[o,l]);const g=(0,V.zy)(),c=(0,L.parse)(g.search,{ignoreQueryPrefix:!0});return A&&!c.intro?(0,d.jsx)(V.C5,{to:{...g,pathname:"/swap"},replace:!0}):(0,d.jsxs)(J,{"data-testid":"landing-page",children:[(0,d.jsx)(ge,{children:(0,d.jsx)(ue,{to:"/swap",children:(0,d.jsx)(he,{})})}),(0,d.jsx)(Z,{isDarkMode:e}),(0,d.jsx)(q,{children:(0,d.jsx)($,{})}),(0,d.jsxs)(_,{isDarkMode:e,children:[(0,d.jsx)(ee,{isDarkMode:e,$visible:!0,children:(0,d.jsx)(n.x6,{id:"7CFPkr"})}),(0,d.jsx)(Ae,{$visible:!0,children:(0,d.jsx)(te,{children:(0,d.jsx)(n.x6,{id:"lBOnwj"})})}),(0,d.jsx)(oe,{children:(0,d.jsx)(re,{as:ue,to:"/swap",children:(0,d.jsx)(ie,{children:(0,d.jsx)(n.x6,{id:"ZDIydz"})})})}),(0,d.jsxs)(ae,{onClick:()=>{var e;null===t||void 0===t||null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},children:[(0,d.jsx)(n.x6,{id:"zwWKhA"}),(0,d.jsx)(de,{})]})]}),(0,d.jsxs)(se,{isDarkMode:e,children:[(0,d.jsx)(le,{cols:r.length,ref:t,children:r.map((t=>{let{darkBackgroundImgSrc:A,lightBackgroundImgSrc:n,...r}=t;return(0,x.createElement)(u,{...r,backgroundImgSrc:e?A:n,key:r.title})}))}),(0,d.jsx)(le,{cols:i.length,children:i.map((t=>{let{darkIcon:A,lightIcon:n,...r}=t;return(0,x.createElement)(u,{...r,icon:e?A:n,key:r.title,type:s.Secondary})}))}),(0,d.jsx)(K,{})]})]})}}}]);
//# sourceMappingURL=4117.0f4af551.chunk.js.map