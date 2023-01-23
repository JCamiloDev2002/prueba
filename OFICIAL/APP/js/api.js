//code
const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b2baeb898d47f8f2682c320a5bc1052b&hash=9f47ae38781b6bd140a706bc95bbec9c';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();

/*
- VENTANA MODAL

*/