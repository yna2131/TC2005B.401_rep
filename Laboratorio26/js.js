const getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      const status = xhr.status;
      if(status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };
  
  getJSON('http://api.openweathermap.org/data/2.5/weather?q=queretaro&appid=ae9e53c95487470adf54e2961853b329&units=metric',
  function(err, data) {
    if(err !== null) {
      alert('Unexpected Error.' + err);
    } else {
      alert(`Current
        Temperature: ${data.main.temp}°
        Wind Speed: ${data.wind.speed}m/s
        Humidity: ${data.main.humidity}%
  !
  Today's
        Highest Temperature: ${data.main.temp_max}°
        Lowest Temperature: ${data.main.temp_min}°
  .`)
    }
  });