# AxisAlignedBB

Used to represent bounding boxes.

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
- `addCoord([AxisAlignedBB](AxisAlignedBB.md)) : [AxisAlignedBB](AxisAlignedBB.md)`
- `contract([AxisAlignedBB](AxisAlignedBB.md)) : [AxisAlignedBB](AxisAlignedBB.md)`
- `expand([AxisAlignedBB](AxisAlignedBB.md)) : [AxisAlignedBB](AxisAlignedBB.md)`
- `offset([AxisAlignedBB](AxisAlignedBB.md)) : [AxisAlignedBB](AxisAlignedBB.md)`
- `getAverageEdgeLength() : number`
- `toString() : string`
- `intersectsWith([AxisAlignedBB](AxisAlignedBB.md)) : boolean`
- `isVecInside([Vec3](Vec3.md)) : boolean`
