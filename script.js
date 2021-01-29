// dark mode toggle button
const darkMode = document.querySelector('.toggle__input');

// background
const body = document.querySelector('body');

// header bg
const headerBg = document.querySelector('.header .header-before');

// text
const p = document.querySelectorAll('p');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

// card
const followersCards = document.querySelectorAll('.followers-container__followers-info');
const overviewCards = document.querySelectorAll('.overview-content-col');
const overviewFollowerCount = document.querySelectorAll('.overview-content-col-follower-count');
const followerCount = document.querySelectorAll('.followers-container__followers-count--font-size');

// dark mode text
const darkModeText = document.querySelector('.dark-mode-text');
console.log(darkModeText);

// elements to add classes to display dark mode
const elementsChanged = [body, headerBg, p, h1, h2,
                        followerCount, overviewFollowerCount,
                        followersCards, overviewCards,
                        darkModeText];

// classes used to modify the elements to dark mode color scheme
const darkModifierCSSClasses = ['text-white', 'text-dark', 'dark-body',
                                'dark-card-bg', 'dark-header-bg'];

function addClass(element) {
    /*
        Adds class to element to be modified
        to dark mode color scheme
    */

    // paragraph text
    for(let e = 0; e < p.length; e++) {
        // elements that should not be modified
        if (element.classList.contains('increase-text')) return;
        if (element.classList.contains('decrease-text')) return;

        if (element == p[e]) element.classList.add('text-dark');
    }

    // headings
    if (element == h1) element.classList.add('text-white');
    if (element == h2) element.classList.add('text-white');
    
    // big text in cards
    // followers container
    for(let e = 0; e < followerCount.length; e++) {
        if (element == followerCount[e]) element.classList.add('text-white');
    }
    // overview container
    for(let e = 0; e < overviewFollowerCount.length; e++) {
        if (element == overviewFollowerCount[e]) {
            element.classList.remove('text-dark');
            element.classList.add('text-white');
        }
    }

    // dark mode text
    if (element == darkModeText) element.classList.add('text-white');

    // body
    if (element == body) element.classList.add('dark-body');

    // card body
    // followers container
    for(let e = 0; e < followersCards.length; e++) {
        if (element == followersCards[e]) {
            element.classList.add('dark-card-bg');
            element.classList.remove('hover-light'); // hover effect for light theme
            /* new hover effect will be placed on class below */
            element.classList.add('hover-dark');
        }
    }
    // overview container
    for(let e = 0; e < overviewCards.length; e++) {
        if (element == overviewCards[e]) {
            element.classList.add('dark-card-bg');
            element.classList.remove('hover-light');
            element.classList.add('hover-dark');
        }
    }

    // headerbg
    if (element == headerBg) element.classList.add('dark-header-bg');
}

function removeClass(element) {
    /*
        Removes the classes that change to dark mode color
        scheme so that the default light theme will show
    */

    darkModifierCSSClasses.forEach((styleClass) => {
        if (element.classList.contains(styleClass)) {
            element.classList.remove(styleClass);
        }
    });

    // changing hover effects back to light theme hover effect
    // followers container
    for(let e = 0; e < followersCards.length; e++) {
        if (element == followersCards[e]) {
            // remove dark theme hover then add light theme hover
            element.classList.remove('hover-dark');
            element.classList.add('hover-light');
        }
    }
    // overview container
    for(let e = 0; e < overviewCards.length; e++) {
        if (element == overviewCards[e]) {
            element.classList.remove('hover-dark');
            element.classList.add('hover-light');
        }
    }
}

function enableDarkMode() {
    /*
        Enables dark mode if it is checkbox is active
    */

    console.log('Dark mode active');
    elementsChanged.forEach((element) => {
        // if there is multiples elements; Nodelist
        if (element.length > 0) {
            element.forEach((node) => {
                addClass(node);
            })
        } else {
            addClass(element);
        }
    });
}

function disableDarkMode() {
    /*
        Disables dark mode if it is checkbox is active
    */

    console.log('Dark mode turned off');
    elementsChanged.forEach((element) => {
        // if there is multiples elements; Nodelist
        if (element.length > 0) {
            element.forEach((node) => {
                removeClass(node);
            })
        } else {
            removeClass(element);
        }
    });
}

// listening when the dark mode checkbox is checked or unchecked
darkMode.addEventListener('change', () => {
    if(darkMode.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});