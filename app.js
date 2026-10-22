/* DONNEES 1 : groupes, niveaux, actes, personnages */
const GROUPS = {
  mero:   { n: "Mérovingiens" },
  caro:   { n: "Pippinides et Carolingiens" },
  eglise: { n: "Église et savoirs" },
  monde:  { n: "Monde extérieur" }
};

const LEVELS = {
  5: { n: "Légendaire", f: 6 },
  4: { n: "Majeur", f: 4 },
  3: { n: "Important", f: 3 },
  2: { n: "Notable", f: 2 },
  1: { n: "Figurant", f: 1 }
};

const ACTS = [
  { id: 1, num: "I", title: "Un vase, un baptême, un royaume", short: "Clovis", a: 481, b: 511, sym: "bee",
    lead: "De Tournai à Paris : un chef franc de quinze ans fait de sa bande un royaume, et du baptême un coup de maître.",
    world: [["476", "Fin de l'Empire romain d'Occident"], ["493", "Théodoric s'installe en Italie"], ["508", "Anastase honore Clovis"]] },
  { id: 2, num: "II", title: "Le partage et la guerre des reines", short: "Les fils de Clovis", a: 511, b: 613, sym: "dagger",
    lead: "Quatre fils, un gâteau, deux reines et beaucoup de poignards. Grégoire de Tours prend des notes.",
    world: [["527", "Justinien devient empereur à Constantinople"], ["590", "Grégoire le Grand devient pape"], ["597", "Augustin débarque en Kent"]] },
  { id: 3, num: "III", title: "Les rois fainéants, enfin presque", short: "Dagobert", a: 613, b: 714, sym: "arch",
    lead: "Dagobert est le dernier roi qui compte. Ensuite, les maires du palais font le travail, et la couronne fait semblant.",
    world: [["622", "L'Hégire, début du calendrier musulman"], ["632", "Mort de Muhammad"], ["711", "Les Omeyyades passent en Hispanie"]] },
  { id: 4, num: "IV", title: "Le marteau et le sacre", short: "Charles Martel", a: 714, b: 768, sym: "hammer",
    lead: "Un fils illégitime s'évade, bat tout le monde, et son fils prend la couronne avec la bénédiction du pape.",
    world: [["750", "Les Abbassides renversent les Omeyyades"], ["756", "Naissance de l'émirat de Cordoue"]] },
  { id: 5, num: "V", title: "Charlemagne, l'empereur très occupé", short: "Charlemagne", a: 768, b: 814, sym: "orb",
    lead: "Quarante-six ans de règne, des guerres chaque été, une couronne impériale à Noël et un éléphant à Aix.",
    world: [["786", "Haroun al-Rachid devient calife"], ["797", "Irène règne seule à Byzance"], ["802", "Irène est renversée"]] }
];

/*
  Champs d'une fiche :
  id, n (nom), g (groupe), lv (1 à 5), sym (emblème), life [naissance, mort] (pour les chevauchements),
  reign [début, fin] (pouvoir), rl (nature du pouvoir), d (dates affichées), role, act,
  q (indice pour « qui est-ce ? »), one (en une phrase), facts [{t, d, leg}], fam {par, sp, ch}, pope
*/
const PEOPLE = [
  /* ===== ACTE I ===== */
  { id: "clovis", n: "Clovis Ier", g: "mero", lv: 5, sym: "crown", life: [466, 511], reign: [481, 511], rl: "roi", d: "v. 466 – 511",
    role: "Roi des Francs", act: 1,
    q: "Roi des Francs baptisé à Reims, vainqueur de Soissons et de Vouillé",
    one: "Il fait d'une bande de guerriers un royaume, et du baptême un coup politique.",
    facts: [
      { t: "Roi à quinze ans", d: "À la mort de son père Childéric en 481, Clovis hérite d'un petit royaume autour de Tournai. Il a environ quinze ans. Il va le faire grossir très vite." },
      { t: "Le vase de Soissons", leg: true, d: "Après la victoire de 486, un soldat fracasse un vase d'église que le roi voulait rendre à l'évêque. Un an plus tard, Clovis lui fend le crâne en lançant : « Souviens-toi du vase de Soissons ». L'histoire vient de Grégoire de Tours, qui écrit environ un siècle plus tard." },
      { t: "Clotilde et le baptême", d: "Il épouse vers 493 la princesse burgonde Clotilde, catholique. Selon Grégoire de Tours, avant la bataille contre les Alamans (Tolbiac), il promet de se convertir si le dieu de Clotilde lui donne la victoire." },
      { t: "« Courbe la tête, fier Sicambre »", leg: true, d: "Au baptême, l'évêque Remi lui aurait dit : « Adore ce que tu as brûlé, brûle ce que tu as adoré ». La date traditionnelle est Noël 496, mais certains historiens proposent plutôt une date autour de 500, voire plus tard." },
      { t: "Le catholique des rois ariens", d: "Les rois wisigoth, burgonde et ostrogoth sont chrétiens ariens. Clovis, lui, est catholique, comme la plupart des Gallo-Romains. Les évêques de Gaule le soutiennent, ce qui l'aide beaucoup à conquérir." },
      { t: "Vouillé, Paris, les honneurs", d: "En 507, il écrase les Wisigoths à Vouillé, près de Poitiers, et Alaric II y meurt. L'empereur d'Orient Anastase lui envoie des honneurs consulaires. Vers 508, il s'installe à Paris. Il meurt en 511 et ses quatre fils se partagent le royaume." }
    ],
    fam: { par: ["Childéric Ier", "Basine"], sp: ["clotilde"], ch: ["thierry1", "clodomir", "childebert1", "clotaire1"] } },

  { id: "clotilde", n: "Clotilde", g: "mero", lv: 3, sym: "ring", life: [475, 545], d: "v. 475 – 545",
    role: "Reine des Francs, burgonde et catholique", act: 1,
    q: "Princesse burgonde et catholique, épouse de Clovis",
    one: "L'épouse qui pousse Clovis vers le baptême.",
    facts: [
      { t: "Une famille qui s'entretue", d: "Selon Grégoire de Tours, son père est tué par son oncle Gondebaud, roi des Burgondes. Elle arrive chez les Francs avec de bonnes raisons de ne pas aimer sa famille." },
      { t: "Le fils qui meurt baptisé", d: "Son premier fils, Ingomer, meurt peu après son baptême. Clovis y voit la preuve que ce dieu ne vaut rien. Elle insiste quand même avec le suivant." },
      { t: "Veuve à Tours", d: "Après 511, elle vit près du tombeau de saint Martin, à Tours. Elle assiste à la guerre entre ses fils, et voit deux de ses petits-fils tués par leurs oncles. Elle meurt vers 545 et sera canonisée." }
    ],
    fam: { par: ["Chilpéric II de Burgondie"], sp: ["clovis"], ch: ["clodomir", "childebert1", "clotaire1"] } },

  { id: "remi", n: "Saint Remi", g: "eglise", lv: 3, sym: "mitre", life: [437, 533], d: "v. 437 – 533",
    role: "Évêque de Reims", act: 1,
    q: "Évêque de Reims qui baptise Clovis",
    one: "Le baptiseur : un évêque très bien placé.",
    facts: [
      { t: "Évêque à vingt-deux ans", d: "Il devient évêque de Reims vers 459, très jeune pour la fonction. Il dirigera le diocèse pendant plus de soixante-dix ans." },
      { t: "Le baptême de Clovis", d: "C'est lui qui baptise Clovis, le plus souvent daté de Noël 496 à Reims. Grégoire de Tours rapporte que plus de trois mille guerriers l'auraient suivi." },
      { t: "La Sainte Ampoule", leg: true, d: "Une légende, écrite au IXe siècle par l'archevêque Hincmar, raconte qu'une colombe aurait apporté l'huile du baptême. Cette huile servira ensuite aux sacres des rois de France à Reims." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "genevieve", n: "Sainte Geneviève", g: "eglise", lv: 2, sym: "shield", life: [423, 502], d: "v. 423 – v. 502",
    role: "Protectrice de Paris", act: 1,
    q: "Sainte qui aurait protégé Paris face à Attila",
    one: "La sainte patronne de Paris.",
    facts: [
      { t: "Paris, Attila et les prières", leg: true, d: "En 451, quand les Huns approchent, elle aurait convaincu les Parisiens de ne pas fuir. Attila a finalement pris une autre route. La tradition lui en attribue le mérite." },
      { t: "Une voisine de Clovis", d: "Elle meurt vers 502. Clovis et Clotilde font bâtir une basilique sur sa colline, où ils seront enterrés comme elle. De là vient la montagne Sainte-Geneviève." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "syagrius", n: "Syagrius", g: "monde", lv: 2, sym: "sword", life: [430, 487], d: "430 – 487",
    role: "Dernier maître romain du nord de la Gaule", act: 1,
    q: "« Dernier Romain des Gaules », vaincu à Soissons",
    one: "Le dernier Romain d'un Empire qui n'existe plus.",
    facts: [
      { t: "Un royaume romain sans Rome", d: "Après 476, Syagrius tient un territoire autour de Soissons. Les chroniqueurs l'appellent « roi des Romains ». Un roi des Romains sans empereur : le titre ne fait plus peur à personne." },
      { t: "Livré par les Wisigoths", d: "Après sa défaite en 486, il se réfugie chez le roi wisigoth Alaric II, qui le livre à Clovis. Il est exécuté en secret." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "alaric2", n: "Alaric II", g: "monde", lv: 2, sym: "crown", life: [466, 507], reign: [484, 507], rl: "roi", d: "v. 466 – 507",
    role: "Roi des Wisigoths", act: 1,
    q: "Roi wisigoth tué à Vouillé en 507",
    one: "Le roi arien qui perd la Gaule en une bataille.",
    facts: [
      { t: "Un roi arien et juriste", d: "Il règne de la Loire à l'Espagne, avec Toulouse pour capitale. En 506, il fait compiler le droit romain pour ses sujets : c'est le Bréviaire d'Alaric." },
      { t: "Mort à Vouillé", d: "En 507, il affronte Clovis près de Poitiers. Il est tué, de la main même de Clovis selon Grégoire de Tours. Les Wisigoths perdent presque toute la Gaule et se replient en Espagne." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "theodoric", n: "Théodoric le Grand", g: "monde", lv: 2, sym: "crown", life: [454, 526], reign: [493, 526], rl: "roi", d: "v. 454 – 526",
    role: "Roi des Ostrogoths, maître de l'Italie", act: 1,
    q: "Roi des Ostrogoths d'Italie, beau-frère de Clovis",
    one: "Le beau-frère qui sait arrêter un beau-frère.",
    facts: [
      { t: "Le beau-frère de Clovis", d: "Il épouse Audéflède, sœur de Clovis, vers 493. Mais quand Clovis attaque les Wisigoths, Théodoric ne reste pas les bras croisés." },
      { t: "Il arrête Clovis en Provence", d: "Après Vouillé, ses troupes défendent Arles et la Provence, et protègent les restes du royaume wisigoth. Clovis ne descend pas plus au sud." }
    ],
    fam: { par: [], sp: ["Audéflède"], ch: [] } },

  { id: "anastase1", n: "Anastase Ier", g: "monde", lv: 1, sym: "crown", life: [431, 518], reign: [491, 518], rl: "empereur", d: "v. 431 – 518",
    role: "Empereur d'Orient", act: 1,
    q: "Empereur d'Orient qui honore Clovis",
    one: "L'empereur qui offre un titre à Clovis.",
    facts: [
      { t: "Des honneurs pour Clovis", d: "En 508, l'empereur de Constantinople envoie à Clovis des insignes de consul. Clovis devient officiellement un notable de l'Empire, ce qui rassure les Gallo-Romains." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "anastase2", n: "Anastase II", g: "eglise", lv: 1, sym: "mitre", life: [496, 498], reign: [496, 498], rl: "pape", pope: true, d: "pape de 496 à 498",
    role: "Pape (496-498)", act: 1,
    q: "Pape au moment du baptême de Clovis",
    one: "Le pape qui félicite Clovis par lettre.",
    facts: [
      { t: "Une lettre à Clovis", d: "Peu après le baptême de Clovis, le pape Anastase II lui écrit pour se réjouir de sa conversion. Rome comprend vite l'intérêt d'avoir un roi catholique puissant en Gaule." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  /* ===== ACTE II ===== */
  { id: "thierry1", n: "Thierry Ier", g: "mero", lv: 2, sym: "crown", life: [485, 534], reign: [511, 534], rl: "roi", d: "v. 485 – 534",
    role: "Roi de Reims (futur royaume d'Austrasie)", act: 2,
    q: "Aîné des fils de Clovis, roi à Reims",
    one: "L'aîné, né avant Clotilde.",
    facts: [
      { t: "Né d'une première compagne", d: "Fils de Clovis et d'une première compagne, avant Clotilde, il reçoit en 511 la part la plus à l'est, avec Reims pour capitale." },
      { t: "Un royaume tourné vers l'est", d: "Son territoire donnera l'Austrasie. Il combat les Thuringiens et, avec son frère Clotaire, conquiert la Thuringe vers 531." }
    ],
    fam: { par: ["clovis"], sp: [], ch: [] } },

  { id: "clodomir", n: "Clodomir", g: "mero", lv: 1, sym: "crown", life: [495, 524], reign: [511, 524], rl: "roi", d: "495 – 524",
    role: "Roi d'Orléans", act: 2,
    q: "Fils de Clovis, roi d'Orléans, mort à Vézeronce",
    one: "Mort jeune, ses fils vont payer.",
    facts: [
      { t: "Mort à Vézeronce, 524", d: "Il meurt en combattant les Burgondes. Ses fils Théodebald et Gunthar sont ensuite tués par leurs oncles Childebert et Clotaire, qui se partagent son royaume. Seul le plus jeune, Clodoald, s'échappe et deviendra saint Cloud." }
    ],
    fam: { par: ["clovis", "clotilde"], sp: [], ch: [] } },

  { id: "childebert1", n: "Childebert Ier", g: "mero", lv: 2, sym: "crown", life: [496, 558], reign: [511, 558], rl: "roi", d: "v. 496 – 558",
    role: "Roi de Paris", act: 2,
    q: "Fils de Clovis, roi de Paris pendant près de cinquante ans",
    one: "Le roi de Paris qui ne laisse que des filles.",
    facts: [
      { t: "Roi de Paris", d: "Il reçoit Paris dans le partage de 511 et la garde presque cinquante ans. Il fonde l'abbaye Saint-Vincent, qui deviendra Saint-Germain-des-Prés." },
      { t: "Un complice pour les neveux", d: "Avec Clotaire, il élimine ses neveux, fils de Clodomir, pour partager leur héritage. Il meurt sans fils en 558 : tout revient à Clotaire." }
    ],
    fam: { par: ["clovis", "clotilde"], sp: [], ch: [] } },

  { id: "clotaire1", n: "Clotaire Ier", g: "mero", lv: 3, sym: "crown", life: [497, 561], reign: [511, 561], rl: "roi", d: "v. 497 – 561",
    role: "Roi des Francs, dernier fils de Clovis", act: 2,
    q: "Dernier fils de Clovis, qui réunifie le royaume en 558",
    one: "Le seul fils de Clovis qui récupère tout le gâteau.",
    facts: [
      { t: "Seul roi en 558", d: "À la mort de Childebert, il récupère Paris et reste seul roi des Francs. Les quatre parts de Clovis sont de nouveau réunies, pour trois ans." },
      { t: "Radegonde, la captive devenue nonne", d: "Après avoir battu les Thuringiens, il ramène la petite Radegonde, qu'il épouse plus tard. Il fait tuer son frère : elle le quitte et fonde un monastère à Poitiers. Les rois mérovingiens pouvaient avoir plusieurs épouses à la fois." },
      { t: "Quatre fils, quatre parts", d: "Il meurt en 561. Ses quatre fils Caribert, Gontran, Chilpéric et Sigebert se partagent le royaume, comme lui-même l'avait fait avec ses frères. La suite sera plus sanglante." }
    ],
    fam: { par: ["clovis", "clotilde"], sp: ["radegonde", "Ingonde", "Arégonde", "Chunsine"], ch: ["caribert1", "gontran", "sigebert1", "chilperic1"] } },

  { id: "radegonde", n: "Radegonde", g: "mero", lv: 2, sym: "ring", life: [520, 587], d: "v. 520 – 587",
    role: "Reine puis religieuse à Poitiers", act: 2,
    q: "Princesse de Thuringe, reine puis fondatrice d'un monastère à Poitiers",
    one: "La reine qui quitte son roi pour fonder un monastère.",
    facts: [
      { t: "Une enfance de captive", d: "Princesse de Thuringe, elle est emmenée enfant chez les Francs après la victoire de 531. Elle reçoit une éducation soignée avant d'être mariée à Clotaire." },
      { t: "Reine qui s'enfuit", d: "Clotaire ayant tué son frère, elle le quitte, devient religieuse et fonde le monastère de la Sainte-Croix à Poitiers. Elle sera canonisée." }
    ],
    fam: { par: [], sp: ["clotaire1"], ch: [] } },

  { id: "caribert1", n: "Caribert Ier", g: "mero", lv: 1, sym: "crown", life: [520, 567], reign: [561, 567], rl: "roi", d: "v. 520 – 567",
    role: "Roi de Paris", act: 2,
    q: "Fils de Clotaire Ier, roi de Paris, père de Bertha de Kent",
    one: "Le roi excommunié pour ses mariages.",
    facts: [
      { t: "Excommunié pour mariage", d: "Il épouse deux sœurs, ce qui lui vaut d'être excommunié par l'évêque de Paris. Sa fille Bertha épousera le roi de Kent." }
    ],
    fam: { par: ["clotaire1", "Ingonde"], sp: [], ch: ["bertha"] } },

  { id: "gontran", n: "Gontran", g: "mero", lv: 2, sym: "crown", life: [532, 592], reign: [561, 592], rl: "roi", d: "v. 532 – 592",
    role: "Roi de Bourgogne", act: 2,
    q: "Roi de Bourgogne surnommé le bon roi, oncle de Childebert II",
    one: "L'oncle qui adopte son neveu.",
    facts: [
      { t: "Le bon roi Gontran", d: "Il passe pour un roi pieux et généreux, même s'il a ses colères. La tradition en a fait le « bon roi », plusieurs siècles avant Dagobert." },
      { t: "L'oncle qui adopte", d: "Sans fils vivant, il adopte son neveu Childebert II en 587 par le traité d'Andelot. À sa mort en 592, Childebert hérite de la Bourgogne." }
    ],
    fam: { par: ["clotaire1", "Ingonde"], sp: [], ch: [] } },

  { id: "sigebert1", n: "Sigebert Ier", g: "mero", lv: 2, sym: "crown", life: [535, 575], reign: [561, 575], rl: "roi", d: "v. 535 – 575",
    role: "Roi d'Austrasie", act: 2,
    q: "Roi d'Austrasie, époux de Brunehaut, assassiné à Vitry",
    one: "L'époux de Brunehaut, assassiné sur ordre de Frédégonde.",
    facts: [
      { t: "Une princesse venue d'Espagne", d: "En 566, il envoie des messagers en Espagne et épouse Brunehaut, fille du roi wisigoth Athanagild. Ses frères épousent des femmes de rang modeste, lui vise plus haut." },
      { t: "Assassiné à Vitry", d: "En 575, alors que ses troupes viennent de le proclamer roi de Neustrie, il est poignardé par deux hommes envoyés par Frédégonde. La guerre des reines commence vraiment." }
    ],
    fam: { par: ["clotaire1", "Ingonde"], sp: ["brunehaut"], ch: ["childebert2"] } },

  { id: "chilperic1", n: "Chilpéric Ier", g: "mero", lv: 2, sym: "crown", life: [539, 584], reign: [561, 584], rl: "roi", d: "v. 539 – 584",
    role: "Roi de Neustrie", act: 2,
    q: "Roi de Neustrie, époux de Galswinthe puis de Frédégonde",
    one: "Le roi poète, trois mariages, une fin mystérieuse.",
    facts: [
      { t: "Un roi qui écrit des vers", d: "Chilpéric compose des poèmes et ajoute des lettres à l'alphabet, selon Grégoire de Tours, qui le déteste. Il l'appelle le « Néron et l'Hérode de notre temps »." },
      { t: "Un mariage de trop", d: "Il épouse Galswinthe, sœur de Brunehaut, puis elle est retrouvée étranglée et il épouse Frédégonde. Lui-même est assassiné en 584 au retour de la chasse, sans que le coupable soit identifié." }
    ],
    fam: { par: ["clotaire1", "Arégonde"], sp: ["Audovère", "galswinthe", "fredegonde"], ch: ["clotaire2"] } },

  { id: "galswinthe", n: "Galswinthe", g: "mero", lv: 1, sym: "ring", life: [540, 568], d: "v. 540 – 568",
    role: "Princesse wisigothe, reine de Neustrie", act: 2,
    q: "Princesse wisigothe étranglée en 568, sœur de Brunehaut",
    one: "Quelques mois de mariage, une fin tragique.",
    facts: [
      { t: "Quelques mois de mariage", d: "Fille du roi wisigoth Athanagild, elle est mariée à Chilpéric vers 567. Elle est retrouvée étranglée dans son lit en 568. Sa sœur Brunehaut réclame vengeance." }
    ],
    fam: { par: ["Athanagild"], sp: ["chilperic1"], ch: [] } },

  { id: "fredegonde", n: "Frédégonde", g: "mero", lv: 3, sym: "ring", life: [545, 597], d: "v. 545 – 597",
    role: "Reine de Neustrie puis régente", act: 2,
    q: "Reine de Neustrie, rivale de Brunehaut",
    one: "La servante devenue reine, rivale de Brunehaut.",
    facts: [
      { t: "De servante à reine", d: "D'origine modeste, elle entre à la cour comme servante, devient la compagne de Chilpéric, puis sa reine en 568." },
      { t: "Les poignards de la guerre", d: "On lui attribue l'assassinat de Sigebert en 575, avec des poignards empoisonnés selon Grégoire de Tours, et celui de plusieurs ennemis. On n'a pas la preuve pour chaque cas, mais l'image est restée." },
      { t: "Régente en 584", d: "À la mort de Chilpéric, elle protège son bébé Clotaire II face à Gontran et à Childebert II. Elle gouverne la Neustrie jusqu'à sa mort en 597. Son fils se vengera de Brunehaut en 613." }
    ],
    fam: { par: [], sp: ["chilperic1"], ch: ["clotaire2"] } },

  { id: "brunehaut", n: "Brunehaut", g: "mero", lv: 4, sym: "ring", life: [543, 613], d: "v. 543 – 613",
    role: "Reine d'Austrasie, régente", act: 2,
    q: "Princesse wisigothe devenue régente d'Austrasie, rivale de Frédégonde",
    one: "La reine qui a tenu quarante ans contre les poignards.",
    facts: [
      { t: "Une princesse venue d'Espagne", d: "Fille du roi wisigoth Athanagild, elle épouse en 566 Sigebert, roi d'Austrasie. Elle abandonne l'arianisme pour devenir catholique, ce qui plaît aux évêques." },
      { t: "Veuve et exilée", d: "Quand Sigebert est assassiné en 575, elle est capturée par Chilpéric, puis exilée à Rouen. Mérovée, fils de Chilpéric, l'y épouse : un mariage scandaleux, vite annulé." },
      { t: "Une régente énergique", d: "Elle gouverne pour son fils Childebert II, puis pour ses petits-fils Théodebert II et Thierry II. Elle correspond avec le pape Grégoire le Grand et aide la mission d'Augustin vers l'Angleterre." },
      { t: "Une fin horrible", d: "En 613, Clotaire II, fils de Frédégonde, la fait arrêter. Elle a environ soixante-dix ans. Elle est jugée puis tuée, attachée à la queue d'un cheval selon Frédégaire. Clotaire II règne alors sur tous les Francs." }
    ],
    fam: { par: ["Athanagild", "Goiswinthe"], sp: ["sigebert1", "Mérovée"], ch: ["childebert2"] } },

  { id: "childebert2", n: "Childebert II", g: "mero", lv: 2, sym: "crown", life: [570, 595], reign: [575, 595], rl: "roi", d: "570 – 595",
    role: "Roi d'Austrasie, héritier de Bourgogne", act: 2,
    q: "Fils de Sigebert et de Brunehaut, roi à cinq ans",
    one: "Un roi à cinq ans, mort à vingt-cinq.",
    facts: [
      { t: "Roi à cinq ans", d: "À la mort de Sigebert en 575, il devient roi d'Austrasie à cinq ans. Sa mère Brunehaut gouverne pour lui." },
      { t: "Mort jeune", d: "Il meurt à vingt-cinq ans, en 595, peut-être empoisonné selon certains auteurs. Ses deux fils lui succèdent sous la tutelle de Brunehaut." }
    ],
    fam: { par: ["sigebert1", "brunehaut"], sp: [], ch: [] } },

  { id: "clotaire2", n: "Clotaire II", g: "mero", lv: 3, sym: "crown", life: [584, 629], reign: [584, 629], rl: "roi", d: "584 – 629",
    role: "Roi de Neustrie puis de tous les Francs", act: 2,
    q: "Fils de Frédégonde, roi de tous les Francs en 613",
    one: "Roi avant de savoir marcher, vainqueur de Brunehaut.",
    facts: [
      { t: "Roi avant d'être grand", d: "Il est proclamé roi de Neustrie bébé, quand son père Chilpéric est assassiné. Il règne en tout quarante-cinq ans, ce qui est long pour un Mérovingien." },
      { t: "Il l'emporte en 613", d: "Avec l'appui de nobles d'Austrasie et de Bourgogne qui détestent Brunehaut, il capture la vieille reine et réunifie tous les royaumes francs." },
      { t: "L'Édit de Paris, 614", d: "Il promet à l'aristocratie et à l'Église de respecter leurs droits et leurs terres. Les grands y gagnent du poids, et les maires du palais en profiteront." }
    ],
    fam: { par: ["chilperic1", "fredegonde"], sp: ["Haldetrude", "Bertrude", "Sichilde"], ch: ["dagobert1"] } },

  { id: "gdt", n: "Grégoire de Tours", g: "eglise", lv: 3, sym: "book", life: [538, 594], d: "v. 538 – 594",
    role: "Évêque de Tours et historien", act: 2,
    q: "Évêque de Tours, auteur de l'Histoire des Francs",
    one: "Notre meilleure source, et il a ses têtes de turc.",
    facts: [
      { t: "L'Histoire des Francs", d: "Son ouvrage, en dix livres, raconte l'époque de Clovis jusqu'à la fin du VIe siècle. Presque tout ce qu'on sait des Mérovingiens vient de lui." },
      { t: "Un témoin pas neutre", d: "Il connaît les rois, qui le supportent mal : Chilpéric le fait juger en 580. Il admire Clovis le catholique, déteste les ariens et trouve Frédégonde effrayante." },
      { t: "Faits et miracles", d: "Il rapporte autant des faits que des miracles. Quand il raconte le vase de Soissons, il écrit environ un siècle après. Les historiens trient." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "gregoire1", n: "Grégoire le Grand", g: "eglise", lv: 3, sym: "mitre", life: [540, 604], reign: [590, 604], rl: "pape", pope: true, d: "v. 540 – 604",
    role: "Pape (590-604)", act: 2,
    q: "Pape qui envoie Augustin en Angleterre et écrit à Brunehaut",
    one: "Le pape qui regarde vers le Nord.",
    facts: [
      { t: "Grégoire le Grand", d: "Moine devenu pape en 590, il réorganise l'Église de Rome, alors que l'Italie est ravagée par la guerre et la peste." },
      { t: "Une lettre à Brunehaut", d: "Il écrit plusieurs fois à la reine Brunehaut pour lui demander d'aider les évêques et de combattre la simonie. Il la félicite aussi de sa piété." },
      { t: "Les Angles ou les anges", leg: true, d: "Selon Bède, il aurait voulu convertir les Angles après avoir vu des enfants angles à Rome : « Non Angli, sed angeli ». En 597, il envoie le moine Augustin en Kent." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "bertha", n: "Bertha de Kent", g: "mero", lv: 2, sym: "ring", life: [565, 601], d: "v. 565 – v. 601",
    role: "Princesse franque, reine de Kent", act: 2,
    q: "Fille de Caribert Ier, épouse du roi de Kent Æthelberht",
    one: "Une Franque qui prépare la conversion de l'Angleterre.",
    facts: [
      { t: "Une Franque en Angleterre", d: "Fille du roi Caribert, elle épouse vers 580 Æthelberht, roi païen de Kent, à condition de pouvoir rester chrétienne. Un évêque franc l'accompagne." },
      { t: "La porte d'Augustin", d: "Quand Augustin arrive en Kent en 597, Bertha a déjà préparé le terrain. Æthelberht se fait baptiser. C'est un des premiers liens solides entre la Gaule et l'Angleterre." }
    ],
    fam: { par: ["caribert1"], sp: ["Æthelberht de Kent"], ch: [] } },

  /* ===== ACTE III ===== */
  { id: "dagobert1", n: "Dagobert Ier", g: "mero", lv: 4, sym: "crown", life: [603, 639], reign: [629, 639], rl: "roi", d: "v. 603 – 639",
    role: "Roi des Francs", act: 3,
    q: "Dernier grand roi mérovingien, ami de saint Éloi",
    one: "Pas si bon que dans la chanson, mais le dernier à vraiment régner.",
    facts: [
      { t: "Roi d'Austrasie, puis de tous", d: "Son père Clotaire II l'envoie en Austrasie dès 623. À la mort de Clotaire en 629, il réunit Neustrie et Bourgogne. Il règne seul sur les Francs jusqu'en 639." },
      { t: "L'orfèvre et le référendaire", d: "Dagobert s'entoure de conseillers : l'orfèvre Éloi, futur évêque de Noyon, et Dadon (saint Ouen). Il fait de Saint-Denis une abbaye riche et prestigieuse." },
      { t: "Défait par Samo", d: "Vers 631, son armée est battue par les Slaves de Samo, un marchand franc devenu chef, à Wogastisburg. Dagobert ne parvient pas à soumettre Samo." },
      { t: "Enterré à Saint-Denis", d: "Il meurt en 639 et repose à Saint-Denis, qui devient peu à peu la nécropole des rois de France. La chanson « Le bon roi Dagobert » date de bien plus tard et ne dit presque rien du vrai roi." }
    ],
    fam: { par: ["clotaire2", "Bertrude"], sp: ["Nanthilde", "Ragnetrude", "Wulfegonde", "Berthilde"], ch: ["sigebert3", "clovis2"] } },

  { id: "eloi", n: "Saint Éloi", g: "eglise", lv: 2, sym: "mitre", life: [588, 660], d: "v. 588 – 660",
    role: "Orfèvre, trésorier, évêque de Noyon", act: 3,
    q: "Orfèvre devenu évêque de Noyon, conseiller de Dagobert",
    one: "L'orfèvre honnête devenu évêque.",
    facts: [
      { t: "Deux trônes pour le prix d'un", d: "Selon sa Vie, le roi lui donne de l'or pour un trône et Éloi en tire deux. Le roi, impressionné par cette honnêteté, le garde auprès de lui." },
      { t: "Orfèvre devenu évêque", d: "Il dirige la frappe de monnaie, puis devient évêque de Noyon vers 641 et évangélise la région. Il sera l'un des saints les plus populaires du Moyen Âge." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "pepinlanden", n: "Pépin de Landen", g: "caro", lv: 2, sym: "sword", life: [580, 640], d: "v. 580 – 640",
    role: "Maire du palais d'Austrasie", act: 3,
    q: "Maire du palais d'Austrasie, grand-père de Pépin de Herstal",
    one: "Le premier maire vraiment puissant, ancêtre des Carolingiens.",
    facts: [
      { t: "Le premier maire puissant", d: "Il est maire du palais d'Austrasie sous Clotaire II et Dagobert. Il se range du côté de Clotaire II contre Brunehaut en 613." },
      { t: "Grand-père des Carolingiens", d: "Sa fille Begga épouse Ansegisel, fils d'Arnoul de Metz. De ce mariage naît Pépin de Herstal, ancêtre direct de Charlemagne." }
    ],
    fam: { par: [], sp: [], ch: ["Begga"] } },

  { id: "arnoul", n: "Arnoul de Metz", g: "caro", lv: 2, sym: "mitre", life: [582, 640], d: "v. 582 – 640",
    role: "Évêque de Metz, ancêtre des Carolingiens", act: 3,
    q: "Évêque de Metz dont le fils épouse la fille de Pépin de Landen",
    one: "L'évêque dont le fils va marier la future dynastie.",
    facts: [
      { t: "Conseiller et évêque", d: "Noble d'Austrasie, il sert Clotaire II puis devient évêque de Metz vers 614. Il se retire ensuite pour finir sa vie en ermite." },
      { t: "Saint et ancêtre", d: "Son fils Ansegisel épouse Begga, fille de Pépin de Landen. Les deux familles fusionnent : de là viendra la dynastie carolingienne, parfois appelée aussi arnulfienne." }
    ],
    fam: { par: [], sp: [], ch: ["Ansegisel"] } },

  { id: "bathilde", n: "Bathilde", g: "mero", lv: 2, sym: "ring", life: [630, 680], d: "v. 630 – 680",
    role: "Esclave anglo-saxonne devenue reine et régente", act: 3,
    q: "Esclave anglo-saxonne devenue reine des Francs",
    one: "De l'esclavage au trône, puis au monastère.",
    facts: [
      { t: "D'esclave à reine", d: "Venue d'Angleterre, elle est achetée comme esclave par un maire du palais, puis épouse le roi Clovis II vers 650." },
      { t: "Régente et sainte", d: "À la mort de Clovis II en 657, elle gouverne pour son fils Clotaire III. On lui attribue l'interdiction de vendre des chrétiens comme esclaves. Elle finit à Chelles, dans un monastère." }
    ],
    fam: { par: [], sp: ["clovis2"], ch: ["Clotaire III"] } },

  { id: "clovis2", n: "Clovis II", g: "mero", lv: 1, sym: "crown", life: [633, 657], reign: [639, 657], rl: "roi", d: "v. 633 – 657",
    role: "Roi de Neustrie et de Bourgogne", act: 3,
    q: "Fils de Dagobert, époux de Bathilde",
    one: "Un roi enfant qui laisse trois fils rois.",
    facts: [
      { t: "Un roi de six ans", d: "Il devient roi de Neustrie et de Bourgogne à la mort de Dagobert, vers l'âge de six ans. Il épouse Bathilde et meurt jeune, en laissant trois fils qui seront rois." }
    ],
    fam: { par: ["dagobert1"], sp: ["bathilde"], ch: [] } },

  { id: "sigebert3", n: "Sigebert III", g: "mero", lv: 1, sym: "crown", life: [630, 656], reign: [634, 656], rl: "roi", d: "v. 630 – 656",
    role: "Roi d'Austrasie", act: 3,
    q: "Fils de Dagobert, roi d'Austrasie à quatre ans",
    one: "Le roi qui laisse faire le maire.",
    facts: [
      { t: "Le maire de trop", d: "Roi d'Austrasie à quatre ans, il laisse les maires du palais gouverner. À sa mort, le maire Grimoald tente de placer son propre fils sur le trône. Ça échoue, mais l'idée est lancée." }
    ],
    fam: { par: ["dagobert1"], sp: [], ch: [] } },

  { id: "pepin2", n: "Pépin de Herstal", g: "caro", lv: 3, sym: "sword", life: [635, 714], reign: [687, 714], rl: "maire", d: "v. 635 – 714",
    role: "Maire du palais de tous les Francs", act: 3,
    q: "Vainqueur de Tertry en 687, père de Charles Martel",
    one: "Le maire qui gouverne comme un roi sans en prendre le titre.",
    facts: [
      { t: "Le vainqueur de Tertry", d: "En 687, à Tertry, il bat les Neustriens. Maire du palais d'Austrasie, il devient aussi le vrai maître de la Neustrie et de la Bourgogne. Les rois restent sur le trône sans pouvoir." },
      { t: "Duc et prince des Francs", d: "Il prend le titre de « duc et prince des Francs ». Il gouverne comme un roi mais garde un Mérovingien sur le trône : la dynastie sacrée est encore trop respectée pour qu'on la remplace." },
      { t: "Deux épouses, deux lignées", d: "Il a une épouse, Plectrude, et une compagne, Alpaïde, mère de Charles Martel. À sa mort en 714, Plectrude veut faire régner ses petits-fils et emprisonne Charles." }
    ],
    fam: { par: ["Ansegisel", "Begga"], sp: ["Plectrude", "Alpaïde"], ch: ["charlesmartel"] } },

  /* ===== ACTE IV ===== */
  { id: "childeric3", n: "Childéric III", g: "mero", lv: 1, sym: "crown", life: [743, 755], reign: [743, 751], rl: "roi", d: "règne 743 – 751",
    role: "Dernier roi mérovingien", act: 4,
    q: "Dernier roi mérovingien, déposé en 751",
    one: "Le dernier roi aux longs cheveux.",
    facts: [
      { t: "Le dernier de la dynastie", d: "Placé sur le trône en 743 par Carloman et Pépin, il est déposé en 751. On lui coupe les cheveux longs, signe de la royauté mérovingienne, puis on l'enferme dans un monastère." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "charlesmartel", n: "Charles Martel", g: "caro", lv: 4, sym: "hammer", life: [688, 741], reign: [718, 741], rl: "maire", d: "v. 688 – 741",
    role: "Maire du palais", act: 4,
    q: "Maire du palais vainqueur à Poitiers en 732",
    one: "Le marteau des Francs, sans couronne.",
    facts: [
      { t: "Évadé et vainqueur", d: "Emprisonné par Plectrude après la mort de Pépin de Herstal, il s'évade en 715. Il bat ses rivaux à Vincy en 717 et à Soissons en 718, puis prend la tête des Francs." },
      { t: "Poitiers, octobre 732", d: "Il arrête à Poitiers une armée omeyyade dirigée par Abd al-Rahman, qui est tué. Les historiens du XIXe siècle ont grossi cette bataille : c'était d'abord un raid repoussé, mais une victoire utile." },
      { t: "Martel, le marteau", d: "Ce surnom n'apparaît que plus tard, dans des textes du IXe siècle. Il reste associé à sa dureté et à son usage des biens d'Église pour payer ses guerriers." },
      { t: "Roi sans couronne", d: "Après la mort du roi Thierry IV en 737, il ne désigne pas de successeur et gouverne seul jusqu'en 741. Son fils osera, dix ans plus tard, ce qu'il n'a pas fait." }
    ],
    fam: { par: ["pepin2", "Alpaïde"], sp: ["Rotrude", "Swanachilde"], ch: ["pepin3", "carloman_maire", "Grifon"] } },

  { id: "eudes", n: "Eudes d'Aquitaine", g: "monde", lv: 2, sym: "shield", life: [670, 735], reign: [700, 735], rl: "duc", d: "v. 670 – 735",
    role: "Duc d'Aquitaine", act: 4,
    q: "Duc d'Aquitaine vainqueur à Toulouse en 721",
    one: "Le duc qui gagne à Toulouse et perd à Bordeaux.",
    facts: [
      { t: "Vainqueur à Toulouse", d: "En 721, il bat une armée musulmane devant Toulouse. C'est une victoire plus importante que Poitiers sur le moment, mais moins célèbre." },
      { t: "Il appelle les Francs", d: "Vaincu à Bordeaux en 732, il demande l'aide de son vieux rival Charles Martel. Il garde son duché, mais l'Aquitaine passe peu à peu dans l'orbite des Francs." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "abdalrahman", n: "Abd al-Rahman", g: "monde", lv: 1, sym: "sword", life: [700, 732], d: "mort en 732",
    role: "Émir d'al-Andalus", act: 4,
    q: "Émir d'al-Andalus tué à Poitiers en 732",
    one: "Le chef du raid arrêté à Poitiers.",
    facts: [
      { t: "Chef du raid de 732", d: "Gouverneur d'al-Andalus au nom du califat omeyyade, il mène une expédition en Aquitaine. Il est tué à Poitiers, ce qui provoque la retraite de son armée." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "carloman_maire", n: "Carloman, maire", g: "caro", lv: 2, sym: "sword", life: [706, 754], reign: [741, 747], rl: "maire", d: "v. 706 – 754",
    role: "Maire du palais d'Austrasie, puis moine", act: 4,
    q: "Frère de Pépin le Bref, qui abdique pour devenir moine au Mont-Cassin",
    one: "Le frère qui laisse la place et finit moine.",
    facts: [
      { t: "Le frère qui abdique", d: "Maire du palais d'Austrasie avec son frère Pépin à la mort de Charles Martel, il renonce au pouvoir en 747 et part pour l'Italie." },
      { t: "Moine au Mont-Cassin", d: "Il entre au monastère du Mont-Cassin, fondé par saint Benoît. En 754, il tente de dissuader Pépin d'aider le pape contre les Lombards. Pépin l'enferme à Vienne, où il meurt." }
    ],
    fam: { par: ["charlesmartel", "Rotrude"], sp: [], ch: [] } },

  { id: "pepin3", n: "Pépin le Bref", g: "caro", lv: 4, sym: "crown", life: [714, 768], reign: [741, 768], rl: "maire, puis roi dès 751", d: "714 – 768",
    role: "Maire du palais puis premier roi carolingien", act: 4,
    q: "Premier roi carolingien, sacré en 751 puis en 754",
    one: "Celui qui prend la couronne avec la bénédiction du pape.",
    facts: [
      { t: "La question au pape Zacharie", d: "Vers 750, Pépin envoie des messagers à Rome : faut-il laisser le titre de roi à celui qui n'a plus le pouvoir ? Le pape répond qu'il vaut mieux appeler roi celui qui détient le pouvoir. En 751, Childéric III est tonsuré et Pépin est élu puis sacré." },
      { t: "Le sacre de Saint-Denis, 754", d: "En 754, le pape Étienne II vient en Francie, à Saint-Denis, et sacre à nouveau Pépin, Bertrade et leurs fils. Pépin promet de défendre Rome contre les Lombards et reçoit le titre de patrice des Romains." },
      { t: "La Donation de Pépin", d: "Il bat deux fois le roi lombard Aistolf, en 754 et en 756, et offre au pape des villes d'Italie centrale, dont Ravenne. C'est le point de départ de l'État pontifical." },
      { t: "Petit mais costaud", leg: true, d: "Notker le Bègue raconte, au IXe siècle, que Pépin aurait tué un lion et un taureau devant ses nobles qui se moquaient de sa petite taille. C'est probablement une légende, mais le surnom « le Bref » est resté." }
    ],
    fam: { par: ["charlesmartel", "Rotrude"], sp: ["bertrade"], ch: ["charlemagne", "carloman_roi"] } },

  { id: "bertrade", n: "Bertrade de Laon", g: "caro", lv: 2, sym: "ring", life: [725, 783], d: "v. 725 – 783",
    role: "Reine des Francs, mère de Charlemagne", act: 4,
    q: "Épouse de Pépin le Bref, mère de Charlemagne",
    one: "La mère de Charlemagne, entremetteuse en chef.",
    facts: [
      { t: "Berthe au grand pied", leg: true, d: "Un roman du XIIIe siècle lui prête un pied plus grand que l'autre et raconte qu'on avait tenté de la remplacer par une fausse épouse. Rien n'est historique, mais le surnom est resté." },
      { t: "Une mère qui négocie", d: "Après la mort de Pépin, elle tente de réconcilier ses fils. En 770, elle négocie un mariage entre Charles et une fille du roi lombard Didier." }
    ],
    fam: { par: ["Caribert de Laon"], sp: ["pepin3"], ch: ["charlemagne", "carloman_roi"] } },

  { id: "boniface", n: "Saint Boniface", g: "eglise", lv: 2, sym: "mitre", life: [675, 754], d: "v. 675 – 754",
    role: "Évêque missionnaire, apôtre de la Germanie", act: 4,
    q: "Moine anglo-saxon, évêque missionnaire en Germanie",
    one: "L'Anglo-Saxon qui évangélise la Germanie et réforme l'Église franque.",
    facts: [
      { t: "Un moine anglo-saxon en Germanie", d: "Né en Angleterre, il évangélise la Germanie avec la protection de Charles Martel. Il fonde des évêchés et l'abbaye de Fulda." },
      { t: "Le chêne de Geismar", leg: true, d: "Selon sa biographie, il abat un chêne dédié à Thor pour montrer la faiblesse des dieux païens. Il est tué en 754 en Frise, avec ses compagnons." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "gregoire3", n: "Grégoire III", g: "eglise", lv: 1, sym: "mitre", life: [731, 741], reign: [731, 741], rl: "pape", pope: true, d: "pape de 731 à 741",
    role: "Pape (731-741)", act: 4,
    q: "Pape qui demande l'aide de Charles Martel contre les Lombards",
    one: "Le pape qui écrit à Charles Martel sans réponse.",
    facts: [
      { t: "Il appelle Charles Martel", d: "Menacé par le roi lombard Liutprand, il envoie des messages à Charles Martel vers 739-740 pour lui demander de l'aide. Charles, allié du roi lombard, ne bouge pas." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "zacharie", n: "Zacharie", g: "eglise", lv: 2, sym: "mitre", life: [679, 752], reign: [741, 752], rl: "pape", pope: true, d: "v. 679 – 752",
    role: "Pape (741-752)", act: 4,
    q: "Pape qui répond à Pépin en 750-751",
    one: "Le pape qui dit que la couronne va à celui qui a le pouvoir.",
    facts: [
      { t: "Le pape qui répond à Pépin", d: "Consulté par Pépin vers 750, il répond que le titre de roi doit revenir à celui qui exerce le pouvoir. Cela aide Pépin à justifier sa prise de couronne." },
      { t: "Un pape d'origine grecque", d: "Il est d'origine grecque, comme plusieurs papes de cette époque, et reste officiellement sujet de l'empereur de Constantinople. Les liens entre Rome et Byzance s'effilochent peu à peu." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "etienne2", n: "Étienne II", g: "eglise", lv: 3, sym: "mitre", life: [715, 757], reign: [752, 757], rl: "pape", pope: true, d: "v. 715 – 757",
    role: "Pape (752-757), parfois appelé Étienne III", act: 4,
    q: "Pape qui franchit les Alpes pour sacrer Pépin à Saint-Denis",
    one: "Le pape qui vient chercher une armée en Francie.",
    facts: [
      { t: "Le pape qui franchit les Alpes", d: "Menacé par les Lombards, il traverse les Alpes en hiver 753-754 pour rencontrer Pépin. C'est un événement rare : un pape qui vient lui-même chercher du secours chez les Francs." },
      { t: "Le sacre de Saint-Denis", d: "Le 28 juillet 754, il consacre Pépin et ses fils. Il interdit aussi aux Francs de choisir un roi hors de la famille de Pépin, sous peine d'excommunication." },
      { t: "Un État pour la papauté", d: "Après la Donation de Pépin (756), il reçoit les clés de villes italiennes. Rome n'est plus seulement un évêché : c'est le début des États pontificaux." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  /* ===== ACTE V ===== */
  { id: "adrien1", n: "Adrien Ier", g: "eglise", lv: 2, sym: "mitre", life: [700, 795], reign: [772, 795], rl: "pape", pope: true, d: "v. 700 – 795",
    role: "Pape (772-795)", act: 5,
    q: "Pape qui appelle Charlemagne contre les Lombards",
    one: "Le pape qui appelle Charlemagne au secours.",
    facts: [
      { t: "Il appelle Charlemagne", d: "Menacé par le roi lombard Didier, il demande en 773 l'aide de Charlemagne, qui franchit les Alpes. Didier est renversé en 774." },
      { t: "Un ami fidèle", d: "Il règne vingt-trois ans et entretient une correspondance suivie avec Charlemagne. À sa mort en 795, Charlemagne fait envoyer à Rome une épitaphe en marbre pour son tombeau." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "charlemagne", n: "Charlemagne", g: "caro", lv: 5, sym: "orb", life: [747, 814], reign: [768, 814], rl: "roi, empereur dès 800", d: "v. 747 – 814",
    role: "Roi des Francs, roi des Lombards, empereur", act: 5,
    q: "Roi des Francs devenu empereur à Noël 800",
    one: "Il rassemble l'Europe occidentale en un grand ensemble, sans en faire un seul pays.",
    facts: [
      { t: "Un roi toujours en campagne", d: "Charles règne quarante-six ans et mène plus de cinquante expéditions, surtout en Saxe, en Italie, en Espagne et contre les Avars. Il passe presque chaque été à la guerre." },
      { t: "Roi des Lombards, 774", d: "À l'appel du pape Adrien Ier, il assiège Pavie pendant des mois et renverse Didier, dont il avait épousé la fille avant de la répudier. Il prend le titre de roi des Lombards." },
      { t: "Roncevaux, 778", d: "Au retour d'Espagne, l'arrière-garde est attaquée dans les Pyrénées par des Basques. Éginhard cite parmi les morts le comte Roland, préfet de la marche de Bretagne. La Chanson de Roland, écrite plus de trois siècles plus tard, en fait une bataille contre les Sarrasins." },
      { t: "Verden, 782", d: "Après un soulèvement saxon, les Annales royales franques rapportent l'exécution de 4 500 Saxons à Verden. Le chiffre est discuté, mais la guerre de Saxe, de 772 à 804, reste la plus dure de son règne." },
      { t: "Empereur à Noël 800", d: "À Rome, le pape Léon III le couronne dans la basilique Saint-Pierre. Selon Éginhard, Charles aurait dit qu'il ne serait pas entré à l'église ce jour-là s'il avait su ce qui l'attendait. On discute encore de qui a eu l'idée." },
      { t: "Aix, l'école et l'éléphant", d: "Il installe sa cour à Aix-la-Chapelle, fait venir des savants comme Alcuin, encourage une écriture lisible (la minuscule caroline) et envoie des missi dominici contrôler les comtes. En 802, un éléphant nommé Abul-Abbas, offert par le calife Haroun al-Rachid, arrive à Aix." }
    ],
    fam: { par: ["pepin3", "bertrade"], sp: ["Himiltrude", "La fille de Didier", "hildegarde", "Fastrade", "Liutgarde"], ch: ["Pépin le Bossu", "Charles le Jeune", "Pépin d'Italie", "louis"] } },

  { id: "carloman_roi", n: "Carloman Ier", g: "caro", lv: 1, sym: "crown", life: [751, 771], reign: [768, 771], rl: "roi", d: "751 – 771",
    role: "Roi des Francs avec son frère", act: 5,
    q: "Frère de Charlemagne, roi de 768 à 771",
    one: "Le frère de trop, mort à vingt ans.",
    facts: [
      { t: "Le frère de trop", d: "Roi en 768 avec Charles, il dirige un royaume au nord et à l'est, mais les deux frères ne s'entendent pas. Il meurt en 771 de maladie, ce qui laisse Charles seul maître." }
    ],
    fam: { par: ["pepin3", "bertrade"], sp: [], ch: [] } },

  { id: "didier", n: "Didier", g: "monde", lv: 2, sym: "crown", life: [757, 774], reign: [757, 774], rl: "roi", d: "règne 757 – 774",
    role: "Dernier roi des Lombards", act: 5,
    q: "Dernier roi lombard, beau-père éphémère de Charlemagne",
    one: "Le beau-père répudié qui perd son royaume.",
    facts: [
      { t: "Beau-père puis ennemi", d: "Il marie sa fille à Charlemagne en 770, sur l'initiative de Bertrade. Un an plus tard, Charles la répudie, ce qui est une grave insulte." },
      { t: "Vaincu à Pavie", d: "Après un siège de plusieurs mois, il se rend en 774. Il est envoyé dans un monastère en Francie, et le royaume lombard devient un royaume carolingien." }
    ],
    fam: { par: [], sp: [], ch: ["La fille de Didier"] } },

  { id: "hildegarde", n: "Hildegarde", g: "caro", lv: 2, sym: "ring", life: [758, 783], d: "758 – 783",
    role: "Reine des Francs, épouse de Charlemagne", act: 5,
    q: "Épouse de Charlemagne, mère de Louis le Pieux",
    one: "La reine qui donne la lignée à Charlemagne.",
    facts: [
      { t: "Épouse à treize ans", d: "Elle épouse Charlemagne en 771, à treize ans environ, après la répudiation de la fille de Didier. Elle est d'origine alamane." },
      { t: "Mère de neuf enfants", d: "Elle meurt à vingt-cinq ans, en 783, après plusieurs enfants dont Louis le Pieux. C'est elle qui assure la lignée de Charlemagne." }
    ],
    fam: { par: [], sp: ["charlemagne"], ch: ["louis"] } },

  { id: "widukind", n: "Widukind", g: "monde", lv: 2, sym: "sword", life: [772, 785], d: "chef saxon, actif de 777 à 785",
    role: "Chef de la résistance saxonne", act: 5,
    q: "Chef saxon qui résiste à Charlemagne et se fait baptiser en 785",
    one: "L'ennemi saxon qui finit baptisé.",
    facts: [
      { t: "L'ennemi insaisissable", d: "Chef saxon, il mène plusieurs révoltes contre Charlemagne et se réfugie chez les Danois quand les Francs reviennent." },
      { t: "Baptisé en 785", d: "Il accepte de se rendre et se fait baptiser, en présence de Charlemagne qui serait son parrain selon la tradition. Après lui, la résistance saxonne continue près de vingt ans." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "roland", n: "Roland", g: "caro", lv: 2, sym: "sword", life: [750, 778], d: "mort en 778",
    role: "Préfet de la marche de Bretagne", act: 5,
    q: "Comte mort à Roncevaux en 778, héros d'un poème célèbre",
    one: "Une ligne dans Éginhard, un poème de légende.",
    facts: [
      { t: "Une ligne dans Éginhard", d: "Le biographe de Charlemagne le cite en une phrase parmi les morts de Roncevaux : Roland, préfet de la marche de Bretagne. Toute la légende vient de là." },
      { t: "Le héros d'un poème", d: "La Chanson de Roland (vers 1100) en fait le neveu de Charlemagne et un chevalier face aux Sarrasins. Aucun de ces détails n'est dans les sources du VIIIe siècle." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "leon3", n: "Léon III", g: "eglise", lv: 3, sym: "mitre", life: [750, 816], reign: [795, 816], rl: "pape", pope: true, d: "v. 750 – 816",
    role: "Pape (795-816)", act: 5,
    q: "Pape qui couronne Charlemagne empereur à Noël 800",
    one: "Le pape qui pose la couronne sur Charlemagne.",
    facts: [
      { t: "Attaqué en pleine rue", d: "En 799, il est agressé à Rome par des opposants qui tentent de l'écarter. Il se réfugie en Francie et obtient la protection de Charlemagne." },
      { t: "Le couronnement", d: "Le 25 décembre 800, il couronne Charlemagne empereur à Saint-Pierre. Les Romains l'acclament. C'est le pape qui pose lui-même la couronne." },
      { t: "Qui est au-dessus de qui ?", d: "En couronnant l'empereur, le pape se pose en celui qui donne la couronne. Charlemagne se voit plutôt en défenseur de l'Église. Cette tension traversera tout le Moyen Âge." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "alcuin", n: "Alcuin", g: "eglise", lv: 3, sym: "book", life: [735, 804], d: "v. 735 – 804",
    role: "Savant anglo-saxon, conseiller de Charlemagne", act: 5,
    q: "Savant anglo-saxon venu d'York, conseiller de Charlemagne",
    one: "Le professeur d'York devenu ministre de l'éducation avant l'heure.",
    facts: [
      { t: "Le prof d'York", d: "Né en Angleterre, il dirige l'école d'York. Il rencontre Charlemagne en 781 à Parme et accepte de rejoindre sa cour." },
      { t: "L'école palatine", d: "À Aix, il enseigne la grammaire, la rhétorique et les arts libéraux à la famille royale et aux jeunes nobles. Il améliore aussi les livres liturgiques." },
      { t: "Abbé de Saint-Martin de Tours", d: "En 796, Charlemagne lui confie l'abbaye Saint-Martin de Tours, qui devient un grand centre d'écriture. La minuscule caroline s'y développe." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "eginhard", n: "Éginhard", g: "caro", lv: 2, sym: "book", life: [770, 840], d: "v. 770 – 840",
    role: "Biographe de Charlemagne", act: 5,
    q: "Auteur de la Vie de Charlemagne",
    one: "Le biographe qui nous dit tout, ou presque.",
    facts: [
      { t: "La Vie de Charlemagne", d: "Élevé à la cour, il écrit après 814 la biographie du roi sur le modèle de celles des empereurs romains. C'est la source la plus célèbre sur sa vie privée." },
      { t: "Ce qu'il dit du roi", d: "Il le décrit grand, bon nageur, amateur de rôti et peu enclin à écouter les médecins. Il raconte aussi que Charles essayait d'apprendre à écrire la nuit avec des tablettes, sans grand succès." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "haroun", n: "Haroun al-Rachid", g: "monde", lv: 2, sym: "crown", life: [766, 809], reign: [786, 809], rl: "calife", d: "v. 766 – 809",
    role: "Calife abbasside de Bagdad", act: 5,
    q: "Calife abbasside de Bagdad qui envoie un éléphant à Charlemagne",
    one: "Le calife des Mille et Une Nuits, ami d'un roi franc.",
    facts: [
      { t: "Le calife des Mille et Une Nuits", d: "Il règne à Bagdad de 786 à 809, à l'époque où la ville devient un grand centre de savoir. Il apparaît dans plusieurs contes des Mille et Une Nuits." },
      { t: "Cadeaux diplomatiques", d: "Les Annales royales franques disent qu'il envoie à Charlemagne un éléphant, une horloge d'eau et d'autres cadeaux. Des historiens y voient des échanges entre deux puissances qui ont des rivaux communs." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "irene", n: "Irène d'Athènes", g: "monde", lv: 2, sym: "orb", life: [752, 803], reign: [797, 802], rl: "impératrice", d: "v. 752 – 803",
    role: "Impératrice byzantine", act: 5,
    q: "Impératrice byzantine au moment du couronnement de Charlemagne",
    one: "L'impératrice dont le trône est jugé vacant à Rome.",
    facts: [
      { t: "Régente puis impératrice", d: "Régente pour son fils Constantin VI à partir de 780, elle le fait aveugler en 797 et règne seule. Elle est la première femme à gouverner l'Empire en son nom propre." },
      { t: "Un trône « vacant »", d: "À Rome, certains estiment que le trône impérial est vacant puisqu'une femme règne. Des historiens y voient une des raisons du couronnement de Charlemagne en 800. Irène est renversée en 802." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "abulabbas", n: "Abul-Abbas", g: "monde", lv: 1, sym: "elephant", life: [800, 810], d: "à Aix de 802 à 810",
    role: "Éléphant diplomatique", act: 5,
    q: "Éléphant offert à Charlemagne par Haroun al-Rachid",
    one: "Le seul éléphant de la cour carolingienne.",
    facts: [
      { t: "Un éléphant à Aix", d: "Offert par Haroun al-Rachid, il arrive en 802 après un long voyage qui passe par l'Italie et les Alpes. Il accompagne Charlemagne jusqu'en 810, où il meurt probablement lors d'une campagne contre les Danois." }
    ],
    fam: { par: [], sp: [], ch: [] } },

  { id: "louis", n: "Louis le Pieux", g: "caro", lv: 2, sym: "orb", life: [778, 840], reign: [814, 840], rl: "empereur", d: "778 – 840",
    role: "Empereur (814-840)", act: 5,
    q: "Fils de Charlemagne, seul héritier, empereur de 814 à 840",
    one: "Le seul fils qui survit à son père.",
    facts: [
      { t: "Roi d'Aquitaine à trois ans", d: "Né en 778, il reçoit le royaume d'Aquitaine en 781, tout petit. Il grandit surtout en Aquitaine." },
      { t: "Le seul héritier", d: "Ses frères aînés meurent avant leur père. En 813, Charlemagne le fait couronner co-empereur à Aix. Louis règne de 814 à 840. À sa mort, ses fils se disputeront l'Empire : rendez-vous au traité de Verdun, en 843." }
    ],
    fam: { par: ["charlemagne", "hildegarde"], sp: ["Ermengarde", "Judith"], ch: ["Lothaire", "Louis le Germanique", "Charles le Chauve"] } }
];

/* Rois sans pouvoir : barres sans fiche pour la frise */
const GEXTRA = [
  { id: "x_clotaire3", n: "Clotaire III", g: "mero", reign: [657, 673], life: [657, 673], rl: "roi", d: "règne 657 – 673" },
  { id: "x_thierry3", n: "Thierry III", g: "mero", reign: [673, 691], life: [673, 691], rl: "roi", d: "règne 673 – 691" },
  { id: "x_clovis4", n: "Clovis IV", g: "mero", reign: [691, 695], life: [691, 695], rl: "roi", d: "règne 691 – 695" },
  { id: "x_childebert3", n: "Childebert III", g: "mero", reign: [695, 711], life: [695, 711], rl: "roi", d: "règne 695 – 711" },
  { id: "x_dagobert3", n: "Dagobert III", g: "mero", reign: [711, 715], life: [711, 715], rl: "roi", d: "règne 711 – 715" },
  { id: "x_chilperic2", n: "Chilpéric II", g: "mero", reign: [715, 721], life: [715, 721], rl: "roi", d: "règne 715 – 721" },
  { id: "x_thierry4", n: "Thierry IV", g: "mero", reign: [721, 737], life: [721, 737], rl: "roi", d: "règne 721 – 737" }
];

/* DONNEES 2 : événements, mariages, récits, dialogues, quiz, atlas */

/* y : année, ap : date approximative, pap : épisode papauté/Francs, w : événement du monde, nop : pas de question « qui est pape » */
const EVENTS = [
  { id: "e476", y: 476, t: "Fin de l'Empire romain d'Occident", d: "Romulus Augustule est déposé par Odoacre. Plus d'empereur à l'ouest.", act: 1, w: true },
  { id: "e481", y: 481, t: "Clovis devient roi à Tournai", d: "Il succède à son père Childéric. Il a environ quinze ans.", act: 1 },
  { id: "e486", y: 486, t: "Victoire de Clovis à Soissons", d: "Syagrius est battu. Naissance de la légende du vase de Soissons.", act: 1 },
  { id: "e493", y: 493, ap: true, t: "Mariage de Clovis et Clotilde", d: "Une princesse burgonde et catholique épouse le roi franc.", act: 1 },
  { id: "e496", y: 496, ap: true, t: "Baptême de Clovis à Reims", d: "Date traditionnelle : Noël 496, par l'évêque Remi. Les historiens discutent de la date exacte.", act: 1, pap: true, nop: true },
  { id: "e507", y: 507, t: "Bataille de Vouillé", d: "Clovis bat les Wisigoths. Alaric II est tué.", act: 1 },
  { id: "e508", y: 508, ap: true, t: "Paris devient la capitale de Clovis", d: "Il reçoit aussi des honneurs consulaires de l'empereur Anastase.", act: 1 },
  { id: "e511", y: 511, t: "Mort de Clovis, premier partage", d: "Ses quatre fils se partagent le royaume.", act: 1 },
  { id: "e534", y: 534, t: "Conquête de la Burgondie", d: "Les fils de Clovis mettent fin au royaume burgonde.", act: 2 },
  { id: "e558", y: 558, t: "Clotaire Ier réunifie le royaume", d: "Il reste seul roi après la mort de Childebert Ier.", act: 2 },
  { id: "e561", y: 561, t: "Mort de Clotaire Ier, nouveau partage", d: "Ses quatre fils : Caribert, Gontran, Chilpéric, Sigebert.", act: 2 },
  { id: "e568", y: 568, t: "Galswinthe est retrouvée étranglée", d: "Chilpéric épouse ensuite Frédégonde. Brunehaut réclame vengeance.", act: 2 },
  { id: "e575", y: 575, t: "Assassinat de Sigebert Ier à Vitry", d: "Frédégonde est soupçonnée. Brunehaut protège son fils Childebert II.", act: 2 },
  { id: "e584", y: 584, t: "Assassinat de Chilpéric Ier", d: "Au retour de la chasse. Frédégonde devient régente pour Clotaire II.", act: 2 },
  { id: "e587", y: 587, t: "Traité d'Andelot", d: "Gontran adopte Childebert II comme héritier.", act: 2 },
  { id: "e597", y: 597, t: "Augustin débarque en Kent", d: "Envoyé par Grégoire le Grand, avec l'aide des rois francs.", act: 2, pap: true, w: true },
  { id: "e613", y: 613, t: "Mort de Brunehaut, Clotaire II seul roi", d: "Le fils de Frédégonde règne sur tous les Francs.", act: 2 },
  { id: "e614", y: 614, t: "Édit de Paris", d: "Clotaire II promet de respecter les droits de l'aristocratie et de l'Église.", act: 3 },
  { id: "e622", y: 622, t: "L'Hégire", d: "Muhammad quitte La Mecque pour Médine : début du calendrier musulman.", act: 3, w: true },
  { id: "e629", y: 629, t: "Dagobert Ier, roi de tous les Francs", d: "Il réunit Neustrie et Bourgogne à la mort de son père.", act: 3 },
  { id: "e639", y: 639, t: "Mort de Dagobert Ier, enterré à Saint-Denis", d: "Les rois qui suivent sont souvent des enfants.", act: 3 },
  { id: "e687", y: 687, t: "Bataille de Tertry", d: "Pépin de Herstal, maire d'Austrasie, domine toute la Francie.", act: 3 },
  { id: "e711", y: 711, t: "Les Omeyyades passent en Hispanie", d: "Les Wisigoths sont battus, la péninsule ibérique passe peu à peu sous domination musulmane.", act: 3, w: true },
  { id: "e714", y: 714, t: "Mort de Pépin de Herstal", d: "Plectrude emprisonne Charles, fils de la compagne Alpaïde.", act: 3 },
  { id: "e732", y: 732, t: "Bataille de Poitiers", d: "Charles Martel arrête un raid venu d'al-Andalus. Abd al-Rahman est tué.", act: 4 },
  { id: "e737", y: 737, t: "Début de l'interrègne", d: "Après la mort de Thierry IV, Charles Martel ne désigne pas de roi.", act: 4 },
  { id: "e739", y: 739, ap: true, t: "Grégoire III appelle Charles Martel", d: "Le pape demande de l'aide contre les Lombards. Charles refuse de s'engager.", act: 4, pap: true },
  { id: "e741", y: 741, t: "Mort de Charles Martel", d: "Ses fils Pépin et Carloman reprennent le pouvoir.", act: 4 },
  { id: "e750", y: 750, t: "Les Abbassides renversent les Omeyyades", d: "Le centre du califat se déplace vers Bagdad.", act: 4, w: true },
  { id: "e751", y: 751, t: "Pépin le Bref devient roi", d: "Childéric III est tonsuré. Fin des Mérovingiens.", act: 4, pap: true },
  { id: "e754", y: 754, t: "Sacre de Pépin à Saint-Denis", d: "Le pape Étienne II sacre Pépin et ses fils.", act: 4, pap: true },
  { id: "e756", y: 756, t: "Donation de Pépin", d: "Des villes d'Italie sont offertes au pape : début des États pontificaux.", act: 4, pap: true },
  { id: "e768", y: 768, t: "Mort de Pépin, avènement de Charles et Carloman", d: "Le royaume est partagé entre deux frères.", act: 5 },
  { id: "e771", y: 771, t: "Mort de Carloman, Charles seul roi", d: "Charles répudie la fille de Didier et épouse Hildegarde.", act: 5 },
  { id: "e774", y: 774, t: "Prise de Pavie, Charles roi des Lombards", d: "Didier est renversé à l'appel du pape Adrien Ier.", act: 5, pap: true },
  { id: "e778", y: 778, t: "Embuscade de Roncevaux", d: "Roland est tué par des Basques au retour d'Espagne.", act: 5 },
  { id: "e782", y: 782, t: "Massacre de Verden", d: "4 500 Saxons exécutés selon les Annales royales franques.", act: 5 },
  { id: "e800", y: 800, t: "Charlemagne couronné empereur à Rome", d: "Le pape Léon III lui pose la couronne à Noël.", act: 5, pap: true },
  { id: "e802", y: 802, t: "L'éléphant Abul-Abbas arrive à Aix", d: "Cadeau du calife Haroun al-Rachid.", act: 5 },
  { id: "e814", y: 814, t: "Mort de Charlemagne", d: "Louis le Pieux est seul héritier.", act: 5 }
];

/* ordre des événements proposés pour la frise de chaque acte */
const FRISE = {
  1: ["e476", "e481", "e486", "e493", "e496", "e507", "e508", "e511"],
  2: ["e511", "e534", "e558", "e561", "e575", "e584", "e587", "e613"],
  3: ["e613", "e614", "e622", "e629", "e639", "e687", "e711", "e714"],
  4: ["e714", "e732", "e737", "e741", "e750", "e751", "e754", "e756"],
  5: ["e768", "e771", "e774", "e778", "e782", "e800", "e802", "e814"]
};

/* [a, b, note, étranger] : a ou b peuvent être un id de fiche ou un nom */
const MARR = [
  ["clovis", "clotilde", "Vers 493. Une princesse burgonde et catholique, qui pousse son mari vers le baptême.", false],
  ["theodoric", "Audéflède", "Vers 493. La sœur de Clovis épouse le roi des Ostrogoths : une alliance entre rois barbares.", true],
  ["clotaire1", "radegonde", "Une princesse de Thuringe capturée enfant, qui quittera son mari pour fonder un monastère.", true],
  ["sigebert1", "brunehaut", "En 566. Une princesse wisigothe, fille du roi Athanagild. Elle devient catholique.", true],
  ["chilperic1", "galswinthe", "Vers 567. La sœur de Brunehaut : un mariage qui finit très mal en 568.", true],
  ["chilperic1", "fredegonde", "En 568, après la mort de Galswinthe. Une ancienne servante devient reine.", false],
  ["bertha", "Æthelberht de Kent", "Vers 580. Une princesse franque épouse un roi païen anglais, à condition de rester chrétienne.", true],
  ["clovis2", "bathilde", "Vers 650. Une esclave anglo-saxonne devient reine des Francs.", true],
  ["Ansegisel", "Begga", "Fils d'Arnoul de Metz, fille de Pépin de Landen : deux familles d'Austrasie qui fusionnent. Leur fils sera Pépin de Herstal.", false],
  ["pepin3", "bertrade", "Mère de Charlemagne, elle négociera ensuite un mariage lombard.", false],
  ["charlemagne", "hildegarde", "En 771, après la répudiation de la fille du roi lombard Didier. Elle est d'origine alamane.", false]
];

/* ===== RECITS : une série de scènes par acte ===== */
const STORY = {
  1: [
    { y: "481", t: "Tournai, un roi de quinze ans", ppl: ["clovis"],
      p: "Le Chronoscope t'annonce une bonne nouvelle : tu as atterri au bon endroit. Et une mauvaise : au mauvais moment. L'Empire romain d'Occident a disparu cinq ans plus tôt (476), mais personne n'a pensé à prévenir la Gaule. À Tournai, le roi franc Childéric vient de mourir et son fils Clovis, quinze ans, hérite. Dans la tombe du père, on a mis des abeilles en or. On les retrouvera en 1653, et Napoléon s'en inspirera." },
    { y: "486", t: "Soissons, une affaire de vaisselle", ppl: ["clovis", "syagrius"],
      p: "Clovis a vingt ans et déjà un plan : prendre ce qui reste de pouvoir romain en Gaule du Nord. Il bat Syagrius à Soissons. Le butin comprend un vase d'église que l'évêque de Reims voudrait récupérer. Un soldat le brise d'un coup de hache. Clovis ne dit rien. Un an plus tard, il se souvient. Ou plutôt : Grégoire de Tours, un siècle après, raconte qu'il s'est souvenu. Le Chronoscope note : légende, très probablement." },
    { y: "493", t: "Clotilde, la princesse qui sait ce qu'elle veut", ppl: ["clotilde"],
      p: "Vers 493, Clovis épouse Clotilde, nièce du roi des Burgondes et catholique convaincue. Elle essaie de convertir son mari, et ça ne marche pas tout de suite. Son premier fils meurt peu après son baptême. Clovis y voit la preuve que ce dieu n'a pas bon caractère. Clotilde ne lâche rien." },
    { y: "496", t: "Tolbiac, un vœu et un baptême", ppl: ["remi", "clotilde"],
      p: "Selon Grégoire de Tours, pendant une bataille contre les Alamans, Clovis, en mauvaise posture, promet de se faire chrétien si le dieu de Clotilde lui donne la victoire. Il gagne. À Reims, l'évêque Remi le baptise, traditionnellement à Noël 496. Les historiens hésitent sur la date, pas sur l'effet : Clovis est catholique alors que les autres rois barbares sont ariens. Les évêques de Gaule viennent de trouver un champion." },
    { y: "507", t: "Vouillé, les Wisigoths décampent", ppl: ["alaric2", "theodoric"],
      p: "Clovis attaque le royaume wisigoth d'Alaric II, qui va de la Loire à l'Espagne. À Vouillé, près de Poitiers, Alaric est tué et son armée s'effondre. Les Wisigoths se replient vers l'Espagne. L'Ostrogoth Théodoric, beau-frère de Clovis, arrive à temps pour sauver la Provence. La famille, c'est important." },
    { y: "511", t: "Paris, un tombeau et un partage", ppl: ["anastase1", "genevieve"],
      p: "L'empereur d'Orient Anastase envoie à Clovis des honneurs de consul. Vers 508, il installe sa cour à Paris. Il meurt en 511 et repose sur la colline qui deviendra Sainte-Geneviève. Il laisse quatre fils et un royaume. Comme les Francs ne distinguent pas bien un royaume d'un héritage, le royaume est partagé. Ça va très bien se passer." }
  ],
  2: [
    { y: "511", t: "Quatre fils, un gâteau", ppl: ["clotilde", "clodomir"],
      p: "Thierry s'installe à Reims, Clodomir à Orléans, Childebert à Paris, Clotaire à Soissons. Chacun a sa part, et chacun regarde celle des autres. En 524, Clodomir meurt à la guerre. Childebert et Clotaire tuent deux de ses fils pour récupérer son royaume. Le plus jeune, Clodoald, s'échappe et devient moine : c'est saint Cloud, qui donnera son nom à une ville près de Paris. Leur grand-mère Clotilde assiste à tout cela, ce qui explique sa spécialité : la prière." },
    { y: "558", t: "Clotaire, seul à table", ppl: ["clotaire1", "radegonde"],
      p: "Les frères meurent un à un. En 558, après la mort de Childebert, Clotaire récupère tout et se retrouve seul roi des Francs, comme son père. Il a plusieurs épouses en même temps, ce que les rois mérovingiens trouvent normal. L'une d'elles, Radegonde, capturée enfant en Thuringe, finit par le quitter pour fonder un monastère. Clotaire meurt en 561. Ses quatre fils recommencent le partage." },
    { y: "566", t: "Deux sœurs wisigothes", ppl: ["brunehaut", "galswinthe", "fredegonde"],
      p: "Sigebert veut une épouse digne de lui. Il envoie des messagers en Espagne et ramène Brunehaut, fille du roi wisigoth. Son frère Chilpéric, vexé, fait venir sa sœur Galswinthe. Il garde quand même sa servante Frédégonde. Quelques mois plus tard, Galswinthe est retrouvée étranglée. Chilpéric épouse Frédégonde. Brunehaut ne dit rien. Elle prend des notes." },
    { y: "575", t: "La guerre des reines", ppl: ["sigebert1", "chilperic1", "fredegonde"],
      p: "En 575, Sigebert est poignardé à Vitry par deux hommes envoyés par Frédégonde. Brunehaut, veuve, protège son fils Childebert II, cinq ans. En 584, Chilpéric est tué au retour de la chasse, et personne ne sait qui l'a fait. Frédégonde protège son bébé Clotaire II. Deux reines, deux bébés rois, quarante ans de guerre. Le Chronoscope recommande de ne pas boire ce qu'on te sert." },
    { y: "587", t: "Andelot, l'oncle prévoyant", ppl: ["gontran", "childebert2", "gdt"],
      p: "Gontran n'a plus de fils. En 587, par le traité d'Andelot, il adopte son neveu Childebert II comme héritier et s'engage à protéger Brunehaut. À sa mort en 592, la Bourgogne passe à Childebert. Pendant ce temps, à Tours, un évêque nommé Grégoire note tout dans son Histoire des Francs. Sans lui, nous saurions presque rien. Avec lui, nous savons surtout ce que Grégoire pense." },
    { y: "613", t: "Brunehaut, la fin", ppl: ["clotaire2", "gregoire1", "bertha"],
      p: "Brunehaut gouverne pour son fils, puis ses petits-fils, correspond avec le pape Grégoire le Grand et aide la mission d'Augustin vers l'Angleterre, où la Franque Bertha est déjà reine de Kent. Elle a beaucoup d'ennemis dans l'aristocratie. En 613, Clotaire II, fils de Frédégonde, la fait arrêter et tuer, vers soixante-dix ans. Il règne alors sur tous les Francs. Frédégonde était morte depuis 597, mais son fils a terminé le travail." }
  ],
  3: [
    { y: "614", t: "L'Édit de Paris", ppl: ["clotaire2"],
      p: "Clotaire II règne seul, mais il doit payer sa victoire. En 614, par l'Édit de Paris, il promet aux évêques et aux aristocrates de respecter leurs terres et leurs droits. Les grands ont compris que le roi a besoin d'eux. Ils vont aussi comprendre qu'un roi peut avoir besoin d'un administrateur. Les maires du palais voient leur chance." },
    { y: "629", t: "Dagobert, le dernier qui compte", ppl: ["dagobert1", "eloi"],
      p: "Son fils Dagobert est roi d'Austrasie dès 623, puis de tous les Francs en 629. Il s'entoure d'un orfèvre honnête (saint Éloi), d'un référendaire astucieux (Dadon, saint Ouen) et de plusieurs épouses. Il enrichit l'abbaye de Saint-Denis. Il a perdu contre Samo, un marchand franc devenu chef chez les Slaves, mais personne ne le rappelle." },
    { y: "639", t: "Saint-Denis et la chanson", ppl: ["dagobert1", "sigebert3", "clovis2"],
      p: "Dagobert meurt en 639 et rejoint le tombeau de Saint-Denis. Des siècles plus tard, on écrira une chanson drôle sur un roi qui met sa culotte à l'envers. Elle est amusante, mais elle n'a presque rien à voir avec lui. Le vrai Dagobert laisse deux jeunes fils : Sigebert, roi d'Austrasie, et Clovis, roi de Neustrie et de Bourgogne." },
    { y: "650", t: "Une esclave régente", ppl: ["bathilde"],
      p: "Clovis II épouse Bathilde, une jeune Anglo-Saxonne qui avait été achetée comme esclave. Quand il meurt en 657, elle gouverne pour son fils Clotaire III. On lui attribue l'interdiction de vendre des chrétiens comme esclaves. Après, elle entre au monastère de Chelles. Les maires du palais, eux, ne vont pas au monastère : ils s'organisent." },
    { y: "687", t: "Tertry, le vrai pouvoir", ppl: ["pepin2", "pepinlanden", "arnoul"],
      p: "Les rois mérovingiens règnent de moins en moins : beaucoup montent sur le trône enfants, et les maires du palais gouvernent. À Tertry, en 687, Pépin de Herstal, maire d'Austrasie, bat la Neustrie et devient maître de tous les Francs. Il garde un roi, par respect pour la lignée sacrée, mais c'est lui qui décide. Pépin descend de deux familles, celles de Pépin de Landen et d'Arnoul de Metz, qui se sont mariées entre elles." },
    { y: "711", t: "Pendant que les Francs se disputent", ppl: [],
      p: "Ailleurs, le monde bouge : Muhammad est mort en 632 et l'islam s'étend. En 711, une armée venue d'Afrique du Nord franchit le détroit de Gibraltar et bat les Wisigoths. En quelques années, la péninsule ibérique passe sous domination musulmane. Pépin de Herstal meurt en 714 et laisse sa famille dans une guerre de succession. Le Chronoscope a de la lecture pour la suite." }
  ],
  4: [
    { y: "715", t: "Charles s'évade", ppl: ["charlesmartel", "pepin2"],
      p: "À la mort de Pépin de Herstal en 714, sa veuve Plectrude veut gouverner au nom de ses petits-fils. Elle emprisonne Charles, fils d'une autre compagne de Pépin. Charles s'évade en 715, réunit des partisans et gagne à Vincy (717), puis à Soissons (718). Il devient maire du palais de tous les Francs. L'évasion a été rentable." },
    { y: "732", t: "Poitiers, octobre 732", ppl: ["charlesmartel", "abdalrahman", "eudes"],
      p: "Une armée venue d'al-Andalus, menée par Abd al-Rahman, traverse l'Aquitaine. Le duc Eudes, battu à Bordeaux, demande l'aide de Charles. Entre Tours et Poitiers, les Francs tiennent bon et Abd al-Rahman est tué. Les historiens du XIXe siècle en feront la bataille qui sauve l'Europe. Aujourd'hui, on y voit plutôt un raid repoussé. On donnera plus tard à Charles un surnom : Martel, le marteau." },
    { y: "739", t: "Le pape appelle, Charles ne vient pas", ppl: ["gregoire3", "charlesmartel"],
      p: "Le pape Grégoire III, menacé par les Lombards, envoie des messages à Charles Martel vers 739-740. Charles est l'allié du roi lombard Liutprand. Il refuse de s'engager. Quand il meurt en 741, il laisse le pouvoir à ses fils Pépin et Carloman. Le pape devra attendre la génération suivante." },
    { y: "751", t: "Une question au pape", ppl: ["pepin3", "zacharie", "childeric3", "carloman_maire"],
      p: "En 747, Carloman part pour le Mont-Cassin. Pépin reste seul maire. Vers 750, il envoie des messagers à Rome : qui doit être roi, celui qui porte le titre ou celui qui détient le pouvoir ? Le pape Zacharie répond que c'est celui qui a le pouvoir. Pépin n'en demandait pas plus. En 751, Childéric III est tonsuré et enfermé dans un monastère. Pépin est élu et sacré roi. Nouveau roi, nouvelle dynastie : la bureaucratie du ciel est efficace." },
    { y: "754", t: "Saint-Denis, le pape en visite", ppl: ["etienne2", "bertrade"],
      p: "En 754, le pape Étienne II traverse les Alpes en plein hiver pour demander l'aide de Pépin contre les Lombards. À Saint-Denis, il sacre Pépin, sa femme Bertrade et leurs fils Charles et Carloman. Pépin reçoit le titre de patrice des Romains et promet de défendre Rome. Les Francs ont un roi sacré, le pape a une armée. Bonne journée pour tout le monde." },
    { y: "756", t: "La Donation de Pépin", ppl: ["pepin3", "etienne2"],
      p: "Pépin bat deux fois le roi lombard Aistolf, en 754 et 756, et remet au pape les villes conquises, dont Ravenne. C'est le début des États pontificaux. Il meurt en 768 et laisse son royaume à deux fils, Charles et Carloman. Comme le partage a déjà si bien fonctionné chez les Mérovingiens, tout le monde est optimiste." }
  ],
  5: [
    { y: "768", t: "Deux frères, un royaume", ppl: ["carloman_roi", "didier", "hildegarde"],
      p: "Charles et Carloman se partagent le royaume de Pépin. Ils ne s'aiment pas, et leur mère Bertrade négocie à tour de bras. En 770, Charles épouse la fille du roi lombard Didier. En 771, il la répudie et épouse Hildegarde. Carloman meurt la même année, de maladie. Charles devient seul roi des Francs. Les neveux de Charles vont se réfugier chez Didier." },
    { y: "774", t: "Pavie, roi des Lombards", ppl: ["adrien1", "didier"],
      p: "Didier menace Rome. Le pape Adrien Ier demande l'aide de Charles, qui passe les Alpes, assiège Pavie pendant des mois et prend la ville en 774. Didier part en monastère. Charles se proclame roi des Lombards et visite Rome à Pâques. Un roi franc, un pape reconnaissant : on connaît le scénario." },
    { y: "778", t: "Roncevaux, une légende est née", ppl: ["roland"],
      p: "En 778, Charles revient d'une expédition en Espagne. Dans les Pyrénées, son arrière-garde est attaquée par des Basques. Roland, préfet de la marche de Bretagne, y meurt. Plus de trois siècles plus tard, un poète fera de Roland un héros chrétien face aux Sarrasins. Les Basques ne sont plus invités." },
    { y: "782", t: "Les Saxons, trente ans de guerre", ppl: ["widukind"],
      p: "De 772 à 804, Charles combat les Saxons, un peuple païen qui vit au nord-est de ses terres. En 782, après une révolte, les Annales royales franques rapportent l'exécution de 4 500 Saxons à Verden. Le chiffre est discuté, la violence ne l'est pas. Widukind, chef de la résistance, finit par se faire baptiser en 785. La guerre continue encore près de vingt ans." },
    { y: "800", t: "Noël 800, le pape pose la couronne", ppl: ["leon3", "irene", "eginhard"],
      p: "En 799, le pape Léon III est agressé à Rome et fuit chez Charles. L'année suivante, Charles vient à Rome. Le 25 décembre 800, dans la basilique Saint-Pierre, Léon III lui pose une couronne sur la tête : Charles est empereur. À Constantinople, c'est Irène qui règne, et à Rome certains jugent que le trône impérial est vacant. Éginhard raconte que Charles aurait dit qu'il ne serait pas entré ce jour-là s'il avait su. Les historiens se disputent encore la vérité de cette phrase." },
    { y: "802", t: "Aix, l'école et l'éléphant", ppl: ["alcuin", "haroun", "abulabbas", "louis"],
      p: "Charles installe sa cour à Aix-la-Chapelle. Il y fait venir Alcuin, des grammairiens et des copistes ; il encourage l'écriture lisible qu'on appellera minuscule caroline ; il envoie des missi dominici surveiller les comtes. En 802, le calife Haroun al-Rachid lui envoie un éléphant, Abul-Abbas, qui arrive à Aix. Il meurt en 810. À la mort de Charles en 814, son fils Louis le Pieux est seul héritier. On aimerait te dire que le partage est enfin terminé. Verdun, 843, t'attend au prochain chapitre." }
  ]
};

/* ===== DIALOGUES SCENARISES : x = XP gagnés ===== */
const TALK = {
  1: { who: "clovis", place: "Soissons, 486",
    intro: "Tu surgis derrière un guerrier franc qui compte son butin. Clovis se retourne, ne semble pas surpris, et te jauge comme un cheval. Il a vu pire. Il veut ton avis.",
    beats: [
      { say: "Un de mes soldats vient de briser un vase d'église que l'évêque réclame. Je dois avaler l'affront devant toute l'armée. Que me conseilles-tu ?",
        learn: "Selon Grégoire de Tours, Clovis attend un an, puis tue le soldat lors de la revue des armes. L'histoire est écrite environ un siècle plus tard : c'est une tradition, pas un rapport de police.",
        opts: [
          { t: "Patience. Attends un an et une revue des armes.", r: "Tu penses comme moi. Pour une voyageuse, c'est inquiétant. L'an prochain, il comprendra.", x: 10 },
          { t: "Rends-lui son vase et demande pardon.", r: "Demander pardon à un soldat ? Tu as été élevée par des moines.", x: 3 },
          { t: "Demande-lui poliment de payer.", r: "Poliment ? Tu parles comme un évêque. Je n'oublie rien, moi.", x: 3 }
        ] },
      { say: "Ma femme Clotilde veut que je me fasse baptiser. Mes guerriers sont païens, les évêques ont des cités. Que dois-je choisir ?",
        learn: "Les Wisigoths, les Burgondes et les Ostrogoths sont chrétiens ariens. Clovis, catholique, devient le champion des évêques de Gaule. La date du baptême (496 selon la tradition) est discutée.",
        opts: [
          { t: "Convertis-toi : les évêques gallo-romains te soutiendront contre les rois ariens.", r: "Des évêques qui m'ouvrent leurs villes, pour un peu d'eau. Tu me vends la Gaule avec un seau. Marché conclu.", x: 10 },
          { t: "Promets-le seulement si tu gagnes la prochaine bataille.", r: "C'est exactement ce que je ferai contre les Alamans. Tu me fais peur.", x: 7 },
          { t: "Reste païen, c'est plus fidèle à tes ancêtres.", r: "Mes ancêtres ne tenaient pas la Gaule. Moi, si.", x: 3 }
        ] },
      { say: "Un dernier conseil pour mes quatre fils, quand je ne serai plus là ?",
        learn: "En 511, le royaume est partagé entre Thierry, Clodomir, Childebert et Clotaire. Pour les Francs, un royaume ressemble à un héritage : on le divise.",
        opts: [
          { t: "Ne partagez surtout pas le royaume.", r: "Joli conseil. Ils le partageront quand même : chez nous, un royaume, c'est un héritage. Tu verras.", x: 10 },
          { t: "Entendez-vous bien.", r: "Tu n'as jamais eu de frères, toi.", x: 3 },
          { t: "Mettez vos soldats à la porte.", r: "Mes soldats seront les premiers à demander leur part.", x: 3 }
        ] }
    ],
    outro: "Clovis te tourne le dos et retourne à ses affaires. Le Chronoscope résume : « Une bonne conversation, un roi sans scrupules, et toujours aucun partage prévu. »" },

  2: { who: "fredegonde", place: "Paris, 584",
    intro: "Une femme en deuil t'attend dans un couloir de Paris. Elle tient un bébé dans les bras et un air parfaitement calme. C'est Frédégonde. Son mari vient de mourir.",
    beats: [
      { say: "Mon mari est mort en rentrant de la chasse. Une étrange coïncidence, non ?",
        learn: "L'assassinat de Chilpéric en 584 n'a jamais été éclairci. Frédégonde est soupçonnée, mais Grégoire de Tours hésite entre plusieurs coupables. Elle devient régente de son bébé, Clotaire II.",
        opts: [
          { t: "À qui profite le crime ?", r: "À beaucoup de monde. Moi, je n'ai qu'un fils de quelques mois à protéger. Remarque, c'est déjà un motif.", x: 8 },
          { t: "Mes condoléances, majesté.", r: "Sois honnête : tu me crois coupable. Tu as raison de te méfier.", x: 3 },
          { t: "Montrez-moi votre alibi.", r: "Mon alibi, c'est mon bébé. Regarde comme il dort bien.", x: 5 }
        ] },
      { say: "Brunehaut et moi nous détestons depuis près de vingt ans. Tu sais pourquoi ?",
        learn: "La rivalité part de 568 : Galswinthe, sœur de Brunehaut, est étranglée et Chilpéric épouse Frédégonde. En 575, Sigebert, mari de Brunehaut, est tué sur ordre de Frédégonde. Les deux reines s'affronteront jusqu'en 597.",
        opts: [
          { t: "À cause de Galswinthe, la sœur de Brunehaut.", r: "Elle t'a tout raconté, n'est-ce pas ? Disons que les histoires de famille m'ont toujours coûté cher.", x: 10 },
          { t: "Vous voulez la même couronne.", r: "Une couronne n'a jamais divisé deux reines à elle seule. Il faut aussi quelques morts.", x: 5 },
          { t: "Parce qu'elle est trop vertueuse.", r: "Brunehaut, vertueuse ? Elle m'aurait fait la même chose si elle avait été plus rapide.", x: 3 }
        ] }
    ],
    outro: "Frédégonde berce son bébé. Le Chronoscope te conseille de te lever de table sans avoir touché à ta coupe." },

  3: { who: "pepin2", place: "Tertry, 687",
    intro: "La poussière retombe sur le champ de bataille. Pépin de Herstal, maire du palais d'Austrasie, regarde les Neustriens battus. Il y a un roi mérovingien dans son camp. Il ne lui a pas encore demandé son avis.",
    beats: [
      { say: "J'ai gagné. Je gouverne toute la Francie. Pourquoi garder ce roi ?",
        learn: "Pépin de Herstal gouverne sans être roi : il se fait appeler « duc et prince des Francs ». Les Mérovingiens gardent leur prestige sacré : on ne peut pas les remplacer sans une raison très forte.",
        opts: [
          { t: "La lignée mérovingienne est sacrée : on la garde, on ne la remplace pas.", r: "Tu as compris. Un roi sur le trône, un maire aux commandes. Chacun est content, surtout moi.", x: 10 },
          { t: "Ça coûte moins cher qu'une guerre civile.", r: "Moins cher, oui. Moins joli, aussi.", x: 6 },
          { t: "Parce que tu es paresseux.", r: "Mon armée a une autre opinion de ma paresse.", x: 3 }
        ] },
      { say: "Mon petit-fils est trop jeune et ma femme Plectrude s'agite. Un conseil de succession ?",
        learn: "À sa mort en 714, Plectrude veut gouverner au nom de ses petits-fils et emprisonne Charles, fils d'Alpaïde. Charles s'évade en 715 et prend le pouvoir : c'est le début de l'acte suivant.",
        opts: [
          { t: "N'oublie pas ton fils Charles, né d'Alpaïde.", r: "Un bâtard énergique, tu veux dire. J'y pense, tout en espérant que Plectrude n'y pense pas.", x: 10 },
          { t: "Laisse tout à ton petit-fils.", r: "Un enfant à la tête des Francs ? Les Mérovingiens l'ont déjà fait, et on connaît le résultat.", x: 5 },
          { t: "Épouse une princesse byzantine.", r: "Je suis maire du palais, pas empereur. Un peu de modestie.", x: 3 }
        ] }
    ],
    outro: "Pépin hoche la tête. Le Chronoscope murmure : « Ce monsieur prépare sa famille pour le long terme. »" },

  4: { who: "charlesmartel", place: "Entre Tours et Poitiers, 732",
    intro: "Tu arrives sur une colline boisée. Des milliers de guerriers francs attendent à pied. Au centre, un homme large d'épaules examine l'horizon. Charles Martel n'est pas ton fan, mais il manque de conseillers.",
    beats: [
      { say: "Une armée de cavaliers arrive du sud. Mes hommes sont surtout à pied. Que fais-je ?",
        learn: "Selon les récits, les Francs tiennent comme un mur et finissent par l'emporter. Abd al-Rahman est tué, ce qui provoque la retraite. Les historiens modernes y voient un raid repoussé plus qu'un choc de civilisations.",
        opts: [
          { t: "Tiens bon en rangs serrés, sur un terrain solide.", r: "Une muraille de lances. J'avais pensé à la même chose, par chance.", x: 10 },
          { t: "Charge à cheval.", r: "J'ai très peu de cavalerie lourde, ma belle. Essaie encore.", x: 3 },
          { t: "Propose une trêve.", r: "Avec un émir en raid ? Il vient chercher du butin, pas des conférences.", x: 3 }
        ] },
      { say: "Après cette victoire, le pape pourrait m'écrire. Et le roi sur le trône ne sert plus à grand-chose. Que fais-je ?",
        learn: "Charles ne prend pas la couronne : à la mort de Thierry IV en 737, il laisse le trône vacant. C'est son fils Pépin qui franchit le pas en 751, avec l'accord du pape Zacharie.",
        opts: [
          { t: "Garde le pouvoir, mais laisse le trône vide : ton fils fera le reste.", r: "Prudence et patience. On dirait que tu as lu l'histoire à l'avance.", x: 10 },
          { t: "Prends la couronne tout de suite.", r: "Trop tôt : les grands n'aiment pas les coups de force, et le pape n'a rien dit.", x: 5 },
          { t: "Rappelle l'ancien roi mérovingien.", r: "Le pauvre garçon vit très bien en monastère. Laissons-le.", x: 3 }
        ] }
    ],
    outro: "Charles remonte sur son cheval. Le Chronoscope note : « Un maire du palais très efficace, un trône très vide. »" },

  5: { who: "charlemagne", place: "Aix-la-Chapelle, 802",
    intro: "La cour d'Aix grouille de savants, de copistes et de comtes inquiets. Dans la cour, un éléphant mastique tranquillement un buisson. Charlemagne, immense et amusé, t'invite à donner ton avis.",
    beats: [
      { say: "Le pape m'a couronné empereur il y a deux ans. Qui est le plus important de nous deux, à ton avis ?",
        learn: "Léon III pose lui-même la couronne, ce qui pose la question de qui donne le pouvoir. Charlemagne se voit comme le défenseur de l'Église, pas son subordonné. Cette tension traversera tout le Moyen Âge.",
        opts: [
          { t: "Vous. C'est vous qui protégez Rome et rendez au pape son trône.", r: "Voilà une réponse d'empereur. Je suis le défenseur de l'Église, pas son valet.", x: 10 },
          { t: "Le pape, c'est lui qui vous a couronné.", r: "Il m'a couronné, soit. Mais c'est mon épée qui l'a ramené à Rome.", x: 5 },
          { t: "Aucun des deux, c'est Byzance.", r: "Byzance a une impératrice, Irène, que Rome ne reconnaît pas. Tu n'as pas tort sur le fond.", x: 6 }
        ] },
      { say: "Le calife de Bagdad m'a envoyé cet éléphant. Qu'en fait-on ?",
        learn: "Abul-Abbas arrive à Aix en 802, offert par Haroun al-Rachid. Il vit jusqu'en 810. Les historiens discutent de l'alliance éventuelle entre le calife et Charlemagne, mais le cadeau est un message diplomatique d'une grande lourdeur.",
        opts: [
          { t: "On le garde en ville : c'est une preuve de puissance.", r: "Exactement. Un éléphant, c'est un message diplomatique avec une trompe.", x: 10 },
          { t: "On l'emmène à la chasse.", r: "Il ne tient pas dans une forêt de chênes, mais l'idée me plaît.", x: 3 },
          { t: "On le sert au banquet.", r: "J'aime le rôti, mais jamais à ce point.", x: 3 }
        ] }
    ],
    outro: "Charlemagne éclate de rire. Le Chronoscope conclut : « Une audience impériale, un éléphant, et toujours aucun plan pour la succession. Verdun, 843, au prochain chapitre. »" }
};

/* ===== QUIZ ECRITS A LA MAIN : c = index de la bonne réponse ===== */
const QUIZ = {
  1: [
    { q: "Après Soissons, que raconte la légende au sujet du vase d'église ?", o: ["Un soldat le brise d'un coup de hache", "Clovis le fond pour faire une couronne", "Syagrius le vole", "Il est offert à Clotilde"], c: 0, x: "C'est le récit de Grégoire de Tours, écrit environ un siècle plus tard." },
    { q: "Pourquoi le baptême catholique de Clovis est-il un coup politique ?", o: ["Les autres rois barbares sont ariens, lui gagne les évêques de Gaule", "Le pape lui donne une armée", "Il devient aussitôt empereur", "Il épouse la fille du pape"], c: 0, x: "Les évêques de Gaule soutiennent un roi qui partage leur foi." },
    { q: "Où Clovis bat-il les Wisigoths en 507 ?", o: ["À Vouillé, près de Poitiers", "À Soissons", "À Tolbiac", "À Reims"], c: 0, x: "Alaric II y est tué." },
    { q: "Qui est la femme de Clovis qui l'a poussé vers le baptême ?", o: ["Clotilde", "Brunehaut", "Radegonde", "Bathilde"], c: 0, x: "Clotilde, princesse burgonde et catholique." },
    { q: "Qui est le beau-frère de Clovis, roi des Ostrogoths ?", o: ["Théodoric le Grand", "Alaric II", "Syagrius", "Anastase"], c: 0, x: "Théodoric épouse Audéflède, sœur de Clovis." },
    { q: "Quelle ville Clovis choisit-il comme capitale vers 508 ?", o: ["Paris", "Reims", "Soissons", "Orléans"], c: 0, x: "Il y fait bâtir la basilique où il sera enterré." },
    { q: "Qui baptise Clovis à Reims, selon la tradition ?", o: ["L'évêque Remi", "Le pape Anastase II", "Sainte Geneviève", "Grégoire de Tours"], c: 0, x: "Le pape Anastase II lui écrit ensuite pour le féliciter." }
  ],
  2: [
    { q: "Qui est la sœur de Brunehaut, étranglée en 568 ?", o: ["Galswinthe", "Frédégonde", "Radegonde", "Clotilde"], c: 0, x: "Elle était l'épouse de Chilpéric Ier." },
    { q: "Qui est la grande rivale de Brunehaut, reine de Neustrie ?", o: ["Frédégonde", "Bathilde", "Clotilde", "Galswinthe"], c: 0, x: "Frédégonde, ancienne servante devenue reine." },
    { q: "Quel traité de 587 lie Gontran, Childebert II et Brunehaut ?", o: ["Le traité d'Andelot", "Le traité de Verdun", "Le traité de Vouillé", "Le traité de Tertry"], c: 0, x: "Gontran adopte Childebert II comme héritier." },
    { q: "Qui devient seul roi des Francs après la mort de Brunehaut en 613 ?", o: ["Clotaire II", "Dagobert Ier", "Childebert II", "Chilpéric Ier"], c: 0, x: "Le fils de Frédégonde réunifie le royaume." },
    { q: "Qui écrit l'Histoire des Francs, la grande source du VIe siècle ?", o: ["Grégoire de Tours", "Éginhard", "Alcuin", "Frédégonde"], c: 0, x: "Il est évêque de Tours." },
    { q: "Quel pape écrit à Brunehaut et envoie Augustin en Angleterre ?", o: ["Grégoire le Grand", "Zacharie", "Adrien Ier", "Léon III"], c: 0, x: "Il devient pape en 590." },
    { q: "Quelle princesse franque épouse le roi de Kent vers 580 ?", o: ["Bertha", "Radegonde", "Clotilde", "Galswinthe"], c: 0, x: "Bertha, fille de Caribert Ier, prépare l'arrivée d'Augustin." }
  ],
  3: [
    { q: "Qui est l'orfèvre devenu évêque de Noyon, conseiller de Dagobert ?", o: ["Saint Éloi", "Saint Remi", "Saint Boniface", "Grégoire de Tours"], c: 0, x: "Il fait deux trônes avec l'or prévu pour un." },
    { q: "Où Dagobert est-il enterré ?", o: ["Saint-Denis", "Reims", "Aix-la-Chapelle", "Tours"], c: 0, x: "Saint-Denis devient peu à peu la nécropole des rois." },
    { q: "Quel titre porte Pépin de Herstal, qui gouverne sans être roi ?", o: ["Maire du palais", "Empereur", "Comte de Paris", "Patrice des Romains"], c: 0, x: "Il se fait aussi appeler « duc et prince des Francs »." },
    { q: "Qui est Bathilde ?", o: ["Une esclave anglo-saxonne devenue reine", "Une princesse wisigothe", "La mère de Charlemagne", "Une abbesse de Reims"], c: 0, x: "Elle épouse Clovis II vers 650." },
    { q: "Quelles familles s'unissent par le mariage de Begga et d'Ansegisel ?", o: ["Celles de Pépin de Landen et d'Arnoul de Metz", "Mérovingiens et Wisigoths", "Burgondes et Francs", "Ostrogoths et Lombards"], c: 0, x: "Leur fils Pépin de Herstal est l'ancêtre de Charlemagne." },
    { q: "Que dit la chanson « Le bon roi Dagobert » du vrai Dagobert ?", o: ["Presque rien : elle date de bien plus tard", "Elle date du VIIe siècle", "Elle a été écrite par saint Éloi", "Elle raconte la bataille de Tertry"], c: 0, x: "La chanson est une création bien postérieure." },
    { q: "Quel roi est battu par Samo, un marchand franc devenu chef chez les Slaves ?", o: ["Dagobert Ier", "Clotaire II", "Pépin de Herstal", "Clovis II"], c: 0, x: "La défaite a lieu vers 631 à Wogastisburg." }
  ],
  4: [
    { q: "Qui est tué à Poitiers en 732 ?", o: ["Abd al-Rahman", "Charles Martel", "Eudes d'Aquitaine", "Pépin le Bref"], c: 0, x: "Sa mort provoque la retraite de son armée." },
    { q: "Que signifie le surnom « Martel » ?", o: ["Le marteau", "La lance", "Le bouclier", "La colline"], c: 0, x: "Le surnom n'est attesté que plus tard, au IXe siècle." },
    { q: "Que fait Charles Martel à la mort du roi Thierry IV en 737 ?", o: ["Il laisse le trône vide", "Il se fait couronner", "Il part pour Rome", "Il abdique"], c: 0, x: "L'interrègne dure jusqu'en 743." },
    { q: "Quel pape sacre Pépin à Saint-Denis en 754 ?", o: ["Étienne II", "Zacharie", "Grégoire le Grand", "Adrien Ier"], c: 0, x: "Il a traversé les Alpes en plein hiver." },
    { q: "Que donne Pépin au pape en 756 ?", o: ["Des villes d'Italie centrale", "La Provence", "Sa couronne", "L'Aquitaine"], c: 0, x: "C'est la Donation de Pépin, début de l'État pontifical." },
    { q: "Qui est le dernier roi mérovingien ?", o: ["Childéric III", "Dagobert Ier", "Clovis II", "Thierry IV"], c: 0, x: "Il est tonsuré et enfermé dans un monastère en 751." },
    { q: "Où se retire Carloman en 747 ?", o: ["Au Mont-Cassin", "À Reims", "À Saint-Denis", "À Poitiers"], c: 0, x: "Il laisse Pépin seul maire du palais." }
  ],
  5: [
    { q: "Où a lieu l'embuscade de 778 qui tue le comte Roland ?", o: ["À Roncevaux", "À Poitiers", "À Pavie", "À Tolbiac"], c: 0, x: "Les attaquants sont des Basques, pas des Sarrasins." },
    { q: "Quel peuple Charlemagne combat-il de 772 à 804 ?", o: ["Les Saxons", "Les Lombards", "Les Wisigoths", "Les Burgondes"], c: 0, x: "Leur chef Widukind est baptisé en 785." },
    { q: "Qui couronne Charlemagne empereur à Noël 800 ?", o: ["Léon III", "Adrien Ier", "Étienne II", "Grégoire le Grand"], c: 0, x: "À Rome, dans la basilique Saint-Pierre." },
    { q: "Quel cadeau Haroun al-Rachid envoie-t-il à Charlemagne ?", o: ["Un éléphant", "Un lion", "Une couronne", "Un cheval blanc"], c: 0, x: "Il s'appelle Abul-Abbas." },
    { q: "Qui est Alcuin ?", o: ["Un savant anglo-saxon, conseiller de Charlemagne", "Un roi lombard", "Un pape", "Un maire du palais"], c: 0, x: "Il dirige l'école palatine, puis l'abbaye de Saint-Martin de Tours." },
    { q: "Quelle ville devient le centre de la cour de Charlemagne ?", o: ["Aix-la-Chapelle", "Paris", "Reims", "Rome"], c: 0, x: "Il y fait bâtir une chapelle palatine." },
    { q: "Quel fils de Charlemagne lui succède seul en 814 ?", o: ["Louis le Pieux", "Pépin le Bossu", "Lothaire", "Charles le Chauve"], c: 0, x: "Ses frères aînés sont morts avant lui." },
    { q: "Qui écrit la Vie de Charlemagne ?", o: ["Éginhard", "Alcuin", "Grégoire de Tours", "Frédégaire"], c: 0, x: "Il écrit après la mort de l'empereur." }
  ]
};

/* ===== ATLAS DU MONDE : liens avec l'étranger ===== */
const WORLD = [
  { n: "Wisigoths", sub: "Espagne, puis sud-ouest de la Gaule", ppl: ["alaric2", "brunehaut", "galswinthe"],
    t: "Premier grand adversaire de Clovis : Vouillé (507) leur coûte presque toute la Gaule. Plus tard, deux princesses wisigothes, Brunehaut et Galswinthe, épousent deux rois francs. La péninsule ibérique passe sous domination musulmane en 711." },
  { n: "Ostrogoths", sub: "Italie", ppl: ["theodoric"],
    t: "Théodoric est le beau-frère de Clovis. Il l'empêche d'avancer en Provence après Vouillé. Le royaume ostrogoth disparaît au VIe siècle, après la reconquête byzantine." },
  { n: "Burgondes", sub: "Vallée du Rhône, Bourgogne", ppl: ["clotilde"],
    t: "Clotilde est la nièce du roi Gondebaud. Les fils de Clovis conquièrent la Burgondie en 534." },
  { n: "Byzance", sub: "Constantinople", ppl: ["anastase1", "irene", "zacharie"],
    t: "L'empereur Anastase honore Clovis en 508. Plus tard, Zacharie est un pape d'origine grecque. En 800, le trône impérial est occupé par Irène : certains jugent à Rome qu'il est vacant, et Charlemagne est couronné." },
  { n: "Lombards", sub: "Nord et centre de l'Italie", ppl: ["didier", "etienne2", "adrien1"],
    t: "Ils menacent Rome. Pépin les bat en 754 et 756, Charlemagne prend Pavie en 774 et se proclame roi des Lombards." },
  { n: "Musulmans : Omeyyades et Abbassides", sub: "al-Andalus, Damas, Bagdad", ppl: ["abdalrahman", "eudes", "haroun", "abulabbas"],
    t: "Après 711, des raids partent d'al-Andalus : Toulouse (721), Poitiers (732). Plus tard, le calife abbasside Haroun al-Rachid envoie un éléphant à Charlemagne." },
  { n: "Saxons et Germains", sub: "Nord-est du royaume franc", ppl: ["widukind", "boniface"],
    t: "Charlemagne combat les Saxons pendant plus de trente ans. Avant lui, le missionnaire Boniface avait évangélisé la Germanie avec l'aide de Charles Martel." },
  { n: "Îles britanniques", sub: "Kent, Northumbrie", ppl: ["bertha", "bathilde", "alcuin", "boniface"],
    t: "Une Franque, Bertha, épouse un roi de Kent. Une Anglo-Saxonne, Bathilde, devient reine des Francs. Des savants anglo-saxons comme Alcuin et Boniface travaillent pour les Carolingiens." }
];

/* années proposées en raccourci dans le Chronoscope */
const KEYYEARS = [486, 507, 561, 584, 613, 639, 687, 732, 751, 754, 774, 800, 814];

/* DONNEES 3 : actes VI à VIII (814 à 1285) */
{
const fm = (par, sp, ch) => ({ par: par || [], sp: sp || [], ch: ch || [] });
const L = PEOPLE.find(p => p.id === 'louis');
if (L) L.fam = fm(['charlemagne', 'hildegarde'], ['Ermengarde', 'judith'], ['lothaire1', 'louisgermanique', 'charleschauve']);

Object.assign(GROUPS, {
  capet: { n: "Capétiens" },
  valois: { n: "Valois" },
  bourbon: { n: "Bourbons" },
  cour: { n: "Cour, ministres et arts" }
});

ACTS.push(
  { id: 6, num: "VI", title: "Partager l'empire, perdre la main", short: "Les petits-fils", a: 814, b: 987, sym: "ship",
    lead: "Trois petits-fils, un empire coupé en trois, et des Vikings qui ont très bien compris comment marche une rivière.",
    world: [["871", "Alfred le Grand devient roi du Wessex"], ["962", "Otton Ier couronné empereur à Rome"]] },
  { id: 7, num: "VII", title: "Les Capétiens s'accrochent", short: "Hugues Capet", a: 987, b: 1180, sym: "lys",
    lead: "Un roi élu, un domaine minuscule, des vassaux plus riches que lui. Les Capétiens ont un seul talent : avoir des fils.",
    world: [["1054", "Schisme entre Rome et Constantinople"], ["1066", "Conquête normande de l'Angleterre"], ["1099", "Les croisés prennent Jérusalem"]] },
  { id: 8, num: "VIII", title: "Bouvines et la sainteté", short: "Philippe Auguste et Saint Louis", a: 1180, b: 1285, sym: "cross",
    lead: "Un grand-père conquérant, une grand-mère redoutable, un petit-fils saint. Les Plantagenêts n'ont pas passé un bon siècle.",
    world: [["1206", "Gengis Khan unifie les Mongols"], ["1215", "La Grande Charte en Angleterre"], ["1229", "Frédéric II obtient Jérusalem par traité"]] }
);

PEOPLE.push(
  /* ===== ACTE VI ===== */
  { id: "lothaire1", n: "Lothaire Ier", g: "caro", lv: 3, sym: "orb", life: [795, 855], reign: [840, 855], rl: "empereur", d: "795 – 855",
    role: "Empereur, roi de Francie médiane", act: 6,
    q: "Fils aîné de Louis le Pieux, il garde le titre d'empereur et la bande du milieu à Verdun",
    one: "L'aîné qui voulait tout et reçoit le milieu.",
    facts: [
      { t: "Battu à Fontenoy", d: "Le 25 juin 841, à Fontenoy-en-Puisaye, ses deux frères Louis et Charles battent son armée. La bataille est très meurtrière et marque les esprits." },
      { t: "La bande du milieu", d: "Au traité de Verdun (843), il garde le titre d'empereur et une longue bande de terres allant de la mer du Nord à l'Italie, avec Aix-la-Chapelle et Rome. Ce royaume du milieu sera disputé pendant des siècles. Le nom de Lotharingie, puis Lorraine, vient de son fils Lothaire II." }
    ],
    fam: fm(['louis', 'Ermengarde'], ['Ermengarde de Tours'], ['Louis II d\'Italie', 'Lothaire II']) },

  { id: "louisgermanique", n: "Louis le Germanique", g: "caro", lv: 2, sym: "crown", life: [806, 876], reign: [843, 876], rl: "roi", d: "v. 806 – 876",
    role: "Roi de Francie orientale", act: 6,
    q: "Fils de Louis le Pieux, il reçoit l'est de l'empire à Verdun",
    one: "Le frère qui reçoit l'est, future Allemagne.",
    facts: [
      { t: "Serment en langue romane", d: "Le 14 février 842, à Strasbourg, il jure fidélité à son frère Charles en langue romane, pour être compris des soldats de Charles. Ces Serments de Strasbourg sont le plus ancien texte connu dans un ancêtre du français." },
      { t: "La Francie orientale", d: "À Verdun en 843, il reçoit les terres à l'est du Rhin. Son royaume est l'ancêtre lointain de l'Allemagne." }
    ],
    fam: fm(['louis', 'Ermengarde'], ['Emma'], ['Carloman de Bavière', 'Louis le Jeune', 'Charles le Gros']) },

  { id: "charleschauve", n: "Charles le Chauve", g: "caro", lv: 4, sym: "crown", life: [823, 877], reign: [843, 877], rl: "roi, empereur dès 875", d: "823 – 877",
    role: "Roi de Francie occidentale, empereur", act: 6,
    q: "Fils de Judith, il reçoit l'ouest de l'empire, future France, à Verdun",
    one: "Le premier roi d'un royaume qui deviendra la France.",
    facts: [
      { t: "Le petit dernier", d: "Né en 823 du second mariage de Louis le Pieux avec Judith de Bavière, il oblige son père à refaire les partages. Ses demi-frères ne le lui pardonnent pas." },
      { t: "La Francie occidentale", d: "Au traité de Verdun (843), il reçoit l'ouest de l'empire, à l'ouest de l'Escaut, de la Meuse, de la Saône et du Rhône. C'est le noyau du futur royaume de France." },
      { t: "Payer les Vikings", d: "En 845, des Vikings remontent la Seine et pillent Paris. Charles leur verse 7 000 livres d'argent pour qu'ils repartent. Le procédé fonctionne, donc ils reviennent." },
      { t: "Empereur à Noël 875", d: "Le pape Jean VIII le couronne empereur à Rome à Noël 875, soixante-quinze ans jour pour jour après Charlemagne. Il meurt deux ans plus tard en revenant d'Italie." }
    ],
    fam: fm(['louis', 'judith'], ['Ermentrude', 'Richilde'], ['Louis le Bègue']) },

  { id: "judith", n: "Judith de Bavière", g: "caro", lv: 2, sym: "ring", life: [797, 843], d: "v. 797 – 843",
    role: "Impératrice, seconde épouse de Louis le Pieux", act: 6,
    q: "Seconde épouse de Louis le Pieux, mère de Charles le Chauve",
    one: "Une belle-mère qui fait exploser l'héritage.",
    facts: [
      { t: "Un fils de trop", d: "Épousée en 819, elle donne à Louis le Pieux un fils, Charles, en 823. Pour lui trouver une part, l'empereur défait les partages prévus. Les fils aînés se révoltent, l'accusent d'adultère et l'enferment dans un couvent. Elle en sort, plus influente qu'avant." }
    ],
    fam: fm([], ['louis'], ['charleschauve']) },

  { id: "robertlefort", n: "Robert le Fort", g: "capet", lv: 2, sym: "shield", life: [820, 866], d: "? – 866",
    role: "Comte et marquis de Neustrie", act: 6,
    q: "Ancêtre des Capétiens, tué en combattant les Vikings en 866",
    one: "L'arrière-grand-père d'Hugues Capet, mort l'épée à la main.",
    facts: [
      { t: "Le défenseur de la Loire", d: "Charles le Chauve lui confie la défense de la région entre Seine et Loire contre les Vikings et les Bretons. Il est tué à Brissarthe, en Anjou, en 866. Ses fils Eudes et Robert seront rois : sa famille, les Robertiens, deviendra celle des Capétiens." }
    ],
    fam: fm([], [], ['eudesparis', 'Robert Ier']) },

  { id: "eudesparis", n: "Eudes", g: "capet", lv: 3, sym: "shield", life: [860, 898], reign: [888, 898], rl: "roi", d: "v. 860 – 898",
    role: "Comte de Paris, roi des Francs", act: 6,
    q: "Comte de Paris qui défend la ville contre les Vikings en 885-886, puis devient roi",
    one: "Le héros du siège de Paris, premier roi de sa famille.",
    facts: [
      { t: "Le siège de Paris", d: "De novembre 885 à l'automne 886, des centaines de navires vikings assiègent Paris. Le comte Eudes et l'évêque Gozlin tiennent l'île de la Cité. L'empereur Charles le Gros arrive enfin et paie les Vikings pour qu'ils aillent piller la Bourgogne. Les Parisiens retiennent qui s'est battu et qui a payé." },
      { t: "Un roi non carolingien", d: "En 888, les grands du royaume élisent Eudes roi. Pour la première fois, un non-Carolingien porte la couronne de Francie occidentale. La couronne fera ensuite des allers-retours entre les deux familles pendant un siècle." }
    ],
    fam: fm(['robertlefort'], ['Théodérade'], []) },

  { id: "charlessimple", n: "Charles le Simple", g: "caro", lv: 2, sym: "crown", life: [879, 929], reign: [898, 922], rl: "roi", d: "879 – 929",
    role: "Roi des Francs", act: 6,
    q: "Roi carolingien qui cède à Rollon la future Normandie en 911",
    one: "Le roi qui fait des Vikings des Normands.",
    facts: [
      { t: "Simple veut dire franc", d: "Son surnom ne veut pas dire « niais » : au Moyen Âge, « simple » signifie droit, sans détour." },
      { t: "Le traité avec Rollon", d: "Vers 911, à Saint-Clair-sur-Epte, il confie à Rollon la région de Rouen. En échange, Rollon défend l'estuaire de la Seine et accepte le baptême. Déposé en 922, Charles finit prisonnier du comte Herbert de Vermandois et meurt à Péronne en 929." }
    ],
    fam: fm(['Louis le Bègue'], ['Frérone', 'Ogive de Wessex'], ['Louis IV d\'Outremer']) },

  { id: "rollon", n: "Rollon", g: "monde", lv: 3, sym: "ship", life: [860, 930], d: "v. 860 – v. 930",
    role: "Chef viking, premier maître de la Normandie", act: 6,
    q: "Chef viking à qui Charles le Simple confie la région de Rouen vers 911",
    one: "Le pillard devenu gardien de la porte.",
    facts: [
      { t: "Saint-Clair-sur-Epte", d: "Vers 911, Charles le Simple lui confie la basse vallée de la Seine. Rollon se fait baptiser. Ses descendants, les ducs de Normandie, agrandiront le territoire. L'un d'eux, Guillaume, conquerra l'Angleterre en 1066." },
      { t: "Le pied du roi", leg: true, d: "Selon le chroniqueur Dudon de Saint-Quentin, écrit un siècle plus tard, Rollon refuse de baiser le pied du roi et charge un de ses hommes de le faire. Celui-ci soulève le pied jusqu'à sa bouche, et le roi tombe à la renverse." }
    ],
    fam: fm([], ['Poppa'], ['Guillaume Longue-Épée']) },

  { id: "hincmar", n: "Hincmar de Reims", g: "eglise", lv: 1, sym: "mitre", life: [806, 882], d: "v. 806 – 882",
    role: "Archevêque de Reims", act: 6,
    q: "Archevêque de Reims, conseiller très écouté de Charles le Chauve",
    one: "L'archevêque qui fait de Reims la ville du sacre.",
    facts: [
      { t: "La sainte ampoule", d: "Il raconte qu'au baptême de Clovis, une colombe aurait apporté du ciel une fiole d'huile sainte. Cette sainte ampoule servira à sacrer les rois de France à Reims jusqu'au XIXe siècle. Le récit apparaît chez Hincmar, plus de trois siècles après Clovis." }
    ],
    fam: fm() },

  { id: "jean8", n: "Jean VIII", g: "eglise", lv: 1, sym: "mitre", life: [820, 882], reign: [872, 882], rl: "pape", pope: true, d: "pape de 872 à 882",
    role: "Pape (872-882)", act: 6,
    q: "Pape qui couronne Charles le Chauve empereur à Noël 875",
    one: "Il couronne Charles le Chauve, et finit mal.",
    facts: [
      { t: "Un pape assassiné", d: "Il couronne Charles le Chauve empereur en 875. Selon les Annales de Fulda, il est empoisonné en 882 par son entourage, puis achevé à coups de marteau. Il serait le premier pape assassiné." }
    ],
    fam: fm() },

  { id: "guillaumeaquit", n: "Guillaume d'Aquitaine", g: "eglise", lv: 1, sym: "arch", life: [875, 918], d: "v. 875 – 918",
    role: "Duc d'Aquitaine, fondateur de Cluny", act: 6,
    q: "Duc d'Aquitaine qui fonde l'abbaye de Cluny en 910",
    one: "Il fonde Cluny et la place directement sous le pape.",
    facts: [
      { t: "Cluny, 910", d: "En 910, il donne un domaine en Bourgogne pour fonder une abbaye, et la place sous la seule protection du pape : aucun seigneur ni évêque ne peut s'en mêler. Cluny deviendra la plus puissante abbaye d'Occident." }
    ],
    fam: fm() },

  /* ===== ACTE VII ===== */
  { id: "huguescapet", n: "Hugues Capet", g: "capet", lv: 4, sym: "lys", life: [940, 996], reign: [987, 996], rl: "roi", d: "v. 940 – 996",
    role: "Roi des Francs, fondateur de la dynastie capétienne", act: 7,
    q: "Duc des Francs élu roi en 987, fondateur d'une dynastie qui régnera jusqu'en 1848 par ses branches",
    one: "Le roi élu dont les descendants régneront huit siècles.",
    facts: [
      { t: "Élu à Senlis", d: "En 987, le dernier Carolingien, Louis V, meurt d'une chute de cheval. Les grands, poussés par l'archevêque Adalbéron de Reims, élisent Hugues, duc des Francs. Il est sacré en juillet 987." },
      { t: "Un fils couronné tout de suite", d: "Dès Noël 987, il fait sacrer son fils Robert. Ses successeurs feront pareil pendant deux siècles : couronner l'héritier du vivant du roi évite une nouvelle élection." },
      { t: "Un roi pauvre", d: "Son domaine propre se limite à quelques terres autour de Paris et d'Orléans. Les ducs de Normandie, d'Aquitaine ou de Bourgogne sont bien plus riches que lui." },
      { t: "« Qui t'a fait roi ? »", leg: true, d: "Selon le chroniqueur Adémar de Chabannes, Hugues demande à un comte : « Qui t'a fait comte ? ». Réponse : « Qui t'a fait roi ? ». L'anecdote résume la faiblesse royale de l'époque." }
    ],
    fam: fm(['Hugues le Grand', 'Hedwige de Saxe'], ['Adélaïde d\'Aquitaine'], ['robert2']) },

  { id: "robert2", n: "Robert II le Pieux", g: "capet", lv: 2, sym: "book", life: [972, 1031], reign: [996, 1031], rl: "roi", d: "v. 972 – 1031",
    role: "Roi des Francs", act: 7,
    q: "Fils d'Hugues Capet, excommunié pour avoir épousé sa cousine",
    one: "Un roi pieux, excommunié pour cause de mariage.",
    facts: [
      { t: "Trois épouses", d: "Il répudie Rozala, épouse sa cousine Berthe de Bourgogne et se fait excommunier par le pape. Il finit par la quitter pour Constance d'Arles, avec qui la vie de cour devient, dit-on, un enfer." },
      { t: "Le roi guérisseur", d: "Son biographe, le moine Helgaud, lui attribue des guérisons de malades. On y voit souvent l'origine du « toucher royal » : les rois de France passaient pour guérir les écrouelles." }
    ],
    fam: fm(['huguescapet', 'Adélaïde d\'Aquitaine'], ['Rozala', 'Berthe de Bourgogne', 'Constance d\'Arles'], ['henri1']) },

  { id: "henri1", n: "Henri Ier", g: "capet", lv: 2, sym: "crown", life: [1008, 1060], reign: [1031, 1060], rl: "roi", d: "1008 – 1060",
    role: "Roi des Francs", act: 7,
    q: "Roi capétien qui va chercher une épouse à Kiev",
    one: "Il épouse une princesse de Kiev pour éviter de nouvelles excommunications.",
    facts: [
      { t: "Une épouse lointaine", d: "L'Église interdit d'épouser une parente, même éloignée, et toutes les princesses proches sont ses cousines. En 1051, il épouse donc Anne, fille du grand-prince de Kiev." }
    ],
    fam: fm(['robert2', 'Constance d\'Arles'], ['annekiev'], ['philippe1']) },

  { id: "annekiev", n: "Anne de Kiev", g: "capet", lv: 2, sym: "ring", life: [1030, 1075], d: "v. 1030 – apr. 1075",
    role: "Reine des Francs", act: 7,
    q: "Princesse venue de Kiev, épouse d'Henri Ier, mère de Philippe Ier",
    one: "Elle apporte en France le prénom Philippe.",
    facts: [
      { t: "Un prénom grec", d: "Elle donne à son fils un prénom grec, Philippe, rare en Occident. Il deviendra l'un des prénoms préférés des rois de France." },
      { t: "Un remariage scandaleux", d: "Veuve, elle épouse le comte Raoul de Crépy, déjà marié. Scandale et excommunication. Une charte de 1063 porte sa signature en caractères cyrilliques." }
    ],
    fam: fm(['Iaroslav le Sage'], ['henri1', 'Raoul de Crépy'], ['philippe1']) },

  { id: "philippe1", n: "Philippe Ier", g: "capet", lv: 2, sym: "crown", life: [1052, 1108], reign: [1060, 1108], rl: "roi", d: "1052 – 1108",
    role: "Roi des Francs", act: 7,
    q: "Roi qui règne 48 ans et se fait excommunier pour avoir enlevé la femme du comte d'Anjou",
    one: "Quarante-huit ans de règne et une excommunication.",
    facts: [
      { t: "Bertrade", d: "En 1092, il répudie sa femme et épouse Bertrade de Montfort, épouse du comte d'Anjou. Il est excommunié, et le pape Urbain II renouvelle la sanction au concile de Clermont en 1095. Il ne part donc pas en croisade." }
    ],
    fam: fm(['henri1', 'annekiev'], ['Berthe de Hollande', 'Bertrade de Montfort'], ['louis6']) },

  { id: "guillaumeconq", n: "Guillaume le Conquérant", g: "monde", lv: 4, sym: "sword", life: [1028, 1087], reign: [1066, 1087], rl: "roi d'Angleterre", d: "v. 1028 – 1087",
    role: "Duc de Normandie, roi d'Angleterre", act: 7,
    q: "Duc de Normandie qui conquiert l'Angleterre en 1066",
    one: "Un vassal du roi de France devient roi lui-même.",
    facts: [
      { t: "Le Bâtard", d: "Fils illégitime du duc Robert de Normandie, il devient duc enfant et survit à plusieurs révoltes. On l'appelle d'abord Guillaume le Bâtard." },
      { t: "Hastings, 1066", d: "Le 14 octobre 1066, il bat le roi Harold à Hastings et se fait couronner à Westminster à Noël. La tapisserie de Bayeux raconte l'histoire, version normande." },
      { t: "Un problème pour les Capétiens", d: "Roi en Angleterre, il reste vassal du roi de France pour la Normandie. Un vassal plus puissant que son seigneur : ce casse-tête durera jusqu'à la fin de la guerre de Cent Ans." }
    ],
    fam: fm(['Robert le Magnifique'], ['Mathilde de Flandre'], ['Guillaume le Roux', 'Henri Beauclerc']) },

  { id: "urbain2", n: "Urbain II", g: "eglise", lv: 3, sym: "cross", life: [1035, 1099], reign: [1088, 1099], rl: "pape", pope: true, d: "pape de 1088 à 1099",
    role: "Pape (1088-1099)", act: 7,
    q: "Pape français qui lance la première croisade à Clermont en 1095",
    one: "Le pape qui lance la première croisade.",
    facts: [
      { t: "Clermont, 1095", d: "Né en Champagne, ancien moine de Cluny, il appelle le 27 novembre 1095 à Clermont à délivrer Jérusalem. La foule aurait répondu « Dieu le veut »." },
      { t: "Mort sans savoir", d: "Jérusalem tombe le 15 juillet 1099. Urbain II meurt le 29 juillet, avant que la nouvelle n'arrive à Rome." }
    ],
    fam: fm() },

  { id: "sylvestre2", n: "Sylvestre II (Gerbert)", g: "eglise", lv: 2, sym: "book", life: [945, 1003], reign: [999, 1003], rl: "pape", pope: true, d: "pape de 999 à 1003",
    role: "Savant, pape de l'an mil", act: 7,
    q: "Savant d'Aurillac, premier pape français, en fonction en l'an mil",
    one: "Le pape de l'an mil, savant en mathématiques.",
    facts: [
      { t: "Le savant", d: "Gerbert d'Aurillac étudie en Catalogne, au contact des savoirs arabes. Il enseigne à Reims, notamment au futur Robert II, et contribue à diffuser en Occident l'abaque et les chiffres dits arabes." },
      { t: "Premier pape français", d: "Élu en 999 sous le nom de Sylvestre II, il est le premier pape né dans le royaume de France. Sa science lui vaudra plus tard une réputation de magicien." }
    ],
    fam: fm() },

  { id: "louis6", n: "Louis VI le Gros", g: "capet", lv: 3, sym: "sword", life: [1081, 1137], reign: [1108, 1137], rl: "roi", d: "1081 – 1137",
    role: "Roi des Francs", act: 7,
    q: "Roi qui mate les seigneurs d'Île-de-France et lève l'oriflamme de Saint-Denis",
    one: "Le roi qui fait enfin respecter le roi autour de Paris.",
    facts: [
      { t: "La police des châteaux", d: "Il passe son règne à assiéger les seigneurs pillards d'Île-de-France, comme Hugues du Puiset. Avant lui, aller de Paris à Orléans était risqué." },
      { t: "L'oriflamme, 1124", d: "Quand l'empereur Henri V menace la Champagne, Louis lève l'oriflamme de Saint-Denis. Les grands vassaux répondent, l'empereur fait demi-tour. C'est un des premiers réflexes « nationaux »." },
      { t: "Un cochon change l'histoire", d: "En 1131, son fils aîné Philippe meurt d'une chute de cheval provoquée par un cochon dans une rue de Paris. Le cadet Louis, destiné à l'Église, devient l'héritier." }
    ],
    fam: fm(['philippe1', 'Berthe de Hollande'], ['Adélaïde de Savoie'], ['Philippe', 'louis7']) },

  { id: "suger", n: "Suger", g: "eglise", lv: 3, sym: "arch", life: [1081, 1151], d: "v. 1081 – 1151",
    role: "Abbé de Saint-Denis, conseiller des rois", act: 7,
    q: "Abbé de Saint-Denis qui invente l'architecture gothique et gouverne pendant la croisade",
    one: "Un abbé qui fait entrer la lumière dans les églises.",
    facts: [
      { t: "Le premier gothique", d: "Abbé de Saint-Denis à partir de 1122, il reconstruit l'église. Le chœur consacré en 1144, avec ses grandes verrières, est considéré comme le premier grand édifice gothique." },
      { t: "Régent du royaume", d: "Pendant la deuxième croisade (1147-1149), il gouverne le royaume à la place de Louis VII. À son retour, le roi trouve les caisses en ordre." }
    ],
    fam: fm() },

  { id: "louis7", n: "Louis VII le Jeune", g: "capet", lv: 3, sym: "cross", life: [1120, 1180], reign: [1137, 1180], rl: "roi", d: "1120 – 1180",
    role: "Roi des Francs", act: 7,
    q: "Premier mari d'Aliénor d'Aquitaine, il part à la deuxième croisade",
    one: "Il épouse Aliénor, puis la perd au profit de son pire rival.",
    facts: [
      { t: "Le mariage du siècle", d: "En 1137, il épouse Aliénor, héritière de l'Aquitaine. Le domaine royal s'agrandit d'un coup jusqu'aux Pyrénées. Quelques jours plus tard, son père meurt et il devient roi." },
      { t: "Croisade ratée", d: "De 1147 à 1149, il mène la deuxième croisade avec Aliénor. Échec militaire et crise conjugale." },
      { t: "L'annulation, 1152", d: "Le mariage est annulé pour consanguinité en 1152. Aliénor repart avec l'Aquitaine. Il faudra trois mariages à Louis pour avoir enfin un fils, Philippe, en 1165." }
    ],
    fam: fm(['louis6', 'Adélaïde de Savoie'], ['alienor', 'Constance de Castille', 'Adèle de Champagne'], ['philippe2']) },

  { id: "alienor", n: "Aliénor d'Aquitaine", g: "monde", lv: 4, sym: "ring", life: [1122, 1204], d: "v. 1122 – 1204",
    role: "Duchesse d'Aquitaine, reine de France puis d'Angleterre", act: 7,
    q: "Duchesse d'Aquitaine, reine de France puis reine d'Angleterre",
    one: "Deux fois reine, mère de deux rois d'Angleterre.",
    facts: [
      { t: "L'héritière", d: "Petite-fille de Guillaume IX, le premier troubadour connu, elle hérite à quinze ans du duché d'Aquitaine, plus vaste que le domaine du roi de France." },
      { t: "Huit semaines", d: "Le 21 mars 1152, son mariage avec Louis VII est annulé. Le 18 mai, elle épouse Henri Plantagenêt, comte d'Anjou et duc de Normandie, qui devient roi d'Angleterre en 1154. L'Aquitaine passe aux Plantagenêts." },
      { t: "Prisonnière de son mari", d: "Elle soutient la révolte de ses fils contre Henri II en 1173. Il la garde captive pendant une quinzaine d'années, jusqu'à sa mort en 1189." },
      { t: "Mère de rois", d: "Ses fils Richard Cœur de Lion et Jean sans Terre seront rois d'Angleterre. Elle meurt vers 82 ans et repose à l'abbaye de Fontevraud." }
    ],
    fam: fm(['Guillaume X d\'Aquitaine'], ['louis7', 'henri2plant'], ['richard', 'jeansansterre', 'Marie de Champagne']) },

  { id: "henri2plant", n: "Henri II Plantagenêt", g: "monde", lv: 3, sym: "crown", life: [1133, 1189], reign: [1154, 1189], rl: "roi d'Angleterre", d: "1133 – 1189",
    role: "Roi d'Angleterre, comte d'Anjou", act: 7,
    q: "Comte d'Anjou devenu roi d'Angleterre, second mari d'Aliénor",
    one: "Un vassal du roi de France qui tient la moitié du royaume.",
    facts: [
      { t: "L'empire Plantagenêt", d: "Comte d'Anjou, duc de Normandie, duc d'Aquitaine par sa femme, roi d'Angleterre en 1154 : il contrôle plus de terres en France que le roi de France lui-même." },
      { t: "Thomas Becket", d: "En 1170, des chevaliers tuent dans sa cathédrale l'archevêque de Canterbury, Thomas Becket, après une colère du roi. Henri doit faire pénitence publique." }
    ],
    fam: fm(['Geoffroy Plantagenêt', 'Mathilde l\'Emperesse'], ['alienor'], ['richard', 'jeansansterre']) },

  { id: "bernard", n: "Bernard de Clairvaux", g: "eglise", lv: 3, sym: "cross", life: [1090, 1153], d: "1090 – 1153",
    role: "Abbé de Clairvaux, prédicateur", act: 7,
    q: "Abbé cistercien qui prêche la deuxième croisade à Vézelay en 1146",
    one: "Le moine le plus influent de son siècle.",
    facts: [
      { t: "Les cisterciens", d: "Il fonde l'abbaye de Clairvaux en 1115 et fait de l'ordre de Cîteaux un immense réseau d'abbayes au style dépouillé, en réaction au luxe de Cluny." },
      { t: "Vézelay, 1146", d: "Le 31 mars 1146, il prêche à Vézelay la deuxième croisade devant Louis VII. Il fait aussi condamner Abélard au concile de Sens en 1141." }
    ],
    fam: fm() },

  { id: "abelard", n: "Abélard et Héloïse", g: "eglise", lv: 2, sym: "book", life: [1079, 1164], d: "1079 – 1142 et ? – 1164",
    role: "Philosophe et abbesse, couple célèbre", act: 7,
    q: "Le philosophe et son élève, dont l'amour finit au monastère",
    one: "Le couple d'amoureux le plus célèbre du Moyen Âge.",
    facts: [
      { t: "Le maître et l'élève", d: "Abélard, grand professeur à Paris, devient vers 1117 le précepteur d'Héloïse, nièce du chanoine Fulbert. Ils s'aiment, ont un fils, se marient en secret. Fulbert fait castrer Abélard." },
      { t: "Les lettres", d: "Abélard devient moine, Héloïse abbesse du Paraclet. Leur correspondance est restée célèbre. Ils reposent aujourd'hui ensemble au cimetière du Père-Lachaise." }
    ],
    fam: fm() },

  /* ===== ACTE VIII ===== */
  { id: "philippe2", n: "Philippe II Auguste", g: "capet", lv: 5, sym: "lys", life: [1165, 1223], reign: [1180, 1223], rl: "roi", d: "1165 – 1223",
    role: "Roi de France", act: 8,
    q: "Roi qui reprend la Normandie aux Plantagenêts et gagne à Bouvines en 1214",
    one: "Il fait du petit royaume capétien une grande puissance.",
    facts: [
      { t: "Dieudonné", d: "Né en 1165, après près de trente ans d'attente, il est surnommé Dieudonné. Le chroniqueur Rigord l'appellera Auguste, car il a augmenté le royaume." },
      { t: "Croisé, mais pas trop", d: "En 1190, il part à la troisième croisade avec Richard Cœur de Lion. Il rentre dès 1191 et profite de l'absence de Richard pour attaquer ses terres." },
      { t: "Ingeburge", d: "En 1193, il épouse Ingeburge de Danemark et la répudie le lendemain des noces. Le pape Innocent III jette l'interdit sur le royaume en 1200 : plus de messes, plus de mariages à l'église." },
      { t: "La Normandie, 1204", d: "Il prend Château-Gaillard, la forteresse de Richard, en mars 1204, puis Rouen. La Normandie redevient française, et l'Anjou suit." },
      { t: "Bouvines, 1214", d: "Le 27 juillet 1214, il bat l'empereur Otton IV et le comte de Flandre, alliés de Jean sans Terre. La victoire est fêtée dans tout le royaume. Le roi devient le plus puissant d'Occident." },
      { t: "Paris capitale", d: "Il entoure Paris d'une enceinte, construit la forteresse du Louvre, fait paver des rues. Ses actes parlent de plus en plus de « roi de France » plutôt que de « roi des Francs »." }
    ],
    fam: fm(['louis7', 'Adèle de Champagne'], ['Isabelle de Hainaut', 'Ingeburge de Danemark', 'Agnès de Méranie'], ['louis8']) },

  { id: "richard", n: "Richard Cœur de Lion", g: "monde", lv: 3, sym: "shield", life: [1157, 1199], reign: [1189, 1199], rl: "roi d'Angleterre", d: "1157 – 1199",
    role: "Roi d'Angleterre, duc d'Aquitaine", act: 8,
    q: "Fils d'Aliénor, roi croisé, bâtisseur de Château-Gaillard",
    one: "Un roi d'Angleterre qui parle français et vit en France.",
    facts: [
      { t: "Le croisé captif", d: "En revenant de croisade, il est capturé fin 1192 par le duc d'Autriche, puis livré à l'empereur. L'Angleterre paie une rançon énorme pour le libérer en 1194." },
      { t: "Château-Gaillard", d: "Il fait construire en deux ans, de 1196 à 1198, cette forteresse qui verrouille la Seine. Il meurt en 1199 d'un carreau d'arbalète reçu au siège de Châlus, en Limousin." }
    ],
    fam: fm(['henri2plant', 'alienor'], ['Bérengère de Navarre'], []) },

  { id: "jeansansterre", n: "Jean sans Terre", g: "monde", lv: 3, sym: "crown", life: [1166, 1216], reign: [1199, 1216], rl: "roi d'Angleterre", d: "1166 – 1216",
    role: "Roi d'Angleterre", act: 8,
    q: "Frère de Richard, il perd la Normandie et signe la Grande Charte",
    one: "Le roi qui perd presque tout et signe la Grande Charte.",
    facts: [
      { t: "Le surnom", d: "Dernier fils d'Henri II, il n'avait pas reçu de terres à la naissance : d'où son surnom. Il hérite finalement de tout en 1199, puis en perd une bonne partie." },
      { t: "La Roche-aux-Moines et la Grande Charte", d: "En juillet 1214, il est battu à La Roche-aux-Moines par le prince Louis, fils de Philippe Auguste. Affaibli, il doit accepter en 1215 la Grande Charte, qui limite le pouvoir du roi. Les barons offrent même la couronne au prince Louis." }
    ],
    fam: fm(['henri2plant', 'alienor'], ['Isabelle d\'Angoulême'], ['Henri III']) },

  { id: "innocent3", n: "Innocent III", g: "eglise", lv: 3, sym: "mitre", life: [1160, 1216], reign: [1198, 1216], rl: "pape", pope: true, d: "pape de 1198 à 1216",
    role: "Pape (1198-1216)", act: 8,
    q: "Pape qui frappe la France d'interdit et lance la croisade contre les albigeois",
    one: "Le pape le plus puissant du Moyen Âge.",
    facts: [
      { t: "Le soleil et la lune", d: "Il compare le pape au soleil et le roi à la lune, qui reçoit sa lumière. Il met le royaume de France sous interdit en 1200 à cause d'Ingeburge." },
      { t: "La croisade albigeoise", d: "Après l'assassinat de son légat en 1208, il appelle à la croisade contre les cathares du Midi, et le comte de Toulouse qui les protège. C'est la première croisade lancée contre des chrétiens d'Occident." }
    ],
    fam: fm() },

  { id: "montfort", n: "Simon de Montfort", g: "capet", lv: 2, sym: "sword", life: [1165, 1218], d: "v. 1170 – 1218",
    role: "Chef de la croisade contre les albigeois", act: 8,
    q: "Seigneur d'Île-de-France qui dirige la croisade contre les albigeois",
    one: "Le chef impitoyable de la croisade albigeoise.",
    facts: [
      { t: "Béziers et Muret", d: "En 1209, Béziers est prise et sa population massacrée. La phrase « Tuez-les tous, Dieu reconnaîtra les siens » est attribuée au légat Arnaud Amaury par un moine allemand qui écrit des années plus tard : sans doute inventée. Simon de Montfort bat le roi d'Aragon à Muret en 1213." },
      { t: "Tué par une pierre", d: "En 1218, il assiège Toulouse. Une pierre lancée par une machine de guerre le tue. Selon la Chanson de la croisade, la machine était servie par des femmes de la ville." }
    ],
    fam: fm() },

  { id: "louis8", n: "Louis VIII le Lion", g: "capet", lv: 2, sym: "crown", life: [1187, 1226], reign: [1223, 1226], rl: "roi", d: "1187 – 1226",
    role: "Roi de France", act: 8,
    q: "Fils de Philippe Auguste, presque roi d'Angleterre en 1216",
    one: "Le roi de France qui a failli être roi d'Angleterre.",
    facts: [
      { t: "Roi à Londres", d: "En 1216, invité par les barons anglais révoltés, il débarque en Angleterre et entre dans Londres. La mort de Jean sans Terre rallie les barons à son jeune fils, et Louis repart." },
      { t: "Trois ans de règne", d: "Roi en 1223, il meurt dès 1226 au retour d'une expédition dans le Midi. Son fils Louis a douze ans : sa veuve Blanche de Castille prend les commandes." }
    ],
    fam: fm(['philippe2', 'Isabelle de Hainaut'], ['blanche'], ['louis9', 'charlesanjou']) },

  { id: "blanche", n: "Blanche de Castille", g: "capet", lv: 4, sym: "ring", life: [1188, 1252], reign: [1226, 1234], rl: "régente", d: "1188 – 1252",
    role: "Reine de France, régente", act: 8,
    q: "Petite-fille d'Aliénor, mère et régente de Saint Louis",
    one: "La régente qui tient le royaume d'une main de fer.",
    facts: [
      { t: "Choisie par Aliénor", d: "En 1200, sa grand-mère Aliénor, presque octogénaire, traverse les Pyrénées pour choisir laquelle des princesses de Castille épousera le prince Louis. Elle choisit Blanche." },
      { t: "La régente", d: "Veuve en 1226 avec un roi de douze ans, elle fait face aux révoltes des grands barons et les mate. Elle reprend la régence en 1248, pendant la croisade de son fils, et meurt en 1252." },
      { t: "Une mère exigeante", d: "Selon Joinville, elle disait préférer voir son fils mort plutôt qu'en état de péché mortel." }
    ],
    fam: fm(['Alphonse VIII de Castille', 'Aliénor d\'Angleterre'], ['louis8'], ['louis9', 'charlesanjou']) },

  { id: "louis9", n: "Louis IX (Saint Louis)", g: "capet", lv: 5, sym: "cross", life: [1214, 1270], reign: [1226, 1270], rl: "roi", d: "1214 – 1270",
    role: "Roi de France, saint", act: 8,
    q: "Roi justicier, croisé deux fois, mort à Tunis, canonisé en 1297",
    one: "Le seul roi de France devenu saint.",
    facts: [
      { t: "Le chêne de Vincennes", d: "Selon Joinville, il s'assoit au pied d'un chêne à Vincennes pour écouter lui-même les plaintes. En 1247, il envoie des enquêteurs dans le royaume pour corriger les abus de ses propres officiers." },
      { t: "La Sainte-Chapelle", d: "Il achète la couronne d'épines du Christ à l'empereur latin de Constantinople et fait construire pour elle la Sainte-Chapelle, consacrée en 1248." },
      { t: "Prisonnier en Égypte", d: "Parti en croisade en 1248, il est capturé en avril 1250 après Mansourah. Il doit rendre Damiette et payer une forte rançon. Il reste ensuite quatre ans en Terre sainte." },
      { t: "Le roi de paix", d: "Par le traité de Paris de 1259, il rend des terres au roi d'Angleterre en échange de l'abandon définitif de la Normandie et de l'Anjou. Ses conseillers protestent, lui parle de paix durable." },
      { t: "Un saint intolérant", d: "Sa piété a une face sombre : il fait brûler des exemplaires du Talmud à Paris en 1242 et impose en 1269 aux Juifs de porter un signe distinctif, la rouelle." },
      { t: "Mort à Tunis", d: "Il repart en croisade en 1270 et meurt devant Tunis le 25 août, d'une épidémie. Le pape Boniface VIII le canonise en 1297." }
    ],
    fam: fm(['louis8', 'blanche'], ['margprovence'], ['philippe3', 'Robert de Clermont']) },

  { id: "margprovence", n: "Marguerite de Provence", g: "capet", lv: 2, sym: "ring", life: [1221, 1295], d: "1221 – 1295",
    role: "Reine de France", act: 8,
    q: "Épouse de Saint Louis, qui tient Damiette pendant sa captivité",
    one: "Une reine qui négocie pendant que le roi est captif.",
    facts: [
      { t: "Damiette, 1250", d: "Pendant la captivité de son mari, elle est à Damiette, en Égypte, où elle accouche d'un fils, Jean Tristan. Elle convainc les marchands italiens de rester pour tenir la ville, indispensable à la rançon." }
    ],
    fam: fm(['Raimond-Bérenger IV de Provence'], ['louis9'], ['philippe3']) },

  { id: "joinville", n: "Jean de Joinville", g: "cour", lv: 2, sym: "book", life: [1224, 1317], d: "v. 1224 – 1317",
    role: "Sénéchal de Champagne, biographe de Saint Louis", act: 8,
    q: "Compagnon de croisade de Saint Louis, auteur de sa biographie",
    one: "L'ami qui raconte Saint Louis de près.",
    facts: [
      { t: "Le témoin", d: "Il suit Louis IX à la croisade de 1248 et partage sa captivité. Très âgé, il dicte sa Vie de Saint Louis, achevée en 1309. Il refuse de suivre le roi en 1270, et ne le regrette pas." }
    ],
    fam: fm() },

  { id: "frederic2", n: "Frédéric II", g: "monde", lv: 2, sym: "orb", life: [1194, 1250], reign: [1220, 1250], rl: "empereur", d: "1194 – 1250",
    role: "Empereur, roi de Sicile", act: 8,
    q: "Empereur excommunié qui obtient Jérusalem par la négociation en 1229",
    one: "L'empereur qui récupère Jérusalem sans combattre.",
    facts: [
      { t: "La croisade sans guerre", d: "Excommunié par le pape, il part quand même en croisade et obtient du sultan d'Égypte, par un traité de 1229, la restitution de Jérusalem. Ses contemporains l'appellent « la merveille du monde »." }
    ],
    fam: fm() },

  { id: "charlesanjou", n: "Charles d'Anjou", g: "capet", lv: 2, sym: "crown", life: [1226, 1285], reign: [1266, 1285], rl: "roi de Sicile", d: "1226 – 1285",
    role: "Frère de Saint Louis, roi de Sicile", act: 8,
    q: "Frère cadet de Saint Louis, devenu roi de Sicile, chassé par les Vêpres siciliennes",
    one: "Le frère ambitieux, roi en Italie.",
    facts: [
      { t: "Les Vêpres siciliennes", d: "Devenu roi de Sicile en 1266 avec l'appui du pape, il est chassé de l'île par la révolte des Vêpres siciliennes en 1282. Il garde Naples." }
    ],
    fam: fm(['louis8', 'blanche'], ['Béatrice de Provence'], []) },

  { id: "philippe3", n: "Philippe III le Hardi", g: "capet", lv: 1, sym: "crown", life: [1245, 1285], reign: [1270, 1285], rl: "roi", d: "1245 – 1285",
    role: "Roi de France", act: 8,
    q: "Fils de Saint Louis, devenu roi devant Tunis",
    one: "Un roi qui rapporte les ossements de son père.",
    facts: [
      { t: "Un retour funèbre", d: "Devenu roi devant Tunis en 1270, il rentre en France avec les restes de son père, de sa femme, de son frère et de son fils, morts pendant l'expédition. Il meurt en 1285 à Perpignan, au retour d'une croisade contre l'Aragon." }
    ],
    fam: fm(['louis9', 'margprovence'], ['Isabelle d\'Aragon', 'Marie de Brabant'], ['philippe4', 'Charles de Valois']) }
);

GEXTRA.push(
  { id: "x_louis2", n: "Louis II le Bègue", g: "caro", reign: [877, 879], life: [846, 879], rl: "roi", d: "règne 877 – 879" },
  { id: "x_carloman2", n: "Louis III et Carloman II", g: "caro", reign: [879, 884], life: [863, 884], rl: "rois", d: "règne 879 – 884" },
  { id: "x_charlesgros", n: "Charles le Gros", g: "caro", reign: [884, 887], life: [839, 888], rl: "empereur, roi", d: "règne 884 – 887" },
  { id: "x_robert1", n: "Robert Ier", g: "capet", reign: [922, 923], life: [866, 923], rl: "roi", d: "règne 922 – 923" },
  { id: "x_raoul", n: "Raoul de Bourgogne", g: "caro", reign: [923, 936], life: [890, 936], rl: "roi", d: "règne 923 – 936" },
  { id: "x_louis4", n: "Louis IV d'Outremer", g: "caro", reign: [936, 954], life: [920, 954], rl: "roi", d: "règne 936 – 954" },
  { id: "x_lothaire", n: "Lothaire", g: "caro", reign: [954, 986], life: [941, 986], rl: "roi", d: "règne 954 – 986" },
  { id: "x_louis5", n: "Louis V", g: "caro", reign: [986, 987], life: [967, 987], rl: "roi", d: "règne 986 – 987" }
);

EVENTS.push(
  { id: "e840", y: 840, t: "Mort de Louis le Pieux", d: "Ses trois fils se disputent aussitôt l'Empire.", act: 6 },
  { id: "e841", y: 841, t: "Bataille de Fontenoy-en-Puisaye", d: "Louis le Germanique et Charles le Chauve battent leur frère Lothaire.", act: 6 },
  { id: "e842", y: 842, t: "Serments de Strasbourg", d: "Louis et Charles s'allient. Le texte en langue romane est l'ancêtre écrit du français.", act: 6 },
  { id: "e843", y: 843, t: "Traité de Verdun", d: "L'Empire est partagé en trois : Francie occidentale, Francie médiane, Francie orientale.", act: 6 },
  { id: "e845", y: 845, t: "Les Vikings pillent Paris", d: "Charles le Chauve paie 7 000 livres d'argent pour qu'ils repartent.", act: 6 },
  { id: "e875", y: 875, t: "Charles le Chauve couronné empereur", d: "À Rome, à Noël, par le pape Jean VIII.", act: 6 },
  { id: "e885", y: 885, t: "Siège de Paris par les Vikings", d: "Le comte Eudes et l'évêque Gozlin défendent la Cité jusqu'en 886.", act: 6 },
  { id: "e888", y: 888, t: "Eudes élu roi", d: "Premier roi non carolingien de Francie occidentale.", act: 6 },
  { id: "e910", y: 910, t: "Fondation de l'abbaye de Cluny", d: "Placée sous la seule autorité du pape.", act: 6, nop: true },
  { id: "e911", y: 911, ap: true, t: "Traité de Saint-Clair-sur-Epte", d: "Charles le Simple confie à Rollon la région de Rouen : naissance de la Normandie.", act: 6, nop: true },
  { id: "e962", y: 962, t: "Otton Ier couronné empereur", d: "Naissance de ce qu'on appellera le Saint-Empire romain germanique.", act: 6, w: true, nop: true },

  { id: "e987", y: 987, t: "Hugues Capet élu roi", d: "Fin des Carolingiens, début des Capétiens.", act: 7, nop: true },
  { id: "e1051", y: 1051, t: "Henri Ier épouse Anne de Kiev", d: "Une reine venue de l'actuelle Ukraine.", act: 7, nop: true },
  { id: "e1054", y: 1054, t: "Schisme entre Rome et Constantinople", d: "Séparation des Églises catholique et orthodoxe.", act: 7, w: true, nop: true },
  { id: "e1066", y: 1066, t: "Bataille d'Hastings", d: "Guillaume, duc de Normandie, devient roi d'Angleterre.", act: 7, nop: true },
  { id: "e1095", y: 1095, t: "Appel de Clermont", d: "Urbain II lance la première croisade.", act: 7 },
  { id: "e1099", y: 1099, t: "Prise de Jérusalem par les croisés", d: "Le 15 juillet, après un siège. Massacre de la population.", act: 7, nop: true },
  { id: "e1137", y: 1137, t: "Louis VII épouse Aliénor d'Aquitaine", d: "Le domaine royal s'étend jusqu'aux Pyrénées.", act: 7, nop: true },
  { id: "e1144", y: 1144, t: "Consécration du chœur de Saint-Denis", d: "L'œuvre de Suger : naissance du gothique.", act: 7, nop: true },
  { id: "e1147", y: 1147, t: "Départ de la deuxième croisade", d: "Louis VII et Aliénor partent pour l'Orient.", act: 7, nop: true },
  { id: "e1152", y: 1152, t: "Aliénor épouse Henri Plantagenêt", d: "Huit semaines après l'annulation de son mariage avec Louis VII.", act: 7, nop: true },
  { id: "e1163", y: 1163, t: "Début du chantier de Notre-Dame de Paris", d: "Sous l'évêque Maurice de Sully. Il dure près de deux siècles.", act: 7, nop: true },

  { id: "e1190", y: 1190, t: "Départ de la troisième croisade", d: "Philippe Auguste et Richard Cœur de Lion partent de Vézelay.", act: 8, nop: true },
  { id: "e1204", y: 1204, t: "Chute de Château-Gaillard", d: "Philippe Auguste reprend la Normandie aux Plantagenêts.", act: 8 },
  { id: "e1209", y: 1209, t: "Début de la croisade contre les albigeois", d: "Prise et massacre de Béziers.", act: 8 },
  { id: "e1214", y: 1214, t: "Bataille de Bouvines", d: "Le 27 juillet, Philippe Auguste bat l'empereur Otton IV et le comte de Flandre.", act: 8 },
  { id: "e1215", y: 1215, t: "La Grande Charte (Magna Carta)", d: "Jean sans Terre doit limiter son pouvoir.", act: 8, w: true, nop: true },
  { id: "e1226", y: 1226, t: "Louis IX devient roi", d: "À douze ans. Sa mère Blanche de Castille gouverne.", act: 8, nop: true },
  { id: "e1244", y: 1244, t: "Chute de Montségur", d: "Plus de deux cents cathares sont brûlés.", act: 8, nop: true },
  { id: "e1248", y: 1248, t: "Consécration de la Sainte-Chapelle", d: "Construite pour la couronne d'épines.", act: 8, nop: true },
  { id: "e1250", y: 1250, t: "Saint Louis prisonnier en Égypte", d: "Capturé après la bataille de Mansourah.", act: 8, nop: true },
  { id: "e1257", y: 1257, t: "Fondation de la Sorbonne", d: "Collège fondé par Robert de Sorbon, chapelain du roi.", act: 8, nop: true },
  { id: "e1270", y: 1270, t: "Mort de Saint Louis devant Tunis", d: "Le 25 août, d'une épidémie.", act: 8, nop: true }
);

FRISE[6] = ["e840", "e841", "e842", "e843", "e845", "e875", "e885", "e911"];
FRISE[7] = ["e987", "e1066", "e1095", "e1099", "e1137", "e1144", "e1152", "e1163"];
FRISE[8] = ["e1190", "e1204", "e1209", "e1214", "e1226", "e1244", "e1250", "e1270"];

MARR.push(
  ["louis", "judith", "819. La seconde épouse donne un fils de plus, et l'héritage explose.", false],
  ["henri1", "annekiev", "1051. Une princesse de Kiev, pour éviter d'épouser une cousine.", true],
  ["louis7", "alienor", "1137. L'Aquitaine rejoint le domaine royal... pour quinze ans.", false],
  ["alienor", "henri2plant", "1152. Huit semaines après l'annulation : l'Aquitaine passe aux Plantagenêts.", true],
  ["philippe2", "Ingeburge de Danemark", "1193. Répudiée au lendemain des noces, ce qui vaut l'interdit au royaume.", true],
  ["louis8", "blanche", "1200. Une princesse de Castille choisie par sa grand-mère Aliénor.", true],
  ["louis9", "margprovence", "1234. Une reine qui tiendra Damiette pendant la captivité du roi.", false]
);

WORLD.push(
  { n: "Vikings et Normands", sub: "Scandinavie, puis Normandie", ppl: ["rollon", "charleschauve", "eudesparis", "guillaumeconq"], t: "Ils remontent les fleuves au IXe siècle et pillent Paris en 845. En 911, Rollon reçoit la région de Rouen. Ses descendants, les ducs de Normandie, conquièrent l'Angleterre en 1066." },
  { n: "Angleterre des Plantagenêts", sub: "Angleterre, Normandie, Anjou, Aquitaine", ppl: ["henri2plant", "alienor", "richard", "jeansansterre"], t: "À partir de 1154, le roi d'Angleterre est aussi un grand seigneur en France, plus riche que le roi lui-même. Philippe Auguste lui reprend la Normandie en 1204. La rivalité mène tout droit à la guerre de Cent Ans." },
  { n: "Saint-Empire", sub: "Allemagne et Italie du Nord", ppl: ["louisgermanique", "frederic2"], t: "Héritier de la Francie orientale, il renaît en 962 avec Otton Ier. Ses empereurs se disputent avec les papes et parfois avec les rois de France, comme à Bouvines en 1214." },
  { n: "Orient latin et croisades", sub: "Levant, Égypte, Tunis", ppl: ["urbain2", "louis7", "philippe2", "louis9"], t: "De 1095 à 1270, les croisades mobilisent rois et chevaliers français. Les Occidentaux tiennent Jérusalem de 1099 à 1187. Saint Louis meurt devant Tunis lors de la dernière grande croisade." }
);

KEYYEARS.push(843, 885, 911, 987, 1066, 1095, 1152, 1214, 1248, 1270);

STORY[6] = [
  { y: "840", t: "Trois frères, un empire", ppl: ["louis", "lothaire1", "louisgermanique", "charleschauve"], p: "Louis le Pieux meurt en 840. Le Chronoscope résume la situation : un empire, trois fils, zéro envie de partager. Lothaire, l'aîné, veut tout. Louis, à l'est, et Charles, le petit dernier, refusent. Le 25 juin 841, à Fontenoy-en-Puisaye, on se massacre en famille. Lothaire perd, mais ne renonce pas." },
  { y: "842", t: "Strasbourg, des serments bilingues", ppl: ["louisgermanique", "charleschauve"], p: "Février 842. Louis et Charles jurent de rester alliés devant leurs armées. Astuce : chacun jure dans la langue des soldats de l'autre. Louis parle en roman, Charles en tudesque. Le texte roman est le plus vieux document connu dans un ancêtre du français. Retiens cette date : c'est la naissance écrite de ta langue, au milieu d'une querelle de famille." },
  { y: "843", t: "Verdun, le grand découpage", ppl: ["lothaire1", "louisgermanique", "charleschauve"], p: "En août 843, à Verdun, les trois frères coupent l'Empire en trois bandes verticales. À l'ouest, Charles : la future France. À l'est, Louis : la future Allemagne. Au milieu, Lothaire garde le titre d'empereur, Aix et Rome. Ce royaume du milieu, trop long et trop mince, va devenir le terrain de jeu préféré des guerres européennes pendant mille ans. Bravo à tous." },
  { y: "845", t: "Les Vikings à Paris", ppl: ["charleschauve"], p: "Le jour de Pâques 845, des Vikings remontent la Seine et pillent Paris. Charles le Chauve leur verse 7 000 livres d'argent pour qu'ils s'en aillent. Ils s'en vont. Puis ils reviennent, car un client qui paie est un client fidèle. Leurs bateaux à fond plat remontent tous les fleuves. Le pouvoir passe peu à peu aux comtes qui, eux, sont sur place pour se battre." },
  { y: "885", t: "Paris tient bon", ppl: ["eudesparis"], p: "Novembre 885 : des centaines de navires vikings encerclent l'île de la Cité. Le comte Eudes et l'évêque Gozlin tiennent un an. L'empereur Charles le Gros arrive enfin... et paie les assiégeants pour qu'ils aillent piller la Bourgogne. Les Parisiens retiennent la leçon. En 888, les grands élisent Eudes roi. Le Chronoscope note : sa famille reviendra un siècle plus tard, pour huit siècles." },
  { y: "911", t: "Rollon change de métier", ppl: ["rollon", "charlessimple"], p: "Vers 911, à Saint-Clair-sur-Epte, Charles le Simple fait un pari : donner la région de Rouen au chef viking Rollon, à charge pour lui de bloquer la Seine aux autres Vikings. Rollon accepte et se fait baptiser. Ses descendants deviennent ducs de Normandie, parlent français et, en 1066, iront conquérir l'Angleterre. Le pari a un peu trop bien marché." }
];

STORY[7] = [
  { y: "987", t: "Senlis, un roi élu", ppl: ["huguescapet"], p: "Le dernier Carolingien, Louis V, meurt d'une chute de cheval en 987. Les grands se réunissent à Senlis et élisent Hugues, duc des Francs. Son domaine ? Quelques terres entre Paris et Orléans. Ses vassaux normands ou aquitains sont plus riches que lui. Personne ne parie sur lui. Ses descendants régneront jusqu'en 1848. Le Chronoscope adore les outsiders." },
  { y: "1051", t: "Une reine venue de Kiev", ppl: ["henri1", "annekiev"], p: "Problème capétien : l'Église interdit d'épouser une parente, et toutes les princesses du voisinage sont des cousines. Henri Ier envoie donc chercher une épouse à Kiev. Anne arrive en 1051, sait écrire, signe en cyrillique, et donne à son fils un prénom grec : Philippe. Le prénom fera carrière." },
  { y: "1066", t: "Le vassal devient roi", ppl: ["guillaumeconq", "philippe1"], p: "Le 14 octobre 1066, Guillaume, duc de Normandie, bat Harold à Hastings et devient roi d'Angleterre. Pour le roi de France, c'est un cauchemar juridique : son vassal pour la Normandie est désormais roi lui-même. Ce problème va empoisonner les relations franco-anglaises pendant près de quatre siècles." },
  { y: "1095", t: "Clermont, « Dieu le veut »", ppl: ["urbain2", "philippe1"], p: "Le 27 novembre 1095, à Clermont, le pape Urbain II appelle à délivrer Jérusalem. Des milliers de chevaliers partent. Le roi Philippe Ier, lui, reste à la maison : il est excommunié pour avoir épousé la femme du comte d'Anjou. Jérusalem tombe en juillet 1099. Urbain II meurt deux semaines plus tard sans l'apprendre. Le timing, toujours." },
  { y: "1144", t: "Saint-Denis, la lumière", ppl: ["suger", "louis6", "louis7"], p: "L'abbé Suger, conseiller de Louis VI puis de Louis VII, veut une église pleine de lumière. Il fait reconstruire Saint-Denis avec de grandes verrières et des voûtes sur croisées d'ogives. Le chœur est consacré en 1144. On appellera ce style « gothique » plus tard, et c'était une insulte. Notre-Dame de Paris suit dès 1163." },
  { y: "1152", t: "Aliénor change d'avis", ppl: ["alienor", "louis7", "henri2plant"], p: "Aliénor d'Aquitaine a épousé Louis VII en 1137. Quinze ans, une croisade ratée et deux filles plus tard, le mariage est annulé en mars 1152. En mai, elle épouse Henri Plantagenêt, qui devient roi d'Angleterre en 1154. L'Aquitaine part avec elle. Le roi de France se retrouve face à un vassal qui tient tout l'ouest du royaume. Le Chronoscope déconseille de vexer une duchesse." }
];

STORY[8] = [
  { y: "1190", t: "Deux rois en croisade", ppl: ["philippe2", "richard"], p: "En 1190, Philippe Auguste et Richard Cœur de Lion partent ensemble pour la troisième croisade. Amis ? Pas vraiment. Philippe rentre dès 1191, et profite de l'absence de Richard pour grignoter ses terres. Richard, capturé au retour, paie une rançon énorme, revient furieux et construit Château-Gaillard en deux ans. Ambiance." },
  { y: "1204", t: "Château-Gaillard tombe", ppl: ["philippe2", "jeansansterre"], p: "Richard meurt en 1199. Son frère Jean sans Terre n'a ni son talent ni sa chance. En mars 1204, Philippe prend Château-Gaillard, puis Rouen. La Normandie redevient française après trois siècles. Jean perd ensuite l'Anjou et le Maine. Son surnom, sans Terre, devient prophétique." },
  { y: "1209", t: "La croisade du Midi", ppl: ["innocent3", "montfort"], p: "Dans le Midi, les cathares rejettent l'Église officielle. Le pape Innocent III lance contre eux une croisade, menée par des barons du Nord. Béziers est massacrée en 1209. Simon de Montfort mène une guerre de vingt ans. À la fin, le Languedoc passe sous l'autorité du roi de France, et l'Inquisition s'installe." },
  { y: "1214", t: "Bouvines, un dimanche de juillet", ppl: ["philippe2", "jeansansterre", "louis8"], p: "Le 27 juillet 1214, Philippe Auguste affronte à Bouvines l'empereur Otton IV et le comte de Flandre, alliés de Jean sans Terre. Le roi est jeté à bas de son cheval, se relève, et gagne. Quelques semaines plus tôt, son fils Louis avait battu Jean lui-même à La Roche-aux-Moines. Le royaume fait la fête. Les historiens y voient un moment fondateur." },
  { y: "1248", t: "Le saint part en croisade", ppl: ["louis9", "blanche", "margprovence", "joinville"], p: "Louis IX, roi à douze ans sous la tutelle de sa mère Blanche de Castille, est devenu un roi pieux et justicier. En 1248, il consacre la Sainte-Chapelle et part pour l'Égypte. En 1250, il est capturé à Mansourah. Sa femme Marguerite, à Damiette, accouche et négocie en même temps. Joinville est là, et prend des notes." },
  { y: "1270", t: "Tunis, la fin d'un saint", ppl: ["louis9", "philippe3", "charlesanjou"], p: "En 1270, Louis IX repart en croisade, vers Tunis cette fois. Une épidémie frappe le camp. Le roi meurt le 25 août. Son fils Philippe III rentre avec les cercueils de sa famille. Vingt-sept ans plus tard, Louis est canonisé. Le Chronoscope rappelle que ce saint fit aussi brûler le Talmud : la sainteté médiévale a ses angles morts." }
];

TALK[6] = { who: "charleschauve", place: "Strasbourg, 842",
  intro: "Tu atterris au milieu de deux armées alignées dans le froid de février. Un jeune roi de dix-huit ans, très chevelu malgré son surnom futur, te fait signe d'approcher. Charles a besoin d'un conseil, et toi tu as le temps.",
  beats: [
    { say: "Mon frère Louis et moi allons jurer de rester alliés contre Lothaire. Mais nos soldats ne parlent pas la même langue. Comment faire pour que tout le monde comprenne ?",
      learn: "Le 14 février 842, Louis jure en langue romane pour être compris des soldats de Charles, et Charles jure en langue tudesque pour ceux de Louis. Ce sont les Serments de Strasbourg, plus ancien texte connu en ancêtre du français.",
      opts: [{ t: "Chacun jure dans la langue des soldats de l'autre.", r: "Ingénieux. Mon chroniqueur Nithard va tout noter, et des siècles de professeurs vont te remercier.", x: 10 },
        { t: "En latin, comme à la messe.", r: "Mes soldats ne comprennent pas le latin. Ils croiront qu'on les bénit et partiront dîner.", x: 3 },
        { t: "Par signes.", r: "Un serment par signes ? Mon frère risque de mal interpréter certains gestes.", x: 3 }] },
    { say: "L'an prochain, nous partagerons l'Empire à trois. Lothaire veut le milieu, avec Aix et Rome. Moi, quelle part dois-je prendre ?",
      learn: "Au traité de Verdun (843), Charles reçoit la Francie occidentale, noyau de la France. Louis la Francie orientale. Lothaire le royaume du milieu, avec le titre d'empereur.",
      opts: [{ t: "L'ouest : un bloc compact, avec la Seine et la Loire.", r: "Un bloc compact. Pas glorieux, mais solide. Mes descendants pourront en faire quelque chose.", x: 10 },
        { t: "Le milieu, avec le titre d'empereur.", r: "Le titre, Lothaire le veut. Et une bande de terre de la Frise à Rome, c'est impossible à défendre.", x: 3 },
        { t: "L'est, au-delà du Rhin.", r: "C'est la part de Louis. Je tiens à garder un frère allié.", x: 3 }] },
    { say: "L'an dernier, des hommes du Nord ont pillé Rouen. Ils remontent les fleuves plus vite que mes comtes. Que faire ?",
      learn: "Charles le Chauve paie les Vikings à plusieurs reprises, notamment 7 000 livres d'argent après le pillage de Paris en 845. Peu à peu, ce sont les comtes locaux, comme Robert le Fort, qui organisent la défense.",
      opts: [{ t: "Confie la défense aux comtes sur place, et paie quand il le faut.", r: "Pragmatique. Mes comtes deviendront puissants, mais au moins ils seront là quand les bateaux arriveront.", x: 10 },
        { t: "Construis une flotte pour les battre en mer.", r: "Avec quels marins ? Mes Francs ont le mal de mer sur la Marne.", x: 3 },
        { t: "Ignore-les, ils finiront par partir.", r: "Ils partent, oui. Avec mes trésors.", x: 3 }] }
  ],
  outro: "Charles remercie d'un hochement de tête et retourne vers ses troupes. Le Chronoscope chuchote : « Ce jeune homme vient de fonder un royaume sans le savoir. Le tien. »" };

TALK[7] = { who: "alienor", place: "Beaugency, mars 1152",
  intro: "Une salle d'évêques solennels vient d'annuler un mariage royal. Dans le couloir, une femme d'une trentaine d'années, très élégante, sourit pour la première fois depuis des années. Aliénor t'a repérée.",
  beats: [
    { say: "Les évêques ont annulé mon mariage avec Louis. Officiellement pour une raison très pieuse. Devine laquelle.",
      learn: "Le mariage est annulé en 1152 pour consanguinité : les époux sont cousins éloignés. Le vrai motif : quinze ans de mésentente et aucun fils, seulement deux filles.",
      opts: [{ t: "Vous êtes cousins, et vous n'avez pas de fils.", r: "Cousins au quatrième degré, découverts après quinze ans. Quelle chance que l'Église ait si bonne mémoire.", x: 10 },
        { t: "Le roi veut devenir moine.", r: "Il en a l'âme, mais il veut surtout un fils. On m'a prêté une phrase : j'aurais épousé un moine, pas un roi.", x: 4 },
        { t: "Tu as refusé la croisade.", r: "Refusé ? J'y étais ! Et je suis rentrée plus fâchée encore.", x: 3 }] },
    { say: "Je repars avec l'Aquitaine, qui est à moi. Il me faut un mari capable de la défendre. Qui me conseilles-tu ?",
      learn: "Huit semaines plus tard, le 18 mai 1152, elle épouse Henri Plantagenêt, comte d'Anjou et duc de Normandie. Roi d'Angleterre en 1154, il tient tout l'ouest de la France.",
      opts: [{ t: "Henri d'Anjou : jeune, ambitieux, futur roi d'Angleterre.", r: "Onze ans de moins que moi, et l'énergie de dix hommes. Louis va être très, très contrarié.", x: 10 },
        { t: "Retourne avec Louis, il va changer.", r: "Quinze ans que j'attends. La patience est une vertu, pas une prison.", x: 3 },
        { t: "Reste seule, tu es duchesse.", r: "Une duchesse seule attire les ravisseurs comme le miel les guêpes. Deux ont déjà essayé sur la route.", x: 4 }] },
    { say: "Mon grand-père Guillaume composait des chansons d'amour, et je protège les poètes. À ton époque, se souvient-on de cela ?",
      learn: "Son grand-père Guillaume IX d'Aquitaine est le premier troubadour dont les poèmes nous sont parvenus. Aliénor et ses filles protègent la poésie courtoise, en langue d'oc puis d'oïl.",
      opts: [{ t: "Oui, ton grand-père est le premier troubadour connu.", r: "Bien. Qu'on se souvienne des poètes plus que des évêques.", x: 10 },
        { t: "On se souvient surtout de tes maris.", r: "Évidemment. Les chroniqueurs sont des hommes.", x: 4 },
        { t: "Non, on préfère la musique moderne.", r: "Moderne ? Tout est moderne un jour. Même nous.", x: 3 }] }
  ],
  outro: "Aliénor s'éloigne vers ses chevaux, déjà en train de dicter une lettre. Le Chronoscope soupire : « La guerre de Cent Ans vient de commencer. Ils ne le savent pas encore. »" };

TALK[8] = { who: "louis9", place: "Bois de Vincennes, vers 1260",
  intro: "Sous un grand chêne, un homme simplement vêtu écoute des paysans, des marchands, une veuve. Pas de gardes entre eux et lui. C'est le roi. Il t'invite à t'asseoir, comme si c'était normal qu'une inconnue en baskets se présente.",
  beats: [
    { say: "Un homme se plaint qu'un de mes baillis lui a pris sa terre. Ce bailli est mon officier. Que dois-je faire ?",
      learn: "Dès 1247, Louis IX envoie des enquêteurs dans tout le royaume pour recueillir les plaintes contre ses propres agents, et faire réparer les abus. Joinville raconte les audiences sous le chêne de Vincennes.",
      opts: [{ t: "Envoie des enquêteurs et répare l'injustice, même si c'est ton officier.", r: "C'est ce que je fais depuis 1247. Un roi qui couvre ses officiers injustes est complice.", x: 10 },
        { t: "Soutiens ton bailli, sinon tu perds ton autorité.", r: "Mon autorité vient de la justice, pas de la peur. Mon grand-père pensait autrement, c'est vrai.", x: 3 },
        { t: "Demande au pape.", r: "Le pape a assez à faire. Et cette terre est dans mon royaume.", x: 3 }] },
    { say: "J'ai acheté la couronne d'épines du Christ et construit une chapelle pour elle. Mes conseillers disent que c'était trop cher. Qu'en penses-tu ?",
      learn: "La couronne d'épines, achetée à l'empereur latin de Constantinople, est installée dans la Sainte-Chapelle, consacrée en 1248. Selon les comptes conservés, les reliques ont coûté plus cher que la chapelle elle-même.",
      opts: [{ t: "C'est cher, mais Paris devient une capitale sainte.", r: "Tu comprends. Un roi chrétien protège les reliques, et le royaume en est grandi.", x: 10 },
        { t: "Revends-la, et finance ta croisade.", r: "Vendre la couronne du Christ ? Même un marchand de Venise n'oserait pas me le proposer.", x: 3 },
        { t: "Construis plutôt un hôpital.", r: "J'ai fondé les Quinze-Vingts pour les aveugles. Je fais les deux.", x: 5 }] },
    { say: "Je songe à repartir en croisade. Joinville refuse de me suivre. A-t-il raison ?",
      learn: "Louis IX repart en 1270 vers Tunis et y meurt d'une épidémie le 25 août. Joinville, qui avait refusé, écrit plus tard que ceux qui lui avaient conseillé ce départ avaient commis un péché mortel.",
      opts: [{ t: "Oui. Le royaume a besoin de toi ici.", r: "Tu parles comme Joinville. Mais j'ai fait un vœu, et un vœu ne se reprend pas.", x: 10 },
        { t: "Non, pars, Dieu te protégera.", r: "Je l'espère. Je laisse tout de même un testament.", x: 4 },
        { t: "Envoie ton frère Charles à ta place.", r: "Charles a ses propres ambitions en Sicile. Il viendra, mais pour ses intérêts.", x: 4 }] }
  ],
  outro: "Le roi se lève pour accueillir un nouveau plaignant. Le Chronoscope murmure : « Il mourra à Tunis dans dix ans. Et il deviendra le seul roi de France canonisé. »" };

QUIZ[6] = [
  { q: "En quelle année le traité de Verdun partage-t-il l'Empire carolingien ?", o: ["843", "814", "877", "911"], c: 0, x: "En août 843, entre les trois petits-fils de Charlemagne." },
  { q: "Qui reçoit la Francie occidentale à Verdun ?", o: ["Charles le Chauve", "Lothaire Ier", "Louis le Germanique", "Charles le Gros"], c: 0, x: "C'est le noyau du futur royaume de France." },
  { q: "Pourquoi les Serments de Strasbourg (842) sont-ils célèbres ?", o: ["Plus ancien texte connu dans un ancêtre du français", "Premier traité avec les Vikings", "Fondation de Strasbourg", "Premier sacre à Reims"], c: 0, x: "Louis le Germanique y jure en langue romane." },
  { q: "Qui défend Paris contre les Vikings en 885-886 ?", o: ["Le comte Eudes", "Charles le Chauve", "Rollon", "Hugues Capet"], c: 0, x: "Avec l'évêque Gozlin. Il est élu roi en 888." },
  { q: "Avec quel traité Rollon reçoit-il la région de Rouen ?", o: ["Saint-Clair-sur-Epte", "Verdun", "Senlis", "Quierzy"], c: 0, x: "Vers 911, avec Charles le Simple." },
  { q: "Quel pape couronne Charles le Chauve empereur en 875 ?", o: ["Jean VIII", "Léon III", "Urbain II", "Adrien Ier"], c: 0, x: "À Noël 875, à Rome." },
  { q: "Que fonde Guillaume d'Aquitaine en 910 ?", o: ["L'abbaye de Cluny", "L'abbaye de Saint-Denis", "Notre-Dame de Paris", "La Sorbonne"], c: 0, x: "Placée sous la seule protection du pape." }
];
QUIZ[7] = [
  { q: "Où Hugues Capet est-il élu roi en 987 ?", o: ["À Senlis", "À Reims", "À Paris", "À Aix-la-Chapelle"], c: 0, x: "Poussé par l'archevêque Adalbéron de Reims." },
  { q: "Pourquoi Henri Ier épouse-t-il une princesse de Kiev ?", o: ["Pour éviter d'épouser une cousine", "Pour obtenir l'Ukraine", "Parce que le pape l'impose", "Pour faire alliance contre les Vikings"], c: 0, x: "L'Église interdit les mariages entre parents, même éloignés." },
  { q: "Qui lance la première croisade à Clermont en 1095 ?", o: ["Urbain II", "Innocent III", "Bernard de Clairvaux", "Sylvestre II"], c: 0, x: "Le 27 novembre 1095." },
  { q: "Quelle église est considérée comme le premier grand édifice gothique ?", o: ["La basilique de Saint-Denis", "Notre-Dame de Paris", "La Sainte-Chapelle", "La cathédrale de Chartres"], c: 0, x: "Son chœur, voulu par Suger, est consacré en 1144." },
  { q: "Qui Aliénor épouse-t-elle en 1152 après l'annulation de son mariage ?", o: ["Henri Plantagenêt", "Richard Cœur de Lion", "Guillaume le Conquérant", "Louis VI"], c: 0, x: "Il devient roi d'Angleterre en 1154." },
  { q: "Pourquoi le vassal Guillaume pose-t-il problème au roi de France après 1066 ?", o: ["Il devient roi d'Angleterre tout en restant vassal pour la Normandie", "Il refuse d'être baptisé", "Il veut devenir pape", "Il conquiert Paris"], c: 0, x: "Un vassal aussi puissant que son seigneur." },
  { q: "Quel moine prêche la deuxième croisade à Vézelay en 1146 ?", o: ["Bernard de Clairvaux", "Suger", "Abélard", "Urbain II"], c: 0, x: "Devant Louis VII." }
];
QUIZ[8] = [
  { q: "Contre qui Philippe Auguste se bat-il à Bouvines en 1214 ?", o: ["L'empereur Otton IV et le comte de Flandre", "Richard Cœur de Lion", "Les cathares", "Le roi d'Aragon"], c: 0, x: "Le 27 juillet 1214, alliés de Jean sans Terre." },
  { q: "Quelle forteresse tombe en 1204, ouvrant la Normandie au roi ?", o: ["Château-Gaillard", "Montségur", "Le Louvre", "Carcassonne"], c: 0, x: "Construite par Richard Cœur de Lion de 1196 à 1198." },
  { q: "Qui lance la croisade contre les albigeois ?", o: ["Innocent III", "Urbain II", "Saint Louis", "Philippe Auguste"], c: 0, x: "Après l'assassinat de son légat en 1208." },
  { q: "Qui gouverne quand Louis IX devient roi à douze ans ?", o: ["Sa mère, Blanche de Castille", "Sa femme, Marguerite de Provence", "Son oncle Philippe", "Le pape"], c: 0, x: "Elle mate les révoltes des barons." },
  { q: "Pour quelle relique la Sainte-Chapelle est-elle construite ?", o: ["La couronne d'épines", "La sainte ampoule", "Le suaire de Turin", "La lance de Longin"], c: 0, x: "Consacrée en 1248." },
  { q: "Où meurt Saint Louis en 1270 ?", o: ["Devant Tunis", "À Damiette", "À Jérusalem", "À Vincennes"], c: 0, x: "D'une épidémie, le 25 août." },
  { q: "Pourquoi Jean sans Terre porte-t-il ce surnom ?", o: ["Dernier fils, il n'avait pas reçu de terres à la naissance", "Il a perdu toute la France", "Il était marin", "Il a refusé un héritage"], c: 0, x: "Il hérite pourtant de tout en 1199." }
];
}

/* DONNEES 4 : actes IX à XI (1285 à 1547) */
{
const fm = (par, sp, ch) => ({ par: par || [], sp: sp || [], ch: ch || [] });

ACTS.push(
  { id: 9, num: "IX", title: "Le roi de fer et les rois maudits", short: "Philippe le Bel", a: 1285, b: 1328, sym: "flame",
    lead: "Un roi beau et glacial gifle la papauté, brûle les Templiers et laisse trois fils. Aucun n'aura de fils. Coïncidence ?",
    world: [["1291", "Chute d'Acre, fin des États latins d'Orient"], ["1298", "Marco Polo dicte le Devisement du monde"], ["1321", "Mort de Dante"]] },
  { id: 10, num: "X", title: "Cent seize ans de guerre", short: "La guerre de Cent Ans", a: 1328, b: 1461, sym: "sword",
    lead: "Un roi anglais réclame la couronne de France par sa mère. Peste, rois captifs, roi fou, et une bergère qui entend des voix.",
    world: [["1347", "La peste noire arrive en Europe"], ["1378", "Début du Grand Schisme d'Occident"], ["1453", "Les Ottomans prennent Constantinople"]] },
  { id: 11, num: "XI", title: "L'araignée et la Renaissance", short: "Louis XI et François Ier", a: 1461, b: 1547, sym: "castle",
    lead: "Un roi araignée tisse le royaume, ses successeurs filent en Italie et en reviennent avec Léonard de Vinci dans les bagages.",
    world: [["1453", "Gutenberg imprime à Mayence"], ["1492", "Christophe Colomb atteint l'Amérique"], ["1517", "Luther publie ses thèses"]] }
);

PEOPLE.push(
  /* ===== ACTE IX ===== */
  { id: "philippe4", n: "Philippe IV le Bel", g: "capet", lv: 5, sym: "flame", life: [1268, 1314], reign: [1285, 1314], rl: "roi", d: "1268 – 1314",
    role: "Roi de France", act: 9,
    q: "Roi qui affronte Boniface VIII et fait arrêter les Templiers en 1307",
    one: "Un roi d'acier qui place l'État au-dessus de tout, même du pape.",
    facts: [
      { t: "Beau et silencieux", d: "Les contemporains le décrivent comme très beau et étrangement silencieux. Un évêque dit de lui qu'il ressemblait à une statue. Ses légistes, comme Nogaret, parlent pour lui." },
      { t: "Contre le pape", d: "Il veut taxer le clergé. Le pape Boniface VIII proteste. En 1302, Philippe réunit à Paris une grande assemblée de nobles, de clercs et de bourgeois pour soutenir le roi : on y voit les premiers états généraux." },
      { t: "Anagni, 1303", d: "En septembre 1303, Nogaret et des ennemis romains du pape le surprennent à Anagni et le retiennent prisonnier. La fameuse gifle relève sans doute de la légende. Boniface meurt un mois plus tard." },
      { t: "Les Templiers", d: "Le vendredi 13 octobre 1307, tous les Templiers du royaume sont arrêtés le même jour, accusés d'hérésie. L'ordre, riche et créancier du roi, est supprimé par le pape en 1312." },
      { t: "Le faux-monnayeur", d: "Toujours à court d'argent, il diminue la quantité de métal précieux dans les pièces, expulse les Juifs en 1306 et confisque leurs biens, taxe les banquiers lombards. Le peuple l'accuse de fausse monnaie." },
      { t: "La malédiction", leg: true, d: "Selon la légende, Jacques de Molay, sur le bûcher en mars 1314, aurait cité le roi et le pape devant le tribunal de Dieu dans l'année. Le pape meurt en avril, le roi en novembre. La « malédiction des rois maudits » vient surtout du roman de Maurice Druon." }
    ],
    fam: fm(['philippe3', 'Isabelle d\'Aragon'], ['jeannenavarre'], ['louis10', 'philippe5', 'charles4', 'isabellefrance']) },

  { id: "jeannenavarre", n: "Jeanne de Navarre", g: "capet", lv: 2, sym: "ring", life: [1273, 1305], d: "1273 – 1305",
    role: "Reine de France et de Navarre", act: 9,
    q: "Reine de Navarre, épouse de Philippe le Bel, fondatrice du collège de Navarre",
    one: "Une reine qui apporte la Navarre et fonde un collège.",
    facts: [
      { t: "Reine de deux royaumes", d: "Héritière de la Navarre et de la Champagne, elle épouse Philippe en 1284. Par testament, elle fonde à Paris le collège de Navarre, l'un des plus prestigieux de l'Université." }
    ],
    fam: fm([], ['philippe4'], ['louis10', 'philippe5', 'charles4', 'isabellefrance']) },

  { id: "boniface8", n: "Boniface VIII", g: "eglise", lv: 3, sym: "mitre", life: [1235, 1303], reign: [1294, 1303], rl: "pape", pope: true, d: "pape de 1294 à 1303",
    role: "Pape (1294-1303)", act: 9,
    q: "Pape qui affirme la supériorité du pape sur les rois, humilié à Anagni en 1303",
    one: "Le pape qui voulait commander aux rois, et perd.",
    facts: [
      { t: "Unam Sanctam", d: "En 1302, sa bulle Unam Sanctam affirme que tout être humain doit être soumis au pape pour son salut. Philippe le Bel répond en faisant attaquer sa réputation, puis sa personne." },
      { t: "Le premier jubilé", d: "En 1300, il proclame la première année sainte : les pèlerins venus à Rome obtiennent une indulgence. Des foules immenses arrivent." }
    ],
    fam: fm() },

  { id: "nogaret", n: "Guillaume de Nogaret", g: "cour", lv: 3, sym: "book", life: [1260, 1313], d: "v. 1260 – 1313",
    role: "Légiste et garde des sceaux", act: 9,
    q: "Juriste de Philippe le Bel, il mène l'attentat d'Anagni et le procès des Templiers",
    one: "L'homme de main juridique du roi.",
    facts: [
      { t: "Le légiste", d: "Professeur de droit à Montpellier, il entre au service du roi. Il dirige l'expédition d'Anagni en 1303, ce qui lui vaut l'excommunication, puis organise l'arrestation des Templiers en 1307." }
    ],
    fam: fm() },

  { id: "molay", n: "Jacques de Molay", g: "eglise", lv: 3, sym: "cross", life: [1245, 1314], d: "v. 1245 – 1314",
    role: "Dernier grand maître des Templiers", act: 9,
    q: "Dernier grand maître du Temple, brûlé à Paris en mars 1314",
    one: "Il avoue sous la torture, puis se rétracte sur le bûcher.",
    facts: [
      { t: "Aveux et rétractation", d: "Arrêté en 1307, il avoue sous la menace et la torture. En mars 1314, devant la foule, il revient sur ses aveux et proclame l'innocence de l'ordre. Le roi le fait brûler le soir même sur une île de la Seine, à Paris." }
    ],
    fam: fm() },

  { id: "clement5", n: "Clément V", g: "eglise", lv: 3, sym: "mitre", life: [1264, 1314], reign: [1305, 1314], rl: "pape", pope: true, d: "pape de 1305 à 1314",
    role: "Pape (1305-1314)", act: 9,
    q: "Pape gascon qui s'installe à Avignon et supprime l'ordre du Temple",
    one: "Le premier pape d'Avignon.",
    facts: [
      { t: "Avignon", d: "Bertrand de Got, archevêque de Bordeaux, est élu en 1305. Il ne va jamais à Rome et s'installe à Avignon en 1309. Les papes y resteront jusqu'en 1377." },
      { t: "La fin du Temple", d: "Sous la pression de Philippe le Bel, il supprime l'ordre du Temple au concile de Vienne, en 1312. Il meurt en avril 1314, un mois après Jacques de Molay." }
    ],
    fam: fm() },

  { id: "isabellefrance", n: "Isabelle de France", g: "capet", lv: 3, sym: "ring", life: [1295, 1358], d: "v. 1295 – 1358",
    role: "Reine d'Angleterre, « louve de France »", act: 9,
    q: "Fille de Philippe le Bel, reine d'Angleterre, mère d'Édouard III",
    one: "La fille du roi de France qui transmet ses droits à l'Angleterre.",
    facts: [
      { t: "La louve", d: "Mariée à Édouard II d'Angleterre, elle le renverse en 1326-1327 avec son amant Roger Mortimer. Les Anglais la surnomment « la louve de France »." },
      { t: "Une mère dangereuse", d: "Son fils Édouard III est le petit-fils de Philippe le Bel. En 1328, quand la branche directe s'éteint, il réclame la couronne de France par sa mère. C'est l'origine de la guerre de Cent Ans." }
    ],
    fam: fm(['philippe4', 'jeannenavarre'], ['Édouard II d\'Angleterre'], ['edouard3']) },

  { id: "louis10", n: "Louis X le Hutin", g: "capet", lv: 2, sym: "crown", life: [1289, 1316], reign: [1314, 1316], rl: "roi", d: "1289 – 1316",
    role: "Roi de France et de Navarre", act: 9,
    q: "Fils aîné de Philippe le Bel, au règne bref, dont le fils posthume vit cinq jours",
    one: "Le roi querelleur qui meurt après une partie de paume.",
    facts: [
      { t: "La tour de Nesle", d: "En 1314, sa femme Marguerite de Bourgogne et sa belle-sœur Blanche sont reconnues coupables d'adultère avec deux chevaliers. Marguerite meurt en prison à Château-Gaillard en 1315." },
      { t: "Une mort et un bébé", d: "Il meurt en 1316, selon la tradition après avoir bu de l'eau glacée au sortir d'une partie de jeu de paume. Sa seconde femme est enceinte : leur fils, Jean Ier, naît en novembre et meurt cinq jours plus tard." }
    ],
    fam: fm(['philippe4', 'jeannenavarre'], ['Marguerite de Bourgogne', 'Clémence de Hongrie'], ['Jeanne de Navarre (fille)', 'Jean Ier le Posthume']) },

  { id: "philippe5", n: "Philippe V le Long", g: "capet", lv: 2, sym: "crown", life: [1293, 1322], reign: [1316, 1322], rl: "roi", d: "v. 1293 – 1322",
    role: "Roi de France et de Navarre", act: 9,
    q: "Frère de Louis X, il écarte sa nièce du trône en 1316",
    one: "Le frère qui invente qu'une femme ne peut pas régner.",
    facts: [
      { t: "Les femmes écartées", d: "À la mort du petit Jean Ier, la fille de Louis X, Jeanne, pourrait régner. Philippe se fait sacrer, et une assemblée de 1317 déclare que les femmes ne succèdent pas à la couronne de France. On invoquera plus tard la « loi salique » des Francs pour le justifier." }
    ],
    fam: fm(['philippe4', 'jeannenavarre'], ['Jeanne de Bourgogne'], []) },

  { id: "charles4", n: "Charles IV le Bel", g: "capet", lv: 1, sym: "crown", life: [1294, 1328], reign: [1322, 1328], rl: "roi", d: "1294 – 1328",
    role: "Roi de France et de Navarre", act: 9,
    q: "Dernier fils de Philippe le Bel, dernier Capétien direct",
    one: "Le dernier des Capétiens directs.",
    facts: [
      { t: "Fin de la lignée", d: "Il meurt le 1er février 1328 sans fils. Après plus de trois siècles de succession de père en fils, la branche directe des Capétiens s'éteint. La couronne passe à un cousin, Philippe de Valois." }
    ],
    fam: fm(['philippe4', 'jeannenavarre'], ['Blanche de Bourgogne', 'Marie de Luxembourg', 'Jeanne d\'Évreux'], []) },

  /* ===== ACTE X ===== */
  { id: "philippe6", n: "Philippe VI de Valois", g: "valois", lv: 3, sym: "crown", life: [1293, 1350], reign: [1328, 1350], rl: "roi", d: "1293 – 1350",
    role: "Roi de France, premier Valois", act: 10,
    q: "Cousin des derniers Capétiens directs, premier roi Valois, vaincu à Crécy",
    one: "Le premier Valois, battu à Crécy.",
    facts: [
      { t: "Le roi trouvé", d: "Neveu de Philippe le Bel par son père Charles de Valois, il est choisi par les grands en 1328 plutôt qu'Édouard III d'Angleterre, petit-fils de Philippe le Bel par sa mère. Les Anglais l'appellent « le roi trouvé »." },
      { t: "Crécy, 1346", d: "Le 26 août 1346, la chevalerie française se fait décimer par les archers anglais à Crécy. Calais tombe l'année suivante. La peste noire arrive en 1348." },
      { t: "Le Dauphiné", d: "En 1349, il achète le Dauphiné. Désormais, l'héritier du trône portera le titre de dauphin." }
    ],
    fam: fm(['Charles de Valois'], ['Jeanne de Bourgogne', 'Blanche de Navarre'], ['jean2']) },

  { id: "edouard3", n: "Édouard III", g: "monde", lv: 3, sym: "shield", life: [1312, 1377], reign: [1327, 1377], rl: "roi d'Angleterre", d: "1312 – 1377",
    role: "Roi d'Angleterre", act: 10,
    q: "Roi d'Angleterre, petit-fils de Philippe le Bel, qui revendique la couronne de France",
    one: "Le roi anglais qui veut être roi de France.",
    facts: [
      { t: "Un héritier par sa mère", d: "Fils d'Isabelle de France, il prête d'abord hommage à Philippe VI pour la Guyenne. En 1337, Philippe confisque la Guyenne. Édouard se proclame roi de France en 1340 et met des lys dans ses armes. Les rois d'Angleterre les garderont jusqu'en 1801." },
      { t: "Crécy et Calais", d: "Il gagne à Crécy en 1346 et prend Calais en 1347. Selon Froissart, six bourgeois de la ville viennent se livrer la corde au cou ; la reine Philippa obtient leur grâce. Calais restera anglaise jusqu'en 1558." }
    ],
    fam: fm(['Édouard II d\'Angleterre', 'isabellefrance'], ['Philippa de Hainaut'], ['Édouard, le Prince noir']) },

  { id: "jean2", n: "Jean II le Bon", g: "valois", lv: 2, sym: "crown", life: [1319, 1364], reign: [1350, 1364], rl: "roi", d: "1319 – 1364",
    role: "Roi de France", act: 10,
    q: "Roi capturé à Poitiers en 1356, pour qui l'on crée le franc",
    one: "Le roi prisonnier, rançonné en francs.",
    facts: [
      { t: "Poitiers, 1356", d: "Le 19 septembre 1356, il est battu et capturé par le Prince noir, fils d'Édouard III. La tradition rapporte que son jeune fils Philippe lui criait : « Père, gardez-vous à droite ! Père, gardez-vous à gauche ! »." },
      { t: "Le premier franc", d: "Le traité de Brétigny (1360) fixe une rançon énorme et cède un tiers du royaume. Pour la payer, on frappe en 1360 une nouvelle pièce d'or : le franc, qui signifie « libre »." },
      { t: "Retour à Londres", d: "Libéré contre des otages, il apprend que son fils Louis, l'un d'eux, s'est enfui. Par honneur, il retourne se constituer prisonnier à Londres, où il meurt en 1364." }
    ],
    fam: fm(['philippe6', 'Jeanne de Bourgogne'], ['Bonne de Luxembourg'], ['charles5', 'Philippe le Hardi']) },

  { id: "etiennemarcel", n: "Étienne Marcel", g: "cour", lv: 2, sym: "shield", life: [1315, 1358], d: "v. 1315 – 1358",
    role: "Prévôt des marchands de Paris", act: 10,
    q: "Prévôt des marchands de Paris qui défie le dauphin en 1358",
    one: "Le bourgeois de Paris qui tente de contrôler la monarchie.",
    facts: [
      { t: "La révolte de Paris", d: "Pendant la captivité de Jean II, il veut que les états généraux contrôlent le gouvernement. En février 1358, ses partisans tuent deux maréchaux sous les yeux du dauphin Charles. Il est tué en juillet 1358. Sa statue équestre se dresse aujourd'hui devant l'Hôtel de Ville." }
    ],
    fam: fm() },

  { id: "charles5", n: "Charles V le Sage", g: "valois", lv: 4, sym: "book", life: [1338, 1380], reign: [1364, 1380], rl: "roi", d: "1338 – 1380",
    role: "Roi de France", act: 10,
    q: "Premier dauphin devenu roi, il reconquiert le royaume avec Du Guesclin",
    one: "Le roi intellectuel qui reconquiert sans grande bataille.",
    facts: [
      { t: "Le dauphin humilié", d: "À dix-huit ans, il gouverne pendant la captivité de son père et affronte Étienne Marcel. Il en retient une méfiance durable envers Paris." },
      { t: "Pas de grande bataille", d: "Avec Du Guesclin, il évite les batailles rangées et reprend les places une à une. À sa mort en 1380, les Anglais ne tiennent plus que quelques ports, comme Calais, Bordeaux ou Bayonne." },
      { t: "La librairie du Louvre", d: "Il réunit au Louvre une bibliothèque de près d'un millier de manuscrits et fait traduire Aristote en français. On le surnomme le Sage, c'est-à-dire le savant." },
      { t: "Impôts et pierres", d: "Il installe des impôts réguliers et fait construire la Bastille à partir de 1370 pour protéger l'est de Paris." }
    ],
    fam: fm(['jean2', 'Bonne de Luxembourg'], ['Jeanne de Bourbon'], ['charles6', 'Louis d\'Orléans']) },

  { id: "duguesclin", n: "Bertrand du Guesclin", g: "valois", lv: 3, sym: "sword", life: [1320, 1380], d: "v. 1320 – 1380",
    role: "Connétable de France", act: 10,
    q: "Chevalier breton, connétable de Charles V, maître de la reconquête",
    one: "Le chevalier breton, laid et invincible ou presque.",
    facts: [
      { t: "Le dogue noir", d: "Petit noble breton, réputé très laid et bagarreur, il se fait une réputation dans la guérilla. Capturé plusieurs fois, sa rançon est payée chaque fois. Connétable en 1370, il mène la reconquête." },
      { t: "Saint-Denis", d: "Il meurt en 1380 lors d'un siège en Gévaudan. Charles V le fait enterrer à Saint-Denis, au milieu des rois : un honneur exceptionnel." }
    ],
    fam: fm() },

  { id: "charles6", n: "Charles VI le Fol", g: "valois", lv: 3, sym: "crown", life: [1368, 1422], reign: [1380, 1422], rl: "roi", d: "1368 – 1422",
    role: "Roi de France", act: 10,
    q: "Roi atteint de folie en 1392, qui déshérite son fils au traité de Troyes",
    one: "Le roi fou, dont la maladie livre le royaume aux factions.",
    facts: [
      { t: "La forêt du Mans", d: "En août 1392, dans la forêt du Mans, il est pris d'une crise de folie et tue plusieurs hommes de son escorte. Ses crises reviendront jusqu'à sa mort. Il se croit parfois fait de verre." },
      { t: "Le bal des Ardents", d: "En janvier 1393, lors d'un bal, des seigneurs déguisés en sauvages avec des costumes de poix et de lin prennent feu. Le roi est sauvé par la duchesse de Berry, qui l'enveloppe dans sa robe. Quatre danseurs meurent." },
      { t: "Troyes, 1420", d: "Au traité de Troyes, il déshérite son fils et fait d'Henri V d'Angleterre son héritier. Il meurt en 1422, quelques semaines après Henri V." }
    ],
    fam: fm(['charles5', 'Jeanne de Bourbon'], ['isabeau'], ['charles7', 'Catherine de Valois']) },

  { id: "isabeau", n: "Isabeau de Bavière", g: "valois", lv: 3, sym: "ring", life: [1370, 1435], d: "v. 1370 – 1435",
    role: "Reine de France", act: 10,
    q: "Épouse de Charles VI, elle signe le traité de Troyes",
    one: "Une reine à la légende noire, en partie injuste.",
    facts: [
      { t: "La légende noire", d: "Mariée à quinze ans à Charles VI, elle doit gouverner entre les crises du roi et les factions. Elle signe le traité de Troyes en 1420. Les partisans de son fils la couvriront d'accusations : débauche, trahison. Les historiens ont beaucoup nuancé ce portrait." }
    ],
    fam: fm(['Étienne III de Bavière'], ['charles6'], ['charles7', 'Catherine de Valois']) },

  { id: "jeansanspeur", n: "Jean sans Peur", g: "valois", lv: 3, sym: "dagger", life: [1371, 1419], d: "1371 – 1419",
    role: "Duc de Bourgogne", act: 10,
    q: "Duc de Bourgogne qui fait assassiner Louis d'Orléans en 1407, tué à Montereau en 1419",
    one: "Le cousin du roi qui déclenche la guerre civile.",
    facts: [
      { t: "Rue Vieille-du-Temple", d: "Le 23 novembre 1407, ses hommes assassinent dans une rue de Paris Louis d'Orléans, frère du roi. C'est le début de la guerre civile entre Armagnacs et Bourguignons." },
      { t: "Le pont de Montereau", d: "Le 10 septembre 1419, lors d'une entrevue sur le pont de Montereau, il est tué par l'entourage du dauphin Charles. Son fils Philippe le Bon s'allie aussitôt aux Anglais." }
    ],
    fam: fm(['Philippe le Hardi'], ['Marguerite de Bavière'], ['Philippe le Bon']) },

  { id: "henri5", n: "Henri V", g: "monde", lv: 3, sym: "shield", life: [1386, 1422], reign: [1413, 1422], rl: "roi d'Angleterre", d: "1386 – 1422",
    role: "Roi d'Angleterre", act: 10,
    q: "Roi d'Angleterre vainqueur à Azincourt, héritier de France par le traité de Troyes",
    one: "Le vainqueur d'Azincourt, qui faillit devenir roi de France.",
    facts: [
      { t: "Azincourt, 1415", d: "Le 25 octobre 1415, son armée épuisée écrase une armée française bien plus nombreuse, enlisée dans la boue sous les flèches des archers. Une grande partie de la noblesse française est tuée ou capturée." },
      { t: "Héritier de France", d: "Par le traité de Troyes (1420), il épouse Catherine, fille de Charles VI, et devient l'héritier du royaume. Il meurt en août 1422, deux mois avant Charles VI. Son fils Henri VI, âgé de neuf mois, est proclamé roi de France et d'Angleterre." }
    ],
    fam: fm(['Henri IV d\'Angleterre'], ['Catherine de Valois'], ['Henri VI']) },

  { id: "jeanne", n: "Jeanne d'Arc", g: "valois", lv: 5, sym: "sword", life: [1412, 1431], d: "v. 1412 – 1431",
    role: "Chef de guerre, sainte", act: 10,
    q: "Jeune paysanne de Domrémy qui délivre Orléans et fait sacrer Charles VII",
    one: "Une adolescente qui change le cours de la guerre en deux ans.",
    facts: [
      { t: "Les voix", d: "Née vers 1412 à Domrémy, aux confins de la Lorraine, elle dit entendre dès treize ans les voix de saint Michel, sainte Catherine et sainte Marguerite. Elles lui demandent de sauver le royaume." },
      { t: "Chinon", d: "Au début de 1429, elle obtient d'être reçue par le dauphin Charles à Chinon. Après des examens par des théologiens à Poitiers, on lui confie une armée." },
      { t: "Orléans, 8 mai 1429", d: "Elle participe à la levée du siège d'Orléans, assiégée depuis des mois par les Anglais. On l'appellera la Pucelle d'Orléans." },
      { t: "Le sacre de Reims", d: "Le 17 juillet 1429, elle conduit Charles jusqu'à Reims, en territoire ennemi, pour y être sacré. Le sacre fait de lui le roi légitime aux yeux de beaucoup." },
      { t: "Capturée et brûlée", d: "Capturée par les Bourguignons à Compiègne en mai 1430, elle est livrée aux Anglais. Jugée pour hérésie à Rouen par l'évêque Cauchon, elle est brûlée le 30 mai 1431, à environ dix-neuf ans." },
      { t: "Réhabilitée, puis sainte", d: "Un procès de réhabilitation annule sa condamnation en 1456. Elle est canonisée en 1920." }
    ],
    fam: fm(['Jacques d\'Arc', 'Isabelle Romée'], [], []) },

  { id: "charles7", n: "Charles VII", g: "valois", lv: 4, sym: "crown", life: [1403, 1461], reign: [1422, 1461], rl: "roi", d: "1403 – 1461",
    role: "Roi de France", act: 10,
    q: "Le « roi de Bourges » sacré grâce à Jeanne d'Arc, qui gagne la guerre de Cent Ans",
    one: "Le petit roi de Bourges devenu le Victorieux.",
    facts: [
      { t: "Le roi de Bourges", d: "Déshérité en 1420, il ne contrôle en 1422 que le sud de la Loire. Ses ennemis l'appellent par moquerie le « roi de Bourges »." },
      { t: "Paix avec la Bourgogne", d: "En 1435, la paix d'Arras le réconcilie avec le duc de Bourgogne. Paris est repris en 1436." },
      { t: "Une armée permanente", d: "En 1445, il crée les compagnies d'ordonnance, première armée permanente du royaume, payée par un impôt régulier, la taille." },
      { t: "Victoire", d: "Formigny en 1450 rend la Normandie, Castillon en 1453 la Guyenne. Seule Calais reste anglaise. On le surnommera le Victorieux, et parfois le Bien Servi, car il a su s'entourer." }
    ],
    fam: fm(['charles6', 'isabeau'], ['Marie d\'Anjou'], ['louis11']) },

  { id: "cauchon", n: "Pierre Cauchon", g: "eglise", lv: 2, sym: "mitre", life: [1371, 1442], d: "v. 1371 – 1442",
    role: "Évêque de Beauvais, juge de Jeanne d'Arc", act: 10,
    q: "Évêque de Beauvais, partisan des Anglais, qui juge Jeanne d'Arc",
    one: "Le juge de Jeanne d'Arc.",
    facts: [
      { t: "Le procès de Rouen", d: "Évêque de Beauvais, partisan des Bourguignons et des Anglais, il préside le procès de Jeanne en 1431. La procédure est truffée d'irrégularités. Le procès de réhabilitation le désavouera après sa mort." }
    ],
    fam: fm() },

  { id: "pizan", n: "Christine de Pizan", g: "cour", lv: 2, sym: "book", life: [1364, 1430], d: "v. 1364 – v. 1430",
    role: "Écrivaine", act: 10,
    q: "Première femme à vivre de sa plume, autrice de la Cité des dames",
    one: "La première femme de lettres professionnelle.",
    facts: [
      { t: "Vivre de sa plume", d: "Née à Venise, élevée à la cour de Charles V où son père est astrologue, veuve à vingt-cinq ans, elle écrit pour nourrir sa famille. La Cité des dames (1405) défend la place des femmes. En 1429, elle compose un poème en l'honneur de Jeanne d'Arc." }
    ],
    fam: fm() },

  { id: "agnessorel", n: "Agnès Sorel", g: "valois", lv: 2, sym: "ring", life: [1422, 1450], d: "v. 1422 – 1450",
    role: "Favorite de Charles VII", act: 10,
    q: "Première favorite officielle d'un roi de France",
    one: "La première favorite officielle.",
    facts: [
      { t: "La Dame de beauté", d: "Charles VII lui offre le château de Beauté-sur-Marne : on l'appelle la Dame de beauté. C'est la première maîtresse royale reconnue publiquement. Elle meurt en 1450 ; une analyse de 2005 a trouvé dans ses restes une dose massive de mercure." }
    ],
    fam: fm() },

  { id: "jacquescoeur", n: "Jacques Cœur", g: "cour", lv: 2, sym: "ship", life: [1400, 1456], d: "v. 1400 – 1456",
    role: "Marchand, argentier du roi", act: 10,
    q: "Marchand de Bourges devenu argentier de Charles VII, puis disgracié",
    one: "Le marchand le plus riche du royaume, et sa chute.",
    facts: [
      { t: "« À vaillants cœurs, rien d'impossible »", d: "Marchand de Bourges, il commerce avec l'Orient par Montpellier, devient argentier du roi et prête à tout le monde, y compris au roi. Arrêté en 1451, il s'évade et meurt en 1456 dans l'île de Chio, au service du pape. Sa devise orne son palais de Bourges." }
    ],
    fam: fm() },

  /* ===== ACTE XI ===== */
  { id: "louis11", n: "Louis XI", g: "valois", lv: 4, sym: "dagger", life: [1423, 1483], reign: [1461, 1483], rl: "roi", d: "1423 – 1483",
    role: "Roi de France", act: 11,
    q: "Roi rusé surnommé l'universelle araignée, vainqueur de Charles le Téméraire",
    one: "Le roi qui gagne par la ruse et l'argent plutôt que par les batailles.",
    facts: [
      { t: "Un fils rebelle", d: "Dauphin, il se révolte contre son père Charles VII, puis s'enfuit et vit cinq ans chez le duc de Bourgogne. Il rentre en 1461 pour devenir roi." },
      { t: "L'universelle araignée", d: "Le chroniqueur bourguignon Georges Chastellain le surnomme « l'universelle araigne » : il tisse sa toile d'espions, de pensions et d'alliances. Il porte des habits simples et un chapeau orné de médailles pieuses." },
      { t: "Péronne, 1468", d: "Venu négocier à Péronne avec Charles le Téméraire, il est retenu prisonnier quand on apprend que Liège s'est révoltée à son instigation. Il doit accompagner le duc pour mater la ville. Humiliation totale." },
      { t: "Picquigny, 1475", d: "Édouard IV d'Angleterre débarque en France. Louis le paie pour repartir, avec pension. C'est la fin réelle de la guerre de Cent Ans, sans bataille." },
      { t: "La Bourgogne", d: "À la mort du Téméraire en 1477, il s'empare du duché de Bourgogne et de la Picardie. Il récupère aussi l'Anjou et la Provence. Le royaume prend presque sa forme hexagonale." }
    ],
    fam: fm(['charles7', 'Marie d\'Anjou'], ['Marguerite d\'Écosse', 'Charlotte de Savoie'], ['annebeaujeu', 'charles8', 'Jeanne de France']) },

  { id: "temeraire", n: "Charles le Téméraire", g: "monde", lv: 3, sym: "sword", life: [1433, 1477], d: "1433 – 1477",
    role: "Duc de Bourgogne", act: 11,
    q: "Duc de Bourgogne, rival de Louis XI, tué devant Nancy en 1477",
    one: "Le duc qui voulait un royaume entre la France et l'Empire.",
    facts: [
      { t: "Un rêve de royaume", d: "Il possède la Bourgogne, la Franche-Comté et les riches Pays-Bas. Il veut relier ses terres et en faire un royaume. Les Suisses l'écrasent à Grandson et Morat en 1476." },
      { t: "Nancy, 1477", d: "Il est tué devant Nancy le 5 janvier 1477. Son corps, dépouillé, est retrouvé dans un étang gelé. Sa fille Marie épouse Maximilien de Habsbourg : les Pays-Bas passent aux Habsbourg." }
    ],
    fam: fm(['Philippe le Bon'], ['Isabelle de Bourbon', 'Marguerite d\'York'], ['Marie de Bourgogne']) },

  { id: "annebeaujeu", n: "Anne de Beaujeu", g: "valois", lv: 2, sym: "ring", life: [1461, 1522], reign: [1483, 1491], rl: "régente", d: "1461 – 1522",
    role: "Régente de France", act: 11,
    q: "Fille aînée de Louis XI, qui gouverne au nom de son frère Charles VIII",
    one: "La régente que son père jugeait la moins folle des femmes.",
    facts: [
      { t: "La régence", d: "Louis XI l'aurait décrite comme « la moins folle femme de France ». De 1483 à 1491, avec son mari, elle gouverne pour son jeune frère Charles VIII, écrase la révolte des grands et prépare le mariage breton." }
    ],
    fam: fm(['louis11', 'Charlotte de Savoie'], ['Pierre de Beaujeu'], []) },

  { id: "charles8", n: "Charles VIII", g: "valois", lv: 2, sym: "crown", life: [1470, 1498], reign: [1483, 1498], rl: "roi", d: "1470 – 1498",
    role: "Roi de France", act: 11,
    q: "Roi qui lance les guerres d'Italie et meurt en se cognant à une porte",
    one: "Il ouvre les guerres d'Italie, et la Renaissance arrive avec.",
    facts: [
      { t: "La Bretagne par mariage", d: "En 1491, il épouse Anne, duchesse de Bretagne. Le contrat prévoit que si elle devient veuve, elle épousera le roi suivant." },
      { t: "Naples, 1495", d: "En 1494, il part conquérir le royaume de Naples, qu'il revendique. Il y entre en 1495, mais doit rentrer en se frayant un chemin à Fornoue. Les Français ramènent d'Italie des artistes et le goût de la Renaissance." },
      { t: "Une porte basse", d: "En avril 1498, au château d'Amboise, il se cogne la tête contre le linteau d'une porte basse en allant voir une partie de jeu de paume. Il meurt quelques heures plus tard, à vingt-sept ans." }
    ],
    fam: fm(['louis11', 'Charlotte de Savoie'], ['annebretagne'], []) },

  { id: "annebretagne", n: "Anne de Bretagne", g: "valois", lv: 3, sym: "ring", life: [1477, 1514], d: "1477 – 1514",
    role: "Duchesse de Bretagne, deux fois reine de France", act: 11,
    q: "Duchesse de Bretagne, épouse de Charles VIII puis de Louis XII",
    one: "Deux fois reine, elle défend jusqu'au bout la Bretagne.",
    facts: [
      { t: "Deux rois", d: "Elle épouse Charles VIII en 1491, puis, veuve, son successeur Louis XII en 1499. Elle garde le gouvernement de son duché et défend son autonomie." },
      { t: "La Bretagne rattachée", d: "Sa fille Claude épouse François d'Angoulême, futur François Ier. En 1532, la Bretagne est unie au royaume de France." }
    ],
    fam: fm(['François II de Bretagne'], ['charles8', 'louis12'], ['Claude de France']) },

  { id: "louis12", n: "Louis XII", g: "valois", lv: 2, sym: "crown", life: [1462, 1515], reign: [1498, 1515], rl: "roi", d: "1462 – 1515",
    role: "Roi de France, « père du peuple »", act: 11,
    q: "Cousin de Charles VIII, surnommé « père du peuple », conquérant du Milanais",
    one: "Le roi populaire qui baisse les impôts.",
    facts: [
      { t: "Divorcé pour la Bretagne", d: "Devenu roi en 1498, il fait annuler son mariage avec Jeanne de France, fille de Louis XI, pour épouser Anne de Bretagne, la veuve de son prédécesseur." },
      { t: "Père du peuple", d: "Il réduit la taille et rend la justice plus accessible. Les états généraux de Tours, en 1506, lui décernent le titre de « père du peuple ». Il poursuit pourtant les guerres en Italie." }
    ],
    fam: fm(['Charles d\'Orléans'], ['Jeanne de France', 'annebretagne', 'Marie d\'Angleterre'], ['Claude de France']) },

  { id: "francois1", n: "François Ier", g: "valois", lv: 5, sym: "castle", life: [1494, 1547], reign: [1515, 1547], rl: "roi", d: "1494 – 1547",
    role: "Roi de France, roi de la Renaissance", act: 11,
    q: "Vainqueur à Marignan, prisonnier à Pavie, protecteur de Léonard de Vinci",
    one: "Le roi chevalier qui fait entrer la Renaissance en France.",
    facts: [
      { t: "Marignan, 1515", d: "À vingt et un ans, à peine roi, il bat les Suisses à Marignan les 13 et 14 septembre 1515 et prend le Milanais. Selon la tradition, il se fait armer chevalier par Bayard sur le champ de bataille." },
      { t: "Léonard et Chambord", d: "En 1516, il invite Léonard de Vinci, qui s'installe près d'Amboise avec la Joconde. En 1519, il lance le chantier de Chambord." },
      { t: "Pavie, 1525", d: "Le 24 février 1525, il est battu et capturé à Pavie par les troupes de Charles Quint. Il écrit à sa mère qu'il ne lui reste « que l'honneur et la vie qui est sauve », formule résumée plus tard en « Tout est perdu, fors l'honneur ». Il passe un an prisonnier à Madrid." },
      { t: "Allié du sultan", d: "Contre Charles Quint, il s'allie avec Soliman le Magnifique, sultan ottoman. Toute l'Europe chrétienne est scandalisée." },
      { t: "Villers-Cotterêts, 1539", d: "Son ordonnance impose le français, au lieu du latin, dans les actes de justice et d'administration. Elle crée aussi des registres de baptêmes, ancêtres de l'état civil." },
      { t: "Lettres et explorateurs", d: "Il fonde en 1530 les lecteurs royaux, futur Collège de France, et soutient Jacques Cartier, qui explore le Saint-Laurent à partir de 1534." }
    ],
    fam: fm(['Charles d\'Angoulême', 'louisesavoie'], ['Claude de France', 'Éléonore d\'Autriche'], ['henri2']) },

  { id: "louisesavoie", n: "Louise de Savoie", g: "valois", lv: 2, sym: "ring", life: [1476, 1531], d: "1476 – 1531",
    role: "Mère de François Ier, régente", act: 11,
    q: "Mère de François Ier, régente pendant sa captivité, négociatrice de la paix des Dames",
    one: "La mère qui gouverne quand le fils est prisonnier.",
    facts: [
      { t: "La paix des Dames", d: "Régente en 1515 puis pendant la captivité de son fils en 1525-1526, elle tient le royaume. En 1529, elle négocie à Cambrai avec Marguerite d'Autriche, tante de Charles Quint, une paix dite « paix des Dames »." }
    ],
    fam: fm([], ['Charles d\'Angoulême'], ['francois1', 'margueritenav']) },

  { id: "margueritenav", n: "Marguerite de Navarre", g: "valois", lv: 2, sym: "book", life: [1492, 1549], d: "1492 – 1549",
    role: "Reine de Navarre, écrivaine", act: 11,
    q: "Sœur de François Ier, autrice de l'Heptaméron, protectrice des réformateurs",
    one: "La sœur lettrée du roi, grand-mère d'Henri IV.",
    facts: [
      { t: "L'Heptaméron", d: "Sœur adorée de François Ier, elle écrit l'Heptaméron, recueil de nouvelles, et protège les humanistes et les premiers réformateurs. Reine de Navarre par son second mariage, elle est la grand-mère d'Henri IV." }
    ],
    fam: fm(['Charles d\'Angoulême', 'louisesavoie'], ['Henri d\'Albret'], ['Jeanne d\'Albret']) },

  { id: "charlesquint", n: "Charles Quint", g: "monde", lv: 4, sym: "orb", life: [1500, 1558], reign: [1519, 1556], rl: "empereur", d: "1500 – 1558",
    role: "Empereur, roi d'Espagne", act: 11,
    q: "Empereur et roi d'Espagne, rival de François Ier, sur l'empire duquel le soleil ne se couche pas",
    one: "Le grand rival de François Ier.",
    facts: [
      { t: "Un héritage énorme", d: "Petit-fils de Maximilien de Habsbourg et des Rois catholiques, il hérite des Pays-Bas, de l'Espagne, de ses colonies d'Amérique, de Naples et des terres autrichiennes. La France est encerclée." },
      { t: "L'élection de 1519", d: "Il bat François Ier pour l'élection impériale en 1519, grâce à l'argent des banquiers Fugger. Commence une rivalité de près de trente ans." },
      { t: "L'abdication", d: "Épuisé, il abdique en 1555-1556 et se retire dans un monastère espagnol, où il meurt en 1558." }
    ],
    fam: fm(['Philippe le Beau', 'Jeanne la Folle'], ['Isabelle de Portugal'], ['Philippe II d\'Espagne']) },

  { id: "leonard", n: "Léonard de Vinci", g: "cour", lv: 3, sym: "book", life: [1452, 1519], d: "1452 – 1519",
    role: "Peintre, ingénieur, savant", act: 11,
    q: "Génie italien installé près d'Amboise par François Ier en 1516",
    one: "Le génie italien qui finit sa vie en France.",
    facts: [
      { t: "Le Clos Lucé", d: "En 1516, à plus de soixante ans, il s'installe au manoir du Clos Lucé, près d'Amboise, invité par François Ier. Il apporte la Joconde, qui restera en France et finira au Louvre." },
      { t: "Mort dans les bras du roi ?", leg: true, d: "Il meurt le 2 mai 1519. La légende, peinte par Ingres, le fait mourir dans les bras de François Ier. Le roi était sans doute à Saint-Germain-en-Laye ce jour-là." }
    ],
    fam: fm() },

  { id: "bayard", n: "Bayard", g: "valois", lv: 2, sym: "sword", life: [1476, 1524], d: "v. 1476 – 1524",
    role: "Chevalier « sans peur et sans reproche »", act: 11,
    q: "Le chevalier sans peur et sans reproche des guerres d'Italie",
    one: "Le dernier chevalier, tué par une arme à feu.",
    facts: [
      { t: "Un symbole", d: "Pierre Terrail, seigneur de Bayard, se distingue dans toutes les guerres d'Italie. En 1524, il est mortellement blessé par un tir d'arquebuse : le dernier chevalier tué par une arme moderne, symbole parfait d'un monde qui change." }
    ],
    fam: fm() },

  { id: "leon10", n: "Léon X", g: "eglise", lv: 2, sym: "mitre", life: [1475, 1521], reign: [1513, 1521], rl: "pape", pope: true, d: "pape de 1513 à 1521",
    role: "Pape (1513-1521)", act: 11,
    q: "Pape Médicis qui signe le concordat de Bologne avec François Ier et excommunie Luther",
    one: "Le pape Médicis de la Renaissance.",
    facts: [
      { t: "Le concordat de Bologne", d: "Fils de Laurent le Magnifique, il signe en 1516 avec François Ier le concordat de Bologne : le roi nomme désormais les évêques et abbés du royaume, le pape les investit. Il durera jusqu'à la Révolution." },
      { t: "Luther", d: "Pour financer Saint-Pierre de Rome, il relance la vente d'indulgences. Luther proteste en 1517. Léon X l'excommunie en 1521." }
    ],
    fam: fm() },

  { id: "luther", n: "Martin Luther", g: "monde", lv: 3, sym: "book", life: [1483, 1546], d: "1483 – 1546",
    role: "Moine, réformateur", act: 11,
    q: "Moine allemand qui conteste les indulgences en 1517",
    one: "Le moine qui casse l'unité de l'Église d'Occident.",
    facts: [
      { t: "Les 95 thèses", d: "En 1517, à Wittenberg, il publie 95 thèses contre la vente des indulgences. Grâce à l'imprimerie, ses idées se répandent en quelques mois. En France, elles inspirent les premiers protestants." },
      { t: "La Bible en allemand", d: "Excommunié en 1521, protégé par le prince de Saxe, il traduit la Bible en allemand : un texte fondateur de la langue allemande moderne." }
    ],
    fam: fm() },

  { id: "henri8", n: "Henri VIII", g: "monde", lv: 2, sym: "crown", life: [1491, 1547], reign: [1509, 1547], rl: "roi d'Angleterre", d: "1491 – 1547",
    role: "Roi d'Angleterre", act: 11,
    q: "Roi d'Angleterre aux six épouses, rencontré au Camp du Drap d'or",
    one: "Six épouses et une Église nationale.",
    facts: [
      { t: "Le Camp du Drap d'or", d: "En juin 1520, près de Calais, François Ier et Henri VIII se rencontrent dans un luxe de tentes dorées. Henri défie François à la lutte, et perd. Il s'allie ensuite à Charles Quint." },
      { t: "La rupture avec Rome", d: "Le pape refusant d'annuler son mariage, il se proclame en 1534 chef de l'Église d'Angleterre. Il aura six épouses, dont deux décapitées." }
    ],
    fam: fm() },

  { id: "cartier", n: "Jacques Cartier", g: "cour", lv: 2, sym: "ship", life: [1491, 1557], d: "1491 – 1557",
    role: "Navigateur malouin", act: 11,
    q: "Navigateur de Saint-Malo qui explore le Saint-Laurent pour François Ier",
    one: "Il donne son nom au Canada, sans le vouloir.",
    facts: [
      { t: "Le Canada", d: "Envoyé par François Ier en 1534 pour trouver un passage vers l'Asie, il explore le golfe puis le fleuve Saint-Laurent. Il note le mot iroquoien « kanata », qui signifie village. Le nom désignera bientôt tout le pays." }
    ],
    fam: fm() }
);

GEXTRA.push(
  { id: "x_jean1", n: "Jean Ier le Posthume", g: "capet", reign: [1316, 1316], life: [1316, 1316], rl: "roi", d: "règne de cinq jours, 1316" }
);

EVENTS.push(
  { id: "e1296", y: 1296, t: "Bulle Clericis laicos", d: "Boniface VIII interdit de taxer le clergé sans son accord.", act: 9 },
  { id: "e1302", y: 1302, t: "Premiers états généraux", d: "Philippe le Bel réunit nobles, clercs et bourgeois contre le pape. La même année, défaite de Courtrai face aux Flamands.", act: 9, nop: true },
  { id: "e1303", y: 1303, t: "Attentat d'Anagni", d: "Nogaret retient prisonnier Boniface VIII.", act: 9, nop: true },
  { id: "e1306", y: 1306, t: "Expulsion des Juifs du royaume", d: "Leurs biens sont confisqués par le roi.", act: 9, nop: true },
  { id: "e1307", y: 1307, t: "Arrestation des Templiers", d: "Le vendredi 13 octobre, dans tout le royaume.", act: 9 },
  { id: "e1309", y: 1309, t: "Le pape s'installe à Avignon", d: "Clément V y reste. Les papes y siégeront jusqu'en 1377.", act: 9 },
  { id: "e1314", y: 1314, t: "Bûcher de Jacques de Molay", d: "Le 18 mars, à Paris. La même année, scandale de la tour de Nesle et mort de Philippe le Bel.", act: 9, nop: true },
  { id: "e1316", y: 1316, t: "Mort de Jean Ier le Posthume", d: "Le roi bébé vit cinq jours. Son oncle Philippe V écarte les femmes du trône.", act: 9, nop: true },
  { id: "e1328", y: 1328, t: "Fin des Capétiens directs", d: "Charles IV meurt sans fils. Philippe VI de Valois devient roi.", act: 9, nop: true },

  { id: "e1337", y: 1337, t: "Début de la guerre de Cent Ans", d: "Philippe VI confisque la Guyenne d'Édouard III.", act: 10, nop: true },
  { id: "e1346", y: 1346, t: "Bataille de Crécy", d: "Les archers anglais déciment la chevalerie française.", act: 10, nop: true },
  { id: "e1348", y: 1348, t: "La peste noire en France", d: "Elle tue sans doute un tiers à la moitié de la population.", act: 10, nop: true },
  { id: "e1356", y: 1356, t: "Bataille de Poitiers", d: "Jean II le Bon est capturé par le Prince noir.", act: 10, nop: true },
  { id: "e1358", y: 1358, t: "Révolte d'Étienne Marcel et Jacquerie", d: "Paris et les campagnes se soulèvent.", act: 10, nop: true },
  { id: "e1360", y: 1360, t: "Traité de Brétigny et création du franc", d: "Rançon de Jean II et cession d'un tiers du royaume.", act: 10, nop: true },
  { id: "e1378", y: 1378, t: "Début du Grand Schisme", d: "Deux papes, l'un à Rome, l'autre à Avignon.", act: 10, w: true, nop: true },
  { id: "e1392", y: 1392, t: "Première crise de folie de Charles VI", d: "Dans la forêt du Mans.", act: 10, nop: true },
  { id: "e1407", y: 1407, t: "Assassinat de Louis d'Orléans", d: "Début de la guerre civile entre Armagnacs et Bourguignons.", act: 10, nop: true },
  { id: "e1415", y: 1415, t: "Bataille d'Azincourt", d: "Henri V écrase l'armée française le 25 octobre.", act: 10, nop: true },
  { id: "e1419", y: 1419, t: "Assassinat de Jean sans Peur à Montereau", d: "La Bourgogne s'allie aux Anglais.", act: 10, nop: true },
  { id: "e1420", y: 1420, t: "Traité de Troyes", d: "Le dauphin est déshérité au profit d'Henri V.", act: 10, nop: true },
  { id: "e1429", y: 1429, t: "Délivrance d'Orléans et sacre de Reims", d: "Le 8 mai, puis le 17 juillet, avec Jeanne d'Arc.", act: 10, nop: true },
  { id: "e1431", y: 1431, t: "Jeanne d'Arc brûlée à Rouen", d: "Le 30 mai.", act: 10, nop: true },
  { id: "e1435", y: 1435, t: "Paix d'Arras", d: "Charles VII se réconcilie avec le duc de Bourgogne.", act: 10, nop: true },
  { id: "e1453", y: 1453, t: "Bataille de Castillon", d: "Fin de la guerre de Cent Ans. Seule Calais reste anglaise.", act: 10, nop: true },
  { id: "e1453c", y: 1453, t: "Prise de Constantinople par les Ottomans", d: "Fin de l'Empire byzantin.", act: 10, w: true, nop: true },

  { id: "e1465", y: 1465, t: "Bataille de Montlhéry", d: "Louis XI affronte la Ligue du Bien public des grands seigneurs.", act: 11, nop: true },
  { id: "e1468", y: 1468, t: "Entrevue de Péronne", d: "Louis XI piégé par Charles le Téméraire.", act: 11, nop: true },
  { id: "e1475", y: 1475, t: "Traité de Picquigny", d: "Louis XI paie Édouard IV pour qu'il reparte.", act: 11, nop: true },
  { id: "e1477", y: 1477, t: "Mort de Charles le Téméraire devant Nancy", d: "Louis XI s'empare de la Bourgogne.", act: 11, nop: true },
  { id: "e1491", y: 1491, t: "Charles VIII épouse Anne de Bretagne", d: "Premier pas vers l'union de la Bretagne.", act: 11, nop: true },
  { id: "e1492", y: 1492, t: "Christophe Colomb atteint l'Amérique", d: "Pour le compte des Rois catholiques.", act: 11, w: true, nop: true },
  { id: "e1494", y: 1494, t: "Début des guerres d'Italie", d: "Charles VIII part conquérir Naples.", act: 11, nop: true },
  { id: "e1515", y: 1515, t: "Bataille de Marignan", d: "François Ier bat les Suisses les 13 et 14 septembre.", act: 11 },
  { id: "e1516", y: 1516, t: "Concordat de Bologne et arrivée de Léonard", d: "Le roi nomme les évêques. Léonard s'installe près d'Amboise.", act: 11, nop: true },
  { id: "e1517", y: 1517, t: "Les 95 thèses de Luther", d: "Début de la Réforme protestante.", act: 11, w: true },
  { id: "e1520", y: 1520, t: "Camp du Drap d'or", d: "François Ier et Henri VIII rivalisent de luxe près de Calais.", act: 11 },
  { id: "e1525", y: 1525, t: "Bataille de Pavie", d: "François Ier est capturé par les troupes de Charles Quint.", act: 11, nop: true },
  { id: "e1534", y: 1534, t: "Affaire des Placards et voyage de Cartier", d: "Des affiches contre la messe jusque chez le roi. Cartier explore le Saint-Laurent.", act: 11, nop: true },
  { id: "e1539", y: 1539, t: "Ordonnance de Villers-Cotterêts", d: "Le français remplace le latin dans les actes officiels.", act: 11, nop: true }
);

FRISE[9] = ["e1296", "e1302", "e1303", "e1307", "e1309", "e1314", "e1316", "e1328"];
FRISE[10] = ["e1337", "e1346", "e1348", "e1356", "e1415", "e1420", "e1429", "e1453"];
FRISE[11] = ["e1465", "e1477", "e1491", "e1494", "e1515", "e1520", "e1525", "e1539"];

MARR.push(
  ["philippe4", "jeannenavarre", "1284. La Navarre et la Champagne rejoignent la couronne.", false],
  ["isabellefrance", "Édouard II d'Angleterre", "1308. Ce mariage donne à son fils Édouard III des droits sur la France.", true],
  ["charles6", "isabeau", "1385. Une princesse bavaroise de quinze ans pour un roi de seize ans.", true],
  ["henri5", "Catherine de Valois", "1420. Traité de Troyes : le roi d'Angleterre devient héritier de France.", true],
  ["charles8", "annebretagne", "1491. Le début de l'union de la Bretagne et de la France.", false],
  ["louis12", "annebretagne", "1499. La veuve épouse le roi suivant, comme prévu au contrat.", false],
  ["francois1", "Claude de France", "1514. La fille d'Anne de Bretagne apporte le duché.", false]
);

WORLD.push(
  { n: "Papauté d'Avignon et Grand Schisme", sub: "Avignon et Rome", ppl: ["clement5", "philippe4", "boniface8"], t: "De 1309 à 1377, les papes résident à Avignon, sous l'influence du roi de France. De 1378 à 1417, deux puis trois papes rivaux se disputent l'Église : c'est le Grand Schisme d'Occident." },
  { n: "État bourguignon", sub: "Bourgogne et Pays-Bas", ppl: ["jeansanspeur", "temeraire", "louis11"], t: "Branche cadette des Valois, les ducs de Bourgogne deviennent plus riches que le roi. Alliés aux Anglais après 1419, ils livrent Jeanne d'Arc. Leur rêve de royaume s'effondre à Nancy en 1477." },
  { n: "Les Habsbourg", sub: "Autriche, Espagne, Pays-Bas", ppl: ["charlesquint", "francois1"], t: "Par une série de mariages, les Habsbourg réunissent sous Charles Quint l'Espagne, l'Amérique espagnole, les Pays-Bas et l'Empire. La France encerclée se bat contre eux pendant deux siècles." },
  { n: "Italie de la Renaissance", sub: "Milan, Florence, Naples, Rome", ppl: ["charles8", "louis12", "francois1", "leonard", "leon10"], t: "Riche et divisée, l'Italie attire les rois de France de 1494 à 1559. Ils y perdent des batailles et y gagnent un goût nouveau pour l'art, l'architecture et les jardins." }
);

KEYYEARS.push(1302, 1307, 1328, 1346, 1356, 1415, 1429, 1453, 1477, 1515, 1525);

STORY[9] = [
  { y: "1296", t: "Un roi, un pape, une facture", ppl: ["philippe4", "boniface8"], p: "Philippe le Bel a besoin d'argent pour ses guerres, et le clergé est riche. Il le taxe. En 1296, le pape Boniface VIII le lui interdit. Le roi répond en interdisant de sortir l'argent du royaume, ce qui prive Rome de ses revenus. Le Chronoscope résume : deux hommes très convaincus d'être au sommet de la pyramide." },
  { y: "1302", t: "Le royaume derrière son roi", ppl: ["philippe4", "nogaret"], p: "En 1302, le pape affirme que tout homme doit lui être soumis. Philippe réunit à Notre-Dame des représentants des nobles, des clercs et des villes. Tous soutiennent le roi. On y voit les premiers états généraux. La même année, les milices flamandes massacrent les chevaliers français à Courtrai. Le roi range les éperons d'or perdus dans un coin de sa mémoire." },
  { y: "1303", t: "Anagni", ppl: ["nogaret", "boniface8"], p: "En septembre 1303, Guillaume de Nogaret et des ennemis romains du pape surprennent le vieux Boniface dans son palais d'Anagni. Ils le retiennent trois jours. A-t-il été giflé ? Sans doute pas, mais la légende est trop belle. Boniface meurt un mois plus tard. En 1305, un Français, Clément V, est élu. En 1309, il s'installe à Avignon." },
  { y: "1307", t: "Vendredi 13", ppl: ["philippe4", "molay", "clement5"], p: "À l'aube du vendredi 13 octobre 1307, les officiers du roi ouvrent des ordres scellés et arrêtent tous les Templiers du royaume. Accusations : hérésie, idolâtrie, rituels obscènes. Aveux sous la torture. L'ordre, riche et banquier du roi, est supprimé en 1312. Qui a dit que le roi devait de l'argent au Temple ? Personne. Enfin, tout le monde." },
  { y: "1314", t: "L'année maudite", ppl: ["molay", "philippe4", "louis10"], p: "Mars 1314 : Jacques de Molay rétracte ses aveux et monte sur le bûcher. Avril : le pape meurt. Été : les belles-filles du roi sont convaincues d'adultère, c'est l'affaire de la tour de Nesle. Novembre : Philippe le Bel meurt à quarante-six ans. Le Chronoscope ne croit pas aux malédictions, mais il comprend Maurice Druon." },
  { y: "1328", t: "Plus de fils", ppl: ["louis10", "philippe5", "charles4", "isabellefrance"], p: "Les trois fils de Philippe le Bel règnent l'un après l'autre et meurent sans fils survivant. En 1316, on décide qu'une femme ne peut pas monter sur le trône. En 1328, Charles IV meurt. Le plus proche héritier mâle passe par une femme : Édouard III d'Angleterre, fils d'Isabelle. Les grands préfèrent un cousin, Philippe de Valois. L'Angleterre prend note." }
];

STORY[10] = [
  { y: "1346", t: "Crécy, les flèches", ppl: ["philippe6", "edouard3"], p: "En 1337, la guerre commence pour une histoire de Guyenne et d'héritage. Le 26 août 1346, à Crécy, la chevalerie française charge en désordre sous une pluie de flèches anglaises. Massacre. Calais tombe en 1347. Et en 1348, la peste noire tue un tiers des habitants, peut-être plus. Le Chronoscope recommande de ne pas s'attarder." },
  { y: "1356", t: "Un roi en cage dorée", ppl: ["jean2", "charles5", "etiennemarcel"], p: "Le 19 septembre 1356, à Poitiers, le roi Jean II se bat avec courage et se fait prendre. Son fils Charles, dix-huit ans, doit gouverner un royaume ruiné. Étienne Marcel soulève Paris, les paysans se révoltent dans la Jacquerie. Pour payer la rançon du roi, on invente une pièce : le franc. Le nom reviendra et durera jusqu'en 2002." },
  { y: "1380", t: "Le sage et le dogue", ppl: ["charles5", "duguesclin"], p: "Devenu roi en 1364, Charles V a compris la leçon : ne plus offrir de grandes batailles aux archers anglais. Avec Bertrand du Guesclin, il reprend les châteaux un à un. À sa mort en 1380, les Anglais ne tiennent plus que quelques ports. Le royaume respire. Malheureusement, son fils a douze ans." },
  { y: "1392", t: "Le roi de verre", ppl: ["charles6", "isabeau", "jeansanspeur"], p: "En 1392, dans la forêt du Mans, Charles VI devient fou. Il se croit fait de verre et attaque sa propre escorte. Ses oncles et cousins se disputent le pouvoir. En 1407, le duc de Bourgogne fait assassiner le frère du roi : guerre civile entre Armagnacs et Bourguignons. En 1415, Henri V débarque et écrase les Français à Azincourt." },
  { y: "1429", t: "La Pucelle", ppl: ["jeanne", "charles7"], p: "En 1420, le traité de Troyes a déshérité le dauphin Charles. Il se cache au sud de la Loire. En 1429, une jeune paysanne lorraine, Jeanne, vient lui annoncer que Dieu veut qu'il soit roi. Le 8 mai, Orléans est délivrée. Le 17 juillet, Charles est sacré à Reims. Elle sera brûlée à Rouen en 1431, à dix-neuf ans environ. Le roi n'aura pas levé le petit doigt." },
  { y: "1453", t: "La fin, sans traité", ppl: ["charles7", "agnessorel", "jacquescoeur"], p: "En 1435, Charles VII se réconcilie avec la Bourgogne, puis reprend Paris. Il crée une armée permanente, utilise des canons, s'appuie sur Jacques Cœur pour les finances. Formigny, puis Castillon en 1453 : les Anglais sont chassés, sauf de Calais. Aucun traité de paix ne sera signé. Les rois d'Angleterre se diront rois de France jusqu'en 1801." }
];

STORY[11] = [
  { y: "1465", t: "L'araignée tisse", ppl: ["louis11"], p: "Louis XI détestait son père, s'est réfugié chez le duc de Bourgogne, et devient roi en 1461. Les grands seigneurs se liguent contre lui dans la « Ligue du Bien public ». Bataille confuse à Montlhéry en 1465. Louis cède tout ce qu'on lui demande, puis reprend tout, un par un. Il préfère l'argent, les espions et les promesses aux batailles. On l'appelle l'universelle araignée." },
  { y: "1477", t: "Nancy, un étang gelé", ppl: ["temeraire", "louis11"], p: "Son grand rival, Charles le Téméraire, duc de Bourgogne, rêve d'un royaume entre France et Empire. Louis finance ses ennemis, notamment les Suisses. Le 5 janvier 1477, le Téméraire est tué devant Nancy. Louis récupère la Bourgogne. Mais Marie, l'héritière, épouse Maximilien de Habsbourg. Les Habsbourg arrivent aux portes de la France." },
  { y: "1494", t: "Le goût de l'Italie", ppl: ["charles8", "annebretagne", "annebeaujeu"], p: "Charles VIII, après la régence de sa sœur Anne de Beaujeu, épouse Anne de Bretagne en 1491, puis part conquérir Naples en 1494. Il y entre, en ressort vite. Mais les Français découvrent les palais, les jardins, les peintres d'Italie. La Renaissance française commence par une guerre ratée. Charles meurt en 1498, la tête contre une porte basse d'Amboise." },
  { y: "1515", t: "Marignan", ppl: ["francois1", "bayard", "louisesavoie"], p: "François Ier a vingt ans, il est grand, élégant, et pressé. En septembre 1515, il bat les Suisses à Marignan et prend Milan. Selon la tradition, Bayard l'arme chevalier sur le champ de bataille. Retiens la date, tout le monde la connaît, c'est le « 1515 » de l'histoire de France. En 1516, Léonard de Vinci arrive à Amboise avec la Joconde." },
  { y: "1525", t: "Pavie, l'honneur et le reste", ppl: ["francois1", "charlesquint", "louisesavoie"], p: "En 1519, Charles Quint est élu empereur à la place de François. En 1520, François tente de séduire Henri VIII au Camp du Drap d'or, en vain. Le 24 février 1525, à Pavie, il est capturé. Il passe un an prisonnier à Madrid. Sa mère Louise de Savoie gouverne, puis négocie. François rentre, ses deux fils partent en otage à sa place. Paternité Renaissance." },
  { y: "1539", t: "Le français officiel", ppl: ["francois1", "luther", "margueritenav", "cartier"], p: "Pendant ce temps, Luther a lancé la Réforme en 1517 et les idées nouvelles gagnent la France. François hésite, puis réprime après l'affaire des Placards en 1534. La même année, Cartier part pour le Canada. En 1539, l'ordonnance de Villers-Cotterêts impose le français dans les actes officiels. Le latin pleure, les notaires aussi." }
];

TALK[9] = { who: "philippe4", place: "Palais de la Cité, octobre 1307",
  intro: "Une salle froide, un roi immobile et très beau qui te fixe sans cligner. Il ne dit rien pendant de longues secondes. Un homme maigre, Nogaret, murmure : « Le roi vous écoute. »",
  beats: [
    { say: "Le pape prétend que les rois lui sont soumis. Mon royaume me suivra-t-il contre Rome ?",
      learn: "En 1302, Philippe le Bel réunit des représentants des nobles, du clergé et des villes pour soutenir sa politique face à Boniface VIII. On y voit les premiers états généraux.",
      opts: [{ t: "Réunis nobles, clergé et bourgeois pour qu'ils te soutiennent publiquement.", r: "C'est fait depuis 1302. Ils ont tous signé. Le pape n'avait pas prévu les bourgeois.", x: 10 },
        { t: "Demande pardon au pape.", r: "Nogaret, notez : la voyageuse est guelfe.", x: 3 },
        { t: "Ignore-le.", r: "Ignorer un pape, c'est lui laisser les sermons. Je préfère avoir le dernier mot.", x: 3 }] },
    { say: "Demain, mes officiers ouvriront des lettres scellées dans tout le royaume. Que doivent-elles ordonner ?",
      learn: "Le vendredi 13 octobre 1307, tous les Templiers du royaume sont arrêtés en même temps. Les aveux obtenus sous la torture servent à faire supprimer l'ordre en 1312.",
      opts: [{ t: "L'arrestation de tous les Templiers, le même jour, à la même heure.", r: "Exactement. Une opération simultanée : personne ne peut prévenir personne.", x: 10 },
        { t: "Une nouvelle taxe sur le sel.", r: "La gabelle viendra plus tard. Demain, c'est autre chose.", x: 4 },
        { t: "La convocation d'une croisade.", r: "Une croisade ? Avec quel argent ? C'est justement le problème.", x: 3 }] }
  ],
  outro: "Le roi détourne les yeux, la conversation est terminée. Le Chronoscope frissonne : « Je n'ai jamais rencontré quelqu'un d'aussi poli et d'aussi inquiétant. »" };

TALK[10] = { who: "jeanne", place: "Chinon, mars 1429",
  intro: "Une jeune fille de dix-sept ans, cheveux courts, vêtue en homme, attend dans une cour du château. Elle ne semble pas impressionnée par les courtisans. Toi, elle te regarde avec curiosité, comme si elle savait que tu venais de loin.",
  beats: [
    { say: "On dit que le dauphin va se cacher parmi ses courtisans pour me tromper. Comment le reconnaître ?",
      learn: "La tradition rapporte que Jeanne reconnaît Charles caché parmi la foule de la cour. Le récit vient surtout de témoignages du procès de réhabilitation, des années plus tard. Après des examens à Poitiers, on lui confie une armée.",
      opts: [{ t: "Fais confiance à tes voix, et cherche celui que tout le monde regarde en douce.", r: "Mes voix d'abord, ton conseil ensuite. Les deux ensemble, ça devrait suffire.", x: 10 },
        { t: "Cherche celui qui porte la couronne.", r: "Il ne la porte pas. Il n'est pas sacré. C'est bien tout le problème.", x: 4 },
        { t: "Demande au plus beau.", r: "Je crois que le dauphin n'est pas le plus beau. Mais ne lui répète pas.", x: 3 }] },
    { say: "Orléans est assiégée depuis l'automne. Que faut-il faire après Orléans ?",
      learn: "Après la délivrance d'Orléans (8 mai 1429) et la victoire de Patay, Jeanne pousse Charles à aller se faire sacrer à Reims, en territoire tenu par les Bourguignons. Le sacre a lieu le 17 juillet 1429.",
      opts: [{ t: "Conduire le dauphin à Reims pour le faire sacrer.", r: "Oui. Tant qu'il n'est pas sacré, ce n'est qu'un dauphin. Après Reims, c'est le roi.", x: 10 },
        { t: "Attaquer Londres.", r: "Mes voix parlent de France, pas d'Angleterre. Et je n'aime pas la mer.", x: 3 },
        { t: "Rentrer à Domrémy.", r: "Après. Quand Dieu le voudra. Pas avant.", x: 4 }] },
    { say: "Que deviendrai-je, toi qui viens de loin ?",
      learn: "Capturée en mai 1430, Jeanne est jugée à Rouen par l'évêque Cauchon et brûlée le 30 mai 1431. Réhabilitée en 1456, elle est canonisée en 1920.",
      opts: [{ t: "Tu seras trahie et brûlée, puis réhabilitée et faite sainte.", r: "Elle reste silencieuse un moment. « Alors il faut faire vite. »", x: 10 },
        { t: "Tu vivras heureuse en Lorraine.", r: "Tu mens mal, voyageuse. Mais c'est gentil.", x: 3 },
        { t: "Je ne peux pas te le dire.", r: "Ce silence-là en dit beaucoup.", x: 5 }] }
  ],
  outro: "Un héraut appelle son nom. Jeanne se retourne, redresse les épaules et entre dans la grande salle. Le Chronoscope ne fait aucune blague cette fois." };

TALK[11] = { who: "francois1", place: "Amboise, 1516",
  intro: "Un géant d'un mètre quatre-vingt-dix, barbe soignée, pourpoint brodé, rit trop fort au milieu des courtisans. Il remarque tes vêtements étranges et adore immédiatement. « Une Italienne ? Une Flamande ? Venez, venez ! »",
  beats: [
    { say: "J'ai invité un vieux maître florentin à vivre près d'ici. Il m'apporte un portrait de femme qu'il ne veut jamais finir. Que dois-je faire ?",
      learn: "Léonard de Vinci s'installe au Clos Lucé en 1516 avec plusieurs tableaux, dont la Joconde. Le tableau entre dans les collections royales et se trouve aujourd'hui au Louvre.",
      opts: [{ t: "Garde le tableau en France, on l'admirera pendant des siècles.", r: "Je comptais bien. Un roi de France doit avoir les plus beaux tableaux du monde.", x: 10 },
        { t: "Demande-lui un portrait de toi.", r: "Je n'aurais pas osé. Je vais oser.", x: 4 },
        { t: "Rends-le à Florence.", r: "Rendre ? Je suis un roi, pas un prêteur sur gages.", x: 3 }] },
    { say: "L'empereur est mort. Je veux être élu empereur. Mon rival est un jeune Habsbourg de dix-neuf ans. Comment l'emporter ?",
      learn: "En 1519, Charles de Habsbourg est élu empereur sous le nom de Charles Quint. Les banquiers Fugger financent largement les électeurs. François Ier perd, et la rivalité dure près de trente ans.",
      opts: [{ t: "Méfie-toi : il a les banquiers Fugger, tu risques de perdre.", r: "Perdre face à un adolescent à la mâchoire de travers ? Impossible. Je vais quand même vérifier mes coffres.", x: 10 },
        { t: "Fais campagne en Allemagne avec Léonard.", r: "Léonard a mieux à faire, il dessine mon château.", x: 3 },
        { t: "Laisse tomber, ce n'est pas important.", r: "Pas important ? L'empire encerclerait mon royaume !", x: 3 }] }
  ],
  outro: "François t'invite à la chasse demain. Tu déclines poliment. Le Chronoscope : « Sage décision, il ne s'arrête jamais avant la nuit. »" };

QUIZ[9] = [
  { q: "Quel jour les Templiers du royaume sont-ils arrêtés ?", o: ["Le vendredi 13 octobre 1307", "Le 14 juillet 1302", "Le 18 mars 1314", "Le 25 décembre 1305"], c: 0, x: "Une opération simultanée dans tout le royaume." },
  { q: "Quel légiste mène l'expédition d'Anagni contre Boniface VIII ?", o: ["Guillaume de Nogaret", "Suger", "Jacques Cœur", "Enguerrand de Marigny"], c: 0, x: "En septembre 1303." },
  { q: "Dans quelle ville le pape Clément V s'installe-t-il en 1309 ?", o: ["Avignon", "Lyon", "Bordeaux", "Paris"], c: 0, x: "Les papes y résident jusqu'en 1377." },
  { q: "Pourquoi réunit-on les premiers états généraux en 1302 ?", o: ["Pour soutenir le roi contre le pape", "Pour voter une croisade", "Pour juger les Templiers", "Pour élire un roi"], c: 0, x: "Nobles, clergé et bourgeois soutiennent Philippe le Bel." },
  { q: "Quel scandale éclate en 1314 à la cour de Philippe le Bel ?", o: ["L'affaire de la tour de Nesle", "L'affaire du collier", "L'affaire des Placards", "L'affaire des poisons"], c: 0, x: "L'adultère de deux belles-filles du roi." },
  { q: "Pourquoi Édouard III peut-il revendiquer la couronne de France en 1328 ?", o: ["Sa mère Isabelle est la fille de Philippe le Bel", "Il descend de Guillaume le Conquérant", "Il a épousé une fille de Charles IV", "Le pape le lui a promis"], c: 0, x: "Il est le petit-fils de Philippe le Bel par sa mère." },
  { q: "Qui devient roi en 1328 à la mort de Charles IV ?", o: ["Philippe VI de Valois", "Édouard III", "Philippe V", "Jean II"], c: 0, x: "Le premier roi de la dynastie des Valois." }
];
QUIZ[10] = [
  { q: "Quelle bataille de 1346 voit les archers anglais décimer la chevalerie française ?", o: ["Crécy", "Azincourt", "Poitiers", "Castillon"], c: 0, x: "Le 26 août 1346." },
  { q: "Quel roi est capturé à Poitiers en 1356 ?", o: ["Jean II le Bon", "Philippe VI", "Charles V", "Charles VI"], c: 0, x: "Par le Prince noir, fils d'Édouard III." },
  { q: "Pourquoi crée-t-on le franc en 1360 ?", o: ["Pour payer la rançon de Jean II", "Pour fêter Crécy", "Pour remplacer l'euro", "Pour payer Du Guesclin"], c: 0, x: "Franc signifie libre." },
  { q: "Que prévoit le traité de Troyes de 1420 ?", o: ["Henri V devient l'héritier de Charles VI", "La fin de la guerre de Cent Ans", "Le retour de Calais à la France", "Le mariage de Jeanne d'Arc"], c: 0, x: "Le dauphin Charles est déshérité." },
  { q: "Où Charles VII est-il sacré le 17 juillet 1429 ?", o: ["À Reims", "À Orléans", "À Chinon", "À Paris"], c: 0, x: "Conduit par Jeanne d'Arc." },
  { q: "Qui préside le procès de Jeanne d'Arc à Rouen ?", o: ["Pierre Cauchon", "Guillaume de Nogaret", "Jacques Cœur", "Jean sans Peur"], c: 0, x: "Évêque de Beauvais, partisan des Anglais." },
  { q: "Quelle bataille de 1453 met fin à la guerre de Cent Ans ?", o: ["Castillon", "Formigny", "Azincourt", "Orléans"], c: 0, x: "Les Anglais perdent la Guyenne." },
  { q: "Quel roi de France devient fou en 1392 ?", o: ["Charles VI", "Charles V", "Charles VII", "Louis XI"], c: 0, x: "Dans la forêt du Mans." }
];
QUIZ[11] = [
  { q: "Quel roi est surnommé « l'universelle araignée » ?", o: ["Louis XI", "François Ier", "Charles VIII", "Louis XII"], c: 0, x: "Pour sa toile d'espions et d'alliances." },
  { q: "Où meurt Charles le Téméraire en 1477 ?", o: ["Devant Nancy", "À Péronne", "À Dijon", "À Grandson"], c: 0, x: "Le 5 janvier 1477." },
  { q: "Quelle duchesse épouse successivement Charles VIII et Louis XII ?", o: ["Anne de Bretagne", "Anne de Beaujeu", "Marie de Bourgogne", "Claude de France"], c: 0, x: "La Bretagne est unie à la France en 1532." },
  { q: "Contre qui François Ier gagne-t-il à Marignan en 1515 ?", o: ["Les Suisses", "Les Anglais", "Les Espagnols", "Les Vénitiens"], c: 0, x: "Les 13 et 14 septembre 1515." },
  { q: "Où François Ier est-il capturé en 1525 ?", o: ["À Pavie", "À Marignan", "À Madrid", "À Fornoue"], c: 0, x: "Par les troupes de Charles Quint." },
  { q: "Que fait l'ordonnance de Villers-Cotterêts (1539) ?", o: ["Impose le français dans les actes officiels", "Crée l'impôt sur le sel", "Interdit le protestantisme", "Fonde le Collège de France"], c: 0, x: "Elle crée aussi des registres de baptêmes." },
  { q: "Quel artiste s'installe près d'Amboise en 1516 avec la Joconde ?", o: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Benvenuto Cellini"], c: 0, x: "Au manoir du Clos Lucé." },
  { q: "Quel traité de 1475 met fin réellement à la guerre de Cent Ans ?", o: ["Picquigny", "Troyes", "Brétigny", "Arras"], c: 0, x: "Louis XI paie Édouard IV pour qu'il reparte." }
];
}

/* DONNEES 5 : actes XII à XV (1547 à 1789) */
{
const fm = (par, sp, ch) => ({ par: par || [], sp: sp || [], ch: ch || [] });

ACTS.push(
  { id: 12, num: "XII", title: "Le temps des guerres de Religion", short: "Catherine de Médicis et Henri IV", a: 1547, b: 1610, sym: "dagger",
    lead: "Une reine mère, trois fils rois, huit guerres civiles, un massacre et un Béarnais qui finit par aller à la messe.",
    world: [["1558", "Élisabeth Ire devient reine d'Angleterre"], ["1571", "Victoire chrétienne de Lépante"], ["1588", "Défaite de l'Invincible Armada"]] },
  { id: 13, num: "XIII", title: "Le cardinal, la reine et la Fronde", short: "Louis XIII et Richelieu", a: 1610, b: 1661, sym: "shield",
    lead: "Un roi timide, un cardinal en rouge, une reine espagnole et un Italien rusé. Paris se révolte, le petit Louis XIV prend des notes.",
    world: [["1618", "Début de la guerre de Trente Ans"], ["1620", "Le Mayflower part pour l'Amérique"], ["1649", "Exécution de Charles Ier d'Angleterre"]] },
  { id: 14, num: "XIV", title: "Le Roi-Soleil", short: "Louis XIV", a: 1661, b: 1715, sym: "sun",
    lead: "Soixante-douze ans de règne, un château, des guerres, des favorites et des perruques. L'Europe entière copie Versailles.",
    world: [["1666", "Grand incendie de Londres"], ["1683", "Les Ottomans échouent devant Vienne"], ["1688", "Glorieuse Révolution en Angleterre"]] },
  { id: 15, num: "XV", title: "Les Lumières avant l'orage", short: "Louis XV et Louis XVI", a: 1715, b: 1789, sym: "quill",
    lead: "Des philosophes brillants, des finances en ruine, un roi aimé puis détesté, une reine autrichienne. Tout le monde danse, le sol craque.",
    world: [["1756", "Début de la guerre de Sept Ans"], ["1776", "Indépendance des États-Unis"], ["1783", "Premier vol en montgolfière"]] }
);

PEOPLE.push(
  /* ===== ACTE XII ===== */
  { id: "henri2", n: "Henri II", g: "valois", lv: 3, sym: "crown", life: [1519, 1559], reign: [1547, 1559], rl: "roi", d: "1519 – 1559",
    role: "Roi de France", act: 12,
    q: "Fils de François Ier, amant de Diane de Poitiers, tué dans un tournoi en 1559",
    one: "Le roi tué par une lance de tournoi.",
    facts: [
      { t: "Otage à sept ans", d: "Après Pavie, il passe quatre ans prisonnier en Espagne à la place de son père. Il en revient sombre et rancunier envers Charles Quint." },
      { t: "Calais et la paix", d: "Le duc de Guise reprend Calais aux Anglais en 1558. En 1559, la paix du Cateau-Cambrésis met fin aux guerres d'Italie." },
      { t: "Le tournoi fatal", d: "Le 30 juin 1559, pour fêter la paix, il joute contre le capitaine de Montgomery. La lance se brise et un éclat lui traverse l'œil. Il meurt dix jours plus tard. Il laisse quatre fils, dont trois seront rois." }
    ],
    fam: fm(['francois1', 'Claude de France'], ['catherine'], ['francois2', 'charles9', 'henri3', 'margot']) },

  { id: "catherine", n: "Catherine de Médicis", g: "valois", lv: 5, sym: "ring", life: [1519, 1589], reign: [1560, 1563], rl: "régente", d: "1519 – 1589",
    role: "Reine de France, reine mère", act: 12,
    q: "Italienne, épouse d'Henri II, mère de trois rois, au cœur des guerres de Religion",
    one: "La reine mère qui tente de sauver le trône de ses fils.",
    facts: [
      { t: "Une Médicis à la cour", d: "Orpheline florentine, nièce du pape Clément VII, elle épouse en 1533 le futur Henri II. Dix ans sans enfant, un mari amoureux d'une autre : la cour la méprise. Elle aura ensuite dix enfants." },
      { t: "Mère de trois rois", d: "Ses fils François II, Charles IX et Henri III règnent successivement. Elle gouverne pour le deuxième, encore enfant, et reste ensuite la grande conseillère." },
      { t: "La conciliation", d: "Elle tente de rapprocher catholiques et protestants : colloque de Poissy en 1561, édit de janvier 1562 qui autorise le culte protestant hors des villes. Les guerres éclatent quand même." },
      { t: "La Saint-Barthélemy", d: "Sa part de responsabilité dans le massacre de 1572 reste discutée par les historiens. Elle a sans doute poussé à éliminer les chefs protestants, sans prévoir le massacre général qui suit." },
      { t: "Bâtisseuse et superstitieuse", d: "Elle fait construire le palais des Tuileries, protège les astrologues comme Nostradamus et récupère Chenonceau des mains de Diane de Poitiers après la mort d'Henri II." }
    ],
    fam: fm(['Laurent II de Médicis'], ['henri2'], ['francois2', 'charles9', 'henri3', 'margot', 'Élisabeth de Valois']) },

  { id: "diane", n: "Diane de Poitiers", g: "valois", lv: 3, sym: "ring", life: [1500, 1566], d: "1500 – 1566",
    role: "Favorite d'Henri II", act: 12,
    q: "Favorite d'Henri II, de vingt ans son aînée",
    one: "La favorite plus puissante que la reine.",
    facts: [
      { t: "Vingt ans d'écart", d: "Veuve, de vingt ans plus âgée qu'Henri, elle reste sa favorite toute sa vie. Il porte ses couleurs, le noir et le blanc, et lui offre Chenonceau." },
      { t: "Boire de l'or", d: "Elle reste d'une jeunesse étonnante. L'analyse de ses cheveux, en 2009, a révélé un taux d'or très élevé : elle buvait sans doute de l'or comme élixir de jouvence, ce qui a pu l'empoisonner." }
    ],
    fam: fm() },

  { id: "francois2", n: "François II", g: "valois", lv: 1, sym: "crown", life: [1544, 1560], reign: [1559, 1560], rl: "roi", d: "1544 – 1560",
    role: "Roi de France", act: 12,
    q: "Roi adolescent, époux de Marie Stuart, mort après dix-sept mois de règne",
    one: "Le roi de quinze ans, dominé par les Guise.",
    facts: [
      { t: "Le règne des Guise", d: "Roi à quinze ans, il laisse gouverner les oncles de sa femme, les Guise. En 1560, des protestants tentent de l'enlever : c'est la conjuration d'Amboise, réprimée par des pendaisons. Il meurt d'une infection à l'oreille en décembre 1560." }
    ],
    fam: fm(['henri2', 'catherine'], ['mariestuart'], []) },

  { id: "mariestuart", n: "Marie Stuart", g: "monde", lv: 2, sym: "ring", life: [1542, 1587], d: "1542 – 1587",
    role: "Reine d'Écosse, reine de France", act: 12,
    q: "Reine d'Écosse élevée en France, épouse de François II, exécutée en Angleterre",
    one: "Reine de France un an, reine d'Écosse, décapitée en Angleterre.",
    facts: [
      { t: "De Paris à Fotheringhay", d: "Reine d'Écosse à six jours, élevée à la cour de France, reine de France en 1559-1560. Veuve à dix-huit ans, elle rentre en Écosse, perd son trône et se réfugie en Angleterre. Élisabeth Ire la garde prisonnière dix-neuf ans, puis la fait décapiter en 1587." }
    ],
    fam: fm(['Jacques V d\'Écosse', 'Marie de Guise'], ['francois2'], ['Jacques VI']) },

  { id: "charles9", n: "Charles IX", g: "valois", lv: 2, sym: "crown", life: [1550, 1574], reign: [1560, 1574], rl: "roi", d: "1550 – 1574",
    role: "Roi de France", act: 12,
    q: "Roi enfant sous la tutelle de sa mère, roi de la Saint-Barthélemy",
    one: "Le roi de la Saint-Barthélemy, hanté jusqu'à sa mort.",
    facts: [
      { t: "Le 1er janvier", d: "Par l'édit de Roussillon, en 1564, il fixe le début de l'année au 1er janvier dans tout le royaume. Avant, la date changeait selon les régions." },
      { t: "La nuit du 24 août", d: "Il donne l'ordre d'éliminer les chefs protestants en août 1572. Le massacre dépasse tout. Il meurt de tuberculose en 1574, à vingt-trois ans." }
    ],
    fam: fm(['henri2', 'catherine'], ['Élisabeth d\'Autriche'], []) },

  { id: "coligny", n: "Gaspard de Coligny", g: "valois", lv: 3, sym: "shield", life: [1519, 1572], d: "1519 – 1572",
    role: "Amiral de France, chef protestant", act: 12,
    q: "Amiral protestant, première victime de la Saint-Barthélemy",
    one: "Le chef protestant devenu conseiller du roi, tué en premier.",
    facts: [
      { t: "Trop proche du roi", d: "Chef des protestants, il gagne la confiance du jeune Charles IX et veut l'entraîner dans une guerre contre l'Espagne. Le 22 août 1572, il est blessé par un tireur. Dans la nuit du 24, les hommes du duc de Guise le tuent et jettent son corps par la fenêtre. Le massacre commence." }
    ],
    fam: fm() },

  { id: "henri3", n: "Henri III", g: "valois", lv: 3, sym: "crown", life: [1551, 1589], reign: [1574, 1589], rl: "roi", d: "1551 – 1589",
    role: "Roi de France et de Pologne", act: 12,
    q: "Dernier Valois, roi de Pologne puis de France, assassiné en 1589",
    one: "Le dernier Valois, roi raffiné et assassiné.",
    facts: [
      { t: "Roi de Pologne", d: "Élu roi de Pologne en 1573, il apprend la mort de son frère Charles IX et s'enfuit de Cracovie de nuit pour devenir roi de France." },
      { t: "Raffiné et moqué", d: "Il aime les fêtes, les vêtements, ses favoris surnommés « les mignons ». Il impose l'usage de la fourchette à sa table. Les pamphlets ligueurs se déchaînent contre lui." },
      { t: "Blois, 1588", d: "Chassé de Paris par la Ligue lors de la journée des Barricades, il fait assassiner le duc de Guise au château de Blois le 23 décembre 1588." },
      { t: "Assassiné", d: "Le 1er août 1589, un moine ligueur, Jacques Clément, le poignarde à Saint-Cloud. Avant de mourir, il désigne Henri de Navarre comme héritier." }
    ],
    fam: fm(['henri2', 'catherine'], ['Louise de Lorraine'], []) },

  { id: "guise", n: "Henri de Guise", g: "valois", lv: 3, sym: "sword", life: [1550, 1588], d: "1550 – 1588",
    role: "Duc, chef de la Ligue catholique", act: 12,
    q: "Le Balafré, chef de la Ligue catholique, assassiné à Blois en 1588",
    one: "Le chef catholique plus populaire que le roi.",
    facts: [
      { t: "Le Balafré", d: "Blessé au visage en 1575, il hérite du surnom de son père. Chef de la Ligue catholique, adoré des Parisiens, il est soutenu par l'Espagne." },
      { t: "« Il est plus grand mort que vivant »", leg: true, d: "Le 23 décembre 1588, il est tué par les gardes du roi à Blois. Henri III aurait dit devant son cadavre : « Il est encore plus grand mort que vivant »." }
    ],
    fam: fm(['François de Guise'], ['Catherine de Clèves'], []) },

  { id: "margot", n: "Marguerite de Valois (la reine Margot)", g: "valois", lv: 3, sym: "ring", life: [1553, 1615], d: "1553 – 1615",
    role: "Reine de Navarre, de France", act: 12,
    q: "Fille de Catherine de Médicis, épousée par Henri de Navarre six jours avant la Saint-Barthélemy",
    one: "La mariée des noces de sang.",
    facts: [
      { t: "Les noces vermeilles", d: "Le 18 août 1572, elle épouse le protestant Henri de Navarre : un mariage de réconciliation. Six jours plus tard commence la Saint-Barthélemy. Selon ses Mémoires, elle cache un protestant blessé dans sa chambre." },
      { t: "Divorcée de bonne grâce", d: "Le mariage est sans enfant. En 1599, elle accepte l'annulation pour qu'Henri IV puisse se remarier, et reste en bons termes avec lui. Son surnom de « reine Margot » vient surtout du roman d'Alexandre Dumas." }
    ],
    fam: fm(['henri2', 'catherine'], ['henri4'], []) },

  { id: "henri4", n: "Henri IV", g: "bourbon", lv: 5, sym: "lys", life: [1553, 1610], reign: [1589, 1610], rl: "roi", d: "1553 – 1610",
    role: "Roi de France et de Navarre", act: 12,
    q: "Premier Bourbon, protestant converti, auteur de l'édit de Nantes, assassiné en 1610",
    one: "Le roi qui met fin aux guerres de Religion.",
    facts: [
      { t: "Le Béarnais", d: "Né à Pau en 1553, élevé dans le protestantisme par sa mère Jeanne d'Albret, il devient roi de Navarre en 1572. Il échappe à la Saint-Barthélemy en se convertissant, puis s'enfuit et redevient protestant." },
      { t: "La messe", d: "Roi en 1589, il doit conquérir son royaume tenu par la Ligue. Il abjure le protestantisme à Saint-Denis le 25 juillet 1593. La phrase « Paris vaut bien une messe » lui est attribuée, mais sans preuve." },
      { t: "Sacré à Chartres", d: "Reims étant aux mains de la Ligue, il est sacré à Chartres en 1594, seul roi de France à l'être là. Il entre dans Paris en mars 1594." },
      { t: "L'édit de Nantes", d: "En avril 1598, l'édit de Nantes accorde aux protestants la liberté de conscience, un culte autorisé en certains lieux et des places fortes. La même année, la paix de Vervins avec l'Espagne." },
      { t: "La poule au pot", leg: true, d: "On lui prête le souhait que chaque paysan puisse mettre une poule au pot le dimanche. La phrase est rapportée par un biographe plus d'un demi-siècle après sa mort." },
      { t: "Rue de la Ferronnerie", d: "Le 14 mai 1610, son carrosse est bloqué par un embouteillage. François Ravaillac monte sur la roue et le poignarde. Il avait échappé à une bonne dizaine de tentatives avant celle-ci." }
    ],
    fam: fm(['Antoine de Bourbon', 'Jeanne d\'Albret'], ['margot', 'mariemedicis'], ['louis13', 'Gaston d\'Orléans', 'Henriette de France']) },

  { id: "sully", n: "Sully", g: "cour", lv: 3, sym: "book", life: [1559, 1641], d: "1559 – 1641",
    role: "Ministre des finances d'Henri IV", act: 12,
    q: "Compagnon protestant d'Henri IV, surintendant des finances",
    one: "Le ministre qui remet les finances en ordre.",
    facts: [
      { t: "Les deux mamelles", d: "Maximilien de Béthune, duc de Sully, remet les finances en ordre et constitue un trésor à la Bastille. On lui attribue la formule « Labourage et pâturage sont les deux mamelles de la France »." },
      { t: "Grand voyer", d: "Il fait réparer routes et ponts et planter des arbres le long des chemins. Resté protestant, il se retire après la mort d'Henri IV." }
    ],
    fam: fm() },

  { id: "gabrielle", n: "Gabrielle d'Estrées", g: "bourbon", lv: 2, sym: "ring", life: [1573, 1599], d: "v. 1573 – 1599",
    role: "Favorite d'Henri IV", act: 12,
    q: "Favorite d'Henri IV qu'il voulait épouser, morte en 1599",
    one: "La favorite qui a failli devenir reine.",
    facts: [
      { t: "Presque reine", d: "Mère de trois enfants du roi, elle doit l'épouser après l'annulation de son mariage avec Margot. Elle meurt brutalement en avril 1599, enceinte, sans doute d'une éclampsie. On parla évidemment de poison." }
    ],
    fam: fm() },

  { id: "ravaillac", n: "François Ravaillac", g: "bourbon", lv: 2, sym: "dagger", life: [1577, 1610], d: "1577 – 1610",
    role: "Assassin d'Henri IV", act: 12,
    q: "Catholique exalté qui poignarde Henri IV le 14 mai 1610",
    one: "L'assassin d'Henri IV.",
    facts: [
      { t: "Un exalté", d: "Ancien maître d'école d'Angoulême, persuadé que le roi va faire la guerre au pape, il le poignarde le 14 mai 1610. Il affirme avoir agi seul. Il est écartelé place de Grève le 27 mai." }
    ],
    fam: fm() },

  { id: "montaigne", n: "Michel de Montaigne", g: "cour", lv: 2, sym: "book", life: [1533, 1592], d: "1533 – 1592",
    role: "Écrivain, maire de Bordeaux", act: 12,
    q: "Auteur des Essais, maire de Bordeaux pendant les guerres de Religion",
    one: "Le sage qui doute au milieu des fanatiques.",
    facts: [
      { t: "Les Essais", d: "Retiré dans sa tour, il publie les Essais en 1580 : il s'y prend lui-même pour sujet. Maire de Bordeaux de 1581 à 1585, il sert d'intermédiaire entre Henri III et Henri de Navarre. Sur son ami La Boétie : « Parce que c'était lui, parce que c'était moi »." }
    ],
    fam: fm() },

  { id: "gregoire13", n: "Grégoire XIII", g: "eglise", lv: 2, sym: "mitre", life: [1502, 1585], reign: [1572, 1585], rl: "pape", pope: true, d: "pape de 1572 à 1585",
    role: "Pape (1572-1585)", act: 12,
    q: "Pape qui célèbre la Saint-Barthélemy et réforme le calendrier",
    one: "Le pape du calendrier grégorien.",
    facts: [
      { t: "Un Te Deum", d: "À l'annonce de la Saint-Barthélemy, il fait chanter un Te Deum et frapper une médaille. Rome y voit alors l'échec d'un complot protestant." },
      { t: "Le calendrier", d: "En 1582, il corrige le calendrier julien, qui avait pris dix jours de retard sur le soleil. En France, on passe directement du 9 au 20 décembre 1582. Nous utilisons toujours ce calendrier grégorien." }
    ],
    fam: fm() },

  /* ===== ACTE XIII ===== */
  { id: "mariemedicis", n: "Marie de Médicis", g: "bourbon", lv: 3, sym: "ring", life: [1575, 1642], reign: [1610, 1617], rl: "régente", d: "1575 – 1642",
    role: "Reine de France, régente", act: 13,
    q: "Seconde épouse d'Henri IV, régente, chassée par son fils Louis XIII",
    one: "Une régente qui ne veut pas lâcher le pouvoir.",
    facts: [
      { t: "La régente", d: "Couronnée la veille de l'assassinat d'Henri IV, elle gouverne pour Louis XIII, neuf ans, avec son favori Concini. Elle mène une politique de paix avec l'Espagne." },
      { t: "Mère et fils en guerre", d: "Écartée en 1617, exilée à Blois, elle s'enfuit en 1619 par une fenêtre, à l'aide d'une échelle de corde. Mère et fils se font la guerre deux fois." },
      { t: "La journée des Dupes", d: "En novembre 1630, elle croit avoir obtenu le renvoi de Richelieu. Le lendemain, le roi confirme le cardinal. Elle s'exile et meurt à Cologne en 1642. Rubens avait peint sa vie en vingt-quatre grands tableaux." }
    ],
    fam: fm(['François Ier de Toscane'], ['henri4'], ['louis13', 'Gaston d\'Orléans', 'Henriette de France']) },

  { id: "louis13", n: "Louis XIII le Juste", g: "bourbon", lv: 4, sym: "shield", life: [1601, 1643], reign: [1610, 1643], rl: "roi", d: "1601 – 1643",
    role: "Roi de France et de Navarre", act: 13,
    q: "Fils d'Henri IV, roi timide qui garde Richelieu contre tous",
    one: "Le roi taciturne qui choisit Richelieu.",
    facts: [
      { t: "Un coup d'État à seize ans", d: "Le 24 avril 1617, il fait abattre Concini, le favori de sa mère, et prend le pouvoir. Il a seize ans." },
      { t: "Fidèle à Richelieu", d: "Il ne l'aime pas forcément, mais il le soutient pendant dix-huit ans contre sa mère, son frère, sa femme et presque toute la cour." },
      { t: "Un fils après vingt-trois ans", d: "Marié en 1615 à Anne d'Autriche, il n'a un fils qu'en 1638, le futur Louis XIV. La même année, il consacre le royaume à la Vierge : c'est l'origine des processions du 15 août." },
      { t: "Musicien et chasseur", d: "Il compose de la musique, chasse beaucoup et fait construire un petit pavillon de chasse à Versailles. Son fils en fera autre chose." }
    ],
    fam: fm(['henri4', 'mariemedicis'], ['annedautriche'], ['louis14', 'Philippe d\'Orléans']) },

  { id: "concini", n: "Concino Concini", g: "cour", lv: 2, sym: "dagger", life: [1575, 1617], d: "v. 1575 – 1617",
    role: "Favori de Marie de Médicis, maréchal d'Ancre", act: 13,
    q: "Favori florentin de Marie de Médicis, abattu sur ordre de Louis XIII en 1617",
    one: "Le favori détesté, abattu dans la cour du Louvre.",
    facts: [
      { t: "La chute", d: "Venu de Florence avec la reine, devenu maréchal sans avoir combattu, il est tué le 24 avril 1617 sur le pont du Louvre par le capitaine Vitry. La foule déterre son corps et le met en pièces. Sa femme, Leonora Galigaï, est exécutée comme sorcière." }
    ],
    fam: fm() },

  { id: "richelieu", n: "Richelieu", g: "cour", lv: 5, sym: "mitre", life: [1585, 1642], d: "1585 – 1642",
    role: "Cardinal, principal ministre de Louis XIII", act: 13,
    q: "Cardinal, principal ministre de Louis XIII de 1624 à 1642",
    one: "L'homme en rouge qui met l'État au-dessus de tout.",
    facts: [
      { t: "Évêque à vingt et un ans", d: "Armand Jean du Plessis devient évêque de Luçon très jeune pour garder le diocèse dans sa famille. Cardinal en 1622, il entre au Conseil du roi en 1624 et en devient vite le chef." },
      { t: "La Rochelle", d: "En 1627-1628, il assiège La Rochelle, place forte protestante, et fait construire une digue pour bloquer la flotte anglaise. La ville se rend après plus d'un an : la population a fondu de famine. Les protestants gardent leur culte, mais perdent leurs places fortes." },
      { t: "Les duels et les grands", d: "Il interdit les duels et fait exécuter en 1627 le comte de Bouteville, qui en avait fait un en plein Paris. Il brise les complots des grands, comme celui de Cinq-Mars, décapité en 1642." },
      { t: "L'Académie française", d: "En 1635, il fonde l'Académie française pour fixer la langue. La même année, il fait entrer la France dans la guerre de Trente Ans contre les Habsbourg, alliée à des princes protestants." },
      { t: "Raison d'État", d: "Impôts en hausse, révoltes paysannes réprimées, intendants envoyés dans les provinces : il bâtit un État fort, très impopulaire. Il meurt le 4 décembre 1642. Le roi le suit cinq mois plus tard." }
    ],
    fam: fm() },

  { id: "annedautriche", n: "Anne d'Autriche", g: "bourbon", lv: 4, sym: "ring", life: [1601, 1666], reign: [1643, 1651], rl: "régente", d: "1601 – 1666",
    role: "Reine de France, régente", act: 13,
    q: "Infante espagnole, épouse de Louis XIII, régente avec Mazarin pendant la Fronde",
    one: "L'Espagnole qui défend le trône de son fils français.",
    facts: [
      { t: "Une Espagnole suspecte", d: "Fille du roi d'Espagne, mariée à quatorze ans à Louis XIII, elle est soupçonnée de correspondre avec l'ennemi quand la France entre en guerre contre l'Espagne. Richelieu la surveille de près." },
      { t: "Les ferrets", leg: true, d: "L'histoire des ferrets de diamants offerts au duc de Buckingham vient des Trois Mousquetaires d'Alexandre Dumas, qui s'appuie sur une anecdote douteuse des Mémoires de La Rochefoucauld." },
      { t: "La régente", d: "En 1643, elle fait casser le testament de Louis XIII qui limitait ses pouvoirs, et garde Mazarin comme ministre. Pendant la Fronde, elle tient bon. Le Val-de-Grâce est construit pour remercier Dieu de la naissance de Louis XIV." }
    ],
    fam: fm(['Philippe III d\'Espagne'], ['louis13'], ['louis14', 'Philippe d\'Orléans']) },

  { id: "mazarin", n: "Mazarin", g: "cour", lv: 4, sym: "book", life: [1602, 1661], d: "1602 – 1661",
    role: "Cardinal, principal ministre", act: 13,
    q: "Cardinal italien, successeur de Richelieu, parrain politique de Louis XIV",
    one: "L'Italien rusé qui forme Louis XIV.",
    facts: [
      { t: "Un diplomate du pape", d: "Giulio Mazzarino, diplomate au service du pape, passe au service de la France et de Richelieu. Il devient cardinal sans jamais avoir été ordonné prêtre." },
      { t: "Westphalie et la Fronde", d: "En 1648, les traités de Westphalie donnent à la France une partie de l'Alsace. La même année éclate la Fronde. Les Parisiens chantent contre lui des milliers de pamphlets, les mazarinades. Il doit s'exiler deux fois." },
      { t: "La paix des Pyrénées", d: "En 1659, il signe avec l'Espagne la paix des Pyrénées : la France gagne le Roussillon et l'Artois, et Louis XIV épousera l'infante Marie-Thérèse." },
      { t: "Une fortune colossale", d: "Il meurt en 1661 à la tête de la plus grande fortune du royaume. Il lègue sa bibliothèque, la Mazarine, et fonde le collège des Quatre-Nations, aujourd'hui l'Institut de France." }
    ],
    fam: fm() },

  { id: "conde", n: "Le Grand Condé", g: "bourbon", lv: 3, sym: "sword", life: [1621, 1686], d: "1621 – 1686",
    role: "Prince, général", act: 13,
    q: "Vainqueur de Rocroi à vingt et un ans, puis frondeur au service de l'Espagne",
    one: "Le génie militaire passé à l'ennemi, puis pardonné.",
    facts: [
      { t: "Rocroi, 1643", d: "Le 19 mai 1643, cinq jours après la mort de Louis XIII, le jeune duc d'Enghien écrase l'armée espagnole à Rocroi. Il a vingt et un ans." },
      { t: "Le traître pardonné", d: "Pendant la Fronde, il se retourne contre la cour, puis passe au service de l'Espagne. Pardonné à la paix des Pyrénées, il redevient l'un des grands généraux de Louis XIV." }
    ],
    fam: fm() },

  { id: "grandemademoiselle", n: "La Grande Mademoiselle", g: "bourbon", lv: 2, sym: "flame", life: [1627, 1693], d: "1627 – 1693",
    role: "Princesse, frondeuse", act: 13,
    q: "Cousine de Louis XIV qui fait tirer le canon de la Bastille sur l'armée royale en 1652",
    one: "La princesse qui tire au canon sur son cousin.",
    facts: [
      { t: "Le canon de la Bastille", d: "Anne-Marie-Louise d'Orléans, fille de Gaston, la plus riche héritière d'Europe, prend le parti de la Fronde. Le 2 juillet 1652, elle fait tirer les canons de la Bastille sur les troupes du roi pour sauver Condé. Mazarin aurait dit : « Ce canon-là vient de tuer son mari ». Elle ne fut jamais reine." }
    ],
    fam: fm(['Gaston d\'Orléans'], [], []) },

  { id: "vincentdepaul", n: "Vincent de Paul", g: "eglise", lv: 2, sym: "cross", life: [1581, 1660], d: "1581 – 1660",
    role: "Prêtre, fondateur d'œuvres charitables", act: 13,
    q: "Prêtre landais qui fonde les Filles de la Charité et l'œuvre des enfants trouvés",
    one: "Le saint de la charité en pleine guerre.",
    facts: [
      { t: "La charité organisée", d: "Ancien aumônier de Marguerite de Valois, il fonde en 1633 avec Louise de Marillac les Filles de la Charité, puis une œuvre pour les enfants abandonnés. Il organise des secours pour les provinces ravagées par la guerre." }
    ],
    fam: fm() },

  { id: "descartes", n: "René Descartes", g: "cour", lv: 2, sym: "book", life: [1596, 1650], d: "1596 – 1650",
    role: "Philosophe et mathématicien", act: 13,
    q: "Philosophe du Discours de la méthode (1637)",
    one: "« Je pense, donc je suis. »",
    facts: [
      { t: "Le Discours de la méthode", d: "Publié en 1637 en français et non en latin, il y propose de douter de tout pour ne garder que ce qui est certain : « je pense, donc je suis ». Il vit surtout aux Pays-Bas et meurt à Stockholm en 1650, invité par la reine Christine de Suède." }
    ],
    fam: fm() },

  { id: "corneille", n: "Pierre Corneille", g: "cour", lv: 2, sym: "book", life: [1606, 1684], d: "1606 – 1684",
    role: "Dramaturge", act: 13,
    q: "Auteur du Cid (1637), tragédie qui déclenche une querelle littéraire",
    one: "Le Cid, et une querelle avec l'Académie.",
    facts: [
      { t: "La querelle du Cid", d: "En 1637, Le Cid triomphe. Ses rivaux l'accusent de ne pas respecter les règles. Richelieu fait juger la pièce par l'Académie française, qui la critique. Le public, lui, ne change pas d'avis : « beau comme le Cid » devient une expression." }
    ],
    fam: fm() },

  /* ===== ACTE XIV ===== */
  { id: "louis14", n: "Louis XIV", g: "bourbon", lv: 5, sym: "sun", life: [1638, 1715], reign: [1643, 1715], rl: "roi", d: "1638 – 1715",
    role: "Roi de France et de Navarre, le Roi-Soleil", act: 14,
    q: "Le Roi-Soleil, soixante-douze ans de règne, bâtisseur de Versailles",
    one: "Le roi absolu, modèle de toutes les cours d'Europe.",
    facts: [
      { t: "La Fronde vue d'en bas", d: "Roi à quatre ans, il doit fuir Paris avec sa mère dans la nuit du 5 au 6 janvier 1649. Il n'oubliera jamais l'humiliation et se méfiera toute sa vie de Paris et des grands." },
      { t: "Je gouvernerai seul", d: "À la mort de Mazarin, en mars 1661, il annonce qu'il n'aura plus de principal ministre. Il a vingt-deux ans. La phrase « L'État, c'est moi » lui est attribuée, sans preuve." },
      { t: "Le soleil", d: "Danseur passionné, il paraît en soleil dans le Ballet royal de la nuit en 1653. Le soleil devient son emblème : un seul astre autour duquel tout tourne." },
      { t: "Versailles", d: "Il transforme le pavillon de chasse de son père en immense palais et y installe la cour en 1682. Les grands nobles y vivent sous son regard, occupés par l'étiquette plutôt que par la révolte." },
      { t: "La révocation", d: "En octobre 1685, l'édit de Fontainebleau révoque l'édit de Nantes. Les protestants doivent se convertir. Environ 200 000 d'entre eux fuient, souvent artisans et marchands, vers la Hollande, la Prusse ou l'Angleterre." },
      { t: "Trop aimé la guerre", d: "Guerres de Dévolution, de Hollande, de la Ligue d'Augsbourg, de Succession d'Espagne : il gagne la Franche-Comté, Strasbourg, et place son petit-fils sur le trône d'Espagne. Mourant, il aurait dit à son arrière-petit-fils : « J'ai trop aimé la guerre, ne m'imitez pas en cela »." }
    ],
    fam: fm(['louis13', 'annedautriche'], ['marietherese', 'maintenon'], ['Louis, le Grand Dauphin', 'Les enfants de Mme de Montespan']) },

  { id: "colbert", n: "Jean-Baptiste Colbert", g: "cour", lv: 4, sym: "ship", life: [1619, 1683], d: "1619 – 1683",
    role: "Contrôleur général des finances", act: 14,
    q: "Ministre de Louis XIV qui développe manufactures, commerce et marine",
    one: "Le ministre bourreau de travail qui veut enrichir l'État.",
    facts: [
      { t: "La chute de Fouquet", d: "Ancien intendant de Mazarin, il pousse le roi à faire arrêter le surintendant Fouquet en 1661. Il devient contrôleur général des finances en 1665." },
      { t: "Le colbertisme", d: "Il veut que la France vende plus qu'elle n'achète : manufactures royales des Gobelins et des glaces (future Saint-Gobain), compagnies de commerce, routes, canaux, marine de guerre." },
      { t: "Sciences et arts", d: "Il crée l'Académie des sciences en 1666 et fait construire l'Observatoire de Paris." },
      { t: "Le Code noir", d: "Il prépare le Code noir, promulgué en 1685 après sa mort, qui réglemente l'esclavage dans les colonies et traite les esclaves comme des biens meubles." }
    ],
    fam: fm() },

  { id: "fouquet", n: "Nicolas Fouquet", g: "cour", lv: 3, sym: "castle", life: [1615, 1680], d: "1615 – 1680",
    role: "Surintendant des finances", act: 14,
    q: "Surintendant des finances arrêté en 1661 après une fête trop belle à Vaux-le-Vicomte",
    one: "Le ministre trop brillant pour le jeune roi.",
    facts: [
      { t: "Vaux-le-Vicomte", d: "Le 17 août 1661, il reçoit le roi dans son château de Vaux-le-Vicomte, œuvre de Le Vau, Le Brun et Le Nôtre. Fête somptueuse, avec une comédie de Molière." },
      { t: "Arrêté par d'Artagnan", d: "Le 5 septembre 1661, à Nantes, il est arrêté par le lieutenant des mousquetaires d'Artagnan. Après un procès de trois ans, il finit ses jours dans la forteresse de Pignerol. Le roi engage son équipe d'artistes pour Versailles." }
    ],
    fam: fm() },

  { id: "marietherese", n: "Marie-Thérèse d'Autriche", g: "bourbon", lv: 2, sym: "ring", life: [1638, 1683], d: "1638 – 1683",
    role: "Reine de France", act: 14,
    q: "Infante d'Espagne, épouse de Louis XIV en 1660",
    one: "La reine discrète dont la dot n'est jamais payée.",
    facts: [
      { t: "Une dot jamais payée", d: "Cousine germaine de Louis XIV, elle l'épouse en 1660 à Saint-Jean-de-Luz. Elle renonce à ses droits sur l'Espagne contre une dot, qui n'est jamais payée. Louis XIV s'en servira pour réclamer des territoires, puis le trône d'Espagne pour leur petit-fils." }
    ],
    fam: fm(['Philippe IV d\'Espagne'], ['louis14'], ['Louis, le Grand Dauphin']) },

  { id: "montespan", n: "Madame de Montespan", g: "bourbon", lv: 3, sym: "ring", life: [1640, 1707], d: "1640 – 1707",
    role: "Favorite de Louis XIV", act: 14,
    q: "Favorite flamboyante de Louis XIV, compromise dans l'affaire des Poisons",
    one: "La favorite la plus puissante, et la plus inquiétante.",
    facts: [
      { t: "Sept enfants", d: "Favorite de 1667 à la fin des années 1670, elle donne sept enfants au roi, légitimés ensuite. Elle est réputée pour son esprit mordant." },
      { t: "L'affaire des Poisons", d: "De 1679 à 1682, une enquête sur des empoisonneuses parisiennes, dont la Voisin, met au jour messes noires et philtres d'amour. Des témoignages accusent Mme de Montespan. Le roi fait étouffer l'affaire et brûler une partie des dossiers." }
    ],
    fam: fm() },

  { id: "maintenon", n: "Madame de Maintenon", g: "bourbon", lv: 4, sym: "book", life: [1635, 1719], d: "1635 – 1719",
    role: "Épouse secrète de Louis XIV", act: 14,
    q: "Gouvernante des enfants de Mme de Montespan devenue l'épouse secrète du roi",
    one: "De la pauvreté à l'épouse secrète du Roi-Soleil.",
    facts: [
      { t: "Une enfance pauvre", d: "Françoise d'Aubigné, petite-fille d'un poète protestant, est née dans une prison de Niort. Elle épouse le poète Scarron, de vingt-cinq ans son aîné." },
      { t: "Gouvernante", d: "Veuve, elle devient la gouvernante discrète des enfants du roi et de Mme de Montespan. Le roi la remarque, et la fait marquise de Maintenon." },
      { t: "Le mariage secret", d: "Après la mort de la reine en 1683, le roi l'épouse secrètement, sans doute à l'automne 1683. La cour devient plus pieuse. En 1686, elle fonde la Maison royale de Saint-Cyr pour éduquer les jeunes filles nobles pauvres." }
    ],
    fam: fm([], ['Paul Scarron', 'louis14'], []) },

  { id: "vauban", n: "Vauban", g: "cour", lv: 3, sym: "castle", life: [1633, 1707], d: "1633 – 1707",
    role: "Ingénieur militaire, maréchal de France", act: 14,
    q: "Ingénieur qui fortifie les frontières du royaume pour Louis XIV",
    one: "L'ingénieur qui ferme les frontières de pierre.",
    facts: [
      { t: "Le pré carré", d: "Il construit ou modernise plus de cent places fortes autour du royaume, comme Neuf-Brisach ou Besançon. Douze de ses sites sont classés au patrimoine mondial de l'Unesco." },
      { t: "La dîme royale", d: "À la fin de sa vie, il propose un impôt payé par tous, nobles compris, proportionnel aux revenus. Son livre, publié en 1707, est condamné. Il meurt quelques semaines plus tard." }
    ],
    fam: fm() },

  { id: "moliere", n: "Molière", g: "cour", lv: 3, sym: "book", life: [1622, 1673], d: "1622 – 1673",
    role: "Comédien et auteur", act: 14,
    q: "Comédien et auteur du Tartuffe, mort après une représentation du Malade imaginaire",
    one: "Il fait rire de tout le monde, sauf du roi.",
    facts: [
      { t: "Tartuffe", d: "En 1664, sa comédie sur un faux dévot scandalise les religieux. Interdite pendant cinq ans malgré la protection du roi, elle triomphe en 1669." },
      { t: "La dernière scène", d: "Le 17 février 1673, il joue Le Malade imaginaire pour la quatrième fois. Pris d'un malaise sur scène, il termine la pièce et meurt chez lui quelques heures plus tard. Comédien, il n'a pas pu recevoir les derniers sacrements à temps." }
    ],
    fam: fm() },

  { id: "lully", n: "Jean-Baptiste Lully", g: "cour", lv: 2, sym: "book", life: [1632, 1687], d: "1632 – 1687",
    role: "Compositeur du roi", act: 14,
    q: "Musicien florentin de Louis XIV, mort d'un coup de canne de direction",
    one: "Le musicien tué par son bâton de chef.",
    facts: [
      { t: "Une mort absurde", d: "Arrivé de Florence adolescent, il devient le compositeur tout-puissant de Louis XIV et invente l'opéra à la française. En 1687, dirigeant un Te Deum, il se frappe le pied avec la lourde canne qui sert à battre la mesure. La gangrène l'emporte." }
    ],
    fam: fm() },

  { id: "masquefer", n: "Le Masque de fer", g: "bourbon", lv: 1, sym: "lock", life: [1640, 1703], d: "? – 1703",
    role: "Prisonnier mystérieux", act: 14,
    q: "Prisonnier anonyme mort à la Bastille en 1703, au visage caché",
    one: "Le prisonnier dont personne ne connaît le nom.",
    facts: [
      { t: "Une énigme", leg: true, d: "Un prisonnier au visage masqué, gardé par le même geôlier de Pignerol à la Bastille, y meurt en 1703. Le masque était sans doute de velours. Voltaire lance la rumeur d'un frère jumeau du roi, que Dumas popularise. Son identité reste inconnue." }
    ],
    fam: fm() },

  { id: "guillaume3", n: "Guillaume III d'Orange", g: "monde", lv: 2, sym: "shield", life: [1650, 1702], reign: [1689, 1702], rl: "roi d'Angleterre", d: "1650 – 1702",
    role: "Stathouder des Provinces-Unies, roi d'Angleterre", act: 14,
    q: "Prince hollandais devenu roi d'Angleterre, grand ennemi de Louis XIV",
    one: "Le grand adversaire protestant du Roi-Soleil.",
    facts: [
      { t: "Les digues ouvertes", d: "En 1672, face à l'invasion française, les Hollandais ouvrent leurs digues pour inonder le pays. Le jeune Guillaume prend la tête de la résistance. En 1689, il devient roi d'Angleterre et anime toutes les coalitions contre Louis XIV." }
    ],
    fam: fm() },

  { id: "innocent11", n: "Innocent XI", g: "eglise", lv: 1, sym: "mitre", life: [1611, 1689], reign: [1676, 1689], rl: "pape", pope: true, d: "pape de 1676 à 1689",
    role: "Pape (1676-1689)", act: 14,
    q: "Pape en conflit avec Louis XIV sur les droits de l'Église de France",
    one: "Le pape qui tient tête au Roi-Soleil.",
    facts: [
      { t: "La querelle de la régale", d: "Il s'oppose à Louis XIV, qui veut percevoir les revenus des évêchés vacants. En 1682, le clergé de France affirme son autonomie face à Rome. Le pape refuse d'investir les évêques nommés par le roi." }
    ],
    fam: fm() },

  /* ===== ACTE XV ===== */
  { id: "regent", n: "Philippe d'Orléans, le Régent", g: "bourbon", lv: 3, sym: "crown", life: [1674, 1723], reign: [1715, 1723], rl: "régent", d: "1674 – 1723",
    role: "Régent du royaume", act: 15,
    q: "Neveu de Louis XIV, régent pendant l'enfance de Louis XV",
    one: "Le régent libertin qui ouvre les fenêtres après Louis XIV.",
    facts: [
      { t: "Le testament cassé", d: "Louis XIV avait limité ses pouvoirs par testament. Dès septembre 1715, il le fait casser par le Parlement de Paris, en lui rendant en échange le droit de critiquer les lois." },
      { t: "La Régence", d: "La cour revient à Paris, les soupers libertins remplacent les messes. Il confie les finances à John Law. Le mot « Régence » désigne encore aujourd'hui un style élégant et léger." }
    ],
    fam: fm(['Philippe d\'Orléans (Monsieur)'], ['Françoise-Marie de Bourbon'], []) },

  { id: "law", n: "John Law", g: "cour", lv: 2, sym: "flame", life: [1671, 1729], d: "1671 – 1729",
    role: "Financier écossais", act: 15,
    q: "Écossais qui introduit le papier-monnaie et provoque une faillite géante en 1720",
    one: "L'inventeur d'une bulle financière géante.",
    facts: [
      { t: "Le système", d: "Il crée une banque qui émet des billets et une compagnie du Mississippi dont les actions s'envolent, rue Quincampoix. En 1720, tout s'effondre. Les Français se méfieront du papier-monnaie et des banques pendant des décennies. Law s'enfuit et meurt pauvre à Venise." }
    ],
    fam: fm() },

  { id: "louis15", n: "Louis XV", g: "bourbon", lv: 4, sym: "lys", life: [1710, 1774], reign: [1715, 1774], rl: "roi", d: "1710 – 1774",
    role: "Roi de France et de Navarre", act: 15,
    q: "Arrière-petit-fils de Louis XIV, roi à cinq ans, d'abord Bien-Aimé puis détesté",
    one: "Le Bien-Aimé qui finit détesté.",
    facts: [
      { t: "Le survivant", d: "Entre 1711 et 1712, la variole et la rougeole tuent son grand-père, ses parents et son frère aîné. Il devient roi à cinq ans, le dernier survivant de la lignée directe." },
      { t: "Le Bien-Aimé", d: "En 1744, il tombe gravement malade à Metz. Tout le royaume prie pour lui. Guéri, on le surnomme le Bien-Aimé. Trente ans plus tard, son cercueil sera escorté de nuit pour éviter les insultes." },
      { t: "Damiens", d: "Le 5 janvier 1757, Robert-François Damiens le blesse d'un coup de canif à Versailles. Damiens est écartelé en place de Grève, supplice d'une cruauté qui choque même l'époque." },
      { t: "Le Canada perdu, la Corse gagnée", d: "La guerre de Sept Ans se termine en 1763 par le traité de Paris : la France perd le Canada et presque toute l'Inde. Elle gagne la Lorraine en 1766 et la Corse en 1768." }
    ],
    fam: fm(['Louis de Bourgogne', 'Marie-Adélaïde de Savoie'], ['Marie Leszczynska'], ['Louis-Ferdinand, le dauphin']) },

  { id: "pompadour", n: "Madame de Pompadour", g: "bourbon", lv: 3, sym: "ring", life: [1721, 1764], d: "1721 – 1764",
    role: "Favorite de Louis XV", act: 15,
    q: "Bourgeoise devenue favorite de Louis XV, protectrice des philosophes",
    one: "La bourgeoise qui protège les Lumières depuis Versailles.",
    facts: [
      { t: "Une bourgeoise à la cour", d: "Jeanne-Antoinette Poisson, fille d'un financier, devient la favorite du roi en 1745, ce qui scandalise la noblesse. Elle reste son amie et conseillère jusqu'à sa mort, bien après la fin de leur liaison." },
      { t: "Protectrice des arts", d: "Elle soutient l'Encyclopédie et Voltaire, développe la manufacture de porcelaine de Sèvres et lance la construction du Petit Trianon, achevé après sa mort." },
      { t: "« Après nous, le déluge »", leg: true, d: "La phrase lui est attribuée, ou au roi, après la défaite de Rossbach en 1757. L'attribution est incertaine, mais elle colle trop bien à l'époque pour disparaître." }
    ],
    fam: fm() },

  { id: "dubarry", n: "Madame du Barry", g: "bourbon", lv: 2, sym: "ring", life: [1743, 1793], d: "1743 – 1793",
    role: "Dernière favorite de Louis XV", act: 15,
    q: "Dernière favorite de Louis XV, méprisée par Marie-Antoinette, guillotinée en 1793",
    one: "La dernière favorite, guillotinée.",
    facts: [
      { t: "Snobée", d: "D'origine très modeste, présentée à la cour en 1769, elle est snobée par la dauphine Marie-Antoinette, qui refuse de lui adresser la parole. Il faut une crise diplomatique pour que la dauphine lui dise enfin une phrase. Elle est guillotinée sous la Révolution en 1793." }
    ],
    fam: fm() },

  { id: "voltaire", n: "Voltaire", g: "cour", lv: 4, sym: "quill", life: [1694, 1778], d: "1694 – 1778",
    role: "Écrivain et philosophe", act: 15,
    q: "Philosophe de Candide, défenseur de Calas, prince des Lumières",
    one: "L'ironie comme arme contre l'intolérance.",
    facts: [
      { t: "La Bastille à vingt-trois ans", d: "François-Marie Arouet est enfermé à la Bastille en 1717 pour des vers contre le Régent. Il en sort sous le nom de Voltaire." },
      { t: "L'Angleterre et la Prusse", d: "Exilé en Angleterre, il admire sa liberté et l'écrit dans les Lettres philosophiques (1734), aussitôt brûlées. Il vit ensuite à Potsdam chez Frédéric II de Prusse, puis se brouille avec lui." },
      { t: "L'affaire Calas", d: "En 1762, le protestant Jean Calas est exécuté à Toulouse, accusé à tort d'avoir tué son fils. Voltaire mène campagne et obtient sa réhabilitation en 1765. « Écrasons l'infâme », c'est-à-dire le fanatisme." },
      { t: "Le triomphe", d: "Installé à Ferney, près de la frontière suisse, il écrit Candide (1759). Revenu à Paris en 1778, à quatre-vingt-trois ans, il est acclamé, puis meurt le 30 mai. Rousseau meurt à peine plus d'un mois après." }
    ],
    fam: fm() },

  { id: "rousseau", n: "Jean-Jacques Rousseau", g: "cour", lv: 3, sym: "quill", life: [1712, 1778], d: "1712 – 1778",
    role: "Philosophe et écrivain", act: 15,
    q: "Genevois, auteur du Contrat social et de l'Émile",
    one: "Le philosophe de la volonté générale.",
    facts: [
      { t: "Le Contrat social", d: "En 1762, il publie Du contrat social, qui fonde le pouvoir sur la volonté générale du peuple, et Émile, sur l'éducation. Les deux livres sont condamnés. Les révolutionnaires en feront une bible." },
      { t: "Les enfants abandonnés", d: "Il reconnaît dans ses Confessions avoir laissé ses cinq enfants à l'hospice des Enfants-Trouvés. Ses adversaires, Voltaire le premier, ne s'en privent pas." }
    ],
    fam: fm() },

  { id: "diderot", n: "Denis Diderot", g: "cour", lv: 3, sym: "book", life: [1713, 1784], d: "1713 – 1784",
    role: "Philosophe, maître d'œuvre de l'Encyclopédie", act: 15,
    q: "Philosophe qui dirige l'Encyclopédie pendant plus de vingt ans",
    one: "L'homme qui veut ranger tout le savoir du monde.",
    facts: [
      { t: "L'Encyclopédie", d: "Avec d'Alembert, il dirige l'Encyclopédie, dont le premier volume paraît en 1751. Interdite, relancée, achevée en 1772 : dix-sept volumes de texte et onze de planches, pour expliquer les sciences, les arts et les métiers." },
      { t: "Vendre sa bibliothèque", d: "Emprisonné à Vincennes en 1749 pour ses écrits, il est toujours à court d'argent. En 1765, l'impératrice Catherine II de Russie lui achète sa bibliothèque, lui en laisse l'usage et le paie pour la garder." }
    ],
    fam: fm() },

  { id: "montesquieu", n: "Montesquieu", g: "cour", lv: 2, sym: "book", life: [1689, 1755], d: "1689 – 1755",
    role: "Magistrat et philosophe", act: 15,
    q: "Magistrat bordelais, théoricien de la séparation des pouvoirs",
    one: "Le père de la séparation des pouvoirs.",
    facts: [
      { t: "De l'esprit des lois", d: "Après les Lettres persanes (1721), satire de la France vue par deux Persans, il publie en 1748 De l'esprit des lois. Pour éviter le despotisme, il faut que « le pouvoir arrête le pouvoir » : séparer législatif, exécutif et judiciaire." }
    ],
    fam: fm() },

  { id: "louis16", n: "Louis XVI", g: "bourbon", lv: 5, sym: "lock", life: [1754, 1793], reign: [1774, 1792], rl: "roi", d: "1754 – 1793",
    role: "Roi de France et de Navarre", act: 15,
    q: "Petit-fils de Louis XV, roi en 1774, qui convoque les états généraux en 1789",
    one: "Un roi plein de bonne volonté, pris dans la tempête.",
    facts: [
      { t: "Roi à dix-neuf ans", d: "Il devient roi en 1774. On raconte que le jeune couple aurait dit : « Mon Dieu, protégez-nous, nous régnons trop jeunes ». Il aime la chasse, la géographie et la serrurerie." },
      { t: "Des réformes avortées", d: "Il rappelle les parlements que Louis XV avait brisés, puis nomme Turgot, qui veut réformer. Les privilégiés obtiennent son renvoi en 1776. Les réformes suivantes échouent de la même façon." },
      { t: "La guerre d'Amérique", d: "En 1778, la France s'allie aux insurgés américains contre l'Angleterre. C'est une victoire, conclue en 1783, mais elle creuse énormément la dette." },
      { t: "Les réformes humaines", d: "Il abolit la torture pendant l'instruction en 1780 et, en 1787, l'édit de tolérance rend un état civil aux protestants. Il finance l'expédition de La Pérouse autour du monde." },
      { t: "Les états généraux", d: "Faute d'argent, et après l'échec des notables, il annonce en août 1788 la réunion des états généraux, qui n'ont pas siégé depuis 1614. Ils s'ouvrent à Versailles le 5 mai 1789. La suite appartient à un autre chapitre : il sera guillotiné le 21 janvier 1793." }
    ],
    fam: fm(['Louis-Ferdinand, le dauphin', 'Marie-Josèphe de Saxe'], ['marieantoinette'], ['Marie-Thérèse', 'Louis-Joseph', 'Louis-Charles (Louis XVII)']) },

  { id: "marieantoinette", n: "Marie-Antoinette", g: "bourbon", lv: 4, sym: "ring", life: [1755, 1793], d: "1755 – 1793",
    role: "Reine de France", act: 15,
    q: "Archiduchesse autrichienne mariée au futur Louis XVI à quatorze ans",
    one: "La reine autrichienne, cible de toutes les rumeurs.",
    facts: [
      { t: "L'Autrichienne", d: "Fille de l'impératrice Marie-Thérèse, elle épouse le dauphin le 16 mai 1770, à quatorze ans. Le mariage scelle l'alliance avec l'Autriche, vieille ennemie. La cour lui en voudra toujours." },
      { t: "La brioche", leg: true, d: "Elle n'a jamais dit « Qu'ils mangent de la brioche ». Rousseau raconte l'anecdote d'une « grande princesse » dans ses Confessions, écrites avant l'arrivée de Marie-Antoinette en France." },
      { t: "Trianon", d: "Elle se réfugie au Petit Trianon, fait construire un hameau à la campagne et vit entourée d'amis. Le peuple imagine des dépenses folles : on la surnomme « Madame Déficit »." },
      { t: "Le collier", d: "En 1785, une aventurière, Jeanne de La Motte, escroque le cardinal de Rohan en lui faisant acheter un collier de diamants au nom de la reine. La reine est innocente, mais le scandale la salit durablement." }
    ],
    fam: fm(['François Ier du Saint-Empire', 'Marie-Thérèse d\'Autriche'], ['louis16'], ['Marie-Thérèse', 'Louis-Joseph', 'Louis-Charles (Louis XVII)']) },

  { id: "turgot", n: "Turgot", g: "cour", lv: 2, sym: "book", life: [1727, 1781], d: "1727 – 1781",
    role: "Contrôleur général des finances", act: 15,
    q: "Ministre réformateur de Louis XVI, renvoyé en 1776",
    one: "Le réformateur renvoyé au bout de deux ans.",
    facts: [
      { t: "Trop de réformes", d: "Contrôleur général en 1774, il libère le commerce des grains, ce qui provoque des émeutes, la « guerre des farines » en 1775. En 1776, il supprime la corvée royale et les corporations. Les privilégiés obtiennent son renvoi en mai 1776, et ses réformes sont annulées." }
    ],
    fam: fm() },

  { id: "necker", n: "Jacques Necker", g: "cour", lv: 3, sym: "book", life: [1732, 1804], d: "1732 – 1804",
    role: "Banquier genevois, ministre des finances", act: 15,
    q: "Banquier protestant de Genève, ministre populaire de Louis XVI",
    one: "Le banquier qui publie les comptes du roi.",
    facts: [
      { t: "Le Compte rendu", d: "Directeur des finances de 1777 à 1781, il finance la guerre d'Amérique par l'emprunt. En 1781, il publie le Compte rendu au roi : pour la première fois, le public lit un budget de l'État. Il est renvoyé peu après." },
      { t: "Le retour", d: "Rappelé en août 1788, il est l'homme le plus populaire du royaume. Son renvoi, le 11 juillet 1789, mettra le feu aux poudres." }
    ],
    fam: fm() },

  { id: "lafayette", n: "La Fayette", g: "bourbon", lv: 2, sym: "sword", life: [1757, 1834], d: "1757 – 1834",
    role: "Officier, héros de l'indépendance américaine", act: 15,
    q: "Jeune noble parti combattre pour l'indépendance américaine en 1777",
    one: "Le héros des deux mondes.",
    facts: [
      { t: "Le héros des deux mondes", d: "En 1777, à dix-neuf ans, il part en Amérique à ses frais, malgré l'interdiction du roi. Ami de Washington, il est à la victoire de Yorktown en 1781. Il jouera un grand rôle au début de la Révolution." }
    ],
    fam: fm() },

  { id: "franklin", n: "Benjamin Franklin", g: "monde", lv: 2, sym: "flame", life: [1706, 1790], d: "1706 – 1790",
    role: "Diplomate américain à Paris", act: 15,
    q: "Savant et diplomate américain qui obtient l'alliance française en 1778",
    one: "L'Américain qui séduit Paris avec un bonnet de fourrure.",
    facts: [
      { t: "La star de Paris", d: "Inventeur du paratonnerre, il arrive à Paris fin 1776. Son bonnet de fourrure et ses manières simples fascinent les salons. Il négocie le traité d'alliance de février 1778 et la paix de 1783." }
    ],
    fam: fm() },

  { id: "frederic2prusse", n: "Frédéric II de Prusse", g: "monde", lv: 2, sym: "orb", life: [1712, 1786], reign: [1740, 1786], rl: "roi de Prusse", d: "1712 – 1786",
    role: "Roi de Prusse", act: 15,
    q: "Roi de Prusse, despote éclairé, ami puis ennemi de Voltaire, vainqueur à Rossbach",
    one: "Le despote éclairé qui écrit en français et bat les Français.",
    facts: [
      { t: "Rossbach, 1757", d: "Il parle et écrit en français, reçoit Voltaire à Potsdam, puis écrase l'armée française à Rossbach en 1757, pendant la guerre de Sept Ans. Les Français en restent mortifiés." }
    ],
    fam: fm() }
);

EVENTS.push(
  { id: "e1558", y: 1558, t: "Reprise de Calais", d: "Le duc de Guise reprend la dernière place anglaise en France.", act: 12, nop: true },
  { id: "e1559", y: 1559, t: "Mort d'Henri II dans un tournoi", d: "Quelques mois après la paix du Cateau-Cambrésis, qui clôt les guerres d'Italie.", act: 12, nop: true },
  { id: "e1560", y: 1560, t: "Conjuration d'Amboise", d: "Des protestants tentent d'enlever François II.", act: 12, nop: true },
  { id: "e1562", y: 1562, t: "Massacre de Wassy", d: "Les hommes du duc de Guise tuent des protestants : début des guerres de Religion.", act: 12, nop: true },
  { id: "e1572", y: 1572, t: "Massacre de la Saint-Barthélemy", d: "Le 24 août, à Paris, puis dans les provinces.", act: 12, nop: true },
  { id: "e1582", y: 1582, t: "Adoption du calendrier grégorien", d: "En France, on passe du 9 au 20 décembre.", act: 12 },
  { id: "e1588", y: 1588, t: "Assassinat du duc de Guise à Blois", d: "Sur ordre d'Henri III, le 23 décembre.", act: 12, nop: true },
  { id: "e1589", y: 1589, t: "Assassinat d'Henri III", d: "Henri de Navarre devient Henri IV, premier Bourbon.", act: 12, nop: true },
  { id: "e1593", y: 1593, t: "Abjuration d'Henri IV", d: "À Saint-Denis, le 25 juillet.", act: 12, nop: true },
  { id: "e1598", y: 1598, t: "Édit de Nantes", d: "Les protestants obtiennent la liberté de conscience et un culte encadré.", act: 12, nop: true },
  { id: "e1610", y: 1610, t: "Assassinat d'Henri IV", d: "Par Ravaillac, rue de la Ferronnerie, le 14 mai.", act: 12, nop: true },

  { id: "e1614", y: 1614, t: "Derniers états généraux avant 1789", d: "Réunis pendant la régence de Marie de Médicis.", act: 13, nop: true },
  { id: "e1615", y: 1615, t: "Louis XIII épouse Anne d'Autriche", d: "Une infante espagnole pour le jeune roi.", act: 13, nop: true },
  { id: "e1617", y: 1617, t: "Assassinat de Concini", d: "Louis XIII, seize ans, prend le pouvoir.", act: 13, nop: true },
  { id: "e1624", y: 1624, t: "Richelieu entre au Conseil du roi", d: "Il en devient vite le principal ministre.", act: 13, nop: true },
  { id: "e1628", y: 1628, t: "Reddition de La Rochelle", d: "Après plus d'un an de siège.", act: 13, nop: true },
  { id: "e1630", y: 1630, t: "Journée des Dupes", d: "Marie de Médicis croit avoir fait renvoyer Richelieu. Elle perd.", act: 13, nop: true },
  { id: "e1635", y: 1635, t: "Académie française et guerre contre l'Espagne", d: "La France entre ouvertement dans la guerre de Trente Ans.", act: 13, nop: true },
  { id: "e1637", y: 1637, t: "Le Cid et le Discours de la méthode", d: "Corneille et Descartes, la même année.", act: 13, nop: true },
  { id: "e1638", y: 1638, t: "Naissance de Louis XIV", d: "Après vingt-trois ans de mariage.", act: 13, nop: true },
  { id: "e1642", y: 1642, t: "Mort de Richelieu", d: "Le 4 décembre.", act: 13, nop: true },
  { id: "e1643", y: 1643, t: "Mort de Louis XIII et victoire de Rocroi", d: "Le 14 mai, puis le 19 mai. Louis XIV a quatre ans.", act: 13, nop: true },
  { id: "e1648", y: 1648, t: "Traités de Westphalie et début de la Fronde", d: "La France gagne une partie de l'Alsace. Paris se soulève.", act: 13, nop: true },
  { id: "e1652", y: 1652, t: "Le canon de la Bastille", d: "La Grande Mademoiselle fait tirer sur l'armée royale.", act: 13, nop: true },
  { id: "e1659", y: 1659, t: "Paix des Pyrénées", d: "Le Roussillon et l'Artois deviennent français.", act: 13, nop: true },

  { id: "e1661", y: 1661, t: "Louis XIV gouverne seul", d: "Mort de Mazarin en mars, arrestation de Fouquet en septembre.", act: 14, nop: true },
  { id: "e1665", y: 1665, t: "Colbert contrôleur général des finances", d: "Début de la grande politique économique.", act: 14, nop: true },
  { id: "e1672", y: 1672, t: "Guerre de Hollande", d: "Les Hollandais ouvrent leurs digues.", act: 14, nop: true },
  { id: "e1673", y: 1673, t: "Mort de Molière", d: "Après la quatrième représentation du Malade imaginaire.", act: 14, nop: true },
  { id: "e1682", y: 1682, t: "La cour s'installe à Versailles", d: "Le 6 mai.", act: 14 },
  { id: "e1685", y: 1685, t: "Révocation de l'édit de Nantes", d: "Par l'édit de Fontainebleau. La même année, le Code noir.", act: 14 },
  { id: "e1701", y: 1701, t: "Guerre de Succession d'Espagne", d: "Toute l'Europe contre le petit-fils de Louis XIV devenu roi d'Espagne.", act: 14, nop: true },
  { id: "e1709", y: 1709, t: "Le grand hiver", d: "Gel terrible, famine, des centaines de milliers de morts.", act: 14, nop: true },
  { id: "e1713", y: 1713, t: "Traité d'Utrecht", d: "Philippe V garde l'Espagne mais renonce à la France.", act: 14, nop: true },
  { id: "e1715", y: 1715, t: "Mort de Louis XIV", d: "Le 1er septembre, après soixante-douze ans de règne.", act: 14, nop: true },

  { id: "e1720", y: 1720, t: "Faillite du système de Law", d: "La même année, la peste frappe Marseille.", act: 15, nop: true },
  { id: "e1744", y: 1744, t: "Louis XV le Bien-Aimé", d: "Malade à Metz, il guérit sous les prières du royaume.", act: 15, nop: true },
  { id: "e1748", y: 1748, t: "De l'esprit des lois", d: "Montesquieu théorise la séparation des pouvoirs.", act: 15, nop: true },
  { id: "e1751", y: 1751, t: "Premier volume de l'Encyclopédie", d: "Dirigée par Diderot et d'Alembert.", act: 15, nop: true },
  { id: "e1757", y: 1757, t: "Attentat de Damiens", d: "Louis XV blessé d'un coup de canif. Défaite de Rossbach la même année.", act: 15, nop: true },
  { id: "e1762", y: 1762, t: "Du contrat social et affaire Calas", d: "Rousseau publie, Voltaire s'indigne.", act: 15, nop: true },
  { id: "e1763", y: 1763, t: "Traité de Paris", d: "La France perd le Canada et presque toute l'Inde.", act: 15, nop: true },
  { id: "e1768", y: 1768, t: "La Corse devient française", d: "Cédée par Gênes.", act: 15, nop: true },
  { id: "e1770", y: 1770, t: "Mariage du dauphin et de Marie-Antoinette", d: "Le 16 mai, à Versailles.", act: 15, nop: true },
  { id: "e1774", y: 1774, t: "Louis XVI devient roi", d: "À la mort de Louis XV, emporté par la variole.", act: 15, nop: true },
  { id: "e1776", y: 1776, t: "Déclaration d'indépendance américaine", d: "Le 4 juillet.", act: 15, w: true, nop: true },
  { id: "e1778", y: 1778, t: "Alliance avec les États-Unis", d: "La même année meurent Voltaire et Rousseau.", act: 15, nop: true },
  { id: "e1783", y: 1783, t: "Traité de Versailles et premières montgolfières", d: "L'indépendance américaine est reconnue.", act: 15, nop: true },
  { id: "e1785", y: 1785, t: "Affaire du collier de la reine", d: "Le cardinal de Rohan escroqué, la reine éclaboussée.", act: 15, nop: true },
  { id: "e1787", y: 1787, t: "Assemblée des notables et édit de tolérance", d: "Les privilégiés refusent de payer. Les protestants retrouvent un état civil.", act: 15, nop: true },
  { id: "e1789", y: 1789, t: "Ouverture des états généraux", d: "Le 5 mai 1789, à Versailles. La Révolution commence.", act: 15, nop: true }
);

FRISE[12] = ["e1559", "e1562", "e1572", "e1588", "e1589", "e1593", "e1598", "e1610"];
FRISE[13] = ["e1614", "e1617", "e1628", "e1630", "e1635", "e1643", "e1648", "e1659"];
FRISE[14] = ["e1661", "e1665", "e1673", "e1682", "e1685", "e1701", "e1709", "e1715"];
FRISE[15] = ["e1720", "e1751", "e1757", "e1763", "e1770", "e1774", "e1785", "e1789"];

MARR.push(
  ["henri2", "catherine", "1533. Une Médicis pour le second fils du roi, qui ne devait pas régner.", true],
  ["francois2", "mariestuart", "1558. La reine d'Écosse devient reine de France pour un an.", true],
  ["henri4", "margot", "1572. Les noces de la réconciliation, six jours avant la Saint-Barthélemy.", false],
  ["henri4", "mariemedicis", "1600. Une Médicis et une énorme dot pour rembourser les dettes du roi.", true],
  ["louis13", "annedautriche", "1615. L'infante espagnole attendra vingt-trois ans pour avoir un fils.", true],
  ["louis14", "marietherese", "1660. La paix des Pyrénées scellée par un mariage, et une dot jamais payée.", true],
  ["louis14", "maintenon", "Vers 1683. Un mariage secret avec l'ancienne gouvernante.", false],
  ["louis16", "marieantoinette", "1770. L'alliance avec l'Autriche, vieille ennemie.", true]
);

WORLD.push(
  { n: "Monarchie espagnole", sub: "Espagne et son empire", ppl: ["annedautriche", "marietherese", "charlesquint"], t: "Grande rivale de la France aux XVIe et XVIIe siècles, alliée des catholiques ligueurs. Les reines Anne d'Autriche et Marie-Thérèse sont des infantes espagnoles. En 1700, un petit-fils de Louis XIV devient roi d'Espagne : les Bourbons y règnent toujours." },
  { n: "Provinces-Unies", sub: "Pays-Bas du Nord", ppl: ["guillaume3", "descartes"], t: "République protestante et marchande, très riche, refuge des protestants français et des penseurs comme Descartes. Louis XIV l'envahit en 1672 sans la soumettre." },
  { n: "Angleterre puis Grande-Bretagne", sub: "Londres", ppl: ["mariestuart", "guillaume3", "franklin"], t: "Rivale permanente : en Amérique, en Inde et sur les mers. Elle gagne le Canada en 1763, puis perd ses colonies américaines en 1783 face aux insurgés soutenus par la France." },
  { n: "Amérique et Nouvelle-France", sub: "Canada, Louisiane, États-Unis", ppl: ["cartier", "lafayette", "franklin", "law"], t: "La Nouvelle-France naît des voyages de Cartier puis de la fondation de Québec en 1608. Elle est perdue en 1763. Vingt ans plus tard, la France prend sa revanche en aidant les États-Unis à naître." }
);

KEYYEARS.push(1572, 1598, 1610, 1643, 1661, 1685, 1715, 1763, 1774, 1789);

STORY[12] = [
  { y: "1559", t: "Un éclat de lance", ppl: ["henri2", "catherine", "diane"], p: "Henri II vit entre deux femmes : son épouse Catherine de Médicis et sa favorite Diane de Poitiers, de vingt ans son aînée. En 1559, la paix avec l'Espagne est signée. On fête ça par un tournoi. Le 30 juin, un éclat de lance traverse l'œil du roi. Il meurt dix jours plus tard. Catherine prend le deuil pour le reste de sa vie, et Chenonceau à Diane." },
  { y: "1562", t: "Les guerres commencent", ppl: ["catherine", "francois2", "charles9"], p: "Le royaume est coupé en deux : catholiques et protestants, qu'on appelle huguenots. Catherine, régente pour Charles IX, tente la conciliation et autorise le culte protestant en 1562. Deux mois plus tard, à Wassy, les hommes du duc de Guise massacrent des protestants réunis dans une grange. Huit guerres vont suivre en trente-six ans." },
  { y: "1572", t: "La Saint-Barthélemy", ppl: ["coligny", "margot", "henri4", "charles9", "catherine"], p: "Août 1572. Pour réconcilier le royaume, on marie Marguerite, sœur du roi, au protestant Henri de Navarre. Toute la noblesse protestante est à Paris. Le 24 août, à l'aube, les chefs protestants sont assassinés, à commencer par l'amiral de Coligny. Puis la foule s'en mêle. Des milliers de morts à Paris, puis en province. Le Chronoscope éteint son humour un moment." },
  { y: "1589", t: "Trois Henri, un seul survivant", ppl: ["henri3", "guise", "henri4"], p: "Henri III, roi sans héritier. Henri de Guise, chef de la Ligue catholique. Henri de Navarre, protestant et héritier légitime. En 1588, Henri III fait tuer Guise à Blois. En 1589, un moine poignarde Henri III. Il reste Navarre, devenu Henri IV, que la moitié du royaume refuse comme roi. Il lui faudra quatre ans de guerre." },
  { y: "1598", t: "Une messe et un édit", ppl: ["henri4", "sully", "gabrielle"], p: "En 1593, Henri IV abjure le protestantisme à Saint-Denis. A-t-il dit « Paris vaut bien une messe » ? Rien ne le prouve, mais il l'a pensé très fort. Sacré à Chartres, il entre dans Paris en 1594. En 1598, l'édit de Nantes accorde aux protestants la liberté de conscience. Sully remet les finances en ordre. Le royaume souffle enfin." },
  { y: "1610", t: "Un embouteillage", ppl: ["henri4", "ravaillac", "mariemedicis"], p: "Le 14 mai 1610, rue de la Ferronnerie, une charrette bloque le carrosse du roi. François Ravaillac grimpe sur la roue et le poignarde. Henri IV meurt presque aussitôt. Il est le seul roi de France resté vraiment populaire après sa mort. Son fils Louis XIII a huit ans, et sa veuve, Marie de Médicis, prend la régence." }
];

STORY[13] = [
  { y: "1617", t: "Le jeune roi frappe", ppl: ["louis13", "mariemedicis", "concini"], p: "Marie de Médicis gouverne avec son favori italien, Concini, détesté de tous. Le jeune Louis XIII, timide, bègue, que personne ne prend au sérieux, prépare son coup. Le 24 avril 1617, Concini est abattu à l'entrée du Louvre. Le roi a seize ans. Sa mère part en exil à Blois, puis s'en évade par une fenêtre. Ambiance familiale." },
  { y: "1628", t: "La digue de La Rochelle", ppl: ["richelieu", "louis13"], p: "En 1624, un évêque en robe rouge entre au Conseil : Richelieu. Il veut abattre les places fortes protestantes et l'orgueil des grands. En 1627, il assiège La Rochelle et fait construire une digue géante dans la mer pour bloquer la flotte anglaise. La ville se rend en 1628 après une famine terrible. Les protestants gardent leur foi, mais plus leurs murailles." },
  { y: "1630", t: "La journée des Dupes", ppl: ["mariemedicis", "richelieu", "louis13"], p: "Novembre 1630. Marie de Médicis exige que son fils renvoie Richelieu. Elle croit avoir gagné. Toute la cour se précipite chez elle. Le lendemain, le roi confirme le cardinal. Les courtisans qui ont parié sur la reine sont les dupes. Marie s'exile pour toujours. Le Chronoscope rappelle cette règle de cour : ne jamais féliciter trop tôt." },
  { y: "1635", t: "Le cardinal et la plume", ppl: ["richelieu", "corneille", "descartes"], p: "En 1635, Richelieu fonde l'Académie française et déclare la guerre à l'Espagne. Un cardinal allié à des protestants allemands contre des rois catholiques : la raison d'État avant tout. En 1637, Corneille fait triompher Le Cid et Descartes publie le Discours de la méthode. En 1638, après vingt-trois ans d'attente, naît enfin le dauphin Louis." },
  { y: "1643", t: "Un roi de quatre ans", ppl: ["louis13", "annedautriche", "mazarin", "conde"], p: "Richelieu meurt en décembre 1642, Louis XIII en mai 1643. Louis XIV a quatre ans. Cinq jours plus tard, le jeune Condé écrase les Espagnols à Rocroi. Anne d'Autriche, régente, fait casser le testament de son mari et garde comme ministre un Italien charmeur et rusé : le cardinal Mazarin." },
  { y: "1652", t: "La Fronde", ppl: ["mazarin", "annedautriche", "conde", "grandemademoiselle", "louis14"], p: "De 1648 à 1653, parlementaires, princes et Parisiens se révoltent contre les impôts et contre Mazarin : c'est la Fronde. Le petit roi doit fuir Paris en pleine nuit. Condé change de camp. En 1652, la Grande Mademoiselle fait tirer le canon de la Bastille sur l'armée royale. Louis XIV, quatorze ans, n'oubliera jamais. Mazarin, lui, finit par gagner et signe la paix des Pyrénées en 1659." }
];

STORY[14] = [
  { y: "1661", t: "Le jeune roi prend tout", ppl: ["louis14", "fouquet", "colbert", "mazarin"], p: "Mars 1661 : Mazarin meurt. Louis XIV, vingt-deux ans, annonce qu'il gouvernera seul. Les ministres rient sous cape. En août, le surintendant Fouquet l'invite à une fête éblouissante à Vaux-le-Vicomte. Trois semaines plus tard, d'Artagnan l'arrête. Colbert prend les finances, et le roi embauche l'architecte, le peintre et le jardinier de Fouquet. Message reçu par toute la cour." },
  { y: "1665", t: "Colbert au travail", ppl: ["colbert", "vauban", "louis14"], p: "Colbert se lève à cinq heures et ne s'arrête jamais. Manufactures, compagnies de commerce, marine, académies : il veut une France riche qui vende au monde entier. Vauban, lui, entoure le royaume d'une ceinture de forteresses. Et le Code noir, préparé par Colbert, organise l'esclavage dans les colonies. Le Grand Siècle a ses caves." },
  { y: "1673", t: "Le roi s'amuse", ppl: ["moliere", "lully", "montespan", "louis14"], p: "Fêtes, ballets, comédies. Molière fait rire la cour et choque les dévots avec Tartuffe. Lully règne sur la musique. Mme de Montespan règne sur le cœur du roi. Le 17 février 1673, Molière s'effondre en jouant Le Malade imaginaire et meurt quelques heures plus tard. Ironie que Molière lui-même aurait appréciée." },
  { y: "1682", t: "Versailles", ppl: ["louis14", "maintenon"], p: "Le 6 mai 1682, la cour s'installe pour de bon à Versailles. Des milliers de courtisans vivent au rythme du roi : son lever, sa messe, son dîner, son coucher. Être vu du roi est une carrière. L'affaire des Poisons a fait fuir la favorite Montespan. Bientôt, c'est la discrète Mme de Maintenon que le roi épouse en secret." },
  { y: "1685", t: "La révocation", ppl: ["louis14", "maintenon", "innocent11"], p: "En octobre 1685, le roi révoque l'édit de Nantes : un seul roi, une seule foi. Depuis des années, des dragons logés chez les protestants les poussaient à se convertir. Environ 200 000 protestants fuient. La Prusse, la Hollande et l'Angleterre récupèrent artisans, banquiers et soldats. Même le pape trouve les méthodes un peu brutales." },
  { y: "1715", t: "Le soleil se couche", ppl: ["louis14", "guillaume3"], p: "Les dernières guerres sont épuisantes. L'hiver 1709 gèle les rivières et affame le royaume. Le fils du roi, puis son petit-fils, puis un arrière-petit-fils meurent entre 1711 et 1712. Le 1er septembre 1715, Louis XIV meurt après soixante-douze ans de règne, le plus long de l'histoire de France. Son héritier a cinq ans. Le peuple, soulagé, insulte le cortège funèbre." }
];

STORY[15] = [
  { y: "1720", t: "La bulle de papier", ppl: ["regent", "law"], p: "Le Régent, neveu de Louis XIV, ouvre les fenêtres : la cour revient à Paris, on soupe, on rit. Il confie les finances à l'Écossais John Law, qui invente des billets et des actions du Mississippi. Tout Paris spécule rue Quincampoix. En 1720, la bulle éclate. La même année, la peste frappe Marseille. Les Français se méfieront longtemps des banques." },
  { y: "1744", t: "Le Bien-Aimé", ppl: ["louis15", "pompadour"], p: "Louis XV, roi à cinq ans, est un homme intelligent qui s'ennuie au Conseil. En 1744, malade à Metz, il manque de mourir : tout le royaume prie, on le surnomme le Bien-Aimé. L'année suivante, il installe à Versailles une bourgeoise brillante, Jeanne Poisson, marquise de Pompadour. La noblesse s'étrangle. Les philosophes, eux, ont trouvé une protectrice." },
  { y: "1751", t: "Ranger le monde", ppl: ["diderot", "voltaire", "rousseau", "montesquieu"], p: "Montesquieu a publié De l'esprit des lois en 1748. En 1751 paraît le premier tome de l'Encyclopédie de Diderot et d'Alembert : tout le savoir du monde, artisanat compris, rangé par ordre alphabétique et passé au crible de la raison. Voltaire ironise sur tout, Rousseau rêve de volonté générale. On appelle ça les Lumières. Le pouvoir, lui, interdit puis tolère." },
  { y: "1763", t: "Des arpents de neige", ppl: ["louis15", "frederic2prusse", "voltaire"], p: "La guerre de Sept Ans (1756-1763) tourne mal. Frédéric II écrase les Français à Rossbach. Damiens blesse le roi d'un coup de canif. En 1763, le traité de Paris donne le Canada et l'Inde aux Anglais. Voltaire avait parlé de « quelques arpents de neige ». Le royaume gagne la Lorraine et la Corse, mais l'humiliation reste." },
  { y: "1774", t: "Deux jeunes gens sur le trône", ppl: ["louis16", "marieantoinette", "turgot", "dubarry"], p: "Louis XV meurt de la variole en 1774, très impopulaire. Son petit-fils, Louis XVI, a dix-neuf ans, sa femme Marie-Antoinette dix-huit. Il veut bien faire, appelle Turgot, qui veut supprimer des privilèges. Les privilégiés obtiennent son renvoi en 1776. En 1778, la France aide les Américains à se libérer de l'Angleterre. Victoire coûteuse : la dette explose." },
  { y: "1789", t: "Le 5 mai", ppl: ["louis16", "necker", "marieantoinette", "lafayette"], p: "En 1785, l'affaire du collier salit la reine, pourtant innocente. Les caisses sont vides, les privilégiés refusent de payer, les récoltes de 1788 sont mauvaises. Louis XVI convoque les états généraux, qui ne se sont pas réunis depuis 1614. Le 5 mai 1789, ils s'ouvrent à Versailles. Le Chronoscope se tait, vérifie sa batterie, et te prévient : la suite est un autre voyage." }
];

TALK[12] = { who: "henri4", place: "Saint-Denis, juillet 1593",
  intro: "Un homme d'une quarantaine d'années, barbe grisonnante, odeur d'ail et de cheval, rit avec ses soldats. On dit qu'il va se convertir demain. Il t'aperçoit : « Une nouvelle tête ! Venez, on a besoin d'avis frais. »",
  beats: [
    { say: "Je suis roi depuis quatre ans, mais Paris me ferme ses portes parce que je suis protestant. Que dois-je faire ?",
      learn: "Henri IV abjure le protestantisme à Saint-Denis le 25 juillet 1593. La phrase « Paris vaut bien une messe » lui est attribuée sans preuve. Il entre dans Paris en mars 1594.",
      opts: [{ t: "Te convertir au catholicisme pour rassembler le royaume.", r: "C'est ce que je fais demain. Paris vaut bien une messe... non, ne note pas ça, on dira que je suis cynique.", x: 10 },
        { t: "Assiéger Paris jusqu'à ce qu'elle cède.", r: "Je l'ai déjà fait. Les Parisiens ont préféré manger des rats que m'ouvrir.", x: 3 },
        { t: "Rester protestant et abandonner Paris.", r: "Un roi de France sans Paris ? Autant être roi de Navarre, c'est plus petit.", x: 3 }] },
    { say: "Mes anciens frères protestants ont peur que je les abandonne. Comment les rassurer ?",
      learn: "Par l'édit de Nantes (avril 1598), les protestants obtiennent la liberté de conscience, le droit de culte dans certains lieux, l'accès aux charges publiques et des places fortes de sûreté.",
      opts: [{ t: "Un édit qui garantit leur liberté de conscience et des places fortes.", r: "Cela prendra du temps, mais je le ferai. Un royaume, deux religions : c'est révolutionnaire.", x: 10 },
        { t: "Les obliger à se convertir aussi.", r: "J'ai vu ce que donne la contrainte. Elle donne la Saint-Barthélemy.", x: 3 },
        { t: "Les envoyer au Canada.", r: "Idée curieuse. Quelques-uns iront, mais pas tout un peuple.", x: 4 }] }
  ],
  outro: "Henri te tape sur l'épaule à t'en déboîter le bras. Le Chronoscope : « Il a survécu à une bonne dizaine d'attentats. Le dernier l'attend dans dix-sept ans. »" };

TALK[13] = { who: "richelieu", place: "Devant La Rochelle, 1628",
  intro: "Sur une digue battue par le vent, un homme maigre en cuirasse sur sa robe rouge observe la ville assiégée. Il a un chat dans les bras. Il te dévisage longuement. « Vous n'êtes pas espionne de la reine mère, j'espère. »",
  beats: [
    { say: "La Rochelle attend la flotte anglaise. Comment empêcher les Anglais de ravitailler la ville ?",
      learn: "Richelieu fait construire une digue de plus d'un kilomètre et demi pour fermer la rade. La flotte anglaise ne peut passer. La ville, affamée, se rend en octobre 1628.",
      opts: [{ t: "Fermer la rade par une digue.", r: "C'est ce que nous construisons. Les flots la détruisent, nous la reconstruisons. La patience est une arme.", x: 10 },
        { t: "Négocier avec les Anglais.", r: "J'ai d'autres projets pour les Anglais. Pas tout de suite.", x: 3 },
        { t: "Donner l'assaut tout de suite.", r: "Et perdre la moitié de l'armée devant leurs murailles ? Non.", x: 3 }] },
    { say: "La ville va tomber. Que faire des protestants du royaume ?",
      learn: "Par l'édit de grâce d'Alès (1629), les protestants conservent la liberté de culte prévue à Nantes, mais perdent leurs places fortes et leurs privilèges politiques.",
      opts: [{ t: "Leur laisser leur culte, mais leur retirer leurs places fortes.", r: "Exactement. Je ne combats pas une religion, je combats un État dans l'État.", x: 10 },
        { t: "Les chasser du royaume.", r: "Et perdre des sujets utiles ? Laissez cela à de moins habiles.", x: 3 },
        { t: "Leur rendre tout, pour la paix.", r: "La paix sans autorité n'est qu'une trêve.", x: 3 }] },
    { say: "On me dit cruel. Les nobles me haïssent parce que je leur interdis de se battre en duel. Ai-je tort ?",
      learn: "Richelieu fait appliquer l'interdiction des duels. En 1627, le comte de Bouteville, qui s'était battu en duel en plein Paris, est décapité malgré les supplications de sa famille.",
      opts: [{ t: "Non : chaque noble tué en duel est un officier de moins pour le roi.", r: "Voilà un raisonnement d'homme d'État. Bouteville a payé de sa tête pour que d'autres gardent la leur.", x: 10 },
        { t: "Oui, le duel est une affaire d'honneur.", r: "L'honneur des nobles coûte trop cher au roi.", x: 3 },
        { t: "Tu devrais te battre en duel avec eux.", r: "Avec une soutane ? Ce serait d'un ridicule...", x: 3 }] }
  ],
  outro: "Le cardinal caresse son chat et retourne à ses dépêches. Le Chronoscope : « Les Trois Mousquetaires ne lui ont pas rendu justice. Enfin, pas complètement. »" };

TALK[14] = { who: "louis14", place: "Versailles, 1682",
  intro: "Galerie des Glaces, trois cents courtisans en perruque, un silence total. Le roi s'arrête devant toi, intrigué par ta tenue. Il ne dit rien. Un courtisan te souffle : « Il faut attendre qu'il parle. Et ne jamais lui tourner le dos. »",
  beats: [
    { say: "Pourquoi crois-tu que j'oblige les grands seigneurs à vivre ici, à Versailles, auprès de moi ?",
      learn: "En installant la cour à Versailles en 1682, Louis XIV garde la haute noblesse sous ses yeux. Les grands dépensent leur fortune et leur énergie dans l'étiquette, la recherche des faveurs et des pensions plutôt que dans les révoltes, comme pendant la Fronde.",
      opts: [{ t: "Pour qu'ils ne refassent jamais la Fronde.", r: "Vous avez deviné ce que mes ministres font semblant de ne pas comprendre. J'avais dix ans, je m'en souviens.", x: 10 },
        { t: "Parce que vous aimez la compagnie.", r: "J'aime être regardé. Ce n'est pas la même chose.", x: 4 },
        { t: "Pour économiser sur les châteaux.", r: "Économiser ? Regardez autour de vous.", x: 3 }] },
    { say: "Mon royaume doit n'avoir qu'une seule foi. Certains conseillers trouvent que les protestants sont utiles. Qu'en pensez-vous ?",
      learn: "En 1685, l'édit de Fontainebleau révoque l'édit de Nantes. Environ 200 000 protestants quittent le royaume, emportant savoir-faire et capitaux vers les pays voisins, notamment la Prusse.",
      opts: [{ t: "Si vous révoquez Nantes, vos meilleurs artisans partiront chez vos ennemis.", r: "Vous parlez comme Vauban. Il est très doué pour les forteresses, moins pour la religion.", x: 10 },
        { t: "Révoquez, ils se convertiront tous.", r: "C'est ce qu'on me dit. On me dit beaucoup de choses agréables.", x: 3 },
        { t: "Demandez au pape.", r: "Le pape et moi sommes en froid. Je décide seul.", x: 3 }] }
  ],
  outro: "Le roi s'éloigne vers la chapelle, suivi par trois cents perruques. Le Chronoscope chuchote : « Il ne t'a pas répondu. C'est déjà un honneur immense. »" };

TALK[15] = { who: "marieantoinette", place: "Petit Trianon, été 1785",
  intro: "Une jeune femme en robe de mousseline blanche, chapeau de paille, cueille des fleurs dans un faux village. Elle a trente ans, rit facilement, et te prend pour une dame de compagnie de la princesse de Lamballe.",
  beats: [
    { say: "On me raconte que les Parisiens me reprochent une phrase sur la brioche. Je ne m'en souviens pas du tout. L'ai-je vraiment dite ?",
      learn: "La phrase « Qu'ils mangent de la brioche » apparaît chez Rousseau, qui l'attribue à « une grande princesse » dans ses Confessions, écrites avant l'arrivée de Marie-Antoinette en France. Elle ne l'a jamais prononcée.",
      opts: [{ t: "Non, Rousseau l'attribuait à une autre princesse avant votre arrivée.", r: "Je le savais ! Mais allez expliquer cela aux pamphlétaires.", x: 10 },
        { t: "Oui, et c'était très drôle.", r: "Drôle ? Ma mère me gronderait par courrier.", x: 3 },
        { t: "Peu importe, ils vous aiment.", r: "Vous êtes très aimable. Vous êtes aussi très mal informée.", x: 3 }] },
    { say: "Le joaillier Boehmer m'envoie un billet incompréhensible sur un collier de diamants que je n'ai jamais commandé. Dois-je m'inquiéter ?",
      learn: "Dans l'affaire du collier (1785), Jeanne de La Motte fait croire au cardinal de Rohan qu'il achète un collier pour la reine. Le cardinal est acquitté en 1786, ce qui est vécu comme un désaveu de la reine. Son innocence n'y change rien : sa réputation s'effondre.",
      opts: [{ t: "Oui, c'est une escroquerie à votre nom, et le procès vous éclaboussera.", r: "Le roi fera arrêter le coupable, et tout s'arrangera. N'est-ce pas ?", x: 10 },
        { t: "Non, brûlez le billet.", r: "C'est ce que j'ai fait. Tout le monde me le reprochera plus tard.", x: 4 },
        { t: "Achetez-le, il est sûrement très beau.", r: "J'ai refusé ce collier il y a des années. Le roi préfère acheter des vaisseaux.", x: 3 }] },
    { say: "Le roi dit que les caisses sont vides et que les privilégiés refusent de payer. Que va-t-il se passer ?",
      learn: "Après l'échec de l'assemblée des notables (1787), Louis XVI annonce en août 1788 la convocation des états généraux. Ils s'ouvrent le 5 mai 1789 à Versailles. La Révolution commence.",
      opts: [{ t: "Le roi va devoir réunir les états généraux, et tout va changer.", r: "Les états généraux ? Personne ne sait même plus comment cela fonctionne. Depuis 1614...", x: 10 },
        { t: "Il suffira d'emprunter encore.", r: "C'est ce que fait M. Necker. Les banquiers commencent à dire non.", x: 3 },
        { t: "Rien, cela finira par passer.", r: "C'est ce que je me dis tous les matins.", x: 3 }] }
  ],
  outro: "La reine retourne à ses fleurs en fredonnant. Le Chronoscope éteint lentement son écran : « Fin du chapitre. Je te recommande de ne pas rester pour la suite. »" };

QUIZ[12] = [
  { q: "Comment meurt Henri II en 1559 ?", o: ["Blessé à l'œil dans un tournoi", "Assassiné par un moine", "De la peste", "À la bataille de Pavie"], c: 0, x: "La lance du capitaine de Montgomery." },
  { q: "Quel massacre déclenche les guerres de Religion en 1562 ?", o: ["Wassy", "La Saint-Barthélemy", "Béziers", "Amboise"], c: 0, x: "Les hommes du duc de Guise tuent des protestants." },
  { q: "À quelle date a lieu le massacre de la Saint-Barthélemy ?", o: ["Le 24 août 1572", "Le 14 mai 1610", "Le 23 décembre 1588", "Le 1er août 1589"], c: 0, x: "Six jours après le mariage d'Henri de Navarre et de Marguerite." },
  { q: "Qui fait assassiner le duc de Guise à Blois ?", o: ["Henri III", "Henri IV", "Catherine de Médicis", "Charles IX"], c: 0, x: "Le 23 décembre 1588." },
  { q: "Que garantit l'édit de Nantes (1598) ?", o: ["La liberté de conscience des protestants", "L'unité religieuse catholique", "L'expulsion des protestants", "L'indépendance de la Navarre"], c: 0, x: "Avec un culte encadré et des places fortes." },
  { q: "Où Henri IV est-il sacré en 1594 ?", o: ["À Chartres", "À Reims", "À Saint-Denis", "À Paris"], c: 0, x: "Reims était aux mains de la Ligue." },
  { q: "Qui assassine Henri IV en 1610 ?", o: ["Ravaillac", "Jacques Clément", "Damiens", "Montgomery"], c: 0, x: "Rue de la Ferronnerie, le 14 mai." },
  { q: "Quel pape réforme le calendrier en 1582 ?", o: ["Grégoire XIII", "Léon X", "Clément V", "Innocent III"], c: 0, x: "D'où le nom de calendrier grégorien." }
];
QUIZ[13] = [
  { q: "Qui Louis XIII fait-il abattre en 1617 pour prendre le pouvoir ?", o: ["Concini", "Richelieu", "Mazarin", "Fouquet"], c: 0, x: "Le favori de sa mère, Marie de Médicis." },
  { q: "Que se passe-t-il lors de la journée des Dupes en 1630 ?", o: ["Le roi garde Richelieu contre sa mère", "Richelieu est renvoyé", "Mazarin devient ministre", "La Rochelle se rend"], c: 0, x: "Marie de Médicis croyait avoir gagné." },
  { q: "Quelle institution Richelieu fonde-t-il en 1635 ?", o: ["L'Académie française", "L'Académie des sciences", "Le Collège de France", "La Sorbonne"], c: 0, x: "Pour fixer et embellir la langue." },
  { q: "Quelle ville protestante Richelieu assiège-t-il en 1627-1628 ?", o: ["La Rochelle", "Montauban", "Nîmes", "Genève"], c: 0, x: "Avec une digue pour bloquer la flotte anglaise." },
  { q: "Comment s'appelle la révolte de 1648-1653 contre Mazarin ?", o: ["La Fronde", "La Ligue", "La Jacquerie", "La guerre des farines"], c: 0, x: "Les Parisiens chantent des mazarinades." },
  { q: "Qui est vainqueur à Rocroi en 1643 ?", o: ["Le duc d'Enghien, futur Grand Condé", "Turenne", "Vauban", "Mazarin"], c: 0, x: "À vingt et un ans, cinq jours après la mort de Louis XIII." },
  { q: "Quelle paix signée par Mazarin en 1659 donne le Roussillon à la France ?", o: ["La paix des Pyrénées", "Les traités de Westphalie", "La paix de Vervins", "Le traité d'Utrecht"], c: 0, x: "Et prévoit le mariage de Louis XIV." }
];
QUIZ[14] = [
  { q: "Qui fait arrêter Louis XIV en septembre 1661 ?", o: ["Le surintendant Fouquet", "Colbert", "Mazarin", "Condé"], c: 0, x: "Après la fête de Vaux-le-Vicomte, par d'Artagnan." },
  { q: "En quelle année la cour s'installe-t-elle à Versailles ?", o: ["1682", "1661", "1715", "1643"], c: 0, x: "Le 6 mai 1682." },
  { q: "Que fait l'édit de Fontainebleau en 1685 ?", o: ["Il révoque l'édit de Nantes", "Il fonde Versailles", "Il crée la Comédie-Française", "Il abolit l'esclavage"], c: 0, x: "Environ 200 000 protestants s'exilent." },
  { q: "Quel ministre crée les manufactures royales et développe la marine ?", o: ["Colbert", "Louvois", "Fouquet", "Sully"], c: 0, x: "Contrôleur général des finances à partir de 1665." },
  { q: "Qui Louis XIV épouse-t-il en secret vers 1683 ?", o: ["Madame de Maintenon", "Madame de Montespan", "Louise de La Vallière", "Marie Mancini"], c: 0, x: "L'ancienne gouvernante des enfants du roi." },
  { q: "Quel ingénieur fortifie les frontières du royaume ?", o: ["Vauban", "Le Nôtre", "Mansart", "Colbert"], c: 0, x: "Douze de ses sites sont classés à l'Unesco." },
  { q: "Après quelle pièce Molière meurt-il en 1673 ?", o: ["Le Malade imaginaire", "Tartuffe", "Le Misanthrope", "L'Avare"], c: 0, x: "Lors de la quatrième représentation." },
  { q: "Combien de temps dure le règne de Louis XIV ?", o: ["72 ans", "54 ans", "46 ans", "33 ans"], c: 0, x: "De 1643 à 1715, le plus long de l'histoire de France." }
];
QUIZ[15] = [
  { q: "Quel financier provoque une grande faillite en 1720 ?", o: ["John Law", "Jacques Necker", "Turgot", "Colbert"], c: 0, x: "Le « système » de Law et la compagnie du Mississippi." },
  { q: "Quand paraît le premier volume de l'Encyclopédie ?", o: ["1751", "1715", "1789", "1734"], c: 0, x: "Dirigée par Diderot et d'Alembert." },
  { q: "Que perd la France au traité de Paris de 1763 ?", o: ["Le Canada et presque toute l'Inde", "L'Alsace", "La Corse", "La Louisiane seulement"], c: 0, x: "À la fin de la guerre de Sept Ans." },
  { q: "Quel philosophe défend la mémoire de Jean Calas ?", o: ["Voltaire", "Rousseau", "Montesquieu", "Diderot"], c: 0, x: "Il obtient sa réhabilitation en 1765." },
  { q: "Qui théorise la séparation des pouvoirs en 1748 ?", o: ["Montesquieu", "Rousseau", "Voltaire", "Turgot"], c: 0, x: "Dans De l'esprit des lois." },
  { q: "En quelle année Louis XVI épouse-t-il Marie-Antoinette ?", o: ["1770", "1774", "1785", "1755"], c: 0, x: "Le 16 mai 1770, à Versailles." },
  { q: "Qui a vraiment écrit l'anecdote « qu'ils mangent de la brioche » ?", o: ["Rousseau, à propos d'une autre princesse", "Marie-Antoinette dans une lettre", "Voltaire dans Candide", "Louis XVI"], c: 0, x: "Dans ses Confessions, avant l'arrivée de la reine." },
  { q: "Quand s'ouvrent les états généraux ?", o: ["Le 5 mai 1789", "Le 14 juillet 1789", "Le 21 janvier 1793", "Le 4 août 1789"], c: 0, x: "Ils ne s'étaient pas réunis depuis 1614." }
];
}

/* DONNEES 6 : iconographie de référence (t titre, a artiste ou support, d date, l lieu, n note) */
const ICONO = {
  clovis: [{ t: "Le Baptême de Clovis", a: "Maître de Saint Gilles", d: "vers 1500", l: "National Gallery of Art, Washington" },
    { t: "Gisant de Clovis", a: "Sculpture anonyme", d: "XIIIe siècle", l: "Basilique de Saint-Denis" }],
  remi: [{ t: "Le Baptême de Clovis", a: "Maître de Saint Gilles", d: "vers 1500", l: "National Gallery of Art, Washington", n: "Remi est l'évêque qui baptise." }],
  fredegonde: [{ t: "Frédégonde assistant au mariage de Chilpéric et Galswinthe", a: "Lawrence Alma-Tadema", d: "XIXe siècle" },
    { t: "Dalle funéraire de Frédégonde", a: "Mosaïque de pierres et de cuivre", d: "Moyen Âge", l: "Basilique de Saint-Denis" }],
  brunehaut: [{ t: "Le supplice de Brunehaut", a: "Miniatures des Grandes Chroniques de France", d: "XIVe et XVe siècles", n: "Plusieurs manuscrits illustrent sa mort, attachée à un cheval." }],
  gregoire1: [{ t: "Saint Grégoire le Grand", a: "Carlo Saraceni", d: "vers 1610", l: "Galleria Nazionale d'Arte Antica, Rome" }],
  dagobert1: [{ t: "Tombeau de Dagobert", a: "Sculpture gothique", d: "milieu du XIIIe siècle", l: "Basilique de Saint-Denis" }],
  charlesmartel: [{ t: "Bataille de Poitiers, octobre 732", a: "Charles de Steuben", d: "1837", l: "Château de Versailles, galerie des Batailles" }],
  charlemagne: [{ t: "L'empereur Charlemagne", a: "Albrecht Dürer", d: "1511-1513", l: "Germanisches Nationalmuseum, Nuremberg", n: "Portrait imaginaire, sept siècles après sa mort." },
    { t: "Statuette équestre dite de Charlemagne", a: "Bronze carolingien", d: "IXe siècle", l: "Musée du Louvre", n: "Il pourrait s'agir de Charles le Chauve." }],
  leon3: [{ t: "Le Couronnement de Charlemagne", a: "Atelier de Raphaël", d: "1516-1517", l: "Chambre de l'Incendie du Borgo, Vatican", n: "Léon III y a les traits du pape Léon X." }],
  alcuin: [{ t: "Raban Maur, présenté par Alcuin, offre son livre à l'archevêque de Mayence", a: "Manuscrit de Fulda", d: "IXe siècle", l: "Bibliothèque nationale autrichienne, Vienne" }],
  lothaire1: [{ t: "Lothaire Ier en majesté", a: "Évangéliaire de Lothaire", d: "vers 850", l: "Bibliothèque nationale de France" }],
  charleschauve: [{ t: "Charles le Chauve reçoit la Bible", a: "Première Bible de Charles le Chauve (Bible de Vivien)", d: "vers 845", l: "Bibliothèque nationale de France", n: "Un des rares portraits faits de son vivant." }],
  eudesparis: [{ t: "Le comte Eudes défend Paris contre les Normands", a: "Jean-Victor Schnetz", d: "1834-1836", l: "Château de Versailles" }],
  guillaumeconq: [{ t: "Tapisserie de Bayeux", a: "Broderie anonyme", d: "vers 1070", l: "Musée de la Tapisserie, Bayeux", n: "Guillaume y soulève son casque pour prouver qu'il est vivant." }],
  urbain2: [{ t: "Le concile de Clermont", a: "Jean Colombe, Passages d'Outremer de Sébastien Mamerot", d: "vers 1474", l: "Bibliothèque nationale de France" }],
  suger: [{ t: "Suger aux pieds de la Vierge", a: "Vitrail de l'Annonciation", d: "vers 1144", l: "Basilique de Saint-Denis", n: "Il s'est fait représenter lui-même dans son vitrail." }],
  alienor: [{ t: "Gisant d'Aliénor d'Aquitaine", a: "Sculpture en pierre peinte", d: "début du XIIIe siècle", l: "Abbaye de Fontevraud", n: "Elle est représentée en train de lire." }],
  henri2plant: [{ t: "Gisant d'Henri II", a: "Sculpture en pierre peinte", d: "début du XIIIe siècle", l: "Abbaye de Fontevraud" }],
  richard: [{ t: "Gisant de Richard Cœur de Lion", a: "Sculpture en pierre peinte", d: "début du XIIIe siècle", l: "Abbaye de Fontevraud" },
    { t: "Statue équestre de Richard Cœur de Lion", a: "Carlo Marochetti", d: "1856-1860", l: "Palais de Westminster, Londres" }],
  jeansansterre: [{ t: "Gisant de Jean sans Terre", a: "Sculpture en marbre de Purbeck", d: "XIIIe siècle", l: "Cathédrale de Worcester" }],
  bernard: [{ t: "L'Apparition de la Vierge à saint Bernard", a: "Filippino Lippi", d: "vers 1485-1490", l: "Badia Fiorentina, Florence" }],
  philippe2: [{ t: "La Bataille de Bouvines", a: "Horace Vernet", d: "1827", l: "Château de Versailles, galerie des Batailles" }],
  innocent3: [{ t: "Le pape Innocent III", a: "Fresque", d: "XIIIe siècle", l: "Monastère du Sacro Speco, Subiaco", n: "Peinte de son vivant ou peu après." }],
  blanche: [{ t: "Blanche de Castille et Louis IX", a: "Bible moralisée", d: "vers 1230", l: "Morgan Library, New York" }],
  louis9: [{ t: "Saint Louis, roi de France, et un page", a: "Le Greco", d: "vers 1585-1590", l: "Musée du Louvre" },
    { t: "Blanche de Castille et Louis IX", a: "Bible moralisée", d: "vers 1230", l: "Morgan Library, New York" }],
  philippe4: [{ t: "Gisant de Philippe le Bel", a: "Sculpture en marbre", d: "XIVe siècle", l: "Basilique de Saint-Denis" }],
  boniface8: [{ t: "Buste de Boniface VIII", a: "Arnolfo di Cambio", d: "vers 1300", l: "Grottes vaticanes, Rome", n: "Sculpté de son vivant." }],
  molay: [{ t: "Le bûcher des Templiers", a: "Miniature des Chroniques de France", d: "XIVe siècle", l: "British Library, Londres" }],
  edouard3: [{ t: "Gisant d'Édouard III", a: "Bronze doré", d: "vers 1386", l: "Abbaye de Westminster, Londres" }],
  charles5: [{ t: "Statue de Charles V", a: "Sculpture provenant du couvent des Célestins", d: "vers 1365-1380", l: "Musée du Louvre" }],
  duguesclin: [{ t: "Gisant de Bertrand du Guesclin", a: "Sculpture en marbre", d: "fin du XIVe siècle", l: "Basilique de Saint-Denis" }],
  charles6: [{ t: "Le bal des Ardents", a: "Miniature des Chroniques de Froissart", d: "vers 1470-1480", l: "British Library, Londres" }],
  isabeau: [{ t: "Christine de Pizan offre son livre à Isabeau de Bavière", a: "Miniature", d: "vers 1410-1414", l: "British Library, Londres" }],
  pizan: [{ t: "Christine de Pizan offre son livre à Isabeau de Bavière", a: "Miniature", d: "vers 1410-1414", l: "British Library, Londres" }],
  jeansanspeur: [{ t: "Portrait de Jean sans Peur", a: "Anonyme", d: "XVe siècle", l: "Musée du Louvre" }],
  henri5: [{ t: "Portrait d'Henri V", a: "Anonyme anglais", d: "fin XVIe ou début XVIIe siècle", l: "National Portrait Gallery, Londres" }],
  jeanne: [{ t: "Croquis en marge d'un registre du Parlement", a: "Clément de Fauquembergue", d: "1429", l: "Archives nationales", n: "Seule image de son vivant, dessinée par un greffier qui ne l'avait jamais vue." },
    { t: "Jeanne d'Arc au sacre du roi Charles VII", a: "Jean-Auguste-Dominique Ingres", d: "1854", l: "Musée du Louvre" }],
  charles7: [{ t: "Portrait de Charles VII", a: "Jean Fouquet", d: "vers 1445-1450", l: "Musée du Louvre" }],
  agnessorel: [{ t: "La Vierge et l'Enfant entourés d'anges (Diptyque de Melun)", a: "Jean Fouquet", d: "vers 1452-1455", l: "Musée royal des Beaux-Arts, Anvers", n: "La Vierge aurait les traits d'Agnès Sorel." }],
  louis11: [{ t: "Portrait de Louis XI", a: "Copie d'après Jean Fouquet", d: "XVIe siècle", l: "Brooklyn Museum, New York" }],
  temeraire: [{ t: "Portrait de Charles le Téméraire", a: "Rogier van der Weyden", d: "vers 1460", l: "Gemäldegalerie, Berlin" }],
  annebeaujeu: [{ t: "Triptyque du Maître de Moulins", a: "Maître de Moulins (Jean Hey)", d: "vers 1500", l: "Cathédrale de Moulins", n: "Anne et son mari y figurent en donateurs." }],
  annebretagne: [{ t: "Anne de Bretagne en prière", a: "Jean Bourdichon, Grandes Heures d'Anne de Bretagne", d: "1503-1508", l: "Bibliothèque nationale de France" }],
  francois1: [{ t: "Portrait de François Ier", a: "Jean Clouet", d: "vers 1530", l: "Musée du Louvre" },
    { t: "François Ier reçoit les derniers soupirs de Léonard de Vinci", a: "Jean-Auguste-Dominique Ingres", d: "1818", l: "Petit Palais, Paris", n: "Scène légendaire." }],
  charlesquint: [{ t: "Charles Quint à Mühlberg", a: "Titien", d: "1548", l: "Musée du Prado, Madrid" }],
  leonard: [{ t: "Autoportrait présumé", a: "Léonard de Vinci", d: "vers 1512", l: "Bibliothèque royale, Turin" },
    { t: "François Ier reçoit les derniers soupirs de Léonard de Vinci", a: "Jean-Auguste-Dominique Ingres", d: "1818", l: "Petit Palais, Paris" }],
  luther: [{ t: "Portrait de Martin Luther", a: "Lucas Cranach l'Ancien", d: "1529", n: "L'atelier de Cranach en a produit de nombreuses versions." }],
  henri8: [{ t: "Portrait d'Henri VIII", a: "Hans Holbein le Jeune", d: "vers 1537", l: "Musée Thyssen-Bornemisza, Madrid" }],
  henri2: [{ t: "Portrait d'Henri II", a: "Atelier de François Clouet", d: "vers 1559", l: "Musée du Louvre" }],
  catherine: [{ t: "Portrait de Catherine de Médicis", a: "D'après François Clouet", d: "XVIe siècle", l: "Musée du Louvre", n: "Miniature sur vélin." },
    { t: "Le Massacre de la Saint-Barthélemy", a: "François Dubois", d: "vers 1572-1584", l: "Musée cantonal des Beaux-Arts, Lausanne", n: "Une silhouette en noir y est souvent identifiée à Catherine." }],
  diane: [{ t: "Diane chasseresse", a: "École de Fontainebleau", d: "vers 1550", l: "Musée du Louvre" },
    { t: "Dame au bain", a: "François Clouet", d: "vers 1571", l: "National Gallery of Art, Washington", n: "L'identification avec Diane est discutée." }],
  coligny: [{ t: "Le Massacre de la Saint-Barthélemy", a: "François Dubois", d: "vers 1572-1584", l: "Musée cantonal des Beaux-Arts, Lausanne", n: "On y voit le corps de Coligny jeté par la fenêtre." }],
  guise: [{ t: "L'Assassinat du duc de Guise", a: "Paul Delaroche", d: "1834", l: "Musée Condé, Chantilly" }],
  henri3: [{ t: "L'Assassinat du duc de Guise", a: "Paul Delaroche", d: "1834", l: "Musée Condé, Chantilly", n: "Henri III apparaît derrière la tenture." }],
  margot: [{ t: "Portrait de Marguerite de Valois", a: "Dessin de l'atelier de François Clouet", d: "vers 1572", l: "Musée Condé, Chantilly" }],
  henri4: [{ t: "Portrait d'Henri IV en armure", a: "Frans Pourbus le Jeune", d: "vers 1610", l: "Musée du Louvre" }],
  gabrielle: [{ t: "Gabrielle d'Estrées et une de ses sœurs", a: "École de Fontainebleau", d: "vers 1594", l: "Musée du Louvre" }],
  mariemedicis: [{ t: "Cycle de la vie de Marie de Médicis", a: "Pierre Paul Rubens", d: "1622-1625", l: "Musée du Louvre", n: "Vingt-quatre toiles commandées pour le palais du Luxembourg." }],
  louis13: [{ t: "Louis XIII couronné par la Victoire", a: "Philippe de Champaigne", d: "1635", l: "Musée du Louvre" }],
  richelieu: [{ t: "Portrait du cardinal de Richelieu", a: "Philippe de Champaigne", d: "vers 1640", l: "Musée du Louvre" },
    { t: "Triple portrait du cardinal de Richelieu", a: "Philippe de Champaigne", d: "vers 1642", l: "National Gallery, Londres", n: "Destiné au sculpteur de son buste." },
    { t: "Richelieu sur la digue de La Rochelle", a: "Henri-Paul Motte", d: "1881" }],
  annedautriche: [{ t: "Portrait d'Anne d'Autriche", a: "Pierre Paul Rubens", d: "vers 1622-1625", l: "Musée du Louvre" }],
  mazarin: [{ t: "Portrait du cardinal Mazarin", a: "Robert Nanteuil, gravure d'après Pierre Mignard", d: "1661" }],
  conde: [{ t: "Buste du Grand Condé", a: "Antoine Coysevox", d: "1688", l: "Musée du Louvre" }],
  descartes: [{ t: "Portrait de René Descartes", a: "D'après Frans Hals", d: "XVIIe siècle", l: "Musée du Louvre" }],
  louis14: [{ t: "Portrait de Louis XIV en costume de sacre", a: "Hyacinthe Rigaud", d: "1701", l: "Musée du Louvre" },
    { t: "Le roi gouverne par lui-même", a: "Charles Le Brun", d: "1678-1684", l: "Château de Versailles, galerie des Glaces" }],
  colbert: [{ t: "Portrait de Jean-Baptiste Colbert", a: "Philippe de Champaigne", d: "1655", l: "Metropolitan Museum of Art, New York" }],
  maintenon: [{ t: "Portrait de Madame de Maintenon", a: "Pierre Mignard", d: "vers 1694" }],
  moliere: [{ t: "Buste de Molière", a: "Jean-Antoine Houdon", d: "1778", l: "Comédie-Française, Paris", n: "Posthume, plus d'un siècle après sa mort." }],
  louis15: [{ t: "Portrait de Louis XV", a: "Maurice Quentin de La Tour (pastel)", d: "1748", l: "Musée du Louvre" }],
  pompadour: [{ t: "Portrait en pied de la marquise de Pompadour", a: "Maurice Quentin de La Tour (pastel)", d: "1755", l: "Musée du Louvre" },
    { t: "Madame de Pompadour", a: "François Boucher", d: "1756", l: "Alte Pinakothek, Munich" }],
  voltaire: [{ t: "Voltaire assis", a: "Jean-Antoine Houdon", d: "1781", l: "Comédie-Française, Paris" }],
  rousseau: [{ t: "Portrait de Jean-Jacques Rousseau", a: "Maurice Quentin de La Tour (pastel)", d: "1753", l: "Musée Antoine-Lécuyer, Saint-Quentin" }],
  diderot: [{ t: "Portrait de Denis Diderot", a: "Louis-Michel van Loo", d: "1767", l: "Musée du Louvre", n: "Diderot trouvait qu'il y avait l'air d'une vieille coquette." }],
  louis16: [{ t: "Louis XVI en costume de sacre", a: "Antoine-François Callet", d: "1779", l: "Château de Versailles" }],
  marieantoinette: [{ t: "Marie-Antoinette à la rose", a: "Élisabeth Vigée Le Brun", d: "1783", l: "Château de Versailles" },
    { t: "Marie-Antoinette et ses enfants", a: "Élisabeth Vigée Le Brun", d: "1787", l: "Château de Versailles" }]
};

/* APPLICATION, partie 1 : outils, état, illustrations, générateurs */
(function () {
'use strict';
const D = document;
const $ = (s, r) => (r || D).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || D).querySelectorAll(s));
const P = {}, EV = {};
PEOPLE.forEach(p => { P[p.id] = p; });
EVENTS.forEach(e => { EV[e.id] = e; });
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const yrs = e => (e.ap ? 'vers ' : '') + e.y;
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];

/* ---------- état et sauvegarde ---------- */
const KEY = 'chronoscope.v1';
const blank = () => ({ xp: 0, streak: { last: null, n: 0 }, day: { d: null, xp: 0 }, acts: {}, seen: {}, srs: {}, badges: {}, stats: { reviews: 0, yrs: {} }, img: {}, fc: {}, prof: { name: '', av: 'a0' }, explore: false, t: 0 });
let S = blank();
function normalize() {
  const b = blank();
  S = Object.assign(b, S);
  S.stats = Object.assign({ reviews: 0, yrs: {} }, S.stats || {});
  S.streak = Object.assign({ last: null, n: 0 }, S.streak || {});
  S.day = Object.assign({ d: null, xp: 0 }, S.day || {});
  S.img = S.img || {};
  S.fc = S.fc || {};
  S.prof = Object.assign({ name: '', av: 'a0' }, S.prof || {});
}
try { const raw = localStorage.getItem(KEY); if (raw) S = JSON.parse(raw); } catch (e) { S = blank(); }
normalize();

let DBX = null, MYID = null, USERX = null;
let cloudRef = null, cloudT = null, cloudBusy = false, cloudDirty = false, saveT = null;
function save() {
  S.t = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* stockage indisponible */ }
  pushCloud();
}
function saveSoon() { clearTimeout(saveT); saveT = setTimeout(save, 900); }
function pushCloud() { if (!cloudRef) return; clearTimeout(cloudT); cloudT = setTimeout(doPush, 2500); }
async function doPush() {
  if (cloudBusy) { cloudDirty = true; return; }
  cloudBusy = true;
  try { await cloudRef.set({ t: S.t, s: JSON.stringify(S) }); } catch (e) { /* hors ligne */ }
  if (typeof pushPlayer === 'function') pushPlayer();
  cloudBusy = false;
  if (cloudDirty) { cloudDirty = false; pushCloud(); }
}
async function initCloud() {
  try {
    if (!(window.claude && typeof window.claude.use === 'function')) return;
    const db = await window.claude.use('db');
    const user = await window.claude.use('user');
    if (!db || !user) return;
    const id = await user.id();
    if (!id) return;
    DBX = db; MYID = id; USERX = user;
    cloudRef = db.collection('data/users/' + id).doc('progress');
    const snap = await cloudRef.get();
    const d = snap.exists ? snap.data() : null;
    if (d && d.s && d.t > S.t) {
      try { S = JSON.parse(d.s); normalize(); S.t = d.t; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} render(); } catch (e) { /* données illisibles */ }
    } else if (S.t > 0 && (!d || S.t > d.t)) { pushCloud(); }
  } catch (e) { /* capacité indisponible : on reste en local */ }
  if (DBX && MYID && typeof initArena === 'function') initArena();
}

/* ---------- jours, séries, points, rangs ---------- */
function ds(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
const today = () => ds(new Date());
function addDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return ds(d); }
function streakNow() { if (S.streak.last === today() || S.streak.last === addDays(-1)) return S.streak.n; return 0; }
const RANKS = [['Paysanne', 0], ['Page', 50], ['Écuyère', 130], ['Chevalière', 250], ['Dame de cour', 420], ['Chancelière', 620], ['Conseillère du roi', 850], ['Régente', 1100], ['Maîtresse du Temps', 1400]];
function rank(xp) {
  let i = 0;
  for (let k = 0; k < RANKS.length; k++) if (xp >= RANKS[k][1]) i = k;
  const cur = RANKS[i][1], nx = RANKS[i + 1];
  return { i: i, n: RANKS[i][0], cur: cur, next: nx ? nx[1] : null, nn: nx ? nx[0] : null, pct: nx ? Math.round(100 * (xp - cur) / (nx[1] - cur)) : 100 };
}
const DAILY_GOAL = 40;
function touchDay() {
  const t = today();
  if (S.day.d !== t) S.day = { d: t, xp: 0 };
  if (S.streak.last === t) return;
  S.streak.n = (S.streak.last === addDays(-1)) ? S.streak.n + 1 : 1;
  S.streak.last = t;
  const bonus = 5;
  S.xp += bonus; S.day.xp += bonus;
  toast('Série de ' + S.streak.n + (S.streak.n > 1 ? ' jours' : ' jour') + ' : +' + bonus + ' XP', 'rank');
}
function addXp(n, why) {
  if (!(n > 0)) return;
  const before = rank(S.xp).i;
  touchDay();
  S.xp += n; S.day.xp += n;
  toast('+' + n + ' XP' + (why ? ' · ' + why : ''), 'xp');
  const after = rank(S.xp).i;
  if (after > before) toast('Nouveau rang : ' + RANKS[after][0], 'rank');
  checkBadges();
  save();
  renderHead();
}

/* ---------- progression des actes ---------- */
function A(a) { if (!S.acts[a]) S.acts[a] = { story: false, talk: 0, talkDone: false, quiz: -1, frise: -1 }; return S.acts[a]; }
function isDone(a) { const s = S.acts[a]; return !!(s && s.story && s.quiz >= 7 && s.frise >= 0); }
function unlockedMax() {
  if (S.explore) return ACTS.length;
  let m = 1;
  for (let i = 1; i < ACTS.length; i++) { if (isDone(i)) m = i + 1; else break; }
  return m;
}
const locked = p => p.act > unlockedMax();
function actPeople(a) { return PEOPLE.filter(p => p.act === a).sort((x, y) => y.lv - x.lv || x.n.localeCompare(y.n)); }
function seenIn(a) { return actPeople(a).filter(p => S.seen[p.id]).length; }
function actSteps(a) {
  const s = A(a), n = actPeople(a).length;
  return [s.story, s.talkDone, seenIn(a) >= Math.ceil(n * 0.6), s.quiz >= 7, s.frise >= 0];
}

/* ---------- badges ---------- */
const BADGES = [
  { id: 'b_a1', n: 'Baptisée', d: "Terminer l'acte I", t: () => isDone(1) },
  { id: 'b_a2', n: 'Reine du partage', d: "Terminer l'acte II", t: () => isDone(2) },
  { id: 'b_a3', n: 'Maire du palais', d: "Terminer l'acte III", t: () => isDone(3) },
  { id: 'b_a4', n: 'Marteau', d: "Terminer l'acte IV", t: () => isDone(4) },
  { id: 'b_a5', n: 'Impératrice', d: "Terminer l'acte V", t: () => isDone(5) },
  { id: 'b_a6', n: 'Viking repentie', d: "Terminer l'acte VI", t: () => isDone(6) },
  { id: 'b_a7', n: 'Capétienne', d: "Terminer l'acte VII", t: () => isDone(7) },
  { id: 'b_a8', n: 'Croisée', d: "Terminer l'acte VIII", t: () => isDone(8) },
  { id: 'b_a9', n: 'Templière', d: "Terminer l'acte IX", t: () => isDone(9) },
  { id: 'b_a10', n: 'Pucelle', d: "Terminer l'acte X", t: () => isDone(10) },
  { id: 'b_a11', n: 'Renaissante', d: "Terminer l'acte XI", t: () => isDone(11) },
  { id: 'b_a12', n: 'Ni ligueuse ni huguenote', d: "Terminer l'acte XII", t: () => isDone(12) },
  { id: 'b_a13', n: 'Éminence grise', d: "Terminer l'acte XIII", t: () => isDone(13) },
  { id: 'b_a14', n: 'Reine-Soleil', d: "Terminer l'acte XIV", t: () => isDone(14) },
  { id: 'b_a15', n: 'Éclairée', d: "Terminer l'acte XV, de Clovis à 1789", t: () => isDone(15) },
  { id: 'b_perf', n: 'Sans faute', d: 'Réussir un quiz avec 10 sur 10', t: () => Object.keys(S.acts).some(k => S.acts[k].quiz >= 10) },
  { id: 'b_fr', n: 'Frise parfaite', d: 'Remettre une frise dans le bon ordre', t: () => Object.keys(S.acts).some(k => S.acts[k].frise >= 8) },
  { id: 'b_s3', n: 'Trois jours de suite', d: 'Série de 3 jours', t: () => S.streak.n >= 3 },
  { id: 'b_s7', n: 'Une semaine', d: 'Série de 7 jours', t: () => S.streak.n >= 7 },
  { id: 'b_col', n: 'Collectionneuse', d: 'Lire 25 fiches', t: () => Object.keys(S.seen).length >= 25 },
  { id: 'b_pap', n: 'Papiste', d: 'Lire toutes les fiches de papes', t: () => PEOPLE.filter(p => p.pope).every(p => S.seen[p.id]) },
  { id: 'b_time', n: 'Contemporaine', d: 'Explorer 15 années dans le Chronoscope', t: () => Object.keys(S.stats.yrs).length >= 15 },
  { id: 'b_rev', n: 'Révisionniste', d: 'Réviser 50 cartes', t: () => S.stats.reviews >= 50 },
  { id: 'b_ele', n: 'Un éléphant, ça trompe énormément', d: "Ouvrir la fiche d'Abul-Abbas", t: () => !!S.seen.abulabbas }
];
function checkBadges() {
  BADGES.forEach(b => {
    if (!S.badges[b.id] && b.t()) {
      S.badges[b.id] = Date.now();
      S.xp += 10; S.day.xp += 10;
      toast('Badge : ' + b.n + ' (+10 XP)', 'badge');
    }
  });
}

/* ---------- toasts ---------- */
function toast(msg, kind) {
  const box = $('#toasts'); if (!box) return;
  const el = D.createElement('div');
  el.className = 'toast ' + (kind || '');
  el.textContent = msg;
  box.appendChild(el);
  while (box.children.length > 3) box.removeChild(box.firstChild);
  setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
}

/* ---------- symboles (sprite) ---------- */
const SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
  '<symbol id="s-crown" viewBox="0 0 48 48"><path fill="currentColor" d="M6 36 L4 14 L15 24 L24 8 L33 24 L44 14 L42 36 Z"/><rect x="6" y="38" width="36" height="5" rx="1" fill="currentColor"/><circle cx="4" cy="12" r="2.6" fill="currentColor"/><circle cx="24" cy="6" r="2.6" fill="currentColor"/><circle cx="44" cy="12" r="2.6" fill="currentColor"/></symbol>' +
  '<symbol id="s-mitre" viewBox="0 0 48 48"><path d="M24 5 C14 7 11 20 12 34 H36 C37 20 34 7 24 5Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M24 9 V34 M16 20 H32 M10 34 H38" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M14 36 L12 44 M34 36 L36 44" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></symbol>' +
  '<symbol id="s-sword" viewBox="0 0 48 48"><path d="M24 3 L28 8 L28 30 L20 30 L20 8 Z" fill="currentColor"/><rect x="11" y="30" width="26" height="4" rx="2" fill="currentColor"/><rect x="22" y="34" width="4" height="8" fill="currentColor"/><circle cx="24" cy="44" r="2.6" fill="currentColor"/></symbol>' +
  '<symbol id="s-hammer" viewBox="0 0 48 48"><rect x="7" y="8" width="34" height="13" rx="2.5" fill="currentColor"/><rect x="21" y="21" width="6" height="23" rx="2" fill="currentColor"/></symbol>' +
  '<symbol id="s-orb" viewBox="0 0 48 48"><circle cx="24" cy="29" r="13" fill="none" stroke="currentColor" stroke-width="3.4"/><path d="M11 29 H37 M24 16 V42" stroke="currentColor" stroke-width="3" fill="none"/><path d="M24 3 V13 M19 7 H29" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" fill="none"/></symbol>' +
  '<symbol id="s-dagger" viewBox="0 0 48 48"><path d="M10 8 L38 40 M38 8 L10 40" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" fill="none"/><path d="M12 33 L19 28 M36 33 L29 28" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" fill="none"/></symbol>' +
  '<symbol id="s-arch" viewBox="0 0 48 48"><path d="M7 43 V22 A17 17 0 0 1 41 22 V43" fill="none" stroke="currentColor" stroke-width="3.2"/><path d="M15 43 V24 A9 9 0 0 1 33 24 V43" fill="none" stroke="currentColor" stroke-width="3.2"/><path d="M24 3 V10 M21 6 H27" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></symbol>' +
  '<symbol id="s-book" viewBox="0 0 48 48"><path d="M5 11 C13 8 20 9 24 13 C28 9 35 8 43 11 V38 C35 35 28 36 24 41 C20 36 13 35 5 38 Z" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round"/><path d="M24 13 V41" stroke="currentColor" stroke-width="3" fill="none"/></symbol>' +
  '<symbol id="s-ring" viewBox="0 0 48 48"><circle cx="24" cy="31" r="11" fill="none" stroke="currentColor" stroke-width="4.2"/><path d="M24 4 L32 13 L24 23 L16 13 Z" fill="currentColor"/></symbol>' +
  '<symbol id="s-shield" viewBox="0 0 48 48"><path d="M8 7 H40 V24 C40 34 32 40 24 44 C16 40 8 34 8 24 Z" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round"/><path d="M24 11 V38 M13 21 H35" stroke="currentColor" stroke-width="3" fill="none"/></symbol>' +
  '<symbol id="s-elephant" viewBox="0 0 48 48"><ellipse cx="28" cy="25" rx="14" ry="10" fill="currentColor"/><circle cx="13" cy="22" r="7.5" fill="currentColor"/><path d="M8 26 Q3 34 8 41" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><rect x="18" y="31" width="6" height="12" rx="2.4" fill="currentColor"/><rect x="32" y="31" width="6" height="12" rx="2.4" fill="currentColor"/><path d="M42 22 Q46 26 44 31" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></symbol>' +
  '<symbol id="s-bee" viewBox="0 0 48 48"><ellipse cx="22" cy="16" rx="5.5" ry="9" transform="rotate(-22 22 16)" fill="currentColor" opacity=".6"/><ellipse cx="31" cy="15" rx="5.5" ry="9" transform="rotate(16 31 15)" fill="currentColor" opacity=".6"/><ellipse cx="25" cy="29" rx="12" ry="8.5" fill="currentColor"/><path d="M21 21.5 V36.5 M28 21.5 V36.5" stroke="rgba(0,0,0,.45)" stroke-width="2.8"/><circle cx="11" cy="28" r="5" fill="currentColor"/><path d="M36 28 L44 29 L36 32 Z" fill="currentColor"/></symbol>' +
  '<symbol id="s-ship" viewBox="0 0 48 48"><path d="M4 28 H44 L38 38 H10 Z" fill="currentColor"/><path d="M24 4 V28" stroke="currentColor" stroke-width="3"/><path d="M24 7 L38 24 H24 Z" fill="currentColor" opacity=".8"/><path d="M4 28 Q2 22 6 20 M44 28 Q46 22 42 20" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M4 43 Q14 39 24 43 T44 43" stroke="currentColor" stroke-width="2.6" fill="none"/></symbol>' +
  '<symbol id="s-lys" viewBox="0 0 48 48"><path d="M24 4 C17 13 18 22 24 30 C30 22 31 13 24 4 Z" fill="currentColor"/><path d="M21 27 C14 29 7 24 6 16 C11 17 13 22 18 22" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/><path d="M27 27 C34 29 41 24 42 16 C37 17 35 22 30 22" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/><rect x="13" y="29" width="22" height="5" rx="1.5" fill="currentColor"/><path d="M24 34 L20 44 M24 34 L28 44 M24 34 V44" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></symbol>' +
  '<symbol id="s-cross" viewBox="0 0 48 48"><path d="M19 4 H29 V18 H43 V28 H29 V44 H19 V28 H5 V18 H19 Z" fill="currentColor"/></symbol>' +
  '<symbol id="s-castle" viewBox="0 0 48 48"><path d="M5 44 V16 H11 V20 H15 V16 H21 V20 H27 V16 H33 V20 H37 V16 H43 V44 Z" fill="currentColor"/><path d="M20 44 V34 a4 4 0 0 1 8 0 V44" fill="rgba(0,0,0,.4)"/><path d="M24 4 V14 M24 5 L31 8 L24 11" stroke="currentColor" stroke-width="2.4" fill="currentColor"/></symbol>' +
  '<symbol id="s-sun" viewBox="0 0 48 48"><circle cx="24" cy="24" r="10" fill="currentColor"/><path d="M24 2 V9 M24 39 V46 M2 24 H9 M39 24 H46 M8.4 8.4 L13.4 13.4 M34.6 34.6 L39.6 39.6 M8.4 39.6 L13.4 34.6 M34.6 13.4 L39.6 8.4" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></symbol>' +
  '<symbol id="s-quill" viewBox="0 0 48 48"><path d="M40 4 C24 8 14 20 10 38 L14 38 C18 26 26 16 40 4 Z" fill="currentColor"/><path d="M40 4 C38 18 28 30 14 36" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 44 L12 36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M18 44 H40" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></symbol>' +
  '<symbol id="s-lock" viewBox="0 0 48 48"><rect x="10" y="21" width="28" height="22" rx="3" fill="currentColor"/><path d="M16 21 V15 a8 8 0 0 1 16 0 V21" fill="none" stroke="currentColor" stroke-width="4.2"/></symbol>' +
  '<symbol id="s-flame" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2 C13 6.5 18 8.5 18 14.5 a6 6 0 0 1 -12 0 C6 11.5 8 10.5 8 7.5 C10 8.5 11 6.5 12 2 Z"/></symbol>' +
  '<symbol id="s-check" viewBox="0 0 24 24"><path d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
  '<symbol id="t-quest" viewBox="0 0 24 24"><path d="M6 3.5 H17 a2.5 2.5 0 0 1 2.5 2.5 V20 H8.5 A2.5 2.5 0 0 1 6 17.5 Z M6 17.5 A2.5 2.5 0 0 0 3.5 20 H8.5 M9.5 8 H16 M9.5 12 H16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
  '<symbol id="t-cards" viewBox="0 0 24 24"><path d="M8 3.5 H18 a1.8 1.8 0 0 1 1.8 1.8 V16 H8 Z M5 7 V19 a1.5 1.5 0 0 0 1.5 1.5 H16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
  '<symbol id="t-time" viewBox="0 0 24 24"><path d="M7 3.5 H17 M7 20.5 H17 M8 3.5 V6 C8 9 12 10.5 12 12 C12 13.5 8 15 8 18 V20.5 M16 3.5 V6 C16 9 12 10.5 12 12 C12 13.5 16 15 16 18 V20.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
  '<symbol id="t-lin" viewBox="0 0 24 24"><path d="M12 4 V9 M12 9 H6.5 V14 M12 9 H17.5 V14 M6.5 14 V20 M17.5 14 V20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="4" r="1.6" fill="currentColor"/><circle cx="6.5" cy="20" r="1.6" fill="currentColor"/><circle cx="17.5" cy="20" r="1.6" fill="currentColor"/></symbol>' +
  '<symbol id="t-rev" viewBox="0 0 24 24"><path d="M19.5 12 A7.5 7.5 0 1 1 16.5 6 M19.5 4 V8.5 H15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
  '</defs></svg>';

/* ---------- médaillons et emblèmes ---------- */
function starPath(cx, cy, r1, r2, n) {
  let d = '';
  for (let i = 0; i < n * 2; i++) {
    const a = Math.PI * i / n - Math.PI / 2, r = i % 2 ? r1 : r2;
    d += (i ? 'L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1);
  }
  return d + 'Z';
}
const RAYS = starPath(32, 32, 27, 31.5, 20);
function medal(p, size) {
  size = size || 56;
  return '<svg class="medal lv' + p.lv + ' g-' + p.g + '" viewBox="0 0 64 64" width="' + size + '" height="' + size + '" aria-hidden="true">' +
    (p.lv === 5 ? '<path class="m-ray" d="' + RAYS + '"/>' : '') +
    '<circle class="m-ring" cx="32" cy="32" r="27"/><circle class="m-fill" cx="32" cy="32" r="23.5"/>' +
    (p.lv >= 4 ? '<circle class="m-in" cx="32" cy="32" r="20.5"/>' : '') +
    '<use class="m-sym" href="#s-' + p.sym + '" x="16" y="16" width="32" height="32"/></svg>';
}
function emblem(sym, size, state) {
  return '<svg class="emb ' + (state || '') + '" viewBox="0 0 64 64" width="' + size + '" height="' + size + '" aria-hidden="true"><circle class="e-ring" cx="32" cy="32" r="29"/><circle class="e-fill" cx="32" cy="32" r="25"/>' +
    '<use class="e-sym" href="#s-' + (state === 'lock' ? 'lock' : sym) + '" x="16" y="16" width="32" height="32"/></svg>';
}
const SKY = [['#16226A', '#3A4FB0'], ['#4A1D3A', '#B0573A'], ['#2A1A08', '#9C6B22']];
function eraOf(a) { return a >= 14 ? 2 : a >= 11 ? 1 : 0; }
function banner(a) {
  const U = (id, x, y, w, col) => '<use href="#s-' + id + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + w + '" style="color:' + col + '"/>';
  const GOLD = '#E3BE5B', RED = '#D4513A', PARCH = '#F3EBD2';
  let m = '';
  if (a === 1) m = U('bee', 40, 26, 44, GOLD) + U('bee', 118, 44, 62, GOLD) + U('bee', 224, 24, 48, GOLD) + U('bee', 292, 60, 34, PARCH);
  if (a === 2) m = U('crown', 38, 30, 62, GOLD) + U('crown', 262, 30, 62, RED) + U('dagger', 148, 26, 66, PARCH);
  if (a === 3) m = U('arch', 132, 14, 96, GOLD) + U('crown', 60, 62, 40, PARCH) + U('crown', 260, 62, 40, PARCH);
  if (a === 4) m = U('hammer', 138, 16, 84, GOLD) + '<path d="M66 124 L84 34 M72 124 L90 40 M294 124 L276 34 M288 124 L270 40" stroke="' + PARCH + '" stroke-width="3" stroke-linecap="round"/>';
  if (a === 5) m = U('orb', 128, 12, 90, GOLD) + U('elephant', 232, 58, 62, PARCH) + U('arch', 48, 52, 56, RED);
  if (a > 5) {
    const ac = ACTS[a - 1], era = a >= 14 ? 2 : a >= 11 ? 1 : 0;
    const sec = { ship: 'ship', lys: 'castle', cross: 'arch', flame: 'crown', sword: 'shield', castle: 'lys', dagger: 'crown', shield: 'mitre', sun: 'crown', quill: 'book' }[ac.sym] || 'crown';
    m = U(ac.sym, 136, 14, 88, GOLD) + U(sec, 44, 58, 50, era ? RED : PARCH) + U(sec, 268, 58, 50, era ? RED : PARCH);
  }
  const stars = [[22, 20], [70, 12], [330, 18], [300, 80], [18, 70], [200, 10], [250, 14]].map(s => '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="1.4" fill="#F3EBD2" opacity=".7"/>').join('');
  return '<svg viewBox="0 0 360 140" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration de l\'acte ' + ROMAN[a] + '">' +
    '<defs><linearGradient id="sk' + a + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + SKY[eraOf(a)][0] + '"/><stop offset="1" stop-color="' + SKY[eraOf(a)][1] + '"/></linearGradient></defs>' +
    '<rect width="360" height="140" fill="url(#sk' + a + ')"/>' + stars +
    '<circle cx="316" cy="34" r="15" fill="#E3BE5B"/><circle cx="316" cy="34" r="20" fill="none" stroke="#E3BE5B" stroke-width="1.3" opacity=".5"/>' +
    '<path d="M0 108 Q60 88 120 104 T240 98 T360 106 V140 H0 Z" fill="rgba(0,0,0,.32)"/>' +
    '<path d="M0 124 Q90 110 180 122 T360 119 V140 H0 Z" fill="rgba(0,0,0,.5)"/>' + m + '</svg>';
}

/* ---------- aides de données ---------- */
const MAXLIFE = PEOPLE.concat(GEXTRA);
function overlap(a, b) { return Math.min(a.life[1], b.life[1]) - Math.max(a.life[0], b.life[0]); }
function actOfYear(y) { for (let i = ACTS.length - 1; i >= 0; i--) if (y >= ACTS[i].a && y <= ACTS[i].b) return ACTS[i]; return null; }
function nameOf(x) { return P[x] ? P[x].n : x; }
const POPES = PEOPLE.filter(p => p.pope).sort((a, b) => a.reign[0] - b.reign[0]);
function popeAt(y) { return POPES.find(p => y > p.reign[0] && y < p.reign[1]) || null; }
function whoAt(y) {
  const power = [], around = [];
  MAXLIFE.forEach(p => {
    if (!p.life) return;
    if (p.reign && y >= p.reign[0] && y <= p.reign[1]) power.push(p);
    else if (y >= p.life[0] && y <= p.life[1]) around.push(p);
  });
  const gOrder = { mero: 0, caro: 1, capet: 2, valois: 3, bourbon: 4, cour: 5, eglise: 6, monde: 7 };
  const sorter = (a, b) => (gOrder[a.g] - gOrder[b.g]) || ((b.lv || 0) - (a.lv || 0));
  return { power: power.sort(sorter), around: around.sort(sorter) };
}

/* ---------- cartes de révision ---------- */
const INTERVALS = [0, 1, 3, 7, 16, 35];
function deckAll() {
  const max = unlockedMax(), out = [];
  PEOPLE.forEach(p => {
    if (p.act > max) return;
    out.push({ id: 'p:' + p.id, a: p.act, lv: p.lv, k: 'p', ref: p.id });
    p.facts.forEach((f, i) => out.push({ id: 'f:' + p.id + ':' + i, a: p.act, lv: p.lv, k: 'f', ref: p.id, i: i }));
  });
  EVENTS.forEach(e => { if (e.act <= max) out.push({ id: 'e:' + e.id, a: e.act, lv: 3, k: 'e', ref: e.id }); });
  MARR.forEach((m, i) => {
    const acts = [m[0], m[1]].filter(x => P[x]).map(x => P[x].act);
    const a = acts.length ? Math.max.apply(null, acts) : 3;
    if (a <= max) out.push({ id: 'm:' + i, a: a, lv: 3, k: 'm', ref: i });
  });
  EVENTS.forEach(e => {
    if (e.act <= max && !e.nop && popeAt(e.y)) out.push({ id: 'pp:' + e.id, a: e.act, lv: 3, k: 'pp', ref: e.id });
  });
  return out;
}
function cardHTML(c) {
  if (c.k === 'p') {
    const p = P[c.ref];
    return { f: '<div class="rc-med">' + medal(p, 72) + '</div><p class="rc-q">Qui est <b>' + esc(p.n) + '</b> ?</p>',
      b: '<p class="rc-a"><b>' + esc(p.role) + '</b><br>' + esc(p.d) + '</p><p>' + esc(p.one) + '</p><p class="rc-tag">' + LEVELS[p.lv].n + '</p>' };
  }
  if (c.k === 'f') {
    const p = P[c.ref], f = p.facts[c.i];
    return { f: '<div class="rc-med">' + medal(p, 56) + '</div><p class="rc-q"><b>' + esc(p.n) + '</b><br>' + esc(f.t) + '</p>',
      b: '<p class="rc-a">' + esc(f.d) + '</p>' + (f.leg ? '<p class="rc-tag">Légende ou tradition</p>' : '') };
  }
  if (c.k === 'e') {
    const e = EV[c.ref];
    return { f: '<p class="rc-q">Quand ?<br><b>' + esc(e.t) + '</b></p>', b: '<p class="rc-year">' + yrs(e) + '</p><p>' + esc(e.d) + '</p>' };
  }
  if (c.k === 'm') {
    const m = MARR[c.ref];
    return { f: '<p class="rc-q">Qui est marié(e) avec <b>' + esc(nameOf(m[0])) + '</b> ?</p>', b: '<p class="rc-a"><b>' + esc(nameOf(m[1])) + '</b></p><p>' + esc(m[2]) + '</p>' };
  }
  const e = EV[c.ref], pp = popeAt(e.y);
  return { f: '<p class="rc-q">Qui est pape quand a lieu :<br><b>' + esc(e.t) + '</b> (' + yrs(e) + ') ?</p>', b: '<p class="rc-a"><b>' + esc(pp.n) + '</b></p><p>Pape de ' + pp.reign[0] + ' à ' + pp.reign[1] + '.</p>' };
}
function buildSession(actFilter) {
  const t = today();
  let all = deckAll();
  if (actFilter) all = all.filter(c => c.a === actFilter);
  const due = all.filter(c => S.srs[c.id] && S.srs[c.id].due <= t).sort((a, b) => S.srs[a.id].due.localeCompare(S.srs[b.id].due));
  const fresh = all.filter(c => !S.srs[c.id]).sort((a, b) => a.a - b.a || b.lv - a.lv || (Math.random() - 0.5));
  return { due: due, fresh: fresh, all: all };
}

/* ---------- générateur de quiz ---------- */
function mkQ(q, correct, wrong, x, extra) {
  const opts = shuffle([correct].concat(wrong.slice(0, 3)));
  return Object.assign({ q: q, opts: opts, c: opts.indexOf(correct), x: x }, extra || {});
}
/* sexe des personnages, pour des propositions de mariage cohérentes */
const FEM = {};
['clotilde', 'genevieve', 'radegonde', 'galswinthe', 'fredegonde', 'brunehaut', 'bertha', 'bathilde', 'bertrade', 'hildegarde', 'irene', 'judith', 'annekiev', 'alienor', 'blanche', 'margprovence', 'jeannenavarre', 'isabellefrance', 'isabeau', 'jeanne', 'pizan', 'agnessorel', 'annebeaujeu', 'annebretagne', 'louisesavoie', 'margueritenav', 'catherine', 'diane', 'mariestuart', 'margot', 'gabrielle', 'mariemedicis', 'annedautriche', 'grandemademoiselle', 'marietherese', 'montespan', 'maintenon', 'pompadour', 'dubarry', 'marieantoinette'].forEach(x => { FEM[x] = 1; });
const SEXNAME = {};
MARR.forEach(m => {
  [[m[0], m[1]], [m[1], m[0]]].forEach(pr => {
    const a = pr[0], b = pr[1];
    if (!P[b] && P[a] && a !== 'abelard') SEXNAME[b] = FEM[a] ? 'm' : 'f';
  });
});
function sexOf(x) { if (x === 'abelard') return null; if (P[x]) return FEM[x] ? 'f' : 'm'; return SEXNAME[x] || null; }
function marrAct(m) { const acts = [m[0], m[1]].filter(x => P[x]).map(x => P[x].act); return acts.length ? Math.max.apply(null, acts) : 3; }
function inWindow(list, actOf, actId, need) {
  for (let w = 0; w <= 3; w++) {
    const r = list.filter(x => Math.abs(actOf(x) - actId) <= w);
    if (r.length >= need) return r;
  }
  return list;
}
function procQuestions(actId) {
  const out = [];
  const people = PEOPLE.filter(p => p.act === actId);
  const events = EVENTS.filter(e => e.act === actId);
  // dates : uniquement des événements de l'acte
  pick(events, 6).forEach(e => {
    const others = shuffle(events.filter(o => o.id !== e.id && Math.abs(o.y - e.y) > 1));
    const ys = []; others.forEach(o => { if (ys.indexOf(o.y) < 0 && o.y !== e.y) ys.push(o.y); });
    if (ys.length < 3) return;
    const f = y => (e.ap ? 'vers ' : '') + y;
    out.push(mkQ('En quelle année : ' + e.t + ' ?', f(e.y), ys.slice(0, 3).map(f), e.d));
  });
  // qui est-ce : distracteurs du même acte, du même sexe
  pick(people.filter(p => p.lv >= 2 && sexOf(p.id)), 6).forEach(p => {
    let others = people.filter(o => o.id !== p.id && sexOf(o.id) === sexOf(p.id));
    const same = others.filter(o => o.g === p.g);
    if (same.length >= 3) others = same;
    if (others.length < 3) return;
    out.push(mkQ('Qui est-ce ? ' + p.q + '.', p.n, shuffle(others).slice(0, 3).map(o => o.n), p.one));
  });
  // mariages de l'acte : distracteurs du bon sexe, de la même époque
  MARR.filter(m => marrAct(m) === actId).forEach(m => {
    [[m[0], m[1]], [m[1], m[0]]].forEach(pr => {
      const who = pr[0], ans = pr[1], sx = sexOf(ans);
      if (!sx || !P[who]) return;
      const partners = {};
      MARR.forEach(o => { if (o[0] === who) partners[nameOf(o[1])] = 1; if (o[1] === who) partners[nameOf(o[0])] = 1; });
      ((P[who].fam && P[who].fam.sp) || []).forEach(x => { partners[nameOf(x)] = 1; });
      const cand = [];
      PEOPLE.forEach(o => { if (sexOf(o.id) === sx && !partners[o.n] && o.id !== who && o.g !== 'eglise' && o.id !== 'abulabbas') cand.push({ n: o.n, a: o.act, g: o.g }); });
      Object.keys(SEXNAME).forEach(nm => { if (SEXNAME[nm] === sx && !partners[nm]) { const mm = MARR.find(o => o[0] === nm || o[1] === nm); cand.push({ n: nm, a: mm ? marrAct(mm) : 3 }); } });
      const gg = P[ans] ? P[ans].g : P[who].g;
      const sameG = inWindow(cand.filter(c => c.g === gg), c => c.a, actId, 3).filter(c => Math.abs(c.a - actId) <= 1);
      const pool = sameG.length >= 3 ? sameG : inWindow(cand, c => c.a, actId, 3);
      const names = []; shuffle(pool).forEach(c => { if (names.indexOf(c.n) < 0 && c.n !== nameOf(ans)) names.push(c.n); });
      if (names.length < 3) return;
      out.push(mkQ('Qui a épousé ' + nameOf(who) + ' ?', nameOf(ans), names.slice(0, 3), m[2]));
    });
  });
  // papes : seulement si l'acte en compte assez
  const popesHere = POPES.filter(pp => pp.act === actId);
  if (popesHere.length >= 2) {
    events.filter(e => !e.nop && popeAt(e.y)).slice(0, 2).forEach(e => {
      const pp = popeAt(e.y);
      const others = inWindow(POPES.filter(o => o.id !== pp.id), o => o.act, actId, 3);
      if (others.length < 3) return;
      out.push(mkQ('Qui est pape quand a lieu : ' + e.t + ' ?', pp.n, shuffle(others).slice(0, 3).map(o => o.n), pp.n + ' est pape de ' + pp.reign[0] + ' à ' + pp.reign[1] + '.'));
    });
  }
  return out;
}

/* ---------- flashcards détaillées (facultatives) ---------- */
function flashDeck(actId) {
  const out = [];
  const cut = s => s;
  PEOPLE.filter(p => p.act === actId).sort((a, b) => b.lv - a.lv || a.life[0] - b.life[0]).forEach(p => {
    out.push({ id: 'p:' + p.id, f: 'Qui est <b>' + esc(p.n) + '</b> ?', b: '<b>' + esc(p.role) + '</b><br>' + esc(p.one), m: p });
    out.push({ id: 'pd:' + p.id, f: '<b>' + esc(p.n) + '</b> : quelles dates ?', b: '<span class="rc-year sm">' + esc(p.d) + '</span>' + (p.reign && p.rl ? '<br>' + esc(p.rl) + ' de ' + p.reign[0] + ' à ' + p.reign[1] : ''), m: p });
    p.facts.forEach((f, i) => out.push({ id: 'f:' + p.id + ':' + i, f: '<b>' + esc(p.n) + '</b><br>« ' + esc(f.t) + ' » : de quoi s\'agit-il ?', b: esc(cut(f.d)) + (f.leg ? '<p class="rc-tag">Légende ou tradition</p>' : ''), m: p }));
  });
  EVENTS.filter(e => e.act === actId).forEach(e => {
    out.push({ id: 'e:' + e.id, f: '<b>' + esc(e.t) + '</b> : en quelle année ?', b: '<span class="rc-year sm">' + yrs(e) + '</span><br>' + esc(e.d) });
    out.push({ id: 'er:' + e.id, f: 'Que se passe-t-il en <b>' + yrs(e) + '</b> ?' + (EVENTS.filter(o => o.y === e.y && o.act === actId).length > 1 ? '<br><small>(' + (e.w ? 'dans le monde' : 'en France') + ')</small>' : ''), b: '<b>' + esc(e.t) + '</b><br>' + esc(e.d) });
  });
  MARR.forEach((m, i) => {
    if (marrAct(m) !== actId) return;
    out.push({ id: 'm:' + i, f: 'Qui a épousé <b>' + esc(nameOf(m[0])) + '</b> ?', b: '<b>' + esc(nameOf(m[1])) + '</b><br>' + esc(m[2]) });
  });
  (QUIZ[actId] || []).forEach((q, i) => out.push({ id: 'q:' + i, f: esc(q.q), b: '<b>' + esc(q.o[q.c]) + '</b>' + (q.x ? '<br>' + esc(q.x) : '') }));
  const tk = TALK[actId];
  if (tk) tk.beats.forEach((bt, i) => out.push({ id: 't:' + i, f: 'Dialogue avec ' + esc(nameOf(tk.who)) + ' :<br>« ' + esc(bt.say) + ' »<br><small>Que s\'est-il réellement passé ?</small>', b: esc(bt.learn) }));
  return out;
}

function genQuiz(actId) {
  const hand = QUIZ[actId].map(q => {
    const right = q.o[q.c];
    const opts = shuffle(q.o);
    return { q: q.q, opts: opts, c: opts.indexOf(right), x: q.x };
  });
  const proc = shuffle(procQuestions(actId));
  const chosenHand = pick(hand, Math.min(6, hand.length));
  const chosenProc = [];
  const seen = {};
  proc.forEach(p => { if (chosenProc.length < 10 - chosenHand.length && !seen[p.q]) { seen[p.q] = 1; chosenProc.push(p); } });
  let qs = chosenHand.concat(chosenProc);
  if (qs.length < 10) qs = qs.concat(hand.filter(h => qs.indexOf(h) < 0)).slice(0, 10);
  return shuffle(qs).slice(0, 10);
}

/* ---------- frise : ordre correct ---------- */
function friseOrder(actId) {
  return FRISE[actId].map((id, i) => ({ id: id, i: i })).sort((a, b) => EV[a.id].y - EV[b.id].y || a.i - b.i).map(o => o.id);
}
const QUIPS = [
  "Le temps, c'est de l'argent. Les Mérovingiens, eux, préféraient les poignards.",
  "Je ne suis pas en retard : c'est le temps qui est en avance.",
  "Je suis un instrument de précision, sauf pour les dates avant 500.",
  "Chaque voyage dans le temps comporte un risque : tomber sur Frédégonde.",
  "Ne touche à rien, ne mange rien, et ne dis jamais « Clovis » trop fort.",
  "Je recommande de réviser le vase de Soissons. Clovis, lui, n'oublie rien.",
  "Huit siècles de Capétiens, et toujours pas de place pour se garer à Versailles.",
  "Si tu croises un Templier un vendredi 13, change de trottoir.",
  "J'ai essayé de prévenir Henri IV pour la rue de la Ferronnerie. Il m'a offert une poule au pot."
];

/* APPLICATION, partie 2 : vues, événements, démarrage (dans la même fonction que la partie 1) */

/* ---------- état d'interface ---------- */
const ui = {
  tab: 'quest', act: null, step: null,
  cf: { act: 0, g: '', lv: 0, q: '' },
  tm: { sub: 'gantt', act: 0, y: 486 },
  ln: { sub: 'tree', root: 'clovis' },
  story: null, talk: null, quiz: null, fr: null, rev: { phase: 'home', act: 0 },
  quip: QUIPS[Math.floor(Math.random() * QUIPS.length)]
};
const TABS = ['quest', 'cards', 'time', 'lin', 'rev', 'arena'];

function actItems(all) { return [[0, all]].concat(ACTS.filter(a => a.id <= unlockedMax()).map(a => [a.id, a.num])); }
const CHAPTERS = [
  { n: 'I', t: 'Les Francs', s: 'De Clovis à Charlemagne', a: 1, b: 5 },
  { n: 'II', t: 'Le temps des Capétiens', s: 'De Louis le Pieux à Charles IV', a: 6, b: 9 },
  { n: 'III', t: 'Guerres et Renaissance', s: 'Des Valois à Henri IV', a: 10, b: 12 },
  { n: 'IV', t: 'La monarchie absolue', s: 'De Louis XIII à 1789', a: 13, b: 15 }
];
function chip(x) {
  if (P[x]) return '<button class="chip g-' + P[x].g + '" data-do="person" data-id="' + x + '">' + esc(P[x].n) + '</button>';
  return '<span class="chip plain">' + esc(x) + '</span>';
}
function chips(list) { return list && list.length ? list.map(chip).join('') : ''; }
function sym(id, cls) { return '<svg class="ic ' + (cls || '') + '" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
function seg(items, cur, doName, attr) {
  return '<div class="seg" role="tablist">' + items.map(it =>
    '<button class="' + (String(it[0]) === String(cur) ? 'on' : '') + '" data-do="' + doName + '" data-' + attr + '="' + it[0] + '">' + esc(it[1]) + '</button>').join('') + '</div>';
}

/* ---------- en-tête ---------- */
function renderHead() {
  const el = $('#head'); if (!el) return;
  const r = rank(S.xp), st = streakNow();
  const dxp = S.day.d === today() ? S.day.xp : 0;
  const dp = clamp(Math.round(100 * dxp / DAILY_GOAL), 0, 100);
  el.innerHTML =
    '<button class="hd" data-do="profile" aria-label="Mon profil">' +
    '<span class="hd-title">Le Chronoscope</span>' +
    '<span class="hd-row">' + (S.prof.name ? avatar(S.prof.av, 22) + '<span class="hd-name">' + esc(S.prof.name) + '</span>' : '') + '<span class="hd-rank">' + esc(r.n) + '</span>' +
    '<span class="hd-xp">' + S.xp + ' XP</span>' +
    '<span class="hd-st' + (st ? ' on' : '') + '">' + sym('s-flame') + st + '</span></span>' +
    '<span class="bar"><i style="width:' + r.pct + '%"></i></span>' +
    '<span class="hd-day">Objectif du jour ' + Math.min(dxp, DAILY_GOAL) + '/' + DAILY_GOAL + (dp >= 100 ? ' · atteint' : '') + '<span class="bar thin"><i style="width:' + dp + '%"></i></span></span>' +
    '</button>';
}

/* ---------- Quête : liste des actes ---------- */
function viewQuest() {
  if (ui.act == null) return viewActs();
  if (ui.step == null) return viewHub();
  if (ui.step === 'story') return viewStory();
  if (ui.step === 'talk') return viewTalk();
  if (ui.step === 'quiz') return viewQuiz();
  if (ui.step === 'frise') return viewFrise();
  if (ui.step === 'flash') return viewFlash();
  if (ui.step === 'voyage') return ui.vy && ui.vy.mode === 'scene' ? viewVoyage() : viewVoyageHome((ui.vy && ui.vy.id) || 'beaugency');
  if (ui.step === 'journal') return viewJournal();
  return viewHub();
}
function viewActs() {
  const mx = unlockedMax();
  let h = '<section class="intro"><p class="eyebrow">481 à 1789 · quinze actes</p><h1>De Clovis à Louis XVI</h1>' +
    '<p class="quip">« ' + esc(ui.quip) + ' »<br><span>Le Chronoscope</span></p></section><div class="acts">';
  ACTS.forEach(a => {
    const ch = CHAPTERS.find(c => c.a === a.id);
    if (ch) h += '<div class="chap"><span>Chapitre ' + ch.n + '</span><b>' + esc(ch.t) + '</b><small>' + esc(ch.s) + '</small></div>';
    const lk = a.id > mx, st = actSteps(a.id), n = st.filter(Boolean).length, done = isDone(a.id);
    h += '<button class="actcard' + (lk ? ' locked' : '') + (done ? ' done' : '') + '" data-do="act" data-a="' + a.id + '">' +
      '<span class="ac-ban">' + banner(a.id) + '</span>' +
      '<span class="ac-body">' + emblem(a.sym, 46, lk ? 'lock' : (done ? 'done' : '')) +
      '<span class="ac-tx"><span class="ac-num">Acte ' + a.num + ' · ' + a.a + ' à ' + a.b + '</span><span class="ac-t">' + esc(a.title) + '</span>' +
      (lk ? '<span class="ac-s">Termine l\'acte précédent : récit, quiz 7 sur 10, frise.</span>' : '<span class="ac-s">' + esc(a.lead) + '</span>') +
      (lk ? '' : '<span class="dots">' + st.map(x => '<i class="' + (x ? 'on' : '') + '"></i>').join('') + '<em>' + n + '/5</em></span>') +
      '</span></span></button>';
  });
  h += '</div><label class="switch"><input type="checkbox" data-do="explore"' + (S.explore ? ' checked' : '') + '><span>Mode exploration : tout débloquer</span></label>';
  return h;
}
function viewHub() {
  const a = ACTS[ui.act - 1], s = A(a.id), st = actSteps(a.id), ppl = actPeople(a.id);
  const tk = TALK[a.id], who = P[tk.who];
  const rows = [
    ['story', 'Le récit', STORY[a.id].length + ' scènes à traverser', st[0], 'Lire'],
    ['talk', 'Parler à ' + (who ? who.n : 'un personnage'), tk.place + ' · dialogue à choix', st[1], 'Parler'],
    ['cards', 'Les fiches', seenIn(a.id) + ' sur ' + ppl.length + ' lues (60 % requis)', st[2], 'Ouvrir'],
    ['quiz', 'Le quiz', s.quiz >= 0 ? 'Meilleur score : ' + s.quiz + '/10 (7 requis)' : '10 questions, 7 bonnes réponses requises', st[3], 'Jouer'],
    ['frise', 'La frise', s.frise >= 0 ? 'Meilleur score : ' + s.frise + '/8' : 'Remets 8 événements dans l\'ordre', st[4], 'Jouer']
  ];
  let h = '<button class="back" data-do="back">‹ Les actes</button><section class="hub"><div class="hub-ban">' + banner(a.id) + '</div>' +
    '<p class="eyebrow">Acte ' + a.num + ' · ' + a.a + ' à ' + a.b + '</p><h1>' + esc(a.title) + '</h1><p class="lead">' + esc(a.lead) + '</p>' +
    '<div class="wl">' + a.world.map(w => '<span><b>' + esc(w[0]) + '</b> ' + esc(w[1]) + '</span>').join('') + '</div></section><ol class="steps">';
  rows.forEach((r, i) => {
    h += '<li class="' + (r[3] ? 'ok' : '') + '"><span class="st-n">' + (r[3] ? sym('s-check') : (i + 1)) + '</span><span class="st-tx"><b>' + r[1] + '</b><small>' + r[2] + '</small></span>' +
      '<button class="btn sm" data-do="step" data-s="' + r[0] + '">' + (r[3] ? 'Rejouer' : r[4]) + '</button></li>';
  });
  h += '</ol>';
  const fd = flashDeck(a.id), fk = fd.filter(c => (S.fc[a.id] || {})[c.id]).length;
  h += '<div class="flashrow"><span class="st-n">' + sym('t-cards') + '</span><span class="st-tx"><b>Flashcards détaillées</b><small>Facultatif · ' + fk + ' sur ' + fd.length + ' cartes maîtrisées</small></span>' +
    '<button class="btn sm ghost" data-do="step" data-s="flash">' + (fk && fk < fd.length ? 'Reprendre' : fk === fd.length ? 'Revoir' : 'Ouvrir') + '</button></div>';
  sceneOfAct(a.id).forEach(id => { const sc = SCENES[id]; h += '<div class="flashrow vyrow"><span class="st-n">' + sym('s-sun') + '</span><span class="st-tx"><b>Voyage : ' + esc(P[sc.who].n) + ', ' + sc.year + '</b><small>Nouveau · conversation profonde, ' + vyState().ecus + ' écus en poche</small></span><button class="btn sm" data-do="vy-home" data-id="' + id + '">Partir</button></div>'; });
  if (vyState().journal.some(e => e.parts.length)) h += '<div class="flashrow"><span class="st-n">' + sym('s-quill') + '</span><span class="st-tx"><b>Journal de bord</b><small>Tes visites, page après page</small></span><button class="btn sm ghost" data-do="vy-journal">Lire</button></div>';
  if (isDone(a.id)) h += '<p class="note ok">Acte terminé.' + (a.id < ACTS.length ? ' L\'acte ' + ROMAN[a.id + 1] + ' est ouvert.' : ' De Clovis à 1789 : voyage terminé. La Révolution attend son propre Chronoscope.') + '</p>';
  return h;
}

/* ---------- récit ---------- */
function viewStory() {
  const a = ui.act, sc = STORY[a], i = ui.story.i, c = sc[i], last = i === sc.length - 1;
  const meds = (c.ppl || []).filter(x => P[x]).slice(0, 4).map(x => '<button class="mini" data-do="person" data-id="' + x + '">' + medal(P[x], 44) + '<span>' + esc(P[x].n) + '</span></button>').join('');
  return '<button class="back" data-do="hub">‹ Acte ' + ROMAN[a] + '</button><article class="scene"><p class="eyebrow">Scène ' + (i + 1) + ' sur ' + sc.length + '</p>' +
    '<div class="sc-year">' + esc(c.y) + '</div><h2>' + esc(c.t) + '</h2><p class="prose">' + esc(c.p) + '</p>' +
    (meds ? '<div class="minis">' + meds + '</div>' : '') +
    '<div class="dots big">' + sc.map((_, k) => '<i class="' + (k <= i ? 'on' : '') + '"></i>').join('') + '</div>' +
    '<div class="nav"><button class="btn ghost" data-do="s-prev"' + (i ? '' : ' disabled') + '>Précédent</button>' +
    '<button class="btn" data-do="s-next">' + (last ? 'Terminer le récit' : 'Suite') + '</button></div></article>';
}

/* ---------- dialogue ---------- */
function viewTalk() {
  const a = ui.act, tk = TALK[a], T = ui.talk, who = P[tk.who];
  const head = '<button class="back" data-do="hub">‹ Acte ' + ROMAN[a] + '</button><section class="talk"><div class="tk-head">' + (who ? medal(who, 60) : '') +
    '<div><b>' + esc(who ? who.n : '') + '</b><small>' + esc(tk.place) + '</small></div></div>';
  if (T.i < 0) return head + '<p class="narr">' + esc(tk.intro) + '</p><div class="nav"><button class="btn" data-do="t-next">Approcher</button></div></section>';
  if (T.i >= tk.beats.length) {
    return head + '<p class="narr">' + esc(tk.outro) + '</p><p class="note ok">Dialogue terminé' + (T.xp ? ' : ' + T.xp + ' XP gagnés sur cette conversation' : '') + '.</p>' +
      '<div class="nav"><button class="btn" data-do="t-end">Retour au Chronoscope</button></div></section>';
  }
  const b = tk.beats[T.i];
  let h = head + '<div class="bubble them">' + esc(b.say) + '</div>';
  if (T.pick == null) {
    h += '<div class="opts">' + b.opts.map((o, k) => '<button class="opt" data-do="t-pick" data-k="' + k + '">' + esc(o.t) + '</button>').join('') + '</div>';
  } else {
    const o = b.opts[T.pick];
    h += '<div class="bubble me">' + esc(o.t) + '</div><div class="bubble them">' + esc(o.r) + '</div>' +
      '<div class="learn"><b>À retenir</b><p>' + esc(b.learn) + '</p></div><div class="nav"><button class="btn" data-do="t-next">Continuer</button></div>';
  }
  return h + '</section>';
}

/* ---------- quiz ---------- */
function viewQuiz() {
  const Q = ui.quiz;
  if (Q.done) {
    const ok = Q.score >= 7;
    return '<button class="back" data-do="hub">‹ Acte ' + ROMAN[ui.act] + '</button><section class="result"><p class="eyebrow">Quiz terminé</p><div class="big">' + Q.score + '<small>/10</small></div>' +
      '<p>' + (Q.score === 10 ? 'Sans faute. Le Chronoscope est jaloux.' : ok ? 'Réussi. Le passage est ouvert.' : 'Pas encore 7 sur 10. Les dates ne se vengent pas, elles attendent.') + '</p>' +
      (Q.gain ? '<p class="note ok">+' + Q.gain + ' XP pour ce meilleur score</p>' : '<p class="note">Pas de nouveau record, donc pas de nouveaux points.</p>') +
      '<div class="nav"><button class="btn ghost" data-do="step" data-s="quiz">Rejouer</button><button class="btn" data-do="hub">Continuer</button></div></section>';
  }
  const q = Q.qs[Q.i];
  let h = '<button class="back" data-do="hub">‹ Acte ' + ROMAN[ui.act] + '</button><section class="quiz"><p class="eyebrow">Question ' + (Q.i + 1) + ' sur ' + Q.qs.length + '</p><div class="bar thin"><i style="width:' + (100 * Q.i / Q.qs.length) + '%"></i></div>' +
    '<h2 class="q">' + esc(q.q) + '</h2><div class="opts">';
  q.opts.forEach((o, k) => {
    let cl = 'opt';
    if (Q.picked != null) { if (k === q.c) cl += ' right'; else if (k === Q.picked) cl += ' wrong'; }
    h += '<button class="' + cl + '" data-do="q-pick" data-k="' + k + '"' + (Q.picked != null ? ' disabled' : '') + '>' + esc(o) + '</button>';
  });
  h += '</div>';
  if (Q.picked != null) {
    h += '<div class="learn ' + (Q.picked === q.c ? 'good' : 'bad') + '"><b>' + (Q.picked === q.c ? 'Exact.' : 'Raté.') + '</b>' + (q.x ? '<p>' + esc(q.x) + '</p>' : '') + '</div>' +
      '<div class="nav"><button class="btn" data-do="q-next">' + (Q.i === Q.qs.length - 1 ? 'Voir le résultat' : 'Question suivante') + '</button></div>';
  }
  return h + '</section>';
}

/* ---------- frise ---------- */
function viewFrise() {
  const F = ui.fr, ok = friseOrder(F.a);
  let h = '<button class="back" data-do="hub">‹ Acte ' + ROMAN[F.a] + '</button><section class="frise"><p class="eyebrow">Frise de l\'acte ' + ROMAN[F.a] + '</p>' +
    '<h2>Du plus ancien au plus récent</h2><p class="lead">Fais glisser par la poignée, ou utilise les flèches.</p><ol class="fr-list" id="frl">';
  F.order.forEach((id, i) => {
    const e = EV[id], good = F.checked ? (ok[i] === id) : null;
    h += '<li class="fr-it' + (good === true ? ' good' : good === false ? ' bad' : '') + '" data-id="' + id + '">' +
      '<span class="fr-grip" data-grip aria-label="Déplacer">' + '<i></i><i></i><i></i></span>' +
      '<span class="fr-tx"><b>' + esc(e.t) + '</b>' + (F.checked ? '<small>' + yrs(e) + '</small>' : '') + '</span>' +
      (F.checked ? '' : '<span class="fr-arr"><button data-do="fr-up" data-id="' + id + '" aria-label="Monter">▲</button><button data-do="fr-dn" data-id="' + id + '" aria-label="Descendre">▼</button></span>') + '</li>';
  });
  h += '</ol>';
  if (F.checked) {
    h += '<div class="result"><div class="big">' + F.score + '<small>/' + F.order.length + '</small></div>' + (F.gain ? '<p class="note ok">+' + F.gain + ' XP</p>' : '<p class="note">Pas de nouveau record.</p>') + '</div>' +
      '<ul class="fr-fix">' + ok.map(id => '<li><b>' + yrs(EV[id]) + '</b> ' + esc(EV[id].t) + '<small>' + esc(EV[id].d) + '</small></li>').join('') + '</ul>' +
      '<div class="nav"><button class="btn ghost" data-do="step" data-s="frise">Rejouer</button><button class="btn" data-do="hub">Continuer</button></div>';
  } else h += '<div class="nav"><button class="btn" data-do="fr-check">Vérifier</button></div>';
  return h + '</section>';
}

/* ---------- flashcards détaillées ---------- */
function viewFlash() {
  const F = ui.fl, a = F.a, deck = flashDeck(a), known = S.fc[a] || {};
  const nk = deck.filter(c => known[c.id]).length;
  let h = '<button class="back" data-do="hub">‹ Acte ' + ROMAN[a] + '</button><section class="flash"><p class="eyebrow">Flashcards · acte ' + ROMAN[a] + '</p>' +
    '<div class="fl-top"><span><b>' + nk + '</b>/' + deck.length + ' maîtrisées</span><span>' + F.queue.length + ' restantes</span></div><div class="bar thin"><i style="width:' + Math.round(100 * nk / deck.length) + '%"></i></div>';
  if (!F.queue.length) {
    return h + '<div class="result"><div class="big">' + nk + '<small>/' + deck.length + '</small></div><p>' + (nk === deck.length ? 'Paquet entièrement maîtrisé. Le Chronoscope s\'incline.' : 'Plus de cartes pour cette séance.') + '</p>' +
      (F.gain ? '<p class="note ok">+' + F.gain + ' XP</p>' : '') + '<div class="nav"><button class="btn ghost" data-do="fl-reset">Recommencer tout le paquet</button><button class="btn" data-do="hub">Retour</button></div></div></section>';
  }
  const c = deck.find(x => x.id === F.queue[0]);
  h += '<button class="rcard fcard' + (F.flip ? ' flip' : '') + '" data-do="fl-flip"><span class="rc-side"><span class="rc-q">' + c.f + '</span>' + (F.flip ? '' : '<small class="tap">Touche la carte pour la retourner</small>') + '</span>' +
    (F.flip ? '<span class="rc-side back"><span class="rc-a">' + c.b + '</span></span>' : '') + '</button>';
  if (F.flip) h += '<div class="rates two"><button class="btn bad" data-do="fl-rate" data-r="0">Je ne savais pas</button><button class="btn good" data-do="fl-rate" data-r="1">Je savais</button></div>';
  return h + '<p class="hint">Les cartes sues ne reviennent plus. Les autres reviennent quelques cartes plus loin.</p></section>';
}

/* ---------- Fiches ---------- */
function viewCards() {
  const f = ui.cf;
  let h = '<h1 class="h1">Les fiches</h1><div class="filters">' +
    '<input type="search" id="fq" placeholder="Chercher un nom" value="' + esc(f.q) + '" autocomplete="off">' +
    seg(actItems('Tous'), f.act, 'f-act', 'v') +
    seg([['', 'Tous']].concat(Object.keys(GROUPS).map(g => [g, GROUPS[g].n])), f.g, 'f-g', 'v') +
    seg([[0, 'Tous niveaux'], [5, 'Légendaire'], [4, 'Majeur'], [3, 'Important'], [2, 'Notable'], [1, 'Figurant']], f.lv, 'f-lv', 'v') +
    '</div><div id="flist" class="flist">' + fillList() + '</div>';
  return h;
}
function fillList() {
  const f = ui.cf, q = f.q.trim().toLowerCase();
  const list = PEOPLE.filter(p => (!f.act || p.act === f.act) && (!f.g || p.g === f.g) && (!f.lv || p.lv === f.lv) && (!q || p.n.toLowerCase().indexOf(q) >= 0))
    .sort((a, b) => a.act - b.act || b.lv - a.lv || a.life[0] - b.life[0]);
  if (!list.length) return '<p class="empty">Aucune fiche ne correspond.</p>';
  return list.map(p => {
    const lk = locked(p);
    return '<button class="pc' + (lk ? ' locked' : '') + (S.seen[p.id] ? ' seen' : '') + '" data-do="person" data-id="' + p.id + '">' +
      (lk ? emblem(p.sym, 56, 'lock') : S.img[p.id] ? '<img class="pc-img" data-ph="1" src="' + blobSrc(S.img[p.id]) + '" alt="">' : medal(p, 56)) +
      '<span class="pc-tx"><b>' + esc(p.n) + '</b><small>' + (lk ? 'Acte ' + ROMAN[p.act] + ' · verrouillée' : esc(p.d) + ' · ' + esc(p.role)) + '</small>' +
      '<em class="lvl lv' + p.lv + '">' + LEVELS[p.lv].n + '</em></span>' + (S.seen[p.id] ? sym('s-check', 'seen-ic') : '') + '</button>';
  }).join('');
}

function personSheet(id) {
  const p = P[id]; if (!p) return '';
  const mid = p.reign ? Math.round((p.reign[0] + p.reign[1]) / 2) : Math.round((p.life[0] + p.life[1]) / 2);
  const pp = !p.pope ? popeAt(mid) : null;
  const mx = unlockedMax();
  const same = MAXLIFE.filter(o => o.id !== p.id && o.life && overlap(p, o) >= 10 && (!o.act || o.act <= mx)).sort((a, b) => (b.lv || 0) - (a.lv || 0) || a.life[0] - b.life[0]).slice(0, 14);
  const f = p.fam || {};
  let h = (S.img[id] ? '<figure class="ps-img"><img data-ph="1" src="' + blobSrc(S.img[id]) + '" alt="' + esc(p.n) + '"></figure>' : '') + '<div class="ps-head">' + medal(p, 92) + '<div><h2>' + esc(p.n) + '</h2><p class="ps-d">' + esc(p.d) + '</p><p class="ps-r">' + esc(p.role) + '</p>' +
    '<p class="tags"><span class="tag lv' + p.lv + '">' + LEVELS[p.lv].n + '</span><span class="tag">' + esc(GROUPS[p.g].n) + '</span><span class="tag">Acte ' + ROMAN[p.act] + '</span></p></div></div>' +
    '<p class="ps-one">' + esc(p.one) + '</p><h3>À retenir (' + p.facts.length + ')</h3><ol class="facts">';
  p.facts.forEach(x => { h += '<li><b>' + esc(x.t) + '</b>' + (x.leg ? ' <span class="tag leg">légende ou tradition</span>' : '') + '<p>' + esc(x.d) + '</p></li>'; });
  h += '</ol>';
  if ((f.par && f.par.length) || (f.sp && f.sp.length) || (f.ch && f.ch.length)) {
    h += '<h3>Famille</h3><dl class="fam">' + (f.par && f.par.length ? '<dt>Parents</dt><dd>' + chips(f.par) + '</dd>' : '') +
      (f.sp && f.sp.length ? '<dt>Conjoint(e)s</dt><dd>' + chips(f.sp) + '</dd>' : '') + (f.ch && f.ch.length ? '<dt>Enfants</dt><dd>' + chips(f.ch) + '</dd>' : '') + '</dl>';
  }
  if (typeof portraitHTML === 'function') h += portraitHTML(id);
  if (typeof reportBtn === 'function') h += reportBtn(id);
  h += iconoHTML(id);
  if (pp) h += '<h3>À Rome</h3><p>' + chip(pp.id) + ' est pape de ' + pp.reign[0] + ' à ' + pp.reign[1] + '.</p>';
  if (same.length) h += '<h3>Vivait en même temps</h3><div class="chips">' + same.map(o => chip(o.id)).join('') + '</div>';
  h += '<div class="nav"><button class="btn ghost" data-do="goto-y" data-y="' + (p.reign ? p.reign[0] : p.life[0] + 20) + '">Voir dans le Chronoscope</button></div>';
  return h;
}

let assetsNS = null;
const ASSETURL = {};
function commonsLink(w, id) { const who = P[id] ? P[id].n.replace(/\s*\(.*\)/, '') : ''; return 'https://commons.wikimedia.org/w/index.php?title=Special:MediaSearch&type=image&search=' + encodeURIComponent(who + ' ' + w.a.split(',')[0].replace(/^(D\'après|Atelier de|Copie d\'après|Dessin de l\'atelier de) /i, '')); }
function iconoHTML(id) {
  const list = (typeof ICONO !== 'undefined' && ICONO[id]) || [];
  let h = '';
  if (list.length || assetsNS) h += '<h3>Iconographie</h3>';
  if (list.length) {
    h += '<ul class="icono">' + list.map(w => '<li><b>' + esc(w.t) + '</b><span>' + esc(w.a) + ' · ' + esc(w.d) + (w.l ? ' · ' + esc(w.l) : '') + '</span>' +
      (w.n ? '<small>' + esc(w.n) + '</small>' : '') + '<a href="' + commonsLink(w, id) + '" target="_blank" rel="noopener">Voir l\'œuvre ↗</a></li>').join('') + '</ul>';
  } else if (assetsNS) h += '<p class="hint">Aucun portrait d\'époque connu pour ce personnage.</p>';
  if (assetsNS) {
    h += '<div class="upl"><label class="btn ghost sm">' + (S.img[id] ? 'Changer l\'image' : 'Ajouter une image') + '<input type="file" accept="image/*" data-up="' + id + '" hidden></label>' +
      (S.img[id] ? '<button class="btn ghost sm" data-do="img-del" data-id="' + id + '">Retirer</button>' : '') + '<span class="upl-st" id="uplst"></span></div>';
  }
  return h;
}

/* ---------- Temps ---------- */
function itemAct(o) { return o.act || (actOfYear(o.life[0]) || ACTS[4]).id; }
function viewTime() {
  const T = ui.tm;
  let h = '<h1 class="h1">Le temps</h1>' + seg([['gantt', 'Chronoscope'], ['popes', 'Papes'], ['world', 'Monde']], T.sub, 'tm-sub', 'v');
  if (T.sub === 'gantt') h += viewGantt();
  else if (T.sub === 'popes') h += viewPopes();
  else h += viewWorld();
  return h;
}
function ganttBounds() {
  const T = ui.tm;
  if (T.act) { const a = ACTS[T.act - 1]; return { lo: a.a - 25, hi: a.b + 25, ppy: 9 }; }
  return { lo: 450, hi: 1795, ppy: 2.2 };
}
function viewGantt() {
  const T = ui.tm, B = ganttBounds(), mx = unlockedMax();
  T.y = clamp(T.y, B.lo, B.hi);
  const items = MAXLIFE.filter(o => o.life && o.life[1] >= B.lo && o.life[0] <= B.hi && itemAct(o) <= mx).sort((a, b) => a.life[0] - b.life[0] || (b.lv || 0) - (a.lv || 0));
  const rows = [], lay = [];
  items.forEach(o => {
    const l = Math.max(o.life[0], B.lo), r = Math.min(o.life[1], B.hi), x = (l - B.lo) * B.ppy, w = Math.max((r - l) * B.ppy, 5), tw = o.n.length * 6.4 + 12;
    let k = 0; while (k < rows.length && rows[k] > x - 3) k++;
    rows[k] = x + Math.max(w, tw);
    lay.push({ o: o, x: x, w: w, k: k });
  });
  const W = (B.hi - B.lo) * B.ppy + 30, Hh = rows.length * 27 + 34, step = T.act ? 25 : 50;
  let ticks = '';
  for (let y = Math.ceil(B.lo / step) * step; y <= B.hi; y += step) ticks += '<span class="tick" style="left:' + ((y - B.lo) * B.ppy) + 'px"><b>' + y + '</b></span>';
  let bars = '';
  lay.forEach(L => {
    const o = L.o, inner = o.reign ? '<i class="rg" style="left:' + (Math.max(o.reign[0] - Math.max(o.life[0], B.lo), 0) * B.ppy) + 'px;width:' + (Math.max(Math.min(o.reign[1], B.hi) - Math.max(o.reign[0], B.lo), 1) * B.ppy) + 'px"></i>' : '';
    const tag = P[o.id] ? 'button' : 'div';
    bars += '<' + tag + ' class="gbar g-' + o.g + ' lv' + (o.lv || 2) + '" style="left:' + L.x + 'px;top:' + (30 + L.k * 27) + 'px;width:' + L.w + 'px"' +
      (P[o.id] ? ' data-do="person" data-id="' + o.id + '"' : '') + '>' + inner + '<span>' + esc(o.n) + '</span></' + tag + '>';
  });
  const keys = KEYYEARS.filter(y => y >= B.lo && y <= B.hi);
  return '<div class="filters">' + seg(actItems('Tout'), T.act, 'tm-act', 'v') + '</div>' +
    '<p class="hint">Fais glisser le curseur : le Chronoscope te dit qui était au pouvoir, et qui vivait autour. Barre pleine : règne ou pouvoir. Barre claire : vie.</p>' +
    '<div class="gscroll" id="gscroll"><div class="gcanvas" id="gcan" style="width:' + W + 'px;height:' + Hh + 'px">' + ticks + bars + '<div class="cursor" id="gcur" style="left:' + ((T.y - B.lo) * B.ppy) + 'px"></div></div></div>' +
    '<div class="slider"><div class="sl-top"><b id="gy">' + T.y + '</b><span id="gact"></span></div><input type="range" id="gsl" min="' + B.lo + '" max="' + B.hi + '" value="' + T.y + '" step="1"></div>' +
    '<div class="chips keys">' + keys.map(y => '<button class="chip" data-do="gy" data-y="' + y + '">' + y + '</button>').join('') + '</div>' +
    '<div id="gwho">' + whoHTML(T.y) + '</div>';
}
function whoHTML(y) {
  const w = whoAt(y), mx = unlockedMax(), ac = actOfYear(y), pp = popeAt(y);
  const ok = o => !o.act || o.act <= mx;
  const evs = EVENTS.filter(e => Math.abs(e.y - y) <= 2 && e.act <= mx);
  const row = (t, list) => list.length ? '<h3>' + t + '</h3><div class="chips">' + list.map(o => P[o.id] ? chip(o.id) : '<span class="chip plain">' + esc(o.n) + '</span>').join('') + '</div>' : '';
  const power = w.power.filter(ok), around = w.around.filter(ok);
  return '<p class="whoy">En ' + y + (ac ? ', acte ' + ac.num + ' : ' + esc(ac.short) : '') + '</p>' +
    (pp ? '<h3>Pape</h3><div class="chips">' + chip(pp.id) + '</div>' : '') +
    row('Au pouvoir', power.filter(o => o.g !== 'eglise')) + row('Église', power.filter(o => o.g === 'eglise')) +
    row('Vivants autour', around) +
    (evs.length ? '<h3>Événements proches</h3><ul class="evl">' + evs.map(e => '<li><b>' + yrs(e) + '</b> ' + esc(e.t) + '</li>').join('') + '</ul>' : '');
}
function updateCursor() {
  const T = ui.tm, B = ganttBounds(), cur = $('#gcur'); if (!cur) return;
  cur.style.left = ((T.y - B.lo) * B.ppy) + 'px';
  $('#gy').textContent = T.y;
  const ac = actOfYear(T.y); $('#gact').textContent = ac ? 'Acte ' + ac.num + ' · ' + ac.short : '';
  $('#gwho').innerHTML = whoHTML(T.y);
  const sc = $('#gscroll'); if (sc) sc.scrollLeft = (T.y - B.lo) * B.ppy - sc.clientWidth / 2;
}
function viewPopes() {
  const mx = unlockedMax();
  let h = '<p class="hint">Deux histoires en parallèle : celle de Rome et celle des rois francs.</p><div class="popes">';
  POPES.filter(p => p.act <= mx).forEach(p => {
    const kings = PEOPLE.filter(k => k.reign && k.g !== 'eglise' && k.g !== 'monde' && k.act <= mx && Math.min(k.reign[1], p.reign[1]) - Math.max(k.reign[0], p.reign[0]) > 0 && k.lv >= 3).sort((a, b) => b.lv - a.lv).slice(0, 4);
    const evs = EVENTS.filter(e => e.y >= p.reign[0] && e.y <= p.reign[1] && e.act <= mx);
    h += '<div class="pope"><button class="pope-h" data-do="person" data-id="' + p.id + '">' + medal(p, 48) + '<span><b>' + esc(p.n) + '</b><small>pape de ' + p.reign[0] + ' à ' + p.reign[1] + '</small></span></button>' +
      '<p>' + esc(p.one) + '</p>' + (kings.length ? '<p class="pf"><em>Pendant ce temps en Gaule</em></p><div class="chips">' + chips(kings.map(k => k.id)) + '</div>' : '') +
      (evs.length ? '<ul class="evl">' + evs.map(e => '<li><b>' + yrs(e) + '</b> ' + esc(e.t) + '</li>').join('') + '</ul>' : '') + '</div>';
  });
  return h + '</div>';
}
function viewWorld() {
  const mx = unlockedMax();
  let h = '<p class="hint">Les voisins qui comptent. Ils reviennent tout le temps dans l\'histoire des Francs.</p><div class="world">';
  WORLD.forEach(w => {
    h += '<div class="wd"><h3>' + esc(w.n) + '</h3><p class="wd-sub">' + esc(w.sub) + '</p><p>' + esc(w.t) + '</p><div class="chips">' + chips((w.ppl || []).filter(x => !P[x] || P[x].act <= mx)) + '</div></div>';
  });
  h += '</div><h3>Repères mondiaux par acte</h3><ul class="evl">';
  ACTS.filter(a => a.id <= mx).forEach(a => { a.world.forEach(x => { h += '<li><b>' + esc(x[0]) + '</b> ' + esc(x[1]) + '</li>'; }); });
  return h + '</ul>';
}

/* ---------- Lignées ---------- */
function viewLin() {
  const L = ui.ln;
  let h = '<h1 class="h1">Les lignées</h1>' + seg([['tree', 'Arbres'], ['marr', 'Mariages'], ['house', 'Maisons']], L.sub, 'ln-sub', 'v');
  if (L.sub === 'tree') {
    const roots = ['clovis', 'clotaire1', 'pepinlanden', 'pepin2', 'charlesmartel', 'pepin3', 'charlemagne', 'louis', 'robertlefort', 'huguescapet', 'louis6', 'philippe2', 'louis9', 'philippe4', 'philippe6', 'charles5', 'louis11', 'francois1', 'henri2', 'henri4', 'louis13', 'louis14'].filter(x => P[x] && !locked(P[x]));
    const rid = roots.indexOf(L.root) >= 0 ? L.root : roots[0];
    h += '<div class="chips keys">' + roots.map(x => '<button class="chip' + (x === rid ? ' on' : '') + '" data-do="ln-root" data-id="' + x + '">' + esc(P[x].n) + '</button>').join('') + '</div>' +
      '<div class="tree-wrap"><ul class="tree">' + treeNode(rid, 0, {}) + '</ul></div><p class="hint">Touche un nom pour ouvrir sa fiche. Les noms sans fiche sont en gris.</p>';
  } else if (L.sub === 'marr') {
    const mx = unlockedMax();
    h += '<p class="hint">Mariages et alliances. Une étiquette signale les alliances avec l\'étranger.</p><div class="marr">';
    MARR.forEach(m => {
      const acts = [m[0], m[1]].filter(x => P[x]).map(x => P[x].act);
      if (acts.length && Math.max.apply(null, acts) > mx) return;
      h += '<div class="mr"><div class="mr-n">' + chip(m[0]) + '<span class="heart">&amp;</span>' + chip(m[1]) + '</div><p>' + esc(m[2]) + '</p>' + (m[3] ? '<span class="tag">alliance étrangère</span>' : '') + '</div>';
    });
    h += '</div>';
  } else {
    const mx = unlockedMax();
    const houses = [['mero', 'Les Mérovingiens', 'Famille de Clovis. Elle règne de 481 à 751, mais à partir de 640 environ le vrai pouvoir passe aux maires du palais.', 'crown'],
      ['caro', 'Pippinides et Carolingiens', 'Les maires du palais de la famille de Pépin de Landen prennent la couronne en 751, avec Pépin le Bref. Après Verdun (843), leur branche occidentale règne jusqu\'en 987, en alternance avec les Robertiens.', 'hammer'],
      ['capet', 'Capétiens directs', 'Descendants de Robert le Fort. Hugues Capet est élu en 987. De père en fils pendant plus de trois siècles, jusqu\'à Charles IV en 1328.', 'lys'],
      ['valois', 'Valois', 'Branche cadette des Capétiens, issue de Charles de Valois, frère de Philippe le Bel. De Philippe VI (1328) à Henri III (1589), avec les branches Valois-Orléans et Valois-Angoulême.', 'castle'],
      ['bourbon', 'Bourbons', 'Autre branche capétienne, issue de Robert de Clermont, fils de Saint Louis. Henri IV monte sur le trône en 1589. Ils règnent jusqu\'à la Révolution.', 'sun']];
    h += '<div class="houses">';
    houses.forEach(hs => {
      const list = MAXLIFE.filter(o => o.g === hs[0] && o.reign && (o.rl || '').match(/^(rois?|maire|empereur|régente?)($|,)/i) && (!o.act || o.act <= mx)).sort((a, b) => a.reign[0] - b.reign[0]);
      h += '<section class="house g-' + hs[0] + '"><h3>' + sym('s-' + hs[3]) + ' ' + hs[1] + '</h3><p>' + hs[2] + '</p><ul class="evl">' +
        list.map(o => '<li><b>' + o.reign[0] + ' à ' + o.reign[1] + '</b> ' + (P[o.id] ? '<button class="lnk" data-do="person" data-id="' + o.id + '">' + esc(o.n) + '</button>' : esc(o.n)) + ' <small>' + esc(o.rl || '') + '</small></li>').join('') + '</ul></section>';
    });
    h += '</div>';
  }
  return h;
}
function treeNode(id, depth, seen) {
  const p = P[id];
  if (!p) return '<li><span class="tn plain">' + esc(id) + '</span></li>';
  const f = p.fam || {}, loop = seen[id] || depth > 7;
  seen[id] = 1;
  const sp = (f.sp || []).map(s => P[s] ? '<button class="tn sp" data-do="person" data-id="' + s + '">' + esc(P[s].n) + '</button>' : '<span class="tn plain">' + esc(s) + '</span>').join('');
  let h = '<li><div class="tn-row"><button class="tn g-' + p.g + '" data-do="person" data-id="' + id + '"><b>' + esc(p.n) + '</b><small>' + esc(p.d) + '</small></button>' + (sp ? '<span class="amp">&amp;</span>' + sp : '') + '</div>';
  if (!loop && f.ch && f.ch.length) h += '<ul>' + f.ch.map(c => treeNode(c, depth + 1, seen)).join('') + '</ul>';
  return h + '</li>';
}

/* ---------- Révision ---------- */
function viewRev() {
  const R = ui.rev;
  if (R.phase === 'card') return viewRevCard();
  if (R.phase === 'end') {
    return '<h1 class="h1">Révision</h1><section class="result"><p class="eyebrow">Séance terminée</p><div class="big">' + R.known + '<small>/' + R.total + ' sues</small></div>' +
      (R.gain ? '<p class="note ok">+' + R.gain + ' XP</p>' : '') + '<div class="nav"><button class="btn" data-do="rev-home">Retour</button></div></section>';
  }
  const s = buildSession(R.act), boxes = [0, 0, 0, 0, 0, 0];
  s.all.forEach(c => { if (S.srs[c.id]) boxes[S.srs[c.id].b]++; });
  const n = Math.min(s.due.length + Math.min(s.fresh.length, 6), 12);
  return '<h1 class="h1">Révision</h1><p class="hint">Les cartes reviennent quand tu risques de les oublier : plus tu les sais, plus elles se font rares.</p>' +
    seg(actItems('Tous'), R.act, 'rev-act', 'v') +
    '<div class="stats"><div><b>' + s.due.length + '</b><small>à revoir</small></div><div><b>' + s.fresh.length + '</b><small>nouvelles</small></div><div><b>' + s.all.length + '</b><small>cartes</small></div></div>' +
    '<div class="boxes">' + boxes.map((b, i) => '<span title="Boîte ' + i + '"><i style="height:' + (4 + Math.min(b, 40)) + 'px"></i><small>' + i + '</small></span>').join('') + '</div>' +
    (n ? '<div class="nav"><button class="btn" data-do="rev-start">Réviser ' + n + ' cartes</button></div>' : '<p class="empty">Rien à réviser pour le moment.</p>');
}
function viewRevCard() {
  const R = ui.rev, c = R.queue[R.i], k = cardHTML(c);
  return '<h1 class="h1">Révision</h1><p class="eyebrow">Carte ' + (R.i + 1) + ' sur ' + R.queue.length + '</p><div class="bar thin"><i style="width:' + (100 * R.i / R.queue.length) + '%"></i></div>' +
    '<button class="rcard' + (R.flip ? ' flip' : '') + '" data-do="rev-flip"><span class="rc-side">' + k.f + (R.flip ? '' : '<small class="tap">Touche pour retourner</small>') + '</span>' +
    (R.flip ? '<span class="rc-side back">' + k.b + '</span>' : '') + '</button>' +
    (R.flip ? '<div class="rates"><button class="btn bad" data-do="rev-rate" data-r="0">Raté</button><button class="btn mid" data-do="rev-rate" data-r="1">Hésitant</button><button class="btn good" data-do="rev-rate" data-r="2">Su</button></div>' : '');
}

/* ---------- feuilles (fiche, profil) ---------- */
function openSheet(html) { $('#shbody').innerHTML = html; $('#sheet').hidden = false; $('#sheet .sh-pan').scrollTop = 0; D.body.classList.add('noscroll'); }
function closeSheet() { $('#sheet').hidden = true; D.body.classList.remove('noscroll'); if (ui.tab === 'cards' || (ui.tab === 'quest' && ui.step == null)) render(true); }
function openPerson(id) {
  const p = P[id]; if (!p) return;
  if (locked(p)) { toast('Fiche verrouillée : termine l\'acte ' + ROMAN[p.act - 1], 'rank'); return; }
  openSheet(personSheet(id));
  if (!S.seen[id]) { S.seen[id] = 1; addXp(LEVELS[p.lv].f, 'fiche'); }
}
function profileSheet() {
  const r = rank(S.xp), st = streakNow(), th = themePref();
  let h = '<h2>Mon profil</h2>' + (typeof accountHTML === 'function' ? accountHTML() : '') + profileEditor() + '<div class="pf-top"><div class="pf-rank">' + r.n + '</div><div class="pf-xp">' + S.xp + ' XP' + (r.next ? ' · prochain rang : ' + r.nn + ' à ' + r.next : ' · rang maximal') + '</div>' +
    '<div class="bar"><i style="width:' + r.pct + '%"></i></div></div>' +
    '<div class="stats"><div><b>' + st + '</b><small>jours de série</small></div><div><b>' + Object.keys(S.seen).length + '</b><small>fiches lues</small></div><div><b>' + S.stats.reviews + '</b><small>cartes revues</small></div></div>' +
    '<h3>Badges (' + Object.keys(S.badges).length + '/' + BADGES.length + ')</h3><div class="badges">';
  BADGES.forEach(b => { const on = !!S.badges[b.id]; h += '<div class="badge' + (on ? ' on' : '') + '"><span class="bd-i">' + (on ? sym('s-check') : sym('s-lock')) + '</span><b>' + esc(b.n) + '</b><small>' + esc(b.d) + '</small></div>'; });
  h += '</div><h3>Réglages</h3><div class="seg">' + [['auto', 'Auto'], ['light', 'Clair'], ['dark', 'Sombre']].map(t => '<button class="' + (th === t[0] ? 'on' : '') + '" data-do="theme" data-v="' + t[0] + '">' + t[1] + '</button>').join('') + '</div>' +
    '<label class="switch"><input type="checkbox" data-do="explore"' + (S.explore ? ' checked' : '') + '><span>Mode exploration : tout débloquer</span></label>' +
    '<h3>Sauvegarde</h3><p class="hint">Ta progression est enregistrée automatiquement dans ce navigateur et sur ton compte. Pour la transporter ailleurs, copie ce code, puis colle-le dans l\'autre appareil.</p>' +
    '<textarea id="savecode" rows="3" readonly>' + esc(saveCode()) + '</textarea>' +
    '<div class="nav"><button class="btn ghost" data-do="copy-save">Copier le code</button></div>' +
    '<textarea id="loadcode" rows="2" placeholder="Coller un code de sauvegarde ici"></textarea>' +
    '<div class="nav"><button class="btn ghost" data-do="load-save">Restaurer ce code</button></div>' +
    '<div class="nav"><button class="btn ghost danger" data-do="reset">Effacer ma progression</button></div>';
  return h;
}

function saveCode() { try { return btoa(unescape(encodeURIComponent(JSON.stringify(S)))); } catch (e) { return ''; } }

/* ---------- thème ---------- */
function themePref() { try { return localStorage.getItem('chronoscope.theme') || 'auto'; } catch (e) { return 'auto'; } }
function applyTheme(v) {
  const r = D.documentElement;
  if (v === 'light' || v === 'dark') r.setAttribute('data-theme', v); else r.removeAttribute('data-theme');
  try { localStorage.setItem('chronoscope.theme', v); } catch (e) { /* ignoré */ }
}

/* ---------- rendu principal ---------- */
function render(keep) {
  renderHead();
  const v = $('#view'); if (!v) return;
  let h = '';
  if (ui.tab === 'quest') h = viewQuest();
  else if (ui.tab === 'cards') h = viewCards();
  else if (ui.tab === 'time') h = viewTime();
  else if (ui.tab === 'lin') h = viewLin();
  else if (ui.tab === 'arena') h = viewArena();
  else h = viewRev();
  const sx = window.scrollY;
  const ea = ui.tab === 'quest' && ui.act ? eraOf(ui.act) : eraOf(Math.min(unlockedMax(), ACTS.length));
  D.body.setAttribute('data-era', ['medieval', 'renaissance', 'classique'][ea]);
  v.innerHTML = h;
  $$('#tabs button').forEach(b => { const on = b.getAttribute('data-t') === ui.tab; b.classList.toggle('on', on); b.setAttribute('aria-current', on ? 'page' : 'false'); });
  if (ui.tab === 'time' && ui.tm.sub === 'gantt') { const B = ganttBounds(), sc = $('#gscroll'); const ac = actOfYear(ui.tm.y); const ga = $('#gact'); if (ga) ga.textContent = ac ? 'Acte ' + ac.num + ' · ' + ac.short : ''; if (sc) sc.scrollLeft = (ui.tm.y - B.lo) * B.ppy - sc.clientWidth / 2; }
  window.scrollTo(0, keep ? sx : 0);
}

/* ---------- progression ---------- */
function afterProgress(a) {
  const s = A(a);
  if (isDone(a) && !s.done) {
    s.done = true;
    addXp(30, 'acte terminé');
    if (a < 5) toast('Acte ' + ROMAN[a + 1] + ' débloqué', 'rank');
  }
  save();
}
function startStep(s) {
  const a = ui.act;
  if (s === 'cards') { ui.cf = { act: a, g: '', lv: 0, q: '' }; ui.tab = 'cards'; render(); return; }
  ui.step = s;
  if (s === 'story') ui.story = { i: 0 };
  if (s === 'talk') ui.talk = { i: -1, pick: null, xp: 0 };
  if (s === 'flash') { const known = S.fc[a] || {}; ui.fl = { a: a, queue: shuffle(flashDeck(a).filter(c => !known[c.id]).map(c => c.id)), flip: false, gain: 0 }; }
  if (s === 'quiz') ui.quiz = { qs: genQuiz(a), i: 0, picked: null, score: 0, done: false, gain: 0 };
  if (s === 'frise') {
    const ok = friseOrder(a); let o = shuffle(ok), g = 0;
    while (o.join() === ok.join() && g++ < 20) o = shuffle(ok);
    ui.fr = { a: a, order: o, checked: false, score: 0, gain: 0 };
  }
  render();
}
function syncFrise() { const F = ui.fr; if (!F) return; F.order = $$('#frl .fr-it').map(li => li.getAttribute('data-id')); }

/* ---------- actions ---------- */
const DO = {
  tab: el => { ui.tab = el.getAttribute('data-t'); render(); },
  act: el => { const a = +el.getAttribute('data-a'); if (a > unlockedMax()) { toast('Acte verrouillé : termine le précédent', 'rank'); return; } ui.act = a; ui.step = null; render(); },
  back: () => { ui.act = null; ui.step = null; render(); },
  hub: () => { ui.step = null; render(); },
  step: el => startStep(el.getAttribute('data-s')),
  's-prev': () => { if (ui.story.i > 0) { ui.story.i--; render(); } },
  's-next': () => {
    const sc = STORY[ui.act];
    if (ui.story.i < sc.length - 1) { ui.story.i++; render(); return; }
    const s = A(ui.act);
    if (!s.story) { s.story = true; addXp(20, 'récit'); }
    afterProgress(ui.act); ui.step = null; render();
  },
  't-next': () => { ui.talk.i++; ui.talk.pick = null; render(); },
  't-pick': el => {
    const T = ui.talk, o = TALK[ui.act].beats[T.i].opts[+el.getAttribute('data-k')];
    T.pick = +el.getAttribute('data-k');
    if (!A(ui.act).talkDone && o.x) { T.xp += o.x; addXp(o.x, 'dialogue'); }
    render(true);
  },
  't-end': () => {
    const s = A(ui.act);
    if (!s.talkDone) { s.talkDone = true; addXp(10, 'dialogue terminé'); }
    afterProgress(ui.act); ui.step = null; render();
  },
  'q-pick': el => {
    const Q = ui.quiz; if (Q.picked != null) return;
    Q.picked = +el.getAttribute('data-k');
    if (Q.picked === Q.qs[Q.i].c) Q.score++;
    render(true);
  },
  'q-next': () => {
    const Q = ui.quiz;
    if (Q.i < Q.qs.length - 1) { Q.i++; Q.picked = null; render(); return; }
    const s = A(ui.act), prev = s.quiz; let gain = 0;
    if (Q.score > prev) {
      gain = (Q.score - Math.max(prev, 0)) * 3;
      if (prev < 7 && Q.score >= 7) gain += 15;
      s.quiz = Q.score;
    }
    Q.gain = gain; Q.done = true;
    if (gain) addXp(gain, 'quiz'); else save();
    afterProgress(ui.act); render();
  },
  'fl-flip': () => { if (!ui.fl.flip) { ui.fl.flip = true; render(true); } },
  'fl-rate': el => {
    const F = ui.fl, id = F.queue.shift(), r = +el.getAttribute('data-r');
    if (r) {
      S.fc[F.a] = S.fc[F.a] || {}; S.fc[F.a][id] = 1;
      S.xp += 1; F.gain++; touchDay(); S.day.xp += 1; S.stats.reviews++;
      checkBadges(); saveSoon(); renderHead();
    } else {
      F.queue.splice(Math.min(F.queue.length, 3 + Math.floor(Math.random() * 3)), 0, id);
    }
    F.flip = false; render(true);
  },
  'fl-reset': () => { S.fc[ui.fl.a] = {}; save(); startStep('flash'); },
  'fr-up': el => {
    const li = el.closest('.fr-it'), prev = li && li.previousElementSibling;
    if (prev) { li.parentNode.insertBefore(li, prev); syncFrise(); li.querySelector('[data-do="fr-up"]').focus(); }
  },
  'fr-dn': el => {
    const li = el.closest('.fr-it'), nx = li && li.nextElementSibling;
    if (nx) { li.parentNode.insertBefore(nx, li); syncFrise(); li.querySelector('[data-do="fr-dn"]').focus(); }
  },
  'fr-check': () => {
    syncFrise();
    const F = ui.fr, ok = friseOrder(F.a);
    F.score = F.order.filter((id, i) => ok[i] === id).length;
    const s = A(F.a), prev = s.frise; let gain = 0;
    if (F.score > prev) {
      gain = (F.score - Math.max(prev, 0)) * 3;
      if (F.score === F.order.length && prev < F.order.length) gain += 10;
      s.frise = F.score;
    }
    F.gain = gain; F.checked = true;
    if (gain) addXp(gain, 'frise'); else save();
    afterProgress(F.a); render();
  },
  'f-act': el => { ui.cf.act = +el.getAttribute('data-v'); render(true); },
  'f-g': el => { ui.cf.g = el.getAttribute('data-v'); render(true); },
  'f-lv': el => { ui.cf.lv = +el.getAttribute('data-v'); render(true); },
  person: el => openPerson(el.getAttribute('data-id')),
  close: () => closeSheet(),
  'goto-y': el => { ui.tm.y = +el.getAttribute('data-y'); ui.tm.sub = 'gantt'; ui.tab = 'time'; closeSheet(); render(); },
  'tm-sub': el => { ui.tm.sub = el.getAttribute('data-v'); render(); },
  'tm-act': el => { ui.tm.act = +el.getAttribute('data-v'); if (ui.tm.act) ui.tm.y = ACTS[ui.tm.act - 1].a; render(); },
  gy: el => { ui.tm.y = +el.getAttribute('data-y'); const sl = $('#gsl'); if (sl) sl.value = ui.tm.y; noteYear(); updateCursor(); },
  'ln-sub': el => { ui.ln.sub = el.getAttribute('data-v'); render(); },
  'ln-root': el => { ui.ln.root = el.getAttribute('data-id'); render(true); },
  'rev-act': el => { ui.rev.act = +el.getAttribute('data-v'); render(true); },
  'rev-home': () => { ui.rev = { phase: 'home', act: ui.rev.act }; render(); },
  'rev-start': () => {
    const s = buildSession(ui.rev.act), q = s.due.slice(0, 12);
    if (q.length < 12) s.fresh.slice(0, Math.min(6, 12 - q.length)).forEach(c => q.push(c));
    if (!q.length) return;
    ui.rev = { phase: 'card', act: ui.rev.act, queue: q, i: 0, flip: false, known: 0, total: q.length, redo: {} };
    render();
  },
  'rev-flip': () => { if (!ui.rev.flip) { ui.rev.flip = true; render(true); } },
  'rev-rate': el => {
    const R = ui.rev, r = +el.getAttribute('data-r'), c = R.queue[R.i];
    const cur = S.srs[c.id] || { b: 0, due: today() };
    if (r === 2) { const b = Math.min(5, cur.b + 1); S.srs[c.id] = { b: b, due: addDays(INTERVALS[b]) }; if (!R.redo[c.id]) R.known++; }
    else if (r === 1) { S.srs[c.id] = { b: cur.b, due: addDays(1) }; R.redo[c.id] = 1; }
    else { S.srs[c.id] = { b: 0, due: today() }; if (!R.redo[c.id]) { R.redo[c.id] = 1; R.queue.push(c); } }
    S.stats.reviews++;
    R.i++; R.flip = false;
    if (R.i >= R.queue.length) {
      R.phase = 'end'; R.gain = R.known * 2 + 3;
      addXp(R.gain, 'révision');
    } else saveSoon();
    render();
  },
  profile: () => openSheet(profileSheet()),
  theme: el => { applyTheme(el.getAttribute('data-v')); openSheet(profileSheet()); },
  explore: el => { S.explore = !!el.checked; save(); if ($('#sheet').hidden) render(true); else openSheet(profileSheet()); render(true); },
  'copy-save': el => {
    const ta = $('#savecode');
    const done = () => { el.textContent = 'Copié'; };
    try { navigator.clipboard.writeText(ta.value).then(done, () => { ta.select(); el.textContent = 'Sélectionné : copie-le'; }); } catch (e) { ta.select(); }
  },
  'load-save': el => {
    const v = ($('#loadcode').value || '').trim(); if (!v) return;
    try {
      const o = JSON.parse(decodeURIComponent(escape(atob(v))));
      if (!o || typeof o.xp !== 'number' || !o.acts) throw new Error('code');
      S = o; normalize(); save(); checkBadges(); closeSheet(); render(); toast('Progression restaurée', 'rank');
    } catch (e) { el.textContent = 'Code illisible'; }
  },
  'img-del': async el => {
    const id = el.getAttribute('data-id'), old = S.img[id];
    delete S.img[id]; save(); openSheet(personSheet(id));
    if (old && assetsNS) { try { await assetsNS.delete(old); } catch (e) { /* ignoré */ } }
  },
  reset: el => {
    if (el.getAttribute('data-sure') !== '1') { el.setAttribute('data-sure', '1'); el.textContent = 'Confirmer : tout effacer'; return; }
    S = blank(); save(); ui.act = null; ui.step = null; closeSheet(); render(); toast('Progression effacée', 'rank');
  }
};
function noteYear() { const y = ui.tm.y; if (!S.stats.yrs[y]) { S.stats.yrs[y] = 1; checkBadges(); saveSoon(); renderHead(); } }

D.addEventListener('click', e => {
  const el = e.target.closest('[data-do]');
  if (!el || el.tagName === 'INPUT') return;
  const f = DO[el.getAttribute('data-do')];
  if (f) f(el);
});
D.addEventListener('change', e => {
  const el = e.target;
  if (el.matches && el.matches('input[data-do="explore"]')) DO.explore(el);
  if (el.id === 'gsl') noteYear();
  if (el.matches && el.matches('input[data-up]') && el.files && el.files[0]) uploadImg(el.getAttribute('data-up'), el.files[0]);
});
async function uploadImg(id, file) {
  const st = $('#uplst'); if (st) st.textContent = 'Envoi…';
  try {
    if (file.size > 15 * 1024 * 1024) throw { code: 'too_big' };
    const small = await shrinkBlob(file, 1200, 0.85);
    const r = await assetsNS.upload(small, { type: 'image/jpeg' });
    if (r.url) ASSETURL[r.id] = r.url;
    const old = S.img[id];
    S.img[id] = r.id; save();
    if (old) { try { await assetsNS.delete(old); } catch (e) { /* ignoré */ } }
    openSheet(personSheet(id)); toast('Image ajoutée', 'xp');
  } catch (e) { if (st) st.textContent = e && e.code === 'too_big' ? 'Image trop lourde (15 Mo max).' : 'Envoi impossible, réessaie avec une image JPEG ou PNG.'; }
}
D.addEventListener('input', e => {
  const el = e.target;
  if (el.id === 'fq') { ui.cf.q = el.value; $('#flist').innerHTML = fillList(); }
  if (el.id === 'gsl') { ui.tm.y = +el.value; updateCursor(); }
});
D.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#sheet').hidden) closeSheet(); });

/* glisser-déposer de la frise */
let drag = null;
D.addEventListener('pointerdown', e => {
  const g = e.target.closest && e.target.closest('[data-grip]');
  if (!g) return;
  const li = g.closest('.fr-it'); if (!li) return;
  e.preventDefault();
  drag = { li: li, id: e.pointerId };
  li.classList.add('dragging');
  try { g.setPointerCapture(e.pointerId); } catch (x) { /* ignoré */ }
});
D.addEventListener('pointermove', e => {
  if (!drag) return;
  const list = drag.li.parentNode, sibs = Array.prototype.slice.call(list.children).filter(c => c !== drag.li);
  let before = null;
  for (let i = 0; i < sibs.length; i++) { const r = sibs[i].getBoundingClientRect(); if (e.clientY < r.top + r.height / 2) { before = sibs[i]; break; } }
  if (before !== drag.li.nextElementSibling) list.insertBefore(drag.li, before);
});
function endDrag() { if (!drag) return; drag.li.classList.remove('dragging'); drag = null; syncFrise(); }
D.addEventListener('pointerup', endDrag);
D.addEventListener('pointercancel', endDrag);

/* ARÈNE : blasons, pseudos, classement et défis entre joueurs (dans la même fonction) */
const AVATARS = [
  { id: 'a0', s: 'lys', c: 'm-blue' }, { id: 'a1', s: 'crown', c: 'm-red' }, { id: 'a2', s: 'sword', c: 'm-slate' },
  { id: 'a3', s: 'castle', c: 'm-green' }, { id: 'a4', s: 'ship', c: 'm-teal' }, { id: 'a5', s: 'bee', c: 'm-purple' },
  { id: 'a6', s: 'sun', c: 'm-ochre' }, { id: 'a7', s: 'quill', c: 'm-rose' }, { id: 'a8', s: 'cross', c: 'm-red' },
  { id: 'a9', s: 'mitre', c: 'm-purple' }, { id: 'a10', s: 'elephant', c: 'm-slate' }, { id: 'a11', s: 'hammer', c: 'm-blue' },
  { id: 'a12', s: 'shield', c: 'm-green' }, { id: 'a13', s: 'dagger', c: 'm-rose' }, { id: 'a14', s: 'orb', c: 'm-teal' }, { id: 'a15', s: 'book', c: 'm-ochre' }
];
const AVBY = {}; AVATARS.forEach(a => { AVBY[a.id] = a; });
const SHIELD = 'M8 6 H56 V30 C56 46 44 54 32 60 C20 54 8 46 8 30 Z';
function safeAv(av) {
  if (typeof av === 'string' && av.length < 90000 && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(av)) return av;
  return AVBY[av] ? av : 'a0';
}
function avatar(av, size) {
  av = safeAv(av); size = size || 40;
  if (av.indexOf('data:') === 0) return '<img class="avimg" data-fb="' + size + '" src="' + av + '" width="' + size + '" height="' + size + '" alt="">';
  const a = AVBY[av];
  return '<svg class="blason" viewBox="0 0 64 64" width="' + size + '" height="' + size + '" aria-hidden="true">' +
    '<path d="' + SHIELD + '" style="fill:var(--' + a.c + ')" stroke="var(--gold)" stroke-width="3"/>' +
    '<path d="M8 6 H56 V12 H8 Z" fill="var(--gold)" opacity=".55"/>' +
    '<use href="#s-' + a.s + '" x="17" y="15" width="30" height="30" style="color:var(--m-sym)"/></svg>';
}

function blobSrc(id) { return ASSETURL[id] || ('/_blob/' + id); }
D.addEventListener('error', e => {
  const t = e.target;
  if (!t || t.tagName !== 'IMG' || t.dataset.dead) return;
  if (t.hasAttribute('data-fb')) { t.dataset.dead = '1'; const sp = D.createElement('span'); sp.innerHTML = avatar('a0', +t.getAttribute('data-fb') || 40); t.replaceWith(sp.firstChild); }
  else if (t.hasAttribute('data-ph')) {
    t.dataset.dead = '1';
    fetch(t.getAttribute('src')).then(r => { if (!r.ok) throw new Error(r.status); return r.blob(); })
      .then(b => { t.src = URL.createObjectURL(b); })
      .catch(() => { const f = t.closest('figure'); (f || t).remove(); });
  }
}, true);
const AR = { players: {}, duels: [], scores: {}, ready: false, err: '' };
let arenaOn = false;
function initArena() {
  if (arenaOn) return; arenaOn = true;
  const rr = () => { if (ui.tab === 'arena' && !ui.duel) render(true); };
  try {
    DBX.collection('players').onSnapshot(q => {
      const o = {}; q.docs.forEach(d => { o[d.id] = d.data(); }); AR.players = o; AR.ready = true; rr();
    }, () => { AR.err = 'Classement indisponible pour le moment.'; rr(); });
    DBX.collection('duels').orderBy('t', 'desc').limit(30).onSnapshot(q => {
      AR.duels = q.docs.map(d => Object.assign({ id: d.id }, d.data())).filter(d => !d.to || d.to === MYID || d.by === MYID); notePending(); rr();
    }, () => { rr(); });
    DBX.collection('scores').onSnapshot(q => {
      const o = {}; q.docs.forEach(d => { o[d.id] = d.data(); }); AR.scores = o; notePending(); rr();
    }, () => { rr(); });
  } catch (e) { AR.err = 'Arène indisponible.'; }
  pushPlayer();
}
let lastPlayer = '';
function pushPlayer() {
  if (!DBX || !MYID || !S.prof.name) return;
  const doc = { name: S.prof.name.slice(0, 24), av: safeAv(S.prof.av), xp: S.xp, rank: rank(S.xp).n, done: ACTS.filter(a => isDone(a.id)).length, t: Date.now() };
  const key = JSON.stringify([doc.name, doc.av, doc.xp, doc.done]);
  if (key === lastPlayer) return; lastPlayer = key;
  DBX.doc('players/' + MYID).set(doc).catch(e => { lastPlayer = ''; if (e && e.code === 'invalid_argument') AR.err = 'Ton accès ne permet pas d\'écrire dans l\'arène : demande un accès « Contributeur ».'; });
}
const pname = id => { const p = AR.players[id]; return p && p.name ? String(p.name) : 'Voyageur anonyme'; };
const pav = id => { const p = AR.players[id]; return p ? p.av : 'a0'; };
function myDuelScore(d) { const sc = AR.scores[MYID]; return sc && sc['d_' + d.id]; }
function duelBoard(d) {
  const out = [];
  Object.keys(AR.scores).forEach(uid => { const r = AR.scores[uid] && AR.scores[uid]['d_' + d.id]; if (r && typeof r.s === 'number') out.push({ uid: uid, s: r.s, ms: r.ms || 0 }); });
  return out.sort((a, b) => b.s - a.s || a.ms - b.ms);
}
function pending() { return AR.duels.filter(d => d.to === MYID && !myDuelScore(d)); }
function notePending() {
  const p = pending(), tab = $('#tabs button[data-t="arena"]');
  if (tab) tab.classList.toggle('ping', p.length > 0);
  let seen = {}; try { seen = JSON.parse(localStorage.getItem('chronoscope.duelsVus') || '{}'); } catch (e) { /* ignoré */ }
  const fresh = p.filter(d => !seen[d.id]);
  if (fresh.length && AR.scores && Object.keys(AR.players).length) {
    fresh.forEach(d => { seen[d.id] = 1; });
    toast(fresh.length > 1 ? fresh.length + ' nouveaux défis pour toi !' : pname(fresh[0].by) + ' te lance un défi !', 'badge');
    try { localStorage.setItem('chronoscope.duelsVus', JSON.stringify(seen)); } catch (e) { /* ignoré */ }
  }
}
function secs(ms) { return Math.round(ms / 1000) + ' s'; }

/* ---------- vues ---------- */
function viewArena() {
  if (ui.duel) return viewDuel();
  let h = '<h1 class="h1">L\'arène</h1>';
  if (!DBX || !MYID) return h + (typeof loginCard === 'function' ? loginCard() : '<p class="empty">L\'arène a besoin d\'un compte Claude connecté. Ta progression solo, elle, fonctionne partout.</p>');
  if (AR.err) h += '<p class="note">' + esc(AR.err) + '</p>';
  h += '<section class="me-card">' + avatar(S.prof.av, 64) + '<div><b>' + esc(S.prof.name || 'Choisis ton nom de voyageur') + '</b><small>' + esc(rank(S.xp).n) + ' · ' + S.xp + ' XP</small></div>' +
    '<button class="btn sm ghost" data-do="profile">' + (S.prof.name ? 'Modifier' : 'Créer') + '</button></section>';
  if (!S.prof.name) return h + '<p class="hint">Choisis un pseudo et un blason pour apparaître au classement et lancer des défis.</p>';
  // défis
  h += '<div class="ar-head"><h3>Défis</h3><button class="btn sm" data-do="duel-new">Lancer un défi</button></div>';
  if (!AR.duels.length) h += '<p class="empty">Aucun défi pour l\'instant. Lance le premier !</p>';
  else {
  const pend = pending();
  if (pend.length) h += '<p class="note ok">' + (pend.length > 1 ? pend.length + ' défis personnels t\'attendent.' : pname(pend[0].by) + ' t\'a lancé un défi personnel.') + '</p>';
  if (AR.duels.length) h += '<div class="duels">' + AR.duels.slice().sort((x, y) => (y.to === MYID && !myDuelScore(y) ? 1 : 0) - (x.to === MYID && !myDuelScore(x) ? 1 : 0)).map(d => {
    const a = ACTS[(d.act | 0) - 1]; if (!a || !Array.isArray(d.qs)) return '';
    const board = duelBoard(d), mine = myDuelScore(d);
    return '<div class="duel"><div class="du-top">' + avatar(pav(d.by), 34) + '<div><b>Acte ' + a.num + ' · ' + esc(a.short) + '</b><small>' + (d.to ? (d.to === MYID ? '<span class="perso">Défi personnel</span> de ' + esc(pname(d.by)) : '<span class="perso">Défi personnel</span> pour ' + esc(pname(d.to))) : 'Public · lancé par ' + esc(pname(d.by))) + ' · ' + board.length + ' participant' + (board.length > 1 ? 's' : '') + '</small></div>' +
      (mine ? '<span class="du-me">' + mine.s + '/10</span>' : (a.id <= unlockedMax() ? '<button class="btn sm" data-do="duel-play" data-id="' + esc(d.id) + '">Relever</button>' : '<small class="lockd">Acte verrouillé</small>')) + '</div>' +
      (board.length ? '<ol class="podium">' + board.slice(0, 5).map((r, i) => '<li class="' + (r.uid === MYID ? 'you' : '') + '"><span class="pos">' + (i + 1) + '</span>' + avatar(pav(r.uid), 22) + '<span class="nm">' + esc(pname(r.uid)) + '</span><b>' + r.s + '/10</b><small>' + secs(r.ms) + '</small></li>').join('') + '</ol>' : '') + '</div>';
  }).join('') + '</div>';
  }
  // classement
  const list = Object.keys(AR.players).map(id => Object.assign({ id: id }, AR.players[id])).filter(p => p.name).sort((a, b) => (b.xp || 0) - (a.xp || 0));
  h += '<h3>Classement général</h3>' + (list.length ? '<ol class="ladder">' + list.map((p, i) => '<li class="' + (p.id === MYID ? 'you' : '') + '"><span class="pos">' + (i + 1) + '</span>' + avatar(p.av, 36) +
    '<span class="nm"><b>' + esc(String(p.name).slice(0, 24)) + '</b><small>' + esc(String(p.rank || '')) + ' · ' + (p.done | 0) + '/15 actes</small></span><b class="xp">' + (p.xp | 0) + ' XP</b></li>').join('') + '</ol>' : '<p class="empty">Personne encore. Sois la première !</p>');
  if (typeof ideasSection === 'function') h += ideasSection();
  return h;
}
function viewDuel() {
  const Q = ui.duel, a = ACTS[Q.act - 1];
  if (Q.done) {
    const d = AR.duels.find(x => x.id === Q.id), board = d ? duelBoard(d) : [], pos = board.findIndex(r => r.uid === MYID);
    return '<section class="result"><p class="eyebrow">Défi · acte ' + a.num + '</p><div class="big">' + Q.score + '<small>/10</small></div><p>' + secs(Q.ms) + (pos >= 0 ? ' · ' + (pos + 1) + (pos ? 'e' : 're') + ' place sur ' + board.length : '') + '</p>' +
      (Q.gain ? '<p class="note ok">+' + Q.gain + ' XP</p>' : '') + msgBox(d, Q) + '<div class="nav"><button class="btn" data-do="duel-exit">Retour à l\'arène</button></div></section>';
  }
  const q = Q.qs[Q.i];
  let h = '<section class="quiz"><p class="eyebrow">Défi · acte ' + a.num + ' · question ' + (Q.i + 1) + ' sur ' + Q.qs.length + '</p><div class="bar thin"><i style="width:' + (100 * Q.i / Q.qs.length) + '%"></i></div>' +
    '<h2 class="q">' + esc(q.q) + '</h2><div class="opts">';
  q.opts.forEach((o, k) => {
    let cl = 'opt';
    if (Q.picked != null) { if (k === q.c) cl += ' right'; else if (k === Q.picked) cl += ' wrong'; }
    h += '<button class="' + cl + '" data-do="duel-pick" data-k="' + k + '"' + (Q.picked != null ? ' disabled' : '') + '>' + esc(o) + '</button>';
  });
  h += '</div>';
  if (Q.picked != null) h += '<div class="learn ' + (Q.picked === q.c ? 'good' : 'bad') + '"><b>' + (Q.picked === q.c ? 'Exact.' : 'Raté.') + '</b>' + (q.x ? '<p>' + esc(q.x) + '</p>' : '') + '</div><div class="nav"><button class="btn" data-do="duel-next">' + (Q.i === Q.qs.length - 1 ? 'Voir mon score' : 'Suivante') + '</button></div>';
  return h + '<p class="hint">Le chrono départage les ex æquo. Une seule tentative par défi.</p></section>';
}
function profileEditor() {
  let h = '<h3>Mon blason</h3><div class="pe"><label class="pe-l">Nom de voyageur<input id="pname" maxlength="24" value="' + esc(S.prof.name) + '" placeholder="Ex. Aliénor des Bois" autocomplete="off"></label>' +
    '<div class="avgrid">' + AVATARS.map(a => '<button class="avpick' + (S.prof.av === a.id ? ' on' : '') + '" data-do="av-pick" data-v="' + a.id + '" aria-label="Blason ' + a.s + '">' + avatar(a.id, 46) + '</button>').join('') + '</div>';
  h += '<div class="upl"><label class="btn ghost sm">Utiliser une photo<input type="file" accept="image/*" data-avup="1" hidden></label>' + (S.prof.av.indexOf('data:') === 0 ? '<span class="upl-st">Photo active</span>' : '') + '<span class="upl-st" id="avst"></span></div>';
  h += '<div class="nav"><button class="btn" data-do="prof-save">Enregistrer</button></div></div>';
  return h;
}
function sanitizeQs(qs) {
  return qs.slice(0, 10).map(q => ({ q: String(q.q), opts: q.opts.map(String).slice(0, 4), c: q.c | 0, x: q.x ? String(q.x) : '' }));
}
function validQs(qs) { return Array.isArray(qs) && qs.length && qs.every(q => q && typeof q.q === 'string' && Array.isArray(q.opts) && q.opts.length === 4 && q.c >= 0 && q.c < 4); }

Object.assign(DO, {
  'av-pick': el => { S.prof.av = safeAv(el.getAttribute('data-v')); const n = $('#pname'); if (n) S.prof.name = n.value.trim().slice(0, 24); openSheet(profileSheet()); },
  'prof-save': () => {
    const n = $('#pname'); const v = n ? n.value.trim().replace(/\s+/g, ' ').slice(0, 24) : '';
    if (!v) { toast('Choisis un nom', 'rank'); return; }
    S.prof.name = v; save(); pushPlayer(); toast('Blason enregistré', 'xp'); closeSheet(); render(true);
  },
  'duel-new': () => { ui.dto = ''; openSheet(duelSheet()); },
  'duel-to': el => { ui.dto = el.getAttribute('data-v'); openSheet(duelSheet()); },
  'copy-msg': el => {
    const ta = $('#dmsg'); if (!ta) return;
    try { navigator.clipboard.writeText(ta.value).then(() => { el.textContent = 'Copié'; }, () => { ta.select(); el.textContent = 'Sélectionné : copie-le'; }); } catch (e) { ta.select(); }
  },
  'duel-create': async el => {
    const a = +el.getAttribute('data-a'); el.disabled = true;
    try {
      const qs = sanitizeQs(genQuiz(a));
      const doc = { by: MYID, act: a, qs: qs, t: Date.now() };
      if (ui.dto && AR.players[ui.dto] && ui.dto !== MYID) doc.to = ui.dto;
      const ref = await DBX.collection('duels').add(doc);
      closeSheet(); startDuel(Object.assign({ id: ref.id }, doc));
    } catch (e) { el.disabled = false; toast(e && e.code === 'invalid_argument' ? 'Ton accès ne permet pas de créer un défi.' : 'Défi impossible à créer, réessaie.', 'rank'); }
  },
  'duel-play': el => { const d = AR.duels.find(x => x.id === el.getAttribute('data-id')); if (d && validQs(d.qs)) startDuel(d); },
  'duel-pick': el => { const Q = ui.duel; if (Q.picked != null) return; Q.picked = +el.getAttribute('data-k'); if (Q.picked === Q.qs[Q.i].c) Q.score++; render(true); },
  'duel-next': async () => {
    const Q = ui.duel;
    if (Q.i < Q.qs.length - 1) { Q.i++; Q.picked = null; render(); return; }
    Q.ms = Date.now() - Q.t0; Q.done = true; Q.gain = Q.score * 2;
    const upd = {}; upd['d_' + Q.id] = { s: Q.score, ms: Q.ms, t: Date.now() };
    try { await DBX.doc('scores/' + MYID).set(Object.assign({}, AR.scores[MYID] || {}, upd)); } catch (e) { toast('Score non enregistré', 'rank'); }
    addXp(Q.gain, 'défi'); render();
  },
  'duel-exit': () => { ui.duel = null; render(); }
});
function startDuel(d) {
  if (myDuelScore(d)) { toast('Tu as déjà relevé ce défi', 'rank'); return; }
  ui.duel = { id: d.id, act: d.act | 0, qs: d.qs.map(q => ({ q: q.q, opts: q.opts, c: q.c, x: q.x })), i: 0, picked: null, score: 0, t0: Date.now(), done: false };
  ui.tab = 'arena'; render();
}
D.addEventListener('change', async e => {
  const el = e.target;
  if (!(el.matches && el.matches('input[data-avup]') && el.files && el.files[0])) return;
  const st = $('#avst'); if (st) st.textContent = 'Envoi…';
  try {
    const url = await shrinkImage(el.files[0], 192, 0.8);
    const n = $('#pname'); if (n) S.prof.name = n.value.trim().slice(0, 24);
    S.prof.av = url; save(); openSheet(profileSheet());
  } catch (err) { if (st) st.textContent = 'Image illisible : essaie une photo JPEG ou PNG.'; }
});

/* réduit une image en JPEG carré (avatar) ou au format d'origine borné (fiche) */
function loadImg(file) {
  return new Promise((res, rej) => { const u = URL.createObjectURL(file), im = new Image(); im.onload = () => res({ im: im, u: u }); im.onerror = () => { URL.revokeObjectURL(u); rej(new Error('img')); }; im.src = u; });
}
async function shrinkImage(file, side, q) {
  const o = await loadImg(file), im = o.im, s = Math.min(im.naturalWidth, im.naturalHeight);
  const c = D.createElement('canvas'); c.width = c.height = side;
  c.getContext('2d').drawImage(im, (im.naturalWidth - s) / 2, (im.naturalHeight - s) / 2, s, s, 0, 0, side, side);
  URL.revokeObjectURL(o.u);
  return c.toDataURL('image/jpeg', q);
}
async function shrinkBlob(file, max, q) {
  const o = await loadImg(file), im = o.im, k = Math.min(1, max / Math.max(im.naturalWidth, im.naturalHeight));
  const c = D.createElement('canvas'); c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k);
  c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
  URL.revokeObjectURL(o.u);
  return await new Promise((res, rej) => c.toBlob(b => b ? res(b) : rej(new Error('blob')), 'image/jpeg', q));
}

function duelSheet() {
  const others = Object.keys(AR.players).filter(id => id !== MYID && AR.players[id].name);
  let h = '<h2>Lancer un défi</h2><p class="hint">Dix questions tirées au sort sur un acte. Le meilleur score gagne, le chrono départage.</p>' +
    '<h3>Contre qui ?</h3><div class="duel-to"><button class="chip' + (!ui.dto ? ' on' : '') + '" data-do="duel-to" data-v="">Public : tout le monde</button>' +
    others.map(id => '<button class="chip tochip' + (ui.dto === id ? ' on' : '') + '" data-do="duel-to" data-v="' + esc(id) + '">' + avatar(pav(id), 20) + esc(pname(id)) + '</button>').join('') + '</div>';
  if (!others.length) h += '<p class="hint">Aucun autre joueur inscrit pour l\'instant.</p>';
  h += '<h3>Sur quel acte ?</h3><div class="duel-acts">' + ACTS.filter(a => a.id <= unlockedMax()).map(a => '<button class="chip" data-do="duel-create" data-a="' + a.id + '">' + a.num + ' · ' + esc(a.short) + '</button>').join('') + '</div>';
  return h;
}
function msgBox(d, Q) {
  if (!d) return '';
  const a = ACTS[(d.act | 0) - 1];
  let txt = '';
  if (d.to && d.by === MYID) txt = 'Je te lance un défi dans le Chronoscope : acte ' + a.num + ' (' + a.short + '). J\'ai fait ' + Q.score + '/10 en ' + secs(Q.ms) + '. Va dans l\'onglet Arène pour le relever !';
  else if (d.to === MYID) txt = 'J\'ai relevé ton défi du Chronoscope sur l\'acte ' + a.num + ' : ' + Q.score + '/10 en ' + secs(Q.ms) + '.';
  if (!txt) return '';
  return '<div class="msgbox"><b>Prévenir ' + esc(pname(d.by === MYID ? d.to : d.by)) + '</b><small>Copie ce message et envoie-le par SMS ou WhatsApp.</small><textarea id="dmsg" rows="3" readonly>' + esc(txt) + '</textarea><button class="btn ghost sm" data-do="copy-msg">Copier le message</button></div>';
}

/* VERSION SITE (PWA) : compte, notifications, installation, portraits Wikipédia */
const WK = {
  charleschauve: 'Charles II le Chauve', robert2: 'Robert II (roi des Francs)', henri1: 'Henri Ier (roi des Francs)', philippe1: 'Philippe Ier (roi des Francs)',
  louis9: 'Louis IX', charles5: 'Charles V (roi de France)', charles6: 'Charles VI (roi de France)', charles7: 'Charles VII (roi de France)',
  charles8: 'Charles VIII (roi de France)', francois1: 'François Ier (roi de France)', henri2: 'Henri II (roi de France)', francois2: 'François II (roi de France)',
  charles9: 'Charles IX (roi de France)', henri3: 'Henri III (roi de France)', henri4: 'Henri IV (roi de France)', margot: 'Marguerite de France (1553-1615)',
  abelard: 'Pierre Abélard', regent: 'Philippe d\'Orléans (1674-1723)', richelieu: 'Armand Jean du Plessis de Richelieu', mazarin: 'Jules Mazarin',
  conde: 'Louis II de Bourbon-Condé', louis: 'Louis le Pieux', eudesparis: 'Eudes (roi des Francs)', guise: 'Henri Ier de Guise', coligny: 'Gaspard II de Coligny',
  annedautriche: 'Anne d\'Autriche (1601-1666)', marietherese: 'Marie-Thérèse d\'Autriche (1638-1683)', louis6: 'Louis VI le Gros', louis7: 'Louis VII le Jeune'
};
const PORTRAIT = {};
function portraitHTML(id) {
  const p = P[id]; if (!p) return '';
  const c = PORTRAIT[id];
  if (c === undefined) { PORTRAIT[id] = null; fetchPortrait(id); return '<div class="wkp" id="wkp-' + id + '"></div>'; }
  if (!c) return '<div class="wkp" id="wkp-' + id + '"></div>';
  return '<figure class="wkp" id="wkp-' + id + '"><img src="' + esc(c.src) + '" alt="' + esc(p.n) + '" loading="lazy"><figcaption>Image principale de l\'article Wikipédia · <a href="' + esc(c.page) + '" target="_blank" rel="noopener">voir la source ↗</a></figcaption></figure>';
}
async function fetchPortrait(id) {
  const p = P[id], title = WK[id] || p.n.replace(/\s*\(.*\)/, '');
  try {
    const u = 'https://fr.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages|pageprops|info&inprop=url&piprop=thumbnail&pithumbsize=640&titles=' + encodeURIComponent(title);
    const j = await (await fetch(u)).json();
    const pg = j.query && j.query.pages && Object.values(j.query.pages)[0];
    if (pg && pg.thumbnail && !(pg.pageprops && 'disambiguation' in pg.pageprops)) PORTRAIT[id] = { src: pg.thumbnail.source, page: pg.fullurl };
    else PORTRAIT[id] = false;
  } catch (e) { PORTRAIT[id] = false; }
  const el = $('#wkp-' + id);
  if (el && PORTRAIT[id]) el.outerHTML = portraitHTML(id);
}

/* ---------- compte ---------- */
let acctEmail = null;
if (window.CHRONO_AUTH && window.CHRONO_AUTH.available) window.CHRONO_AUTH.email().then(e => { acctEmail = e; });
function loginCard() {
  if (!(window.CHRONO_AUTH && window.CHRONO_AUTH.available)) return '<p class="empty">Le serveur de jeu n\'est pas encore configuré.</p>';
  return '<section class="me-card login"><div><b>Connecte-toi pour jouer à plusieurs</b><small>Ta progression sera aussi sauvegardée et retrouvée sur tous tes appareils.</small></div><button class="btn sm" data-do="login-open">Se connecter</button></section>';
}
function accountHTML() {
  if (!(window.CHRONO_AUTH && window.CHRONO_AUTH.available)) return '';
  if (!acctEmail) return '<h3>Compte</h3>' + loginCard();
  let h = '<h3>Compte</h3><p class="hint">Compte : ' + esc(acctEmail) + '</p>';
  h += '<div class="nav" style="justify-content:flex-start">' + pushButton() + '<button class="btn ghost sm" data-do="logout">Se déconnecter</button></div>';
  return h;
}
function pushButton() {
  const P2 = window.CHRONO_PUSH;
  if (!P2 || !P2.supported()) {
    if (isIOS() && !(P2 && P2.standalone())) return '<span class="hint">Pour les notifications : ajoute d\'abord le site à ton écran d\'accueil.</span>';
    return '<span class="hint">Notifications non disponibles sur ce navigateur.</span>';
  }
  if (P2.state() === 'granted' && pushOn) return '<span class="note ok">Notifications activées</span>';
  if (P2.state() === 'denied') return '<span class="hint">Notifications refusées : réactive-les dans les réglages du téléphone.</span>';
  return '<button class="btn sm" data-do="push-on">Activer les notifications</button>';
}
let pushOn = false;
if (window.CHRONO_PUSH) window.CHRONO_PUSH.isOn().then(v => { pushOn = v; });
function isIOS() { return /iPhone|iPad|iPod/.test(navigator.userAgent); }
function loginSheet(mode, email, msg) {
  const signup = mode === 'signup';
  return '<h2>' + (signup ? 'Créer un compte' : 'Se connecter') + '</h2>' +
    '<p class="hint">' + (signup ? 'Choisis un e-mail et un mot de passe (8 caractères minimum).' : 'Avec ton e-mail et ton mot de passe.') + '</p>' +
    '<input id="lemail" type="email" autocomplete="email" placeholder="ton@email.fr" class="field" value="' + esc(email || '') + '">' +
    '<input id="lpass" type="password" autocomplete="' + (signup ? 'new-password' : 'current-password') + '" placeholder="Mot de passe" class="field">' +
    (msg ? '<p class="note">' + esc(msg) + '</p>' : '') +
    '<div class="nav"><button class="btn ghost" data-do="login-mode" data-m="' + (signup ? 'login' : 'signup') + '">' + (signup ? 'J\'ai déjà un compte' : 'Créer un compte') + '</button>' +
    '<button class="btn" data-do="login-go" data-m="' + (signup ? 'signup' : 'login') + '">' + (signup ? 'Créer' : 'Se connecter') + '</button></div>';
}
Object.assign(DO, {
  'login-open': () => openSheet(loginSheet('login', '')),
  'login-mode': el => openSheet(loginSheet(el.getAttribute('data-m'), ($('#lemail') || {}).value || '')),
  'login-go': async el => {
    const m = el.getAttribute('data-m'), email = ($('#lemail').value || '').trim(), pass = $('#lpass').value || '';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { openSheet(loginSheet(m, email, 'Adresse e-mail invalide.')); return; }
    if (pass.length < 8) { openSheet(loginSheet(m, email, 'Le mot de passe doit faire au moins 8 caractères.')); return; }
    el.disabled = true; el.textContent = '…';
    try {
      if (m === 'signup') await window.CHRONO_AUTH.signUp(email, pass); else await window.CHRONO_AUTH.signIn(email, pass);
      const s2 = await window.CHRONO_SB.auth.getSession();
      if (!(s2.data && s2.data.session)) { openSheet(loginSheet('login', email, 'Compte créé. Confirme ton adresse avec l\'e-mail reçu, puis connecte-toi.')); return; }
      location.reload();
    } catch (e) {
      const t = String(e && e.message || '');
      openSheet(loginSheet(m, email, /Invalid login/i.test(t) ? 'E-mail ou mot de passe incorrect.' : /already/i.test(t) ? 'Ce compte existe déjà : connecte-toi.' : 'Échec : ' + t));
    }
  },
  logout: async () => { await window.CHRONO_AUTH.signOut(); location.reload(); },
  'push-on': async el => {
    el.disabled = true; el.textContent = 'Activation…';
    try { await window.CHRONO_PUSH.enable(); pushOn = true; toast('Notifications activées', 'xp'); }
    catch (e) { toast(e.message === 'denied' ? 'Notifications refusées' : 'Activation impossible', 'rank'); }
    openSheet(profileSheet());
  }
});
/* ouvrir directement l'arène depuis une notification */
if (location.hash === '#arena') { ui.tab = 'arena'; }

/* BOÎTE À IDÉES : propositions, signalements d'erreurs, votes, statuts (admin) */
const ID = { ideas: [], votes: {}, status: {}, admin: false, on: false, tab: 'idee', showDone: false };
const STATUS = { nouveau: 'Nouveau', retenu: 'Retenu', fait: 'Fait', refuse: 'Refusé' };
function initIdeas() {
  if (ID.on || !DBX || !MYID) return; ID.on = true;
  const rr = () => { if (ui.tab === 'arena' && !ui.duel) render(true); };
  DBX.collection('ideas').onSnapshot(q => { ID.ideas = q.docs.map(d => Object.assign({ id: d.id }, d.data())).filter(x => x && typeof x.text === 'string'); rr(); }, () => {});
  DBX.collection('votes').onSnapshot(q => { const o = {}; q.docs.forEach(d => { o[d.id] = d.data() || {}; }); ID.votes = o; rr(); }, () => {});
  DBX.doc('admin/status').onSnapshot(s => { ID.status = (s.exists && s.data()) || {}; rr(); }, () => {});
  if (window.CHRONO_SB) window.CHRONO_SB.from('admins').select('user_id').eq('user_id', MYID).maybeSingle().then(r => { ID.admin = !!(r && r.data); rr(); }, () => {});
}
function voteCount(id) { let n = 0; Object.keys(ID.votes).forEach(u => { if (ID.votes[u] && ID.votes[u][id]) n++; }); return n; }
function stOf(id) { const s = ID.status[id]; return STATUS[s] ? s : 'nouveau'; }
function ideasSection() {
  if (!DBX || !MYID) return '';
  initIdeas();
  const list = ID.ideas.filter(x => (x.kind === 'erreur' ? 'erreur' : 'idee') === ID.tab);
  const open = list.filter(x => ['fait', 'refuse'].indexOf(stOf(x.id)) < 0).sort((a, b) => voteCount(b.id) - voteCount(a.id) || (b.t || 0) - (a.t || 0));
  const closed = list.filter(x => ['fait', 'refuse'].indexOf(stOf(x.id)) >= 0).sort((a, b) => (b.t || 0) - (a.t || 0));
  const mine = ID.votes[MYID] || {};
  const card = x => {
    const st = stOf(x.id), n = voteCount(x.id), ref = x.ref && P[x.ref] ? P[x.ref] : null;
    return '<li class="idea st-' + st + '"><div class="id-top"><span class="id-st">' + STATUS[st] + '</span>' + (ref ? '<button class="chip" data-do="person" data-id="' + esc(x.ref) + '">' + esc(ref.n) + '</button>' : '') + '</div>' +
      '<p>' + esc(String(x.text).slice(0, 600)) + '</p><div class="id-bot"><small>' + esc(pname(x.by)) + '</small>' +
      '<button class="vote' + (mine[x.id] ? ' on' : '') + '" data-do="idea-vote" data-id="' + esc(x.id) + '">+1 · ' + n + '</button></div>' +
      (ID.admin ? '<div class="id-admin">' + Object.keys(STATUS).map(k => '<button class="chip' + (st === k ? ' on' : '') + '" data-do="idea-st" data-id="' + esc(x.id) + '" data-v="' + k + '">' + STATUS[k] + '</button>').join('') + '</div>' : '') + '</li>';
  };
  let h = '<div class="ar-head"><h3>Boîte à idées</h3><button class="btn sm" data-do="idea-new" data-k="' + ID.tab + '">' + (ID.tab === 'erreur' ? 'Signaler' : 'Proposer') + '</button></div>' +
    seg([['idee', 'Idées'], ['erreur', 'Erreurs signalées']], ID.tab, 'idea-tab', 'v');
  if (ID.admin) h += '<p class="hint">Tu es administratrice : change le statut de chaque proposition.</p>';
  h += open.length ? '<ul class="ideas">' + open.map(card).join('') + '</ul>' : '<p class="empty">' + (ID.tab === 'erreur' ? 'Aucune erreur signalée.' : 'Aucune idée pour l\'instant. Lance la première !') + '</p>';
  if (closed.length) h += '<button class="lnk" data-do="idea-done">' + (ID.showDone ? 'Masquer' : 'Voir') + ' les propositions traitées (' + closed.length + ')</button>' + (ID.showDone ? '<ul class="ideas">' + closed.map(card).join('') + '</ul>' : '');
  return h;
}
function ideaSheet(kind, ref, msg) {
  const p = ref && P[ref];
  return '<h2>' + (kind === 'erreur' ? 'Signaler une erreur' : 'Proposer une idée') + '</h2>' +
    (p ? '<p class="hint">Fiche : <b>' + esc(p.n) + '</b></p>' : '') +
    '<p class="hint">' + (kind === 'erreur' ? 'Qu\'est-ce qui est faux ? Si possible, indique la bonne information et ta source.' : 'Une fonctionnalité, un personnage à ajouter, un défaut agaçant… Sois concret.') + '</p>' +
    '<textarea id="itext" rows="5" maxlength="600" placeholder="' + (kind === 'erreur' ? 'Ex. La date du sacre est fausse : c\'est 1429, voir…' : 'Ex. Un mode révision chronométré') + '"></textarea>' +
    (msg ? '<p class="note">' + esc(msg) + '</p>' : '') +
    '<div class="nav"><button class="btn" data-do="idea-send" data-k="' + kind + '" data-ref="' + esc(ref || '') + '">Envoyer</button></div>';
}
function reportBtn(id) {
  if (!DBX || !MYID) return '';
  return '<div class="nav" style="justify-content:flex-start"><button class="btn ghost sm" data-do="idea-new" data-k="erreur" data-ref="' + id + '">Signaler une erreur</button></div>';
}
Object.assign(DO, {
  'idea-tab': el => { ID.tab = el.getAttribute('data-v'); render(true); },
  'idea-done': () => { ID.showDone = !ID.showDone; render(true); },
  'idea-new': el => {
    if (!S.prof.name) { toast('Choisis d\'abord ton nom de voyageur', 'rank'); openSheet(profileSheet()); return; }
    openSheet(ideaSheet(el.getAttribute('data-k'), el.getAttribute('data-ref') || ''));
  },
  'idea-send': async el => {
    const kind = el.getAttribute('data-k') === 'erreur' ? 'erreur' : 'idee', ref = el.getAttribute('data-ref') || '';
    const text = ($('#itext').value || '').trim().slice(0, 600);
    if (text.length < 8) { openSheet(ideaSheet(kind, ref, 'Écris un peu plus, s\'il te plaît.')); return; }
    el.disabled = true;
    try {
      const d = { by: MYID, kind: kind, text: text, t: Date.now() }; if (ref && P[ref]) d.ref = ref;
      await DBX.collection('ideas').add(d);
      closeSheet(); toast('Merci ! Proposition envoyée', 'xp');
      ID.tab = kind; if (ui.tab !== 'arena') { ui.tab = 'arena'; } render();
    } catch (e) { openSheet(ideaSheet(kind, ref, 'Envoi impossible, réessaie.')); }
  },
  'idea-vote': async el => {
    const id = el.getAttribute('data-id'), mine = Object.assign({}, ID.votes[MYID] || {});
    if (mine[id]) delete mine[id]; else mine[id] = 1;
    ID.votes[MYID] = mine; render(true);
    try { await DBX.doc('votes/' + MYID).set(mine); } catch (e) { toast('Vote non enregistré', 'rank'); }
  },
  'idea-st': async el => {
    if (!ID.admin) return;
    const st = Object.assign({}, ID.status); st[el.getAttribute('data-id')] = el.getAttribute('data-v');
    ID.status = st; render(true);
    try { await DBX.doc('admin/status').set(st); } catch (e) { toast('Statut non enregistré', 'rank'); }
  }
});

/* VOYAGES : scènes de dialogue profondes, écus, sceau de confiance, journal de bord du voyageur */
const WM = 'https://upload.wikimedia.org/wikipedia/commons/thumb/';
const LEVELS_VY = [
  { n: 'Audience', cost: 0, d: 'Ce qu\'elle veut bien dire en public.' },
  { n: 'Entretien', cost: 30, d: 'Ses choix, ses calculs, sa personnalité.' },
  { n: 'Confidences', cost: 80, d: 'Ses doutes, ses enfants, ce qui la blesse.' },
  { n: 'Secrets de cour', cost: 150, d: 'Les rumeurs, les rivaux, ce qu\'elle prépare.' }
];
const SCENES = {
  beaugency: {
    act: 7, who: 'alienor', year: 1152, date: 'mars 1152', place: 'Beaugency, au bord de la Loire',
    bg: { src: WM + '2/28/Louis_vii_and_alienor.jpg/960px-Louis_vii_and_alienor.jpg', cap: 'Le mariage de Louis VII et d\'Aliénor, Grandes Chroniques de France, XIVe siècle', lic: 'Domaine public', page: 'https://commons.wikimedia.org/wiki/File:Louis_vii_and_alienor.jpg' },
    face: { src: WM + '2/2b/Fontevraud_Gisants_Alienor.jpg/960px-Fontevraud_Gisants_Alienor.jpg', pos: '12% 24%', size: '420%', cap: 'Gisant d\'Aliénor, abbaye de Fontevraud, vers 1204', lic: 'Domaine public, photo UAltmann', page: 'https://commons.wikimedia.org/wiki/File:Fontevraud_Gisants_Alienor.jpg' },
    intro: 'Le Chronoscope te dépose dans une salle froide du château de Beaugency. Des évêques sortent en file, l\'air satisfait. Le concile vient de déclarer nul le mariage du roi Louis VII et d\'Aliénor d\'Aquitaine, pour cause de parenté trop proche. Près d\'une fenêtre, une femme d\'une trentaine d\'années regarde la Loire. Elle ne pleure pas. Elle compte.',
    seal: ['Elle t\'avoue qu\'elle a demandé elle-même l\'annulation, dès Antioche, des années avant que les évêques ne s\'en mêlent.', 'Elle te confie qu\'un messager est déjà parti pour l\'Anjou, la veille même du concile.', 'Elle te glisse, presque en riant : « Si je n\'épouse pas Henri, ce sont ses ennemis qui m\'épouseront de force. Autant choisir mon roi. »'],
    start: ['a1', 'b1', 'c1', 'd1'],
    nodes: {
      a1: { mood: 'froid', say: 'Encore un curieux. Les évêques sont partis, voyageur. Si tu viens voir pleurer la reine de France, tu arrives trop tard : je ne le suis plus depuis ce matin.',
        opts: [
          { t: 'Je ne viens pas vous voir pleurer. Je viens vous écouter.', tr: 8, go: 'a2', j: 'Je l\'ai trouvée à la fenêtre, droite comme une lance. Je lui ai dit que je venais l\'écouter, et j\'ai cru voir l\'ombre d\'un sourire.' },
          { t: 'Majesté, c\'est une humiliation terrible.', tr: -4, go: 'a2', r: 'Une humiliation ? Pour qui, voyageur ? Regarde-les sortir. Ils croient m\'avoir renvoyée. Je repars avec l\'Aquitaine.', j: 'J\'ai parlé d\'humiliation. Elle m\'a corrigé sèchement : elle repart avec l\'Aquitaine, et c\'est le roi qui perd.' },
          { t: 'Pourquoi le mariage est-il annulé ?', tr: 2, go: 'a2', j: 'J\'ai posé la question naïve du voyageur : pourquoi annuler un mariage de quinze ans ?' }
        ] },
      a2: { mood: 'calme', say: 'Officiellement ? Nous serions cousins au quatrième degré. Les évêques l\'ont découvert, figure-toi, après quinze ans de mariage et deux filles. L\'Église a parfois une mémoire étonnamment lente.',
        fact: { k: 'fait', t: 'Le concile de Beaugency annule le mariage le 21 mars 1152, pour consanguinité.', q: 'Pour quel motif officiel le mariage de Louis VII et d\'Aliénor est-il annulé en 1152 ?', a: 'La consanguinité : ils sont cousins au quatrième degré. Annulation prononcée au concile de Beaugency, le 21 mars 1152.' },
        opts: [
          { t: 'Et la vraie raison ?', tr: 6, go: 'a3', j: 'Le motif officiel est la parenté. J\'ai demandé la vraie raison, et elle m\'a jaugé du regard.' },
          { t: 'Vos deux filles, que vont-elles devenir ?', tr: 4, go: 'a3', r: 'Marie et Alix restent avec leur père. Ce sont des filles de France. Je ne les emmène pas. Ne me demande pas ce que cela me coûte.', j: 'Elle laisse ses deux filles, Marie et Alix, au roi. Elle m\'a interdit de lui demander ce que cela lui coûte.' }
        ] },
      a3: { mood: 'tendu', say: 'La vraie raison tient en un mot : un fils. Louis n\'en a pas eu de moi. Et puis… disons que j\'ai épousé un roi, et que j\'ai trouvé un moine.',
        fact: { k: 'legende', t: '« J\'ai épousé un roi, j\'ai trouvé un moine » : la formule est rapportée par des chroniqueurs, mais rien ne prouve qu\'elle l\'ait dite ainsi.', q: 'Quelle phrase célèbre, peut-être légendaire, attribue-t-on à Aliénor sur Louis VII ?', a: '« J\'ai cru épouser un roi, j\'ai épousé un moine. » Rapportée par des chroniqueurs, sans preuve qu\'elle l\'ait prononcée.' },
        opts: [
          { t: 'Vous êtes dure avec lui.', tr: 3, go: 'end', r: 'Je suis juste. Louis est un homme bon. C\'est bien le problème : un royaume ne se gouverne pas avec de la bonté et des prières. Va, voyageur. Si tu veux en savoir plus, il faudra mériter un vrai entretien.', j: 'Je l\'ai trouvée dure avec Louis. « Juste », a-t-elle répondu. Il est bon, et c\'est bien le problème.' },
          { t: 'Vous allez vous remarier ?', tr: 5, go: 'end', r: 'Quelle impertinence. Tu me plais. Reviens me voir quand nous aurons le temps de parler sérieusement, sans tous ces évêques derrière les portes.', j: 'J\'ai osé lui demander si elle se remarierait. Elle m\'a traité d\'impertinent, puis m\'a dit que je lui plaisais.' }
        ] },

      b1: { mood: 'calme', say: 'Tu es revenu. Assieds-toi, il fait moins froid près du feu. Demande-moi ce que tu veux, mais demande-le bien.',
        opts: [
          { t: 'Qui êtes-vous, sans couronne ?', tr: 6, go: 'b2', j: 'Au coin du feu, je lui ai demandé qui elle était sans couronne.' },
          { t: 'Parlez-moi de l\'Aquitaine.', tr: 4, go: 'b2', j: 'Je l\'ai fait parler de l\'Aquitaine, et sa voix a changé.' }
        ] },
      b2: { mood: 'chaud', say: 'Je suis la duchesse d\'Aquitaine et comtesse de Poitou. Mes terres vont de la Loire aux Pyrénées. C\'est plus grand que le domaine du roi de France. Mon grand-père, Guillaume, écrivait des chansons d\'amour en langue d\'oc. Chez moi, on chante. À Paris, on prie.',
        fact: { k: 'fait', t: 'Son grand-père Guillaume IX d\'Aquitaine est considéré comme le premier troubadour connu.', q: 'Qui est considéré comme le premier troubadour connu, et quel est son lien avec Aliénor ?', a: 'Guillaume IX, duc d\'Aquitaine : c\'est le grand-père d\'Aliénor.' },
        opts: [
          { t: 'Vous n\'avez jamais aimé Paris ?', tr: 5, go: 'b3', j: 'Ses terres sont plus vastes que celles du roi. Chez elle on chante, à Paris on prie. J\'ai compris qu\'elle n\'avait jamais aimé Paris.' },
          { t: 'Et la croisade avec Louis ?', tr: 3, go: 'b3', r: 'La croisade. Deux ans de poussière, de défaites et de sermons. Louis voulait prier à Jérusalem, moi je voulais gagner la guerre. Devine qui a eu raison.', j: 'Elle a évoqué la croisade : deux ans de poussière et de sermons. Louis voulait prier, elle voulait gagner.' }
        ] },
      b3: { mood: 'tendu', say: 'On m\'a reproché d\'être trop libre, trop vive, trop présente au conseil. Bernard de Clairvaux me regardait comme on regarde un incendie. Les hommes d\'Église n\'aiment pas les femmes qui parlent politique.',
        opts: [
          { t: 'Vous étiez en avance sur votre temps.', tr: -2, go: 'b4', r: 'En avance ? Non, voyageur. J\'étais exactement de mon temps. Une héritière, c\'est un royaume qui marche. Je l\'ai simplement compris avant eux.', j: 'Je l\'ai dite en avance sur son temps. Elle a refusé le compliment : elle était de son temps, elle l\'avait juste compris avant les autres.' },
          { t: 'Qu\'est-ce que vous vouliez vraiment ?', tr: 7, go: 'b4', j: 'Je lui ai demandé ce qu\'elle voulait vraiment. Elle a mis longtemps à répondre.' }
        ] },
      b4: { mood: 'chaud', say: 'Je voulais compter. Pas être une dot qu\'on range dans un coffre. Aujourd\'hui, pour la première fois depuis mes quinze ans, je choisis seule. C\'est étrange. C\'est grisant.',
        opts: [
          { t: 'Alors, que choisissez-vous ?', tr: 6, go: 'end', r: 'Ah. Ça, c\'est une question pour une conversation plus intime. Tu sais où me trouver.', j: 'Pour la première fois depuis ses quinze ans, elle choisit seule. Elle a refusé de me dire quoi. Pas encore.' }
        ] },

      c1: { mood: 'triste', say: 'Ferme la porte. Ce que je vais te dire ne sortira pas de cette pièce, ou je saurai qui l\'a laissé sortir.',
        opts: [
          { t: 'Je vous le jure.', tr: 6, go: 'c2', j: 'Elle m\'a fait fermer la porte et jurer le silence. J\'ai juré. Ce journal ne compte pas, je crois.' },
          { t: 'Pourquoi me faire confiance ?', tr: 4, go: 'c2', r: 'Parce que tu viens d\'ailleurs, et que tu repartiras. Un confident qui disparaît, c\'est un luxe de reine.', j: 'Elle me fait confiance parce que je repartirai. Un confident qui disparaît, dit-elle, est un luxe de reine.' }
        ] },
      c2: { mood: 'triste', say: 'Mes filles. Marie a sept ans, Alix à peine deux. Je ne les verrai presque plus. On dira que je suis une mère sans cœur. On le dit déjà.',
        opts: [
          { t: 'Vous auriez pu vous battre pour elles.', tr: -3, go: 'c3', r: 'Contre le roi de France et l\'Église réunis ? Pour perdre, et elles avec ? Non. Je les ai laissées là où elles seront princesses.', j: 'Je lui ai dit qu\'elle aurait pu se battre pour ses filles. Elle m\'a répondu qu\'elle aurait perdu, et elles avec.' },
          { t: 'Ce choix vous coûte.', tr: 8, go: 'c3', j: 'Je lui ai seulement dit que ce choix lui coûtait. Elle a détourné les yeux vers la Loire.' }
        ] },
      c3: { mood: 'tendu', say: 'Et puis il y a Antioche. Tu as entendu les rumeurs ? Mon oncle Raymond, les longues conversations en langue d\'oc, la jalousie de Louis… On a dit des choses ignobles.',
        fact: { k: 'legende', t: 'La liaison d\'Aliénor avec son oncle Raymond de Poitiers à Antioche, en 1148, est une rumeur. Aucune preuve ne l\'atteste.', q: 'Que dit la rumeur d\'Antioche, en 1148, et est-elle prouvée ?', a: 'Qu\'Aliénor aurait eu une liaison avec son oncle Raymond de Poitiers, prince d\'Antioche. C\'est une rumeur, sans preuve.' },
        opts: [
          { t: 'Était-ce vrai ?', tr: -5, go: 'c4', r: 'Tu oses ? Hm. Raymond était le seul homme de cette croisade qui parlait stratégie avec moi. Voilà tout mon crime.', j: 'J\'ai osé demander si les rumeurs d\'Antioche étaient vraies. Son regard m\'a glacé. Raymond, dit-elle, était le seul à lui parler stratégie.' },
          { t: 'Que s\'est-il passé, selon vous ?', tr: 6, go: 'c4', j: 'Elle m\'a raconté Antioche à sa manière : un oncle qui la traitait en égale, un mari jaloux qui l\'a emmenée de force.' }
        ] },
      c4: { mood: 'chaud', say: 'Louis m\'a fait enlever d\'Antioche en pleine nuit. Ce soir-là, j\'ai compris que ce mariage était fini. Il a fallu quatre ans pour que les évêques le comprennent aussi.',
        opts: [
          { t: 'Merci de m\'avoir dit tout cela.', tr: 6, go: 'end', r: 'Ne me remercie pas. Reviens plutôt. Il me reste des secrets, et ceux-là valent de l\'or.', j: 'Ce soir-là à Antioche, le mariage était fini. Il a fallu quatre ans aux évêques pour s\'en apercevoir.' }
        ] },

      d1: { mood: 'tendu', say: 'Tu veux les secrets de la cour ? Alors écoute bien, car demain je pars pour Poitiers, et la route n\'est pas sûre.',
        opts: [
          { t: 'Pas sûre ? Qui vous menace ?', tr: 5, go: 'd2', j: 'Demain elle part pour Poitiers. La route n\'est pas sûre, m\'a-t-elle dit à voix basse.' }
        ] },
      d2: { mood: 'tendu', say: 'Une duchesse sans mari, c\'est un trésor sans gardien. Thibaut de Blois veut m\'enlever pour m\'épouser. Le jeune Geoffroy d\'Anjou aussi. Je le sais par mes espions.',
        fact: { k: 'fait', t: 'Sur la route du retour, Thibaut de Blois puis Geoffroy d\'Anjou tentent de l\'enlever pour l\'épouser. Elle leur échappe.', q: 'Que se passe-t-il sur la route d\'Aliénor vers Poitiers après l\'annulation de 1152 ?', a: 'Thibaut de Blois puis Geoffroy d\'Anjou, frère d\'Henri, tentent de l\'enlever pour l\'épouser. Elle leur échappe.' },
        opts: [
          { t: 'Geoffroy ? Le frère d\'Henri Plantagenêt ?', tr: 7, go: 'd3', j: 'Thibaut de Blois et Geoffroy d\'Anjou veulent l\'enlever pour l\'épouser. Geoffroy est le frère d\'Henri Plantagenêt. Elle a souri quand j\'ai fait le lien.' },
          { t: 'Prenez une escorte.', tr: 2, go: 'd3', r: 'J\'ai mieux qu\'une escorte. J\'ai un plan, et il s\'appelle Henri.', j: 'Je lui ai conseillé une escorte. Elle a mieux : un plan qui s\'appelle Henri.' }
        ] },
      d3: { mood: 'chaud', say: 'Henri, duc de Normandie, comte d\'Anjou. Dix-neuf ans, onze de moins que moi. Roux, colérique, infatigable. Et peut-être bientôt roi d\'Angleterre. Nous nous sommes vus à Paris l\'été dernier.',
        fact: { k: 'fait', t: 'Le 18 mai 1152, deux mois après l\'annulation, Aliénor épouse Henri Plantagenêt à Poitiers.', q: 'Qui Aliénor épouse-t-elle le 18 mai 1152, deux mois après Beaugency ?', a: 'Henri Plantagenêt, duc de Normandie et comte d\'Anjou, futur Henri II d\'Angleterre. Mariage à Poitiers.' },
        opts: [
          { t: 'Le roi Louis va devenir fou de rage.', tr: 6, go: 'd4', j: 'Elle va épouser Henri, onze ans de moins qu\'elle, peut-être bientôt roi d\'Angleterre. J\'ai prédit la rage du roi Louis.' },
          { t: 'C\'est un mariage d\'amour ?', tr: 4, go: 'd4', r: 'D\'amour, de terres et de vengeance. Les trois ensemble, voyageur, c\'est le meilleur mariage qui soit.', j: 'Mariage d\'amour ? « D\'amour, de terres et de vengeance », a-t-elle tranché.' }
        ] },
      d4: { mood: 'chaud', say: 'Quand Louis apprendra la nouvelle, l\'Aquitaine, l\'Anjou et la Normandie seront dans les mêmes mains. Plus de terres que le roi de France lui-même. Il a voulu se débarrasser d\'une femme. Il va hériter d\'un rival.',
        opts: [
          { t: 'Vous venez de lancer trois siècles de guerre.', tr: 8, go: 'end', r: 'Trois siècles ? Tu exagères sûrement, voyageur. Mais l\'idée me plaît. Va, maintenant. Et garde tes secrets aussi bien que tu as gardé les miens.', j: 'Je lui ai dit qu\'elle lançait trois siècles de guerre. L\'idée lui a plu. Je n\'ai pas eu le cœur de lui dire que la guerre de Cent Ans lui donnerait presque raison.' }
        ] }
    }
  }
};
function sceneOfAct(a) { return Object.keys(SCENES).filter(k => SCENES[k].act === a); }

/* ---------- état ---------- */
function vyState() {
  S.vy = S.vy || {};
  const V = S.vy;
  V.ecus = typeof V.ecus === 'number' ? V.ecus : 0;
  V.trust = V.trust || {}; V.lv = V.lv || {}; V.done = V.done || {}; V.journal = V.journal || []; V.cards = V.cards || {};
  if (!V.gift) { V.gift = 1; V.ecus += 40; }
  return V;
}
const _addXp = addXp;
addXp = function (n, why) { if (n > 0) { const V = vyState(); V.ecus += Math.ceil(n / 2); } _addXp(n, why); };
const _flashDeck = flashDeck;
flashDeck = function (a) { const out = _flashDeck(a), V = vyState(); (V.cards[a] || []).forEach(c => out.push({ id: c.id, f: esc(c.q) + '<small class="rc-tag">Carte du journal</small>', b: esc(c.a) })); return out; };

/* ---------- son d'ambiance, synthétisé (aucun fichier) ---------- */
const SND = { ctx: null, on: false, nodes: [] };
function soundToggle() {
  if (SND.on) { SND.nodes.forEach(n => { try { n.stop(); } catch (e) { /* déjà arrêté */ } }); SND.nodes = []; SND.on = false; return; }
  try {
    const C = SND.ctx || (SND.ctx = new (window.AudioContext || window.webkitAudioContext)());
    C.resume && C.resume();
    const len = C.sampleRate * 4, buf = C.createBuffer(1, len, C.sampleRate), d = buf.getChannelData(0);
    let last = 0; for (let i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
    const src = C.createBufferSource(); src.buffer = buf; src.loop = true;
    const f = C.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
    const g = C.createGain(); g.gain.value = 0.18;
    const lfo = C.createOscillator(), lg = C.createGain(); lfo.frequency.value = 0.12; lg.gain.value = 260; lfo.connect(lg); lg.connect(f.frequency);
    src.connect(f); f.connect(g); g.connect(C.destination); src.start(); lfo.start();
    SND.nodes = [src, lfo]; SND.on = true;
  } catch (e) { toast('Son indisponible sur cet appareil', 'rank'); }
}
function quill() {
  if (!SND.on || !SND.ctx) return;
  const C = SND.ctx, o = C.createBufferSource(), b = C.createBuffer(1, 1200, C.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) * 0.25;
  o.buffer = b; const f = C.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2500; o.connect(f); f.connect(C.destination); o.start();
}

/* ---------- vue : la scène ---------- */
function sealSVG(t) {
  const cracks = t >= 34 ? 1 : 0, c2 = t >= 67 ? 1 : 0, open = t >= 100;
  return '<svg class="seal' + (open ? ' open' : '') + '" viewBox="0 0 80 80" aria-hidden="true">' +
    '<path d="M40 4c6 0 8 5 13 6s10-1 13 4-1 9 1 14 7 7 7 12-5 7-7 12 2 10-1 14-9 3-13 4-7 6-13 6-8-5-13-6-10 1-13-4 1-9-1-14-7-7-7-12 5-7 7-12-2-10 1-14 9-3 13-4 7-6 13-6z" class="wax"/>' +
    '<circle cx="40" cy="40" r="22" class="wax2"/><path d="M40 26l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" class="lys"/>' +
    (cracks ? '<path d="M18 22l14 12-4 6" class="crack"/>' : '') + (c2 ? '<path d="M62 58l-12-9 3-7M58 18l-9 13" class="crack"/>' : '') + '</svg>';
}
function viewVoyage() {
  const Y = ui.vy, sc = SCENES[Y.id], p = P[sc.who], V = vyState(), t = V.trust[Y.id] || 0;
  const node = Y.node && sc.nodes[Y.node];
  let h = '<button class="back" data-do="hub">‹ Acte ' + ROMAN[sc.act] + '</button>' +
    '<section class="vy mood-' + (node ? node.mood : 'calme') + '" id="vy">' +
    '<div class="vy-bg"><img src="' + esc(sc.bg.src) + '" alt="" referrerpolicy="no-referrer" onerror="this.remove()"></div><div class="vy-light"></div><div class="vy-candle"></div>' +
    '<div class="vy-top"><span class="vy-date">' + esc(sc.date) + ' · ' + esc(sc.place) + '</span>' +
    '<button class="vy-snd' + (SND.on ? ' on' : '') + '" data-do="vy-snd" aria-label="Ambiance sonore">' + (SND.on ? 'Son activé' : 'Ambiance sonore') + '</button></div>' +
    '<div class="vy-who"><div class="vy-face' + (Y.speaking ? ' speak' : '') + '" style="background-image:url(\'' + esc(sc.face.src) + '\');background-position:' + sc.face.pos + ';background-size:' + sc.face.size + '"></div>' +
    '<div><b>' + esc(p.n) + '</b><small>' + LEVELS_VY[Y.lv].n + '</small></div>' +
    '<button class="vy-seal" data-do="vy-seal" aria-label="Sceau de confiance">' + sealSVG(t) + '<span>Confiance ' + t + '/100</span><i class="vy-gauge"><i style="width:' + t + '%"></i></i></button></div>';
  if (!node) {
    if (Y.phase === 'intro') {
      h += '<div class="vy-box"><p class="narr tw" data-full="' + esc(sc.intro) + '"></p><div class="vy-opts" hidden><button class="btn" data-do="vy-go">S\'approcher</button></div></div>';
    } else {
      const e = V.journal.find(x => x.id === Y.entry);
      h += '<div class="vy-box"><p class="narr">Tu quittes la salle. Ta plume court déjà sur le journal.</p>' +
        '<div class="jpage ink"><p class="jhead">' + esc(sc.date) + ' · ' + esc(sc.place) + '</p>' + (e ? e.parts.map((x, k) => '<p style="animation-delay:' + (k * 0.6) + 's">' + esc(x) + '</p>').join('') : '') + '</div>' +
        levelsHTML(Y.id) + '<div class="nav"><button class="btn ghost" data-do="vy-journal">Ouvrir le journal</button><button class="btn" data-do="hub">Retour au Chronoscope</button></div></div>';
    }
  } else {
    h += '<div class="vy-box">' + (Y.reply ? '<div class="bubble me">' + esc(Y.reply.me) + '</div>' + (Y.reply.r ? '<div class="bubble them">' + esc(Y.reply.r) + '</div>' : '') : '') +
      '<div class="bubble them tw" data-full="' + esc(node.say) + '"></div>' +
      (node.fact ? '<div class="vy-fact ' + node.fact.k + '" hidden><b>' + (node.fact.k === 'fait' ? 'Fait établi' : 'Légende ou rumeur') + '</b> ' + esc(node.fact.t) + '</div>' : '') +
      '<div class="vy-opts" hidden>' + node.opts.map((o, k) => '<button class="opt" data-do="vy-pick" data-k="' + k + '">' + esc(o.t) + '</button>').join('') + '</div></div>';
  }
  h += '<p class="vy-cred">Décor : ' + esc(sc.bg.cap) + ' (' + esc(sc.bg.lic) + ', <a href="' + sc.bg.page + '" target="_blank" rel="noopener">source</a>). Portrait : ' + esc(sc.face.cap) + ' (' + esc(sc.face.lic) + ', <a href="' + sc.face.page + '" target="_blank" rel="noopener">source</a>).</p></section>';
  return h;
}
function levelsHTML(id) {
  const V = vyState(), un = V.lv[id] || 0, dn = V.done[id] || {};
  return '<div class="vy-levels"><p class="eyebrow">Niveaux d\'intimité · ' + V.ecus + ' écus</p>' + LEVELS_VY.map((L, i) => {
    const open = i <= un, ok = dn[i];
    return '<div class="vy-lv' + (open ? ' open' : '') + '"><span><b>' + L.n + '</b><small>' + L.d + '</small></span>' +
      (open ? '<button class="btn sm' + (ok ? ' ghost' : '') + '" data-do="vy-start" data-id="' + id + '" data-l="' + i + '">' + (ok ? 'Rejouer' : 'Commencer') + '</button>'
        : '<button class="btn sm ghost" data-do="vy-buy" data-id="' + id + '" data-l="' + i + '"' + (i > un + 1 ? ' disabled' : '') + '>' + L.cost + ' écus</button>') + '</div>';
  }).join('') + '</div>';
}
function viewVoyageHome(id) {
  const sc = SCENES[id], p = P[sc.who];
  return '<button class="back" data-do="hub">‹ Acte ' + ROMAN[sc.act] + '</button><section class="hub"><p class="eyebrow">Voyage · ' + esc(sc.date) + '</p><h1>' + esc(p.n) + ' à Beaugency</h1>' +
    '<p class="lead">Remonte le temps jusqu\'au jour où un mariage royal se défait. Chaque niveau d\'intimité ouvre une conversation plus profonde. Tes choix font monter ou baisser sa confiance, et chaque visite s\'écrit dans ton journal.</p>' +
    '<p class="hint">Les écus se gagnent en jouant : la moitié de chaque gain d\'XP, en quiz, flashcards, duels et séries.</p></section>' + levelsHTML(id) +
    '<div class="nav"><button class="btn ghost" data-do="vy-journal">Journal de bord</button></div>';
}

/* ---------- animations ---------- */
const RM = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let twTimer = null;
function typewrite() {
  clearTimeout(twTimer);
  const el = $('#view .tw'); if (!el) return;
  const full = el.getAttribute('data-full') || '', show = () => { const f = $('#view .vy-fact'); if (f) f.hidden = false; const o = $('#view .vy-opts'); if (o) o.hidden = false; if (ui.vy) { ui.vy.speaking = false; const fc = $('#view .vy-face'); if (fc) fc.classList.remove('speak'); } };
  if (RM() || ui.vy.skip) { el.textContent = full; show(); return; }
  let i = 0; el.textContent = '';
  const fc = $('#view .vy-face'); if (fc) fc.classList.add('speak');
  const step = () => {
    if (!el.isConnected) return;
    if (ui.vy.skip) { el.textContent = full; show(); return; }
    el.textContent = full.slice(0, ++i);
    if (i >= full.length) { show(); return; }
    const c = full[i - 1];
    if (i % 9 === 0) quill();
    twTimer = setTimeout(step, c === '.' || c === '?' || c === '!' ? 320 : c === ',' || c === ':' || c === '…' ? 160 : 22);
  };
  step();
}
function teleport(year, done) {
  if (RM()) { done(); return; }
  const o = D.createElement('div'); o.className = 'tp';
  o.innerHTML = '<svg class="tp-dial" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44"/><circle cx="50" cy="50" r="34"/>' +
    Array.from({ length: 24 }, (_, k) => '<line x1="50" y1="8" x2="50" y2="' + (k % 2 ? 13 : 17) + '" transform="rotate(' + k * 15 + ' 50 50)"/>').join('') + '<line class="hand" x1="50" y1="50" x2="50" y2="20"/></svg><b class="tp-y">' + new Date().getFullYear() + '</b><small>Le Chronoscope remonte le temps</small>';
  D.body.appendChild(o);
  const y0 = new Date().getFullYear(), t0 = performance.now(), dur = 1700, yEl = o.querySelector('.tp-y');
  const tick = now => {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    yEl.textContent = Math.round(y0 + (year - y0) * e);
    if (k < 1) requestAnimationFrame(tick); else { o.classList.add('flash'); setTimeout(() => { done(); }, 260); setTimeout(() => o.remove(), 900); }
  };
  requestAnimationFrame(tick);
}
function parallax() {
  const vy = $('#vy'); if (!vy || RM() || vy.dataset.px) return; vy.dataset.px = 1;
  const img = vy.querySelector('.vy-bg img');
  vy.addEventListener('pointermove', e => { if (!img) return; const r = vy.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; img.style.translate = (x * -14) + 'px ' + (y * -10) + 'px'; });
}
const _render = render;
render = function (keep) { _render(keep); if (ui.tab === 'quest' && ui.step === 'voyage' && ui.vy && ui.vy.mode === 'scene') { parallax(); typewrite(); } };

/* ---------- journal de bord ---------- */
function viewJournal() {
  const V = vyState(), J = ui.jr || (ui.jr = { i: 0, edit: false });
  const list = V.journal.filter(e => e.parts.length).slice().sort((a, b) => a.visit - b.visit);
  let h = '<button class="back" data-do="' + (ui.vy && ui.vy.id ? 'vy-home' : 'hub') + '">‹ Retour</button><h1 class="h1">Journal de bord du voyageur</h1>' +
    '<p class="eyebrow">Classé par date de visite, avec tes allers et retours dans le temps</p>';
  if (!list.length) return h + '<p class="empty">Ton journal est encore vierge. Pars en voyage et il s\'écrira tout seul.</p>';
  J.i = clamp(J.i, 0, list.length - 1);
  const e = list[J.i], prev = list[J.i - 1], sc = SCENES[e.scene];
  let jump = '';
  if (prev) { const d = e.year - prev.year; jump = d === 0 ? 'Même époque que ta visite précédente' : 'Saut de ' + Math.abs(d) + ' ans ' + (d < 0 ? 'en arrière' : 'en avant') + ' depuis ' + prev.year; }
  else jump = 'Premier saut : de ' + new Date(e.visit).getFullYear() + ' à ' + e.year;
  const when = new Date(e.visit).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  h += '<div class="book"><div class="jpage turn" id="jp"><div class="jtop"><span>Visite n° ' + (J.i + 1) + ' · ' + when + '</span><span class="jjump">' + esc(jump) + '</span></div>' +
    '<p class="jhead">' + esc(sc ? sc.date : String(e.year)) + ' · ' + esc(e.place) + '</p>' +
    (J.edit ? '<textarea id="jtext" rows="12" class="jedit">' + esc(e.text != null ? e.text : e.parts.join('\n\n')) + '</textarea>'
      : (e.text != null ? e.text.split(/\n\s*\n/) : e.parts).map(x => '<p>' + esc(x) + '</p>').join('')) +
    (e.notes && e.notes.length ? '<div class="jnotes">' + e.notes.map((n, k) => {
      const has = (V.cards[e.act] || []).some(c => c.id === 'j:' + e.id + ':' + k);
      return '<div class="jnote ' + n.k + '"><b>' + (n.k === 'fait' ? 'Fait établi' : 'Légende') + '</b> ' + esc(n.t) +
        (n.q ? '<button class="lnk" data-do="j-card" data-e="' + e.id + '" data-k="' + k + '"' + (has ? ' disabled' : '') + '>' + (has ? 'Flashcard créée' : 'En faire une flashcard') + '</button>' : '') + '</div>';
    }).join('') + '</div>' : '') + '</div></div>' +
    '<div class="nav"><button class="btn ghost" data-do="j-turn" data-d="-1"' + (J.i ? '' : ' disabled') + '>‹ Page précédente</button>' +
    (J.edit ? '<button class="btn" data-do="j-save" data-e="' + e.id + '">Enregistrer</button>' : '<button class="btn ghost" data-do="j-edit">Modifier</button>') +
    '<button class="btn ghost" data-do="j-turn" data-d="1"' + (J.i < list.length - 1 ? '' : ' disabled') + '>Page suivante ›</button></div>' +
    '<p class="hint">Page ' + (J.i + 1) + ' sur ' + list.length + '. Les flashcards créées rejoignent le paquet de l\'acte ' + ROMAN[e.act] + '.</p>';
  return h;
}

/* ---------- actions ---------- */
function vyBegin(id, lv) {
  const V = vyState(), sc = SCENES[id];
  const e = { id: Date.now().toString(36), scene: id, act: sc.act, who: sc.who, year: sc.year, place: sc.place, visit: Date.now(), parts: [], notes: [] };
  V.journal.push(e);
  ui.vy = { id: id, mode: 'scene', lv: lv, node: null, phase: 'intro', entry: e.id, reply: null, skip: false, speaking: true };
  save();
  teleport(sc.year, () => render());
}
Object.assign(DO, {
  'vy-home': el => { const id = (el && el.getAttribute && el.getAttribute('data-id')) || (ui.vy && ui.vy.id) || 'beaugency'; ui.step = 'voyage'; ui.vy = { id: id, mode: 'home' }; render(); },
  'vy-start': el => vyBegin(el.getAttribute('data-id'), +el.getAttribute('data-l')),
  'vy-buy': el => {
    const id = el.getAttribute('data-id'), l = +el.getAttribute('data-l'), V = vyState(), L = LEVELS_VY[l];
    if ((V.lv[id] || 0) !== l - 1) return;
    if (V.ecus < L.cost) { toast('Il te manque ' + (L.cost - V.ecus) + ' écus. Joue un quiz ou des flashcards !', 'rank'); return; }
    V.ecus -= L.cost; V.lv[id] = l; save(); toast(L.n + ' débloqué', 'rank'); render(true);
  },
  'vy-go': () => { const Y = ui.vy, sc = SCENES[Y.id]; Y.node = sc.start[Y.lv]; Y.phase = 'talk'; Y.skip = false; Y.speaking = true; render(true); },
  'vy-pick': el => {
    const Y = ui.vy, sc = SCENES[Y.id], node = sc.nodes[Y.node], o = node.opts[+el.getAttribute('data-k')], V = vyState();
    const e = V.journal.find(x => x.id === Y.entry);
    const before = V.trust[Y.id] || 0, after = clamp(before + (o.tr || 0), 0, 100);
    V.trust[Y.id] = after;
    if (e) { if (o.j) e.parts.push(o.j); if (node.fact && !e.notes.some(n => n.t === node.fact.t)) e.notes.push(node.fact); }
    [34, 67, 100].forEach((th, k) => { if (before < th && after >= th) setTimeout(() => openSheet('<h2>Le sceau se brise</h2>' + sealSVG(after) + '<p class="narr">' + esc(sc.seal[k]) + '</p><div class="nav"><button class="btn" data-do="close">Continuer</button></div>'), 400); if (e && before < th && after >= th) e.parts.push('Confidence : ' + sc.seal[k]); });
    if (o.tr) toast((o.tr > 0 ? '+' : '') + o.tr + ' confiance', o.tr > 0 ? 'xp' : 'rank');
    Y.reply = { me: o.t, r: o.r || '' }; Y.skip = false; Y.speaking = true;
    if (o.go === 'end') {
      Y.node = null; Y.phase = 'end';
      const dn = V.done[Y.id] || (V.done[Y.id] = {});
      if (!dn[Y.lv]) { dn[Y.lv] = 1; addXp(15 + 10 * Y.lv, 'voyage'); }
      if (e && o.r) e.parts.push('Ses derniers mots : « ' + o.r + ' »');
      quill();
    } else Y.node = o.go;
    save(); render(true);
  },
  'vy-seal': () => { const Y = ui.vy, sc = SCENES[Y.id], t = vyState().trust[Y.id] || 0, got = [34, 67, 100].filter(x => t >= x).length;
    openSheet('<h2>Sceau de confiance</h2>' + sealSVG(t) + '<p class="hint">Confiance : ' + t + '/100. Le sceau se fend à 34, 67 et se brise à 100, révélant chaque fois une confidence.</p>' +
      (got ? sc.seal.slice(0, got).map(s => '<p class="narr">' + esc(s) + '</p>').join('') : '<p class="empty">Aucune confidence pour l\'instant.</p>') + '<div class="nav"><button class="btn" data-do="close">Fermer</button></div>'); },
  'vy-snd': () => { soundToggle(); render(true); },
  'vy-journal': () => { ui.step = 'journal'; const V = vyState(); ui.jr = { i: Math.max(0, V.journal.filter(e => e.parts.length).length - 1), edit: false }; render(); },
  'j-turn': el => { ui.jr.i += +el.getAttribute('data-d'); ui.jr.edit = false; render(true); const p = $('#jp'); if (p) p.classList.add(+el.getAttribute('data-d') > 0 ? 'fwd' : 'bwd'); },
  'j-edit': () => { ui.jr.edit = true; render(true); },
  'j-save': el => { const V = vyState(), e = V.journal.find(x => x.id === el.getAttribute('data-e')); if (e) { e.text = ($('#jtext').value || '').slice(0, 6000); save(); } ui.jr.edit = false; toast('Journal enregistré', 'xp'); render(true); },
  'j-card': el => {
    const V = vyState(), e = V.journal.find(x => x.id === el.getAttribute('data-e')), k = +el.getAttribute('data-k'), n = e && e.notes[k];
    if (!n || !n.q) return;
    const arr = V.cards[e.act] || (V.cards[e.act] = []), id = 'j:' + e.id + ':' + k;
    if (!arr.some(c => c.id === id)) arr.push({ id: id, q: n.q, a: n.a });
    save(); toast('Flashcard ajoutée à l\'acte ' + ROMAN[e.act], 'xp'); render(true);
  }
});
D.addEventListener('click', e => { if (ui.vy && ui.vy.mode === 'scene' && e.target.closest && e.target.closest('.vy-box .tw')) { ui.vy.skip = true; } });

/* ---------- démarrage ---------- */
D.body.insertAdjacentHTML('afterbegin', SPRITE);
applyTheme(themePref());
checkBadges();
render();
initCloud();
(async () => {
  try {
    if (!(window.claude && window.claude.use)) return;
    assetsNS = await window.claude.use('assets');
    if (assetsNS) { const l = await assetsNS.list(); (l.assets || []).forEach(a => { if (a.id && a.url) ASSETURL[a.id] = a.url; }); render(true); }
  } catch (e) { /* liste indisponible */ }
})();
})();
