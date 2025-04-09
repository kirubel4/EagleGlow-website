import { getStudents, registerStudent } from "./api.js";


function loadComponent(id, path) {
    // try {
        fetch(path)
        .then(resp=>resp.text())
        .then(resp=>{
            // console.log(resp);
            console.log("this shit is running");
            document.getElementById(id).innerHTML = resp;
        })
        .catch(error=>{
            console.log(error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent("header", "/assets/partials/header.html");
    loadComponent("footer", "/assets/partials/footer.html");
});



// document.addEventListener('DOMContentLoaded', async () => {
//     // Language button functionality
//     const langBtn = document.getElementById("language-btn");
//     if (langBtn) {
//         langBtn.textContent = localStorage.getItem("language") || "EN/አማ";
//         langBtn.onclick = () => {
//             const newLang = langBtn.textContent === "EN/አማ" ? "አማ/EN" : "EN/አማ";
//             langBtn.textContent = newLang;
//             localStorage.setItem("language", newLang);
//         };
//     }
// });




// async function displayStudents() {
//     const students = await getStudents(); 

//     const list = document.getElementById("students");
//     list.innerHTML = students.map(student => `<li>${student.name}</li>`).join("");
   
// }

// window.onload = displayStudents;


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // ✅ Prevent default form POST
        const studentData = {
            name: document.getElementById("name").value,
            phoneNumber: document.getElementById("phone").value,
            dob: document.getElementById("dob").value,
            level: document.getElementById("level").value,
            sex: document.getElementById("sex").value,
            emergency_phone: document.getElementById("emergency_phone").value,
            family_name: document.getElementById("family_name").value
        };
        await registerStudent(studentData);
    });
});



