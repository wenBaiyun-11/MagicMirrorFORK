Module.register("MMM-LookingGlass", {
    // Default module config.
    defaults: {
      ledCount: 0,
    },
    

    start: function () {
      console.log("Starting LookingGlass")
    },
    // Override dom generator.
    getDom: function () {
      var wrapper = document.createElement("div");
      wrapper.innerHTML = this.config.text;
      return wrapper;
    },
  });