window.onload = function() {
    document.getElementById("custom1").addEventListener("click", function() {
        showCustomWorkshops('custom1');
    });

    document.getElementById("custom2").addEventListener("click", function() {
        showCustomWorkshops('custom2');
    });
};

function findWorkshops() {
    var engagement = document.getElementById("engagement").value;
    var participation = document.getElementById("participation").value;

    var workshopRecommendations = {
        "low-small": ["focus-group.html", "world-cafe.html", "visual-preference-survey.html"],
        "low-medium": ["fishbowl-method.html", "mapping-activity.html", "mind-mapping-exercise.html"],
        "low-large": ["speakout-passport-spending.html", "neighborhood-drawings.html", "week-with-a-camera.html"],
        "medium-small": ["graph-visualization.html", "issues-opportunities-table.html", "video-diary-exercise.html"],
        "medium-medium": ["collaborative-design-patterns.html", "design-scenarios-workshop.html", "sandbox-modeling.html"],
        "medium-large": ["world-cafe.html", "designer-and-resident-series.html", "open-space-technology.html"],
        "high-small": ["modeling-workshop.html", "picturization-exercise.html", "mapping-activity.html"],
        "high-medium": ["community-engagement-with-engineers.html", "density-block-modeling.html", "speakout-passport-spending.html"],
        "high-large": ["world-cafe.html", "designer-and-resident-series.html", "open-space-technology.html"],
        "custom-1": ["stakeholder-dialogue.html", "policy-design.html", "interactive-exhibition.html"],
        "custom-2": ["scenario-planning.html", "prototyping-lab.html", "design-residents-series.html"]
    };

    var key = engagement + "-" + participation;
    if (!(key in workshopRecommendations)) {
        alert("Invalid selection! Please choose a valid engagement level and participation scale.");
        return;
    }
    
    var selectedWorkshops = workshopRecommendations[key];

    document.getElementById("workshop1").href = "workshops/" + selectedWorkshops[0];
    document.getElementById("workshop1").innerText = selectedWorkshops[0].replace(".html", "").replace(/-/g, " ");

    document.getElementById("workshop2").href = "workshops/" + selectedWorkshops[1];
    document.getElementById("workshop2").innerText = selectedWorkshops[1].replace(".html", "").replace(/-/g, " ");

    document.getElementById("workshop3").href = "workshops/" + selectedWorkshops[2];
    document.getElementById("workshop3").innerText = selectedWorkshops[2].replace(".html", "").replace(/-/g, " ");

    document.getElementById("result").style.display = "block";

    console.log("Workshops selected: ", selectedWorkshops);
}

function showCustomWorkshops(customType) {
    var customWorkshops = {
        "custom1": ["stakeholder-dialogue.html", "policy-design.html", "interactive-exhibition.html"],
        "custom2": ["scenario-planning.html", "prototyping-lab.html", "design-residents-series.html"]
    };

    var selectedWorkshops = customWorkshops[customType];

    document.getElementById("customWorkshop1").href = "workshops/" + selectedWorkshops[0];
    document.getElementById("customWorkshop1").innerText = selectedWorkshops[0].replace(".html", "").replace(/-/g, " ");

    document.getElementById("customWorkshop2").href = "workshops/" + selectedWorkshops[1];
    document.getElementById("customWorkshop2").innerText = selectedWorkshops[1].replace(".html", "").replace(/-/g, " ");

    document.getElementById("customWorkshop3").href = "workshops/" + selectedWorkshops[2];
    document.getElementById("customWorkshop3").innerText = selectedWorkshops[2].replace(".html", "").replace(/-/g, " ");

    document.getElementById("custom-result").style.display = "block";
}
