// Function to trigger when hovering over an image
function handleImageHover(event) {
    const imgSrc = event.target.src;
    console.log(`You hovered over an image with src: ${imgSrc}`);

    // Example action: Change the border of the image
    event.target.style.border = "2px solid red";
    event.target.src = "https://picsum.photos/200/300";
}
  
// Attach hover event listener to all images
document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("mouseover", handleImageHover);

    // Optional: Remove the border when mouse leaves the image
    img.addEventListener("mouseout", (event) => {
        event.target.style.border = "none";
    });
});