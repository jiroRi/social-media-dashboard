/* dashboard button */
let btnThemeSwitcher = document.querySelector('.theme-switcher__button');
let btnThemeSwitcherCircle = document.querySelector('.theme-switcher__button > div');

/* dashboard */
let bg = document.querySelector('.bg--theme');
let bgDashboard = document.querySelector('.bg__dashboard--theme');
let hrTheme = document.querySelector('.hr--theme');

/* text */
let textHeaderTheme = document.querySelectorAll('.text-header--theme');
let textSubTheme = document.querySelectorAll('.text-sub--theme');

/* card */
let bgCardTheme = document.querySelectorAll('.bg__card--theme');
let socmedCard = document.querySelectorAll('.socmed-card__followers');
let statisticsCard = document.querySelectorAll('.statistics-card');
let cardHighlightSocmed = document.querySelectorAll('.card__highlight--socmed');
let cardHighlight = document.querySelectorAll('.card__highlight');

/* colors */

let light = [
    'hsl(0, 0%, 100%)', /* White (BG) */
    'hsl(225, 100%, 98%)', /* Very Pale Blue (Top BG Pattern) */
    'hsl(227, 47%, 96%)', /* Light Grayish Blue (Card BG) */
    'hsl(228, 12%, 44%)', /* Dark Grayish Blue (Text) */
    'hsl(230, 17%, 14%)', /* Very Dark Blue (Text) */
    'hsl(230, 22%, 74%)' /* Toggle */
]

let dark = [
    'hsl(230, 17%, 14%)', /* Very Dark Blue BG*/
    'hsl(232, 19%, 15%)', /* Very Dark Blue Dashboard*/
    'hsl(228, 28%, 20%)', /* Dark Desaturated Blue (Card BG) */
    'hsl(228, 34%, 66%)', /* Desaturated Blue (Text) */
    'hsl(0, 0%, 100%)', /* White (Text) */
    'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))' /* Toggle */
];

console.dir(btnThemeSwitcher);

let themeSwitch = false;

btnThemeSwitcher.addEventListener('click', function() {
    if(!themeSwitch) {
        /* dashboard button */
        btnThemeSwitcher.style.background = light[5];
        btnThemeSwitcherCircle.style.backgroundColor = light[1];
        btnThemeSwitcherCircle.style.left = 'calc(100% - 21px)';

        /* dashboard */
        bgDashboard.style.backgroundColor = light[1];
        bg.style.backgroundColor = light[0];
        hrTheme.style.backgroundColor = light[3];

        /* text */
        for( let i = 0 ; i < textHeaderTheme.length ; i++ ) {
            textHeaderTheme[i].style.color = light[4];
        }
        for( let i = 0 ; i < textSubTheme.length ; i++ ) {
            textSubTheme[i].style.color = light[3];
        }
        for( let i = 0 ; i < bgCardTheme.length ; i++ ) {
            bgCardTheme[i].style.backgroundColor = light[2];
        }

        themeSwitch = true;
    }
    else {
        /* dashboard button */
        btnThemeSwitcher.style.background = dark[5];
        btnThemeSwitcherCircle.style.backgroundColor = 'hsl(228, 28%, 20%)';
        btnThemeSwitcherCircle.style.left = '3px';

        /* dashboard */
        bgDashboard.style.backgroundColor = dark[1];
        bg.style.backgroundColor = dark[0];
        hrTheme.style.backgroundColor = dark[3];

        /* text */
        for(let i = 0 ; i < textHeaderTheme.length ; i++ ) {
            textHeaderTheme[i].style.color = dark[4];
        }
        for( let i = 0 ; i < textSubTheme.length ; i++ ) {
            textSubTheme[i].style.color = dark[3];
        }
        for( let i = 0 ; i < bgCardTheme.length ; i++ ) {
            bgCardTheme[i].style.backgroundColor = dark[2];
        }
        themeSwitch = false;
    }
});

for ( let i = 0 ; i < socmedCard.length ; i++) {
    socmedCard[i].addEventListener('mouseover', function() {
        (function(i){
            cardHighlightSocmed[i].style.opacity = '0.25';
        })(i);
    });

    socmedCard[i].addEventListener('mouseout', function() {
        (function(i) {
            cardHighlightSocmed[i].style.opacity = '0';
        })(i);
    });
}

for ( let i = 0 ; i < statisticsCard.length ; i++) {
    statisticsCard[i].addEventListener('mouseover', function() {
        (function(i){
            cardHighlight[i].style.opacity = '0.25';
        })(i);
    });

    statisticsCard[i].addEventListener('mouseout', function() {
        (function(i) {
            cardHighlight[i].style.opacity = '0';
        })(i);
    });
}
