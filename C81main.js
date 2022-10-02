canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.begainPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.rect(460, 215, 50, 0, 2 * Math.PI);
ctxstroke();

ctx.begainPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.rect(250, 215, 50, 0, 2 * Math.PI);
ctxstroke();

ctx.begainPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctxstroke();

ctx.begainPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.rect(360, 215, 50, 0, 2 * Math.PI);
ctxstroke();

ctx.begainPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 5;
ctx.rect(310, 255, 50, 0, 2 * Math.PI);
ctxstroke();

ctx.begainPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.rect(410, 255, 50, 0, 2 * Math.PI);
ctxstroke();
