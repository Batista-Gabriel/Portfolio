var app = new Vue({
  el: "#app",
  data: {
    projects: [
      {
        name: "Agendamento de Provas",
        description:
          "Página Web para gerar avaliações no sistema Prova Fácil da forma mais rápida e simples possível.",
        techs: ["Nodejs","ExpressJs", "HTML",  "JS", "CSS"],
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
          "Automação que busca as aulas no Google Drive, salva na plataforma de vídeos e insere nas salas de aula dentro do ambiente virtual de aprendizagem.",
        techs: ["Nodejs", "Puppeteer"],
      },
    ],
    showProjects: false,
  },
  delimiters: ["${", "}"], // Avoid Twig conflicts
  methods: {
    async toggleProjects() {
      this.showProjects = !this.showProjects;
    },
  },
  mounted() {},
});
