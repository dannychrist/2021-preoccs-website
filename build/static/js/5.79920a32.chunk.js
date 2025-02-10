(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5,9],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(54),l=a(84);var r=i.a.memo(e=>{let{content:t,width:a}=e;return Object(l.b)("div",{css:l.a`
      height: 100%;
      width: ${a}px;
      background-image: url('${t}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `})}),c=a(52),s=a.n(c),d=a(53),m=a.n(d);const p=o.a.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`,u=o.b`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,f=o.b`
  0% { opacity: 1; }
  100% { opacity: 0;}
`,b=o.b`
  0% { opacity: 0; transform: scale(0.8);}
  100% { opacity: 1; transform: scale(1);}
  
`,h=o.a.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &.fadeIn {
    animation: ${u} 3s ease-in-out forwards;
    opacity: 1;
  }

  &.fadeOut {
    animation: ${f} 3s ease-in-out forwards;
    opacity: 0;
  }
`,w=o.a.img`
  position: absolute;
  width: calc(10% + 7vw);
  max-width: 28%;
  min-width: 22%;
  height: auto;
  opacity: 0;
  will-change: opacity, transform;

  &.melt-in:first-of-type {
    bottom: 15%;
    left: 10%;
    animation: ${b} 3s ease-out 1s forwards;
  }

  &.melt-in:last-of-type {
    top: 10%;
    right: 10%;
    animation: ${b} 3s ease-out 3s forwards;
  }

  /* 🖥️ Adjusted for small desktops/laptops */
  @media (max-width: 1280px) {
    width: calc(12% + 8vw);
    max-width: 32%;
  }

  /* 📱 Bigger images on tablets */
  @media (max-width: 1024px) {
    width: calc(18% + 10vw);
    max-width: 45%;
  }

  /* 📲 Bigger but controlled on smaller tablets */
  @media (max-width: 768px) {
    width: calc(22% + 12vw);
    max-width: 50%;
  }

  /* 📞 Largest but balanced size on mobile screens */
  @media (max-width: 500px) {
    width: 55%;
    max-width: 60%;
  }
`,g=o.a.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  animation: ${u} 3s ease-out 4s forwards;
`,v=o.a.p`
  font-size: 16px;
  font-weight: bold;
  color: #ddd;
  letter-spacing: 1px;
  margin-bottom: 8px;
`,E=o.a.a`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 14px 28px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  border-radius: 30px;
  transition: background 0.3s ease-in-out, opacity 0.3s ease-in-out;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.9;

  &:hover {
    background: rgba(0, 0, 0, 1);
    opacity: 1;
    animation: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;var x=e=>{let{slides:t,autoPlay:a=3}=e;const[o,l]=Object(n.useState)(0),[c,d]=Object(n.useState)(t.length-1),[u,f]=Object(n.useState)(!0),b=Object(n.useRef)(null),x=Object(n.useCallback)(()=>{f(!1),setTimeout(()=>{d(o),l(e=>(e+1)%t.length),f(!0)},5e3)},[o,t.length]);return Object(n.useEffect)(()=>(b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{x()},1e3*a+3e3),()=>clearTimeout(b.current)),[a,x]),i.a.createElement(i.a.Fragment,null,i.a.createElement("link",{rel:"preload",as:"image",href:t[0],type:"image/webp",fetchpriority:"high"}),i.a.createElement(p,null,i.a.createElement(h,{className:u?"":"fadeOut"},i.a.createElement(r,{content:t[c],loading:"lazy"})),i.a.createElement(h,{className:u?"fadeIn":""},i.a.createElement(r,{content:t[o],loading:0===o?"eager":"lazy"})),i.a.createElement(w,{src:s.a,alt:"Preoccs Home",className:"melt-in",fetchpriority:"high"}),i.a.createElement(w,{src:m.a,alt:"Ill At Ease Home",className:"melt-in"}),i.a.createElement(g,null,i.a.createElement(v,null,"NEW SINGLE / RECORD"),i.a.createElement(E,{href:"https://orcd.co/preoccsfocus",target:"_blank",rel:"noopener noreferrer"},'Stream "Focus" / Preorder Vinyl'))))};a(56);const y=[{label:"NA BOOKING",email:"bettsmarshallk@gmail.com"},{label:"EURO/UK BOOKING",email:"Bas@belmontbookings.nl"},{label:"BAND CONTACT",email:"Preoccupationsband@gmail.com"},{label:"PR",email:"Gracej@grandstandhq.com"}];var N=()=>i.a.createElement("div",{className:"main-contact-div"},i.a.createElement("div",{className:"contact-header-div"},i.a.createElement("h2",null,"CONTACT US")),y.map((e,t)=>i.a.createElement("div",{key:t,className:"contact-div",onClick:()=>window.location.href="mailto:"+e.email,role:"button",tabIndex:0,onKeyDown:t=>"Enter"===t.key&&(window.location.href="mailto:"+e.email)},i.a.createElement("p",null,e.label,i.a.createElement("i",{className:"fas fa-envelope"}))))),k=a(5);a(57);var O=e=>{const[t,a]=Object(n.useState)(!1);return i.a.createElement("div",{className:"featured-video-div"},!t&&i.a.createElement(k.a,{asOverlay:!0}),i.a.createElement("div",{className:"featured-video-header-div"},i.a.createElement("h2",null,"FEATURED VIDEO")),i.a.createElement("div",{className:"featured-video"},i.a.createElement("iframe",{className:"f-vid",src:"https://www.youtube-nocookie.com/embed/npLTTvKpxPU?si=CANALUDNfDihzBRD",title:"featured-video",alt:"featured-video",style:{border:"none"},allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true",onLoad:()=>{a(!0)},sandbox:"allow-scripts allow-same-origin allow-presentation allow-popups"})))},j=a(39),T=a(58),C=a.n(T),I=a(59),A=a.n(I),z=a(60),B=a.n(z);a(61);t.default=()=>{const e=[C.a,A.a,B.a];return i.a.createElement("div",{className:"home-container"},i.a.createElement(x,{slides:e}),i.a.createElement(O,null),i.a.createElement(j.default,null),i.a.createElement(N,null))}},35:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2);a(35);t.default=()=>{const e="/live"===Object(o.n)().pathname;return Object(n.useEffect)(()=>{if(!document.getElementById("seated-widget-script")){const e=document.createElement("script");return e.id="seated-widget-script",e.src="https://widget.seated.com/app.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}}},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"live-header"},i.a.createElement("h2",null,"LIVE")),i.a.createElement("div",{className:"live-div "+(e?"live-page":"")},i.a.createElement("div",{id:"seated-55fdf2c0","data-artist-id":"0fc46ade-871c-4157-b582-67efd4f0808d","data-css-version":"2"})))}},52:function(e,t,a){e.exports=a.p+"static/media/preoccs-home-removebg-preview.d10fe2ef.webp"},53:function(e,t,a){e.exports=a.p+"static/media/ill-at-ease-home-removebg-preview.133c429b.webp"},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/ill-at-ease-front.2239d42a.webp"},59:function(e,t,a){e.exports=a.p+"static/media/ill-at-ease-back.3b013d3a.webp"},60:function(e,t,a){e.exports=a.p+"static/media/ill-at-ease-inner.e0ae0f8c.webp"},61:function(e,t,a){}}]);
//# sourceMappingURL=5.79920a32.chunk.js.map