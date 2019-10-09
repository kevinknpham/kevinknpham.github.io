/*
Kevin Pham
JS file used to populate index.html.
*/

(function() {
    "use strict";

    const GREETING = "Hello World!\nMy name is Kevin.\nI like to code.\nWelcome to my website.";
    const TYPING_INTERVAL = 100;
    const CURSOR_INTERVAL = 200;

    let greetingIndex = 0;
    let greetingTextCurrent = "";
    let typeTimer;
    let cursorTimer;

    window.addEventListener("load", init);

    /**
     * Function that populates the page when it is loaded
     */
    function init() {
        loadCards(generateSkillCard, id("skills-container"), SKILLS);
        loadCards(generateExperienceCard, id("experience-container"), EXPERIENCES);
        loadCards(generateProjectCard, id("project-container"), PROJECTS);
        typeTimer = setInterval(startTerminalText, TYPING_INTERVAL);
        cursorTimer = setInterval(flashCursor, CURSOR_INTERVAL);
    }

    /**
     * Toggles hidden state of cursor.
     */
    function flashCursor() {
        id("cursor").classList.toggle("hidden");
    }

    /**
     * Makes cursor stop and disappear.
     */
    function clearCursor() {
        clearInterval(cursorTimer);
        cursorTimer = null;
        id("cursor").classList.add("hidden");
    }

    /**
     * Displays message on the fake terminal on the page.
     */
    function startTerminalText() {
        greetingTextCurrent += GREETING[greetingIndex];
        id("typing-text").innerText = greetingTextCurrent;
        greetingIndex++;
        if (greetingIndex === GREETING.length) {
            clearInterval(typeTimer);
            typeTimer = null;
            setTimeout(clearCursor, 10000);
        }
    }

    /**
     * Loads cards into the given parent element.
     * @param {Function} creator - constructor for a single card
     * @param {Object} parent - DOM for container to hold the cards
     * @param {Object[]} data - Array where each element is an object with the name, description, and image for each card
     */
    function loadCards(creator, parent, data) {
        for (let i = 0; i < data.length; i++) {
            parent.appendChild(creator(data[i]));
        }
    }

    /**
     * Generates a single card's DOM for the skills section.
     * @param {String} title - title for card
     * @param {String} description - description for paragraph on card
     * @param {String} image - url for img of card
     * @return {Object} - DOM for given data
     */
    function generateSkillCard({title, description, image}) {
        let result = ce("div");
        result.classList.add("card");
        result.classList.add("skill-card");

        result.style.backgroundImage = `url("${image}")`;

        // let img = ce("img");
        // img.src = image;
        // img.alt = title;
        // result.appendChild(img);

        let desc = ce("div");
        desc.classList.add("description");

        let h3 = ce("h3");
        h3.innerText = title;
        desc.appendChild(h3);

        let p = ce("p");
        p.innerText = description;
        desc.appendChild(p);

        result.appendChild(desc);
        return result;
    }

    /**
     * Generates a single card's DOM for the experience section.
     * @param {String} title - title for card
     * @param {String} description - description for paragraph on card
     * @return {Object} - DOM for given data
     */
    function generateExperienceCard({title, description}) {
        let result = ce("div");
        result.classList.add("card");
        result.classList.add("experience-card");

        let h3 = ce("h3");
        h3.innerText = title;
        result.appendChild(h3);

        let p = ce("p");
        p.innerText = description;
        result.appendChild(p);

        return result;
    }

    /**
     * Generates a single card's DOM for the projects section.
     * @param {String} title - title for card
     * @param {String} description - description for paragraph on card
     * @param {String} image - url for img of card
     * @return {Object} - DOM for given data
     */
    function generateProjectCard({title, description, image, url}) {
        let result = ce("div");
        result.classList.add("card");
        result.classList.add("project-card");

        result.style.backgroundImage = `url("${image}")`;

        // let img = ce("img");
        // img.src = image;
        // img.alt = title;
        // result.appendChild(img);

        let desc = ce("div");
        desc.classList.add("description");

        let h3 = ce("h3");
        let a = ce("a");
        a.innerText = title;
        a.href = url;
        h3.appendChild(a);
        desc.appendChild(h3);

        let p = ce("p");
        p.innerText = description;
        desc.appendChild(p);

        result.appendChild(desc);
        return result;
    }

    /*==========Helper Functions==========*/
    const ce = (el) => document.createElement(el);
    const id = (id) => document.getElementById(id);
    const qs = (query) => document.querySelector(query);
    const qsa = (query) => document.querySelectorAll(query);
})();