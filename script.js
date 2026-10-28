/* Alfa School – shared layout, data, page views and forms.
   Edit COURSES, SOC, RES and the contact details below. */
const HEADER=`<header><div class="wrap bar">
 <a href="index.html" class="logo" id="logo" aria-label="Alfa School home"></a>
 <nav id="nav">
  <a href="index.html">Home</a><a href="courses.html">Courses</a><a href="resources.html">Resources</a><a href="community.html">Community</a><a href="about.html">About</a><a href="contact.html">Contact</a>
 </nav>
 <div class="auth" id="auth"></div>
 <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><svg class="i" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
</div></header>`;
const FOOTER=`<footer><div class="wrap">
 <div class="fgrid">
  <div><div class="logo" id="flogo"></div><p>Alfa School is a free school for web development, AI tools and AI engineering. No fees, no limits.</p><div class="social" id="fsocial" style="margin-top:1rem"></div></div>
  <div><h4>Explore</h4><ul><li><a href="courses.html">Courses</a></li><li><a href="resources.html">Free resources</a></li><li><a href="community.html">Community</a></li><li><a href="about.html">About</a></li></ul></div>
  <div><h4>Contact</h4><ul><li><a href="mailto:hello@alfaschool.com">hello@alfaschool.com</a></li><li><a href="https://wa.me/252000000000">WhatsApp</a></li><li><a href="tel:+252000000000">+252 00 000 0000</a></li></ul></div>
 </div>
 <div class="copy"><span>© <span id="yr"></span> Alfa School. Free for everyone.</span><span>Built with HTML, CSS and JavaScript</span></div>
</div></footer>`;
const $=s=>document.querySelector(s);
document.body.insertAdjacentHTML('afterbegin',HEADER);
$('#app').insertAdjacentHTML('afterend',FOOTER);
const P={
 menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
 wa:'<path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/>',
 yt:'<rect x="2.5" y="5" width="19" height="14" rx="4"/><path class="x" d="m10 9 5 3-5 3z"/>',
 fb:'<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z"/>',
 gh:'<path d="M9 19c-4 1.5-4-2-6-2.500M15 22v-3.500a3 3 0 0 0-.8-2.300c2.800-.3 5.800-1.400 5.800-6.200a4.800 4.800 0 0 0-1.300-3.300 4.500 4.500 0 0 0-.1-3.300s-1-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.400 2.600 5.400 3 5.400 3a4.500 4.500 0 0 0-.1 3.300A4.800 4.800 0 0 0 4 9.600c0 4.800 3 5.900 5.800 6.200a3 3 0 0 0-.8 2.300V22"/>',
 li:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-5m0 2a2.500 2.500 0 0 1 5 0v3"/>',
 tg:'<path d="M21 4 3 11l5.500 2L10 19l3-3.500L18 19z"/><path d="m8.500 13 8-6"/>',
 rd:'<circle cx="12" cy="14" r="7"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M9.500 16.500a4 4 0 0 0 5 0M13 7l1-4 4 1"/>',
 dc:'<path d="M7 6c3-1.500 7-1.500 10 0l2 11c-2 1.500-4 2-4 2l-1-2c-2 .5-2 .5-4 0l-1 2s-2-.5-4-2z"/><circle cx="9.500" cy="12" r="1"/><circle cx="14.500" cy="12" r="1"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
 free:'<path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.500a2.500 2.500 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.500a2.500 2.500 0 1 0 0-5C13 2 12 7 12 7z"/>',
 book:'<path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h8"/>',
 users:'<circle cx="9" cy="8" r="3.500"/><path d="M2 20a7 7 0 0 1 14 0M17 4.500a3.500 3.500 0 0 1 0 7M22 20a6 6 0 0 0-4-5.500"/>',
 phoneS:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
 chat:'<path d="M21 12a8 8 0 0 1-11.500 7.200L3 21l1.800-5.500A8 8 0 1 1 21 12z"/>',
 check:'<path d="m5 12 5 5 9-10"/>',
 layers:'<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
const ic=(n,f)=>`<svg class="i${f?' f':''}" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;
const LOGO=`<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#818cf8"/><stop offset="1" stop-color="#4f46e5"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#lg)"/><path d="M32 14 12 26l20 12 20-12z" fill="#fff"/><path d="M20 34v10c0 4 24 4 24 0V34l-12 7z" fill="#fff" opacity=".85"/></svg><span>Alfa School</span>`;
$('#logo').innerHTML=LOGO;$('#flogo').innerHTML=LOGO.replace('lg','lg2').replace('#lg)','#lg2)');$('#yr').textContent=new Date().getFullYear();

/* EDIT THESE LINKS */
const SOC=[['yt','YouTube','https://youtube.com/@alfaschool'],['fb','Facebook','https://facebook.com/alfaschool'],['gh','GitHub','https://github.com/alfaschool'],['li','LinkedIn','https://linkedin.com/company/alfaschool'],['tg','Telegram','https://t.me/alfaschool']];
$('#fsocial').innerHTML=SOC.map(s=>`<a href="${s[2]}" target="_blank" rel="noopener" aria-label="${s[1]}">${ic(s[0])}</a>`).join('');

const COURSES=[
 {id:'html',cat:'Web',name:'HTML',lvl:'Beginner',c1:'#f97316',c2:'#ef4444',tg:'https://t.me/alfaschool_html',d:'Build the structure of every web page from scratch.',ch:['Introduction to the web','HTML document structure','Text, links and images','Lists and tables','Forms and inputs','Semantic HTML','Media and embeds','Final project: portfolio page']},
 {id:'css',cat:'Web',name:'CSS',lvl:'Beginner',c1:'#38bdf8',c2:'#6366f1',tg:'https://t.me/alfaschool_css',d:'Style pages with layouts, colors, animation and responsive design.',ch:['CSS basics and selectors','Box model and spacing','Colors and typography','Flexbox','Grid','Responsive design','Transitions and animations','Final project: landing page']},
 {id:'js',cat:'Web',name:'JavaScript',lvl:'Beginner to Intermediate',c1:'#facc15',c2:'#f97316',tg:'https://t.me/alfaschool_js',d:'Add logic and interactivity to your websites.',ch:['Variables and data types','Operators and conditions','Loops and functions','Arrays and objects','The DOM and events','Async JavaScript and fetch','Local storage','Final project: web app']},
 {id:'chatgpt',cat:'AI',name:'ChatGPT',lvl:'Beginner',c1:'#10b981',c2:'#0f766e',tg:'https://t.me/alfaschool_chatgpt',d:'Use ChatGPT for study, writing, coding and daily work.',ch:['Getting started','Writing good prompts','Study and research','Coding with ChatGPT','Files, images and voice','Custom instructions','Real-world workflows']},
 {id:'claude',cat:'AI',name:'Claude AI',lvl:'Beginner',c1:'#fb923c',c2:'#c2410c',tg:'https://t.me/alfaschool_claude',d:'Work with Claude on long documents, code and analysis.',ch:['Getting started','Long documents and files','Writing and editing','Coding with Claude','Projects and artifacts','Tips for better answers']},
 {id:'gemini',cat:'AI',name:'Gemini',lvl:'Beginner',c1:'#60a5fa',c2:'#7c3aed',tg:'https://t.me/alfaschool_gemini',d:'Use Google Gemini with search, images and Google apps.',ch:['Getting started','Prompts and context','Gemini with Google apps','Images and multimodal use','Research workflows','Practical projects']},
 {id:'deepseek',cat:'AI',name:'DeepSeek',lvl:'Beginner',c1:'#3b82f6',c2:'#1e3a8a',tg:'https://t.me/alfaschool_deepseek',d:'Learn DeepSeek for reasoning, coding and open-source AI.',ch:['What is DeepSeek','Reasoning mode','Coding help','Running models locally','Comparing AI tools']},
 {id:'cursor',cat:'AI',name:'Cursor',lvl:'Intermediate',c1:'#a78bfa',c2:'#312e81',tg:'https://t.me/alfaschool_cursor',d:'Build software faster with the AI code editor.',ch:['Install and set up','Chat and inline edits','Agent mode','Working with your codebase','Rules and context','Build and ship a project']},
 {id:'prompt',cat:'Engineering',name:'Prompt Engineering',lvl:'Intermediate',c1:'#ec4899',c2:'#7c3aed',tg:'https://t.me/alfaschool_prompt',d:'Write prompts that give accurate, reliable results.',ch:['How language models work','Clear instructions','Examples and few-shot prompting','Step-by-step reasoning','Structured output','Testing and improving prompts','Prompt patterns']},
 {id:'aieng',cat:'Engineering',name:'AI Engineer',lvl:'Advanced',c1:'#14b8a6',c2:'#4f46e5',tg:'https://t.me/alfaschool_aiengineer',d:'Build real products with AI models, APIs and agents.',ch:['AI engineering roadmap','Using model APIs','Embeddings and vector search','RAG: chat with your data','Tools and function calling','Building agents','Evaluation and safety','Deploying AI apps']}
];
const cover=c=>`<img class="cover" src="assets/images/courses/${c.id}.svg" alt="${c.name} course cover" loading="lazy" width="320" height="180">`;
const tgBtn=c=>`<a class="btn" href="${c.tg}" target="_blank" rel="noopener">${ic('tg')} Join ${c.name} channel</a>`;
const courseCard=c=>`<article class="card">${cover(c)}<div class="body"><span class="tag">${c.cat}</span><h3>${c.name}</h3><p>${c.d}</p><div class="meta"><span>${ic('layers')}${c.ch.length} chapters</span><span>${ic('free')}Free</span></div><a class="btn ghost" href="course.html?id=${c.id}" style="margin-top:.6rem">View course</a></div></article>`;
const rows=(items)=>items.map(i=>`<a class="link" href="${i[3]}" target="_blank" rel="noopener"><span class="ic">${ic(i[0])}</span><span><strong>${i[1]}</strong><small>${i[2]}</small></span></a>`).join('');

const RES=[
 ['Web Development',[['book','freeCodeCamp','Free coding lessons, projects and certificates','https://www.freecodecamp.org'],['book','MDN Web Docs','The best reference for HTML, CSS and JavaScript','https://developer.mozilla.org'],['book','W3Schools','Simple tutorials with live examples','https://www.w3schools.com'],['book','The Odin Project','Free full-stack curriculum','https://www.theodinproject.com'],['book','JavaScript.info','The modern JavaScript tutorial','https://javascript.info'],['book','web.dev','Learn CSS and modern web practices by Google','https://web.dev/learn']]],
 ['AI and Prompting',[['book','Google AI Essentials','Learn how to use AI tools at work','https://grow.google/ai-essentials'],['book','Learn Prompting','Free guide to prompt engineering','https://learnprompting.org'],['book','Hugging Face Learn','Free courses on LLMs and machine learning','https://huggingface.co/learn'],['book','DeepLearning.AI','Short courses on AI building','https://www.deeplearning.ai/short-courses/'],['book','Fast.ai','Practical deep learning for coders','https://course.fast.ai'],['book','Kaggle Learn','Free hands-on data and ML lessons','https://www.kaggle.com/learn']]],
 ['Practice and Tools',[['book','Frontend Mentor','Real design challenges to practice','https://www.frontendmentor.io'],['book','CSS-Tricks','Guides and tips for CSS','https://css-tricks.com'],['book','CodePen','Write and share code in the browser','https://codepen.io'],['book','GitHub Skills','Learn Git and GitHub with interactive courses','https://skills.github.com']]]
];

const VIEWS={
home(){
 const feat=[['free','100% free','Every course, resource and community is free. No payment, ever.'],['book','Clear chapters','Each course is split into short chapters, so you always know what comes next.'],['tg','Telegram channel per course','Get lessons, files and updates in a dedicated channel for each course.'],['phoneS','Learn anywhere','The site works on phones, tablets and desktops.']];
 return `<section class="hero"><div class="wrap"><div><h1>Learn web development and AI. Free.</h1><p>Alfa School teaches HTML, CSS, JavaScript, popular AI tools and AI engineering. Pick a course, join its Telegram channel and start today.</p><div class="cta"><a class="btn" href="courses.html">Browse courses</a><a class="btn ghost" href="register.html">Create free account</a></div><div class="stats"><div><strong>10</strong>Free courses</div><div><strong>70+</strong>Chapters</div><div><strong>$0</strong>Always free</div></div></div>
 <div class="code" aria-hidden="true"><div><i></i><i></i><i></i></div><div><u>const</u> student = {</div><div>&nbsp;&nbsp;school: <em>"Alfa School"</em>,</div><div>&nbsp;&nbsp;price: <b>0</b>,</div><div>&nbsp;&nbsp;goal: <em>"AI Engineer"</em></div><div>};</div><div><u>learn</u>(student); <em>// start now</em></div></div></div></section>
 <section class="s"><div class="wrap"><div class="head"><h2>Popular courses</h2><p>Start with the web basics, then move into AI.</p></div><div class="grid">${['html','css','js','prompt'].map(i=>courseCard(COURSES.find(c=>c.id===i))).join('')}</div><p style="margin-top:1.5rem"><a class="btn ghost" href="courses.html">See all courses ${ic('arrow')}</a></p></div></section>
 <section class="s" style="padding-top:0"><div class="wrap"><div class="head"><h2>Why Alfa School</h2></div><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">${feat.map(f=>`<div class="feat"><div class="ic">${ic(f[0])}</div><div><h3>${f[1]}</h3><p>${f[2]}</p></div></div>`).join('')}</div></div></section>
 <section class="s" style="padding-top:0"><div class="wrap"><div class="banner"><div><h2>Ready to start learning?</h2><p>Join the community and pick your first course.</p></div><div class="cta"><a class="btn" href="register.html">Register free</a><a class="btn ghost" href="community.html">Join community</a></div></div></div></section>`;
},
courses(){
 return `<div class="page-title"><div class="wrap"><h1>Courses</h1><p>Web development, AI tools and AI engineering. Every course has its own Telegram channel.</p></div></div>
 <section class="s"><div class="wrap"><div class="tabs" id="tabs">${['All','Web','AI','Engineering'].map((t,i)=>`<button class="${i?'':'on'}" data-t="${t}">${t==='Web'?'Web Development':t==='AI'?'AI Tools':t==='Engineering'?'Engineering':t}</button>`).join('')}</div><div class="grid" id="cgrid">${COURSES.map(courseCard).join('')}</div></div></section>`;
},
course(id){
 const c=COURSES.find(x=>x.id===id);if(!c)return VIEWS.courses();
 return `<section class="s"><div class="wrap"><a class="back" href="courses.html">${ic('back')} All courses</a><div class="detail"><div><div class="card" style="box-shadow:none">${cover(c)}</div><div class="head" style="margin-top:1.6rem"><span class="tag">${c.cat} · ${c.lvl}</span><h2 style="margin-top:.5rem">${c.name}</h2><p>${c.d}</p></div><h3>Chapters</h3><ol class="chap">${c.ch.map((x,i)=>`<li><span>${i+1}</span>${x}</li>`).join('')}</ol></div>
 <aside class="side"><div class="card"><div class="body"><h3>Join the ${c.name} channel</h3><p>Lessons, files and updates for this course are shared in its own Telegram channel.</p>${tgBtn(c)}<div class="meta"><span>${ic('layers')}${c.ch.length} chapters</span><span>${ic('free')}Free</span></div></div></div>
 <div class="card"><div class="body"><h3>Also learn</h3>${COURSES.filter(x=>x.cat===c.cat&&x.id!==c.id).slice(0,3).map(x=>`<a href="course.html?id=${x.id}" style="color:var(--primary);font-weight:600">${x.name}</a>`).join('')||'<a href="courses.html" style="color:var(--primary);font-weight:600">Browse all courses</a>'}</div></div></aside></div></div></section>`;
},
resources(){
 return `<div class="page-title"><div class="wrap"><h1>Free resources</h1><p>The best free places to learn, practice and build. Hand-picked by Alfa School.</p></div></div>
 <section class="s"><div class="wrap">${RES.map(r=>`<div class="head" style="margin-top:1rem"><h2>${r[0]}</h2></div><div class="grid" style="margin-bottom:2.5rem">${rows(r[1].map(x=>x))}</div>`).join('')}</div></section>`;
},
community(){
 const C=[['rd','Reddit','Ask questions and share projects','https://reddit.com/r/alfaschool'],['dc','Discord','Chat live, get help and join study groups','https://discord.gg/alfaschool'],['tg','Telegram','Main announcements and course channels','https://t.me/alfaschool']];
 return `<div class="page-title"><div class="wrap"><h1>Community</h1><p>Learning is easier together. Join a space, ask questions and help others.</p></div></div>
 <section class="s"><div class="wrap"><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">${rows(C)}</div><div class="head" style="margin-top:3rem"><h2>Community guidelines</h2></div><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">${[['Be kind','Respect every learner, whatever their level.'],['Ask clearly','Share your code and what you tried.'],['Share knowledge','Help someone with what you just learned.']].map(g=>`<div class="feat"><div class="ic">${ic('check')}</div><div><h3>${g[0]}</h3><p>${g[1]}</p></div></div>`).join('')}</div></div></section>`;
},
about(){
 return `<div class="page-title"><div class="wrap"><h1>About Alfa School</h1><p>A free school for anyone who wants to build with the web and AI.</p></div></div>
 <section class="s"><div class="wrap two"><div><div class="head"><h2>Our mission</h2></div><p style="color:var(--text-light);margin-bottom:1rem">Alfa School exists to make quality tech education free for everyone. We believe a good internet connection and the will to learn are all you need to build a career in technology.</p><p style="color:var(--text-light)">We teach practical skills: web development to build websites, AI tools to work faster, and AI engineering to build the next generation of software. Each course has a clear list of chapters and its own Telegram channel, so you always have a place to learn and ask.</p></div>
 <div class="grid" style="grid-template-columns:1fr 1fr">${[['10','Free courses'],['70+','Chapters'],['3','Learning paths'],['$0','Cost to join']].map(s=>`<div class="feat" style="flex-direction:column;gap:.2rem"><h3 style="font-size:2rem;color:var(--primary)">${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div></div></section>
 <section class="s" style="padding-top:0"><div class="wrap"><div class="head"><h2>What we value</h2></div><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">${[['free','Free for all','No fees, no hidden plans.'],['book','Practical learning','Build real projects, not just theory.'],['users','Open community','Learn with others and grow together.']].map(f=>`<div class="feat"><div class="ic">${ic(f[0])}</div><div><h3>${f[1]}</h3><p>${f[2]}</p></div></div>`).join('')}</div></div></section>`;
},
contact(){
 return `<div class="page-title"><div class="wrap"><h1>Contact us</h1><p>Questions, ideas or feedback? We would love to hear from you.</p></div></div>
 <section class="s"><div class="wrap two"><div style="display:grid;gap:1rem;align-content:start">${rows([['mail','Email','hello@alfaschool.com','mailto:hello@alfaschool.com'],['wa','WhatsApp','Chat with us','https://wa.me/252000000000'],['phone','Phone','+252 00 000 0000','tel:+252000000000']])}<div class="head" style="margin:1rem 0 0"><h2 style="font-size:1.2rem">Follow us</h2></div><div class="social" style="color:#fff">${SOC.map(s=>`<a href="${s[2]}" target="_blank" rel="noopener" aria-label="${s[1]}" style="background:var(--primary)">${ic(s[0])}</a>`).join('')}</div></div>
 <form class="form" id="cform" novalidate><label>Name<input name="n" required autocomplete="name"></label><label>Email<input name="e" type="email" required autocomplete="email"></label><label>Message<textarea name="m" required></textarea></label><div id="cmsg"></div><button class="btn" type="submit">Send message</button></form></div></section>`;
},
login(){
 return `<div class="wrap"><form class="form authbox" id="lform" novalidate><h1 style="font-size:1.7rem">Log in</h1><p style="color:var(--text-light);margin-top:-.5rem">Welcome back to Alfa School.</p><label>Email<input name="e" type="email" required autocomplete="email"></label><label>Password<input name="p" type="password" required autocomplete="current-password"></label><div id="amsg"></div><button class="btn" type="submit">Log in</button><p style="font-size:.92rem;color:var(--text-light)">New here? <a href="register.html" style="color:var(--primary);font-weight:700">Create a free account</a></p></form></div>`;
},
register(){
 return `<div class="wrap"><form class="form authbox" id="rform" novalidate><h1 style="font-size:1.7rem">Create your free account</h1><label>Full name<input name="n" required autocomplete="name"></label><label>Email<input name="e" type="email" required autocomplete="email"></label><label>Password (min 6 characters)<input name="p" type="password" minlength="6" required autocomplete="new-password"></label><div id="amsg"></div><button class="btn" type="submit">Register</button><p style="font-size:.92rem;color:var(--text-light)">Already registered? <a href="login.html" style="color:var(--primary);font-weight:700">Log in</a></p></form></div>`;
}
};

/* demo auth: stored in this browser only. Replace with a real backend (e.g. Supabase) for production. */
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let mem=[];const users=()=>store.get('as_users')||mem;
function renderAuth(){
 const u=store.get('as_user');
 $('#auth').innerHTML=u?`<span class="hide-s" style="font-weight:600;font-size:.92rem">Hi, ${u.name.split(' ')[0].replace(/[<>&"]/g,'')}</span><button class="btn ghost" id="out">Log out</button>`:`<a class="btn ghost hide-s" href="login.html">Log in</a><a class="btn" href="register.html">Register</a>`;
 const o=$('#out');if(o)o.onclick=()=>{store.set('as_user',null);renderAuth();location.href='index.html'};
}
const show=(el,t,c)=>{el.innerHTML=`<div class="msg ${c}">${t}</div>`};
function bind(page){
 if(page==='courses'){$('#tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('#tabs button').forEach(x=>x.classList.toggle('on',x===b));const t=b.dataset.t;$('#cgrid').innerHTML=COURSES.filter(c=>t==='All'||c.cat===t).map(courseCard).join('')}}
 if(page==='contact'){$('#cform').onsubmit=e=>{e.preventDefault();const f=e.target;if(!f.n.value.trim()||!/\S+@\S+\.\S+/.test(f.e.value)||!f.m.value.trim())return show($('#cmsg'),'Please fill in your name, a valid email and a message.','err');location.href=`mailto:hello@alfaschool.com?subject=${encodeURIComponent('Message from '+f.n.value)}&body=${encodeURIComponent(f.m.value+'\n\n'+f.e.value)}`;show($('#cmsg'),'Opening your email app to send the message.','ok')}}
 if(page==='register'){$('#rform').onsubmit=e=>{e.preventDefault();const f=e.target,em=f.e.value.trim().toLowerCase();if(!f.n.value.trim()||!/\S+@\S+\.\S+/.test(em))return show($('#amsg'),'Enter your name and a valid email.','err');if(f.p.value.length<6)return show($('#amsg'),'Password must be at least 6 characters.','err');const l=users();if(l.some(u=>u.e===em))return show($('#amsg'),'This email is already registered. Please log in.','err');const u={name:f.n.value.trim(),e:em,p:f.p.value};l.push(u);mem=l;store.set('as_users',l);store.set('as_user',{name:u.name,e:em});renderAuth();show($('#amsg'),'Account created. Redirecting to courses…','ok');setTimeout(()=>location.href='courses.html',800)}}
 if(page==='login'){$('#lform').onsubmit=e=>{e.preventDefault();const f=e.target,em=f.e.value.trim().toLowerCase();const u=users().find(x=>x.e===em&&x.p===f.p.value);if(!u)return show($('#amsg'),'Wrong email or password. Check and try again.','err');store.set('as_user',{name:u.name,e:em});renderAuth();location.href='courses.html'}}
}
function route(){
 const p=document.body.dataset.page||'home';
 const id=new URLSearchParams(location.search).get('id');
 if(p==='course'&&!COURSES.find(x=>x.id===id)){location.replace('courses.html');return}
 $('#app').innerHTML=VIEWS[p](id);
 const file=({home:'index',course:'courses'}[p]||p)+'.html';
 document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')===file));
 bind(p);
 const c=p==='course'&&COURSES.find(x=>x.id===id);
 document.title=(c?c.name+' course':p==='home'?'Free Tech & AI Learning':p[0].toUpperCase()+p.slice(1))+' – Alfa School';
}
$('#burger').onclick=()=>{const o=$('#nav').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o)};
renderAuth();route();
