# Receiving packet events
Events called by packets being received from the server by the client.

- `packetjoingame`
    Called when the user joins a server. Passes an object with properties:
    - `gameType`: String representing the gamemode.
    - `difficulty`: String representing the difficulty.
    - `entityId`: Integer representing the entity id of the player.
    - `maxPlayers`: Integer representing the maximum number of players that can join a server.
    - `hardcoreMode`: Boolean representing if the server is hardcore or not
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetspawnobject`
    Called when the server spawns an object. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity to spawn.
    - `x`: Integer representing the x position of the entity to spawn.
    - `y`: Integer representing the y position of the entity to spawn.
    - `z`: Integer representing the z position of the entity to spawn.
    - `speedX`: Integer representing the x velocity of the entity to spawn.
    - `speedY`: Integer representing the y velocity of the entity to spawn.
    - `speedZ`: Integer representing the z velocity of the entity to spawn.
    - `pitch`: Integer representing the pitch rotation of the entity to spawn.
    - `yaw`: Integer representing the yaw rotation of the entity to spawn.
    - `type`: Integer representing the entity type of the entity to spawn.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetspawnxporb`
    Called when the server spawns an xp orb. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the xp orb to spawn.
    - `posX`: Integer representing the x position of the xp orb to spawn.
    - `posY`: Integer representing the y position of the xp orb to spawn.
    - `posZ`: Integer representing the z position of the xp orb to spawn.
    - `xpValue`: Integer representing the xp value of the xp orb to spawn.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetspawnglobalentity`
    Called when the server spawns a global entity. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity to spawn.
    - `x`: Integer representing the x position of the entity to spawn.
    - `y`: Integer representing the y position of the entity to spawn.
    - `z`: Integer representing the z position of the entity to spawn.
    - `type`: Integer representing the type of the entity to spawn.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetspawnpainting`
    Called when the server spawns a painting. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the painting to spawn.
    - `position`: [BlockPos](../globals/BlockPos.md) representing the position of the painting to spawn.
    - `title`: String representing the type of the painting to spawn.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentityvelocity`
    Called when the server changes an entity's velocity. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity to change.
    - `motionX`: Integer representing the new x velocity of the entity.
    - `motionY`: Integer representing the new y velocity of the entity.
    - `motionZ`:Integer representing the new z velocity of the entity.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentitymetadata`
    Called when the server changes an entity's metadata. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity to change.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetspawnplayer`
    Called when the server spawns a player. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the player.
    - `playerId`: String representing the uuid of the player.
    - `x`: Integer representing the x position of the player.
    - `y`: Integer representing the y position of the player.
    - `z`: Integer representing the z position of the player.
    - `yaw`: Byte representing the yaw rotation of the player.
    - `pitch`: Byte representing the pitch rotation of the player.
    - `currentItem`: Integer representing the item id of the item in the player's hand.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentityteleport`
    Called when the server teleports an entity. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the player.
    - `posX`: Integer representing the new x position of the entity.
    - `posY`: Integer representing the new y position of the entity.
    - `posZ`: Integer representing the new z position of the entity.
    - `yaw`: Byte representing the yaw rotation of the entity.
    - `pitch`: Byte representing the pitch rotation of the entity.
    - `onGround`: Boolean representing wether the entity is on the ground.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packethelditemchange`
    Called when the server changes the item in your hand. Passes an object with properties:
    - `heldItemHotbarIndex`: Integer representing the slot that needs updating.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentity`
    Called when the server moves an entity. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity that is moving.
    - `posX`: Byte representing the x position of the entity that is moving.
    - `posY`: Byte representing the y position of the entity that is moving.
    - `posZ`: Byte representing the z position of the entity that is moving.
    - `yaw`: Byte representing the yaw rotation of the entity that is moving.
    - `pitch`: Byte representing the pitch rotation of the entity that is moving.
    - `onGround`: Boolean representing wether the entity is on the ground.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentityheadlook`
    Called when the server changes an entity's head rotation. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity that is moving.
    - `yaw`: Byte representing the yaw rotation of the entity that is moving.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetdestroyentities`
    Called when the server changes deletes some entities. Passes an object with properties:
    - `entityIDs`: Integer array representing the entities to delete.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetplayerposlook`
    Called when the server changes the players position or look. Passes an object with properties:
    - `x`: Number representing the new x position.
    - `y`: Number representing the new y position.
    - `z`: Number representing the new z position.
    - `yaw`: Number representing the new yaw rotation.
    - `pitch`: Number representing the new pitch rotation.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetmultiblockchange`
    Called when the server changes the some blocks. Passes an object with properties:
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetchunkdata`
    Called when the server sends the client chunk data. Passes an object with properties:
    - `chunkX`: Integer representing the x coordinate of the new chunk.
    - `chunkZ`: Integer representing the z coordinate of the new chunk.
    - `extractedData`: [ChunkData](../globals/ChunkData.md) representing the contents of the chunk.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetblockchange`
    Called when the server sends the a block update. Passes an object with properties:
    - `blockPosition`: [BlockPos](../globals/BlockPos.md) representing the position of the block.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetdisconnect`
    Called when the server sends a disconnect packet. Passes an object with properties:
    - `reason`: String representing the disconnect reason.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.
    - NOTE: The reason text length must be different in order for your changes to propagate.

- `packetcollectitem`
    Called when the server sends a collect item packet. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity collecting the item.
    - `collectedItemEntityId`: Integer representing the entity id of the item being collected.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetchat`
    Called when the server sends a chat message packet. Passes an object with properties:
    - `type`: Byte indicating the type of chat message.
    - `chat`: String representing the content of the chat message.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.
    - NOTE: The chat text length must be different in order for your changes to propagate.

- `packetanimation`
    Called when the server sends a animation packet. Passes an object with properties:
    - `type`: Integer indicating the type of animation.
    - `entityId`: Integer representing the entity playing the animation.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetusebed`
    Called when the server sends a 'use bed' packet. Passes an object with properties:
    - `playerID`: Integer representing the entity id of the player using the bed.
    - `bedPos`: [BlockPos](../globals/BlockPos.md) representing the position of the bed.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetspawnmob`
    Called when the server sends a 'spawn mob' packet. Passes an object with properties:
    - `entityId`: Integer representing the entity id of the entity being spawned.
    - `type`: Integer representing the type of the entity being spawned.
    - `x`: Integer representing the x position of the entity being spawned.
    - `y`: Integer representing the y position of the entity being spawned.
    - `z`: Integer representing the z position of the entity being spawned.
    - `velocityX`: Integer representing the x velocity of the entity being spawned.
    - `velocityY`: Integer representing the y velocity of the entity being spawned.
    - `velocityZ`: Integer representing the z velocity of the entity being spawned.
    - `yaw`: Byte representing the yaw rotation of the entity being spawned.
    - `pitch`: Byte representing the pitch rotation of the entity being spawned.
    - `headPitch`: Byte representing the head pitch rotation of the entity being spawned.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packettimeupdate`
    Called when the server sends a 'time update' packet. Passes an object with properties:
    - `totalWorldTime`: Number representing the total world time. [read-only]
    - `worldTime`: Number representing the the world time. [read-only]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.
    - (values are readonly because teavm cannot send `long` values to JavaScript and back.)

(Hey, umm... I started slacking off for writing the doc here. Sorry.)

- `packetspawnposition`
    Called when the server sets the world spawn. Passes an object with properties:
    - `spawnBlockPos`: [BlockPos](../globals/BlockPos.md) representing the spawn position.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentityattatch`
    - `leash`: Integer
    - `entityId`: Integer
    - `vehicleEntityId`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentitystatus`
    - `entityId`: Integer
    - `logicOpcode`: Byte
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetupdatehealth`
    - `health`: Number
    - `foodLevel`: Integer
    - `saturationLevel`: Number
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetsetxp`
    - `totalExperience`: Integer
    - `level`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetrespawn`
    - `dimensionID`: Integer
    - `difficulty`: String [read-only]
    - `gameType`: String [read-only]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetexplosion`
    - `posX`: Number
    - `posY`: Number
    - `posZ`: Number
    - `strength`: Number
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetopenwindow`
    - `windowId`: Integer
    - `slotCount`: Integer
    - `entityId`: Integer
    - `inventoryType`: String
    - `windowTitle`: String [read-only]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetsetslot`
    - `windowId`: Integer
    - `slot`: Integer
    - `item`: [ItemStackData](../globals/ItemStackData.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetconfirmtransaction`
    - `windowId`: Integer
    - `actionNumber`: Short
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetwindowitems`
    - `windowId`: Integer
    - `itemStacks`: [ItemStackData](../globals/ItemStackData.md)[]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetsigneditoropen`
    - `signPosition`: [BlockPos]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetupdatesign`
    - `blockPos`: [BlockPos]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetupdatetileentity`
    - `blockPos`: [BlockPos]
    - `metadata`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetwindowproperty`
    - `windowId`: Integer
    - `varValue`: Integer
    - `varIndex`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentityequipment`
    - `entityID`: Integer
    - `equipmentSlot`: Integer
    - `itemStack`: [ItemStackData](../globals/ItemStackData.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetclosewindow`
    - `windowId`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetblockaction`
    - `instrument`: Integer
    - `pitch`: Integer
    - `block`: [BlockData](../globals/BlockData.md)
    - `blockPosition`: [BlockPos](../globals/BlockPos.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetblockbreakanim`
    - `breakerId`: Integer
    - `progress`: Integer
    - `position`: [BlockPos](../globals/BlockPos.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetmapchunkbulk`
    - `xPositions`: Integer[]
    - `zPositions`: Integer[]
    - `chunksData`: [ChunkData](../globals/ChunkData.md)[]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetchangegamestate`
    - `state`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetmaps`
    - `mapId`: Integer
    - `mapScale`: Byte
    - `mapMinX`: Integer
    - `mapMinY`: Integer
    - `mapMaxX`: Integer
    - `mapMaxY`: Integer
    - `mapVisiblePlayersVec4b`: Vec4b[]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packeteffect`
    - `soundType`: Integer
    - `soundData`: Integer
    - `soundPos`: [BlockPos](../globals/BlockPos.md)
    - `serverWide`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetstatistics`
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentityeffect`
    - `entityId`: Integer
    - `duration`: Integer
    - `effectId`: Byte
    - `amplifier`: Byte
    - `hideParticles`: Byte
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetcombatevent`
    - `eventType`: String [read-only]
    - `deathMessage`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetserverdifficulty`
    - `difficulty`: String [read-only]
    - `difficultyLocked`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetcamera`
    - `entityId`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetworldborder`
    - `action`: String [read-only]
    - `size`: Integer
    - `centerX`: Number
    - `centerZ`: Number
    - `targetSize`: Number
    - `diameter`: Number
    - `warningTime`: Integer
    - `warningDistance`: Integer
    - `timeUntilTarget`: Number [read-only]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packettitle`
    - `type`: String [read-only]
    - `message`: String [change-length]
    - `fadeInTime`: Integer
    - `displayTime`: Integer
    - `fadeOutTime`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetsetcompressionlevel`
    - `threshold`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetplayerlistheaderfooter`
    - `header`: String [change-length]
    - `footer`: String [change-length]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetremoveentityeffect`
    - `entityId`: Integer
    - `effectId`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetplayerlistitem`
    - `action`: String [read-only]
    - `players`: Array of objects with properties:
        - `ping`: Integer [read-only]
        - `gamemode`: String [read-only]
        - `displayNameFormatted`: String [read-only]
        - `displayName`: String [read-only]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetkeepalive`
    - `id`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetplayerabilities`
    - `flySpeed`: Number
    - `walkSpeed`: Number
    - `invulnerable`: Boolean
    - `flying`: Boolean
    - `creativeMode`: Boolean
    - `allowFlying`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetplayerabilities`
    - `matches`: String[]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetsoundeffect`
    - `soundName`: String
    - `posX`: Integer
    - `posY`: Integer
    - `posZ`: Integer
    - `soundVolume`: Number
    - `soundPitch`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetresourcepack`
    - `url`: String
    - `hash`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetupdateentitynbt`
    - `entityId`: Integer
    - `nbt`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetcustompayload`
    - `channel`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetscoreboardobjective`
    - `objectiveName`: String
    - `objectiveValue`: String
    - `type`: String [read-only]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetupdatescore`
    - `name`: String
    - `objective`: String
    - `value`: Integer
    - `action`: String [read-only]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetdisplayscoreboard`
    - `scoreName`: String
    - `position`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetteams`
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.
    (Note: the packet is obfuscated, so i got no clue what its supposed to be)

- `packetparticles`
    - `particleType`: String [read-only]
    - `xCoord`: Number
    - `yCoord`: Number
    - `zCoord`: Number
    - `xOffset`: Number
    - `yOffset`: Number
    - `zOffset`: Number
    - `particleSpeed`: Number
    - `particleCount`: Integer
    - `longDistance`: Boolean
    - `particleArguments`: Integer[]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `packetentityproperties`
    - `entityId`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.
