

let trigoStrength = 3;
let primary = localStorage.getItem('primary_color') || '#7366ff';
let secondary = localStorage.getItem('secondary_color') || '#f73164';



function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}
