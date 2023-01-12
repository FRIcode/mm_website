# Source code for website Multidisciplinaren.si

## Installation

To run application locally you need to install [Hugo](https://gohugo.io/installation/).
After installation run with the following commands.

```bash
cd mm_frontend
hugo sever --disableFastRender --ignoreCache
```

## Editing

Za pomoč urejanja markdown datotek si oglejte naslednji [naslov](https://www.markdownguide.org/cheat-sheet/)

V `mm_frontend/config.toml` datoteki je mogoče zamenjati seznam
sodelujočih mentorjev in nosilcev ter tekst naslova na prvi strani.

Vsa preostala vsebina strani se nahaja v `mm_frontend/content` direktoriju:
### Urejanje Uvodne strani

Seznam študentov na prvi strani je generiran iz nabora vseh študentov, ki so sodelovali na projektih iz vseh let.

V `content/_index.md` datoteki se nahaja opis prvotne strani. Tukaj je pomembno, da se vse napisane odstavke v spremnjenjem
markdownu ohrani v html oznakah `<h3></h3>`.

### Urejanje Projektov

Pod `posts` se nahajajo vsebine za vsak projekt
- vsak direktorij projekta vsebuje `index.md` z bistvenimi podatki projekta:
  - title: naslov projekta
  - yearStart: leto začetka projekta
  - yearEnd: leto konca projekta
  - abstract: povzetek projekta
  - ytLink: povezava do videja projekta na yt.
- prav tako vsebuje `info.json` datoteko, kjer je mogoče spreminjati **rezultate** projekta (ime, porocilo, predstavitev, video), **skupine študentov**, **sodelujoče fakultete**, **mnenja** in **mentorje**.

### Urejanje strani Proces

V `content/proces/_index.md` je mogoče spreminjati tekst na strani Proces in zamenjati 
sliko procesa z istoimensko datoteko pod `content/proces/proces.png`.

Podobno kot pri uvodni strani se mora spremenjeni tekst ohranjati v html oznakah `<h3></h3>`.

### Urejanje strani Za študente

V `content/za-studente/_index.md` se ohranja tekst na strani Za študente. 

Za spreminjanje tekstov in povezav pod _Kako lahko sodelujem_ je potrebno neposredno spreminjanje html datoteke
`layouts/za-studente/za-studente.html`.

Podobno kot pri uvodni strani se mora spremenjeni tekst ohranjati v html oznakah `<h3></h3>`.

### Urejanje strani Za organizacije

V `content/za-organizacije/_index.md` je mogoče spreminjati tekst na strani Za organizacije.

Podobno kot pri uvodni strani se mora spremenjeni tekst ohranjati v html oznakah `<h3></h3>`.

---

Stran galerija je generirana iz fotografij shranjenih v vseh direktorijih projektov na strani.





