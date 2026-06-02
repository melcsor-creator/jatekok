// Játékadatok — képes szókitalálós
const CATEGORIES = {
  allatok: "🐾 Állatok",
  etelek: "🍽️ Ételek",
  varosok: "🏙️ Városok",
  filmek: "🎬 Filmek",
  targyak: "🔧 Tárgyak",
  termeszet: "🌿 Természet",
};

// Unsplash képek — ingyenes, közvetlen link
// format: { word, image, category, hint1 (betűsegítség), hint2 (leírás) }
const PUZZLES = [
  // ÁLLATOK
  {
    word: "OROSZLÁN",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80",
    category: "allatok",
    hint1: "O _ O _ Z _ _ N",
    hint2: "Az afrikai szavanna királya, sörényes hím.",
  },
  {
    word: "ELEFÁNT",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
    category: "allatok",
    hint1: "E _ E _ Á _ T",
    hint2: "A világ legnagyobb szárazföldi emlőse, ormánya van.",
  },
  {
    word: "PINGVIN",
    image: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=600&q=80",
    category: "allatok",
    hint1: "P _ N G _ _ N",
    hint2: "Fekete-fehér madár, nem tud repülni, Antarktiszon él.",
  },
  {
    word: "ZSIRÁF",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
    category: "allatok",
    hint1: "Z _ _ R Á F",
    hint2: "A világ legmagasabb állata, hosszú nyaka van.",
  },
  {
    word: "GEPÁRD",
    image: "https://images.unsplash.com/photo-1557408049-4b3f5e5a5d2e?w=600&q=80",
    category: "allatok",
    hint1: "G E _ Á _ D",
    hint2: "A leggyorsabb szárazföldi állat, foltok díszítik.",
  },
  {
    word: "DELFIN",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80",
    category: "allatok",
    hint1: "D E _ _ I N",
    hint2: "Okos tengeri emlős, mosolygós arccal.",
  },
  {
    word: "KOALA",
    image: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=600&q=80",
    category: "allatok",
    hint1: "K O _ L A",
    hint2: "Ausztráliai erszényes állat, eukaliptuszleveleket eszik.",
  },
  {
    word: "TIGRIS",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&q=80",
    category: "allatok",
    hint1: "T _ G R _ S",
    hint2: "Csíkos nagymacska, Ázsia erdőiben él.",
  },

  // ÉTELEK
  {
    word: "PIZZA",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    category: "etelek",
    hint1: "P _ Z Z A",
    hint2: "Olasz kerek lepény, sajttal és feltétekkel.",
  },
  {
    word: "SUSHI",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    category: "etelek",
    hint1: "S U _ H I",
    hint2: "Japán étel, nyers hallal és rizzsel.",
  },
  {
    word: "HAMBURGER",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    category: "etelek",
    hint1: "H A _ B U R _ E R",
    hint2: "Két zsemle között húspogácsa, saláta, sajt.",
  },
  {
    word: "FAGYLALT",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80",
    category: "etelek",
    hint1: "F A G Y _ A _ T",
    hint2: "Édes fagyasztott desszert, tölcsérben tálalják.",
  },
  {
    word: "TORTA",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80",
    category: "etelek",
    hint1: "T O R _ A",
    hint2: "Születésnapra gyertyás édes sütemény.",
  },
  {
    word: "RÁKÓCZI TÚRÓS",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    category: "etelek",
    hint1: "R Á K Ó C Z I  T Ú R Ó S",
    hint2: "Magyar sütemény, túróval és baracklekvárral.",
  },

  // VÁROSOK
  {
    word: "BUDAPEST",
    image: "https://images.unsplash.com/photo-1500078974918-738828bc0422?w=600&q=80",
    category: "varosok",
    hint1: "B U D A _ E _ T",
    hint2: "Magyarország fővárosa, a Duna két partján.",
  },
  {
    word: "PÁRIZS",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    category: "varosok",
    hint1: "P Á R _ Z S",
    hint2: "Francia főváros, Eiffel-toronnyal.",
  },
  {
    word: "NEW YORK",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
    category: "varosok",
    hint1: "N E W  _ O R K",
    hint2: "Az USA legnagyobb városa, Szabadság-szobor.",
  },
  {
    word: "TOKIÓ",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    category: "varosok",
    hint1: "T O K _ Ó",
    hint2: "Japán fővárosa, a világ egyik legnagyobb városa.",
  },
  {
    word: "RÓMA",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80",
    category: "varosok",
    hint1: "R Ó M A",
    hint2: "Olasz főváros, Colosseum, az örök város.",
  },

  // TERMÉSZET
  {
    word: "VÍZESÉS",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80",
    category: "termeszet",
    hint1: "V Í Z E _ É S",
    hint2: "Szikláról lezúduló víztömeg.",
  },
  {
    word: "VULKÁN",
    image: "https://images.unsplash.com/photo-1445743432342-a9f56e9d9e2a?w=600&q=80",
    category: "termeszet",
    hint1: "V U L K Á N",
    hint2: "Tűzhányó hegy, lávát lövell ki.",
  },
  {
    word: "SZIVÁRÁNY",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=600&q=80",
    category: "termeszet",
    hint1: "S Z I V Á R _ N Y",
    hint2: "Eső után megjelenő színes ív az égen.",
  },
  {
    word: "GLECCSER",
    image: "https://images.unsplash.com/photo-1477768663691-75d9f4fc0b51?w=600&q=80",
    category: "termeszet",
    hint1: "G L E C C _ E R",
    hint2: "Lassan mozgó jégtömeg a hegyekben.",
  },

  // TÁRGYAK
  {
    word: "GITÁR",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80",
    category: "targyak",
    hint1: "G I T Á R",
    hint2: "Húros hangszer, pengetik vagy pengetve játsszák.",
  },
  {
    word: "TÁVCSŐ",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&q=80",
    category: "targyak",
    hint1: "T Á V C S Ő",
    hint2: "Optikai eszköz, messze lévő dolgok megfigyelésére.",
  },
  {
    word: "IRÁNYTŰ",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    category: "targyak",
    hint1: "I R Á N Y T Ű",
    hint2: "Navigációs eszköz, mindig észak felé mutat.",
  },
  {
    word: "HEGEDŰ",
    image: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=600&q=80",
    category: "targyak",
    hint1: "H E G E D Ű",
    hint2: "Vonós hangszer, smyccsel játsszák.",
  },

  // FILMEK
  {
    word: "TITANIC",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "filmek",
    hint1: "T I T A N I C",
    hint2: "1997-es film, elsüllyedő hajó, Jack és Rose.",
  },
  {
    word: "AVATAR",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
    category: "filmek",
    hint1: "A V A T A R",
    hint2: "James Cameron filmje, kék lényekkel benépesített bolygó.",
  },
];

const MAX_LIVES = 3;
const POINTS_CORRECT_NOHINT = 300;
const POINTS_CORRECT_1HINT = 200;
const POINTS_CORRECT_2HINT = 100;
const POINTS_CORRECT_3HINT = 50;
