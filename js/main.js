/* Estado común: usuario y carrito persistentes. */
const KB = {
  get user(){ return JSON.parse(localStorage.getItem('kb_session') || 'null'); },
  set user(value){ value ? localStorage.setItem('kb_session', JSON.stringify(value)) : localStorage.removeItem('kb_session'); },
  get cart(){ return JSON.parse(localStorage.getItem('kb_cart') || '[]'); },
  set cart(value){ localStorage.setItem('kb_cart', JSON.stringify(value)); },
  money: n => `$${Number(n).toFixed(2)}`
};
function updateHeader(){ const user=KB.user, login=document.querySelector('.login-link'), count=document.querySelector('.cart-count'); if(count) count.textContent=KB.cart.reduce((n,x)=>n+x.qty,0); if(login && user){login.textContent=`${user.email.split('@')[0]} · Salir`;login.href='#';login.onclick=e=>{e.preventDefault();KB.user=null;updateHeader();location.href='index.html';};login.title='Cerrar sesión';} }
function toast(message){const el=document.querySelector('#toast');if(!el)return;el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
document.addEventListener('DOMContentLoaded',()=>{updateHeader();const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');if(toggle)toggle.onclick=()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'))};document.querySelectorAll('.modal-close').forEach(x=>x.onclick=()=>document.querySelector('#auth-modal').classList.remove('show'));});
