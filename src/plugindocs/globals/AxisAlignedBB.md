# AxisAlignedBB
Used to represent bounding boxes.

### Constructor:
PluginAPI.contructors.AxisAlignedBB({x1: Number, y1: Number, z1: Number, x2: Number, y2: Number, z2: Number})

Has the following properties:
- `minX`: Number: equal to the bounding box's `minX`
- `minY`: Number: equal to the bounding box's `minY`
- `minZ`: Number: equal to the bounding box's `minZ`
- `maxX`: Number: equal to the bounding box's `maxX`
- `maxY`: Number: equal to the bounding box's `maxY`
- `maxZ`: Number: equal to the bounding box's `maxZ`

It has the following methods:
- `addCoord({x: number, y: number, z: number}) : [AxisAlignedBB](AxisAlignedBB.md)`
- `contract({x: number, y: number, z: number}) : [AxisAlignedBB](AxisAlignedBB.md)`
- `expand({x: number, y: number, z: number}) : [AxisAlignedBB](AxisAlignedBB.md)`
- `offset({x: number, y: number, z: number}) : [AxisAlignedBB](AxisAlignedBB.md)`
- `getAverageEdgeLength() : number`
- `toString() : string`
- `intersectsWith([AxisAlignedBB](AxisAlignedBB.md)) : boolean`
- `isVecInside([Vec3](Vec3.md)) : boolean`
