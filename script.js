/* Select the buttons to add the click event */
const openModalButton = document.querySelectorAll(".open_modal_button");
const closeModalButton = document.querySelectorAll(".close_modal_button");
const modal = document.querySelectorAll(".warning_modal_container");
const toggleTheme = document.querySelector("#toggle_theme");
const toggleLanguage = document.querySelector("#toggle_language");
const rootElement = document.documentElement;
const defaultTheme =
  getComputedStyle(rootElement).getPropertyValue("--bg-primary");
const lightTheme = "#ffffff";

const translations = {
  en: {
    languages: "Languages",
    fluent: "Fluent",
    native_speaker: "Native speaker",
    greeting: "Hi, I'm Gustavo 👋",
    position: "Software developer",
    year: "year",
    years: "years",
    education: "Education",
    bachelor: "Bachelor in Computer Engineering",
    eep: "Engineering University of Piracicaba, Brazil",
    certification: "Certification",
    planner_description: "This project is an adaptation from the 2024 Next Level Week event hosted by Rocketseat. After a few changes and improvements it became my frontend project for the Web Development course I'm taking at Laneway Education.",
    caputteeno_description: "This project is a challenge released by Rocketseat and done with the help of @kipper.dev :)",
    work_experience: "Work experience",
    jlc_analyst_title: "IT Analyst at JLC maintenance services LTD",
    jlc_analyst_year: "September 2021 - November 2023 (2 years 2 months)",
    jlc_analyst_description: "Using mainly Python and PowerShell, I was in charge of automating HR and charging processes. That includes development of unit tests, scripts, BOTs, as well as updating the processes docs to BPMN standards and building PBI reports to track KPIs.",
    cat_title: "IT Intern at Caterpillar Inc.",
    cat_year: "February 2020 - September 2021 (1 year 8 months)",
    cat_description: "Provided user support to create and publish PBI reports, development of automation solutions using O365 (Power Apps, Power Automate etc) and Automation Anywhere, documentation as-is and to-be included (BPMN).",
    modal_greeting: "Hello there,",
    modal_description: "I really appreciate your curiosity to see the projects I've developed. This is a friendly reminder that they are hosted on two free platforms called Vercel (frontend) and Render (backend). The backend usually takes 2 minutes to start answering requests for the first time after being idle for a few minutes. So, please, open the link, wait for two minutes and refresh the page, then everything should be working properly. Thank you!",
    go_to_vercel: "Go to vercel",
    portfolio: "Portfolio"
  },
  ptbr: {
    languages: "Idiomas",
    fluent: "Fluente",
    native_speaker: "Nativo",
    greeting: "Olá, eu sou Gustavo 👋",
    position: "Desenvolvedor",
    year: "ano",
    years: "anos",
    education: "Formação",
    bachelor: "Bacharel em Engenharia da Computação",
    eep: "Escola de Engenharia de Piracicaba, Brasil",
    certification: "Certificados",
    planner_description: "Este projeto é uma adaptação do evento Next Level Week 2024, promovido pela Rocketseat. Após algumas mudanças e melhorias, ele se tornou meu projeto de frontend para o curso de Desenvolvimento Web que estou fazendo na Laneway Education.",
    caputteeno_description: "Este projeto é um desafio lançado pela Rocketseat e feito com a ajuda de @kipper.dev :)",
    work_experience: "Experiência",
    jlc_analyst_title: "Analista de TI na JLC Serviços de Manutenção",
    jlc_analyst_year: "Setembro 2021 - Novembro 2023 (2 anos e 2 meses)",
    jlc_analyst_description: "Utilizando principalmente Python e PowerShell, fui responsável por automatizar processos de RH e de faturamento. Isto inclui desde o mapeamento dos processos utilizando padrões BPMN, desenvolvimento dos scripts e testes unitários, e também a criação de relatórios para acompanhamento das principais métricas (KPIs) utilizando Power BI.",
    cat_title: "Estagiário de TI na Caterpillar Inc.",
    cat_year: "Fevereiro 2020 - Setembro 2021 (1 ano 8 meses)",
    cat_description: "Suporte ao cliente de diversas áreas da empresa no desenvolvimento e publicação de relatórios Power BI, bem como o desenvolvimento de soluções de automação utilizando a plataforma Office 365 - Power Apps, Power Automate (Web & Desktop) e Automation Anywhere. Documentação de processos antes (as-is) e depois (to-be) utilzando os padrões BPMN.",
    modal_greeting: "Olá,",
    modal_description: "Fico feliz que tenha curiosidade pelos projetos que desenvolvi. Este é apenas um aviso que eles estão hospedados em duas plataformas gratuitas, Vercel para o Frontend, e Render para o Backend. Esta última normalmente demora 2 minutos para começar a responder solicitações depois de alguns minutos de inatividade. Então, por favor, acesse o link, espere dois minutos e recarregue a página, e tudo deverá funcionar normalmente. Obrigado.",
    go_to_vercel: "Ir para a Vercel",
    portfolio: "Portfólio"
  }
}



/* Add the onClick event on each button to open the modal */
openModalButton.forEach((btn) => {
  /* get the modal container next to the button */
  let modal = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

/* Add the onClick event on each button to close the modal */
closeModalButton.forEach((btn) => {
  /* Select the warning_modal closest to the button */
  let modal = btn.closest(".warning_modal_container");
  btn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
});

/* Loop to go through every modal */
modal.forEach((md) => {
  /* Add event to close the modal if the user clicks on the background */
  md.addEventListener("click", (e) => {
    if (e.currentTarget === e.target) {
      md.classList.remove("show");
    }
  });
  /* Add keydown event to close the modal if Escape is pressed */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      md.classList.remove("show");
    }
  });
});

toggleTheme.addEventListener("click", () => {
  if (
    getComputedStyle(rootElement).getPropertyValue("--bg-primary") ===
    defaultTheme
  ) {
    rootElement.style.setProperty("--text-primary", "rgb(50, 50, 50)");
    rootElement.style.setProperty("--text-secondary", "rgb(100, 100, 100)");
    rootElement.style.setProperty("--bg-primary", "rgb(250, 250, 250)");
    rootElement.style.setProperty("--bg-secondary", "rgb(240, 240, 240)");
    rootElement.style.setProperty("--border-color", "rgb(50, 50, 50)");
    rootElement.style.setProperty("--bg-gradient-start", "#464cf6");
    rootElement.style.setProperty("--bg-gradient-ent", "#77ccf4");
    rootElement.style.setProperty("--bg-modal", "rgba(0, 0, 0, 0.2)");
  } else {
    rootElement.style.setProperty("--text-primary", "white");
    rootElement.style.setProperty("--text-secondary", "#b3b3b3");
    rootElement.style.setProperty("--bg-primary", "#2c2c2c");
    rootElement.style.setProperty("--bg-secondary", "rgb(60, 60, 60)");
    rootElement.style.setProperty("--border-color", "white");
    rootElement.style.setProperty("--bg-gradient-start", "#464cf6");
    rootElement.style.setProperty("--bg-gradient-ent", "#77ccf4");
    rootElement.style.setProperty("--bg-modal", "rgba(0, 0, 0, 0.8)");
  }
});

toggleLanguage.addEventListener('change', () => {
  const translateTo = toggleLanguage.checked? 'ptbr' : 'en';
  const elements = document.querySelectorAll('[data-118n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-118n');
    el.textContent = translations[translateTo][key] || el.textContent;
  })
})

