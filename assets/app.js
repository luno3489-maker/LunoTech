const menuButton=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');
if(menuButton&&mobileNav){menuButton.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');});mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));}
const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
