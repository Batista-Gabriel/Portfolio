var app = new Vue({
  el: "#app",
  data: {
    projects: [
      {
        name: "Agendamento de provas",
        description: "Para fazendo assim com que ao invés de preencher 14 campos de formulário, o usuário só preencha 4",
        techs: ["Node.js", "Vuejs", "Vuejs", " HTML", "CSS"],
      },
      {
        name: "Gerador de Certificados",
        description: "descrição dos ",
        techs: ["Node.js", "Vuejs", " HTML", "CSS"],
      },
      {
        name: "Relatório de Vídeos",
        description: "descrição dos ",
        techs: ["Python"],
      },
      
      {
        name: "API FVC",
        description: "descrição dos ",
        techs: ["Node.js", "Vuejs", "Vuejs", " HTML", "CSS"],
      },
      {
        name: "Games FVC",
        description: "descrição dos ",
        techs: ["Vuejs", " HTML", "CSS"],
        link: "http://trivia.faculdadevitoriaemcristo.edu.br",
      },
    ],
  },
  delimiters: ["${", "}"], // Avoid Twig conflicts
  methods: {
    async generateSchedules() {},
  },
});
