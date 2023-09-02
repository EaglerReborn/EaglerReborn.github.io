# ItemStackData
Represents an itemstack.

Has the following properties:
- `amount : Integer`
- `animationsToGo : Integer`
- `itemId : Integer`
- `itemDamage : Integer`
- `itemFrame : [EntityData](EntityData.md)` (If existing)
- `canDestroyCacheBlock : BlockData`
- `canDestroyCacheResult : Boolean`
- `canPlaceOnCacheBlock : BlockData`
- `canPlaceOnCacheResult : Boolean`

Has the following methods:
- `getItem() : [ItemData.md](ItemData.md)`
- `getMaxStackSize() : Integer`
- `isStackable() : Boolean`
- `isItemStackDamageable() : Boolean`
- `getHasSubtypes() : Boolean`
- `isItemDamaged() : Boolean`
- `getItemDamage() : Integer`
- `getMetadata() : Integer`
- `setItemDamage({meta: Integer}) : void`
- `getMaxDamage() : Integer`
- `copy() : [ItemStackData.md](ItemStackData.md)`
- `getUnlocalizedName() : String`
- `toString() : String`
- `getMaxItemUseDuration() : Integer`
- `getDisplayName() : String`
- `setDisplayName(displayName: String) : [ItemStackData.md](ItemStackData.md)`
- `clearCustomName() : void`
- `hasDisplayName() : Boolean`
- `hasEffect() : Boolean`
- `isItemEnchantable() : Boolean`
- `addEnchantment(enchId: Integer, level: Integer) : void`
- `isItemEnchanted() : Boolean`
- `canEditBlocks() : Boolean`
- `isOnItemFrame() : Boolean`
- `getRepairCost() : Integer`
- `setRepairCost(cost: Integer) : void`
- `setItem(itemId: Integer) : void`
- `canDestroy(blockId: Integer) : Boolean`
- `canPlaceOn(blockId: Integer) : Boolean`