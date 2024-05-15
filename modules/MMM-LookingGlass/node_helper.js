module.exports = NodeHelper.create({
    start: function () {
        console.log("\x1b[46m%s\x1b[0m", `[Node Helper] Init >> ${this.name}`);
    },

    socketNotificationReceived: function(notification, payload) {
        switch (notification) {
            case "COLOR_FILL":
                break;
            default:
                break;
        }
    },
});