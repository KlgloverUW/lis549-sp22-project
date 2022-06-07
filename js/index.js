/*Test javascript with console*/
let myName = "Kristin Glover";
console.log(myName);

/*Select grid container element on index.html main page*/
let gridElement = $("div.grid-item");

/*Add event listener to change to text message when mouse enters flex container*/
gridElement.on('click', function(event){
    gridElement.text("Go explore!");
})

/*Select images on page*/
let bigPicture = $("img");
let figCap = $("figcaption");

/*Add event listener to switch image to snail picture + text when mouse enters*/
bigPicture.on('mouseenter', function(event){
    bigPicture.attr('src', 'images/snail.jpeg')
    figCap.text("Go at your own pace!")
})
bigPicture.on('click', function(event){
    bigPicture.attr('src', 'images/cherry.jpeg')
    figCap.text("Smell the cherry blossoms!")
})
