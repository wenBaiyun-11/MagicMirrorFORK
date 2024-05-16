const NodeHelper = require("node_helper");
const exec = require('child_process').exec

module.exports = NodeHelper.create({
    start: function () {
        console.log("\x1b[46m%s\x1b[0m", `[Node Helper] Init >> ${this.name}`);
    },

    socketNotificationReceived: function(notification, payload) {
        switch (notification) {
            case "COLOR_FILL":
                exec(`sudo python3 ".${this.path}/utils/neoPixelSpydev.py" ${payload.r} ${payload.g} ${payload.b} ${payload.ledCount}`);
                console.log('LED IS TURNED OFF!');
                break;
            case "TURN_OFF":
                exec(`sudo python3 ".${this.path}/utils/neoPixelSpydev.py" 0 0 0 ${payload.ledCount}`);
                console.log('LED IS TURNED OFF!');
                break;
            default:
                break;
        }
    },
});