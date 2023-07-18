let primary_color = localStorage.getItem('primary_color') || '#7366ff';
let secondary_color = localStorage.getItem('secondary_color') || '#f73164';
function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        baseval += 86400000;
        i++;
    }
    return series;
}
