// Cards/JSON 
const cardContainer = document.getElementById('container');
const row = document.getElementById('row')

function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('rescard');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

const card1 = createCard('Dynamic Cards 101', 'Learn how to spice up your web page with dynamic card rendering!');
const card2 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
const card3 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
const card4 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
const card5 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
const card6 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);
cardContainer.appendChild(card4);
cardContainer.appendChild(card5);
cardContainer.appendChild(card6);

row.appendChild(card1);
row.appendChild(card2); 
row.appendChild(card3);
row.appendChild(card4);
row.appendChild(card5);
row.appendChild(card6);

