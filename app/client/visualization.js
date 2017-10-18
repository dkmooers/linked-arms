Template.visualization.onRendered(function() {

	var data = {
		"nodes": [
			{"x": 469, "y": 410},
			{"x": 493, "y": 364},
			{"x": 442, "y": 365},
			{"x": 467, "y": 314},
			{"x": 477, "y": 248},
			{"x": 425, "y": 207},
			{"x": 402, "y": 155},
			{"x": 369, "y": 196},
			{"x": 350, "y": 148},
			{"x": 539, "y": 222},
			{"x": 594, "y": 235},
			{"x": 582, "y": 185},
			{"x": 633, "y": 200}
		],
		"links": [
			{"source":  0, "target":  1},
			{"source":  1, "target":  2},
			{"source":  2, "target":  0},
			{"source":  1, "target":  3},
			{"source":  3, "target":  2},
			{"source":  3, "target":  4},
			{"source":  4, "target":  5},
			{"source":  5, "target":  6},
			{"source":  5, "target":  7},
			{"source":  6, "target":  7},
			{"source":  6, "target":  8},
			{"source":  7, "target":  8},
			{"source":  9, "target":  4},
			{"source":  9, "target": 11},
			{"source":  9, "target": 10},
			{"source": 10, "target": 11},
			{"source": 11, "target": 12},
			{"source": 12, "target": 10}
		]
	};

	var width = 960,
	    height = 500;

	var force = d3.layout.force()
	    .size([width, height])
	    .charge(-400)
	    .linkDistance(40)
	    .on("tick", tick);

	var drag = force.drag()
	    .on("dragstart", dragstart);

	var svg = d3.select("#visualization").append("svg")
	    .attr("width", width)
	    .attr("height", height);

	var link = svg.selectAll(".link"),
	    node = svg.selectAll(".node");


	  force
	      .nodes(data.nodes)
	      .links(data.links)
	      .start();

	  link = link.data(data.links)
	    .enter().append("line")
	      .attr("class", "link");

	  node = node.data(data.nodes);

	  node.exit().remove();

	  var nodeEnter = node.enter().append("circle")
	    	.attr("class", "node")
	        .attr("r", 12)
	        .on("dblclick", dblclick)
	        .call(drag);

	    // nodeEnter.append("text")
	    //     .attr("dy", ".35em")
	    //     .text(function(d) { return d.name; });

	    // node.select("circle")
	        // .style("fill", color);

	function tick() {
	  link.attr("x1", function(d) { return d.source.x; })
	      .attr("y1", function(d) { return d.source.y; })
	      .attr("x2", function(d) { return d.target.x; })
	      .attr("y2", function(d) { return d.target.y; });

	  node.attr("cx", function(d) { return d.x; })
	      .attr("cy", function(d) { return d.y; });
	}

	function dblclick(d) {
	  d3.select(this).classed("fixed", d.fixed = false);
	}

	function dragstart(d) {
	  d3.select(this).classed("fixed", d.fixed = true);
	}

	
});