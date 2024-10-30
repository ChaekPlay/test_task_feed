export function colorContent(content, colorArray) {
  // TODO: get position and length from color array
  // TODO: make gradient
  let result = "";
  for (let i = 0; i < colorArray.length; i++) {
    let colorPart = content.substring(
      colorArray[i].position,
      colorArray[i].position + colorArray[i].length
    );
    let prevPos =
      i > 0 ? colorArray[i - 1].position + colorArray[i - 1].length : 0;
    result = result + content.substring(prevPos, colorArray[i].position);
    result =
      result +
      '<span style="background-color: ' +
      getColorFromTone(colorArray[i].tone) +
      '">' +
      colorPart +
      "</span>";
  }
  return result;
}

// eslint-disable-next-line no-unused-vars
function getColorFromTone(tone) {
  let redHueValue = 0;
  let greenHueValue = 120;
  // translate (-1, 1) range to (0, 1)
  let hslHue = ((greenHueValue - redHueValue) * (tone + 1)) / 2 + redHueValue;
  return "hsl(" + hslHue + ", 100%, 75%)";
}
