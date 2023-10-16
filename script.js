document.addEventListener("DOMContentLoaded", () => {
    const descr = document.querySelector(".descr");

    let text = document.createElement("div");
    fetch("https://baconipsum.com/api/?type=lucky")
        .then((res) => res.json())
        .then((res) => (text.textContent = res));
    descr.append(text);

    const input = document.querySelector("input"),
        error = document.querySelector(".error");

    input.addEventListener("input", () => {
        const reg = /[!@#$%^&*()]/g;

        if (reg.test(input.value)) {
            error.style.cssText = "";
            error.textContent = "";
            error.style.cssText =
                "width: 300px; height: 50px; margin-top: 10px";
            error.textContent = "Недопустимые символы: !@#$%^&*()";
            input.value = input.value.replace(reg, "");
        } else if (input.value.length < 4) {
            error.style.cssText = "";
            error.textContent = "";
            error.style.cssText =
                "width: 300px; height: 50px; margin-top: 10px";
            error.textContent = "Минимум 4 символа";
        } else {
            error.style.cssText = "";
            error.textContent = "";
        }
    });

    input.addEventListener("submit", () => {});

    function hide(selector) {
        selector.classList.remove("hide");
    }

    document.querySelectorAll(".hide").forEach(function (element, i) {
        setTimeout(function () {
            hide(element);
        }, 3000 + ++i * 400);
    });

    const burger = document.querySelector(".burger"),
        headerRight = document.querySelector(".header__right"),
        menu = document.querySelector(".header-list"),
        menuItem = document.querySelectorAll(".header-list__item");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        headerRight.classList.toggle("hide-menu");
    });

    menu.addEventListener("click", (e) => {
        if (e.target.classList.contains("header-list__item")) {
            menuItem.forEach((item) =>
                item.classList.remove("header-list__item-active")
            );
            e.target.classList.add("header-list__item-active");
            burger.classList.toggle("active");
            headerRight.classList.toggle("hide-menu");
        }
    });
});
