/**
	{
		"api":1,
		"name":"Calculate Bezier Control Point from Angle",
		"description":"Calculates the new Bezier control point from an anchor point, angle, and distance.",
		"author":"Taylor Segell",
		"icon":"arrow.right.circle",
		"tags":"geometry,bezier,figma,points"
	}
**/

function main(state) {
    try {
        let input = state.text.trim().split(",");
        if (input.length < 4) {
            state.postError("Invalid input. Provide anchor coordinates, angle, and distance.");
            return;
        }

        // Parse input
        let anchorX = parseFloat(input[0].trim());
        let anchorY = parseFloat(input[1].trim());
        let angle = parseFloat(input[2].trim());
        let distance = parseFloat(input[3].trim());

        if (isNaN(anchorX) || isNaN(anchorY) || isNaN(angle) || isNaN(distance)) {
            state.postError("Invalid input. Ensure all inputs are numbers.");
            return;
        }

        // Convert angle to radians for trigonometric calculations
        let angleRad = angle * (Math.PI / 180);

        // Calculate the new control handle coordinates using trigonometry
        let newHandleX = anchorX + distance * Math.cos(angleRad);
        let newHandleY = anchorY + distance * Math.sin(angleRad);

        // Output the new coordinates
        state.text = `New Bezier Control Point: (${newHandleX.toFixed(2)}, ${newHandleY.toFixed(2)})`;
    }
    catch (error) {
        state.postError("An error occurred: " + error.message);
    }
}
