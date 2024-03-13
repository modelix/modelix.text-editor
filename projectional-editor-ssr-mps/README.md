To test changes during development
add the property `mps.plugins.dir` to `~/.gradle.gradle.properties`, for example
when using the JetBrains toolbox on Mac this would be similar to this:
```
mps.plugins.dir=/Users/yourUserName/Library/Application Support/JetBrains/Toolbox/apps/MPS/ch-2/211.7628.1509/MPS 2021.1.app.plugins/
```

Then run the task `installMpsPlugin` and restart MPS.
Automatically reloading the plugin is not supported yet,
because failing to unloading the classes of the ktor server prevents that.

Alternatively you can install the plugin manually by first running the task `buildPlugin`
and then choosing the folder `mps-model-server/build/distributions/` in MPS.
