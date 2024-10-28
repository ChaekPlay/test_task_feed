export function colorContent(content, colorArray) {
    // TODO: get position and length from color array
    // TODO: make gradient
    for (let i = 0; i < colorArray.length; i++) {
       let colorPart = content.substring(colorArray[i].position, colorArray[i].position + colorArray[i].length);
       console.log(colorPart);
    }
    return content;
}