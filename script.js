

async function changeBackground(){
    try {
        const response = await fetch("https://source.unsplash.com/random");
        const imageUrl = response.url;

        const bgContainer = document.querySelector("#bg-container");

        bgContainer.style.backgroundImage = `url(${imageUrl})`;

    } catch (error) {
        console.error("Error fetching background image:", error);
    }
};