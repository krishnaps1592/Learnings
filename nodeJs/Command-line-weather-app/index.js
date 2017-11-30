const argv = require('yargs').argv;
let apiKey ="0a709e7d0c2fd3e69c2039e02bc5c43e";
let cityName =argv.c||'Coimbatore';
let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

const request = require('request');
request(url,function(err,response,body)
{
	if(err)
	{
		console.log('error:',err);
	}
	else
	{
		let weather = JSON.parse(body);
		let kelvinWeather = weather.main.temp;
		console.log(kelvinWeather);
		let message = `It's ${kelvinWeather} degrees in ${weather.name}!`;
		console.log(message);
	}
});
