const NodeHelper = require("node_helper");
const spawn = require('child_process').spawn

module.exports = NodeHelper.create({
    start: function () {
        console.log("\x1b[46m%s\x1b[0m", `[Node Helper] Init >> ${this.name}`);
    },

    socketNotificationReceived: function(notification, payload) {
        switch (notification) {
            case "COLOR_FILL":
                spawn('sudo python3', [`${this.path}/utils/neoPixelSpydev.py`, payload.r, payload.g, payload.b, payload.ledCount]).stdout.on('data', data => this.sendSocketNotification('debug', data.toString()));
                console.log('LED IS TURNED ON!');
                break;
            case "TURN_OFF":
                spawn('sudo python3', [`${this.path}/utils/neoPixelSpydev.py`, 0, 0, 0, payload.ledCount]).stdout.on('data', data => this.sendSocketNotification('debug', data.toString()));
                console.log('LED IS TURNED OFF!');
                break;
            default:
                break;
        }
    },
});