document.addEventListener("DOMContentLoaded", function () {
    const entries = [
        {
            name: "Project Edens Gate Army Volunteers",
            category: "humans",
            description: "Volunteer followers assigned to patrols, checkpoints, supply duties, and defensive positions."
        },
        {
            name: "Fold-In Soldiers",
            category: "humans",
            description: "Regular military personnel placed under Project Edens Gate command and used as organized, experienced units."
        },
        {
            name: "Project Edens Gate Army Conscripts",
            category: "humans",
            description: "Pressured or involuntary recruits with limited training, uneven morale, and mixed equipment."
        },
        {
            name: "Project Edens Gate Police",
            category: "humans",
            description: "Law-enforcement personnel operating checkpoints, searches, patrols, and security duties for Project Edens Gate."
        },
        {
            name: "Private Military Contractors",
            category: "humans",
            description: "White Fire PMC contractors sent into the forest for recovery, escort, reconnaissance, and combat assignments."
        },
        {
            name: "Collaborator Faction Soldiers",
            category: "humans",
            description: "Irregular allied groups supporting Project Edens Gate with local knowledge and widely varied equipment."
        },
        {
            name: "Criminals",
            category: "humans",
            description: "Fugitives and organized offenders hiding in the forest, usually alone or in small groups."
        },
        {
            name: "Psychos",
            category: "humans",
            description: "Unstable armed individuals whose behavior is unpredictable, territorial, and difficult to negotiate with."
        },
        {
            name: "Mutineers",
            category: "humans",
            description: "Former military units that rejected their commanders and now operate independently with uncertain goals."
        },
        {
            name: "AWOL Soldiers",
            category: "humans",
            description: "Deserters trying to escape the front; some avoid contact while others defend routes and supplies."
        },
        {
            name: "Hunters",
            category: "humans",
            description: "Experienced woodsmen who may guard hunting grounds, mistake travelers for animals, or react aggressively to intrusion."
        },
        {
            name: "Hermits",
            category: "humans",
            description: "Isolated residents living in improvised shelters who distrust outsiders and protect their limited supplies."
        },
        {
            name: "The Hammer",
            category: "humans",
            description: "A heavily protected, territorial hunter who uses traps, rough terrain, and knowledge of the area around his cabin."
        },
        {
            name: "Hook Hand",
            category: "humans",
            description: "A former angler in rain gear who patrols waterways during storms and uses lightning flashes to track intruders."
        },
        {
            name: "The Logger",
            category: "humans",
            description: "Also called Chainsaw Chester, he is a heavily armored figure whose noise, limited vision, and direct approach make distance important."
        },
        {
            name: "Bowie Knife Bill",
            category: "humans",
            description: "A former military officer who uses tunnels, traps, camouflage, and nighttime ambushes around his territory."
        },
        {
            name: "Meat Cleaver",
            category: "humans",
            description: "A powerful former butcher who controls a fortified processing shed and uses food, obstacles, and close spaces to lure trespassers."
        },

        {
            name: "The Sender Man",
            category: "creatures",
            description: "A mutated former mail carrier connected to missing shipments, strange packages, and attacks on forest supply routes."
        },
        {
            name: "The Shovel",
            category: "creatures",
            description: "A fast, pale forest stalker that targets isolated camps, avoids bright light and loud noise, and steals useful gear."
        },
        {
            name: "The Skinwalker",
            category: "creatures",
            description: "A shapeshifting entity that copies living forms, confuses patrols, and recovers rapidly after ordinary injuries."
        },
        {
            name: "The Hidebehind",
            category: "creatures",
            description: "A tall forest lurker that avoids direct sight, steals food, and follows isolated travelers or animals."
        },
        {
            name: "The Wendigo",
            category: "creatures",
            description: "A winter-associated entity tied to hunger, famine conditions, and an old cursed settlement deep in the forest."
        },
        {
            name: "The Montana Sleep Experiment Test Subjects",
            category: "creatures",
            description: "Altered survivors of the black-site disaster who never sleep and frequently take food, medicine, clothing, and equipment."
        },
        {
            name: "Mason Moor Reese",
            category: "creatures",
            description: "A masked guardian associated with Emerald Lake, restricted campsites, and repeated nighttime appearances."
        },
        {
            name: "Miguel Marez",
            category: "creatures",
            description: "A masked mechanic-like figure who returns to an old forest home around Halloween and pursues trespassers."
        },
        {
            name: "The Cursed Trees",
            category: "creatures",
            description: "Rare living trees that move, block routes, fall unexpectedly, and strongly resist cutting or removal."
        },
        {
            name: "Loot Goblins",
            category: "creatures",
            description: "Small scavengers that grab valuable supplies, place them in sacks, and retreat toward hidden gathering areas."
        },
        {
            name: "The Trench Raider",
            category: "creatures",
            description: "A mysterious night intruder that targets isolated trenches during fog, rain, wind, and other low-visibility conditions."
        },

        {
            name: "Bears",
            category: "wildlife",
            description: "Powerful animals that may be drawn toward food stores, camps, abandoned positions, and post-battle areas."
        },
        {
            name: "Boars and Hogs",
            category: "wildlife",
            description: "Strong, fast animals that can become aggressive when cornered, surprised, or protecting feeding areas."
        },
        {
            name: "Moose",
            category: "wildlife",
            description: "Large territorial animals that are especially dangerous at close range or when guarding young."
        },
        {
            name: "Snakes",
            category: "wildlife",
            description: "Hard-to-see animals commonly encountered in brush, wet ground, abandoned structures, and supply areas."
        },
        {
            name: "Rats",
            category: "wildlife",
            description: "Large rat populations gather around food stores, ruins, camps, and contaminated areas where they can spread illness."
        },
        {
            name: "Wolves",
            category: "wildlife",
            description: "Pack predators that follow movement, weakened animals, and isolated travelers through quieter parts of the forest."
        },
        {
            name: "Dogs",
            category: "wildlife",
            description: "Stray, feral, or military-trained dogs that may defend territory, follow patrols, or search camps for food."
        },
        {
            name: "Deer",
            category: "wildlife",
            description: "Usually cautious animals, but sudden movement through roads, camps, or thick brush can create unexpected danger."
        },
        {
            name: "Mountain Lions",
            category: "wildlife",
            description: "Quiet ambush predators that prefer cover, elevation, and isolated targets near the forest edge."
        },
        {
            name: "Elk",
            category: "wildlife",
            description: "Large herd animals that can become defensive when crowded, startled, or separated from the herd."
        },
        {
            name: "Coyotes",
            category: "wildlife",
            description: "Opportunistic scavengers that investigate camps, abandoned supplies, and areas where food is easy to reach."
        },
        {
            name: "Wolverines",
            category: "wildlife",
            description: "Small but extremely defensive animals that may challenge larger intruders around dens or food."
        },

        {
            name: "VHS Express",
            category: "hazards",
            description: "A vanished rental store that appears after midnight with strict rules, unusual tapes, working concessions, and an unexplained closing time."
        },
        {
            name: "Chemical Barrels",
            category: "hazards",
            description: "Scattered containers from the black-site disaster hold unknown materials with unpredictable effects on people, wildlife, and terrain."
        },
        {
            name: "Pneumonia",
            category: "hazards",
            description: "Cold, wet weather and prolonged exposure can lead to serious respiratory illness without rest and medical care."
        },
        {
            name: "Dysentery",
            category: "hazards",
            description: "Unsafe food, dirty hands, and contaminated water can cause severe illness and rapid dehydration."
        },
        {
            name: "Trench Foot",
            category: "hazards",
            description: "Keeping feet cold and wet for long periods can cause painful tissue damage and reduced mobility."
        },
        {
            name: "Skin Infection",
            category: "hazards",
            description: "Untreated cuts exposed to mud, dirty clothing, insects, or polluted water can become infected."
        },
        {
            name: "Lice",
            category: "hazards",
            description: "Crowded shelters, shared bedding, and limited washing allow infestations to spread quickly through camps."
        },
        {
            name: "Lightning",
            category: "hazards",
            description: "Frequent storms make exposed ground, tall trees, waterways, and metal equipment especially risky."
        },
        {
            name: "Acid Rain",
            category: "hazards",
            description: "Unusual corrosive rainfall can irritate skin, damage equipment, contaminate supplies, and reduce visibility."
        },
        {
            name: "Fog",
            category: "hazards",
            description: "Extremely thick fog hides terrain, separates groups, limits navigation, and makes nearby movement difficult to identify."
        },
        {
            name: "Blizzards",
            category: "hazards",
            description: "Heavy snow, wind, and extreme cold can block routes, hide landmarks, and create dangerous exposure."
        },
        {
            name: "Hail",
            category: "hazards",
            description: "Severe hailstorms can injure exposed travelers, damage vehicles, and force patrols to seek cover."
        },
        {
            name: "Torrential Rain",
            category: "hazards",
            description: "Intense rainfall causes flooding, deep mud, unstable roads, poor visibility, and noise that hides approaching danger."
        },
        {
            name: "Wild Fires",
            category: "hazards",
            description: "Forest fires can spread rapidly, cut off escape routes, damage structures, and force wildlife toward occupied areas."
        },
        {
            name: "Blood Rain",
            category: "hazards",
            description: "An unusual red rainfall that reduces visibility, unsettles patrols, and signals abnormal forest weather."
        },
        {
            name: "High Wind Storms",
            category: "hazards",
            description: "Strong winds throw debris, damage shelters, interfere with travel, and make trees or structures unstable."
        },
        {
            name: "Falling Trees",
            category: "hazards",
            description: "Storm damage, fire, combat, and unusual forest activity can cause large trees to fall without warning."
        },
        {
            name: "Contaminated Water",
            category: "hazards",
            description: "Chemical runoff, disease, waste, and dead wildlife make many forest water sources unsafe without careful treatment."
        }
    ];

    const searchInput = document.getElementById("search");
    const cardsContainer = document.getElementById("opposition");
    const filterButtons = document.querySelectorAll(".filters button");

    const categoryNames = {
        humans: "Humans",
        creatures: "Creatures",
        wildlife: "Wildlife",
        hazards: "Hazards"
    };

    const detailPages = {
        humans: "humans.html",
        creatures: "creatures.html",
        wildlife: "wildlife.html",
        hazards: "hazards.html"
    };

    let currentFilter = "all";

    function createCard(entry) {
        const card = document.createElement("article");
        card.className = "card";
        card.dataset.category = entry.category;

        const heading = document.createElement("h3");
        heading.textContent = entry.name;

        const classLine = document.createElement("p");
        const classLabel = document.createElement("strong");

        classLabel.textContent = "Class: ";

        classLine.appendChild(classLabel);
        classLine.appendChild(
            document.createTextNode(categoryNames[entry.category])
        );

        const description = document.createElement("p");
        description.textContent = entry.description;

        const detailsButton = document.createElement("button");
        detailsButton.type = "button";
        detailsButton.textContent = "View Details";

        detailsButton.addEventListener("click", function () {
            window.location.href = detailPages[entry.category];
        });

        card.appendChild(heading);
        card.appendChild(classLine);
        card.appendChild(description);
        card.appendChild(detailsButton);

        return card;
    }

    function renderCards() {
        const searchText = searchInput.value.trim().toLowerCase();

        const visibleEntries = entries.filter(function (entry) {
            const matchesFilter =
                currentFilter === "all" ||
                entry.category === currentFilter;

            const searchableText =
                entry.name.toLowerCase() +
                " " +
                entry.description.toLowerCase();

            const matchesSearch = searchableText.includes(searchText);

            return matchesFilter && matchesSearch;
        });

        cardsContainer.replaceChildren();

        if (visibleEntries.length === 0) {
            const noResults = document.createElement("p");

            noResults.className = "no-results";
            noResults.textContent =
                "No matching almanac entries were found.";

            cardsContainer.appendChild(noResults);
            return;
        }

        const fragment = document.createDocumentFragment();

        visibleEntries.forEach(function (entry) {
            fragment.appendChild(createCard(entry));
        });

        cardsContainer.appendChild(fragment);
    }

    searchInput.addEventListener("input", renderCards);

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            currentFilter = button.dataset.filter || "all";

            filterButtons.forEach(function (otherButton) {
                const isSelected = otherButton === button;

                otherButton.classList.toggle("active", isSelected);
                otherButton.setAttribute(
                    "aria-pressed",
                    String(isSelected)
                );
            });

            renderCards();
        });
    });

    const allButton = document.querySelector(
        '.filters button[data-filter="all"]'
    );

    if (allButton) {
        allButton.classList.add("active");
        allButton.setAttribute("aria-pressed", "true");
    }

    renderCards();
});