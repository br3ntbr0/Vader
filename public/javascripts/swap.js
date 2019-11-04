//This function will change the image associated with the value of the drop down when it is changed by the user
function swapImage(){
    var image = document.getElementById("pocImage");
    var dropd = document.getElementById("vaderImgSwap");
    image.src = dropd.options[dropd.selectedIndex].value;   
};