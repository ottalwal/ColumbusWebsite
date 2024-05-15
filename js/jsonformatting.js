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


if (document.getElementById('container')) {
    const card1 = createCard('Dynamic Cards 101', 'Learn how to spice up your web page with dynamic card rendering!');
    const card2 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
    const card3 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
    const card4 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
    const card5 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');
    const card6 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');

    row.appendChild(card1);
    row.appendChild(card2);
    row.appendChild(card3);
    row.appendChild(card4);
    row.appendChild(card5);
    row.appendChild(card6);
}
else { }

function createBlockCard(date, title, text, img, link) {
    //For creating the sections on the activities site

    const blockCard = document.createElement('div');
    blockCard.classList.add('block-white');
    
    //Inside block

    const line = document.createElement('h2');
    line.classList.add('linee', 'line-1');
    const innerBlockCard = document.createElement('div');
    innerBlockCard.classList.add('innerblock')

    //Inside line
    const lineSpan = document.createElement('span');
    lineSpan.textContent = "___";
    line.appendChild(lineSpan);

    //Inside innerblock
    const blockCardActivcard = document.createElement('div');
    blockCardActivcard.classList.add('activcard-1');

    const blockCardContent = document.createElement('div');
    blockCardContent.classList.add('content', 'content-1');

    innerBlockCard.appendChild(blockCardActivcard);
    innerBlockCard.appendChild(blockCardContent);

    //Inside activcard
    const blockCardImg = document.createElement('img');
    blockCardImg.classList.add('blockimg-1')
    blockCardImg.src = img;

    blockCardActivcard.appendChild(blockCardImg);
  
    //Inside content
    const blockCardDate = document.createElement('span');
    blockCardDate.textContent = date

    const blockCardTitle = document.createElement('div');
    blockCardTitle.classList.add('title');
    blockCardTitle.textContent = title;

    const blockCardText = document.createElement('div');
    blockCardText.classList.add('text');
    blockCardText.textContent = text;

    const blockCardButton = document.createElement('button');
    blockCardButton.href = link;
    blockCardButton.textContent = 'Learn more';

    blockCardContent.appendChild(blockCardDate);
    blockCardContent.appendChild(blockCardTitle);
    blockCardContent.appendChild(blockCardText);
    blockCardContent.appendChild(blockCardButton)


    
    blockCard.appendChild(line);
    blockCard.appendChild(innerBlockCard);

    return blockCard;
}

const blockCardContainer = document.getElementsByClassName('classmobil')[0];

if (document.getElementsByClassName('classmobil')) {
    blockCardContainer.appendChild(createBlockCard("May 14", "Haben's House", "Lorem ipsum dolor sit amet, consecteur adipiscing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a0/61/58/franklin-park-conservatory.jpg?w=500&h=400&s=1", "https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom"));
}
else {}
