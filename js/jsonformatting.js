let xhr = new XMLHttpRequest();
let xhr1 = new XMLHttpRequest();
let xhr2 = new XMLHttpRequest();
let xhr3 = new XMLHttpRequest();

const cardContainer = document.getElementById('container');
const row = document.getElementById('row')

// Functions for creating cards

function createCard(title, content, ) {
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


function createBlockCard(date, title, text, linkwb, link, index) {
    //For creating the sections on the activities site index;
    const blockCard = document.createElement('div');

    //If odd number, block-white. Else, block-blue
    if(index == 1){
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
        blockCardImg.src = link;

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
        blockCardButton.textContent = 'Learn more';
        blockCardButton.href = link;

        blockCardContent.appendChild(blockCardDate);
        blockCardContent.appendChild(blockCardTitle);
        blockCardContent.appendChild(blockCardText);
        blockCardContent.appendChild(blockCardButton)

        //Final appending to block
        blockCard.appendChild(line);
        blockCard.appendChild(innerBlockCard);

        return blockCard;
    }
    else {
        blockCard.classList.add('block-blue');
        //Inside block

        const line = document.createElement('h2');
        line.classList.add('linee', 'line-2');
        const innerBlockCard = document.createElement('div');
        innerBlockCard.classList.add('innerblock')

        //Inside line
        const lineSpan = document.createElement('span');
        lineSpan.textContent = "___";
        line.appendChild(lineSpan);

        //Inside innerblock
        const blockCardActivcard = document.createElement('div');
        blockCardActivcard.classList.add('activcard-2');

        const blockCardContent = document.createElement('div');
        blockCardContent.classList.add('content', 'content-2');

        innerBlockCard.appendChild(blockCardContent);
        innerBlockCard.appendChild(blockCardActivcard);

        //Inside activcard
        const blockCardImg = document.createElement('img');
        blockCardImg.classList.add('blockimg-2')
        blockCardImg.src = link;

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
        blockCardButton.textContent = 'Learn more';
        blockCardButton.href = link;

        blockCardContent.appendChild(blockCardDate);
        blockCardContent.appendChild(blockCardTitle);
        blockCardContent.appendChild(blockCardText);
        blockCardContent.appendChild(blockCardButton)

        //Final appending to block
        blockCard.appendChild(line);
        blockCard.appendChild(innerBlockCard);

        return blockCard;
    }

    

}


// JSON



//when state of request changes
xhr.onload = function(){
    //if server response === 'ok', create some HTML
    if(xhr.status === 200 ){
        //create an object to get the data from the JSON file
        let responseObject = JSON.parse(xhr.responseText)

        const blockCardContainer = document.getElementsByClassName('classmobil')[0];
        for(let i = 0; i < responseObject.activities.length; i++){
            //Checks if index is odd or even
            let ires = i % 2;
            //Output depends on ires
            blockCardContainer.appendChild(createBlockCard(responseObject.activities[i].date, responseObject.activities[i].title, responseObject.activities[i].content, responseObject.activities[i].linkwb, responseObject.activities[i].link, ires))
        }
    }
}

xhr1.onload = function(){
    //if server response === 'ok', create some HTML
    if(xhr1.status === 200 ){
        //create an object to get the data from the JSON file
        let responseObject = JSON.parse(xhr1.responseText)
        let newCard = '';

        for(let i = 0; i < responseObject.rescard.length; i++){
            newCard += "<div class='rescard'>"
            newCard += "<img src='"  + responseObject.rescard[i].img + "'"
            newCard += "alt ='" + responseObject.rescard[i].img + "' />"
            newCard += "<p>" + responseObject.rescard[i].description + "</p>"
            newCard += "<div>" + responseObject.rescard[i].cost + "</div>"
            newCard += "<div>" + responseObject.rescard[i].location + "</div>"
            newCard += "<a href='" + responseObject.rescard[i].link + "'>"
            newCard += "<button> RSVP </button>"
            newCard += "<a> </div>" 
            document.getElementById('row').innerHTML = newCard;
        }
    }
}

xhr2.onload = function(){
    //if server response === 'ok', create some HTML
    if(xhr2.status === 200 ){
        //create an object to get the data from the JSON file
        let responseObject = JSON.parse(xhr2.responseText)
        let newCard = '';

        for(let i = 0; i < responseObject.rescard.length; i++){
            newCard += "<div class='rescard'>"
            newCard += "<img src='"  + responseObject.rescard[i].img + "'"
            newCard += "alt ='" + responseObject.rescard[i].img + "' />"
            newCard += "<p>" + responseObject.rescard[i].description + "</p>"
            newCard += "<div>" + responseObject.rescard[i].cost + "</div>"
            newCard += "<div>" + responseObject.rescard[i].location + "</div>"
            newCard += "<a href='" + responseObject.rescard[i].link + "'>"
            newCard += "<button> RSVP </button>"
            newCard += "<a> </div>" 
            document.getElementById('row').innerHTML = newCard;
        }
    }
}

xhr3.onload = function(){
    //if server response === 'ok', create some HTML
    if(xhr3.status === 200 ){
        //create an object to get the data from the JSON file
        let responseObject = JSON.parse(xhr3.responseText)
        let newCard = '';

        for(let i = 0; i < responseObject.rescard.length; i++){
            newCard += "<div class='rescard'>"
            newCard += "<img src='"  + responseObject.rescard[i].img + "'"
            newCard += "alt ='" + responseObject.rescard[i].img + "' />"
            newCard += "<p>" + responseObject.rescard[i].description + "</p>"
            newCard += "<div>" + responseObject.rescard[i].cost + "</div>"
            newCard += "<div>" + responseObject.rescard[i].location + "</div>"
            newCard += "<a href='" + responseObject.rescard[i].link + "'>"
            newCard += "<button> RSVP </button>"
            newCard += "<a> </div>" 
            document.getElementById('row').innerHTML = newCard;
        }
    }
}

// getElementsByClassName gets an array, using [0] pulls the first item in the array
if (document.getElementsByClassName('classmobil')[0]) {
    xhr.open('GET', './js/activities.json', true)
    xhr.send(null)
    //blockCardContainer.appendChild(createBlockCard("May 14", "Haben's House", "Lorem ipsum dolor sit amet, consecteur adipiscing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a0/61/58/franklin-park-conservatory.jpg?w=500&h=400&s=1", "https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom"));
}
else {}

if (document.getElementsByClassName('tital')[0].textContent == "Restaurants") {
    xhr1.open('GET', './js/restaurants.json', true)
    xhr1.send(null)
}
else {}

if (document.getElementsByClassName('tital')[0].textContent == "Events") {
    xhr2.open('GET', './js/events.json', true)
    xhr2.send(null)
}
else {}

if (document.getElementsByClassName('tital')[0].textContent == "Sports") {
    xhr3.open('GET', './js/sports.json', true)
    xhr3.send(null)
}
else {}
