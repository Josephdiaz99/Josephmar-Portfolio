// Import our custom CSS
import '../scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import typingWord from './functions/typingWords'
import contactForm from './functions/contactForm'
import hamburguerMenu from './functions/responsiveMenu'



document.addEventListener('DOMContentLoaded',()=>{
    typingWord('Josephmar Diaz')
    contactForm()
    hamburguerMenu()
})







