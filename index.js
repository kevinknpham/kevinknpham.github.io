/*
Kevin Pham
JS file used to populate index.html.
*/

(function() {
    "use strict";



    window.addEventListener("load", init);

    /**
     * Function that populates the page when it is loaded
     */
    function init() {
        loadCards("skill-card", id("skills-container"), SKILLS);
        console.table(EXPERIENCES);
        loadCards("experience-card", id("experience-container"), EXPERIENCES);
    }

    /**
     * Loads cards into the given parent element.
     * @param {String} type - class to add to card
     * @param {Object} parent - DOM for container to hold the cards
     * @param {Object[]} data - Array where each element is an object with the name, description, and image for each card
     */
    function loadCards(type, parent, data) {
        for (let i = 0; i < data.length; i++) {
            parent.appendChild(generateCard(data[i], type));
        }
    }

    /**
     * Generates a single card's DOM for the skills section
     * @param {String} title - title for card
     * @param {String} description - description for paragraph on card
     * @param {String} image - url for img of card
     * @return {Object} - DOM for given data
     */
    function generateCard({title, description, image}, type) {
        console.log(description);
        let result = ce("div");
        result.classList.add("card");
        result.classList.add(type);
        
        if (image) {
            let img = ce("img");
            img.src = image;
            img.alt = title;
            result.appendChild(img);
        }

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

    /*==========Helper Functions==========*/
    const ce = (el) => document.createElement(el);
    const id = (id) => document.getElementById(id);
    const qs = (query) => document.querySelector(query);
    const qsa = (query) => document.querySelectorAll(query);
})();