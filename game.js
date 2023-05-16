var start = new Date().getTime(); // start the time counter


function getRandomColor() {
                
        var letters = '0123456789ABCDEF'.split('');

        var color = '#';

        for (var i = 0; i < 6; i++ ) {

        color += letters[Math.floor(Math.random() * 16)];

            }

    return color;

    }


function makeShapeAppear() {
    
        var top = Math.random()*400;

        var left = Math.random()*400;

        var width = (Math.random()*200 + 50); //var width = (Math.random()*200 + 100);

        if (Math.random() > 0.5){
            
            document.getElementById("shape").style.borderRadius = "50%";
            
        }
    
        else{
            
            document.getElementById("shape").style.borderRadius = "0";
            
        }
    
        document.getElementById("shape").style.backgroundColor = getRandomColor;
    
        document.getElementById("shape").style.top = top + "px"; //random position of the shape vertically

        document.getElementById("shape").style.left = left + "px"; //random position of the shape horizontally

        document.getElementById("shape").style.width = width + "px"; //random size of the shape horizontally

        document.getElementById("shape").style.height = width + "px"; //random height of the shape horizontally
    
        document.getElementById("shape").style.display = "block"; //Reveal hidden content

        start = new Date().getTime;

    }


function appearAfterDelay() {
    
    setTimeout(makeShapeAppear, Math.random()*2000); // 2000 is microsecond to 2s
    
}


appearAfterDelay();


document.getElementById("shape").onclick = function() {
    
    document.getElementById("shape").style.display = "none"; //make the shape disapper 
    
    var end =new Date().getTime(); //end time counter onclick 
    
    var timeTaken = (end - start)/1000; // total time taken for the click
    
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    
    appearAfterDelay();
}







