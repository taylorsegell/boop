/**
	{
		"api":1,
		"name":"Adjust Point Distance by Angle",
		"description":"Adjusts Point 2 based on a new preferred distance while maintaining the same angle between two points.",
		"author":"Taylor Segell",
		"icon":"arrow.right.circle",
		"tags":"geometry,angle,points,distance"
	}
**/

function main(state) {
    try {
        let input = state.text.trim().split(",");
        if (input.length < 6) {
            state.postError("Invalid input. Provide two points, the angle, and the new distance.");
            return;
        }

        // Parse input
        let point1X = parseFloat(input[0].trim());
        let point1Y = parseFloat(input[1].trim());
        let point2X = parseFloat(input[2].trim());
        let point2Y = parseFloat(input[3].trim());
        let angleDegrees = parseFloat(input[4].trim()); // provided angle in degrees (but we'll use our own calculation)
        let newDistance = parseFloat(input[5].trim());  // the new distance to apply

        if (isNaN(point1X) || isNaN(point1Y) || isNaN(point2X) || isNaN(point2Y) || isNaN(angleDegrees) || isNaN(newDistance)) {
            state.postError("Invalid input. Ensure all inputs are numbers.");
            return;
        }

        // Calculate the current angle between the points
        let deltaX = point2X - point1X;
        let deltaY = point2Y - point1Y;
        let currentDistance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        let currentAngle = Math.atan2(deltaY, deltaX);  // In radians

        // Calculate the new point based on the preferred distance while keeping the same angle
        let newPointX = point1X + newDistance * Math.cos(currentAngle);
        let newPointY = point1Y + newDistance * Math.sin(currentAngle);

        // Output the new coordinates
        state.text = `New Point 2 Coordinates: (${newPointX.toFixed(2)}, ${newPointY.toFixed(2)})`;
    }
    catch (error) {
        state.postError("An error occurred: " + error.message);
    }
}
