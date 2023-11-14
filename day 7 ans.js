
  //a..!map printing country names using map

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
   var res = result.map((ele)=>console.log(ele.name.common))
 
}
 //b..! filter and map country name with population less than 2 laks
 var request1 = new XMLHttpRequest();
 request1.open("GET","https://restcountries.com/v3.1/all",true)
 request1.send();
 request1.onload = function(){
     var data1 = request1.response;
    var result1 = JSON.parse(data1);
    var res1 = result1.filter((x)=>x.population<200000)
    res1.map((ele)=>console.log(ele.name.common))
 }

//d..! reduce total population
var request2 = new XMLHttpRequest();
 request2.open("GET","https://restcountries.com/v3.1/all",true)
 request2.send();
 request2.onload = function(){
     var data2 = request2.response;
    var result2 = JSON.parse(data2);
    var res2 = result2.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res2);
}
// c...Print the following details name, capital, flag using forEach function.

var request3=new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request3.onload=function (){
    var Data3=JSON.parse(this.response);
    Data3.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}


//d...Print the country which use US Dollars as currency.

var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function ()
 {
        var data4 = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data4.length;i++)
        {
            if(data4[i].currencies[0].code==="USD")
            {
                console.log("name:",data4[i].name,"==>",data4[i].currencies[0].code)
            }
        }
    }



