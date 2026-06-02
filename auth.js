// Felhasználókezelés — localStorage alapú

const USERS_KEY = "doorpuzzle_users";
const SESSION_KEY = "doorpuzzle_session";
const REFERRAL_BONUS = 10; // érmék meghívásért

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  const name = localStorage.getItem(SESSION_KEY);
  if (!name) return null;
  const users = getUsers();
  return users[name] || null;
}

function getCurrentUsername() {
  return localStorage.getItem(SESSION_KEY);
}

function register(name, password, referredBy) {
  name = name.trim();
  if (!name || !password) return { ok: false, msg: "Töltsd ki mindkét mezőt!" };
  if (name.length < 2) return { ok: false, msg: "A név legalább 2 karakter legyen!" };
  if (password.length < 3) return { ok: false, msg: "A jelszó legalább 3 karakter legyen!" };

  const users = getUsers();
  if (users[name]) return { ok: false, msg: "Ez a felhasználónév már foglalt!" };

  // Új felhasználó létrehozása
  users[name] = {
    name,
    password,
    created: Date.now(),
    bestScore: 0,
    bestLevel: 0,
    gamesPlayed: 0,
    totalPoints: 0,
    lastPlayed: null,
    coins: 0,
    referredBy: null,
    referralCount: 0,
  };

  // Referral feldolgozás
  let referralMsg = null;
  if (referredBy && referredBy !== name && users[referredBy]) {
    const refUser = users[referredBy];

    // Megakadályozzuk, hogy valaki saját maga linkjén regisztráljon
    // és azt is, hogy ugyanaz a meghívó kétszer kapjon ugyanattól
    const alreadyReferred = (refUser.referredUsers || []).includes(name);

    if (!alreadyReferred) {
      // Új felhasználó kap érmét
      users[name].coins = REFERRAL_BONUS;
      users[name].referredBy = referredBy;

      // Meghívó kap érmét
      refUser.coins = (refUser.coins || 0) + REFERRAL_BONUS;
      refUser.referralCount = (refUser.referralCount || 0) + 1;
      refUser.referredUsers = refUser.referredUsers || [];
      refUser.referredUsers.push(name);

      referralMsg = `🎉 Meghívó által regisztráltál — kaptál ${REFERRAL_BONUS} érmét!`;
    }
  }

  saveUsers(users);
  localStorage.setItem(SESSION_KEY, name);
  return { ok: true, referralMsg };
}

function login(name, password) {
  name = name.trim();
  const users = getUsers();
  if (!users[name]) return { ok: false, msg: "Nem létezik ilyen felhasználó!" };
  if (users[name].password !== password) return { ok: false, msg: "Hibás jelszó!" };
  localStorage.setItem(SESSION_KEY, name);
  return { ok: true };
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
}

function updateUserStats(levelReached, score) {
  const name = getCurrentUsername();
  if (!name) return;
  const users = getUsers();
  if (!users[name]) return;

  const u = users[name];
  u.gamesPlayed = (u.gamesPlayed || 0) + 1;
  u.totalPoints = (u.totalPoints || 0) + score;
  u.lastPlayed = Date.now();
  if (score > (u.bestScore || 0)) u.bestScore = score;
  if (levelReached > (u.bestLevel || 0)) u.bestLevel = levelReached;

  saveUsers(users);
}

function addCoins(username, amount) {
  const users = getUsers();
  if (!users[username]) return;
  users[username].coins = (users[username].coins || 0) + amount;
  saveUsers(users);
}

function getUserByName(name) {
  const users = getUsers();
  return users[name] || null;
}
