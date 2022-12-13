// change the JS to display the SVG stars instead of numbers

/*
function onLoadActions() {
    for (let star = 0; star <= 10; star++) { // visualise 10 stars in container
        let starNode = document.createElement('stars-container') // 1) change this to container ??
        let star = document.getElementById('star-svg').outerHTML // .onclick = selectStar();

        starNode.classList.add('star') // 2) customise star, add CSS class .star
        starNode.innerHTML = star // assign innerHTML to star

        document.getElementById('stars-container').appendChild(starNode)[star] // do i need [star] ?? // append it to HTML via the DOM, may need to change this ??
    }
}
*/


function onLoadActions() {
    for (let star = 0; star <= 5; star++) { // visualise 10 stars in container
        let starNode = document.createElement('stars-container') // 1) change this to container ??
        let star = document.getElementById('star-svg').outerHTML // .onclick = selectStar();

        starNode.classList.add('star') // 2) customise star, add CSS class .star
        starNode.innerHTML = star // assign innerHTML to star

        document.getElementById('stars-container').appendChild(starNode)[star] // do i need [star] ?? // append it to HTML via the DOM, may need to change this ??
    }
    for (let star = 0; star <= 3; star++) { // visualise 10 stars in container
        let starNode = document.createElement('stars-container') // 1) change this to container ??
        let star = document.getElementById('star-svg-uncheck').outerHTML // .onclick = selectStar();

        starNode.classList.add('star') // 2) customise star, add CSS class .star
        starNode.innerHTML = star // assign innerHTML to star

        document.getElementById('stars-container').appendChild(starNode)[star] // do i need [star] ?? // append it to HTML via the DOM, may need to change this ??
    }
}


window.onload = onLoadActions()



// add a function to make the stars clickable and to change color when clicked

// function are clickable and i can change the first star using the dom

// need to apply the change style to the star that is clicked


// function selectStar() {

let stars = document.getElementsByTagName("svg")

let changeStar = document.getElementById('star-svg').outerHTML // .onclick = selectStar();

// let selectStar = 

let starSelected = e => {
    console.log(e.target.id) // get id of clicked star
}
for (let star of stars) {
    star.addEventListener("click", starSelected);
    let starChange = document.getElementById("star-svg").style.backgroundColor = "green"
}

// }





// need to apply starSelected to starChange 
// for loop to loop and check what is selected ??

//   let starNode = document.createAttribute("")

/*
function onClick() {
let stars = document.getElementById('star-svg') // do i need to use class instead of id
for(let i = 0; i < stars.length; i++){
    stars[i].addEventListener('click', function(){
        stars[i].classList.toggle('star-unselected')
    })
}
}
*/

// need to grab stars index number from array













// add CSS cursor pointer and hover and animations when hover on a star




// more info button shadow needs work and link the function to another webpage







// change function so starts with 6 selected and 4 unselected stars




// check for other changes to CSS, HTML & JS to improve (don't show box when typing in comment)