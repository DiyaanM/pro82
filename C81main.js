canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var color="red"
ctx.beginPath()
ctx.strokeStyle="grey"
ctx.lineWidth=1
ctx.rect(150,140,430,200)
ctx.stroke()
circle(450,210,"red")
circle(400,250,"green")
circle(300,250,"orange")
circle(350,210,"black")
circle(250,210,"blue")
function circle(x,y,color)

{
    ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(x,y,40,0,2*Math.PI)
ctx.stroke()
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}