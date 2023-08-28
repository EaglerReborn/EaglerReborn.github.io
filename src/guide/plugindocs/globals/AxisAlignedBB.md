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
- `addCoord({x: number, y: number, z: number}) : void`
- `contract({x: number, y: number, z: number}) : void`
- `expand({x: number, y: number, z: number}) : void`
- `offset({x: number, y: number, z: number}) : void`
- `getAverageEdgeLength() : number`
