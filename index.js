const root = document.getElementById("demo");

const baseUrl = 'https://dummyjson.com/quotes/'

const fetchData =  (baseUrl) => {

    fetch(`${baseUrl}/random`)
    .then((res) => {
      return res.json();
    })
    .then((Items) => {
      displayImages(Items);
    });
  
}


function displayImages(Items) {
    const card = document.createElement('div');
    card.style.height = '200px';
    card.style.width = '50%';
    card.style.backgroundColor = 'black';
    card.style.color = 'aliceblue';
    card.style.padding = '60px';
    card.style.fontFamily = '"Poppins", serif';
    card.style.fontWeight = '300';
    card.style.fontStyle = 'italic';
    card.style.marginLeft = '500px';
    const title = document.createElement('h4');
    title.innerHTML = Items.quote;

    card.appendChild(title);

    root.appendChild(card);
}

fetchData(baseUrl)
