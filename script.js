function findWorkshops() {
    var engagement = document.getElementById("engagement").value;
    var participation = document.getElementById("participation").value;

    var workshopRecommendations = {
        "low-small": ["focus-group.html", "world-cafe.html", "visual-survey.html"],
        "low-medium": ["fishbowl.html", "mapping.html", "mind-mapping.html"],
        "low-large": ["speakout-passport.html", "neighborhood-drawings.html", "week-with-camera.html"],
        "medium-small": ["graph-visualization.html", "issues-table.html", "video-diary.html"],
        "medium-medium": ["collaborative-design.html", "design-scenarios.html", "sandbox-modeling.html"],
        "medium-large": ["world-cafe.html", "housing.html", "open-space.html"],
        "high-small": ["modeling-workshop.html", "picturization.html", "mapping.html"],
        "high-medium": ["community-engagement.html", "density-modeling.html", "speakout-passport.html"],
        "high-large": ["world-cafe.html", "housing.html", "open-space.html"],
        "custom-1": ["participatory-housing.html", "stakeholder-dialogue.html", "policy-design.html"],
        "custom-2": ["interactive-exhibition.html", "scenario-planning.html", "prototyping-lab.html"]
    };

    var key = engagement + "-" + participation;
    if (!(key in workshopRecommendations)) {
        key = "custom-1"; // Default to a general category if input is unexpected
    }
    
    var selectedWorkshops = workshopRecommendations[key];

    document.getElementById("workshop1").href = "workshops/" + selectedWorkshops[0];
    document.getElementById("workshop1").innerText = selectedWorkshops[0].replace(".html", "").replace("-", " ");

    document.getElementById("workshop2").href = "workshops/" + selectedWorkshops[1];
    document.getElementById("workshop2").innerText = selectedWorkshops[1].replace(".html", "").replace("-", " ");

    document.getElementById("workshop3").href = "workshops/" + selectedWorkshops[2];
    document.getElementById("workshop3").innerText = selectedWorkshops[2].replace(".html", "").replace("-", " ");

    document.getElementById("result").style.display = "block";
}
