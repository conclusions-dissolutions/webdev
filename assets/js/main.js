

import {test, gsapOurTeam, gsapOurGames, form_submit, submitted_via} from './functions.js';
// console.log(test);

AOS.init();

// Add data title for nav text wrapper 
let nav_text_wrap = document.querySelectorAll(".nav_text_wrapper");
nav_text_wrap.forEach(each_nav_wrap => {
    let nav_text_val = each_nav_wrap.querySelector(".nav_span_text").innerHTML;
    each_nav_wrap.setAttribute("data-title", nav_text_val);
})

// Nav toggle button 
let body_tag = document.querySelector("body")
let toggle_button = document.querySelector(".nav_toggle_button");

toggle_button.addEventListener("click", () => {
    body_tag.classList.toggle('nav_active')
})

let nav_buttons = document.querySelectorAll('.nav_buttons a');
nav_buttons.forEach(nav_button => {
    nav_button.addEventListener("click", () => {
        if(body_tag.classList.contains('nav_active')){
            body_tag.classList.remove('nav_active');
        }
    })
})

// Form submit 
let form = document.querySelector("#form");
let result = document.querySelector('#result')
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form_submit(form, result);
})

let submitted_form_input = document.querySelector(".submitted_via");
submitted_form_input.value = submitted_via();




// GSAP 
// Add Gsap if items are more then 5 
let ourTeam_cards_wrapper = document.querySelector(".our_team_card_wrap");
if( ourTeam_cards_wrapper.childElementCount > 5){
    ourTeam_cards_wrapper.closest("section").classList.add("gsap_working");
    gsapOurTeam();
}else{
    console.log("No GSAP for Our Team Section");
}

let ourGame_cards_wrapper = document.querySelector(".our_games_card_wrap");
if( ourGame_cards_wrapper.childElementCount > 5){
    gsapOurGames();
}else{
    // console.log("No GSAP for Our Games Section");
}

if(window.innerWidth < 600){
    ourGame_cards_wrapper.closest("section").classList.add("gsap_working");
    document.querySelector(".our_games_card_wrap").classList.remove('justify-content-center')
    gsapOurGames();
}

let copyright_sy = document.querySelector('.copyright_sign')
copyright_sy.addEventListener('dblclick', () => {
    let ans = prompt("They come out at night without being called, and are lost in the day without being stolen. What are they?")
    if(ans.toLowerCase() === 'stars' || ans.toLowerCase() === 'star'){
        alert("Ans: Stars")
    }else{
        alert("Bad Answer");
        body_tag.style.cssText = 'transform-origin: bottom;transition: 3s; transform: scale(0);';
        setTimeout(() => {
            let next_ans = prompt("Does your name start with J and end with L and 'eo' or 'oe' in middle ? (Y/N)")
            if(next_ans.toLowerCase() === 'y' || next_ans.toLowerCase() === 'y'){
                let new_02 = alert('Well, 1. you are yay. \n2. solve the next riddles.');
                let gjoke = prompt("What does one gay say to another homo sitting at the bar?");
                    if(gjoke.toLowerCase === 'Do you mind if I push in your stool?\n😂😂'){
                        alert(" ")
                    }else{
                        alert("Ans: Do you mind if I push in your stool? \n😂😂 ")
                    }
            }else{
                prompt("No it does! you yay")
            }
        }, 1000);
    }
})


let dom_year = document.querySelector('.year');
async function getData() {
    const url = "https://time.akamai.com/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            dom_year.textContent = '2050';
        }

        const timestampText = await response.text();
        const timestamp = parseInt(timestampText);
        const date = new Date(timestamp * 1000);
        const year = date.getFullYear();
        dom_year.textContent = year;
    } catch (error) {
        console.error(error.message);
        const currentYear = new Date().getFullYear();
        dom_year.textContent = currentYear;
    }
}
getData();


// Switer js stuff 
// window.addEventListener("resize", () => {
//     reponsive_swiper();
// })
// reponsive_swiper()

// function reponsive_swiper(){
//     if(window.innerWidth > 1024 ){
//         // console.log("IN desktop mode");
//         const swiper = new Swiper('.swiper_main_wrapper', {
//             // direction: 'horizontal',
//             direction: 'vertical',
//             slidesPerView: "auto",
//             spaceBetween: 0,
//             speed: 300,
//             mousewheel: {
//                 enabled: true,
//                 sensitivity: 1,
//             },
//             touchReleaseOnEdges:true,  
//         })
//     }else if(window.innerWidth < 1024 && window.innerWidth > 600){
//         // console.log("In Tab Mode");
//     }else if(window.innerWidth < 600){
      
//         // console.log("For Mobile");
//         const swiper = new Swiper('.swiper_main_wrapper', {
//             direction: 'horizontal',
//             // direction: 'vertical',
//             allowTouchMove:true,
//             slidesPerView: 1,
//             spaceBetween: 0,
//             speed: 1000,
//             slideVisibleClass:"testing",
//             mousewheel: {
//                 enabled: true,
//                 sensitivity: 1,
//             },
//             touchReleaseOnEdges:true,  
//         })
//     }
// }


