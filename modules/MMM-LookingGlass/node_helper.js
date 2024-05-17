const NodeHelper = require("node_helper");
const cmd = require('node-cmd')

module.exports = NodeHelper.create({
    start: function () {
        console.log("\x1b[46m%s\x1b[0m", `[Node Helper] Init >> ${this.name}`);
    },

    socketNotificationReceived: function(notification, payload) {
        switch (notification) {
            case "COLOR_FILL":
/*                 pyShell.PythonShell.run(`utils/neoPixelSpydev.py`, { args : [`${payload.r}`,`${payload.g}`,`${payload.b}`,`${payload.ledCount}`]}).then(msg => {
                    console.log(msg);
                }) */
                cmd.run(`sudo python3 "utils/neoPixelSpydev.py" ${payload.r} ${payload.g} ${payload.b} ${payload.ledCount}`);
                break;
            case "TURN_OFF":
                cmd.run(`sudo python3 "utils/neoPixelSpydev.py" 0 0 0 ${payload.ledCount}`);
/*                 pyShell.PythonShell.run(`utils/neoPixelSpydev.py`, { args : [`0`,`0`,`0`,`${payload.ledCount}`]}).then(msg => {
                    console.log(msg);
                }) */
                break;
            default:
                break;
        }
    },
});