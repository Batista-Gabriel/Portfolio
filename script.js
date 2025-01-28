var app = new Vue({
  el: "#app",
  data: {
    projects: [
      {
        name: "Agendamento de Provas",
        description:
          "Página Web para gerar avaliações no sistema Prova Fácil da forma mais rápida e simples possível.",
        techs: ["Nodejs", "ExpressJs", "HTML", "JS", "CSS"],
      },
      {
        name: "Gerador de Documentos",
        description:
          "Plataforma web para criar certificados em massa e salvar no Google Drive. ",
        techs: ["Nodejs", "Vuejs", "HTML", "JS", "CSS"],
      },
      {
        name: "Vídeo tracker",
        description:
          "Programa para buscar os vídeos de uma determinada pasta e salvar o nome, o tempo de cada e o total de horas em uma planilha.",
        techs: ["Python"],
      },

      {
        name: "Carregamento de Aulas na Plataforma",
        description:
          "Automação que busca as aulas no Google Drive, salva na plataforma de vídeos e insere nas salas de aula.",
        techs: ["Nodejs", "Puppeteer"],
      },
    ],
    showProjects: false,
    isThemeDark: true,
  },
  delimiters: ["${", "}"], // Avoid Twig conflicts
  methods: {
    getMode() {
      const themeCookie = getCookie("isThemeDark");
      if (themeCookie.length > 0) {
        this.isThemeDark = themeCookie == "true";
      } else if (
        window.matchMedia &&
        !window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.isThemeDark = false;
      }
      this.setMode();

      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    },
    setMode() {
      document.cookie = "isThemeDark=" + this.isThemeDark;
      if (this.isThemeDark) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
  },
  mounted() {
    this.getMode();
  },
});
