/**
	{
		"api":1,
		"name":"Adjust Hex Color",
		"description":"Adjust hex color by a given percentage.",
		"author":"your_name",
		"icon":"sun.max.fill",
		"tags":"color,hex,lighten,percentage"
	}
**/

function main(state) {
    try {
        // Split input by comma, expecting hex color and percentage
        let input = state.text.trim().split(",");
        let hexColor = input[0].trim();
        let percentage = input.length > 1 ? parseFloat(input[1].trim()) : 0.30;

        // Validate hex color
        if (!/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
            throw new Error("Invalid hex color format");
        }

        let lightenedColor = lightenColor(hexColor, percentage);
        state.text = lightenedColor;
    } catch (error) {
        state.postError("An error occurred: " + error.message);
    }
}

function lightenColor(hexColor, percentage) {
    // Remove the '#' from the beginning of the hex color
    hexColor = hexColor.replace(/^#/, '');

    // Extract RGB values from the hex color
    let r = parseInt(hexColor.substring(0, 2), 16);
    let g = parseInt(hexColor.substring(2, 4), 16);
    let b = parseInt(hexColor.substring(4, 6), 16);

    // Lighten each color component
    r = Math.min(Math.floor(r + (r * percentage)), 255);
    g = Math.min(Math.floor(g + (g * percentage)), 255);
    b = Math.min(Math.floor(b + (b * percentage)), 255);

    // Convert back to hex and return
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}
