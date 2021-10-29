
document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('click', e => {
        expandImage(e);
    });

    item.addEventListener('mouseover', e => {
        mouseOverEffect(e);
    });

    item.addEventListener('mouseout',()=>{
        mouseOutEffect();
    });

});



const expandImage = (event) => {

    var expandedImage = document.getElementById("biggerImage");
    expandedImage.src = event.target.getAttribute("src");
    expandedImage.parentElement.style.display = "block";

}

const collapseImage = (image) => {
    image.parentElement.style.display = "none";
}

const mouseOverEffect = (event) => {

    var currImage=event.target;
    currImage.style.opacity="0.75";
    currImage.style.border="8px solid";
    currImage.style.borderImage=" linear-gradient(45deg, red, black) 1";

}

//clear effect
const mouseOutEffect=()=>{

    var elements=document.getElementsByClassName('image');

    for(var i=0;i<elements.length;i++){
        var element=elements[i];
        element.style.opacity=1;
        element.style.border="none";
    }
}


