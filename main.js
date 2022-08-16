
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function NewImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockImageObeject = Img;
        blockImageObeject.scaleToWidth(blockImageWidth);
        blockImageObeject.scaleToHeight(blockImageHeight);
        blockImageObeject.set({
            top: blockY,
            left: blockX
        });
        canvas.add(blockImageObeject);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69')
	{
		//tecla e
		blockX = 50;
		NewImage("rr1.png");
	}
	if(keyPressed == '86')
	  
	{
		//tecla v
		blockX = 300;
		NewImage("gr.png");
	}
	
	if(keyPressed == '65')
	
	{
		//tecla a
		blockX =500;
		NewImage("yr.png");
	}
	if(keyPressed == '82')
	{
		blockX = 800;
		NewImage("pr.png");
		//tecla r
	}
	if(keyPressed == '73')
	{
		blockX = 900;
		NewImage("br.png");
		//tecla i
	}
	
}

