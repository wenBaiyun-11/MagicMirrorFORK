/* Magic Mirror - WallberryTheme <3
 * Module: WB-weather
 *
 * By JSC (@delightedCrow)
 * MIT Licensed.
 * 
 * [--------------------------------------------------------]
 * Extended code for WBprovider for PirateWeather provider,
 * based on WBOpenweatherMap implementation.
 * Written by Raiyuwen (@wenBaiyun-11)
 */


class WBPirateWeather extends WBProviderWithHelper {
    constructor(config, delegate) {
        super(config, delegate);
        this.baseURL = `https://api.pirateweather.net/${config.weatherEndpoint}/${config.apiKey}/${config.lat},${config.lon}`;
        this.url = this.getQueryStringURL(this.baseURL, {
            "exclude" : `hourly,minutely`,
        });

        // This dictionary remaps the pirateweather's icon name to match weatherIcons classes.
        this.iconsDict = {
            "clear-day": "day-sunny", 
            "clear-night" : "night-clear", 
            "rain" : "rain", 
            "snow" : "snow", 
            "sleet" : "sleet", 
            "wind" : "windy", 
            "fog" : "fog", 
            "cloudy" : "cloudy", 
            "partly-cloudy-day" : "day-cloudy", 
            "partly-cloudy-night" : "night-alt-cloudy"
        };
    }
    
    get updateIntervalLimit(){
        return 10 * 60 * 1000; // every 10mins, total of 144 API calls per day.. open weather only has 333 max api calls per day.
    }

    get daysToForecastLimit(){
        return 8;
    }

    dataForHelper(){
		return {url: this.url};
	}

    process(data){
        let weathrDat = new WBWeather();
        weathrDat.temp = data.currently.temperature;
        // Get icon information
        weathrDat.wicon = `wi-${this.iconsDict[data.currently.icon]}`;
        // Get current weather discription
        weathrDat.longDescription = data.currently.summary;

        weathrDat.forecast = data.daily.data.slice(0 , this.daysToForecast).map((daily) => {
            let _day = new WBForecast();
            let _icon = null;
            _day.date = daily.time;
            _day.precipChance = daily.humidity;
            _day.precipType = daily.precipType;
            _day.minTemp = daily.temperatureMin;
            _day.maxTemp = daily.temperatureMax;
            _day.wicon = `wi-${this.iconsDict[daily.icon]}`;

            return _day;
        });
        return weathrDat;
    }

    helperResponse(data){
        console.log(data);
        if ("network_error" in data) {
			this.resolveWithTemporaryError(data.network_error.message);
			return;
		}

		if ("error" in data) {
			this.resolveWithCriticalError(data.error);
			return;
		}

        this.resolveWithSuccess(this.process(data));
    }
}


WBProviderManager.register("pirateweather", WBPirateWeather);