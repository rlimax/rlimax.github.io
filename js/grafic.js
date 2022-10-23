
let dataArray = [
    {curso:"Java",                              horas:200},
    {curso:"Java",                              horas:200},
    {curso:"Java",                              horas:200},
    {curso:"Desenvolvedor Web",                 horas:200},
    {curso:"Desenvolvedor C# .NET",             horas:200},
    {curso:"Aperfeiçoamento SQL Server",        horas:80},
    {curso:"Aperfeiçoamento SQL Server",        horas:80},
    {curso:"Administração SQL Server",          horas:200},
    {curso:"Administração de banco de dados",   horas:200},
    {curso:"Power BI",                          horas:40},
    {curso:"Oracle Database Foundations",       horas:90}
];
 dataArray.sort(
    function(a,b){
        return b.horas-a.horas;
    }
)

let larg = 800;
let alt = 250;
//d3.select("body").style("background-color", "black");
let canvas = d3.select("#courses")
                .append("svg")
                .attr("width", larg)
                .attr("height", alt)
                .style("padding-top", "20px");

var escala = d3.scaleLinear()
                .domain([0, 300])
                .range([0, larg-50]);

var cor = d3.scaleLinear()
                .domain([0, 300])
                .range(["yellow", "green"]);

var barras = canvas.selectAll("rect")
                .data(dataArray)
                .enter()
                    .append("rect")
                    .attr("width", 1)
                    .attr("height", 18)
                    .attr("fill", (d) => cor(d.horas))
                    .attr("y", (d, i)=> i*20)
                    .attr("x", 230);

var horas = canvas.selectAll("text")              
                    .data(dataArray)
                    .enter()
                        .append("text")
                        .attr("width", 20)
                        .attr("height", 20)
                        .style("font","13px sans-serif")
                        .style("text-shadow","2px 2px 1px black")
                        .attr("y", (d,i) => i*20+11)
                        .attr("x", (d)=>escala(d.horas)+232)
                        .attr("fill", "white")
                        .text((d) => d.horas+" h/a")
                        .attr("opacity",0)


var nomes = d3.scalePoint()
                //.domain([0,11])
                .domain(["Java(2017)",
                         "Java(2020)",
                         "Java(2022)",
                         "Desenvolvedor WEB - PHP(2018)",
                         "Administração SQL Server(2016)",
                         "Administração de banco de dados(2019)",
                         "Desenvolvedor C# .NET(2022)",
                         "Oracle database foundations(2021)",
                         "Aperfeiçoamento SQL Server(2021)",
                         "Aperfeiçoamento SQL Server(2022)",
                         "Power BI(2020)"])
                .range([0, 200]);

var escaY = d3.axisLeft(nomes);

canvas.append('g')
        .attr("transform", "translate(230,10)")
        .style("text-shadow","2px 2px 2px black")
        .style("color","white")
        .attr("x",200)
        .call(escaY);

barras.transition()
        .duration(1000)
        .attr("width", (d) => escala(d.horas/2))
barras.transition()
        .duration(1000)        
        .delay(1000)
        .attr("width", (d) => escala(d.horas))
horas.transition()
        .duration(1000)
        .delay(1500)
        .attr("opacity",1)
