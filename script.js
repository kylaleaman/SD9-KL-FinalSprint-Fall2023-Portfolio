// function switchImage(factId, imagePath) {
//     var imageContainer = document.querySelector(".imageContainer");
//     var image = document.querySelector(".myImage");

//     // Create a new paragraph element
//     var factParagraph = document.createElement("p");
//     factParagraph.innerHTML = getFactText(factId);
//     factParagraph.classList.add("myFacts");

//     // Replace the image with the new paragraph
//     imageContainer.replaceChild(factParagraph, image);

//     // Set a timeout to restore the image after 5 seconds
//     setTimeout(function () {
//         imageContainer.replaceChild(image, factParagraph);
//     }, 5000);
// }

// function getFactText(factId) {
//     // Add logic to return the appropriate fact text based on the factId
//     switch (factId) {
//         case 'disneyFact':
//             return "I LOVE DISNEY!! I have been to Disney World over 10 times and plan to get to every Disney park in the world!";
        
//     }
// }

function switchImage(containerId) {
    var container = document.getElementById(containerId);
    var factParagraph = container.querySelector('.myFacts');

    // Toggle visibility using display property
    container.style.display = container.style.display === "none" ? "flex" : "none";
    factParagraph.style.display = factParagraph.style.display === "none" ? "block" : "none";

    // Switch back after 5 seconds
    setTimeout(function() {
        container.style.display = "flex";
        factParagraph.style.display = "none";
    }, 5000);
}





