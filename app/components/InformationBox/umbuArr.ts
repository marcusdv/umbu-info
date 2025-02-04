const umbuPorEstado = [
    {
      estado: "Bahia",
      nomePopular: "Umbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Sertão", "Vale do São Francisco", "Chapada Diamantina"],
      epocaColheita: "Dezembro a Março"
    },
    {
      estado: "Pernambuco",
      nomePopular: "Imbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Sertão do Araripe", "Agreste", "Vale do Pajeú"],
      epocaColheita: "Fevereiro a Abril"
    },
    {
      estado: "Ceará",
      nomePopular: "Umbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Sertão Central", "Inhamuns", "Cariri"],
      epocaColheita: "Janeiro a Março"
    },
    {
      estado: "Paraíba",
      nomePopular: "Imbuzeiro",
      especie: "Spondias tuberosa",
      regioesProducao: ["Cariri Paraibano", "Seridó", "Borborema"],
      epocaColheita: "Fevereiro a Abril"
    },
    {
      estado: "Rio Grande do Norte",
      nomePopular: "Umbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Seridó Potiguar", "Chapada do Apodi"],
      epocaColheita: "Janeiro a Março"
    },
    {
      estado: "Sergipe",
      nomePopular: "Umbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Sertão Sergipano", "Agreste"],
      epocaColheita: "Dezembro a Fevereiro"
    },
    {
      estado: "Alagoas",
      nomePopular: "Imbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Sertão Alagoano", "Serrana dos Quilombos"],
      epocaColheita: "Fevereiro a Abril"
    },
    {
      estado: "Piauí",
      nomePopular: "Umbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Semiárido Piauiense", "Serra da Capivara"],
      epocaColheita: "Janeiro a Março"
    },
    {
      estado: "Minas Gerais",
      nomePopular: "Umbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Norte de Minas", "Vale do Jequitinhonha"],
      epocaColheita: "Fevereiro a Abril"
    },
    {
      estado: "Maranhão",
      nomePopular: "Imbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Sul do Estado (região de transição)"],
      epocaColheita: "Março a Maio"
    },
    {
      estado: "São Paulo",
      nomePopular: "Umbu",
      especie: "Spondias tuberosa",
      regioesProducao: ["Vale do Ribeira (cultivo experimental)"],
      epocaColheita: "Março a Abril (esporádico)"
    },
    // Estados onde não é comum
    ...["Acre", "Amapá", "Amazonas", "Distrito Federal", "Espírito Santo", 
        "Goiás", "Mato Grosso", "Mato Grosso do Sul", "Pará", "Paraná",
        "Rio de Janeiro", "Rondônia", "Roraima", "Santa Catarina",
        "Rio Grande do Sul", "Tocantins"].map(estado => ({
      estado,
      nomePopular: "Não é comum",
      especie: "-",
      regioesProducao: [],
      epocaColheita: "Não aplicável"
    }))
  ];

  export default umbuPorEstado;