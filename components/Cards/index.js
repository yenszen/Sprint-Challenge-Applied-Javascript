// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardData = axios.get("https://lambda-times-backend.herokuapp.com/articles");

const createCard = (obj) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorName = document.createElement("span");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);

    // set class names
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    // add content
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorName.textContent = obj.authorName;

    return card;
}

const cardsContainer = document.querySelector(".cards-container");

cardData.then(response => {
    console.log(cardData);
    console.log("res", response);
    
    const array = Object.values(response.data.articles);
    console.log(array);

    array.forEach(item => {
        item.forEach(element => {
            const newCard = createCard(element);
            cardsContainer.appendChild(newCard);
        })
    })
})

cardData.catch(error => {
    console.log("Error: ", error);
})