/**
 * Created by scottbromander on 10/23/15.
 */
var peopleArray = ["Dana", "Pui", "Kelly", "Sam"];

var indexTracker = 0;

$(document).ready(function(){

    createCarousel(peopleArray);

    updateIndexPoints();

    $('#mainContent').append("<p>" + peopleArray[0] + "</p>");
    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);

});

function createCarousel(array){
    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();
    createNavButtons($el);
    createIndexPoints(array, $el);
}

function nextSlide(){
    incrementTracker();
    //indexTracker++;
    createNameDisplay(peopleArray,indexTracker);
    //if(indexTracker >= peopleArray.length){
    //    indexTracker = 0;
    //}

    updateIndexPoints();
}

function prevSlide(){
    //indexTracker--;
    decrementTracker();
    createNameDisplay(peopleArray,indexTracker);
    //if(indexTracker < 0){
    //    indexTracker = peopleArray.length - 1;
    //}

    updateIndexPoints();
}

function createNavButtons($el){
    $el.append("<div id='prev' class='nav-button'>Prev</div>");
    $el.append("<div id='next' class='nav-button'>Next</div>");
}

function createIndexPoints(array, $el){
    //create something visual, Divs will work
    for(var i = 0; i < array.length; i++){
        //we need i, 1 for each element
        $el.append("<div class='index-point' id='index" + i + "'></div>")

    }
}

function updateIndexPoints(){
    for(var i = 0; i < peopleArray.length; i++){
        $("#index" + i).removeClass("index-point-active");

        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
        }
    }
}

function createNameDisplay(Array,index){
    var i=indexTracker;
    var currentName=peopleArray[i];

    $('#mainContent').children().remove();
    $('#mainContent').append("<p>" + currentName + "</p>");

}
function incrementTracker(){
//TODO: fix for empty peopleArray
    var isNullOrUndefined = peopleArray == null;
    if (isNullOrUndefined) {
        throw new Error ('people array is null');
    }


  var sliderCount = peopleArray.length;
    var newTracker = (indexTracker +1) % sliderCount;
    console.log("inc tracker ",newTracker);
    indexTracker = newTracker;
}
function decrementTracker(){

    var isNullOrUndefined = peopleArray == null;
    if (isNullOrUndefined) {
        throw new Error ('people array is null');
    }
    var sliderCount = peopleArray.length;
    var newTracker = (indexTracker -1) % sliderCount;

    if (newTracker < 0 ){
        newTracker = sliderCount-1;
    }
    console.log("dec tracker ",newTracker);
    indexTracker = newTracker;

}