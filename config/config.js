/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "WallberryTheme",
			position: "fullscreen_below", // Required Position
			config: {
			  addBackgroundFade: ["top", "bottom"],
			  backgroundOpacity: 0.6,
			  autoDimOn: true,
			  unsplashAccessKey: "C0Uw7Qrq1uvf_9Wug2buL4mCYC6AvD6qWvjqaZWkVxg", // REQUIRED
			  collections: "9822150" // optional - leave empty for a random photo
			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "WallberryTheme/WB-clock",
			position: "top_left",
			config: {
				localCityName: "Cebu City",
			}
		},
		{
			module: "calendar",
			header: "Philippine Holidays",
			position: "top_left",
			animateIn: "slideInLeft",
 			animateOut: "slideOutLeft",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/63/a9fe3549/Philippines_Holidays.ics"
					}
				]
			}
		},
		{
			module: "newsfeed",
			position: "lower_third",
			config: {
				feeds: [
					{
						title: "Philstar Headlines",
						url: "http://www.inquirer.net/fullfeed"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "WallberryTheme/WB-weather",
			position: "bottom_bar",
			config: {
				providerName: "pirateweather",
				weatherEndpoint: "forecast",
				apiKey: "M4fgPStHEEABTG85h27kecHfvx3fmaMJ",
				lat: 10,
				lon: 123,
			},
		},
		{
			module: "MMM-OnSpotify",
			position: "top_right",
			config: {
				// Spotify authentication (Authentication Service)
				clientID: "62b60370dfb8457b87302f92338921d7",
				clientSecret: "3af835446e024f90aee9492e9f47f6b2",
				accessToken: "BQBdXG6YLqD9lBU252uRMjGHYT1IFEO_y07_x68dHvQWjJ1DHS2deZgEfYOoLb8gPkdd1ZKk4WGuTVmC0tKGwNZdDEmOkv6GYEF3pcgsWCkNZLio8vX_LbSV7QedJ1Awm96CQxrtzeLT1yykuZcmn3bEBpIXpCs05eD-H7k9L0DrvK7338edaHGWrwaZlOQHMs_TMn3FW-5Q-ZesNEyW87SD005Zjw",
				refreshToken: "AQDcXUfvUwB5cAWjr56QZV8fuDARH1gBAB3oTFX3uQMWxrT9J-kzszHz7eg2wsb1QKKQ7Hd561oXCoQOXh18ccSkackHws7nVZW6gIMGDISdHpjiMRNuUxLmn6C51Y9OtDg",
				// General module options [SEE BELOW]
				advertisePlayerTheme: true,
				displayWhenEmpty: "none",
				userAffinityUseTracks: false,
				prefersLargeImageSize: false,
				hideTrackLenghtAndAnimateProgress: false,
				showDebugPalette: false,
				userDataMaxAge: 14400,
				userAffinityMaxAge: 36000,
				deviceFilter: [],
				deviceFilterExclude: false,
				filterNoticeSubtitle: true,
				language: "en",
				// Update intervals [SEE BELOW]
				isPlaying: 1,
				isEmpty: 2,
				isPlayingHidden: 2,
				isEmptyHidden: 4,
				onReconnecting: 4,
				onError: 8,
				// Animations [SEE BELOW]
				mediaAnimations: false,
				fadeAnimations: true,
				textAnimations: true,
				transitionAnimations: true,
				// Spotify Code (EXPERMIENTAL)
				spotifyCodeExperimentalShow: true,
				spotifyCodeExperimentalUseColor: true,
				spotifyCodeExperimentalSeparateItem: true,
				// Theming General
				roundMediaCorners: true,
				roundProgressBar: true,
				showVerticalPipe: true, 
				useColorInProgressBar: true,
				useColorInTitle: true,
				useColorInUserData: true,
				showBlurBackground: true,
				blurCorrectionInFrameSide: true,
				blurCorrectionInAllSides: false,
				alwaysUseDefaultDeviceIcon: false,
				experimentalCSSOverridesForMM2: false, // [SEE BELOW]
			},
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
