const axios = require('axios');

let deezTracks = axios.post('/tracks');

debugger





































// .append('svg:image')
// .attr('xlink:href', d => {return d.image})
// .attr('width',100)
// .attr('height', 150)
// .append('image')
// somn = 'https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=a7dc1b3e7ae628a36a21f5b31ca159aa&page=1&page_size=$&format=json'
// let rawData = generateRandomData();
// https://api.deezer.com/version/service/391144/get/?parameters
// https://api.deezer.com/2.0/chart/391144/get/?parameters
// https://api.deezer.com/2.0/chart/0/?method=get
// http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=15

// https://api.musixmatch.com/ws/1.1/?method=chart.tracks.get&country=us&api_key=a7dc1b3e7ae628a36a21f5b31ca159aa&format=json&limit=5
d3.json(deezTracks).then(function (tracks) {
    debugger
    const height = 650;
    const width = 1300;
    var svg = d3.select('#root')
        .append('svg')
        .attr('height', height)
        .attr('width', width)
    const velocityDecay = 0.15;
    const forceStrength = 0.03;

    let nodes;
    let bubbles;
    let radiusScale;
    let colorScale;
    let heightScale;

    radiusScale = d3.scaleLinear()
        .domain([0, 500])
        .range([5, 30]);

    colorScale = d3.scaleSequential()
        .domain([0, 100])
        .interpolator(d3.interpolateRainbow);

    heightScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, height]);
    arrTracks = tracks.tracks.track
    nodes = arrTracks.map(d => {
        debugger
        return {
            name: d.name,
            artist: d.artist.name,
            rank: parseInt(d["@attr"].rank),
            radius: radiusScale(d.listeners / 400),
            image: Object.values(d.image[0])[0],
            x: Math.random() * width,
            y: heightScale((d.listeners / 400))/*  Math.random() * height */
        }
    })

    // debugger
    // nodes = nasa.photos.map(d => {
    //     // debugger
    //     return {
    //         name: d.camera.name,
    //         roverName: d.rover.name,
    //         rank: d.id,
    //         radius: d.id/2000,
    //         // rank: Object.values(d).id,
    //         image: d.img_src
    //     }
    // })


    debugger
    var defs = svg.append('defs');

    defs.selectAll('.poster-art')
        .data(nodes)
        .enter()
        .append('pattern')
        .attr('class', 'poster-art')
        .attr('id', d => d.rank)
        .attr('height', '100%')
        .attr('width', '100%')
        .attr("patternContentUnits", "objectBoundingBox")
        .append('image')
        .attr('height', 1.5)
        .attr('width', 1)
        .attr("preserveAspectRatio", "none")
        .attr('xlink:href', d => d.image)

    // debugger
    bubbles = d3.select('#root svg')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', d => { return d.radius })
        .attr('fill', d => `url(#${d.rank})`)
        .attr('stroke', d => { return d3.rgb('blue').darker() })
        .call(d3.drag()
            .on('start', dragStarted)
            .on('drag', dragged)
            .on('end', dragEnded)
        )

    // debugger
    let forceSimulation;

    forceSimulation = d3.forceSimulation()
        .nodes(nodes)
        .velocityDecay(velocityDecay)
        .on('tick', ticked)
        .force('x', d3.forceX().strength(forceStrength).x(width / 2))
        .force('y', d3.forceY().strength(forceStrength).y(height / 2))
        .force("charge", d3.forceManyBody().strength(charge))


    function dragStarted(d) {
        console.log('start');
        forceSimulation.alphaTarget(0.3).restart()
    }
    function dragged(d) {
        console.log('drag');
        /* bubbles.attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y); */
        d.fx = d3.event.x
        d.fy = d3.event.y
    }

    function dragEnded(d) {
        console.log('end');
        delete d.fx;
        delete d.fy;
        forceSimulation.alphaTarget(0);
    }
    // debugger
    function ticked() {
        bubbles
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            });
    }

    function radius(d) {
        return d.radius + 1
    }

    function charge(d) {
        return -Math.pow(d.radius, 2) * forceStrength;
    }


    function generateRandomData() {
        const data = [];
        for (let i = 0; i < 200; i++) {
            data.push(
                { randomNumber: Math.round(Math.random() * 100) }
            )
        }
        return data;
    }

})


// const height = 600;
// const width = 1000;
// const velocityDecay = 0.15;
// const forceStrength = 0.03;

// let nodes;
// let bubbles;

// let rawData = generateRandomData();
// let forceSimulation;

// let radiusScale;
// let colorScale;
// let heightScale;


// radiusScale = d3.scaleLinear()
//     .domain([0, 100])
//     .range([5, 30]);

// colorScale = d3.scaleSequential()
//     .domain([0, 100])
//     .interpolator(d3.interpolateRainbow);

// heightScale = d3.scaleLinear()
//     .domain([0, 100])
//     .range([0, height]);

// nodes = rawData.map(d => {
//     debugger
//     return {
//         radius: radiusScale(d.randomNumber),
//         fill: colorScale(d.randomNumber),
//         x: Math.random() * width,
//         y: heightScale(d.randomNumber)/*  Math.random() * height */
//     }
// })

// /* console.log('node ', nodes);
// console.log('data', rawData); */

// /* nodes.sort((a, b) => b.radius - a.radius) */




// d3.select('#root')
//     .append('svg')
//     .attr('height', height)
//     .attr('width', width)

// debugger
// bubbles = d3.select('#root svg')
//     .selectAll('circle')
//     .data(nodes)
//     .enter()
//     .append('circle')
//     .attr('r', d => { return d.radius })
//     .attr('fill', d => 'salmon')
//     .attr('stroke', d => { return d3.rgb('salmon').darker() })
//     .call(d3.drag()
//         .on('start', dragStarted)
//         .on('drag', dragged)
//         .on('end', dragEnded)
//     )



// forceSimulation = d3.forceSimulation()
//     .nodes(nodes)
//     .velocityDecay(velocityDecay)
//     .on('tick', ticked)
//     .force('x', d3.forceX().strength(forceStrength).x(width / 2))
//     .force('y', d3.forceY().strength(forceStrength).y(height / 2))
//     .force("charge", d3.forceManyBody().strength(charge))


// function dragStarted(d) {
//     console.log('start');
//     forceSimulation.alphaTarget(0.3).restart()
// }
// function dragged(d) {
//     console.log('drag');
//     /* bubbles.attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y); */
//     d.fx = d3.event.x
//     d.fy = d3.event.y
// }

// function dragEnded(d) {
//     console.log('end');
//     delete d.fx;
//     delete d.fy;
//     forceSimulation.alphaTarget(0);
// }

// function ticked() {
//     bubbles
//         .attr("cx", function (d) {
//             return d.x;
//         })
//         .attr("cy", function (d) {
//             return d.y;
//         });
// }

// function radius(d) {
//     return d.radius + 1
// }

// function charge(d) {
//     return -Math.pow(d.radius, 2) * forceStrength;
// }


// function generateRandomData() {
//     const data = [];
//     for (let i = 0; i < 200; i++) {
//         data.push(
//             { randomNumber: Math.round(Math.random() * 100) }
//         )
//     }
//     return data;
// }































//THEEEEEEE FRICKINNNNNNNNNN WINNNNNERRRRRRRRRR

// var diameter = 900;
// var width = 960,
// height = 500
// // var color = d3.scaleOrdinal(d3.schemeCategory20);
// var color = d3.scale.category20();
// // debugger
// var bubble = d3.layout.pack()
// .size([diameter,diameter])
// .padding(2.2);

// var svg = d3.select('body')
// .append('svg')
// .attr('width',diameter)
// .attr('height', diameter)
// .attr('class','bubble');

// d3.json('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=15', function(error, tracks) {
//     // var data = music.tracks
//     // debugger
//     var counts = [];
//     tracks.tracks.track.forEach(function(d) {
//         // debugger
//         arr = d.listeners
//         counts.push(arr)
//     })
//     console.log(counts)

//     var data = [];
//     for(var key in counts) {
//         var val = counts[key];
//         data.push({
//             count: val,
//             track: key
//         });
//     }
//     console.log(data)

//     data = data.map(function(d){
//         d.value = +d['count'];
//         return d;
//     });

//     var nodes = bubble.nodes({
//         children: data
//     }).filter(function(d) {
//         return !d.children;
//     })

//     var bubbles = svg.append('g')
//         .attr("transform", "translate(0,0)")
//         .selectAll('.bubble')
//         .data(nodes)
//         .enter();

//     bubbles.append('circle')
//         .attr('r',function(d){
//             return d.r;
//         })
//         .attr('cx',function(d){
//             return d.x;
//         })
//         .attr('cy',function(d){
//             return d.y;
//         })
//         .transition()
//             .attr('transform','translate(25,50)')
//             .ease('elastic')
//             .duration(3000)
//             .style("fill", function(d) { return color(d.value); });

//     bubbles.append('text')
//         .attr('x', function(d) {
//             return d.x
//         })
//         .attr('y',function(d) {
//             return d.y + 5;
//         })
//         .attr('text-anchor', 'middle')
//         .text(function(d){
//                 // debugger
//             return d['value'];
//         })
//         .style({
//             'fill':'white',
//             "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
//             "font-size": "9px"
//         })
//         function charge(d) {
//             return -Math.pow(d.radius, 2.0) / 8;
//           }
//           var force = d3.layout
//             .force()
//             .size([width, height])
//             .charge(charge) // <- Using the charge function in the force layout
//             .gravity(-0.01)
//             .friction(0.9)
//         force.on('tick',function(){
//             nodes.attr("cx", function(d) { return d.x; })
//             .attr("cy", function(d) { return d.y; });
//         })



//     // debugger
// });

