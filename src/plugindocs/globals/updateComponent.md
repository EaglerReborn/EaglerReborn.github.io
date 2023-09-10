# PluginAPI.updateComponent(String componentName) [DEPRECATED]
This method is used to tell `PluginAPI` that a global needs to be reloaded.
It is deprecated and should no longer be used. Instead, call `reload()` on the object that needs updating.

## Arguments:

### (String) componentName
This argument is used to get which global object needs reloading:

It is always equal to the identifier of the global. ie: `PluginAPI.player`'s identifier is `player`.