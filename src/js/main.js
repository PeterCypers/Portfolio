function navigateTo(relpath) {
  window.location.href = relpath;
}

function init() {
  const cvBtn = document.getElementById("cv_btn");
  const projectsBtn = document.getElementById("projects_btn");
  const linkedInBtn = document.getElementById("linkedin_btn");
  const personalityTestsBtn = document.getElementById("personalitytests_btn");
  const CV_PATH = "./src/docs/Peter_Cypers_CV(final).pdf";
  const PROJECTS_PATH = "https://petercypers.github.io/Collected-Projects/";
  const LINKEDIN_PATH = "#"; //TODO: add real linkedin link when account is ready
  const PERSONALITY_TESTS_PATH = "./src/docs/PersoonlijkheidsTests_PeterCypers.pdf";

  cvBtn.onclick = () => { navigateTo(CV_PATH); }
  projectsBtn.onclick = () => { navigateTo(PROJECTS_PATH); }
  linkedInBtn.onclick = () => { navigateTo(LINKEDIN_PATH); }
  personalityTestsBtn.onclick = () => { navigateTo(PERSONALITY_TESTS_PATH); }

}

window.onload = init;