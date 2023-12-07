let nav=document.querySelector('nav');
window.addEventListener('scroll',()=>{
    nav.classList.toggle('naWinscroll',window,scrollY>0)
})