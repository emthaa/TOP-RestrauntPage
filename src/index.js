import {loadHomePage,loadMenuPage,loadContactPage,clearContentPage,websiteLogic} from './load-page.js'




loadHomePage()

document.querySelector('#home-button').onclick = loadHomePage
document.querySelector('#menu-button').onclick = loadMenuPage
document.querySelector('#contact-button').onclick = loadContactPage


