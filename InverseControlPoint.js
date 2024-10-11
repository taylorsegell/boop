/**
	{
		"api":1,
		"name":"Inverse Bezier Control Point",
		"description":"Calculates the inverse Bezier control point given an anchor point, control handle, and a distance.",
		"author":"Taylor Segell",
		"icon":"arrow.turn.left.down",
		"tags":"geometry,bezier,points,figma"
	}
**/

function main(state) {
    try {
        let input = state.text.trim().split(",");
        if (input.length < 5) {
            state.postError("Invalid input. Provide anchor coordinates, control coordinates, and distance.");
            return;
        }

        // Parsing input
        let anchorX = parseFloat(input[0].trim());
        let anchorY = parseFloat(input[1].trim());
        let handleX = parseFloat(input[2].trim());
        let handleY = parseFloat(input[3].trim());
        let distance = parseFloat(input[4].trim());

        if (isNaN(anchorX) || isNaN(anchorY) || isNaN(handleX) || isNaN(handleY) || isNaN(distance)) {
            state.postError("Invalid input. Ensure all inputs are numbers.");
            return;
        }

        // Calculate angle between anchor and control handle
        let deltaX = handleX - anchorX;
        let deltaY = handleY - anchorY;
        let originalAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        // Calculate the inverse angle (opposite side)
        let inverseAngle = originalAngle - 180;
        if (inverseAngle < 0) {
            inverseAngle += 360; // Keep it positive
        }

        // Convert angle to radians for trigonometric functions
        let inverseAngleRad = inverseAngle * (Math.PI / 180);

        // Calculate the new control handle coordinates
        let newHandleX = anchorX + distance * Math.cos(inverseAngleRad);
        let newHandleY = anchorY + distance * Math.sin(inverseAngleRad);

        // Return the new coordinates
        state.text = `New Bezier Control Point: (${newHandleX.toFixed(2)}, ${newHandleY.toFixed(2)})`;
    }
    catch (error) {
        state.postError("An error occurred: " + error.message);
    }
}
