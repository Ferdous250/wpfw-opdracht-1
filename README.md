//** ----**  dit maakt de tekst tussen die steerretes dikgedrukt
# Portfolio Website - WPFW Opdracht 1
**Student:** Ferdous Uddin
**Studentnummer:** 25033433 
**Klas:** H-2-SE.1 
**Datum:** September 2026  
**Opleiding:** HBO ICT / SE3 - De Haagse Hogeschool

**projectbeschrijving:**
dit is mijn blog die ik maak doormiddel van de lessen en opdrachten. de komende weken komen steeds opdraachten bij waarbij de blog ook mee veranderd aan de hand van de casus en de opdrachten. 
in de blog zelf staat wie ik ben en staat er wat ik heb geleerd en waarom ik het zo heb toegepast.


## 1. Projectstructuurr & ontwikkelomgeveing

voor de realiastie van wat ik nu heb gedaan heb ik gebruik gemaakt van:
* **Code Tool:** Visual Studio Code (VSC), hier maak ik dus gebruik van HTML5 en responsieve CSS3 code waarop de website is gemaakt.
* **Versiebeheer:** Github Repository: hier sla ik mijn versies op door te commiten en te pushen. 
wpfw-opdracht-1


## 2. Gebruikersscenario's (Criterium 3)

om het ontwerp van de portofolio site op te bouwen, heb ik hier twee gebruikersscenario's gedefineerd:

* **Gebruikersscenario 1 (Recruiter / Stagebegeleider):**  
  *Context:* Een recruiter bekijkt het portfolio via een mobiele telefoon tijdens een korte pauze.  
  *Behoefte:* Snel een overzicht krijgen van de identiteit, vaardigheden en uitgevoerde projecten van de student.  
  *Oplossing in ontwerp:* Een duidelijke, responsive navigatie die op mobiele apparaten onder elkaar staan, en een directe link naar de projectenpagina op de Who Am I-pagina.

* **Gebruikersscenario 2 (Medestudent / Gastlezer):**  
  *Context:* Een medestudent zoekt op een laptop of desktop naar inhoudelijke kennis en artikelen over IT-onderwerpen.  
  *Behoefte:* Comfortabel en zonder afleiding de nieuwste blogposts kunnen lezen.  
  *Oplossing in ontwerp:* Een ruim opgezette desktop-layout met voldoende regelafstand, goede leesbaarheid en een heldere overzichtspagina voor blogs.


### mappenstructyuur 
de repository heb ik zo opgebouwd volgens de opdracht en de oefeninggen

```text
wpfw-opdracht-1/
├── css/
│   └── style.css       # hier word de opmaak van de website gemaakt
├── .gitignore          # Systeembestanden uitsluiten van versiebeheer
├── index.html          # Pagina 1: WhoAmI 
├── projecten.html      # Pagina 2: Projecten-overzicht
├── blog.html           # Pagina 3: Blog-overzicht
└── README.md           # stukje projectdocumentatie en verantwoording
------------------------------------------------------------------------------

Versiebeheer (Git) (dit schrijf ik ook voor mij zelf voor later)
ik heb het project via git gekoppeld aan Github.
net zoals het vorige project hotelsimulator heb ik ook het .getignor bestand erin gezet zodat Systeembestadnen worden uitgesloten tijdens het committen en pushen.


(dit is even voor mij zelf gaat later weg)
1. git init -opstartenb van de lokale repository
2. git add .  -Projectbestanden klaarzetten voor commit.
3. git commit -m "Initial commit: projectstructuur aangemaakt" – Eerste commit vastleggen.
4. git remote add origin https://github.com/Ferdous250/wpfw-opdracht-1.git – Remote koppelen.
5. git push origin develop – Uploaden van de bestanden naar de main-branch op GitHub.
