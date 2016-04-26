(function(){
    


var fadeTime = 1000;
var autoTime = 5000;
var indexTracker = 0;
var personArray = ["Joe", "Bob", "Leo","Jerry","Ziggy", "Lemmy"];
var slideshow = false;


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

function autoScroll(){
    setInterval(function(){
        if (slideshow === true) {
            nextIndex();
            updateDom();
        }
    }, autoTime);

}


$(document).ready(function(){
  
domSetup();
autoScroll();

  
  
//click listeners
$('#prev').on('click', function(){
   prevIndex();
   updateDom();
   
});  

$('#next').on('click', function(){
    nextIndex();
    updateDom();
    
}); 

$('.jumbotron').on('click', 'button', function(){
    if (slideshow === false) {
        slideshow = true;
    } else { 
        slideshow = false;
    }
   
});
    
    
 //end jquery   
});



//end iife
})();