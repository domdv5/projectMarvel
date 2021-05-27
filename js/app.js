let value = 0;
var counterValue = 0;
var container = document.getElementById('CarouselInner');

for (let i = 0; i < 150; i++) {
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=751c2d77196e923dff3ad0827b4d6525&hash=7dd27e01838f539c618b3145f10796df&limit=10&offset=${value}`

    fetch(url)
        .then(res => res.json())
        .then((json) => {
            var contentHTML = ''
            contentHTML += `<div class="carousel-item ${(parseInt(counterValue) == 0 ? 'active' : '')}" data-bs-interval="5000"><div class="row">`
            for (const hero of json.data.results) {
                let urlHero = hero.urls[1].url;
                  contentHTML += `
             <div class="col-md-4">
                 <a href="${urlHero}" target="_blank">
                     <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                 </a>
                 <h3 class="title">${hero.name}</h3>
            </div>`

            }
            contentHTML += `</div></div>`;
            container.innerHTML += (contentHTML);
            counterValue++;
        })
        value+=10;
}
        //container.innerHTML = contentHTML
        var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
        var carousel = new bootstrap.Carousel(myCarousel)

