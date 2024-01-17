
d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
    .then(processData)
    .catch(handleError);

function processData(data){
    console.log(data);
    var mySVG = d3.select("svg");
    var circles = mySVG.selectAll("circle").data(data);

    circles.enter().append("circle")
        // starting coordinates
        .attr("cx", function(d) { return d.Xi; })   
        .attr("cy", function(d) { return d.Yi; })   
        .attr("r", 5)                               
        .style("fill", function(d) { return d.color; })
        .transition()
        .duration(5000)   
        // ending coordinates   
        .attr("cx", function(d) { return d.Xf; })   
        .attr("cy", function(d) { return d.Yf; });  
    
    d3.selectAll('circle').on('mouseover', function(){
        // change radius
        d3.select(this).transition().attr('r', 20);
    })

    d3.selectAll('circle').on('mouseout', function(){
        // change radius
        d3.select(this).transition().attr('r', 5);
    })
}

function handleError(error){
    console.Error('Error loading CSV file:', error)
}