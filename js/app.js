const hambuger = document.querySelector('#hambuger')
const mobileNav = document.querySelector('.mobileNav')
const closeBtn = document.querySelector('#close')

hambuger.addEventListener('click', hambugerAction)
closeBtn.addEventListener('click', closeMobileNav)

function hambugerAction() {
	mobileNav.classList.replace('h-0', 'h-100')
}

function closeMobileNav() {
	mobileNav.classList.replace('h-100', 'h-0')
}