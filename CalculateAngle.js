/**
	{
		"api":1,
		"name":"Calculate Angle Between Points",
		"description":"Calculates the angle between an anchor point and its control handle.",
		"author":"Taylor Segell",
		"icon":"arrow.triangle.turn.up.right.circle",
		"tags":"math,geometry,angle,figma,points"
	}
**/

function main(state) {
    try {
        let input = state.text.trim().split(",");
        if (input.length < 4) {
            state.postError("Invalid input. Provide coordinates for both anchor and control points.");
            return;
        }

        let anchorX = parseFloat(input[0].trim());
        let anchorY = parseFloat(input[1].trim());
        let handleX = parseFloat(input[2].trim());
        let handleY = parseFloat(input[3].trim());

        let deltaX = handleX - anchorX;
        let deltaY = handleY - anchorY;

        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        if (angle < 0) {
            angle += 360; // Adjust to a positive angle in degrees
        }

        state.text = `Angle: ${angle.toFixed(2)}°`;
    }
    catch (error) {
        state.postError("An error occurred: " + error.message);
    }
}
