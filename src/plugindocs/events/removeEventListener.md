# PluginAPI.removeEventListener(String eventName, Function callback, Boolean slow?)
This method is used to add event listeners to the event name specified.

## Arguments:

### (String) eventName
Type of event to remove the listener from.

### (Function) callback
The function to remove from the event listener array.

### [Optional] (Boolean) slow
Wether or not to use the functions definition rather than it's reference to look in the listener array. Much slower with it on.

Example where it is not necessary:
```
function myListener() {
    // idk
}
PluginAPI.addEventListener("update", myListener);
PluginAPI.removeEventListener("update", myListener);
```

Example where it is necessary:
```
PluginAPI.addEventListener("update", function myListener() {
    // idk
});
PluginAPI.removeEventListener("update", function myListener() {
    // idk
});
```