/**
    {
        "api":1,
        "name":"Figma Vector Mirrors",
        "description":"Mirrors a point across a line defined by another point and it's angle.",
        "author":"TaylorSegell",
        "icon":"arrow.left.and.right.circle.fill",
        "tags":"geometry,mirror,vector"
    }
**/

function main(state) {
    try {
        // Parse input from state
        let input = state.text.trim().split(",");
        if (input.length !== 6) {
            throw new Error("Expected 6 values: x1, y1, x2, y2, x3, y3");
        }

        // Extract points from the input
        let x1 = parseFloat(input[0].trim());
        let y1 = parseFloat(input[1].trim());
        let x2 = parseFloat(input[2].trim());
        let y2 = parseFloat(input[3].trim());
        let x3 = parseFloat(input[4].trim());
        let y3 = parseFloat(input[5].trim());

        // Ensure inputs are valid numbers
        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
            throw new Error("Invalid number format. Please provide valid numeric coordinates.");
        }

        // Call the mirror function
        let mirroredPoint = mirrorAngle(x1, y1, x2, y2, x3, y3);
        
        // Output the mirrored point
        state.text = `Mirrored point: (${mirroredPoint[0].toFixed(2)}, ${mirroredPoint[1].toFixed(2)})`;
    }
    catch (error) {
        state.postError("An error occurred: " + error.message);
    }
}

// Simplified reflection function
function mirrorAngle(x1, y1, x2, y2, x3, y3) {
    // Calculate dx and dy (displacement vector)
    let dx = x2 - x1;
    let dy = y2 - y1;

    // Reflect (x3, y3) across the displacement vector from (x1, y1) to (x2, y2)
    let x_mirrored = x3 - 2 * dx;
    let y_mirrored = y3 - 2 * dy;

    return [x_mirrored, y_mirrored];
}

function mirrorAngle(x1, y1, x2, y2, x3, y3) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    
    let x_mirrored = x3 + dx;
    let y_mirrored = y3 + dy;
    
    return [x_mirrored, y_mirrored];
}

// Example:
let x1 = 8, y1 = 107;
let x2 = -12.52, y2 = 81.87;
let x3 = 150, y3 = 107;

let mirroredPoint = mirrorAngle(x1, y1, x2, y2, x3, y3);
console.log(`Mirrored point: (${mirroredPoint[0]}, ${mirroredPoint[1]})`);
