// Question E :

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function()
{
    var data = request.response;
    var result =JSON.parse(data);
    var res=result.filter((ele)=>{
        for(var key in ele.currencies){
            if(ele.currencies[key].code==="USD"){
                console.log(ele.name)
            }
        }
    })
}