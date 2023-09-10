# PlayerData
Represents a player.

A PlayerData usually has all of the properties of [LivingEntityData](LivingEntityData.md), and:

- `cameraYaw`: Number: Equal to the player's `cameraYaw`.
- `chasingPosX`: Number: Equal to the player's `chasingPosX`.
- `chasingPosY`: Number: Equal to the player's `chasingPosY`.
- `chasingPosZ`: Number: Equal to the player's `chasingPosZ`.
- `experience`: Number: The player's experience number.
- `experienceLevel`: Integer: The player's experience level.
- `experienceTotal`: Integer: The player's experience total.
- `fishEntity`: [FishHookData](FishHookData.md): The player's fishing bobber / hook. (If existing)
- `flyToggleTimer`: Integer: Equal to the player's `flyToggleTimer`.
- `hasReducedDebug`: Boolean: Equal to the player's `hasReducedDebug`.
- `itemInUseCount`: Integer: The count of the item that the player is currenly using. (Read-only)
- `itemInUse`: [ItemStackData](ItemStackData.md): The itemstack the player is using. (If existing)
- `lastXPSound`: Integer: Equal to the player's `lastXPSound`.
- `sleepTimer`: Integer: Equal to the player's `sleepTimer`.
- `sleeping`: Boolean: Whether or not the player is sleeping.
- `spawnForced`: Boolean: Equal to the player's `spawnForced`.
- `speedInAir`: Number: Equal to the player's `speedInAir`.
- `speedOnGround`: Number: Equal to the player's `speedOnGround`.
- `xpCooldown`: Integer: Equal to the player's `xpCooldown`.
- `xpSeed`: Integer: Equal to the player's `xpSeed`.
- `inventoryContainer`: [ContainerData](ContainerData.md): Equal to the player's `inventoryContainer`.
- `openContainer`: [ContainerData](ContainerData.md): Equal to the player's `openContainer`.
- `inventory`: [InventoryPlayerData](InventoryPlayerData.md): Equals to the player's `inventory`.
- `capabilities`: [PlayerCapabilities](PlayerCapabilities.md): Equals to the player's `capabilities`.

Todo: methods.