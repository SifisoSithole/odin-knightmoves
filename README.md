## Knight Moves Solution

This module provides a function to find the shortest path for a knight on a chessboard from a given source position to a destination position.

### Usage

```javascript
const knightmovesSolution = require('./knightmovesSolution');

const source = [0, 0]; // Source coordinates
const destination = [7, 7]; // Destination coordinates

const path = knightmovesSolution(source, destination);
console.log(path); // Output: The shortest path from source to destination
```

### Function

#### `knightmovesSolution(src, dest)`

Finds the shortest knight path from the source coordinates to the destination coordinates.

- `src`: Array - The source coordinates [x, y].
- `dest`: Array - The destination coordinates [x, y].
- Returns: Array - The shortest path as an array of coordinates.

### Example

```javascript
const source = [0, 0]; // Source coordinates
const destination = [7, 7]; // Destination coordinates

const path = knightmovesSolution(source, destination);
// Output: The shortest path from source to destination
```

### Notes

- Coordinates are zero-indexed and should be within the bounds of a standard 8x8 chessboard.
- If the source and destination are the same, the source coordinates are returned.
- If the destination cannot be reached, an empty array is returned.
- The returned path represents the shortest path from source to destination.