import './style.css';
import beeimage from './bee.svg';
import bee1image  from './bee-1.svg';
import honeycombimage from "./honeycomb.svg"
const homebutton = document.querySelector('#home-button')
const menubutton = document.querySelector('#menu-button')
const contactbutton = document.querySelector('#contact-button')
const honey = 'rgb(236,164,59)'
const khaki = '#ffde73'
const dripping = document.querySelector('#dripping')
const content = document.querySelector('#content')
export function clearContentPage(){
    while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
}
export function loadHomePage(){
    clearContentPage()

    homebutton.style.backgroundColor = honey
    menubutton.style.backgroundColor = khaki
    contactbutton.style.backgroundColor = khaki
    dripping.style.marginLeft = 0 + 'px'

    const homeTitle = document.createElement('div')
    const homeTitleText = document.createElement('h1')

    const bee = new Image()
    const bee1 = new Image()
    const honeycomb = new Image()

    bee.src = beeimage
    bee1.src = bee1image
    honeycomb.src = honeycombimage

    bee.id = 'bee'
    bee1.id = 'bee1'
    honeycomb.id = 'honeycomb'
    homeTitle.id = "homeTitle"
    homeTitleText.id = "homeTitleText"

    honeycomb.style.top ='175px' //css wasnt working lol

    homeTitleText.textContent = "Beary's Breakfast Bar"

    
    


    const review = document.createElement('div')
    const review_paragraph = document.createElement('p')
    const goldilocks = document.createElement('div')
   
    review.id = 'review'
    review_paragraph.id = 'review_paragraph'
    goldilocks.id = 'goldilocks'

    review_paragraph.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    goldilocks.textContent='Goldilocks'



    homeTitle.appendChild(bee) 
    homeTitle.appendChild(bee1) 
    homeTitle.appendChild(homeTitleText) 
    content.appendChild(homeTitle)
    content.appendChild(review)
    review.appendChild(honeycomb)
    review.appendChild(review_paragraph)
    review.appendChild(goldilocks)

}

export function loadMenuPage(){
    clearContentPage()
    homebutton.style.backgroundColor = khaki
    menubutton.style.backgroundColor = honey
    contactbutton.style.backgroundColor = khaki
    dripping.style.marginLeft = 240 + 'px'
    

}

export function loadContactPage(){
    clearContentPage()
    homebutton.style.backgroundColor = khaki
    menubutton.style.backgroundColor = khaki
    contactbutton.style.backgroundColor = honey
    dripping.style.marginLeft = 480 + 'px'
}



export function websiteLogic(){
    
}

console.log('index.js working')