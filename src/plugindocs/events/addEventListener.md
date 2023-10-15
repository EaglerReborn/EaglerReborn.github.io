# PluginAPI.addEventListener(String eventName, Function callback)
This method is used to add event listeners to the event name specified.

## Arguments:

### (String) eventName
This argument is used to specify internally which listener array to add the callback to.
It has the following valid values:

- `event`
    Called when any event is called. Passes an object with properties:
    - `event`: String representing the type of event being fired.
    - `data`: Object representing the original arguments to be passed to the callback.

- `gui`
    Called when the Plugin Manager GUI shows up. No arguments passed to callback.

- `load`
    Called when all plugins have finished loading.

- `update`
    Called every client tick. No arguments passed to callback.

- `sendchatmessage`
    Called just before the player sends a chat message. Passes an object with properties:
    - `message`: String representing the chat message.
    - `preventDefault:` Boolean representing whether or not to cancel processing the chat message. Default is `false`.

- `postmotionupdate`
    Called after player motion is updated. No arguments passed to callback.

- `motionupdate`
    Called on motion update.
    - `preventDefault`: Boolean representing whether or not to cancel sending motion updates to the server.

- `premotionupdate`
    Called before player motion is updated. Passes an object with properties:
    - `yaw`: Number representing the player's yaw rotation.
    - `pitch`: Number representing the player's pitch rotation.
    - `onGround`: Boolean representing whether the player is on ground or not.

- `key`
    Called when a special keypress is detected. ie: not `esc` or `open chat`, like `f3` or the letter `J`.
    Passes an object with properties:
    - `key`: Integer representing the LWJGL key code.
    - `preventDefault`: Boolean representing whether or not to prevent the default action for this key (if any).


### More events:

[Receiving packet events](FromServerEvents.md)

[Sending packet events](ToServerEvents.md)

### (Function) Callback
The function to call when this event fires.