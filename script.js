function findWorkshops() {
    var engagement = document.getElementById("engagement").value;
    var participation = document.getElementById("participation").value;
    
    var workshopRecommendations = {
        "low-small": ["focus-group.html", "world-cafe.html", "visual-survey.html"],
        "low-medium": ["fishbowl.html", "mapping.html", "mind-mapping.html"],
        "medium-large": ["world-cafe.html", "housing.html", "open-space.html"]
    };
    
    var key = engagement + "-" + participation;
    var selectedWorkshops = workshopRecommendations[key] || ["not-found.html", "not-found.html", "not-found.html"];
    
    document.getElementById("workshop1").href = "workshops/" + selectedWorkshops[0];
    document.getElementById("workshop1").innerText = selectedWorkshops[0].replace(".html", "").replace("-", " ");

    document.getElementById("workshop2").href = "workshops/" + selectedWorkshops[1];
    document.getElementById("workshop2").innerText = selectedWorkshops[1].replace(".html", "").replace("-", " ");

    document.getElementById("workshop3").href = "workshops/" + selectedWorkshops[2];
    document.getElementById("workshop3").innerText = selectedWorkshops[2].replace(".html", "").replace("-", " ");
}
