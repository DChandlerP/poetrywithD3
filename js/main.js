let words = ["I eat my peas with honey!", "I've done it all my life." ,"It makes the peas taste funny","but it keeps them on the knife"];

d3.select("#viz")
  .selectAll("p")
  .data(words)
  .enter()
  .append("p")
  .text("Click Me!")
  .on('click', function(d, i) {
    d3.select(this).text(d);
  });
