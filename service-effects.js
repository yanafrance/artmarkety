/* ArtmarketY — premium pastel service cards, v1.1 (slightly louder click). No external libraries. */
(()=>{
'use strict';
const css=`
.service-grid{gap:18px!important}
.service-card{--c1:#fff0f5;--c2:#f5cadb;--ink:#9f255a;isolation:isolate;overflow:hidden;min-height:230px;border:1px solid rgba(96,53,88,.12)!important;border-radius:18px;background:linear-gradient(140deg,var(--c1),var(--c2))!important;box-shadow:0 7px 22px rgba(42,24,63,.035);transition:transform .38s cubic-bezier(.2,.8,.2,1),box-shadow .38s,border-color .38s!important;-webkit-tap-highlight-color:transparent}
.service-card:before,.service-card:after{content:"";position:absolute;inset:-35%;z-index:-1;pointer-events:none;transition:opacity .5s,transform .8s cubic-bezier(.2,.8,.2,1)}
.service-card:before{opacity:.36;background:var(--texture);background-size:cover;transform:rotate(-9deg) scale(1)}
.service-card:after{inset:0;opacity:.2;background:linear-gradient(115deg,transparent 25%,rgba(255,255,255,.95) 43%,transparent 60%);transform:translateX(-110%)}
.service-card:is(:hover,:focus-visible){transform:translateY(-7px) scale(1.015)!important;box-shadow:0 20px 42px rgba(42,24,63,.14);border-color:color-mix(in srgb,var(--ink),white 40%)!important}
.service-card:is(:hover,:focus-visible):before{opacity:.84;transform:rotate(4deg) scale(1.18)}
.service-card:is(:hover,:focus-visible):after{opacity:.62;transform:translateX(110%)}
.service-card:active{transform:translateY(-1px) scale(.985)!important;transition-duration:.1s!important}
.service-card .number,.service-card .arrow{color:var(--ink)!important}
.service-card h3{font-size:clamp(1.16rem,1.5vw,1.38rem);position:relative;z-index:1}
.service-card p{color:#46516a!important;position:relative;z-index:1}
.service-card:nth-child(12n + 1){--c1:#fff0f4;--c2:#f3c5d9;--ink:#ae245f;--texture:repeating-radial-gradient(ellipse at 18% 0%,transparent 0 13px,rgba(255,255,255,.9) 14px 16px,transparent 17px 31px),linear-gradient(135deg,transparent 20%,rgba(240,117,166,.3) 75%)}
.service-card:nth-child(12n + 2){--c1:#f5efff;--c2:#dcd1f3;--ink:#7655a4;--texture:repeating-linear-gradient(145deg,transparent 0 11px,rgba(255,255,255,.75) 12px 16px,transparent 17px 34px),radial-gradient(ellipse at 80% 15%,#b3a0db,transparent 60%)}
.service-card:nth-child(12n + 3){--c1:#e8fbf5;--c2:#c1e8df;--ink:#227e72;--texture:linear-gradient(rgba(255,255,255,.65) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.65) 1px,transparent 1px),radial-gradient(circle at 80% 70%,#83d4c1,transparent 60%);background-size:23px 23px,23px 23px,auto}
.service-card:nth-child(12n + 4){--c1:#fff3eb;--c2:#fbd3c2;--ink:#b96c4e;--texture:repeating-radial-gradient(ellipse at 80% 70%,transparent 0 16px,rgba(255,255,255,.8) 17px 19px,transparent 20px 37px)}
.service-card:nth-child(12n + 5){--c1:#f4efff;--c2:#d9c9f3;--ink:#7856a2;--texture:repeating-linear-gradient(115deg,transparent 0 20px,rgba(255,255,255,.9) 21px 22px,transparent 23px 44px),linear-gradient(50deg,transparent,#bfa5e4,transparent)}
.service-card:nth-child(12n + 6){--c1:#e9f6ff;--c2:#c1def2;--ink:#327da2;--texture:radial-gradient(ellipse at 25% 20%,rgba(255,255,255,.95),transparent 40%),repeating-radial-gradient(ellipse at 95% 105%,transparent 0 18px,rgba(255,255,255,.85) 19px 21px,transparent 22px 39px)}
.service-card:nth-child(12n + 7){--c1:#fff0ee;--c2:#f5cdd1;--ink:#b05a70;--texture:repeating-linear-gradient(35deg,transparent 0 19px,rgba(255,255,255,.75) 20px 22px,transparent 23px 40px)}
.service-card:nth-child(12n + 8){--c1:#f0f9e9;--c2:#d5e9bd;--ink:#5f8751;--texture:repeating-radial-gradient(circle at 95% 5%,transparent 0 13px,rgba(255,255,255,.85) 14px 15px,transparent 16px 30px)}
.service-card:nth-child(12n + 9){--c1:#fff8e9;--c2:#f4dfb5;--ink:#9d7437;--texture:repeating-linear-gradient(130deg,transparent 0 13px,rgba(255,255,255,.85) 14px 15px,transparent 16px 30px)}
.service-card:nth-child(12n + 10){--c1:#edf5ff;--c2:#cfd8f6;--ink:#5970b0;--texture:linear-gradient(45deg,transparent 48%,rgba(255,255,255,.8) 49% 51%,transparent 52%),radial-gradient(circle at 85% 10%,#b6b5f5,transparent 65%);background-size:42px 42px,auto}
.service-card:nth-child(12n + 11){--c1:#fef0f7;--c2:#f1cde6;--ink:#a95b94;--texture:repeating-radial-gradient(ellipse at 10% 100%,transparent 0 20px,rgba(255,255,255,.8) 21px 23px,transparent 24px 42px)}
.service-card:nth-child(12n + 12){--c1:#edf9fa;--c2:#c6e8e6;--ink:#397f83;--texture:repeating-linear-gradient(165deg,transparent 0 15px,rgba(255,255,255,.9) 16px 18px,transparent 19px 36px)}
.service-sound-control{display:inline-flex;align-items:center;gap:9px;margin:0 0 22px;padding:9px 14px;border:1px solid #e6cfd9;border-radius:999px;background:#fff9fc;color:#74334f;font:600 12px 'DM Sans',sans-serif;cursor:pointer}
.service-sound-control:hover{background:#fff0f7}
.service-sound-control:focus-visible,.service-card:focus-visible{outline:3px solid #ae0053;outline-offset:3px}
@media(max-width:570px){.service-card{min-height:185px}.service-grid{gap:13px!important}}
@media(prefers-reduced-motion:reduce){.service-card,.service-card:before,.service-card:after{transition:none!important}.service-card:is(:hover,:focus-visible){transform:none!important}.service-card:after{display:none}}
`;
const style=document.createElement('style');style.id='artmarkety-service-effects';style.textContent=css;document.head.appendChild(style);
let enabled=false,ctx=null,lastClick=0;
try{enabled=localStorage.getItem('artmarkety-service-sound')==='on'}catch{}
function sound(){if(!enabled||Date.now()-lastClick<110)return;lastClick=Date.now();try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;ctx=ctx||new AC();if(ctx.state==='suspended')ctx.resume();const t=ctx.currentTime;const buffer=ctx.createBuffer(1,Math.round(ctx.sampleRate*.055),ctx.sampleRate);const data=buffer.getChannelData(0);for(let i=0;i<data.length;i++){let u=i/ctx.sampleRate;data[i]=(Math.random()*2-1)*Math.exp(-u*115)*.55+Math.sin(2*Math.PI*180*u)*Math.exp(-u*95)*.28}const src=ctx.createBufferSource();src.buffer=buffer;const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2300;const gain=ctx.createGain();gain.gain.value=.19;src.connect(lp).connect(gain).connect(ctx.destination);src.start(t);src.stop(t+.06)}catch{}}
function mount(){const grid=document.querySelector('#service-grid');if(!grid)return;const section=grid.closest('.services-section');if(!section)return;if(!section.querySelector('.service-sound-control')){const b=document.createElement('button');b.type='button';b.className='service-sound-control';b.setAttribute('aria-pressed',String(enabled));function label(){const fr=document.documentElement.lang!=='en';b.textContent=enabled?(fr?'♪ Son des cartes : activé':'♪ Card sound: on'):(fr?'♪ Activer le son des cartes':'♪ Enable card sound');b.setAttribute('aria-pressed',String(enabled))}label();b.addEventListener('click',()=>{enabled=!enabled;try{localStorage.setItem('artmarkety-service-sound',enabled?'on':'off')}catch{}label();if(enabled)sound()});grid.before(b)}grid.querySelectorAll('.service-card').forEach(card=>{if(card.dataset.fxBound)return;card.dataset.fxBound='1';card.addEventListener('click',sound);card.addEventListener('keydown',e=>{if(e.key==='Enter')sound()})});}
const mo=new MutationObserver(()=>{if(document.querySelector('#service-grid'))mount()});mo.observe(document.querySelector('#app')||document.body,{childList:true,subtree:true});mount();
})();
