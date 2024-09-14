/**
  {
    "api":1,
    "name":"Hex to HSL",
    "description":"Convert color in hexadecimal to hsl",
    "author":"taylorsegell",
    "icon":"color-wheel",
    "tags":"hsl,hex,convert,color"
  }
**/

function main(state) {
  const hex = state.text;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error("Invalid hex color");
  }
  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r /= 255;
  g /= 255;
  b /= 255;

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // Create HSL object
  var HSL = {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };

  // Set HSL to state.text as a string
  state.text = `hsl(${HSL.h}, ${HSL.s}%, ${HSL.l}%)`;
}
