# Vec3

Used to represent a point in 3d space.

Has the following properties:
- `x`: Number: equal to the vector's `xCoord`
- `y`: Number: equal to the vector's `yCoord`
- `z`: Number: equal to the vector's `zCoord`

It has the following methods:
- `subtractReverse([Vec3](Vec3.md) vec) : void`
- `normalize() : [Vec3](Vec3.md)`
- `dotProduct([Vec3](Vec3.md) vec) : number`
- `crossProduct([Vec3](Vec3.md) vec) : [Vec3](Vec3.md)`
- `subtract({x: number, y: number, z: number}) : [Vec3](Vec3.md)`
- `addVector({x: number, y: number, z: number}) : [Vec3](Vec3.md)`
- `addVector([Vec3](Vec3.md) vec) : [Vec3](Vec3.md)`
- `distanceTo([Vec3](Vec3.md) vec) : number`
- `squareDistanceTo([Vec3](Vec3.md) vec) : number`
- `lengthVector() : number`
- `getIntermediateWithXValue({vec: [Vec3](Vec3.md), x: number}) : [Vec3](Vec3.md)`
- `getIntermediateWithYValue({vec: [Vec3](Vec3.md), y: number}) : [Vec3](Vec3.md)`
- `getIntermediateWithZValue({vec: [Vec3](Vec3.md), z: number}) : [Vec3](Vec3.md)`
- `toString() : string`
- `rotatePitch({pitch: number}) : [Vec3](Vec3.md)`
- `rotateYaw({yaw: number}) : [Vec3](Vec3.md)`
