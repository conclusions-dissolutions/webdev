
export const test = "Hello World From functions.js";

export function gsapOurTeam(){
    gsap.registerPlugin(ScrollTrigger);

    let horizontalSection = document.querySelector('.our_team_card_wrap');
    
    // console.log(horizontalSection.scrollWidth);
    
    gsap.to('.our_team_card_wrap', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.our_team_card_wrap',
        start: '130px center',
        end: '+=2000px',
        pin: '#ourTeam_section_id',
        scrub: true,
        invalidateOnRefresh: true,
        markers: false
      }
  
    });
}

export function gsapOurGames(){
    gsap.registerPlugin(ScrollTrigger);

    let horizontalSection_games = document.querySelector('.our_games_card_wrap');
    
    // console.log(horizontalSection_games.scrollWidth);
    
    gsap.to('.our_games_card_wrap', {
      x: () => horizontalSection_games.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.our_games_card_wrap',
        start: '130px center',
        end: '+=2000px',
        pin: '#ourGames_id',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
}


// Form submit 
export function form_submit(theform, result){
  let result_text = result.querySelector('p');
  let formData = new FormData(theform)
  let form_object = Object.fromEntries(formData);
  let json = JSON.stringify(form_object);
  result_text.innerHTML = 'Please wait...';
  result.classList.add('submitting')

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if(response.status == 200){
      result_text.innerHTML = 'Form submitted successfully';
      result.classList.add('submitted')
    }else{
      console.log(response);
      result_text.innerHTML = json.message;
    }
  })
  .catch(error => {
    console.log(error);
    result_text.innerHTML = 'Something went wrong!';
    result.classList.add('form_error')
  })
  .then( function() {
    theform.reset();
    setTimeout(() => {
      result.classList.remove('submitting')
      result.classList.remove('submitted')
      result.classList.remove('form_error')
    }, 3000)
  })

}

// Submitted via
export function submitted_via(){
const urlParams = new URLSearchParams(window.location.search);
let via = urlParams.get("via");
if(via){
  via = via.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  console.log(via);
}else{
  via = 'Link';
}
return via;

} 


