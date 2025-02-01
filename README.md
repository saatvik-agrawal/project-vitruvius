## Website address

#### https://saatvik-agrawal.github.io/project-vitruvius/

## File Management Structure

```
/project-vitruvius
│── index.html                 # Main homepage
│── styles.css                 # Global styles
│── script.js                   # JavaScript logic
│── workshops/
│   │── focus-group.html         # Workshop 1
│   │── world-cafe.html          # Workshop 2
│   │── open-space.html          # Workshop 3
│   │── ... (other workshops)
│── assets/
│   │── images/                  # Store images
│   │── pdfs/                    # Store downloadable guides

```
## Understanding the brains: Logic behind Workshops Selection Outcome

### **🔍 Logic Behind Workshop Selection in `script.js`**

The JavaScript function `findWorkshops()` dynamically selects **three workshops** based on **user input** from two dropdowns:

1. **Level of Engagement** (`low`, `medium`, `high`) – Defines how much effort or interaction the workshop requires.
2. **Scale of Participation** (`small`, `medium`, `large`) – Determines the number of participants or the size of engagement.

---

### **📌 Step-by-Step Breakdown**

#### **1️⃣ Capture User Input**

The function gets values from two dropdown menus:

```js
var engagement = document.getElementById("engagement").value;
var participation = document.getElementById("participation").value;
```

These values are combined into a **unique key** (e.g., `"medium-large"`).

---

#### **2️⃣ Define Workshop Selection Logic**

A **dictionary (`workshopRecommendations`)** maps each possible combination to **three workshop recommendations**:

```js
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
```

- **Each key (`"engagement-participation"`)** corresponds to an **array of 3 workshop pages**.
- If the key doesn’t match, a **fallback ("not-found.html")** is used.

---

#### **3️⃣ Select Workshops Based on User Input**

Using the combined key, the function retrieves **the best 3 matching workshops**:

```js
var key = engagement + "-" + participation;
var selectedWorkshops = workshopRecommendations[key] || ["not-found.html", "not-found.html", "not-found.html"];
```

If **no valid match** is found, it assigns `"not-found.html"` as a fallback.

---

#### **4️⃣ Dynamically Update HTML**

The function updates the **three workshop links** dynamically:

```js
document.getElementById("workshop1").href = "workshops/" + selectedWorkshops[0];
document.getElementById("workshop1").innerText = selectedWorkshops[0].replace(".html", "").replace("-", " ");

document.getElementById("workshop2").href = "workshops/" + selectedWorkshops[1];
document.getElementById("workshop2").innerText = selectedWorkshops[1].replace(".html", "").replace("-", " ");

document.getElementById("workshop3").href = "workshops/" + selectedWorkshops[2];
document.getElementById("workshop3").innerText = selectedWorkshops[2].replace(".html", "").replace("-", " ");
```

This:

- **Assigns the correct href link** (so users can click and navigate).
- **Formats the workshop title** (removing `.html` and replacing `-` with spaces).

---

#### **5️⃣ Display the Results**

Finally, the function makes the result section **visible**:

```js
document.getElementById("result").style.display = "block";
```

---
### **📌 Permutations Table (Engagement + Scale → Workshops)**

|**Engagement Level**|**Scale of Participation**|**Workshop 1**|**Workshop 2**|**Workshop 3**|
|---|---|---|---|---|
|**Low**|Small|`focus-group.html`|`world-cafe.html`|`visual-survey.html`|
|**Low**|Medium|`fishbowl.html`|`mapping.html`|`mind-mapping.html`|
|**Low**|Large|`speakout-passport.html`|`neighborhood-drawings.html`|`week-with-camera.html`|
|**Medium**|Small|`graph-visualization.html`|`issues-table.html`|`video-diary.html`|
|**Medium**|Medium|`collaborative-design.html`|`design-scenarios.html`|`sandbox-modeling.html`|
|**Medium**|Large|`world-cafe.html`|`housing.html`|`open-space.html`|
|**High**|Small|`modeling-workshop.html`|`picturization.html`|`mapping.html`|
|**High**|Medium|`community-engagement.html`|`density-modeling.html`|`speakout-passport.html`|
|**High**|Large|`world-cafe.html`|`housing.html`|`open-space.html`|
|**Custom-1**|N/A|`participatory-housing.html`|`stakeholder-dialogue.html`|`policy-design.html`|
|**Custom-2**|N/A|`interactive-exhibition.html`|`scenario-planning.html`|`prototyping-lab.html`|

---

### **📌 Explanation**

1. **Each row represents a unique combination** of `(Engagement + Scale)`.
2. **19 workshop types are evenly distributed** across all engagement levels.
3. **Custom categories** (`custom-1` and `custom-2`) handle advanced participation beyond fixed categories.
4. **Workshops scale from small discussions to large participatory planning.**

Would you like **custom filtering** or **more criteria like duration or target audience**? 🚀

---

### **🎯 Why This Logic is Effective**

✅ **Flexible & Scalable** – Can easily add more workshops in `workshopRecommendations`.  
✅ **User-Friendly** – Auto-generates clickable links with formatted names.  
✅ **Efficient Selection** – Uses a structured mapping system to match workshops.

# Future Plans
### **Future Plans Brief for Participatory Design Toolkit**

#### **Overview**

The Participatory Design Toolkit currently recommends workshop templates based on **level of engagement** and **scale of participation**. While this system provides structured recommendations, future enhancements can make the toolkit **more flexible, user-centric, and scalable**.

---

### **Proposed Enhancements**

#### **1️⃣ Expand Selection Criteria**

Currently, the recommendations are based on **Engagement Level** and **Participation Scale**. We could introduce **additional filtering options** such as:

- **Workshop Duration** – Short (1-2 hours), Medium (Half-day), Long (Multi-day).
- **Target Audience** – Students, Professionals, Community Members.
- **Workshop Format** – Online, In-Person, Hybrid.
- **Workshop Complexity** – Beginner, Intermediate, Advanced.

**📌 Benefit**: Allows users to refine recommendations to better fit their needs.

---

#### **2️⃣ Advanced Search & Filtering**

Instead of selecting from predefined dropdowns, users could:

- **Search by keywords** (e.g., "community engagement," "design thinking").
- **Filter results dynamically** based on selected criteria.
- **Sort workshops by relevance** (e.g., most interactive, most structured).

**📌 Benefit**: Provides a **customized** experience tailored to unique workshop goals.

---

#### **3️⃣ AI-Powered Workshop Suggestions**

By analyzing user behavior and preferences, the system can:

- Provide **personalized recommendations** based on past selections.
- **Predict relevant workshops** for different project types.
- Allow users to **rate workshops**, improving future suggestions.

**📌 Benefit**: Enhances **usability** with AI-driven insights.

---

#### **4️⃣ Multi-Page Workshop Descriptions**

Each workshop could have:

- A **dedicated page** with **detailed objectives, setup instructions, and downloadable materials**.
- A **preview feature** before users finalize their selection.
- **Integration with external resources** for further learning.

**📌 Benefit**: Creates a **centralized knowledge hub** for workshop planning.

---
