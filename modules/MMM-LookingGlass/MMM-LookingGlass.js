Module.register("MMM-LookingGlass", {
    // Default module config.
    defaults: {
      ledCount: 0,
      r: 255,
      g: 255,
      b: 255
    },

    enabledLights: false,
    
    register_notif: {
      module: this.name,
      path: "lookingglass",
      actions: {
        turnOn: {
            method: "GET",
            notification: "LED_ON",
            prettyName: "Lights On"
        },
        turnOff: {
            method: "GET",
            notification: "LED_OFF",
            prettyName: "Lights Off"
        },
        changeColor: {
          method: "POST",
          notification: "UPDATE_COLOR",
          payload: {message: "Color Changed!"}
        }
      }
    },

    start: function () {
      this.config = Object.assign({}, this.defaults, this.config);
      this.sendNotification("REGISTER_API", this.register_notif);
    },

    socketNotificationReceived: function (notification, payload) {
      if (notification == 'debug') {
        console.log(payload)
      }
    },

    notificationReceived: function (notification, payload, sender) {
      if (notification === "LED_ON") {
        this.sendSocketNotification('COLOR_FILL', this.config);
        this.enabledLights = true;
      } else if (notification === "LED_OFF") {
        this.sendSocketNotification('TURN_OFF', this.config);
        this.enabledLights = false;
      } else if (notification === "UPDATE_COLOR") {

        this.config.r = payload.r;
        this.config.b = payload.b;
        this.config.g = payload.g;

        if (this.enabledLights == true) {
          this.sendSocketNotification('COLOR_FILL', this.config);
        }
      }
    }
  });