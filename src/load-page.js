import './style.css';
import beeimage from './images/bee.svg';
import bee1image  from './images/bee-1.svg';
import honeycombimage from "./images/honeycomb.svg"
import menuimage1 from './images/honeyTea.jpg'
import menuimage2 from "./images/bearyTea.jpg"
import menuimage3 from "./images/toast.jpg"
import menuimage4 from "./images/fruit.jpg"
import menuimage5 from "./images/pancakes.jpg"
import menuimage6 from "./images/frenchToast.jpg"
import papabear from './images/papabear.jpeg'
import mamabear from './images/mamabear.png'
import babybear from './images/babybear.jpeg'


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


function ContentHeader(text){
    const homeTitle = document.createElement('div')
    const homeTitleText = document.createElement('h1')

    const bee = new Image()
    const bee1 = new Image()

    bee.src = beeimage
    bee1.src = bee1image

    homeTitleText.textContent = text

    bee.className = 'bee'
    bee1.className = 'bee1'
    homeTitle.className = "homeTitle"
    homeTitleText.className = "homeTitleText"

    homeTitle.appendChild(bee) 
    homeTitle.appendChild(bee1) 
    homeTitle.appendChild(homeTitleText) 
    content.appendChild(homeTitle)
}

export function loadHomePage(){
    clearContentPage()

    homebutton.style.backgroundColor = honey
    menubutton.style.backgroundColor = khaki
    contactbutton.style.backgroundColor = khaki
    dripping.style.marginLeft = 0 + 'px'

    ContentHeader("Beary's Breakfast Bar")

    const honeycomb = new Image()

    honeycomb.src = honeycombimage

    honeycomb.id = 'honeycomb'

    honeycomb.style.top ='175px' //css wasnt working lol

    const review = document.createElement('div')
    const review_paragraph = document.createElement('p')
    const goldilocks = document.createElement('div')
   
    review.id = 'review'
    review_paragraph.id = 'review_paragraph'
    goldilocks.id = 'goldilocks'

    review_paragraph.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    goldilocks.textContent='Goldilocks'

    content.appendChild(review)
    review.appendChild(honeycomb)
    review.appendChild(review_paragraph)
    review.appendChild(goldilocks)

    const HoursContainer = document.createElement('div')
    const HoursTitle = document.createElement('h1')
    HoursTitle.textContent = 'Hours'
    const monday = document.createElement('p')
    const tuesday = document.createElement('p')
    const wednesday = document.createElement('p')
    const thursday = document.createElement('p')
    const friday = document.createElement('p')
    const saturday = document.createElement('p')
    const sunday = document.createElement('p')

    monday.textContent = 'Monday: 6am - 6pm'
    tuesday.textContent = 'Tuesday: 6am - 6pm'
    wednesday.textContent = 'Wednesday: 6am - 6pm'
    thursday.textContent = 'Thursday: 6am - 10pm'
    friday.textContent = 'Friday: 6am - 10pm'
    saturday.textContent = 'Saturday: 8am - 10pm'
    sunday.textContent = 'Sunday: 8am - 8pm'
    HoursContainer.className = 'HoursContainer'
    content.appendChild(HoursContainer)
    HoursContainer.appendChild(HoursTitle)
    HoursContainer.appendChild(sunday)
    HoursContainer.appendChild(monday)
    HoursContainer.appendChild(tuesday)
    HoursContainer.appendChild(wednesday)
    HoursContainer.appendChild(thursday)
    HoursContainer.appendChild(friday)
    HoursContainer.appendChild(saturday)

    const LocationContainer = document.createElement('div')
    const LocationTitle = document.createElement('h1')
    LocationTitle.textContent = 'Location';
    const Location = document.createElement('p')
    Location.textContent = '123 Forest Drive, Forestville, Maine'
    
    LocationContainer.className = 'LocationContainer'

    content.appendChild(LocationContainer)
    LocationContainer.appendChild(LocationTitle)
    LocationContainer.appendChild(Location)
}

function menuFoodMaker(whereToAppend,titleGiven,paragraphGiven,priceGiven,imageGiven){
    const foodItem = document.createElement('div')
    const title = document.createElement('h1')
    const paragraph = document.createElement('p')
    const price = document.createElement('p')
    const image = document.createElement('div')

    title.textContent = titleGiven
    paragraph.textContent = paragraphGiven
    price.textContent = priceGiven
    image.style.backgroundImage = `url(${imageGiven})`
    foodItem.className = 'foodItem'
    title.className = 'menuItemTitle'
    paragraph.className = 'menuItemParagraph'
    price.className = 'menuItemPrice'
    image.className = 'menuItemImage'

    whereToAppend.appendChild(foodItem)
    foodItem.appendChild(title)
    foodItem.appendChild(paragraph)
    foodItem.appendChild(price)
    foodItem.appendChild(image)
}

function foodTitle(title){
    const foodTitleContainer = document.createElement('div')
    const foodTitleSubContainer = document.createElement('div')
    const foodTitle = document.createElement('h2')
    const foodTitleImage = new Image()

    foodTitle.textContent = title
    foodTitle.className = 'foodTitle'
    foodTitleImage.className = 'foodTitleImage'
    foodTitleImage.src = honeycombimage
    foodTitleContainer.className = 'foodTitleContainer'
    foodTitleSubContainer.className = 'foodTitleSubContainer'
    
    content.appendChild(foodTitleContainer)
    foodTitleContainer.appendChild(foodTitleSubContainer)
    foodTitleSubContainer.appendChild(foodTitle)
    foodTitleContainer.appendChild(foodTitleImage)
    
}

export function loadMenuPage(){
    clearContentPage()
    homebutton.style.backgroundColor = khaki
    menubutton.style.backgroundColor = honey
    contactbutton.style.backgroundColor = khaki
    dripping.style.marginLeft = 240 + 'px'
    ContentHeader('Menu')
    foodTitle('Beverages')
    menuFoodMaker(content,"Honey Tea",'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!','$2',menuimage1)
    menuFoodMaker(content,"Beary Tea","A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.","$3",menuimage2)
    foodTitle('Sides')
    menuFoodMaker(content,"Toast and Jam","A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.","$1",menuimage3)
    menuFoodMaker(content,"Fresh Fruit","A small bowl of fresh fruit, whatever we find at the market for the day.","$3",menuimage4)
    foodTitle('Main Dishes')
    menuFoodMaker(content,'Pancakes',"A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.","$4",menuimage5)
    menuFoodMaker(content,"French Toast","Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.","$5",menuimage6)


}

function ContactPerson(nameGiven,roleGiven,phone_numberGiven,emailGiven,imageGiven){
    const ContactPerson = document.createElement('div')
    const infoHolder = document.createElement('div')
    const name = document.createElement('h1')
    const role = document.createElement('p')
    const phone_number = document.createElement('p')
    const email = document.createElement('p')
    const image = document.createElement('div')

    name.textContent = nameGiven
    role.textContent = roleGiven
    phone_number.textContent = phone_numberGiven
    email.textContent = emailGiven
    
    image.style.backgroundImage = `url(${imageGiven})`
    
    ContactPerson.className = 'ContactPerson'
    name.className = 'ContactPersonName'
    role.className = 'ContactPersonRole'
    phone_number.className = 'ContactPersonPhoneNumber'
    email.className = 'ContactPersonEmail'
    image.className = 'ContactPersonImage'
    infoHolder.className = 'infoHolder'
    content.appendChild(ContactPerson)
    ContactPerson.appendChild(name)
    ContactPerson.appendChild(infoHolder)
    infoHolder.appendChild(role)
    infoHolder.appendChild(phone_number)
    infoHolder.appendChild(email)
    ContactPerson.appendChild(image)
}

export function loadContactPage(){
    clearContentPage()
    homebutton.style.backgroundColor = khaki
    menubutton.style.backgroundColor = khaki
    contactbutton.style.backgroundColor = honey
    dripping.style.marginLeft = 480 + 'px'

    ContentHeader('Contact Us')
    
    ContactPerson('Mama Bear','Chef','555-555-5554','totallyRealEmail@notFake.com',mamabear)
    ContactPerson('Papa Bear','Manager','555-555-5555','perfectlyRealEmail@notFake.com',papabear)
    ContactPerson('Baby Bear','Waiter','555-555-5556','totallyRealEmail@notFake.com',babybear)
}





console.log('index.js working')