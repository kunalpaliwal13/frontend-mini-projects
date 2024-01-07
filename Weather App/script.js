const apiCall = async (cityName) => {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ba0e5eedae49070b51c85ad8c30def0&units=metric`;

    try {
        const response = await fetch(api);
        

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json)

        // sunset and sunrise 
        const sunriseTimestamp = json['sys']['sunrise'];
        const sunsetTimestamp = json['sys']['sunset'];
        const sunriseDate = new Date(sunriseTimestamp * 1000);
        const sunsetDate = new Date(sunsetTimestamp * 1000);
        const formatTime = (date) => {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          };
        const sunriseTime = formatTime(sunriseDate);
        const sunsetTime = formatTime(sunsetDate);
          
        document.getElementById('temp').innerHTML= json['main']['temp'];
        document.getElementById('humidity').innerHTML= json['main']['humidity'];
        document.getElementById('wind').innerHTML= json['wind']['speed']+ ", "+ json['wind']['deg'];
        document.getElementById('sun').innerHTML= sunriseTime+  " & "+ sunsetTime;
        console.log('temp' + json['main']['temp'])
        console.log('humidity' + json['main']['humidity'])

        // ... rest of the function remains unchanged
    } catch (error) {
        console.error('Error fetching data', error);
    }
};

// Call the function with the desired city name, for example, 'Mumbai'
apiCall('Mumbai');

function findCity() {
    search = document.querySelector('#search').value;

    apiCall(search)
}
let dark =0;

function darkMode(){
    logo = document.getElementById('logo');
    if(dark%2==0){logo.innerHTML="🌙";}
    else{logo.innerHTML = "☀️"}
    dark++;
}





