// Import our custom CSS
import '../scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import typingWord from './functions/typingWords'
import proyectHover from './functions/proyectHover'
import contactForm from './functions/contactForm'

document.addEventListener('DOMContentLoaded',()=>{

    typingWord('Josephmar Diaz')
    proyectHover()
    contactForm()

})







