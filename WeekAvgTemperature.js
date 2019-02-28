var days = [
  {name:"Sunday", temperature:21},
  {name:"Monday", temperature:22},
  {name:"Tuesday", temperature:22.5},
  {name:"Wednesday", temperature:23},
  {name:"Thursday", temperature:21.5},
  {name:"Friday", temperature:22.2},
  {name:"Saturday", temperature:21.8}
];

var sum = 0;
for(var day in days){
    sum += parseInt(days[day].temperature);
}

var avgTemperature = sum/days.length;

console.info("Week average temperature:",avgTemperature.toFixed(3));


days.sort(function(a, b){return b.temperature - a.temperature});

var tmp = 0;

var maxTemperature = days[0].temperature;

for (var i = 0; i < days.length; i++){
    var difference = Math.abs(days[i].temperature-avgTemperature);

    if (difference < maxTemperature)
    {
        tmp = days[i].temperature
        maxTemperature = difference;
    }
}

console.info("Temperature nearest to the week average value:",tmp)

var searchDay =  days.find(x => x.temperature === tmp);

console.info("Searched day is",searchDay.name);