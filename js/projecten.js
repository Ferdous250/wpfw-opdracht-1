// 1. Databron met informatie per week (Array van objecten)
const wekenData = [
  {
    week: "Week 1",
    titel: "Opzet Portfolio & HTML-structuur",
    inhoud: ` week 1 was het even weer terug gaan naar de basis denk bijvoorbeeld aan hoe DNS domeinnamen omzet naar IP-adressen, en hoe TCP met een three-way handschake verbindingen opzet.
             ook ontdekte ik hoe HTTP(S) wekt, inclusief verzoeken, antwoorden, statuscodes (zoals 200 en 404) en URL-structuren. in de praktijk lessen heb lokaal een 'Hllo, world' pagina gemaakt en getest in de browser.`
  },
{
  week: "Week 2",
  titel: "CSS Layout & Responsive Design",
  inhoud: `In de tweede week ben ik aan de slag gegaan met HTML en CSS. Ik heb ontdekt dat je met HTML de structuur en de inhoud van je pagina opbouwt.
  Door semantische elementen te gebruiken zoals <header>, <nav>, <main>, <section> en <footer> kan ik de inhoud beter organiseren en de toegankelijkheid verbeteren.
  Ook heb ik geleerd hoe je bestanden juist aan elkaar koppelt met paden en hoe je media zoals afbeeldingen en video's toevoegt. Daarnaast heb ik geleerd hoe je een site mooi maakt met CSS via een los stijlbestand. Ik snap nu hoe het 'box model' werkt met randen en afstanden (padding en margin), en dat box-sizing: border-box voorkomt dat vakjes onverwachts groter worden dan je wilt. Om onderdelen netjes naast elkaar te zetten, heb ik Flexbox gebruikt.`
},
  {
    week: "Week 3",
    titel: "DOM-interactie & Dynamische Content",
    inhoud: "In week 3 ben ik gestart met JavaScript (ES6+). De projecten/weken worden nu dynamisch vanuit een datastructuur naar de DOM gerenderd en kunnen worden in- en uitgeklapt."
  }
];

// 2. Functie om de weekblokken dynamisch te renderen
function renderWeken() {
  const container = document.getElementById("weken-container");
  if (!container) return;

  // Leeg de container eerst
  container.innerHTML = "";

  // Loop door de data en maak DOM-elementen aan
  wekenData.forEach((item) => {
    // Maak hoofdkaart
    const card = document.createElement("div");
    card.classList.add("week-card");

    // Maak de inklapbare knop (Header)
    const button = document.createElement("button");
    button.classList.add("week-header");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = `
      <span><strong>${item.week}</strong>: ${item.titel}</span>
      <span class="pijl">▼</span>
    `;

    //  inhoudsblok
    const content = document.createElement("div");
    content.classList.add("week-content");
    
    const paragraph = document.createElement("p");
    paragraph.textContent = item.inhoud;
    content.appendChild(paragraph);

    // Event Listener voor het in- en uitklappen
    button.addEventListener("click", () => {
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", isOpen ? "true" : "false"); //
      content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0"; //
    });

    // Voegt de knop en inhoud toe aan de kaart, en de kaart aan de container
    card.appendChild(button);
    card.appendChild(content); //
    container.appendChild(card);
  });
}

// 3. Voer de functie uit zodra de DOM geladen is
document.addEventListener("DOMContentLoaded", renderWeken); //