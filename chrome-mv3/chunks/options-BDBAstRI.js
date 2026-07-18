import{C as e,D as t,E as n,T as r,a as i,b as a,c as o,d as s,f as c,g as l,h as u,i as d,k as f,l as p,m,n as h,o as g,p as _,r as v,t as y,u as b,w as x,y as S}from"./style-XuR2e07q.js";var C=x(`coins`,[[`path`,{d:`M13.744 17.736a6 6 0 1 1-7.48-7.48`,key:`bq4yh3`}],[`path`,{d:`M15 6h1v4`,key:`11y1tn`}],[`path`,{d:`m6.134 14.768.866-.5 2 3.464`,key:`17snzx`}],[`circle`,{cx:`16`,cy:`8`,r:`6`,key:`14bfc9`}]]),w=x(`database-arrow-up`,[[`path`,{d:`M19 22v-6`,key:`qhmiwi`}],[`path`,{d:`M21 12.536V5`,key:`zeza6i`}],[`path`,{d:`m22 19-3-3-3 3`,key:`rn6bg2`}],[`path`,{d:`M3 12A9 3 0 0 0 14.457 14.886`,key:`1941vg`}],[`path`,{d:`M3 5V19A9 3 0 0 0 13.318 21.968`,key:`1lyu4j`}],[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}]]),T=x(`hard-drive-download`,[[`path`,{d:`M12 2v8`,key:`1q4o3n`}],[`path`,{d:`m16 6-4 4-4-4`,key:`6wukr`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,key:`w68u3i`}],[`path`,{d:`M6 18h.01`,key:`uhywen`}],[`path`,{d:`M10 18h.01`,key:`h775k`}]]),E=f(t(),1),D=f(n(),1),O=b();function k({value:e,onChange:t,options:n,rippleMode:r}){return(0,O.jsx)(`div`,{className:`flex justify-center gap-4`,children:n.map(n=>(0,O.jsx)(p,{mode:r,isState:!0,onClick:()=>t(n.value),role:`radio`,"aria-checked":e===n.value,className:`
            px-4 py-2 rounded-xl
            border transition-all duration-200
            ${e===n.value?`bg-primary text-primary-title border-border shadow-md`:`bg-surface-container/30 hover:bg-surface-container-hover/30 border-border/20 cursor-pointer`}
          `,children:n.label},n.value))})}var A=[{name:`Ocean`,colors:{primary:`#0284c7`,secondary:`#06b6d4`,tertiary:`#38bdf8`,neutral:`#475569`,neutralVariant:`#64748b`,error:`#f43f5e`}},{name:`Forest`,colors:{primary:`#2e7d32`,secondary:`#43a047`,tertiary:`#81c784`,neutral:`#556b5d`,neutralVariant:`#70877b`,error:`#d32f2f`}},{name:`Sunset`,colors:{primary:`#ef6c00`,secondary:`#fb8c00`,tertiary:`#ffb74d`,neutral:`#6d4c41`,neutralVariant:`#8d6e63`,error:`#c62828`}},{name:`Lavender`,colors:{primary:`#7e57c2`,secondary:`#9575cd`,tertiary:`#b39ddb`,neutral:`#5f5a73`,neutralVariant:`#7d7890`,error:`#e53935`}},{name:`Cherry`,colors:{primary:`#c2185b`,secondary:`#e91e63`,tertiary:`#f48fb1`,neutral:`#5f4b56`,neutralVariant:`#7b6570`,error:`#b71c1c`}},{name:`Terminal`,colors:{primary:`#00c853`,secondary:`#64dd17`,tertiary:`#b2ff59`,neutral:`#37474f`,neutralVariant:`#546e7a`,error:`#ff5252`}}];function j({mode:t,setMode:n}){let{t:r}=e(),[a,s]=(0,E.useState)(()=>{let e=localStorage.getItem(`theme`);return e?JSON.parse(e).colors:{primary:`#0284c7`,secondary:`#06b6d4`,tertiary:`#38bdf8`,neutral:`#475569`,neutralVariant:`#64748b`,error:`#f43f5e`}}),c=[{label:r(`primaryLabel`),value:a.primary,onChange:e=>s({...a,primary:e})},{label:r(`secondaryLabel`),value:a.secondary,onChange:e=>s({...a,secondary:e})},{label:r(`tertiaryLabel`),value:a.tertiary,onChange:e=>s({...a,tertiary:e})},{label:r(`neutralLabel`),value:a.neutral,onChange:e=>s({...a,neutral:e})},{label:r(`neutralVariantLabel`),value:a.neutralVariant,onChange:e=>s({...a,neutralVariant:e})},{label:r(`errorLabel`),value:a.error,onChange:e=>s({...a,error:e})}];function l(){return c.map(e=>(0,O.jsx)(o,{isOptionsPage:!0,label:e.label,value:e.value,onChange:e.onChange},e.label))}return(0,E.useEffect)(()=>{d(i(a,g(t)))},[a,t]),(0,E.useEffect)(()=>{localStorage.setItem(`theme`,JSON.stringify({colors:a,mode:t}))},[a,t]),(0,E.useEffect)(()=>{if(t!==`system`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`);function n(){d(i(a,e.matches?`dark`:`light`))}return e.addEventListener(`change`,n),()=>{e.removeEventListener(`change`,n)}},[t,a]),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{className:`text-xl font-bold text-primary-title my-1`,children:r(`colorThemeTitle`)}),(0,O.jsx)(`p`,{className:`text-text/80`,children:r(`colorThemeDescription`)}),(0,O.jsx)(`div`,{className:`grid grid-cols-2 gap-4`,children:l()}),(0,O.jsx)(`div`,{className:`flex justify-center flex-wrap gap-4 my-4`,children:A.map(e=>(0,O.jsx)(p,{mode:`light`,isState:!0,onClick:()=>s(e.colors),style:{background:`
                radial-gradient(
                  circle at top left,
                  ${e.colors.primary},
                  transparent 45%
                ),
                radial-gradient(
                  circle at top right,
                  ${e.colors.secondary},
                  transparent 45%
                ),
                radial-gradient(
                  circle at bottom left,
                  ${e.colors.tertiary},
                  transparent 45%
                ),
                linear-gradient(
                  135deg,
                  ${e.colors.neutral},
                  ${e.colors.neutralVariant}
                )
              `},className:`
              flex justify-center items-center
              rounded-full w-18 h-18
              cursor-pointer
              hover:opacity-80
              hover:scale-105
              active:scale-95
              transition-all duration-200
            `,children:(0,O.jsx)(`span`,{className:`text-white font-bold opacity-100`,children:e.name})},e.name))}),(0,O.jsx)(`div`,{className:`my-4`,children:(0,O.jsx)(k,{value:t,rippleMode:g(t)===`dark`?`light`:`dark`,onChange:n,options:[{value:`light`,label:r(`light`)},{value:`dark`,label:r(`dark`)},{value:`system`,label:r(`system`)}]})})]})}function M({entries:t}){let{t:n}=e(),r=_();function i(e){let t=JSON.stringify(e,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`casebrary-backup.json`,i.click(),URL.revokeObjectURL(r)}let o=(0,E.useRef)(null);function s(){o.current?.click()}async function c(e){let t=e.target.files?.[0];if(!t)return;let n=await t.text();r(a(JSON.parse(n)))}return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{className:`text-xl font-bold text-primary-title my-1`,children:n(`backupTitle`)}),(0,O.jsx)(`p`,{className:`text-text/80`,children:n(`backupDescription`)}),(0,O.jsxs)(`div`,{className:`flex gap-2 my-3`,children:[(0,O.jsxs)(v,{title:`Entry`,isState:!0,onClick:()=>i(t),children:[(0,O.jsx)(T,{size:16,color:`var(--color-on-primary-container)`}),(0,O.jsx)(`span`,{className:`text-on-primary-container text-sm font-semibold`,children:n(`downloadEntries`)})]}),(0,O.jsx)(`input`,{ref:o,type:`file`,accept:`.json`,className:`hidden`,onChange:c}),(0,O.jsxs)(h,{title:`Import`,isState:!0,onClick:s,children:[(0,O.jsx)(w,{size:16,color:`var(--color-on-surface)`}),(0,O.jsx)(`span`,{className:`text-on-surface text-sm font-semibold`,children:n(`uploadEntriesIndexedDB`)})]})]})]})}function N({rippleMode:t}){let{t:n}=e(),r=[{id:1,shadow:`#4FC3F7`,shadowHover:`#7DD3FC`,delay:`${-Math.random()*40}s`,languages:[{code:`en`,label:`English`},{code:`ru`,label:`Русский`}]},{id:2,shadow:`#8BC34A`,shadowHover:`#A5D66A`,delay:`${-Math.random()*40}s`,languages:[{code:`hy`,label:`Արևելահայերեն`},{code:`hyw`,label:`Արեւմտահայերէն`},{code:`eo`,label:`Esperanto`}]},{id:3,shadow:`#F59E0B`,shadowHover:`#FBBF24`,delay:`${-Math.random()*40}s`,languages:[{code:`uk`,label:`Українська`},{code:`be`,label:`Беларуская`}]},{id:4,shadow:`#EC4899`,shadowHover:`#F472B6`,delay:`${-Math.random()*40}s`,languages:[{code:`es`,label:`Español`},{code:`ka`,label:`ქართული`}]},{id:5,shadow:`#94A3B8`,shadowHover:`#CBD5E1`,delay:`${-Math.random()*40}s`,languages:[{code:`system`,label:n(`system`)}]}];function i(e){if(e===`system`){let e=navigator.language.split(`-`)[0],t=u.includes(e)?e:`en`;document.documentElement.lang=t,l.changeLanguage(t),localStorage.setItem(`language`,`system`)}else document.documentElement.lang=e,l.changeLanguage(e),localStorage.setItem(`language`,e)}return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{className:`text-xl text-primary-title font-bold my-1`,children:n(`languageSwitcherTitle`)}),(0,O.jsx)(`p`,{className:`text-text/80`,children:n(`languageSwitcherDescription`)}),(0,O.jsx)(`div`,{className:`relative flex flex-row flex-wrap justify-center gap-4 items-center my-6`,children:r.map(e=>(0,O.jsxs)(`div`,{className:`
              language-card
              relative
              h-40 w-48
              rounded-3xl
              overflow-hidden
              border border-border/10
              transition-all duration-300
              flex flex-col justify-center items-center gap-2
              hover:scale-105 hover:bg-surface-container/10 hover:border-border/20
            `,children:[(0,O.jsx)(`div`,{className:`absolute inset-0 pointer-events-none`,children:(0,O.jsx)(`div`,{className:`language-glow`,style:{animationDelay:e.delay,"--glow-color":e.shadow,"--glow-hover":e.shadowHover}})}),e.languages.map(n=>(0,O.jsx)(p,{mode:g(t)===`light`?`dark`:`light`,onClick:()=>i(n.code),style:{color:t===`light`?s(e.shadowHover).darken(2).hex():s(e.shadow).darken(1).hex()},className:`
                  relative z-10
                  px-4 py-2
                  border border-border/10
                  transition-all duration-300
                  rounded-full
                  hover:scale-105 hover:bg-surface-container/10 hover:border-border/20 active:scale-95
                  cursor-pointer
                `,children:n.label},n.code))]}))})]})}function P({onClick:e,mode:t,className:n,children:r}){return(0,O.jsx)(p,{mode:t,className:`rainbow-btn
        relative
        p-[12px_24px]
        text-[18px]
        font-semibold
        bg-transparent
        cursor-pointer
        border-2
        border-transparent
        rounded-lg
        overflow-hidden
        hover:scale-110 active:scale-90
        transition-all
        duration-300

        before:content-['']
        before:absolute
        before:inset-0
        before:border-2
        before:border-transparent
        before:rounded-lg
        before:bg-clip-border
        ${n}
      `,onClick:e,children:r})}function F(){let{t}=e(),n=localStorage.getItem(`theme`),r=n?JSON.parse(n).colors:{primary:`#0284c7`,secondary:`#06b6d4`,tertiary:`#38bdf8`,neutral:`#475569`,neutralVariant:`#64748b`,error:`#f43f5e`},[a,o]=(0,E.useState)(`light`),[s,c]=(0,E.useState)(()=>{let e=localStorage.getItem(`theme`);return e?JSON.parse(e).mode:`system`});(0,E.useEffect)(()=>{if(s!==`system`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`);function t(){o(e.matches?`dark`:`light`),d(i(r,e.matches?`dark`:`light`))}return e.addEventListener(`change`,t),()=>{e.removeEventListener(`change`,t)}},[s,r]),(0,E.useEffect)(()=>{async function e(){let e=localStorage.getItem(`language`);if(e&&u.includes(e))document.documentElement.lang=e,l.changeLanguage(e);else{let e=navigator.language.split(`-`)[0],t=u.includes(e)?e:`en`;document.documentElement.lang=t,l.changeLanguage(t),localStorage.setItem(`language`,t)}}e()},[]);let f=_();(0,E.useEffect)(()=>{f(S())},[f]);let h=m(e=>e.entries.entries);return(0,O.jsxs)(`div`,{className:`
        absolute inset-0 z-50 overflow-y-auto
        bg-linear-to-br from-(--color-bg) via-(--color-primary-background) to-(--color-secondary-background)
        p-10
        transition-transform duration-300 ease-out
      `,children:[(0,O.jsx)(`h1`,{className:`text-3xl font-bold text-primary-title`,children:t(`optionsTitle`)}),(0,O.jsx)(`p`,{className:`text-text/80 my-1`,children:t(`welcomeToCasebrary`)}),(0,O.jsx)(`p`,{className:`text-text/80 my-1`,children:t(`welcomeMessage`)}),(0,O.jsx)(`p`,{className:`text-text/80 my-1`,children:t(`optionsDescription`)}),(0,O.jsx)(`h2`,{className:`text-2xl font-bold text-primary-title my-1`,children:t(`generalTitle`)}),(0,O.jsx)(`p`,{className:`text-text/80`,children:t(`generalDescription`)}),(0,O.jsx)(N,{rippleMode:a}),(0,O.jsx)(j,{mode:s,setMode:e=>{c(e),o(e)}}),(0,O.jsx)(M,{entries:h}),(0,O.jsx)(`h2`,{className:`text-2xl font-bold text-primary-title my-1`,children:t(`privacyPolicyTitle`)}),(0,O.jsx)(`p`,{className:`text-text/80`,children:t(`privacyPolicyDescription`)}),(0,O.jsxs)(`p`,{className:`text-text/80 my-2`,children:[(0,O.jsx)(`b`,{className:`font-bold`,children:t(`version`)}),(0,O.jsx)(`span`,{className:`text-sm bg-primary-container text-text px-2 py-1 rounded-full`,children:`v1.0.0`})]}),(0,O.jsxs)(`div`,{className:`flex gap-5 px-8 my-4`,children:[(0,O.jsxs)(p,{className:`
          flex items-center gap-2
          px-5 py-1
          text-white/70 text-[16px]
          bg-surface-container-filled hover:bg-surface-container-filled-hover
          rounded-xl cursor-pointer font-semibold text-sm
          border border-border/80
          shadow-sm hover:shadow-md hover:shadow-black/5
          hover:scale-[1.02] active:scale-[0.97] hover:-translate-y-0.5 active:translate-y-0
          transition-all duration-200 ease-out
        `,onClick:()=>setTimeout(()=>window.open(`https://github.com/ZeroaNinea/casebrary`,`_blank`),200),children:[(0,O.jsx)(`img`,{src:`./github.svg`,alt:`GitHub`,width:20}),(0,O.jsx)(`span`,{className:`font-bold`,children:`GitHub`})]}),(0,O.jsxs)(P,{className:`flex items-center gap-2`,onClick:()=>{},mode:g(a)===`light`?`dark`:`light`,children:[(0,O.jsx)(C,{size:20,color:`#e8a81e`}),t(`donate`)]})]})]})}var I=localStorage.getItem(`theme`);if(I){let e=JSON.parse(I);d(i(e.colors,e.mode))}else d(y);D.createRoot(document.getElementById(`root`)).render((0,O.jsx)(E.StrictMode,{children:(0,O.jsx)(r,{store:c,children:(0,O.jsx)(F,{})})}));