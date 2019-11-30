const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class','container')

app.appendChild(container)
var request = new XMLHttpRequest()

request.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=8')

request.onload = function() {
    // debugger
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400){
        data.tracks.track.forEach(track => {
            const card = document.createElement('div');
            card.setAttribute('class','card');

            const h2 = document.createElement('h2');
            h2.textContent = track.name;

            const p = document.createElement('p');
            p.textContent = `${track.artist.name}`;

            container.appendChild(card);
            card.appendChild(h2);
            card.appendChild(p);
        })
    } else {
        console.log('error')
    }
}

request.send()