const api = {
    key: "7e3f21edee540e6110af347b55eb1ab2",
    base: "https://api.openweathermap.org/data/2.5/"
  }





  const city=document.getElementsByClassName("search-box")[0];

  city.addEventListener("keypress",function(event){
    if(event.keyCode == 13)
    {
        getResults(city.value);
    }
  })

  function getResults(city)
  {
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    .then((weather)=>{
        console.log(weather);
        return weather.json();
    })
    .then((response)=>{
        console.log(response);
        updateUI(response);
    })
     
  }

  function updateUI(response)
  {
    document.querySelector(".city").innerHTML=response.name+","+response.sys.country;
     displayDate(response);
    displayTemp(response);
   
  }

  function displayDate(response)
  {
     let d = new Date();
     let monthArray=["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEPT","OCT","NOV","DEC"];
     let dayArray =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     console.log(dayArray[d.getDay()]+" "+d.getDate()+" "+monthArray[d.getMonth()]+" "+d.getFullYear());

     document.querySelector(".date").innerHTML=dayArray[d.getDay()]+" "+d.getDate()+" "+monthArray[d.getMonth()]+" "+d.getFullYear();


  }

  function displayTemp(response)
  {
    document.querySelector(".weather").innerHTML=response.weather[0].main;
    document.querySelector(".temp").innerHTML=Math.round(response.main.temp)+"<sup>o</sup>C";
    document.querySelector(".hi-low").innerHTML=Math.round(response.main.temp_min)+"<sup>o</sup>c"+"/"+Math.round(response.main.temp_max)+"<sup>o</sup>c";
  }
