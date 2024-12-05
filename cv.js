document.getElementById("generate-cv").addEventListener("click", function () {
    const name = document.getElementById("name").value || "Your Name";
    const designation = document.getElementById("designation").value || "Your Designation";
    const gender = document.getElementById("gender").value || "Not Provided";
    const maritalStatus = document.getElementById("marital-status").value || "Not Provided";
    const sidebarColor = document.getElementById("sidebar-color").value;
    const template = document.getElementById("cv-template").value;
  
    // Dynamic Template Content
    let templateHTML = `
      <div class="flex flex-col md:flex-row">
        <div id="cv-sidebar" class="p-6 text-center text-white md:w-1/3 bg-${sidebarColor}">
          <h3 class="text-xl font-bold">${name}</h3>
          <p>${designation}</p>
          <hr class="my-4">
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Marital Status:</strong> ${maritalStatus}</p>
        </div>
        <div class="p-6 md:w-2/3">
          <h2 class="text-2xl font-bold">Summary</h2>
          <p>Add your summary here...</p>
        </div>
      </div>
    `;
  
    // Apply Template-Specific Styles
    if (template === "modern") {
      templateHTML = `<div class="text-center"><h1>${name}</h1><p>${designation}</p></div>`;
    } else if (template === "classic") {
      templateHTML = `<div><strong>${name}</strong> | ${designation}</div>`;
    }
  
    document.getElementById("cv-preview").innerHTML = templateHTML;
  });
  
  // Download CV as PDF
  document.getElementById("download-cv").addEventListener("click", function () {
    const element = document.getElementById("cv-preview");
    html2pdf(element);
  });
  