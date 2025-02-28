function slide() {
    const slide = document.querySelector(".main-banner-slide .slide");
    const indicator = document.querySelectorAll(".indicator li");
    let currentIndex = 0;
    indicator[0].style.backgroundColor = "white";

    setInterval(() => {
        currentIndex++;
        slide.style.marginLeft = -currentIndex * 100 + "%";
        slide.style.transition = "1s ease-in-out";
    
        if (currentIndex === 3) {
            setTimeout(() => {
                slide.style.transition = "0s";
                slide.style.marginLeft = 0;
                currentIndex = 0;
            }, 1500);
        }
        
        indicator.forEach(indicators => {
            indicators.style.backgroundColor = "rgba(0, 0, 0, 0)";
        });
        
        if (currentIndex === 3) {
            indicator[0].style.backgroundColor = "white";
        } else {
            indicator[currentIndex].style.backgroundColor = "white";
        }
    }, 5000);
}

slide(); 

function handleOnInput(e)  {
    e.value = e.value.replace(/[^A-Za-z0-9]/ig, '')
}