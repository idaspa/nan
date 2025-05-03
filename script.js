function navigateTo(category) {
    alert("You clicked " + category + ". Navigation logic to be added.");
  }
  
  function scrollCarousel(id) {
    const track = document.getElementById(id);
    track.scrollBy({ left: 220, behavior: 'smooth' });
  }
  
  document.getElementById("search")?.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    console.log("Searching for:", query);
    // Implement fuzzy search later
  });
  
  // Sample data rendering
  const siteData = {
    okonomi: [
      {
        name: "NAV",
        image: "images/nav.jpg",
        link: "https://www.nav.no/",
        tutorial: "tutorials/nav.html"
      },
      {
        name: "Altinn",
        image: "images/icon.webp",
        link: "https://info.altinn.no/",
        tutorial: "tutorials/altinn.html"
      },
       {
      name:"Agder Sparebank",
      image:"images/agder.png",
      link:"https://www.agdersparebank.no/",
      tutorial:""
    },
    {
      name:"Skatteetaten",
      image:"images/ss.jpeg",
      link:"https://www.skatteetaten.no/person/",
      tutorial:""
    },
  
    {
      name:"Coop",
      image:"images/coop.png",
      link:"https://www.coop.no/medlem",
      tutorial:""
    },
    {
      name:"Trumf",
      image:"images/tr.png",
      link:"https://www.trumf.no/",
      tutorial:""
    },
    {
      name:"Fortum",
      image:"images/for.png",
      link:"https://www.fortum.com/no/strom",
      tutorial:""
    },
    {
      name:"",
      image:"",
      link:"",
      tutorial:""
    },// Add more Økonomi websites here
    ],
    helsetjenester: [
      {
        name: "Helsenorge",
        image: "images/helsen.jpg",
        link: "https://www.helsenorge.no",
        tutorial: "tutorials/helsenorge.html"
      },
   
      {
        name:"Hisøy Legesenter",
        image:"images/his.png",
        link:"https://hisoylegesenter.no/",
        tutorial:""
      },
      
    
      // Add more Helsetjenester websites here
    ],
    hobby: [
      {
        name: "Garnius",
        image: "images/garn.png",
        link:"https://www.garnius.no/gratis-oppskrifter",
        tutorial:"",
      },
      
      {
        name: "StrikkeMekka",
        image: "images/strikk.png",
        link:"https://www.strikkemekka.no/kontaktoss",
        tutorial:"",
      },
      {
        name: "GarnStudio",
        image: "images/drops.png",
        link:"https://www.garnstudio.com/home.php?cid=1",
        tutorial:"",
      },
      {
        name: "",
        image: "",
        link:"",
        tutorial:"",
      },
      
    ],
    diverse: [
      {
        name:"Skilsø Ferga",
        image:"images/fergg.png",
        link:"https://www.skilsoferga.no/",
        tutorial:""
      },
      {
        name: "RSA BIL",
        image: "images/bil.jpg",
        link:"https://rsabil.no/forhandlere/arendal/",
        tutorial:"",
      },
      {
        name:"",
        image:"",
        link:"",
        tutorial:""
      },
      {
        name:"",
        image:"",
        link:"",
        tutorial:""
      },
        
      
  
    ],
  
    teknologi: [
      {
        name: "Telenor",
        image: "images/telenor.png",
        link:"https://www.telenor.no/privat/",
        tutorial:"",
      },
      {
        name:"",
        image:"",
        link:"",
        tutorial:""
      },
      {
        name:"",
        image:"",
        link:"",
        tutorial:""
      },
      {
        name:"",
        image:"",
        link:"",
        tutorial:""
      },
        
     
    ],
  
   
  
  
    hjelpesiden:[
      {
        name: "",
        image: "",
        link:"",
        tutorial:"",
      },
    ]
  
  };
  
  // Render carousel items dynamically
  function renderCarousel(trackId, websites) {
    const container = document.getElementById(trackId);
    if (!container) return;
  
    websites.forEach(site => {
      const div = document.createElement("div");
      div.className = "carousel-item";
      div.innerHTML = `
        <a href="${site.link}" target="_blank">
          <img src="${site.image}" alt="${site.name} Logo" class="site-logo">
        </a>
        <a href="${site.link}" target="_blank">${site.name}</a>
        <a href="${site.tutorial}" target="_blank"></a>
      `;
      container.appendChild(div);
    });
  }
  
  // Scroll function for carousel arrows
  function scrollCarousel(trackId, direction) {
    const track = document.getElementById(trackId);
    const scrollAmount = 220 * 2; // Adjust number of items visible per scroll
    if (track) {
      track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }
  
  // Optional: Basic search logging (placeholder for real search)
  document.getElementById("search")?.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    console.log("Searching for:", query);
    // TODO: Implement fuzzy search
  });
  
  // Render both Økonomi and Health carousels when page is loaded
  document.addEventListener("DOMContentLoaded", () => {
    renderCarousel("carousel-okonomi", siteData.okonomi);
    renderCarousel("carousel-helsetjenester", siteData.helsetjenester);
    renderCarousel("carousel-teknologi", siteData.teknologi);
    renderCarousel("carousel-diverse", siteData.diverse);
    renderCarousel("carousel-hobby",siteData.hobby);
  });