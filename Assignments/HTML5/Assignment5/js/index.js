function draw() {
    var canvas = document.getElementById('canvas');
    canvas.width = 800;
    canvas.height = 800;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); //outer circle
        ctx.fill();
        ctx.moveTo(110,75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); //mouth
        ctx.moveTo(65, 65);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); //left eye
        ctx.fill();
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); //right eye
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

window.onload = draw;