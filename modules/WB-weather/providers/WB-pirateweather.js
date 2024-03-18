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


class WBPirateWeather extends WBProvider {
    constructor(config, delegate) {
        super(config, delegate);
        this.baseURL = 'https://api.pirateweather.net';
        this.url = this.getQueryStringURL(this.baseURL, {
            "weatherEndpoint": config.weatherEndpoint,
            "apiKey": config.apiKey,
            "latitude": config.lat,
            "longitude": config.lon,
            "lang": `?units=si&lang=${config.lang}`,
        });
    }

    get updateIntervalLimit(){
        return 10 * 60 * 1000; // every 10mins, total of 144 API calls per day.. open weather only has 333 max api calls per day.
    }

    get daysToForecastLimit(){
        return 8;
    }

    process(data){
        //implement processing of json data
    }

    fetchWeather() {
        let responceOk = null;
        fetch(this.url).then(response => {
            responceOk = responce.ok;
            return response.json();
        }).then(jsonData => {
            if (responceOk) {
                // yay, gotta process the data first before sending a weather object to ProviderManager.
                this.resolveWithSuccess(this.process(jsonData));
            } else {
                //if data is invalid
                this.resolveWithCriticalError(jsonData.message);
            }
        }).catch(error => {
            //if error accours call the default error message function 
            this.resolveWithTemporaryError(error.message);
        });
    }
}


WBProviderManager.register("pirateweather", WBPirateWeather);