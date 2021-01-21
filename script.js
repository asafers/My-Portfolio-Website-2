const greetings = () => {
    newGreet = '';
    let salutations = document.getElementById('greeting');
    switch (salutations.innerHTML) {
        case 'Hello!|':
            newGreet = 'Bon|';
            break;
        case 'Bon|':
            newGreet = 'Bonjour!|';
            break;
        case 'Bonjour!|':
            newGreet = 'Gu|';
            break;
        case 'Gu|':
            newGreet = 'Guten|';
            break;
        case 'Guten|':
            newGreet = 'Guten Tag!|';
            break;
        case 'Guten Tag!|':
            newGreet = 'Ho|';
            break;
        case 'Ho|':
            newGreet = 'Hola!|';
            break;
        case 'Hola!|':
            newGreet = '안|';
            break;
        case '안|':
            newGreet = '안녕|';
            break;
        case '안녕|':
            newGreet = '안녕하|';
            break;
        case '안녕하|':
            newGreet = '안녕하세|';
            break;
        case '안녕하세|':
            newGreet = '안녕하세요|';
            break;
        case '안녕하세요|':
            newGreet = 'こ|';
            break;
        case 'こ|':
            newGreet = 'こん|';
            break;
        case 'こん|':
            newGreet = 'こんに|';
            break;
        case 'こんに|':
            newGreet = 'こんにち|';
            break;
        case 'こんにち|':
            newGreet = 'こんにちは|';
            break;
        case 'こんにちは|':
            newGreet = 'O|';
            break;
        case 'O|':
            newGreet = 'Ola !|';
            break;
        case 'Ola !|':
            newGreet = 'Ci|';
            break;
        case 'Ci|':
            newGreet = 'Ciao !|';
            break;
        case 'Ciao !|':
            newGreet = 'He|';
            break;
        case 'He|':
            newGreet = 'Hello!|';
            break;
    }
    salutations.innerHTML = newGreet;
}

window.setInterval(greetings, 400);

/*Accordion*/

let accordions = document.querySelectorAll(".accordion");
console.log(accordions);

function createAccordion() {
    // get attribute value
    let ariaAttribute = this.getAttribute('aria-expanded');

    // change all accordions aria-expanded attribute value into false.
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].setAttribute('aria-expanded', 'false');
    }

    // check if aria-expanded value is false.
    if (ariaAttribute === 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

accordions.forEach(accordion => accordion.addEventListener('click', createAccordion));


/*Scroll Skills*/

