// Logikai kérdések és ajtók adatai
const LEVELS = [
  {
    id: 1,
    story: "Egy sötét folyosón állsz. Három ajtó előtted — de csak egy vezet tovább.",
    question: "Mindig hazudok — soha nem mondok igazat. Ez az állítás…",
    doors: [
      { label: "A", hint: "🌀 Örvénylő, furcsa ajtó", answer: "Önellentmondás — se igaz, se hamis" },
      { label: "B", hint: "✅ Tiszta, fehér ajtó", answer: "Igaz" },
      { label: "C", hint: "❌ Fekete, rideg ajtó", answer: "Hamis" },
    ],
    correct: 0,
    explanation: "Ha igaz lenne, akkor hazudna — tehát hamis lenne. Ha hamis, akkor nem hazudik — tehát igaz. Önellentmondás, amit nem lehet feloldani.",
  },
  {
    id: 2,
    story: "Egy könyvtárban vagy. A polcokon furcsa feliratok. Melyik ajtón mész át?",
    question: "Van egy kakas. Keletre néz. Melyik irányba esik a tojása?",
    doors: [
      { label: "A", hint: "🌅 Napkeleti, meleg ajtó", answer: "Keletre" },
      { label: "B", hint: "🌄 Naplementés, vörös ajtó", answer: "Nyugatra" },
      { label: "C", hint: "🐓 Tollakkal díszített ajtó", answer: "A kakas nem tojik" },
    ],
    correct: 2,
    explanation: "A kakas hím — nem tojik. Nem esik semerre tojás.",
  },
  {
    id: 3,
    story: "A torony tetején vagy. A szél süvít. Három irányba mutatnak az ajtók.",
    question: "Egy szobában van egy gyufa, egy gyertya és egy petróleumlámpa. Mi az első, amit meggyújtasz?",
    doors: [
      { label: "A", hint: "🕯️ Viaszillatú ajtó", answer: "A gyertyát" },
      { label: "B", hint: "🪔 Olajfoltos, régi ajtó", answer: "A petróleumlámpát" },
      { label: "C", hint: "🔥 Füstös, koromszagú ajtó", answer: "A gyufát" },
    ],
    correct: 2,
    explanation: "Mindkét dolgot csak gyufával tudod meggyújtani — tehát először a gyufát kell meggyújtani.",
  },
  {
    id: 4,
    story: "Egy őserdőben botlasz egy romba. Három szobor mutat három ajtóra.",
    question: "Egy orvos azt mondja: 'Ez a férfi az én fivérem.' A férfi mondja: 'Nekem nincs fivérem.' Hogy lehetséges ez?",
    doors: [
      { label: "A", hint: "🌿 Mohával fedett ajtó", answer: "Az orvos hazudik" },
      { label: "B", hint: "👩‍⚕️ Fehér köpenyes ajtó", answer: "Az orvos nő — a férfi nővére" },
      { label: "C", hint: "🤫 Titkos, rejtett ajtó", answer: "Féltestvérek" },
    ],
    correct: 1,
    explanation: "Az orvos nő. A férfinek valóban nincs fivére — de van nővére, aki az orvos.",
  },
  {
    id: 5,
    story: "A tenger mélyén egy elsüllyedt hajón vagy. Három kijárat van.",
    question: "Melyik nehezebb: egy kiló toll, vagy egy kiló vas?",
    doors: [
      { label: "A", hint: "🪶 Könnyűnek tűnő ajtó", answer: "A toll" },
      { label: "B", hint: "⚙️ Nehéz, vasalt ajtó", answer: "A vas" },
      { label: "C", hint: "⚖️ Mérleggel díszített", answer: "Ugyanannyit nyomnak" },
    ],
    correct: 2,
    explanation: "Mindkettő egy kiló — ugyanannyit nyomnak. A csapda az, hogy a toll könnyűnek tűnik, de a mennyiség azonos.",
  },
  {
    id: 6,
    story: "Egy jégpalotában fagyos szél kísér. Melyik ajtót nyitod ki?",
    question: "Minél szárad, annál nedvesebb lesz. Mi ez?",
    doors: [
      { label: "A", hint: "💧 Vizes, csöpögő ajtó", answer: "A törülköző" },
      { label: "B", hint: "☁️ Párás, ködös ajtó", answer: "A felhő" },
      { label: "C", hint: "🌊 Hullámos, kékes ajtó", answer: "A tenger" },
    ],
    correct: 0,
    explanation: "A törülköző — minél inkább szárad (törölközik) valaki, annál nedvesebb lesz maga a törülköző.",
  },
  {
    id: 7,
    story: "Egy vulkán kráterének szélén állsz. Nincs sok időd dönteni.",
    question: "Melyik szót írja mindenki helytelenül, mégis helyes?",
    doors: [
      { label: "A", hint: "✍️ Tintafoltokkal teli ajtó", answer: "A \"helytelenül\" szót" },
      { label: "B", hint: "📖 Szótáros, tudományos", answer: "Nincs ilyen szó" },
      { label: "C", hint: "🤔 Gondolkodós, furcsa ajtó", answer: "A \"helyes\" szót" },
    ],
    correct: 0,
    explanation: "A \"helytelenül\" szót — mindenki helytelenül írja, vagyis pontosan így írja ki: h-e-l-y-t-e-l-e-n-ü-l. Maga a feladat a csapda.",
  },
  {
    id: 8,
    story: "Egy felhők felett lebegő kastélyban vagy. A mélység szédít.",
    question: "Egy ember 20 évig él egy toronyban, sosem hagyja el. Mégis meghal — mert nem tud felmenni. Miért?",
    doors: [
      { label: "A", hint: "🧗 Kapaszkodós, meredek ajtó", answer: "Megöregedett és gyenge lett" },
      { label: "B", hint: "🔦 Sötétedő, homályos ajtó", answer: "A lift meghibásodott és túl magas a lépcső" },
      { label: "C", hint: "📏 Kicsi, alacsony ajtó", answer: "Törpe — nem éri el a lift gombját sötétben" },
    ],
    correct: 2,
    explanation: "A klasszikus törpe-rejtvény: nappal botjával eléri a lift gombját, de sötétben (pl. esős napon nincs árnyék a boton) nem tudja megnyomni a kellő szintet, ezért gyalog kénytelen felmenni.",
  },
  {
    id: 9,
    story: "Egy boszorkány háza előtt állsz az éjszakában. Választanod kell.",
    question: "Van apádnak fia, de az nem a te fivéred. Ki az?",
    doors: [
      { label: "A", hint: "🕷️ Pókhálós, sötét ajtó", answer: "A féltestvéred" },
      { label: "B", hint: "🌙 Holdfényes ezüst ajtó", answer: "Te magad" },
      { label: "C", hint: "🎃 Töklámpással díszített", answer: "Apád egy titok gyereke" },
    ],
    correct: 1,
    explanation: "Apádnak van egy fia — ez te vagy. Nem a fivéred, hanem te magad.",
  },
  {
    id: 10,
    story: "A végső szoba. Egy utolsó kihívás áll előtted. A szabadság vár.",
    question: "Egy kétfejű érmét feldobsz 10-szer. Mi a valószínűsége, hogy legalább egyszer írást kapsz?",
    doors: [
      { label: "A", hint: "👑 Aranyozott, díszes ajtó", answer: "0% — soha nem lehet írás" },
      { label: "B", hint: "🗝️ Kulcsokkal teli ajtó", answer: "50%" },
      { label: "C", hint: "🌟 Csillogó, fényes ajtó", answer: "Nagyon nagy, kb. 99%" },
    ],
    correct: 0,
    explanation: "A kétfejű érmén mindkét oldal fej — írás fizikailag nem létezik rajta, tehát az esélye 0%, bármennyi dobás után is.",
  },
];

const MAX_LIVES = 3;
const POINTS_PER_CORRECT = 100;
const POINTS_BONUS_STREAK = 50;
