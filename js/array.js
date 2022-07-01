// OBJETOS

// ---  microprocesador ---
const array = [
  (micro = [
    {
      id: 1,
      name: "Micro AMD athlon 3000G 3.5 Ghz AM4",
      img: "../img/componentes/micro/micro-1.jpg",
      precio: 19750,
    },
    {
      id: 2,
      name: "Micro AMD Ryzen 5 4600G 4.2 Ghz AM4",
      img: "../img/componentes/micro/micro-2.jpg",
      precio: 27770,
    },
    {
      id: 3,
      name: "Micro AMD Ryzen 7 4750G Pro 3.6 Ghz AM4 OEM",
      img: "../img/componentes/micro/micro-3.jpg",
      precio: 43150,
    },
    {
      id: 4,
      name: "Micro AMD Ryzen 9 5900x 4.8 Ghz AM4",
      img: "../img/componentes/micro/micro-4.jpg",
      precio: 77038,
    },
  ]),
  // --- cooler ---
  (cooler = [
    {
      id: 11,
      name: "No Incluir Cooler",
      img: "../img/componentes/cooler/cooler-1.svg",
      precio: 0,
    },
    {
      id: 12,
      name: "CPU Cooler Xigmatek WindPower WP963 RGB",
      img: "../img/componentes/cooler/cooler-2.jpg",
      precio: 3380,
    },
    {
      id: 13,
      name: "CPU Water Cooler Thermaltake TH120 ARGB",
      img: "../img/componentes/cooler/cooler-3.jpg",
      precio: 15800,
    },
    {
      id: 14,
      name: "CPU Water Cooler ASUS TUF LC 120 RGB",
      img: "../img/componentes/cooler/cooler-4.jpg",
      precio: 23500,
    },
  ]),
  (motherboard = [
    {
      id: 21,
      name: "Motherboard Arock B450M PRO4 AM4",
      img: "../img/componentes/mother/mother-1.jpg",
      precio: 12350,
    },
    {
      id: 22,
      name: "Motherboard Asus B450M-A Primer || AM4",
      img: "../img/componentes/mother/mother-2.jpg",
      precio: 13150,
    },
    {
      id: 23,
      name: "Motherboard Asus B550M-k Prime AM4",
      img: "../img/componentes/mother/mother-3.jpg",
      precio: 15149,
    },
    {
      id: 24,
      name: "Motherboard Gigabyte B550 Aorus Elite AX V2 AM4",
      img: "../img/componentes/mother/mother-4.jpg",
      precio: 36750,
    },
  ]),
  (ram = [
    {
      id: 30,
      name: "No incluir Memoria RAM",
      img: "../img/componentes/ram/noRam.svg",
      precio: 0,
    },
    {
      id: 31,
      name: "Memoria Ram Kingston 4GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-1.jpg",
      precio: 3850,
    },
    {
      id: 32,
      name: "Memoria Ram PNY Performance 8GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-2.jpg",
      precio: 5650,
    },
    {
      id: 33,
      name: "Memoria Ram Adata Xpg SPECTRIX D60 RGB 8GB 3200 Mhz DDR4",
      img: "../img/componentes/ram/ram-3.jpg",
      precio: 7540,
    },
    {
      id: 34,
      name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
      img: "../img/componentes/ram/ram-4.jpg",
      precio: 22655,
    },
  ]),
  (ram2 = [
    {
      id: 30,
      name: "No incluir Segunda Memoria RAM",
      img: "../img/componentes/ram/noRam.svg",
      precio: 0,
    },
    {
      id: 31,
      name: "Memoria Ram Kingston 4GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-1.jpg",
      precio: 3850,
    },
    {
      id: 32,
      name: "Memoria Ram PNY Performance 8GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-2.jpg",
      precio: 5650,
    },
    {
      id: 33,
      name: "Memoria Ram Adata Xpg SPECTRIX D60 RGB 8GB 3200 Mhz DDR4",
      img: "../img/componentes/ram/ram-3.jpg",
      precio: 7540,
    },
    {
      id: 34,
      name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
      img: "../img/componentes/ram/ram-4.jpg",
      precio: 22655,
    },
  ]),
  (video = [
    {
      id: 41,
      name: "No Incluir Placa de Video",
      img: "../img/componentes/placaVideo/noPlaca.svg",
      precio: 0,
    },
    {
      id: 42,
      name: "Placa de Video Asus Nvidia Geforce GTX 1650 OC 4GB GDDR6",
      img: "../img/componentes/placaVideo/video-2.jpg",
      precio: 49900,
    },
    {
      id: 43,
      name: "Placa de Video PNY RTX 3060 Ti UPRISING Fan 8GB GDDR6 LHR",
      img: "../img/componentes/placaVideo/video-3.jpg",
      precio: 116000,
    },
    {
      id: 44,
      name: "Placa de Video PNY Geforce RTX 3080 Ti XLR8 Gaming REVEL EPIC-X RGB 12GB GDDR6X",
      img: "../img/componentes/placaVideo/video-4.jpg",
      precio: 224000,
    },
  ]),
  (disco = [
    {
      id: 51,
      name: "No agregar Disco",
      img: "../img/componentes/disco/noDisco.svg",
      precio: 0,
    },
    {
      id: 52,
      name: "Disco solido SSD 240GB Kingston A400 SATA III",
      img: "../img/componentes/disco/disco-1.jpg",
      precio: 4550,
    },
    {
      id: 53,
      name: "Disco Rigido 1TB Western Digital Blue",
      img: "../img/componentes/disco/disco-2.jpg",
      precio: 6250,
    },
    {
      id: 54,
      name: "Disco Solido SSD 512GB Gigabyte M.2 NVMe PCIe x4 3.0",
      img: "../img/componentes/disco/disco-3.jpg",
      precio: 9850,
    },
  ]),
  (fuente = [
    {
      id: 61,
      name: "No agregar fuente",
      img: "../img/componentes/fuente/noFuente.svg",
      precio: 0,
    },
    {
      id: 62,
      name: "Fuente 600W Thermaltake Smart 80 PLUS White",
      img: "../img/componentes/fuente/fuente-1.jpg",
      precio: 9239,
    },
    {
      id: 63,
      name: "Fuente 750W Gigabyte AORUS AP750GM 80 PLUS GOLD",
      img: "../img/componentes/fuente/fuente-2.jpg",
      precio: 23998,
    },
    {
      id: 64,
      name: "Fuente 850W Seasonic Focus 850 80 PLUS Gold",
      img: "../img/componentes/fuente/fuente-3.jpg",
      precio: 34580,
    },
  ]),
  (gabinete = [
    {
      id: 71,
      name: "No incluir Gabinete",
      img: "../img/componentes/gabinete/noGabinete.svg",
      precio: 0,
    },
    {
      id: 72,
      name: "Gabinete Kiy BRB SB-30 500W Gen",
      img: "../img/componentes/gabinete/gabinete-1.jpg",
      precio: 4950,
    },
    {
      id: 73,
      name: "Gabinete Gamer FALCOM G-8012 RAINBOW",
      img: "../img/componentes/gabinete/gabinete-2.jpg",
      precio: 7079,
    },
    {
      id: 74,
      name: "Gabinete Xigmatek Gaming X 6 Fan Edition - No LED",
      img: "../img/componentes/gabinete/gabinete-3.jpg",
      precio: 9308,
    },
  ]),
];

const listArr = [
  {
    id: 1,
    name: "Micro AMD athlon 3000G 3.5 Ghz AM4",
    img: "../img/componentes/micro/micro-1.jpg",
    precio: 19750,
  },
  {
    id: 2,
    name: "Micro AMD Ryzen 5 4600G 4.2 Ghz AM4",
    img: "../img/componentes/micro/micro-2.jpg",
    precio: 27770,
  },
  {
    id: 3,
    name: "Micro AMD Ryzen 7 4750G Pro 3.6 Ghz AM4 OEM",
    img: "../img/componentes/micro/micro-3.jpg",
    precio: 43150,
  },
  {
    id: 4,
    name: "Micro AMD Ryzen 9 5900x 4.8 Ghz AM4",
    img: "../img/componentes/micro/micro-4.jpg",
    precio: 77038,
  },

  // --- cooler ---

  {
    id: 11,
    name: "No Incluir Cooler",
    img: "../img/componentes/cooler/cooler-1.svg",
    precio: 0,
  },
  {
    id: 12,
    name: "CPU Cooler Xigmatek WindPower WP963 RGB",
    img: "../img/componentes/cooler/cooler-2.jpg",
    precio: 3380,
  },
  {
    id: 13,
    name: "CPU Water Cooler Thermaltake TH120 ARGB",
    img: "../img/componentes/cooler/cooler-3.jpg",
    precio: 15800,
  },
  {
    id: 14,
    name: "CPU Water Cooler ASUS TUF LC 120 RGB",
    img: "../img/componentes/cooler/cooler-4.jpg",
    precio: 23500,
  },

  // motherboard
  {
    id: 21,
    name: "Motherboard Arock B450M PRO4 AM4",
    img: "../img/componentes/mother/mother-1.jpg",
    precio: 12350,
  },
  {
    id: 22,
    name: "Motherboard Asus B450M-A Primer || AM4",
    img: "../img/componentes/mother/mother-2.jpg",
    precio: 13150,
  },
  {
    id: 23,
    name: "Motherboard Asus B550M-k Prime AM4",
    img: "../img/componentes/mother/mother-3.jpg",
    precio: 15149,
  },
  {
    id: 24,
    name: "Motherboard Gigabyte B550 Aorus Elite AX V2 AM4",
    img: "../img/componentes/mother/mother-4.jpg",
    precio: 36750,
  },
  // ram
  {
    id: 30,
    name: "No incluir Memoria RAM",
    img: "../img/componentes/ram/noRam.svg",
    precio: 0,
  },
  {
    id: 31,
    name: "Memoria Ram Kingston 4GB 2666 Mhz DDR4",
    img: "../img/componentes/ram/ram-1.jpg",
    precio: 3850,
  },
  {
    id: 32,
    name: "Memoria Ram PNY Performance 8GB 2666 Mhz DDR4",
    img: "../img/componentes/ram/ram-2.jpg",
    precio: 5650,
  },
  {
    id: 33,
    name: "Memoria Ram Adata Xpg SPECTRIX D60 RGB 8GB 3200 Mhz DDR4",
    img: "../img/componentes/ram/ram-3.jpg",
    precio: 7540,
  },
  {
    id: 34,
    name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
    img: "../img/componentes/ram/ram-4.jpg",
    precio: 22655,
  },
  // video
  {
    id: 41,
    name: "No Incluir Placa de Video",
    img: "../img/componentes/placaVideo/noPlaca.svg",
    precio: 0,
  },
  {
    id: 42,
    name: "Placa de Video Asus Nvidia Geforce GTX 1650 OC 4GB GDDR6",
    img: "../img/componentes/placaVideo/video-2.jpg",
    precio: 49900,
  },
  {
    id: 43,
    name: "Placa de Video PNY RTX 3060 Ti UPRISING Fan 8GB GDDR6 LHR",
    img: "../img/componentes/placaVideo/video-3.jpg",
    precio: 116000,
  },
  {
    id: 44,
    name: "Placa de Video PNY Geforce RTX 3080 Ti XLR8 Gaming REVEL EPIC-X RGB 12GB GDDR6X",
    img: "../img/componentes/placaVideo/video-4.jpg",
    precio: 224000,
  },
  // disco
  {
    id: 51,
    name: "No agregar Disco",
    img: "../img/componentes/disco/noDisco.svg",
    precio: 0,
  },
  {
    id: 52,
    name: "Disco solido SSD 240GB Kingston A400 SATA III",
    img: "../img/componentes/disco/disco-1.jpg",
    precio: 4550,
  },
  {
    id: 53,
    name: "Disco Rigido 1TB Western Digital Blue",
    img: "../img/componentes/disco/disco-2.jpg",
    precio: 6250,
  },
  {
    id: 54,
    name: "Disco Solido SSD 512GB Gigabyte M.2 NVMe PCIe x4 3.0",
    img: "../img/componentes/disco/disco-3.jpg",
    precio: 9850,
  },
  //fuente
  {
    id: 61,
    name: "No agregar fuente",
    img: "../img/componentes/fuente/noFuente.svg",
    precio: 0,
  },
  {
    id: 62,
    name: "Fuente 600W Thermaltake Smart 80 PLUS White",
    img: "../img/componentes/fuente/fuente-1.jpg",
    precio: 9239,
  },
  {
    id: 63,
    name: "Fuente 750W Gigabyte AORUS AP750GM 80 PLUS GOLD",
    img: "../img/componentes/fuente/fuente-2.jpg",
    precio: 23998,
  },
  {
    id: 64,
    name: "Fuente 850W Seasonic Focus 850 80 PLUS Gold",
    img: "../img/componentes/fuente/fuente-3.jpg",
    precio: 34580,
  },
  //gabinetes
  {
    id: 71,
    name: "No incluir Gabinete",
    img: "../img/componentes/gabinete/noGabinete.svg",
    precio: 0,
  },
  {
    id: 72,
    name: "Gabinete Kiy BRB SB-30 500W Gen",
    img: "../img/componentes/gabinete/gabinete-1.jpg",
    precio: 4950,
  },
  {
    id: 73,
    name: "Gabinete Gamer FALCOM G-8012 RAINBOW",
    img: "../img/componentes/gabinete/gabinete-2.jpg",
    precio: 7079,
  },
  {
    id: 74,
    name: "Gabinete Xigmatek Gaming X 6 Fan Edition - No LED",
    img: "../img/componentes/gabinete/gabinete-3.jpg",
    precio: 9308,
  },
];

export { array, listArr };
