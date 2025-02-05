hoini 3
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

// h-[200px] w-1/2 bg-black-300 text-green-500 p-[60px] font-normal italic ml-[500px]

function displayImages(Items) {
    const text = document.getElementById('quote');
    text.innerHTML = Items.quote;
}

fetchData(baseUrl);
