// Question C :

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var data = request.response;
    var result = JSON.parse(data);
    var res=result.forEach((ele)=>{console.log(`${ele.name.common}: ${ele.capital}: ${ele.flag}`)});

}