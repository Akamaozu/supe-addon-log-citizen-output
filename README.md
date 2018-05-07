# [Supe](https://github.com/Akamaozu/node-supe) Add-On: Log Citizen Output

## Display output from citizens in the supervisor's output.
![npm version](http://public.designbymobi.us/img/node-satellite-timeless.jpg)

# Install
```
npm install --save supe-addon-log-citizen-output
```

# Usage
```
var supervisor = require('supe')(),
    log_citizen_output_addon = require('supe-addon-log-citizen-output');

supervisor.use( log_citizen_output_addon );
```