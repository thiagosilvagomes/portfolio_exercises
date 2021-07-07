const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

const appendJoke = (joke) => {
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    li.innerText = joke;
    ul.appendChild(li);
}

const getJoke = (term) => {
    return new Promise ((resolve, reject) => {
        const param = { headers: { Accept: 'application/json' } };
        fetch(`https://icanhazdadjoke.com/search?term=${term}`, param)
            .then((response) => {
                response.json()
                    .then((data) => {
                        appendJoke(data.results[0].joke);
                        resolve();
                    });
            });
    });
}

const fetchJoke = () => {
    getJoke('Spider');
};

//fetchJoke();

window.onload = () => fetchJoke();