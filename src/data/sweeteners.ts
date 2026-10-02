export interface SweetenerInfo {
  name: string;
  category: 'Natural' | 'Poliois' | 'Artificiais' | 'Alimento Integral';
  characteristic: string;
  observation: string;
  sweetnessIndex: string; // e.g. "Elevado", "Similar ao açúcar", etc.
  caloricValue: string;
  suitableForBaking: boolean;
  notes: string;
}

export const SWEETENERS_DATA: SweetenerInfo[] = [
  {
    name: "Stevia",
    category: "Natural",
    characteristic: "Poder adoçante elevado",
    observation: "Pode deixar sabor residual amargo ou herbal em algumas receitas.",
    sweetnessIndex: "200x a 300x mais doce que o açúcar",
    caloricValue: "0 kcal",
    suitableForBaking: true,
    notes: "Origem vegetal natural. Versões 100% puras (reb-A) têm sabor residual menor."
  },
  {
    name: "Eritritol",
    category: "Poliois",
    characteristic: "Menor valor energético",
    observation: "Pode causar desconforto intestinal em pessoas sensíveis se consumido em excesso.",
    sweetnessIndex: "70% da doçura do açúcar",
    caloricValue: "0,2 kcal/g (praticamente nulo)",
    suitableForBaking: true,
    notes: "Proporciona uma sensação de frescor suave na boca; dissolve bem e não eleva a glicemia."
  },
  {
    name: "Xilitol",
    category: "Poliois",
    characteristic: "Sabor muito parecido com açúcar tradicional",
    observation: "Pode causar gases ou diarreia em excesso e é EXTREMAMENTE tóxico/perigoso para cães e pets.",
    sweetnessIndex: "100% idêntico ao açúcar (substituição 1:1)",
    caloricValue: "2,4 kcal/g (~40% menos que açúcar)",
    suitableForBaking: true,
    notes: "Excelente para bolos e caldas, mas mantenha sempre longe de animais de estimação."
  },
  {
    name: "Sucralose",
    category: "Artificiais",
    characteristic: "Resiste bem a algumas preparações culinárias",
    observation: "Confira a indicação do produto no rótulo para receitas quentes.",
    sweetnessIndex: "600x mais doce que o açúcar",
    caloricValue: "0 kcal",
    suitableForBaking: true,
    notes: "Derivado modificado da sacarose com sabor neutro, sem amargor residual."
  },
  {
    name: "Açúcar (Demerara / Mascavo / Cristal)",
    category: "Alimento Integral",
    characteristic: "Ingrediente culinário comum e sabor de referência",
    observation: "Use com moderação e dentro da receita planejada.",
    sweetnessIndex: "Padrão de referência (1x)",
    caloricValue: "4 kcal/g (16 kcal por colher de chá)",
    suitableForBaking: true,
    notes: "Não é proibido: quando usado conscientemente em pequenas doses caseiras cabe com equilíbrio."
  },
  {
    name: "Mel de Abelha",
    category: "Alimento Integral",
    characteristic: "Tem sabor aromático característico e propriedades antimicrobianas",
    observation: "Continua sendo fonte de açúcares simples (frutose e glicose). Proibido para menores de 1 ano.",
    sweetnessIndex: "Mais doce que o açúcar",
    caloricValue: "3 kcal/g",
    suitableForBaking: true,
    notes: "Adiciona umidade e perfume único a sobremesas e frutas assadas."
  },
  {
    name: "Tâmaras secas",
    category: "Alimento Integral",
    characteristic: "Adoçam intensamente e acrescentam textura cremosa e liga",
    observation: "Também contribuem com calorias e carboidratos da fruta concentrada.",
    sweetnessIndex: "Doce natural caramelizado",
    caloricValue: "Rica em fibras solúveis e potássio",
    suitableForBaking: true,
    notes: "Base perfeita para trufas sem cozimento e tortas cruas."
  },
  {
    name: "Banana madura",
    category: "Alimento Integral",
    characteristic: "Adoça naturalmente e confere umidade e estrutura",
    observation: "Funciona melhor em bolos, cremes e sorvetes congelados.",
    sweetnessIndex: "Doçura suave e aromática",
    caloricValue: "Fonte de amido resistente, fibras e potássio",
    suitableForBaking: true,
    notes: "A forma mais simples e acessível de adoçar receitas caseiras sem nenhum pó industrial."
  }
];

export const SPECIAL_WARNINGS = [
  {
    title: "Fenilcetonúria",
    text: "Pessoas com fenilcetonúria (PKU) devem evitar aspartame, pois não metabolizam a fenilalanina."
  },
  {
    title: "Pessoas com diabetes",
    text: "Devem sempre considerar o total de carboidratos da receita, inclusive frutas, farinhas e poliois."
  },
  {
    title: "Sensibilidade digestiva",
    text: "Poliois como xilitol e eritritol podem causar desconforto gastrointestinal, gases ou efeito laxativo em doses maiores."
  },
  {
    title: "Uso racional",
    text: "Não é necessário misturar vários tipos de adoçante na mesma preparação. Leia sempre o rótulo do fabricante."
  },
  {
    title: "Crianças e bebês",
    text: "Crianças pequenas não devem receber produtos adoçados de forma inadequada; siga sempre a orientação do pediatra e nutricionista."
  },
  {
    title: "Alerta Pet (Cães)",
    text: "O Xilitol é altamente tóxico e potencialmente fatal para cães, causando hipoglicemia severa e falência hepática."
  }
];

export const HOW_TO_CHOOSE_STEPS = [
  {
    number: "1",
    title: "Comece com frutas maduras",
    desc: "Aproveite a doçura natural de bananas pintadas, mangas, maçãs e tâmaras como primeira alternativa."
  },
  {
    number: "2",
    title: "Reduza gradualmente o açúcar",
    desc: "O paladar se adapta com o tempo. Diminua as colheres aos poucos para reeducar sua percepção do doce."
  },
  {
    number: "3",
    title: "Potencialize com especiarias",
    desc: "Use cacau 100%, canela, essência de baunilha, cravo e raspas de limão para enriquecer o aroma."
  },
  {
    number: "4",
    title: "Escolha adoçante só se precisar",
    desc: "Se a fruta não for suficiente para seu gosto atual, opte por estévia ou eritritol em doses moderadas."
  },
  {
    number: "5",
    title: "Observe seu corpo",
    desc: "Perceba como seu trato digestivo e disposição reagem a cada tipo de ingrediente."
  },
  {
    number: "6",
    title: "Priorize prazer e moderação",
    desc: "Consistência e tranquilidade valem muito mais do que busca por perfeição restritiva."
  }
];
