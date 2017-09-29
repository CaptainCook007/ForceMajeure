

    function updateCounter(index){
        var item = "numClicks" + index;
        
        var oldClicks = localStorage.getItem(item);
        
        if(oldClicks==null){
            localStorage.setItem(item, 0);
           }
        
         var newClicks = (oldClicks*1) + 1;
        
        localStorage.setItem(item, newClicks);
        
        document.getElementById("clicks" + index).innerHTML = newClicks;  
    }
        

        

        

 
 