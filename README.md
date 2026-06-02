# 🚪 Az Elveszett Útvesztő

Böngészős rejtvényjáték — válassz ajtót, találd el a helyes választ, juss tovább!

## Játékmenet
- Minden szinten van egy **történeti bevezető** és egy **kérdés**
- **3 ajtó** közül kell választani — mindegyik mögött más válasz rejtőzik
- Helyes válasz: **+100 pont** (sorozat esetén bónusz is!)
- Rossz válasz: **-1 élet** (3 élettel indulsz)
- 10 szint van — ha mindegyiken átjutsz, nyertél!

## Profilmegosztás
Regisztráció után a profilodhoz generálódik egy megosztható link:
```
https://[felhasználónév].github.io/[repo]/?player=Neved
```
Barátaid megnyithatják ezt a linket és látják az eredményeidet, pontjaidat, szintjeidet.

## GitHub Pages telepítés
1. Push-old a repót GitHub-ra
2. Menj a repo **Settings → Pages** menüjébe
3. Source: `Deploy from a branch` → `main` → `/ (root)`
4. Mentés — néhány perc múlva él a link

## Technológia
- Vanilla HTML / CSS / JavaScript
- Nincs backend — minden adat a **localStorage**-ban tárol
- Reszponzív, mobilon is működik
