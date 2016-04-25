(function(){
    


var fadeTime = 1000;
var indexTracker = 0;
var personArray = ["Joe", "Bob", "Leo","Jerry","Ziggy", "Lemmy"];


function domSetup (){
    
    var el = '<h1>'+ personArray[indexTracker] +'</h1>';
    
    $('#out').empty();
    $('#out').append(el).hide().fadeIn(fadeTime);
}

function nextIndex () {
    indexTracker++;
    if (indexTracker > (personArray.length-1)) {
        indexTracker = 0;
    }
    
}

function prevIndex (){
    indexTracker--;
    if ( indexTracker < 0){
        indexTracker = personArray.length - 1;
    }
    
}

function updateDom() {
    var el = '<h1>'+ personArray[indexTracker] +'</h1>';
    
    $('#out').fadeOut(fadeTime).empty();
    $('#out').append(el).hide().fadeIn(fadeTime);
}



$(document).ready(function(){
  
domSetup();  
  
//click listeners
$('#prev').on('click', function(){
   prevIndex();
   updateDom();
});  

$('#next').on('click', function(){
    nextIndex();
    updateDom();
}); 
    
    
 //end jquery   
});



//end iife
})();