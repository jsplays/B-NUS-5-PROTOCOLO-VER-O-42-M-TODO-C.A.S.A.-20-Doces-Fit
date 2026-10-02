export interface ScalableIngredient {
  raw: string; // fallback or display text
  amount?: number;
  unit?: string;
  name: string;
  isOptional?: boolean;
}

export interface Recipe {
  id: number;
  title: string;
  yieldCount: number;
  yieldUnit: 'unidades' | 'porções' | 'pedaços' | 'porção' | 'unidade';
  caloriesPerServing: number;
  prepTimeMinutes: number;
  category: 'Docinhos & Trufas' | 'Cremosos & Gelados' | 'Bolos & Forno' | 'Express & Práticos' | 'Docinhos & Panela';
  tags: string[];
  image?: string;
  accentColor?: string;
  ingredients: ScalableIngredient[];
  // If recipe has sections like base and cream (e.g., Cheesecake)
  subsections?: {
    title: string;
    ingredients: ScalableIngredient[];
  }[];
  steps: string[];
  timerMinutes?: number;
  timerLabel?: string;
  tips?: string;
}

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: "Brigadeiro de batata-doce e cacau",
    yieldCount: 12,
    yieldUnit: "unidades",
    caloriesPerServing: 65,
    prepTimeMinutes: 40,
    category: "Docinhos & Trufas",
    tags: ["Sem Açúcar Refinado", "Cacau Puro", "Fibras Naturais"],
    image: "/src/assets/images/recipe_brigadeiro_1790977017373.jpg",
    accentColor: "amber",
    timerMinutes: 30,
    timerLabel: "Tempo de geladeira para firmar o ponto de enrolar",
    ingredients: [
      { raw: "1 xícara de batata-doce cozida e amassada", amount: 1, unit: "xícara", name: "batata-doce cozida e bem amassada" },
      { raw: "3 colheres de sopa de cacau em pó 100%", amount: 3, unit: "colheres de sopa", name: "cacau em pó 100%" },
      { raw: "2 colheres de sopa de leite em pó", amount: 2, unit: "colheres de sopa", name: "leite em pó (desnatado ou integral)" },
      { raw: "1 colher de sopa de pasta de amendoim", amount: 1, unit: "colher de sopa", name: "pasta de amendoim pura" },
      { raw: "Canela em pó a gosto", amount: 0.5, unit: "colher de café", name: "canela em pó", isOptional: true },
      { raw: "Cacau ou coco ralado sem açúcar para enrolar", amount: 2, unit: "colheres de sopa", name: "cacau ou coco ralado fino para finalizar" }
    ],
    steps: [
      "Misture a batata-doce amassada, o cacau em pó, o leite em pó e a pasta de amendoim em uma tigela até formar uma massa bem homogênea e brilhante.",
      "Leve à geladeira por aproximadamente 30 minutos para adquirir consistência firme.",
      "Unte levemente as mãos com um pingo de óleo de coco ou manteiga.",
      "Modele bolinhas delicadas de aproximadamente 20g.",
      "Passe cada brigadeiro no cacau em pó ou no coco ralado sem açúcar.",
      "Guarde em recipiente hermeticamente fechado na geladeira. Fica ainda mais saboroso geladinho!"
    ],
    tips: "Para uma textura ultracremosa, amasse a batata-doce ainda quente no garfo ou passe por uma peneira fina."
  },
  {
    id: 2,
    title: "Mousse de maracujá com iogurte",
    yieldCount: 4,
    yieldUnit: "porções",
    caloriesPerServing: 120,
    prepTimeMinutes: 10,
    category: "Cremosos & Gelados",
    tags: ["Rico em Proteínas", "Refrescante", "Super Rápido"],
    image: "/src/assets/images/recipe_mousse_maracuja_1790977026687.jpg",
    accentColor: "yellow",
    timerMinutes: 120,
    timerLabel: "Tempo de refrigeração na geladeira",
    ingredients: [
      { raw: "2 potes de iogurte natural integral ou desnatado (340g)", amount: 2, unit: "potes", name: "iogurte natural (aprox. 170g cada)" },
      { raw: "Polpa de 1 maracujá grande com sementes", amount: 1, unit: "unidade", name: "polpa de maracujá fresco" },
      { raw: "2 colheres de sopa de leite em pó", amount: 2, unit: "colheres de sopa", name: "leite em pó" },
      { raw: "1 colher de sopa de sementes de chia", amount: 1, unit: "colher de sopa", name: "sementes de chia" },
      { raw: "Adoçante culinário (estévia ou eritritol), se desejar", amount: 1, unit: "colher de chá", name: "adoçante culinário", isOptional: true }
    ],
    steps: [
      "No liquidificador ou mixer, bata o iogurte natural, metade da polpa de maracujá e o leite em pó até ficar um creme leve.",
      "Misture a chia delicadamente com uma colher (a chia ajuda a dar estrutura e cremosidade à mousse).",
      "Divida o creme em quatro potinhos ou taças individuais.",
      "Finalize o topo com o restante da polpa fresca de maracujá (as sementinhas dão uma textura crocante incrível).",
      "Leve à geladeira por pelo menos 2 horas antes de servir para firmar."
    ],
    tips: "A chia absorve a umidade do iogurte e garante uma consistência aveludada sem precisar de gelatina sem sabor."
  },
  {
    id: 3,
    title: "Brownie de banana e cacau",
    yieldCount: 9,
    yieldUnit: "pedaços",
    caloriesPerServing: 95,
    prepTimeMinutes: 30,
    category: "Bolos & Forno",
    tags: ["Farinha de Aveia", "Sem Farinha Branca", "Com Castanhas"],
    image: "/src/assets/images/recipe_brownie_banana_1790977035390.jpg",
    accentColor: "amber",
    timerMinutes: 20,
    timerLabel: "Tempo de forno a 180°C",
    ingredients: [
      { raw: "2 bananas bem maduras amassadas", amount: 2, unit: "unidades", name: "bananas bem maduras amassadas" },
      { raw: "2 ovos inteiros", amount: 2, unit: "unidades", name: "ovos" },
      { raw: "½ xícara de aveia em flocos finos ou farinha", amount: 0.5, unit: "xícara", name: "aveia (flocos finos ou farinha)" },
      { raw: "3 colheres de sopa de cacau em pó 100%", amount: 3, unit: "colheres de sopa", name: "cacau em pó 100%" },
      { raw: "1 colher de chá de fermento em pó", amount: 1, unit: "colher de chá", name: "fermento químico em pó" },
      { raw: "2 colheres de sopa de castanhas picadas", amount: 2, unit: "colheres de sopa", name: "castanhas picadas (nozes ou castanha-do-pará)", isOptional: true },
      { raw: "Canela em pó a gosto", amount: 0.5, unit: "colher de café", name: "canela em pó", isOptional: true }
    ],
    steps: [
      "Pré-aqueça o forno a 180 °C e forre uma forma quadrada pequena com papel-manteiga ou unte levemente.",
      "Em um recipiente, misture as bananas bem amassadas e os dois ovos batidos com um garfo.",
      "Acrescente a aveia, o cacau em pó, a canela e as castanhas picadas, mexendo até incorporar.",
      "Adicione o fermento em pó por último e mexa suavemente.",
      "Despeje a massa na forma espalhando de maneira uniforme.",
      "Asse por aproximadamente 20 minutos (não deixe assar demais para manter o centro úmido e fudge).",
      "Espere esfriar completamente antes de cortar em 9 quadradinhos."
    ],
    tips: "Quanto mais madura a banana (com pintinhas pretas na casca), mais doce e aromático ficará o brownie sem precisar de nenhum açúcar."
  },
  {
    id: 4,
    title: "Sorvete de banana com cacau",
    yieldCount: 2,
    yieldUnit: "porções",
    caloriesPerServing: 180,
    prepTimeMinutes: 5,
    category: "Cremosos & Gelados",
    tags: ["Nice Cream", "100% Frutas", "Zero Lactose"],
    image: "/src/assets/images/recipe_sorvete_banana_1790977769925.jpg",
    accentColor: "orange",
    timerMinutes: 30,
    timerLabel: "Opcional: freezer para textura mais firme de bola",
    ingredients: [
      { raw: "3 bananas maduras congeladas em rodelas", amount: 3, unit: "unidades", name: "bananas maduras congeladas em rodelas" },
      { raw: "1 colher de sopa de cacau em pó 100%", amount: 1, unit: "colher de sopa", name: "cacau em pó 100%" },
      { raw: "1 colher de sopa de pasta de amendoim integral", amount: 1, unit: "colher de sopa", name: "pasta de amendoim integral" },
      { raw: "1 colher de sopa de água ou bebida vegetal se necessário", amount: 1, unit: "colher de sopa", name: "água ou bebida vegetal (apenas para ajudar o motor)", isOptional: true }
    ],
    steps: [
      "Congele as bananas previamente descascadas e cortadas em rodelas por pelo menos 4 horas.",
      "Coloque as rodelas no processador ou liquidificador potente com o cacau em pó.",
      "Acrescente a pasta de amendoim integral.",
      "Bata em pulsos, parando para empurrar com uma espátula, até emulsionar em um sorvete espesso e aveludado.",
      "Use um pingo de água ou leite vegetal apenas se o processador pedir.",
      "Sirva imediatamente como 'soft ice' ou leve ao congelador por 30 minutos se quiser retirar com pegador de sorvete."
    ],
    tips: "Fica maravilhoso com uma pitadinha de flor de sal ou canela por cima!"
  },
  {
    id: 5,
    title: "Trufa de tâmaras e cacau",
    yieldCount: 12,
    yieldUnit: "unidades",
    caloriesPerServing: 90,
    prepTimeMinutes: 20,
    category: "Docinhos & Trufas",
    tags: ["Energia Natural", "Sem Adição de Açúcar", "Vegano"],
    image: "/src/assets/images/recipe_trufa_tamaras_1790977869070.jpg",
    accentColor: "amber",
    ingredients: [
      { raw: "1 xícara de tâmaras secas sem caroço", amount: 1, unit: "xícara", name: "tâmaras secas sem caroço (aprox. 150g)" },
      { raw: "½ xícara de castanhas (de caju, nozes ou amêndoas)", amount: 0.5, unit: "xícara", name: "castanhas de caju, nozes ou amêndoas" },
      { raw: "2 colheres de sopa de cacau em pó", amount: 2, unit: "colheres de sopa", name: "cacau em pó 100%" },
      { raw: "1 colher de sopa de coco ralado fino", amount: 1, unit: "colher de sopa", name: "coco ralado fino sem açúcar" },
      { raw: "1 pitada de sal marinho", amount: 1, unit: "pitada", name: "sal marinho fino (realça o doce natural)" },
      { raw: "Gotas de água morna se necessário", amount: 1, unit: "colher de sopa", name: "água morna", isOptional: true }
    ],
    steps: [
      "Se as tâmaras estiverem ressecadas, hidrate em água morna por 10 minutos e escorra muito bem.",
      "No processador de alimentos, coloque as castanhas, as tâmaras escorridas, o cacau, o coco e a pitada de sal.",
      "Processe até virar uma massa densa, pegajosa e moldável.",
      "Se a massa esfarelar, pingue meia colher de água morna e processe novamente.",
      "Retire porções com uma colher de chá e enrole as trufas com as palmas das mãos.",
      "Passe no cacau ou no coco ralado seco.",
      "Armazene em pote vedado na geladeira por até 10 dias."
    ],
    tips: "Perfeitas para levar na marmita ou comer antes do treino para energia limpa e saciante."
  },
  {
    id: 6,
    title: "Pudim de chia com manga",
    yieldCount: 2,
    yieldUnit: "porções",
    caloriesPerServing: 180,
    prepTimeMinutes: 10,
    category: "Cremosos & Gelados",
    tags: ["Ômega 3", "Rico em Fibras", "Refrescante"],
    image: "/src/assets/images/recipe_pudim_chia_manga_1790977780117.jpg",
    accentColor: "yellow",
    timerMinutes: 240,
    timerLabel: "Tempo de hidratação da chia na geladeira (4 horas)",
    ingredients: [
      { raw: "1 xícara de leite ou bebida vegetal (amêndoas, coco ou aveia)", amount: 1, unit: "xícara", name: "leite desnatado ou bebida vegetal" },
      { raw: "3 colheres de sopa de sementes de chia", amount: 3, unit: "colheres de sopa", name: "sementes de chia" },
      { raw: "1 manga pequena bem madura (tipo palmer ou tommy)", amount: 1, unit: "unidade", name: "manga pequena bem madura" },
      { raw: "Coco ralado sem açúcar a gosto", amount: 1, unit: "colher de sopa", name: "coco ralado sem açúcar", isOptional: true },
      { raw: "Canela em pó a gosto", amount: 0.5, unit: "colher de café", name: "canela em pó", isOptional: true }
    ],
    steps: [
      "Em um pote de vidro com tampa, misture bem as sementes de chia com o leite ou bebida vegetal.",
      "Mexa vigorosamente por 1 minuto para não empelotar e tampe.",
      "Deixe repousar na geladeira por pelo menos 4 horas (ou de um dia para o outro).",
      "Descasque e bata a manga madura no liquidificador ou amasse com garfo até formar um purê dourado e doce.",
      "Monte em copos ou potinhos de sobremesa: coloque a base de pudim de chia e cubra com a camada generosa de purê de manga.",
      "Finalize com uma pitadinha de canela ou flocos de coco tostado."
    ],
    tips: "A chia forma um gel rico em fibras solúveis que prolonga a sensação de saciedade por horas."
  },
  {
    id: 7,
    title: "Cheesecake de copinho com frutas vermelhas",
    yieldCount: 4,
    yieldUnit: "porções",
    caloriesPerServing: 170,
    prepTimeMinutes: 20,
    category: "Cremosos & Gelados",
    tags: ["Gourmet Fit", "Camadas Elegantes", "Rico em Cálcio"],
    image: "/src/assets/images/recipe_cheesecake_copinho_1790977789280.jpg",
    accentColor: "rose",
    timerMinutes: 60,
    timerLabel: "Tempo de refrigeração na geladeira",
    ingredients: [
      { raw: "6 biscoitos de aveia ou integrais simples", amount: 6, unit: "unidades", name: "biscoitos de aveia ou integrais sem recheio" },
      { raw: "1 colher de sopa de castanhas trituradas", amount: 1, unit: "colher de sopa", name: "castanhas trituradas" },
      { raw: "2 potes de iogurte natural integral (340g)", amount: 2, unit: "potes", name: "iogurte natural consistente" },
      { raw: "3 colheres de sopa de cream cheese tradicional ou light", amount: 3, unit: "colheres de sopa", name: "cream cheese (tradicional ou light)" },
      { raw: "1 colher de sopa de leite em pó", amount: 1, unit: "colher de sopa", name: "leite em pó" },
      { raw: "Adoçante culinário a gosto", amount: 1, unit: "colher de chá", name: "adoçante culinário a gosto", isOptional: true },
      { raw: "1 xícara de morangos picados ou frutas vermelhas", amount: 1, unit: "xícara", name: "morangos picados ou frutas vermelhas frescas" }
    ],
    subsections: [
      {
        title: "Base Crocante",
        ingredients: [
          { raw: "6 biscoitos de aveia ou integrais", amount: 6, unit: "unidades", name: "biscoitos integrais" },
          { raw: "1 colher de sopa de castanhas trituradas", amount: 1, unit: "colher de sopa", name: "castanhas trituradas" }
        ]
      },
      {
        title: "Creme e Cobertura",
        ingredients: [
          { raw: "2 potes de iogurte natural", amount: 2, unit: "potes", name: "iogurte natural" },
          { raw: "3 colheres de sopa de cream cheese", amount: 3, unit: "colheres de sopa", name: "cream cheese" },
          { raw: "1 colher de sopa de leite em pó", amount: 1, unit: "colher de sopa", name: "leite em pó" },
          { raw: "Adoçante culinário, se desejar", amount: 1, unit: "colher de chá", name: "adoçante culinário", isOptional: true },
          { raw: "Morangos ou frutas vermelhas", amount: 1, unit: "xícara", name: "frutas vermelhas frescas" }
        ]
      }
    ],
    steps: [
      "Triture os biscoitos de aveia com as castanhas até formar uma farofa crocante.",
      "Distribua essa base no fundo de quatro copinhos ou tacinhas individuais.",
      "Em uma tigela, misture com um fouet o iogurte natural, o cream cheese e o leite em pó até virar um creme acetinado (adoce a gosto se desejar).",
      "Despeje o creme branco delicadamente sobre a base de biscoitos.",
      "Cubra com os morangos frescos picadinhos (ou faça uma geleia rápida aquecendo as frutas por 2 minutos na frigideira).",
      "Refrigere por pelo menos 1 hora antes de servir."
    ],
    tips: "Para uma versão ainda mais firme, deixe o iogurte escorrer em um filtro de café por 30 minutos antes de misturar ao cream cheese."
  },
  {
    id: 8,
    title: "Maçã assada com canela e aveia",
    yieldCount: 2,
    yieldUnit: "porções",
    caloriesPerServing: 150,
    prepTimeMinutes: 25,
    category: "Bolos & Forno",
    tags: ["Sobremesa Quentinha", "Aroma de Casa", "Super Conforto"],
    image: "/src/assets/images/recipe_maca_assada_1790977799087.jpg",
    accentColor: "amber",
    timerMinutes: 20,
    timerLabel: "Tempo de forno a 180°C até amaciar",
    ingredients: [
      { raw: "2 maçãs médias (fuji ou gala)", amount: 2, unit: "unidades", name: "maçãs médias" },
      { raw: "2 colheres de sopa de aveia em flocos", amount: 2, unit: "colheres de sopa", name: "aveia em flocos" },
      { raw: "1 colher de sopa de uvas-passas escuras ou claras", amount: 1, unit: "colher de sopa", name: "uvas-passas" },
      { raw: "Canela em pó a gosto", amount: 1, unit: "colher de chá", name: "canela em pó" },
      { raw: "1 colher de chá de manteiga ou pasta de amendoim", amount: 1, unit: "colher de chá", name: "manteiga ou pasta de amendoim", isOptional: true },
      { raw: "Algumas gotas de água no fundo da assadeira", amount: 2, unit: "colheres de sopa", name: "água para o fundo da assadeira" }
    ],
    steps: [
      "Lave as maçãs e, com o auxílio de uma faca pequena ou descaroçador, retire o miolo e sementes sem furar o fundo da fruta (fazendo uma 'conchinha').",
      "Em uma tigelinha, misture a aveia, as uvas-passas, a canela e a colher de manteiga/pasta de amendoim.",
      "Preencha a cavidade de cada maçã com esse recheio perfumado.",
      "Acomode as maçãs em uma assadeira pequena e coloque umas gotinhas de água no fundo para criar vapor úmido.",
      "Leve ao forno a 180 °C por cerca de 20 minutos até que a casca fique enrugada e a polpa macia ao toque.",
      "Sirva ainda quentinha. O caldo que solta no fundo é puro néctar caramelizado!"
    ],
    tips: "Perfeita para noites mais frescas ou quando você precisa de um doce aconchegante sem pesar."
  },
  {
    id: 9,
    title: "Creme de abacate com cacau",
    yieldCount: 2,
    yieldUnit: "porções",
    caloriesPerServing: 210,
    prepTimeMinutes: 5,
    category: "Cremosos & Gelados",
    tags: ["Gorduras Boas", "Textura Velvet", "Cacau Intenso"],
    image: "/src/assets/images/recipe_creme_abacate_1790977807622.jpg",
    accentColor: "emerald",
    timerMinutes: 30,
    timerLabel: "Tempo de geladeira antes de servir",
    ingredients: [
      { raw: "1 abacate pequeno bem maduro (ou metade de um grande)", amount: 1, unit: "unidade", name: "abacate pequeno bem maduro" },
      { raw: "2 colheres de sopa de cacau em pó 100%", amount: 2, unit: "colheres de sopa", name: "cacau em pó 100%" },
      { raw: "Suco fresco de ½ laranja pêra", amount: 0.5, unit: "unidade", name: "suco fresco de laranja" },
      { raw: "Canela em pó a gosto", amount: 0.5, unit: "colher de café", name: "canela em pó" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 1, unit: "colher de chá", name: "adoçante culinário", isOptional: true }
    ],
    steps: [
      "Retire a polpa do abacate maduro com uma colher e coloque no liquidificador ou processador.",
      "Adicione o cacau em pó, o suco de laranja coado e a canela.",
      "Bata em velocidade média por 2 minutos até transformar em um mousse sedoso e escuro.",
      "Prove a doçura e adicione adoçante se preferir um toque mais doce.",
      "Coloque em taças e leve à geladeira por 30 minutos antes de servir."
    ],
    tips: "O suco da laranja quebra qualquer amargor residual do abacate e potencializa as notas nobres do cacau!"
  },
  {
    id: 10,
    title: "Cocada cremosa de colher",
    yieldCount: 4,
    yieldUnit: "porções",
    caloriesPerServing: 145,
    prepTimeMinutes: 15,
    category: "Docinhos & Panela",
    tags: ["Coco Puro", "De Colher", "Sabor Brasileiro"],
    image: "/src/assets/images/recipe_cocada_cremosa_1790977818697.jpg",
    accentColor: "amber",
    ingredients: [
      { raw: "1 xícara de coco ralado fino sem açúcar (úmido ou seco)", amount: 1, unit: "xícara", name: "coco ralado seco ou fresco sem açúcar" },
      { raw: "½ xícara de leite (desnatado, integral ou vegetal)", amount: 0.5, unit: "xícara", name: "leite ou leite de coco diluído" },
      { raw: "2 colheres de sopa de leite em pó", amount: 2, unit: "colheres de sopa", name: "leite em pó" },
      { raw: "1 colher de chá de amido de milho", amount: 1, unit: "colher de chá", name: "amido de milho" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 1, unit: "colher de sopa", name: "adoçante culinário a gosto", isOptional: true },
      { raw: "Cravo-da-índia ou canela em pau a gosto", amount: 2, unit: "unidades", name: "cravos-da-índia ou canela em pau", isOptional: true }
    ],
    steps: [
      "Em um copo com o leite frio, dissolva completamente a colher de chá de amido de milho.",
      "Transfira para uma panela pequena e adicione o coco ralado, o leite em pó e as especiarias.",
      "Leve ao fogo baixo, mexendo sem parar com uma espátula de silicone para não grudar no fundo.",
      "Cozinhe por 5 a 8 minutos até o líquido encorpar e desprender levemente da panela.",
      "Desligue o fogo, retire os cravos e adoce a gosto se desejar.",
      "Divida em quatro tacinhas e leve à geladeira para apurar os sabores."
    ],
    tips: "Use coco ralado de espessura média para manter pedacinhos mastigáveis cheios de suculência."
  },
  {
    id: 11,
    title: "Bolo de caneca de banana",
    yieldCount: 1,
    yieldUnit: "porção",
    caloriesPerServing: 260,
    prepTimeMinutes: 3,
    category: "Express & Práticos",
    tags: ["Pronto em 90s", "Porção Individual", "Zero Desperdício"],
    image: "/src/assets/images/recipe_bolo_caneca_1790977827240.jpg",
    accentColor: "amber",
    timerMinutes: 1.5,
    timerLabel: "Tempo de micro-ondas (1 min 30 seg)",
    ingredients: [
      { raw: "1 banana pequena bem madura amassada", amount: 1, unit: "unidade", name: "banana madura" },
      { raw: "1 ovo pequeno", amount: 1, unit: "unidade", name: "ovo" },
      { raw: "2 colheres de sopa de farinha ou flocos de aveia", amount: 2, unit: "colheres de sopa", name: "aveia (farinha ou flocos)" },
      { raw: "1 colher de chá de cacau em pó", amount: 1, unit: "colher de chá", name: "cacau em pó 100%" },
      { raw: "½ colher de chá de fermento em pó", amount: 0.5, unit: "colher de chá", name: "fermento químico" },
      { raw: "Canela em pó a gosto", amount: 0.5, unit: "colher de café", name: "canela em pó" },
      { raw: "1 colher de chá de gotas de chocolate 70%", amount: 1, unit: "colher de chá", name: "gotas de chocolate amargo 70%", isOptional: true }
    ],
    steps: [
      "Em uma caneca média (que possa ir ao micro-ondas), amasse bem a banana e bata o ovo com um garfo.",
      "Acrescente as 2 colheres de aveia, o cacau em pó e uma pitada de canela, misturando até ficar homogêneo.",
      "Misture o fermento por último com delicadeza.",
      "Se quiser, jogue algumas gotinhas de chocolate por cima da massa.",
      "Leve ao micro-ondas em potência média/alta por 1 minuto e 30 segundos.",
      "Espete um palito no centro; se sair limpo está pronto. Deixe amornar por 1 minuto antes de saborear."
    ],
    tips: "Se sua caneca for estreita, divida em duas para a massa não transbordar durante o crescimento."
  },
  {
    id: 12,
    title: "Pudim rápido de coco",
    yieldCount: 4,
    yieldUnit: "porções",
    caloriesPerServing: 150,
    prepTimeMinutes: 40,
    category: "Bolos & Forno",
    tags: ["Sem Açúcar", "Textura Tradicional", "Sem Banho de Caramelo"],
    image: "/src/assets/images/recipe_pudim_coco_1790977836497.jpg",
    accentColor: "stone",
    timerMinutes: 35,
    timerLabel: "Tempo de banho-maria no forno a 180°C",
    ingredients: [
      { raw: "400 ml de leite (desnatado, integral ou leite vegetal)", amount: 400, unit: "ml", name: "leite ou leite vegetal" },
      { raw: "3 ovos inteiros", amount: 3, unit: "unidades", name: "ovos inteiros" },
      { raw: "½ xícara de coco ralado sem açúcar", amount: 0.5, unit: "xícara", name: "coco ralado sem açúcar" },
      { raw: "2 colheres de sopa de leite em pó", amount: 2, unit: "colheres de sopa", name: "leite em pó" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 2, unit: "colheres de sopa", name: "adoçante culinário", isOptional: true },
      { raw: "1 colher de chá de essência de baunilha", amount: 1, unit: "colher de chá", name: "extrato ou essência de baunilha", isOptional: true }
    ],
    steps: [
      "No liquidificador, bata os ovos, o leite, o coco ralado, o leite em pó, a baunilha e o adoçante por 2 minutos.",
      "Despeje em uma forma pequena com furo central previamente untada.",
      "Asse em banho-maria em forno pré-aquecido a 180 °C por aproximadamente 35 a 40 minutos até firmar a superfície.",
      "Retire do forno e deixe esfriar até atingir a temperatura ambiente.",
      "Leve à geladeira por pelo menos 3 horas antes de desenformar bem geladinho."
    ],
    tips: "Passar os ovos por uma peneirinha antes de bater retira a película da gema e elimina qualquer odor residual."
  },
  {
    id: 13,
    title: "Morango com creme de iogurte",
    yieldCount: 2,
    yieldUnit: "porções",
    caloriesPerServing: 125,
    prepTimeMinutes: 10,
    category: "Cremosos & Gelados",
    tags: ["Pronto em 10 min", "Antioxidantes", "Leve & Aromático"],
    image: "/src/assets/images/recipe_morango_iogurte_1790977845684.jpg",
    accentColor: "rose",
    timerMinutes: 30,
    timerLabel: "Tempo de refrigeração na geladeira",
    ingredients: [
      { raw: "2 xícaras de morangos frescos bem lavados", amount: 2, unit: "xícaras", name: "morangos frescos higienizados" },
      { raw: "1 pote de iogurte natural consistente (170g)", amount: 1, unit: "pote", name: "iogurte natural firme" },
      { raw: "2 colheres de sopa de leite em pó", amount: 2, unit: "colheres de sopa", name: "leite em pó" },
      { raw: "1 colher de sopa de sementes de chia", amount: 1, unit: "colher de sopa", name: "sementes de chia" },
      { raw: "Raspas finas de 1 limão tahiti ou siciliano", amount: 1, unit: "colher de chá", name: "raspas finas de limão" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 1, unit: "colher de chá", name: "adoçante culinário a gosto", isOptional: true }
    ],
    steps: [
      "Em um bowl pequeno, misture o iogurte natural com o leite em pó e a chia até obter um creme sedoso.",
      "Misture as raspas finas de limão (o aroma cítrico eleva o frescor da sobremesa).",
      "Pique os morangos em fatias ou metades.",
      "Em duas taças de vidro, monte camadas alternando morangos suculentos e colheradas do creme perfumado.",
      "Refrigere por 30 minutos antes de servir para a chia hidratar e o creme firmar."
    ],
    tips: "Se quiser uma apresentação de festa, finalize com folhas frescas de hortelã no topo."
  },
  {
    id: 14,
    title: "Cookie de aveia e pasta de amendoim",
    yieldCount: 10,
    yieldUnit: "unidades",
    caloriesPerServing: 90,
    prepTimeMinutes: 20,
    category: "Bolos & Forno",
    tags: ["Sem Farinha", "Crocante & Macio", "Snack Saudável"],
    image: "/src/assets/images/recipe_cookies_aveia_1790977856123.jpg",
    accentColor: "amber",
    timerMinutes: 15,
    timerLabel: "Tempo de forno a 180°C",
    ingredients: [
      { raw: "1 banana média bem madura", amount: 1, unit: "unidade", name: "banana bem madura" },
      { raw: "½ xícara de aveia em flocos", amount: 0.5, unit: "xícara", name: "aveia em flocos" },
      { raw: "2 colheres de sopa de pasta de amendoim integral", amount: 2, unit: "colheres de sopa", name: "pasta de amendoim integral" },
      { raw: "1 colher de sopa de coco ralado sem açúcar", amount: 1, unit: "colher de sopa", name: "coco ralado sem açúcar" },
      { raw: "Canela em pó a gosto", amount: 0.5, unit: "colher de café", name: "canela em pó" },
      { raw: "1 colher de chá de fermento químico", amount: 1, unit: "colher de chá", name: "fermento em pó" },
      { raw: "Gotas de chocolate 70% a gosto", amount: 1, unit: "colher de sopa", name: "gotas de chocolate 70%", isOptional: true }
    ],
    steps: [
      "Amasse bem a banana com um garfo até formar uma pasta lisa.",
      "Misture a pasta de amendoim até que se fundam por completo.",
      "Acrescente a aveia em flocos, o coco ralado e a canela.",
      "Por último, adicione o fermento e envolva suavemente.",
      "Com a ajuda de uma colher, faça 10 montinhos espaçados em uma assadeira forrada com papel manteiga e aperte levemente com as costas do garfo.",
      "Asse a 180 °C por aproximadamente 15 minutos até as bordas dourarem.",
      "Espere esfriar completamente na grade para ficarem crocantes por fora e macios no meio."
    ],
    tips: "Duram até 5 dias em pote de vidro com fechamento hermético bem vedado."
  },
  {
    id: 15,
    title: "Picolé de iogurte com frutas",
    yieldCount: 6,
    yieldUnit: "unidades",
    caloriesPerServing: 75,
    prepTimeMinutes: 10,
    category: "Cremosos & Gelados",
    tags: ["Refrescância Total", "Ideal para o Verão", "Lanche Kids & Adultos"],
    image: "/src/assets/images/recipe_picole_iogurte_1790977880035.jpg",
    accentColor: "rose",
    timerMinutes: 240,
    timerLabel: "Tempo de congelador até firmar no palito",
    ingredients: [
      { raw: "2 potes de iogurte natural (340g)", amount: 2, unit: "potes", name: "iogurte natural" },
      { raw: "1 banana madura", amount: 1, unit: "unidade", name: "banana madura" },
      { raw: "1 xícara de morangos picados em pedacinhos", amount: 1, unit: "xícara", name: "morangos picados" },
      { raw: "1 colher de sopa de sementes de chia", amount: 1, unit: "colher de sopa", name: "sementes de chia" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 1, unit: "colher de chá", name: "adoçante culinário", isOptional: true }
    ],
    steps: [
      "No liquidificador, bata o iogurte natural e a banana madura até ficar bem homogêneo e aveludado.",
      "Transfira para uma tigela e misture a chia.",
      "Pique os morangos em pequenos cubinhos coloridos.",
      "Distribua os morangos no fundo e nas paredes das forminhas de picolé.",
      "Preencha com o creme de iogurte batido e insira os palitos de picolé.",
      "Leve ao congelador por pelo menos 4 horas até ficar bem sólido.",
      "Para desenformar com facilidade, passe a pontinha da forma em água corrente morna por 5 segundos."
    ],
    tips: "Você também pode intercalar pedacinhos de kiwi, mirtilos ou manga para criar um picolé arco-íris natural."
  },
  {
    id: 16,
    title: "Creme de cacau com tofu",
    yieldCount: 3,
    yieldUnit: "porções",
    caloriesPerServing: 150,
    prepTimeMinutes: 10,
    category: "Cremosos & Gelados",
    tags: ["Super Proteico", "Base 100% Vegetal", "Textura Mousseline"],
    image: "/src/assets/images/recipe_creme_tofu_1790977889045.jpg",
    accentColor: "stone",
    timerMinutes: 60,
    timerLabel: "Tempo de geladeira para apurar o sabor",
    ingredients: [
      { raw: "300 g de tofu macio (silk tofu ou tofu fresco)", amount: 300, unit: "g", name: "tofu macio e drenado" },
      { raw: "2 colheres de sopa de cacau em pó 100%", amount: 2, unit: "colheres de sopa", name: "cacau em pó 100%" },
      { raw: "1 banana bem madura", amount: 1, unit: "unidade", name: "banana madura" },
      { raw: "1 colher de chá de essência de baunilha pura", amount: 1, unit: "colher de chá", name: "extrato de baunilha" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 1, unit: "colher de sopa", name: "adoçante culinário", isOptional: true },
      { raw: "Morangos frescos para servir", amount: 1, unit: "xícara", name: "morangos fatiados para guarnição" }
    ],
    steps: [
      "Escorra bem o excesso de água do tofu macio em papel toalha.",
      "No processador ou liquidificador potente, junte o tofu, o cacau em pó, a banana e a baunilha.",
      "Bata por 3 minutos parando para raspar as bordas até virar um mousse brilhante, sem nenhum grumo.",
      "Prove e ajuste o dulçor com adoçante conforme sua preferência.",
      "Divida em 3 taças elegantes e refrigere por pelo menos 1 hora.",
      "Sirva acompanhado de morangos frescos cortados em leque."
    ],
    tips: "O tofu tem sabor totalmente neutro e age como um emulsionante nobre repleto de proteínas completas."
  },
  {
    id: 17,
    title: "Doce de abóbora com coco",
    yieldCount: 6,
    yieldUnit: "porções",
    caloriesPerServing: 90,
    prepTimeMinutes: 25,
    category: "Docinhos & Panela",
    tags: ["Tradição Brasileira", "Baixo Calórico", "Rico em Betacaroteno"],
    image: "/src/assets/images/recipe_doce_abobora_1790977898487.jpg",
    accentColor: "amber",
    ingredients: [
      { raw: "500 g de abóbora descascada e picada em cubos (japonesa ou moranga)", amount: 500, unit: "g", name: "abóbora em cubos pequenos" },
      { raw: "½ xícara de água", amount: 0.5, unit: "xícara", name: "água potável" },
      { raw: "3 colheres de sopa de coco ralado sem açúcar", amount: 3, unit: "colheres de sopa", name: "coco ralado sem açúcar" },
      { raw: "Canela em pau a gosto", amount: 1, unit: "unidade", name: "canela em pau" },
      { raw: "3 a 4 cravos-da-índia", amount: 4, unit: "unidades", name: "cravos-da-índia" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 2, unit: "colheres de sopa", name: "adoçante culinário", isOptional: true }
    ],
    steps: [
      "Em uma panela funda, coloque os cubos de abóbora, a água, a canela e os cravos.",
      "Tampe e cozinhe em fogo médio/baixo até que a abóbora fique bem macia e comece a desmanchar espontaneamente.",
      "Com as costas de um garfo ou amassador, amasse a abóbora até a textura desejada (mais rústica com pedacinhos ou purê liso).",
      "Acrescente o coco ralado e o adoçante a gosto.",
      "Cozinhe em fogo brando por mais uns 5 minutos mexendo até secar o excesso de líquido e dar o ponto brilhante de doce de tacho.",
      "Divida em 6 porções e sirva em temperatura ambiente ou geladinho."
    ],
    tips: "A abóbora japonesa (cabotiá) traz uma cor alaranjada profunda e já possui doçura natural concentrada."
  },
  {
    id: 18,
    title: "Mousse de chocolate com aquafaba",
    yieldCount: 4,
    yieldUnit: "porções",
    caloriesPerServing: 55,
    prepTimeMinutes: 15,
    category: "Cremosos & Gelados",
    tags: ["Apenas 55 kcal", "Aerado Incrível", "Vegano de Alta Gastronomia"],
    image: "/src/assets/images/recipe_mousse_aquafaba_1790977908009.jpg",
    accentColor: "stone",
    timerMinutes: 120,
    timerLabel: "Tempo de geladeira para firmar a aeração (2 horas)",
    ingredients: [
      { raw: "½ xícara da água do cozimento do grão-de-bico (aquafaba)", amount: 0.5, unit: "xícara", name: "aquafaba bem gelada e coada" },
      { raw: "3 colheres de sopa de cacau em pó 100%", amount: 3, unit: "colheres de sopa", name: "cacau em pó 100%" },
      { raw: "1 colher de sopa de açúcar demerara ou adoçante culinário", amount: 1, unit: "colher de sopa", name: "açúcar ou adoçante culinário" },
      { raw: "1 colher de chá de extrato de baunilha", amount: 1, unit: "colher de chá", name: "extrato de baunilha" },
      { raw: "1 pitada de sal marinho", amount: 1, unit: "pitada", name: "pitada de sal marinho" }
    ],
    steps: [
      "Certifique-se de que a aquafaba (água do cozimento de grão-de-bico) esteja bem gelada e sem resíduos sólidos.",
      "Coloque na tigela da batedeira com a pitadinha de sal e bata em velocidade máxima por cerca de 6 a 8 minutos, até atingir ponto de neve bem firme com picos brancos.",
      "Adicione o cacau em pó peneirado, a baunilha e o adoçante aos pouquinhos.",
      "Envolva delicadamente com uma espátula fazendo movimentos circulares de baixo para cima para não perder o ar da emulsão.",
      "Distribua em quatro tacinhas e leve à geladeira por pelo menos 2 horas antes de servir."
    ],
    tips: "Não deixa nenhum gosto de grão-de-bico e resulta em uma mousse tão leve quanto uma nuvem de chocolate."
  },
  {
    id: 19,
    title: "Barrinha caseira de aveia e banana",
    yieldCount: 8,
    yieldUnit: "unidades",
    caloriesPerServing: 135,
    prepTimeMinutes: 25,
    category: "Express & Práticos",
    tags: ["Prática para Bolsa", "Energia Duradoura", "Livre de Conservantes"],
    image: "/src/assets/images/recipe_barrinha_aveia_1790977915089.jpg",
    accentColor: "amber",
    timerMinutes: 20,
    timerLabel: "Tempo de forno a 180°C",
    ingredients: [
      { raw: "2 bananas maduras amassadas", amount: 2, unit: "unidades", name: "bananas bem maduras amassadas" },
      { raw: "1 xícara de aveia em flocos grossos ou médios", amount: 1, unit: "xícara", name: "aveia em flocos" },
      { raw: "2 colheres de sopa de pasta de amendoim integral", amount: 2, unit: "colheres de sopa", name: "pasta de amendoim integral" },
      { raw: "1 colher de sopa de sementes de linhaça ou chia", amount: 1, unit: "colher de sopa", name: "sementes de linhaça ou chia" },
      { raw: "Canela em pó a gosto", amount: 0.5, unit: "colher de café", name: "canela em pó" },
      { raw: "2 colheres de sopa de castanhas picadinhas", amount: 2, unit: "colheres de sopa", name: "castanhas picadinhas" }
    ],
    steps: [
      "Amasse bem as bananas maduras até virar um purê doce.",
      "Incorpore a pasta de amendoim, a aveia em flocos, as sementes, a canela e as castanhas até formar uma massa bem compacta.",
      "Forre uma forma pequena com papel-manteiga.",
      "Espalhe a mistura pressionando firmemente com o fundo de um copo ou espátula até ficar lisa e com altura uniforme de 1,5 cm.",
      "Asse a 180 °C por aproximadamente 20 minutos até as laterais dourarem.",
      "Deixe esfriar completamente na forma antes de cortar em 8 barrinhas perfeitas."
    ],
    tips: "Embale individualmente em papel-manteiga para levar ao trabalho, faculdade ou passeios ao ar livre."
  },
  {
    id: 20,
    title: "Brigadeiro de cacau com leite em pó",
    yieldCount: 10,
    yieldUnit: "unidades",
    caloriesPerServing: 70,
    prepTimeMinutes: 25,
    category: "Docinhos & Trufas",
    tags: ["Sem Panela", "Fácil Demais", "Pura Cremosite"],
    image: "/src/assets/images/recipe_brigadeiro_leite_po_1790977925002.jpg",
    accentColor: "amber",
    timerMinutes: 20,
    timerLabel: "Tempo de geladeira para firmar a massa",
    ingredients: [
      { raw: "½ xícara de leite em pó integral ou desnatado", amount: 0.5, unit: "xícara", name: "leite em pó" },
      { raw: "2 colheres de sopa de cacau em pó 100%", amount: 2, unit: "colheres de sopa", name: "cacau em pó 100%" },
      { raw: "3 colheres de sopa de água morna ou fria", amount: 3, unit: "colheres de sopa", name: "água (adicionada aos poucos)" },
      { raw: "1 colher de sopa de pasta de amendoim integral", amount: 1, unit: "colher de sopa", name: "pasta de amendoim integral" },
      { raw: "Coco ralado ou cacau em pó para finalizar", amount: 2, unit: "colheres de sopa", name: "cacau ou coco para enrolar" },
      { raw: "Adoçante culinário a gosto, se desejar", amount: 1, unit: "colher de chá", name: "adoçante culinário", isOptional: true }
    ],
    steps: [
      "Em um recipiente, misture o leite em pó e o cacau 100%.",
      "Vá acrescentando a água gota a gota, mexendo vigorosamente com uma colher (parece seco no início, mas emulsione com paciência).",
      "Junte a pasta de amendoim e continue misturando até obter uma massa consistente, brilhante e não grudenta.",
      "Leve à geladeira por cerca de 20 minutos para ganhar corpo.",
      "Unte as mãos com um pingo de água ou manteiga e modele 10 bolinhas.",
      "Passe cada brigadeiro no cacau em pó ou no coco ralado sem açúcar.",
      "Conserve em recipiente fechado na geladeira."
    ],
    tips: "O segredo de ouro dessa receita é colocar a água aos pouquinhos: poucas gotas a mais amolecem a massa."
  }
];
