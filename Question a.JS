//Question A :

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var data = request.response;
    var result=JSON.parse(data);
    var res=result.filter((ele)=>ele.continents=="Asia")
    var res1=res.map((ele)=>`${ele.region}`)
    console.log(res1)
}