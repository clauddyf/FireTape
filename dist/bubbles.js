
var width = 960,
height = 500

var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height);

var force = d3.layout.force()
.gravity(0.1)
.distance(100)
.charge(-700)
.size([width, height]);
var color = function (group) { 
if (group == 1) {
    return "#aaa"
} else if (group == 2) {
    return "#fbc280"
} else {
    return "#405275"
}
}
d3.json('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=15', function (error, json) {
if (error) throw error;
debugger
force
    .nodes(json.tracks)
    .start();

var link = svg.selectAll(".link")
    .data(json.links)
    .enter().append("line")
    .attr("class", "link");

var node = svg.selectAll(".node")
    .data(json.nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(force.drag);
node.append('circle')
    .attr('r', 13)
    .attr('fill', function (d) {
        return color(d.group);
    });

node.append("text")
    .attr("dx", -18)
    .attr("dy", 8)
    .style("font-family", "overwatch")
    .style("font-size", "18px") 

    .text(function (d) {
        return d.name
    });

force.on("tick", function () {
    link.attr("x1", function (d) {
            return d.source.x;
        })
        .attr("y1", function (d) {
            return d.source.y;
        })
        .attr("x2", function (d) {
            return d.target.x;
        })
        .attr("y2", function (d) {
            return d.target.y;
        }); 
    node.attr("transform", function (d) { 
        return "translate(" + d.x + "," + d.y + ")";
    });
}); 
});






























// //THEEEEEEE FRICKINNNNNNNNNN WINNNNNERRRRRRRRRR

// var diameter = 522;
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
//             .ease('elastic')
//             .duration(3000)
//             .style("fill", function(d) { return color(d.value); });
//             bubbles.append('text')
//             .attr('x', function(d) {
//                 return d.x
//             })
//             .attr('y',function(d) {
//                 return d.y + 5;
//             })
//             .attr('text-anchor', 'middle')
//             .text(function(d){
//                 // debugger
//             return d['value'];
//         })
//         .style({
//             'fill':'white',
//             "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
//             "font-size": "9px"
//         })
//     // debugger
// });



// d3.json('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=8', function(error, data) {
//     var diameter = 600;
//     var color = d3.scaleOrdinal(d3.schemeCategory20);

//     var bubble = d3.pack(data.tracks)
//         .size([diameter, diameter])
//         .padding(1.5);

//     var svg = d3.select("body")
//         .append("svg")
//         .attr("width", diameter)
//         .attr("height", diameter)
//         .attr("class", "bubble");

//         debugger
// var nodes = d3.hierarchy(data.tracks)
//     .sum(data.tracks.track.forEach(function(d) {
//         debugger
//         return parseInt(d.listeners);
//     }));

// var node = svg.selectAll('.node')
// .data(bubble(nodes).descendants())
// .enter()
// .filter(function(d){
//     return !d.children
// })
// .append('g')
// .attr('class', 'node')
// .attr('transform', function(d){
//     // debugger
//     return 'translate(' + d.x + "," + d.y + ")";
// })

// node.append('title')
// .text(function(d) {
//     // debugger
//     return d.name
// })

// node.append('circle')
// .attr('r',function(d) {
//     // debugger
//     return d.r;
// })
// .style('fill',function(d,i) {
    
//     return color(i);
// })
// })






// var margin = {top: 10, right: 20, bottom: 30, left: 50},
// width = 500 - margin.left - margin.right,
// height = 420 - margin.top - margin.bottom;


// dataset = {
//     "children": [{"Name":"Olives","Count":4319},
//         {"Name":"Tea","Count":4159},
//         {"Name":"Mashed Potatoes","Count":2583},
//         {"Name":"Boiled Potatoes","Count":2074},
//         {"Name":"Milk","Count":1894},
//         {"Name":"Chicken Salad","Count":1809},
//         {"Name":"Vanilla Ice Cream","Count":1713},
//         {"Name":"Cocoa","Count":1636},
//         {"Name":"Lettuce Salad","Count":1566},
//         {"Name":"Lobster Salad","Count":1511},
//         {"Name":"Chocolate","Count":1489},
//         {"Name":"Apple Pie","Count":1487},
//         {"Name":"Orange Juice","Count":1423},
//         {"Name":"American Cheese","Count":1372},
//         {"Name":"Green Peas","Count":1341},
//         {"Name":"Assorted Cakes","Count":1331},
//         {"Name":"French Fried Potatoes","Count":1328},
//         {"Name":"Potato Salad","Count":1306},
//         {"Name":"Baked Potatoes","Count":1293},
//         {"Name":"Roquefort","Count":1273},
//         {"Name":"Stewed Prunes","Count":1268}]
// };

// var diameter = 600;
// var color = d3.scaleOrdinal(d3.schemeCategory20);
// var bubble = d3.pack(dataset)
// .size([diameter, diameter])
// .padding(1.5);

// var svg = d3.select("body")
// .append("svg")
// .attr("width", diameter)
// .attr("height", diameter)
// .attr("class", "bubble");
// debugger
// var nodes = d3.hierarchy(dataset)
// .sum(function(d){
//     return d.Count; 
// });

// var node = svg.selectAll(".node")
// .data(bubble(nodes).descendants())
// .enter()
// .filter(function(d){
//     return  !d.children
// })
// .append("g")
// .attr("class", "node")
// .attr("transform", function(d) {
//     return "translate(" + d.x + "," + d.y + ")";
// });

// debugger
// node.append("title")
//     .text(function(d) {
//         // debugger
//         return d.Name + ": " + d.Count;
//     });

// node.append("circle")
//     .attr("r", function(d) {
//         // debugger
//         return d.r;
//     })
//     .style("fill", function(d,i) {
//         // debugger
//         return color(i);
//     });

// node.append("text")
//     .attr("dy", ".2em")
//     .style("text-anchor", "middle")
//     .text(function(d) {
//         return d.data.Name.substring(0, d.r / 3);
//     })
//     .attr("font-family", "sans-serif")
//     .attr("font-size", function(d){
//         return d.r/5;
//     })
//     .attr("fill", "white");

// node.append("text")
//     .attr("dy", "1.3em")
//     .style("text-anchor", "middle")
//     .text(function(d) {
//         return d.data.Count;
//     })
//     .attr("font-family",  "Gill Sans", "Gill Sans MT")
//     .attr("font-size", function(d){
//         return d.r/5;
//     })
//     .attr("fill", "white");

// d3.select(self.frameElement)
//     .style("height", diameter + "px");





























