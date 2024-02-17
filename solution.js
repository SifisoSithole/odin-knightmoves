/**
 * Finds the shortest knight path from source to destination.
 * @param {Array} src - The source coordinates [x, y].
 * @param {Array} dest - The destination coordinates [x, y].
 * @returns {Array} - The path as an array of coordinates.
 */
function knightmovesSolution(src, dest) {

    /**
     * Prints the result of the knight's moves solution.
     * @param {Array} path - The path representing the solution.
     */
    function printResult(path) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        for (let i = 0; i < path.length; i++) {
            console.log(path[i]);
        }
    }

    // Check if the source and destination coordinates are valid
    if (
        src[0] < 0 || src[0] > 7 || src[1] < 0 || src[1] > 7 ||
        dest[0] < 0 || dest[0] > 7 || dest[1] < 0 || dest[1] > 7
    ) {
        return [];
    }

    // If source and destination are the same, return the source
    if (src[0] === dest[0] && src[1] === dest[1]) {
        return [src];
    }

    // Create a queue to store the coordinates
    let queue = [];
    queue.push([src]);
    
    // Initialize visited array to keep track of visited coordinates
    let visited = new Array(8).fill(false).map(() => new Array(8).fill(false));
    visited[src[0]][src[1]] = true;

    // Possible knight moves
    const xMove = [2, 1, -1, -2, -2, -1, 1, 2];
    const yMove = [1, 2, 2, 1, -1, -2, -2, -1];

    // Loop through the queue
    while (queue.length > 0) {
        let path = queue.shift();
        let last = path[path.length - 1];
        let x = last[0];
        let y = last[1];

        // Check possible moves
        for (let i = 0; i < xMove.length; i++) {
            let xNew = x + xMove[i];
            let yNew = y + yMove[i];

            // If new coordinates are within bounds and not visited yet
            if (xNew >= 0 && xNew < 8 && yNew >= 0 && yNew < 8 && !visited[xNew][yNew]) {
                visited[xNew][yNew] = true;
                let newPath = [...path, [xNew, yNew]];
                queue.push(newPath);
                // If destination reached, return the path
                if (xNew === dest[0] && yNew === dest[1]) {
                    printResult(newPath);
                    return newPath;
                }
            }
        }
    }
    // If destination cannot be reached, return an empty path
    return [];
}

module.exports = knightmovesSolution;