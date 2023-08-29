# Plugin API
The Plugin API consists of a global JavaScript object on the window, called, very simply, `PluginAPI`.


It has the following methods:
| Name        | Description             `            | Arguments        | Documentation    |
| ----------- | -----------                         |   -----------    |   -----------    |
| `addEventListener`    | Used to add listeners to events.      |  String eventName, Function callback        |          |
| `updateComponent`    | Tells `PluginAPI` that a global needs to be reloaded.      |  String globalName |  [updateComponent.md](globals/updateComponent.md)        |
| `require`    | Tells `PluginAPI` that a global needs to be generated every tick.      |  String globalName |  [require.md](globals/require.md)        |




It also has some global objects which expose some of the inner Minecraft workings. Go [here](globals/ListOfGlobals.md) to view the full list.
