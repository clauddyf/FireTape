
// var margin = {top: 10, right: 20, bottom: 30, left: 50},
// width = 500 - margin.left - margin.right,
// height = 420 - margin.top - margin.bottom;

d3.json('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=8', function(data) {
    
    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    var bubble = d3.pack(data)
    .size([diameter,diameter])
    .padding(1.5);
    
    var svg = d3.select("#root")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr('class','bubble');
    
    
    // debugger
    var nodes = d3.hierarchy(data)
        .sum(function(d) {return d.listeners; });
    
    var node = svg.selectAll('.node')
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return !d.children
    })
        .append('g')
        .attr('class','node')
        .attr('transform',function(d) {
            return 'translate(' + d.x + ',' + d.y + ')';
    });
    node.append('name')
        .text(function(d) {
            return d.name + ": " + d.listeners;
    });
    // debugger
    //how do i add a range here? getting an attribute error with the length
    node.append('circle')
    .attr('r', function(d) {
        return d.r;
    })
    .style('fill', function(d,i){
        return color(i);
    });
    
    node.append('text')
        .attr('dy','.2em')
        .style('text-anchor','middle')
        .text(function(d) {
            return d.data.name.substring(0, d.r /3);
        })
        .attr("font-family", "sans-serif")
                .attr("font-size", function(d){
                    return d.r/5;
                })
                .attr("fill", "white");
    
            node.append("text")
                .attr("dy", "1.3em")
                .style("text-anchor", "middle")
                .text(function(d) {
                    return d.data.Count;
                })
                .attr("font-family",  "Gill Sans", "Gill Sans MT")
                .attr("font-size", function(d){
                    return d.r/5;
                })
                .attr("fill", "white");
    
            d3.select(self.frameElement)
                .style("height", diameter + "px");
});



    //   debugger

// d3.json('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=8', function(data) {
//     // console.log(data.tracks);
//     var bubble = d3.pack(dataset)
//         .size([width,height])
//         .padding(1.5)
// });
// var x = d3.scaleLinear()
// .domain([0,10000])
// .range([0,width]);
// svg.append('g')
// .attr("transform","translate(0,"+ height + ")")
// .call(d3.axisBottom(x));

// var y = d3.scaleLinear()
// .domain([35,90])
// .range([height,0]);
// svg.append('g')
// .call(d3.axisLeft(y));

// var z = d3.scaleLinear()
// .domain([0,500000])
// .range([1,40]);

// var


// svg.append('g')
// .selectAll('dot')
// .data(data.tracks.track)
// .enter()
// .append('circle')
//     .attr('cx', function (d) {return x(d.listeners);})
//     // .attr('cy', function (d) { return y(d.duration)})
//     // .attr('r', function (d) {return z(d.listeners); })
//     .style('fill','#69b3a2')
//     .style('opacity','0.7')
//     .attr('stroke','black')

// (function() {
//     var width = 500,
//     height = 500


//     var svg = d3.select("body")
//     .append('svg')
//     .attr('height',height)
//     .attr('width',width)
//     .append('g')
//     .attr('transform',"translate(0,0)")
    
//     var simulation = d3.forceSimulation()
//     // .force('x'.d3.forceX(width / 2).strength(0.05))
//     // .force('x'.d3.forceY(height / 2).strength(0.05))
//     // .force('collide',d3.forceCollide(10))
    
//     d3.queue()
//     .defer(d3.csv,"script.csv")
//     .await(ready)
//     debugger
    
//     function ready (error,datapoints) {
//         var circles = svg.selectAll('.artist')
//             .data(datapoints)
//             .enter().append('circle')
//             .attr('class','artist')
//             .attr('r',10)
//             .attr('fill','lightblue')
//         simulation.nodes(datapoints)
//     }

//     function ticked() {
//         circles
//             .attr('cx', function(d) {
//                 return d.x
//             })
//             .attr('cy',function(d){
//                 return d.y
//             })
//     }
// })();
// debugger
// (function() {
// var diameter = 900, //max size of the bubbles
//     color    = d3.scale.category20(); //color category

// var bubble = d3.layout.pack()
//     .sort(null)
//     .size([diameter, diameter])
//     .padding(1.5);

// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", diameter)
//     .attr("height", diameter)
//     .attr("class", "bubble");

// d3.json("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=jamaica&api_key=a0d411fa7c676669092342d66c4913d8&format=json&limit=8", function(d) {
//       var counts = {};
//       d.data.forEach(function(d) {
//         // Retrieve the keywords from the JSON API response and count frequency of each one across all search results
//         arr = d.attributes.keywords
//         for(var i = 0; i<arr.length; i++) {
//           var num = arr[i];
//           counts[num] = counts[num] ? counts[num]+1 : 1;
//         };
//       })
//       var data = [];
//       for(var key in counts){
//           var val = counts[key];
//           data.push({
//               count: val,
//               keyword: key
//           });
//       }
//       console.log(data)
//       data = data.map(function(d){ d.value = +d["count"]; return d; });

//     //bubbles needs very specific format, convert data to this.
//     var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

//     //setup the chart
//     var bubbles = svg.append("g")
//         .attr("transform", "translate(0,0)")
//         .selectAll(".bubble")
//         .data(nodes)
//         .enter();

//     //create the bubbles
//     bubbles.append("circle")
//         .attr("r", function(d){ return d.r; })
//         .attr("cx", function(d){ return d.x; })
//         .attr("cy", function(d){ return d.y; })
//         .transition()
//             .ease("elastic")
//             .duration(3000)
//         .style("fill", function(d) { return color(d.value); });

//     //format the text for each bubble
//     bubbles.append("text")
//         .attr("x", function(d){ return d.x; })
//         .attr("y", function(d){ return d.y + 5; })
//         .attr("text-anchor", "middle")
//         .text(function(d){ return d["keyword"]; })
//         .style({
//             "fill":"white", 
//             "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
//             "font-size": "9px"
//         });
//     })

// });
// debugger
// var diameter = Math.min(document.getElementById('root').clientWidth, window.innerHeight - document.querySelector('header').clientHeight) - 20;

// 	var svg = d3.select('#root').append('svg')
// 		.attr('width', diameter)
// 		.attr('height', diameter);

// 	var bubble = d3.pack()
// 		.size([diameter, diameter])
// 		.value(function(d) {return d.size;}) // new data is loaded to bubble layout
// 		.padding(3);

// 	function drawBubbles(m) {

// 		if(m.region !== dataCenter) return;

// 		region.textContent = m.region;

// 		// generate data with calculated layout values
// 		var nodes = bubble.nodes(processData(m))
// 			.filter(function(d) { return !d.children; }); // filter out the outer bubble

// 		// assign new data to existing DOM 
// 		var vis = svg.selectAll('circle')
// 			.data(nodes, function(d) { return d.name; });

// 		// enter data -> remove, so non-exist selections for upcoming data won't stay -> enter new data -> ...

// 		// To chain transitions, 
// 		// create the transition on the updating elements before the entering elements 
// 		// because enter.append merges entering elements into the update selection

// 		var duration = 500;
// 		var delay = 0;

// 		// update - this is created before enter.append. it only applies to updating nodes.
// 		vis.transition()
// 			.duration(duration)
// 			.delay(function(d, i) {delay = i * 7; return delay;}) 
// 			.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
// 			.attr('r', function(d) { return d.r; })
// 			.style('opacity', 1); // force to 1, so they don't get stuck below 1 at enter()

// 		// enter - only applies to incoming elements (once emptying data)	
// 		vis.enter().append('circle')
// 			.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
// 			.attr('r', function(d) { return 0; })
// 			.attr('class', function(d) { return d.className; })
// 			.transition()
// 			.duration(duration * 1.2)
// 			.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
// 			.attr('r', function(d) { return d.r; })
// 			.style('opacity', 1);

// 		// exit
// 		vis.exit()
// 			.transition()
// 			.duration(duration)
// 			.attr('transform', function(d) { 
// 				var dy = d.y - diameter/2;
// 				var dx = d.x - diameter/2;
// 				var theta = Math.atan2(dy,dx);
// 				var destX = diameter * (1 + Math.cos(theta) )/ 2;
// 				var destY = diameter * (1 + Math.sin(theta) )/ 2; 
// 				return 'translate(' + destX + ',' + destY + ')'; })
// 			.attr('r', function(d) { return 0; })
// 			.remove();
// 	}
