 
<!DOCTYPE html>
    <html>
<head>
    <title>Expanding Ball</title>
</head>
<body>
    <canvas id="myCanvas" width="800" height="600" style="border:1px solid #d3d3d3;">
    Your browser does not support the HTML5 canvas tag.
    </canvas>
    <script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var x = canvas.width/2;
    var y = canvas.height-30;
    var ballRadius = 2;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        ballRadius += 1;
    }

    setInterval(draw, 1000);
    </script>
    </body>
</html>
