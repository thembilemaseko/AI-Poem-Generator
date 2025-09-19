function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["Code whispers secrets, lines of might"],
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("form");
poemFormElement.addEventListener("submit", generatePoem);
