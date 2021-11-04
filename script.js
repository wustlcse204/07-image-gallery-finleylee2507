
var imageId = -1; //used to keep track of the current image to display 
var numImages=document.getElementsByClassName("image").length;

const addEffects = () => {
    document.querySelectorAll('.image').forEach(item => {
        item.addEventListener('click', expandImage);

        item.addEventListener('mouseover', mouseOverEffect);

        item.addEventListener('mouseout', mouseOutEffect);

    });

};

const removeEffects = () => {
    document.querySelectorAll('.image').forEach(item => {
        item.removeEventListener('click', expandImage);

        item.removeEventListener('mouseover', mouseOverEffect);

        item.removeEventListener('mouseout', mouseOutEffect);

    });
};



const expandImage = (event) => {

    //clear effect before opening image 
    mouseOutEffect();
    //remove event listeners to make background inactive 
    removeEffects();


    //get the id of the current image 
    imageId = parseInt(event.target.getAttribute("id"));

    
    showImage(imageId);


}


//given an image id, display the image 
const showImage = (n) => {

    var images = document.getElementsByClassName("image");
   

    var expandedImage = document.getElementById("modal-image");
    expandedImage.src = images[n].getAttribute("src");
    

    //jquery stuffs
    $(".modal-container").addClass("open"); //add class to the modal container so it will be visible 

    if ($(".modal-container").hasClass("open")) {

        $(".attractions-container").addClass("blur"); //add bluring effect to the main section
    }

    //prevent background from scrolling 
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";


}



//undo effects 
const collapseImage = () => {

    //restore main section interactivity 
    addEffects();

    $(".modal-container").removeClass("open");
    $(".attractions-container").removeClass("blur");

    //restore background 
    document.body.style.height = "";
    document.body.style.overflowY = "";


}


const nextImage = () => {

    if(imageId+1<numImages){
        imageId += 1;

        showImage(imageId);
    }
    
}

const previousImage = () => {
    if(imageId-1>=0){
        imageId -= 1;
        showImage(imageId);
    }
 
}

const mouseOverEffect = (event) => {

    var currImage = event.target;
    currImage.style.opacity = "0.75";
    currImage.style.border = "8px solid";
    currImage.style.borderImage = " linear-gradient(45deg, red, black) 1";

}

//clear effect
const mouseOutEffect = () => {

    var elements = document.getElementsByClassName('image');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.opacity = 1;
        element.style.border = "none";
    }
}







