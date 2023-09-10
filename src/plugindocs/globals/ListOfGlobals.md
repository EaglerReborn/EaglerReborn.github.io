# List of Globals

- `PluginAPI.player`
    A [`PlayerData`](PlayerData.md) made from `EntityPlayerSP`.
- `PluginAPI.items`
    An [`ItemData`](ItemData.md) array of all the in-game item types, and block-item types. [Auto]
- `PluginAPI.blocks`
    A [`BlockData`](BlockData.md) array of all the in-game blocks. [Auto]
- `PluginAPI.materials`
    A [`MaterialData`](MaterialData.md) array of all the block materials. [Auto]
- `PluginAPI.enchantments`
    An [`EnchantmentData`](EnchantmentData.md) array of all the in-game enchantments. [Auto]
- `PluginAPI.constructors`
    A object containing constructors to make some Java objects in JavaScript. [Auto]

In order to use non auto globals, they must be [required](require.md).
