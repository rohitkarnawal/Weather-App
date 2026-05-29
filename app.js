let input = document.querySelector("input");
let c = document.querySelector(".city");

input.addEventListener("keydown",async function(event){

    if(event.key === "Enter"){
        let city = input.value;
        getWeather(city);
    }
    
});

function changeCity(city){
     c.innerText = city;
}

async function getWeather(city){
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75b64e52de406d42355f63db3dfd4f32`;
        let link = await axios.get(url);
        console.log(link);
       temp(link.data.main.temp);
       wind(link.data.wind.speed);
       humidity(link.data.main.humidity);
       clouds(link.data.clouds.all);
       changeCity(city);
    }
    catch (e){
      console.log("Error :", e);
      alert("Enter valid city");
    }
}

async function clouds(data){
let text = document.querySelector(".what");
text.innerText = "Clouds: ";    
let val = document.querySelector("#cloud");
val.innerText = `${data}`
};

async function wind(wind){
    let speed = document.querySelector("#windSpeed");
    speed.innerText = ` ${wind}%`;
};

async function humidity(humidity){
    let data = document.querySelector("#humidity");
    data.innerText = ` ${humidity}%`;
};

async function temp(temp){
    let h3 = document.querySelector("h3");
    let val = Math.floor(temp - 273.15);
    h3.innerHTML = `${val}<sup>o</sup>C`;
};

//time

let todayText = document.querySelector(".today");

let now = new Date();

let day = now.toLocaleString("en-US", {
    weekday: "long"
});

let time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
});

todayText.innerText = `${day}, ${time}`;