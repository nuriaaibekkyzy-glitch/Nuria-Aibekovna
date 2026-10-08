/* ===== Данные по умолчанию (всё из резюме) ===== */
const DEFAULTS = {
  directions: [
    {title:'Информатика и программирование', meta:'Основа', text:'Преподаю информатику и программирование: Python, фреймворк Django, прикладные цифровые инструменты. Учебное пособие по Python и Django написано мной в соавторстве на трёх языках.'},
    {title:'Цифровая экономика', meta:'Исследования', text:'Изучаю, как цифровые платформы, электронная коммерция и новые технологии меняют экономику и управление.'},
    {title:'Искусственный интеллект в образовании', meta:'Новое', text:'Прошла курсы по нейросетям и по использованию ИИ как персонального помощника в обучении и исследованиях.'},
    {title:'3D-моделирование и визуализация', meta:'Творчество', text:'Совместно со студентами исследую роль 3D-моделирования в создании городских общественных пространств.'}
  ],
  events: [
    {title:'Стажировка в Центре интеллектуальных данных', meta:'11.11.2024 — 22.11.2024', text:'Национальный статистический комитет Кыргызской Республики.'},
    {title:'Хакатон lackUni: «Умный университет будущего»', meta:'2025', text:'Приняла участие в хакатоне и получила благодарственное письмо.'},
    {title:'III Международная студенческая олимпиада', meta:'03.05.2023', text:'Организовала олимпиаду и получила благодарность за этот труд.'}
  ],
  courses: [
    {title:'Искусственный интеллект как персональный помощник в образовании и исследованиях', meta:'19.02 — 19.03.2026 · 72 ч.', text:''},
    {title:'Интерактивные методы обучения и управление учебным процессом', meta:'Январь 2025 · 72 ч.', text:''},
    {title:'Мини-курс по нейросетям', meta:'13.01 — 16.01.2025', text:''},
    {title:'Психология и педагогика', meta:'15.01 — 26.01.2024 · 72 ч.', text:''}
  ],
  publications: [
    {title:'Цифровая экономика: новые возможности и угрозы для развития мирового хозяйства', meta:'2023 · Вестник КЭУ №2 (59) · ISSN 1694-5778', text:'Научная статья.'},
    {title:'Учебно-методическое пособие «Язык программирования Python, Фреймворк Django»', meta:'2023 · на кыргызском, русском и английском', text:'Для самостоятельной работы студентов. Соавторы: Мамбетова С.А., Чертикеева Б.С.'},
    {title:'Инновации и тенденции развития электронной коммерции', meta:'2024 · Вестник КЭУ №1 (62) · ISSN 1694-5778', text:'Научная статья. Соавтор: Солтобаева М.'},
    {title:'Инновационные и коммуникационные технологии в современном менеджменте', meta:'2024 · Вестник КЭУ №1 (62) · ISSN 1694-5778', text:'Научная статья. Соавтор: Солтобаева М.'},
    {title:'Терминологический словарь по дисциплинам направления «Бизнес-информатика»', meta:'2024', text:'Разработан авторским коллективом кафедры.'},
    {title:'Визуализация и дизайн общественных пространств: роль 3D-моделирования', meta:'2025 · Вестник КЭУ', text:'Научная статья о функциональных и эстетических городских объектах. Соавтор: Бактыбекова Т. Б., студентка гр. БИ-1-21.'},
    {title:'Роль цифровых платформ в экономике совместного потребления', meta:'2025 · «Вестник науки РФ»', text:'Международный научный журнал. Соавторы: Чертикеева Б.С., Элебесова Г.Ч.'},
    {title:'Педагогические условия повышения образовательной мотивации будущих учителей и психологов', meta:'13.03.2026 · Scopus', text:'Соавторы: Сяоруй Дуань, Гульзада Карагозуева, Мавлиудахан Исакова, Сагынбай кызы Минара.'}
  ],
  gallery: [],
  certificates: [
    {title:'Публичная консультация психолога. Самопомощь и техника работы со стрессом в кризисных ситуациях', meta:'08.10.2022', text:''},
    {title:'Электронная библиотека Grebennikon: опыт сотрудничества с вузами и библиотеками Центральной Азии', meta:'14.02.2023', text:''},
    {title:'Интерактивные технологии обучения', meta:'10.10.2023 · НИУ КЭУ, Бишкек', text:''},
    {title:'Инновации в современных цифровых технологиях: тенденции, проблемы и перспективы', meta:'29.09.2023', text:''},
    {title:'Авторское право для сотрудника университета в эпоху развития цифровых технологий', meta:'14.12.2023 · вебинар, Москва', text:''},
    {title:'Психология и педагогика', meta:'15.01 — 26.01.2024 · 72 ч.', text:''},
    {title:'Интерактивные методы обучения и управление учебным процессом', meta:'Январь 2025 · 72 ч.', text:''},
    {title:'Мини-курс по нейросетям', meta:'13.01 — 16.01.2025', text:''},
    {title:'Онлайн-платформа «Pinduoduo и Taobao»', meta:'2025', text:''},
    {title:'Благодарственное письмо за участие в хакатоне lackUni: «Умный университет будущего»', meta:'2025', text:''},
    {title:'Цифровые технологии: модели управления и экономическая эффективность', meta:'26.03.2026', text:''},
    {title:'Искусственный интеллект как персональный помощник в образовании и исследованиях', meta:'19.02 — 19.03.2026 · 72 ч.', text:''}
  ]
};
const PHOTO_LABEL = {certificates:'Добавить фото сертификата'};
const STORE = 'nuria-site-v1-';
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
let uid = ()=>'i'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);

/* ===== Хранилище ===== */
function load(key){
  try{ const raw = localStorage.getItem(STORE+key); if(raw) return JSON.parse(raw); }catch(e){}
  return DEFAULTS[key].map(x=>({id:uid(),img:'',...x}));
}
function save(key){
  try{ localStorage.setItem(STORE+key, JSON.stringify(data[key])); return true; }
  catch(e){ alert('Не удалось сохранить: память браузера заполнена. Попробуйте фото меньшего размера или удалите старые.'); return false; }
}
const data = {};
Object.keys(DEFAULTS).forEach(k=>data[k]=load(k));

/* ===== Отрисовка карточек ===== */
function render(key, newId){
  const box = $(`.cards[data-section="${key}"]`);
  if(!box) return;
  box.innerHTML = '';
  if(!data[key].length){
    const e = document.createElement('div'); e.className='empty';
    e.textContent = 'Здесь скоро появятся новые записи';
    box.appendChild(e); return;
  }
  data[key].forEach((it,i)=>{
    const c = document.createElement('article');
    c.className = 'card reveal'+(it.id===newId?' new':'');
    c.style.transitionDelay = (i%4)*0.08+'s';
    if(it.img){
      const im = document.createElement('div'); im.className='card-img';
      const img = document.createElement('img'); img.src = it.img; img.alt = it.title||''; img.loading='lazy';
      im.appendChild(img); im.addEventListener('click',()=>openLightbox(it.img));
      c.appendChild(im);
    }
    const b = document.createElement('div'); b.className='card-body';
    if(it.meta){const m=document.createElement('div');m.className='card-meta';m.textContent=it.meta;b.appendChild(m);}
    if(it.title){const h=document.createElement('h3');h.textContent=it.title;b.appendChild(h);}
    if(it.text){const p=document.createElement('p');p.textContent=it.text;b.appendChild(p);}
    const act = document.createElement('div'); act.className='card-actions';
    act.appendChild(btn(it.img ? 'Заменить фото' : (PHOTO_LABEL[key]||'Добавить фото'),'mini',()=>quickPhoto(key,it.id)));
    act.appendChild(btn('Изменить','mini',()=>openModal(key,it.id)));
    act.appendChild(btn('Удалить','mini del',()=>{
      if(confirm('Удалить эту запись?')){ data[key]=data[key].filter(x=>x.id!==it.id); save(key); render(key); }
    }));
    b.appendChild(act); c.appendChild(b); box.appendChild(c);
    observe(c);
  });
}
function btn(t,cls,fn){const b=document.createElement('button');b.className=cls;b.textContent=t;b.addEventListener('click',fn);return b;}

/* ===== Фото: сжатие ===== */
function readImage(file, max=1100){
  return new Promise((res,rej)=>{
    const fr = new FileReader();
    fr.onerror = rej;
    fr.onload = ()=>{
      const img = new Image();
      img.onerror = rej;
      img.onload = ()=>{
        const k = Math.min(1, max/Math.max(img.width,img.height));
        const cv = document.createElement('canvas');
        cv.width = Math.round(img.width*k); cv.height = Math.round(img.height*k);
        cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
        res(cv.toDataURL('image/jpeg',.82));
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

/* ===== Окно редактирования ===== */
let current = {key:null,id:null,img:''};
const modal = $('#modal');
function openModal(key,id){
  const it = id ? data[key].find(x=>x.id===id) : {title:'',meta:'',text:'',img:''};
  current = {key,id,img:it.img||''};
  $('#modalTitle').textContent = id ? 'Изменить запись' : 'Добавить запись';
  $('#fTitle').value = it.title||''; $('#fMeta').value = it.meta||''; $('#fText').value = it.text||'';
  $('#fFile').value=''; showPreview();
  modal.hidden = false;
  setTimeout(()=>$('#fTitle').focus(),50);
}
function showPreview(){
  const p=$('#fPreview'); p.hidden = !current.img; if(current.img) p.src=current.img;
  $('#fRemoveImg').hidden = !current.img;
}
function closeModal(){modal.hidden=true}
$('#fFile').addEventListener('change',async e=>{
  const f=e.target.files[0]; if(!f) return;
  try{ current.img = await readImage(f); showPreview(); }catch(err){ alert('Не удалось открыть изображение'); }
});
$('#fRemoveImg').addEventListener('click',()=>{current.img='';$('#fFile').value='';showPreview()});
$('#fCancel').addEventListener('click',closeModal);
$('#modalX').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal) closeModal()});
$('#fSave').addEventListener('click',()=>{
  const {key,id,img} = current;
  const rec = {title:$('#fTitle').value.trim(), meta:$('#fMeta').value.trim(), text:$('#fText').value.trim(), img};
  if(!rec.title && !rec.text && !rec.img){ alert('Добавьте хотя бы заголовок, текст или фото'); return; }
  const backup = JSON.stringify(data[key]);
  let newId = id;
  if(id){ Object.assign(data[key].find(x=>x.id===id), rec); }
  else { newId = uid(); data[key].unshift({id:newId,...rec}); }
  if(!save(key)){ data[key]=JSON.parse(backup); return; }
  render(key,newId); closeModal();
});
$$('[data-add]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.add)));

/* быстрое добавление фото к карточке (например, к сертификату) */
const quick = $('#quickFile'); let quickTarget=null;
function quickPhoto(key,id){ quickTarget={key,id}; quick.value=''; quick.click(); }
quick.addEventListener('change',async e=>{
  const f=e.target.files[0]; if(!f||!quickTarget) return;
  const {key,id}=quickTarget;
  try{
    const img = await readImage(f);
    const it = data[key].find(x=>x.id===id); const old=it.img; it.img=img;
    if(!save(key)) it.img=old;
    render(key,id);
  }catch(err){ alert('Не удалось открыть изображение'); }
});

/* ===== Режим редактирования ===== */
const toggle = $('#editToggle');
function setEditing(on){
  document.body.classList.toggle('editing',on);
  toggle.querySelector('span').textContent = on ? 'Готово' : 'Редактировать';
}
toggle.addEventListener('click',()=>setEditing(!document.body.classList.contains('editing')));

/* ===== Просмотр фото ===== */
const lb = $('#lightbox');
function openLightbox(src){ $('img',lb).src=src; lb.hidden=false; }
lb.addEventListener('click',()=>lb.hidden=true);
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){lb.hidden=true; closeModal();} });

/* ===== Анимация появления ===== */
const io = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);
    if(e.target.classList.contains('stats')) countUp(e.target); } });
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
function observe(el){io.observe(el)}
function countUp(root){
  $$('[data-count]',root).forEach(el=>{
    const to=+el.dataset.count, t0=performance.now(), dur=1600;
    (function step(t){ const p=Math.min(1,(t-t0)/dur); el.textContent=Math.round(to*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(step); })(t0);
  });
}

/* ===== Остальное ===== */
$('#foldBtn').addEventListener('click',()=>{
  const f=$('#fold'); const open=f.classList.toggle('open');
  $('#foldBtn').setAttribute('aria-expanded',open);
  $('#foldBtn span').textContent = open ? 'Свернуть' : 'Читать дальше';
});
const top_=$('#topbar');
addEventListener('scroll',()=>top_.classList.toggle('scrolled',scrollY>30),{passive:true});
$('#burger').addEventListener('click',()=>$('#nav').classList.toggle('open'));
$$('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
$('#year').textContent = new Date().getFullYear();

Object.keys(DEFAULTS).forEach(k=>render(k));
$$('.reveal').forEach(observe);
