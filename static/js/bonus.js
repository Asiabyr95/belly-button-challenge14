const bonusUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


function gauge() {
 d3.json(bonusUrl).then((data) => {
   console.log("Data fetched:", data);
   var currentID = d3.select("#selDataset").property("value");
   console.log("Current ID:", currentID);
  
   var wfreq = data.metadata.find(entry => entry.id == currentID)?.wfreq || 0;
   console.log("Washing Frequency (wfreq):", wfreq);


   var path = pathFind(wfreq);


   createGauge(path, wfreq);
 });


 function pathFind(wfreq) {
   var paths = [
     'M .48 .5 L 0.25 .58 L .56 .515 Z',
     'M .48 .5 L 0.25 .58 L .56 .515 Z',
     'M .48 .5 L 0.25 .64 L .55 .5 Z',
     'M .48 .5 L 0.32 .74 L .52 .5 Z',
     'M .48 .5 L 0.41 .81 L .52 .5 Z',
     'M .48 .5 L 0.50 .85 L .52 .5 Z',
     'M .48 .5 L 0.61 .82 L .52 .5 Z',
     'M .48 .5 L 0.70 .76 L .52 .5 Z',
     'M .46 .5 L 0.77 .68 L .52 .5 Z',
     'M .48 .515 L 0.85 .58 L .60 .5 Z'
   ];
   return paths[wfreq] || 'M .48 .5 L 0.25 .58 L .56 .515 Z'; // Default path
 }


 function createGauge(path, wfreq) {
   var meter_chart = [
     {
       "values": [9, 1, 1, 1, 1, 1, 1, 1, 1, 1],
       "labels": ["", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"],
       "marker": {
         'colors': [
           'rgb(255, 255, 255)',
           'rgb(232, 226, 202)',
           'rgb(216, 212, 174)',
           'rgb(198, 198, 147)',
           'rgb(177, 186, 121)',
           'rgb(154, 173, 97)',
           'rgb(129, 162, 74)',
           'rgb(101, 150, 51)',
           'rgb(68, 139, 29)',
           'rgb(14, 127, 0)'
         ]
       },
       "name": "Gauge",
       "hole": 0.4,
       "type": "pie",
       "direction": "clockwise",
       "rotation": 90,
       "showlegend": false,
       "textinfo": "label",
       "textposition": "inside",
       "hoverinfo": "label"
     }
   ];


   var layout = {
     title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
     height: 600,
     width: 600,
     shapes: [{
       type: 'path',
       path: path,
       fillcolor: '850000',
       line: {
         color: '850000'
       }
     }]
   };


   Plotly.newPlot('gauge', meter_chart, layout);
 }
}
