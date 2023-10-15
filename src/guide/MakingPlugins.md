# How to create a plugin

You will need:
- Knowledge of JavaScript
- A code editor (I use [vscode.dev](https://vscode.dev))
- Knowledge of Minecraft

## What is a plugin?
A plugin is a script that is loaded by EaglerReborn on startup or when added. It can do anythin regular JavaScript do, as well as access the [Plugin API](../plugindocs/README.md).

<details>
<summary>
How to make an example "Spider" hack plugin
</summary>

## How to make an example "Spider" hack plugin

Spider is a hack that allows you to climb up walls like a spider.

Create a new file with the `.js` extension, and open it in your code editor.

We will start by [requiring](../plugindocs/README.md#using-non-auto-properties) the player.
Requiring allows us to access non-automatic properties of the Plugin API.

Add this line of code:
```javascript
PluginAPI.require("player");
```
This will allow us to access the player.


Now, we need to add a listener that will run code every game tick.\
Make a function. (Name it whatever you want)
```javascript
function spiderListener() {

}
```

Inside this function we will do two things:
- Check if the player is walking in to a wall
- If they are, add vertical motion

Let's start with checking if the player is walking in to a wall.\
In the function you just made, add an `if` block.
```javascript
if () {

}
```

We can check whether or not the player is walking in to a wall with `PluginAPI.player.isCollidedHorizontally`.
```javascript
if (PluginAPI.player.isCollidedHorizontally) {

}
```

Now to add the vertical motion, we change the `motionY` property of `PluginAPI.player`.\
I will use the `+=` operator, which adds an amount to a variable.

In the if, add these lines:
```javascript
PluginAPI.player.motionY += 0.2;
PluginAPI.player.reload();
```

You can change the `0.2` to something larger or smaller if you want. The `reload()` call is used to tell the Plugin API to update the in-game values, so we can see our changes.

Finally, we need to add the listener.
```javascript
PluginAPI.addEventListener("update", spiderListener);
```
This tells the Plugin API to run `spiderListener` every game update (or tick).

Your finished code should somewhat look like this:
```javascript
function spiderListener() {
    if (PluginAPI.player.isCollidedHorizontally) {
        PluginAPI.player.motionY += 0.2;
        PluginAPI.player.reload();
    }
}
PluginAPI.addEventListener("update", spiderListener);
```

Now, open the EaglerReborn client.
Go to Options > Plugins and press "upload".
Select the plugin file.

Now, when joining a server (without an anti-cheat), you should be able to climb up walls like a spider.
</details>