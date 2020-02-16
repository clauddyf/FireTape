const url ='http://localhost:9000/apiCall';

d3.json(url)
.then(function (tracks) {
        // debugger
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
        arrTracks = tracks.data
        nodes = arrTracks.map(d => {
            // debugger
            return {
                name: d.title,
                artist: d.artist.name,
                rank: (d.position),
                radius: radiusScale(d.rank /700 ),
                image: d.album.cover_medium,
                x: Math.random() * width,
                y: heightScale((d.rank / 400))/*  Math.random() * height */
            }
        })

        const hoverText = 
        d3.select("#root svg")
        .append("div")
        // .attr("class", "hover")
        // .text("hoverText")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style('opacity',1)
        .style("background-color", "pink")
        .style("border-radius", "5px")
        .style("z-index", "10")
        .style("padding", "10px")
        .style("color", "white")
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
    
        debugger
        bubbles = d3.select('#root svg')
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', d => { return d.radius })
            .attr('text', d => d.name)
            .attr('fill', d => `url(#${d.rank})`)
            .on('mouseover',function(d){
                hoverText
                .html(
                    `Track: ${d.name}<br/>
                    Artist: $${d.artist}M<br/>
                    Hotness Rank: ${d.rank} (based on weekend)<br/>`
                    );
                    debugger
                    return hoverText.style('visibility','visible');
            })
            .on('mouseout',function(){
                return hoverText.style('visibility','hidden');
            })
            .call(d3.drag()
            .on('start', dragStarted)
            .on('drag', dragged)
            .on('end', dragEnded)
            )
            
            let forceSimulation;
            
            forceSimulation = d3.forceSimulation()
            .nodes(nodes)
            .velocityDecay(velocityDecay)
            .on('tick', ticked)
            .force('x', d3.forceX().strength(forceStrength).x(width / 2))
            .force('y', d3.forceY().strength(forceStrength).y(height / 2))
            .force("charge", d3.forceManyBody().strength(charge))
            // .on('onmouseover', d => {
            //     return hoverText
            //       .transition()
            //       .duration(200)
            //       return hoverText
            //       .style('opacity', 0.9)
            //       .html((
            //         `Track: ${d.name}<br/>
            //          Artist: $${d.artist}M<br/>
            //          Hotness Rank: ${d.rank} (based on weekend)<br/>`
            //       ))
            //       .style('left', d3.event.pageX + 'px')
            //       .style('top', d3.event.pageY - 28 + 'px');
            //   })
            //   .on('onmouseout', () => {
            //    return hoverText
            //       .transition()
            //       .duration(500)
            //       .style('opacity', 0);
            //   })
            
            
            
            
            // .on("onmouseover", function (d,i){ //mouseover hoverText
                // hoverText.html(
                //   `Track: ${d.name}<br/>
                //    Artist: $${d.artist}M<br/>
                //    Hotness Rank: ${d.rank} (based on weekend)<br/>`
                // );
            //     hoverText.style("visibility", "visible");
            //   })
            // .on("onmousemove", () => {
            //     return hoverText
            //       .style("top", (d3.event.pageY+10)+"px")
            //       .style("left",(d3.event.pageX+10)+"px");
            //   })
            // .on("onmouseout", () => hoverText.style("visibility", "hidden"))
            // .call(d3.drag()
            //     .on('start', dragStarted)
            //     .on('drag', dragged)
            //     .on('end', dragEnded)
            // )
            
            // debugger
    
    
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
