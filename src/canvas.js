export const canvas = () => {
    var svgContainer = d3.select(".circlezz").append("svg")
                                        .attr("width",200)
                                        .attr("height",200);

    var circle = svgContainer .append("circle")
                            .attr("cx",30)
                            .attr("cy",30)
                            .attr("r",20)
                            .attr("fill","red")
                            
}

export const canvas2 = () => {
    var svgContainer = d3.select(".circlezz").append("svg")
                                        .attr("width",200)
                                        .attr("height",200);

    var another = svgContainer .append("circle")
                            .attr("cx",20)
                            .attr("cy",30)
                            .attr("r",20)
                            .attr("fill","yellow")
}

            


