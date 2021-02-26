const hambuger = document.querySelector('#hambuger')
const mobileNav = document.querySelector('.mobileNav')
const navLinks = document.querySelectorAll('.mobileNav a')
const closeBtn = document.querySelector('#close')
const inputs = document.querySelectorAll('.input')
const contactDiv = document.querySelector('.contactContainer')
const leftDiv = document.querySelector('.leftDiv')
const closeOverlay = document.querySelector('.leftDiv span')
const header = document.querySelector('header')
const goUpDiv = document.querySelector('.goUp')

hambuger.addEventListener('click', hambugerAction)
closeBtn.addEventListener('click', closeMobileNav)
inputs.forEach(input => input.addEventListener('click', changeDivDimension))
navLinks.forEach(link => link.addEventListener('click', closeMobileNav))

window.addEventListener('scroll', toggleGoUp)

if (window.pageYOffset === '300') {
	alert('hello')
}

// close the overlay
closeOverlay.
	addEventListener('click', () => {
		contactDiv.classList.replace('changeDiv', 'contactContainer')
		document.querySelector('form h1').style.display = "block"
		leftDiv.style.display = "none"
		})

// Open the overlay
function changeDivDimension() {
	if (
		! contactDiv.classList.contains('changeDiv')
		&& window.innerWidth > '768'
		) {
		contactDiv.classList.replace('contactContainer', 'changeDiv')
		document.querySelector('form h1').style.display = "none"
		leftDiv.style.display = "block"
	}

	if (window.innerWidth < '768') {
		contactDiv.classList.replace('changeDiv', 'contactContainer')		
	}
}

function hambugerAction() {
	mobileNav.classList.replace('h-0', 'h-100')
}

function closeMobileNav() {
	mobileNav.classList.replace('h-100', 'h-0')
}


if (leftDiv.classList.contains('loneDisplay')) {
	leftDiv.style.display = "none"
}

// Toggel Go up div show

function toggleGoUp() {
	const pageHeight = window.pageYOffset

	switch (true) {
		case pageYOffset > 1000: 
			goUpDiv.parentNode.classList.replace('opacity-0', 'opacity-light')
			break

		case pageYOffset <= 1000:
			goUpDiv.parentNode.classList.replace('opacity-light', 'opacity-0')
			break
	} 

}


// Date on the footer
const date = new Date()
document.querySelector('#fullYear').innerHTML = date.getFullYear()

