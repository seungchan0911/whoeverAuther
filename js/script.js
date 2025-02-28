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

function login() {
    const loginInput = document.querySelector(".id-input input");
    const passwordInput = document.querySelector(".password-input input");
    const login = document.querySelector(".login").parentNode.parentNode;
    const signUp = document.querySelector(".create").parentNode;
    const loginBtn = document.querySelector(".login-title");
    const user = document.querySelector(".user");
    deleteGroup = Array(login, signUp);
    
    loginInput.value = loginInput.value.replace(/[^a-z0-9]/gi,'');

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

function loginBox() {
    const loginBtn = document.querySelector(".login");
    const loginBox = document.querySelector(".login-box");
    const closeBtn = document.querySelector(".login-box .close-btn")

    loginBtn.addEventListener("click", () => {
        loginBox.style.display = "block";
        setTimeout(() => {
            loginBox.style.opacity = 1;
        });
    })
    
    closeBtn.addEventListener("click", () => {
        loginBox.style.opacity = 0;
        setTimeout(() => {
            loginBox.style.display = "none";
        }, 300);
    })
}

loginBox();

function login() {
    const loginInput = document.querySelector(".id-input input");
    const passwordInput = document.querySelector(".password-input input");
    const login = document.querySelector(".login").parentNode.parentNode;
    const signUp = document.querySelector(".create").parentNode;
    const loginBtn = document.querySelector(".login-title");
    const user = document.querySelector(".user");
    deleteGroup = Array(login, signUp);
    
    loginInput.value = loginInput.value.replace(/[^a-z0-9]/gi,'');

    loginBtn.addEventListener("click", () => {
            if (loginInput.value !== "" && passwordInput.value !== "") {
            deleteGroup.forEach(dG => {
                dG.style.display = "none"
            });
            user.style.display = "flex";
            user.textContent = loginInput.value + "님";
        }
    });

    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (loginInput.value !== "" && passwordInput.value !== "") {
                deleteGroup.forEach(dG => {
                    dG.style.display = "none"
                });
                user.style.display = "flex";
                user.textContent = loginInput.value + "님";
                following();
            }
          }
      });
}

login();

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
        });
    })
}

popup();

function topScroll() {
    const topScrollBtn = document.querySelector(".top-scroll-btn");

    topScrollBtn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
}

topScroll();

function aTagScrollDisabled() {
    const aTags = document.querySelectorAll("a[href='#']");

    aTags.forEach(aTag => {
        aTag.addEventListener("click", (e) => {
            e.preventDefault();
        })
    });
}

aTagScrollDisabled();