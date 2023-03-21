let prevButton = null;

// Big function to Calculate 
function getZodiacByCalendar() {
  function getZodiacSign(day, month) {
      let zodiacSign = "";
      if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiacSign = "aries";
      } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiacSign = "taurus";
      } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiacSign = "gemini";
      } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiacSign = "cancer";
      } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiacSign = "leo";
      } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiacSign = "virgo";
      } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiacSign = "libra";
      } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiacSign = "scorpio";
      } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiacSign = "sagittarius";
      } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiacSign = "capricorn";
      } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiacSign = "aquarius";
      } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiacSign = "pisces";
      }
      return zodiacSign;
  }
   //split day and month into two variables
  function calculateZodiac() {
      const birthday = document.getElementById("birthday").value;
      const day = birthday.split("-")[2];
      const month = birthday.split("-")[1];
      return getZodiacSign(day, month);
  }
  //show zodiac name on the span
  const zodiacSign = calculateZodiac();
  document.getElementById("zodiac-sign").innerText = zodiacSign;
  //delete the astrology icon in the homepage and update interface for the zodiac sign
  const astrologyIcons = document.querySelectorAll('.astrology');
  astrologyIcons.forEach(icon => icon.remove());
  //button click effects
  const button = document.getElementById(zodiacSign);
  button.style.transform = 'scale(1.2)';
  button.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2), 0 0 0 2px white';
  if (prevButton && prevButton !== button) {
    prevButton.style.transform = 'scale(1)';
    prevButton.style.boxShadow = 'none';
  }
  prevButton = button;

  update_interface(zodiacSign);
}
//Big function to get zodiac by click
function getZodiacByClick(button) {
    const zodiacSign = button.target.id;
    if (zodiacSign == 'button-list') pass
    update_interface(zodiacSign);
}
  
let currentSound;
//Big function to update all the interface elements
function update_interface(zodiacSign) {
    //get all buttons
    const zodiacButton = document.getElementById(zodiacSign);
    //description elements
    const descriptions = {
      aquarius: 'Aquarius (January 20 - February 18): Aquarians are known for their independence, originality, and intelligence. They are often deep thinkers who enjoy helping others.',
      pisces: 'Pisces (February 19 - March 20): Pisceans are known for their empathy, sensitivity, and creativity. They are often artistic and have a strong sense of intuition.',
      aries: 'Aries (March 21 - April 19): Arians are known for their courage, energy, and leadership. They are often trailblazers who are not afraid to take risks.',
      taurus: 'Taurus (April 20 - May 20): Taureans are known for their reliability, patience, and practicality. They are often grounded and have a strong sense of loyalty.',
      gemini: 'Gemini (May 21 - June 20): Geminis are known for their versatility, curiosity, and wit. They are often great communicators who love to learn and share knowledge.',
      cancer: 'Cancer (June 21 - July 22): Cancerians are known for their emotional intelligence, loyalty, and nurturing nature. They are often deeply empathetic and value close relationships.',
      leo: 'Leo (July 23 - August 22): Leos are known for their confidence, charisma, and creativity. They are often natural leaders who enjoy being in the spotlight.',
      virgo: 'Virgo (August 23 - September 22): Virgos are known for their attention to detail, organization, and practicality. They are often reliable and hardworking, with a strong sense of responsibility.',
      libra: 'Libra (September 23 - October 22): Librans are known for their balance, harmony, and diplomacy. They are often skilled at seeing multiple perspectives and finding common ground.',
      scorpio: 'Scorpio (October 23 - November 21): Scorpios are known for their intensity, passion, and intuition. They are often deeply loyal and have a strong sense of purpose.',
      sagittarius: 'Sagittarius (November 22 - December 21): Sagittarians are known for adventurous spirit, optimism, and open-mindedness. They love exploring new ideas and experiences.',
      capricorn: 'Capricorn (December 22 - January 19): Capricorns are known for their discipline, ambition, and practicality. They are often hardworking and dedicated, with a strong sense of responsibility.'
    };
    //show descriptions based on zodiacSign
    const description = document.getElementById("description");
    description.textContent = descriptions[zodiacSign];
    //reset animation after each click
    function reset_animation() {
      var left = document.getElementById('left');
      var right = document.getElementById('right');
      left.style.animation = 'none';
      right.style.animation = 'none';
      left.offsetHeight; 
      right.offsetHeight; 
      left.style.animation = null; 
      right.style.animation = null; 
    }
    //show zodiac icon from both sides
    function showZodiacIcon(zodiacButton) {
      const zodiacIcon = document.createElement('img');

      zodiacIcon.src = `img/${zodiacSign}.png`;
      zodiacIcon.alt = zodiacSign;
      zodiacIcon.classList.add('.zodiac-icons');
      document.body.style.backgroundColor = getComputedStyle(zodiacButton).backgroundColor;

      const containers = document.querySelectorAll('.zodiac-icons');
      containers.forEach(container => {
        const iconCopy = zodiacIcon.cloneNode();
        container.innerHTML = '';
        container.appendChild(iconCopy);
      }); 
      reset_animation();
    }
    //play sound
    function playSound(zodiacButton) {
      const sound = document.getElementById(zodiacButton.dataset.sound);
      sound.currentTime = 0;
      if (currentSound) {
        currentSound.pause();
      }//delete sound when another button is click
      sound.play();
      currentSound = sound;
      setTimeout(function() {
        sound.pause();
      }, 5000);
    }//set timeout for sound only plays for 5s

    showZodiacIcon(zodiacButton);
    playSound(zodiacButton);
}
//Main function
function main() {    
    //show astrology icon when a page is load for homepage
    function showAstrologyIcon() {
      const astrologyIcon = document.createElement('img');
      astrologyIcon.src = `img/astrology.png`;
      astrologyIcon.alt = 'astrology';
      astrologyIcon.classList.add('.astrology');
    
      const astrologyContainers = document.querySelectorAll('.astrology');
      astrologyContainers.forEach(container => {
        const astrologyCopy = astrologyIcon.cloneNode();
        container.appendChild(astrologyCopy);
      }); 
    }
    showAstrologyIcon();
    //when a form is submitted, calculate the zodiac
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        getZodiacByCalendar();
    });
    //remove astrology icon when another button is clicked
    const buttons = document.querySelectorAll('.zodiac');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const astrologyIcons = document.querySelectorAll('.astrology');
        astrologyIcons.forEach(icon => icon.remove());
        //button click effects
        button.style.transform = 'scale(1.2)';
        button.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2), 0 0 0 2px white';
        if (prevButton && prevButton !== button) {
          prevButton.style.transform = 'scale(1)';
          prevButton.style.boxShadow = 'none';
        }
        prevButton = button;
      });
    });
    //When a button is click, then called the function getZodiacByClick
    const buttonList = document.getElementById("button-list");
    buttonList.addEventListener("click", button => { 
      getZodiacByClick(button);
    });
}

main();