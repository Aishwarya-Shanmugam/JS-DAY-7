// Question D :

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var data = request.response
    var result = JSON.parse(data);
    var res = result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(res);
}