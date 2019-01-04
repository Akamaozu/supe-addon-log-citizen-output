# [Supe](https://github.com/Akamaozu/node-supe) Add-On: Log Citizen Output

## Display output from citizens in the supervisor's output.
![npm version](http://public.designbymobi.us/img/node-satellite-timeless.jpg)

# NOTE: Irrelevant (and broken) for Supe versions 0.4.0 and above
This behavior was rolled into Supe core at [version 0.4.0](https://github.com/Akamaozu/node-supe/pull/14/files#diff-21d08b4dfbc13ccaf143d416f223d327). Additionally, APIs this package depends on were removed.

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