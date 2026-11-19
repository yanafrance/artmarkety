/* ArtmarketY — richer tactile sound for primary CTA buttons.
   No sound until user explicitly enables card sounds, if that preference exists.
   Does not affect navigation, card click handlers, or page layout. */
(()=>{'use strict';
let context;
function soundAllowed(){
  try { const setting=localStorage.getItem('artmarkety-service-sound'); return setting==='on'; }
  catch(e){return false;}
}
function isPrimaryButton(el){
  if(!el || el.closest('.service-card, .service-sound-control, .nav, .site-header, .lang-switch, .menu-toggle'))return false;
  return el.matches('.btn-main, .prestations-hero-button, .btn-primary, .cta-button, .primary-button, [data-premium-click]');
}
function play(){
  if(!soundAllowed())return;
  const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;
  try{
    context=context||new Audio();if(context.state==='suspended')context.resume();
    const t=context.currentTime;const dur=.115;
    const buffer=context.createBuffer(1,Math.ceil(context.sampleRate*dur),context.sampleRate);
    const arr=buffer.getChannelData(0);
    for(let i=0;i<arr.length;i++){
      const s=i/context.sampleRate;
      const tick=(Math.random()*2-1)*Math.exp(-s*95)*.58;
      const body=Math.sin(2*Math.PI*(235-65*s/dur)*s)*Math.exp(-s*38)*.36;
      const snap=(Math.random()*2-1)*Math.exp(-Math.max(0,s-.022)*145)*(s>.022? .18:0);
      arr[i]=tick+body+snap;
    }
    const src=context.createBufferSource();src.buffer=buffer;
    const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=3100;
    const gain=context.createGain();gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.36,t+.004);gain.gain.exponentialRampToValueAtTime(.0001,t+dur);
    src.connect(filter).connect(gain).connect(context.destination);src.start(t);src.stop(t+dur+.01);
  }catch(e){}
}
// Delegation survives dynamic language and content updates.
document.addEventListener('click',e=>{const target=e.target.closest('a,button,[role="button"]');if(isPrimaryButton(target))play()},true);
})();
