function scrollEvent() {
    const header = document.querySelector("header");
    const topHeader = document.querySelector(".top-header");
    const centerHeader = document.querySelector(".center-header");
    const bottomHeader = document.querySelector(".bottom-header")
    const main = document.querySelector("main");
    const bottomHeaderLogo = document.querySelector(".bottom-header-logo")
    
    window.addEventListener('scroll', function(){
        if (window.scrollY > 100) {
            header.style.height = "42px";
            header.style.transition = ".5s";
            main.style.transition = ".5s";
            topHeader.style.transition = ".5s";
            centerHeader.style.transition = ".5s";
            bottomHeader.style.transition = ".5s";
            topHeader.style.height = 0;
            centerHeader.style.height = 0;
            main.style.marginTop = "42px";
            topHeader.style.opacity = 0;
            centerHeader.style.opacity = 0;
            bottomHeaderLogo.style.width = "250px";
            bottomHeaderLogo.style.padding = "0 10px";
            bottomHeaderLogo.style.borderLeft = "1px solid rgba(0, 0, 0, 0.125)";
            bottomHeaderLogo.style.opacity = 1;
            header.style.top = "-2px"
        } else if (window.scrollY == 0) {
            header.style.height = "140px";
            topHeader.style.height = "20px";
            topHeader.style.borderBottom = "1px solid rgba(0, 0, 0, 0.125)";
            centerHeader.style.height = "80px";
            main.style.marginTop = "140px";
            topHeader.style.opacity = 1;
            centerHeader.style.opacity = 1;
            bottomHeaderLogo.style.width = 0;
            bottomHeaderLogo.style.opacity = 0;
            bottomHeaderLogo.style.padding = 0;
            bottomHeaderLogo.style.borderLeft = "none";
            header.style.top = "0"
            setTimeout(() => {
                bottomHeader.style.borderTop = "1px solid rgba(0, 0, 0, 0.125)";
            }, 500);
        }
      });
}

scrollEvent();

function addCart() {
    const cartBtn = document.querySelector(".cart-btn");

    cartBtn.addEventListener("click", () => {
        alert("장바구니에 추가되었습니다!");
    })
}

addCart();

function clearBlur() {
    const blur = document.querySelector(".blur");
    const blurBtn = document.querySelector(".blur-btn");

    blur.addEventListener('mouseover', () => {
        blurBtn.textContent = "클릭하면 볼 수 있습니다.";
    })

    blur.addEventListener('mouseout', () => {
        blurBtn.textContent = "스포를 포함하고 있을 수 있습니다.";
    })

    blurBtn.addEventListener("click", () => {
        blur.style.opacity = 0;
        setTimeout(() => {
            blur.style.display = "none";
        }, 500);
    })
}

clearBlur();

function login() {
    const loginInput = document.querySelector(".id-input input");
    const passwordInput = document.querySelector(".password-input input");
    const login = document.querySelector(".login").parentNode.parentNode;
    const signUp = document.querySelector(".create").parentNode;
    const loginBtn = document.querySelector(".login-title");
    const user = document.querySelector(".user");
    deleteGroup = Array(login, signUp);
    
    
    loginBtn.addEventListener("click", () => {
        if (loginInput.value !== "" && passwordInput.value !== "") {
            deleteGroup.forEach(dG => {
                dG.style.display = "none"
            });
            user.style.display = "flex";
            user.textContent = loginInput.value + "님";
        }
    })
}

login();

function handleOnInput(e)  {
    e.value = e.value.replace(/[^A-Za-z0-9]/ig, '')
}

function following() {
    const followBtn = document.querySelector(".follow-btn");
    let follow = false
    
    followBtn.addEventListener("click", () => {
        if (follow === false) {
            followBtn.textContent = "팔로잉";
            followBtn.classList.add("following");
            follow = true;
        } else {
            followBtn.classList.remove("following");
            follow = false;
        }
    })
}

following();

function bookListScroll() {
    const leftBtn = document.querySelector(".left-arrow");
    const rightBtn = document.querySelector(".right-arrow");
    const scrollContainer = document.querySelector(".book-list");
    const scrollElement = document.querySelector(".book-list ul");

    let maxScroll = scrollElement.offsetWidth - scrollContainer.offsetWidth + 80;

    leftBtn.style.display = "none";

    scrollContainer.addEventListener("scroll", () => {
        if (scrollContainer.scrollLeft > 0) {
            leftBtn.style.opacity = 1;
            setTimeout(() => {
                leftBtn.style.display = "flex";
            }, 300);
        } else {
            leftBtn.style.opacity = 0;
            setTimeout(() => {
                leftBtn.style.display = "none";
            }, 300);
        }
        
        if (scrollContainer.scrollLeft < maxScroll) {
            rightBtn.style.opacity = 1;
            setTimeout(() => {
                rightBtn.style.display = "flex";
            }, 300);
        } else {
            rightBtn.style.opacity = 0;
            setTimeout(() => {
                rightBtn.style.display = "none";
            }, 300);
        }
    });

    rightBtn.addEventListener("click", () => {
        if (scrollContainer.scrollLeft + 1200 <= maxScroll) {
            scrollContainer.scrollLeft += 1200;
        } else {
            scrollContainer.scrollLeft = maxScroll;
        }
    });

    leftBtn.addEventListener("click", () => {
        if (scrollContainer.scrollLeft - 1200 >= 0) {
            scrollContainer.scrollLeft -= 1200;
        } else {
            scrollContainer.scrollLeft = 0;
        }
    });
}

bookListScroll();

function loginBox() {
    const loginBtn = document.querySelector(".login");
    const loginBox = document.querySelector(".login-box");
    const closeBtn = document.querySelector(".login-box .close-btn")

    loginBtn.addEventListener("click", () => {
        loginBox.style.display = "block";
        setTimeout(() => {
            loginBox.style.opacity = 1;
        }, 300);
    })
    
    closeBtn.addEventListener("click", () => {
        loginBox.style.opacity = 0;
        setTimeout(() => {
            loginBox.style.display = "none";
        }, 300);
    })
}

loginBox();

function popup() {
    const popup = document.querySelector(".popup");
    const openBtn = document.querySelector(".notice-box")
    const closeBtn = document.querySelector(".popup .close-btn");

    closeBtn.addEventListener("click", () => {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    })
    
    openBtn.addEventListener("click", () => {
        popup.style.display = "flex";
        setTimeout(() => {
            popup.style.opacity = 1;
        }, 300);
    })
}

popup();