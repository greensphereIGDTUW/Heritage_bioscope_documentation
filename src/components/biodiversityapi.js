
const biodiversity = [
  {
    id: 1,
    Name: "Devil's eye",
    category: "Plant",
    scientificName: "Aureum",
    description:
      "Aurem plants, known for their striking golden foliage, add a touch of vibrant elegance to gardens and indoor spaces",
      image: "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512462/rl3rlmj2akh9rofhavje.jpg",
  },
  {
    id: 2,
    Name: "Arrowhead plant",
    category: "Plant",
    scientificName: "Syngonium podophyllum",
    description:
      "Syngonium podophyllum plant, features chameleon-like leaves that change shape as it matures, making it an attractive houseplant with the added benefit of efficient air purification.",
      image: "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512513/bleih1qb0byxe9hj51og.jpg",
  },
  {
    id: 3,
    Name: "Talipot Palm",
    category: "Plant",
    scientificName: "Corypha umbraculifera",
    description:
      "The Corypha umbraculifera plant, holds the record for producing the largest inflorescence in the plant kingdom, with some reaching up to 26 feet (about 8 meters) in height.",
      image: "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511616/ricfzrdjppduocqpy0p7.jpg",
  },
  {
    id: 4,
    Name: "Crown of thorns",
    category: "Plant",
    scientificName: "Euphorbia milii",
    description:
      "Euphorbia milii, is a resilient succulent known for its thorny stems and prolific, long-lasting blooms.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511543/et84cu9wrsq1hjmk8ks4.jpg",
  },
  {
    id: 5,
    Name: "Dwarf umbrella tree",
    category: "Tree",
    scientificName: "Schefflera arboricola",
    description:
      "Schefflera arboricola, is not only an aesthetically pleasing houseplant but is also known for its air-purifying qualities.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511628/sr0oski4etelpyt7werf.jpg",
  },
  {
    id: 6,
    Name: "Jatropha",
    category: "Plant",
    scientificName: "Jatropha curcas",
    description:
      "Jatropha curcas, known as the Physic Nut, is valued for its seeds that contain a biofuel-producing oil and its ability to thrive in arid conditions.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511624/occr6zgwaqzto21z6nkr.jpg",
  },
  {
    id: 7,
    Name: "False Ashoka",
    category: "Plant",
    scientificName: "Monoon longifolium",
    description:
      "False Ashoka (Polyalthia longifolia) resembles the sacred Ashoka tree and is admired for its graceful, slender form.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511665/jhuhydhhazo9belanfvg.jpg",
  },
  {
    id: 8,
    Name: "Cherry plant",
    category: "Plant",
    scientificName: "Prunus avium",
    description:
      "Prunus avium, the Sweet Cherry, is not only a delectable fruit but also boasts beautiful blossoms, marking the arrival of spring with its vibrant pink and white flowers.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511625/gvx63srcijaqlmjfvsia.jpg",
  },
  {
    id: 9,
    Name: "Good Luck Plant",
    category: "Plant",
    scientificName: "Cordyline fruticosa",
    description:
      "Cordyline fruticosa, the Ti plant, is not only admired for its decorative foliage but is also associated with Hawaiian culture, symbolizing good luck and prosperity.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511904/bfwg7v3zaanyeqljifpz.jpg",
  },
  {
    id: 10,
    Name: "Hibiscus",
    category: "Plant",
    scientificName: "Hibiscus rosa-sinensis",
    description:
      "Hibiscus rosa-sinensis, known for its showy, vibrant flowers, is not only a popular ornamental plant but is also used in various traditional medicines and beverages.",
    image:
      "https://drive.google.com/file/d/1HdhB1dy9zij5pE6hVE-2v5b8Hj2U0tZo/view?usp=sharing",
  },
  {
    id: 11,
    Name: "Dragon Tail Plant",
    category: "Plant",
    scientificName: "Epipremnum pinnatum",
    description:
      "The Dragon Tail Plant commonly refers to Epipremnum pinnatum, admired for its trailing vines and distinctive elongated leaves.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511871/xvt0k2zxcfkahgecmyn8.jpg",
  },
  {
    id: 12,
    Name: "Dumb Cane",
    category: "Plant",
    scientificName: "Dieffenbachia",
    description:
      "Dieffenbachia, commonly known as Dumb Cane, earned its name because of the toxic sap that can cause temporary loss of speech if ingested, emphasizing the importance of handling it with care.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511831/v1boxhv9cu2tyffurafn.jpg",
  },
  {
    id: 13,
    Name: "Cluster Fig",
    category: "Plant",
    scientificName: "Ficus racemosa",
    description:
      "Ficus racemosa, the Cluster Fig, plays a crucial role in ecosystems, providing a vital food source for various animals, including birds and bats, contributing to biodiversity.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712511838/d8udelx6vz4racijyxky.jpg",
  },
  {
    id: 14,
    Name: "Mango",
    category: "Plant",
    scientificName: "Genus Mangifera",
    description:
      "Mangifera, the genus encompassing the beloved mango, is not only one of the world's most consumed fruits but also boasts a rich cultural history, being cultivated for over 4,000 years.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512374/xe97hdxyd53koqig7kjq.jpg",
  },
  {
    id: 15,
    Name: "Traveler's Palm",
    category: "Plant",
    scientificName: "Ravenala madagascariensis",
    description:
      "Ravenala madagascariensis, known as the Traveler's Palm, is famous for its distinctive fan-shaped leaves arranged in an east-west alignment, providing a natural compass in Madagascar.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512308/bhonndgqvowqclvbwtvt.jpg",
  },
  {
    id: 16,
    Name: "Mediterranean Cypress",
    category: "Plant",
    scientificName: "Cupressus sempervirens",
    description:
      "Cupressus sempervirens, the Mediterranean Cypress, has been revered since ancient times and is associated with longevity; some trees are believed to have lived for over a thousand years.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512288/sas5blt52krgomseoyjy.jpg",
  },
  {
    id: 17,
    Name: "Randramboay",
    category: "Plant",
    scientificName: "Euphorbia lophogona",
    description:
      "Euphorbia lophogona, a lesser-known species, is valued for its unique, intricate geometric patterns formed by its branching structure.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512288/vurbfueuj5xzdhglhsch.jpg",
  },
  {
    id: 18,
    Name: "Tuberous Sword Fern",
    category: "Plant",
    scientificName: "Nephrolepis cordifolia",
    description:
      "Nephrolepis cordifolia, the Tuberous Sword Fern, is celebrated for its air-purifying qualities and elegant, arching fronds, adding a touch of lush greenery to indoor spaces.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512278/sorug6n1tgetydryyhly.jpg",
  },
  {
    id: 19,
    Name: "Shady hill greenhouses",
    category: "Plant",
    scientificName: "Perennials",
    description:
      "Shady Hill Greenhouses cultivates a diverse array of plants, fostering a green haven for enthusiasts and contributing to local biodiversity",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512257/mh3dkz3iu20ofwx7ptwq.jpg",
  },
  {
    id: 20,
    Name: "Spanish Dagger",
    category: "Plant",
    scientificName: "Yucca variegata",
    description:
      "The Spanish Dagger (Yucca variegata) boasts sharp, sword-like leaves and produces tall spikes of creamy-white flowers, adding a striking presence to arid landscapes.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512219/nvcukse4calb7kpn5p3q.jpg",
  },
  {
    id: 21,
    Name: "Baliospermum",
    category: "Plant",
    scientificName: "Baliospermum",
    description:
      "Baliospermum is a genus of flowering plants in the spurge family, known for its medicinal properties and ornamental value.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512201/asbzttaolfouk15xmaws.jpg",
  },
  {
    id: 22,
    Name: "Bougainvilleas",
    category: "Plant",
    scientificName: "Bougainvillea",
    description:
      "Bougainvilleas are popular ornamental vines and shrubs known for their vibrant colored bracts. Despite their colorful appearance, bougainvillea flowers are actually small and white, while the colorful bracts are modified leaves.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512255/hw664bz8t9fghedygbpg.jpg",
  },
  {
    id: 23,
    Name: "Century plant",
    category: "Plant",
    scientificName: "Agave americana",
    description:
      "Agave americana, commonly known as the Century Plant, is a species of flowering plant in the agave family, Agavaceae. The Century Plant typically lives for 10 to 30 years before flowering, not a century.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512207/jce1uzo14y0lhyj6tsoo.jpg",
  },
  {
    id: 24,
    Name: "Euphorbia milii",
    category: "Plant",
    scientificName: "Euphorbia milii",
    description:
      "Euphorbia milii is a resilient succulent, sometimes called the 'Crown of Thorns' due to its sharp thorns and biblical associations with the crown of thorns worn by Jesus.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512104/iqqj0vsgockzrbrqe59q.jpg",
  },
  {
    id: 25,
    Name: "Indian Laurel Fig",
    category: "Plant",
    scientificName: "Ficus amplissima",
    description:
      "Ficus amplissima, commonly known as the Indian Laurel Fig, is a species of fig tree native to Southeast Asia and the Indian subcontinent.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512130/gcuqgjwxfpvahhmc5vsa.jpg",
  },
  {
    id: 26,
    Name: "Weeping Fig",
    category: "Plant",
    scientificName: "Ficus benjamina",
    description:
      "Ficus benjamina, commonly known as the Weeping Fig, is a species of fig tree native to Southeast Asia and Australia. These are popular houseplants and are often used in bonsai cultivation due to their graceful appearance.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512143/ltrs7jzjbkb3pfio1oav.jpg",
  },
  {
    id: 27,
    Name: "Sycamore Fig",
    category: "Plant",
    scientificName: "Ficus drupacea",
    description:
      "Ficus drupacea, commonly known as the Sycamore Fig, is a species of fig tree native to Southeast Asia. They produce edible fruits that are enjoyed by various wildlife species, including birds and mammals.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512141/qfi0hhib9q8jlqchprp6.jpg",
  },
  {
    id: 28,
    Name: "Fukien Tea",
    category: "Plant",
    scientificName: "Carmona Retusa",
    description:
      "Carmona Retusa, commonly known as the Fukien Tea, is a species of flowering plant in the borage family, Boraginaceae. These plants are often cultivated as bonsai trees and are prized for their small, glossy leaves and delicate white flowers.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512143/dw3pvxtutxn2iiozt53s.jpg",
  },
  {
    id: 29,
    Name: "Henry's Honeysuckle",
    category: "Plant",
    scientificName: "Lonicera henryi",
    description:
      "Lonicera henryi, commonly known as Henry's Honeysuckle, is a species of honeysuckle native to China. They are valued for their fragrant flowers, which attract pollinators such as bees and butterflies.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512106/kupnsntorvnlgoanf6mm.jpg",
  },
  {
    id: 30,
    Name: "Angola Caper",
    category: "Plant",
    scientificName: "Maerua angolensis",
    description:
      "Maerua angolensis, commonly known as the Angola Caper, is a species of flowering plant in the caper family, Capparaceae, native to southern Africa. They produce edible fruits that are consumed by various animals, including birds and mammals.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512868/f5dxkjp40obfms7ptsrz.jpg",
  },
  {
    id: 31,
    Name: "Ashoka tree",
    category: "Plant",
    scientificName: "Saraca asoca",
    description:
      "Saraca asoca, commonly known as the Ashoka tree, is a species of flowering plant in the Fabaceae family, native to the Indian subcontinent. The Ashoka tree holds great cultural significance in Hindu mythology and is associated with love, fertility, and prosperity.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512884/xyzsqpgje6h4l7vc5v9e.jpg",
  },
  {
    id: 32,
    Name: "Siamese cassia",
    category: "Plant",
    scientificName: "Senna siamea",
    description:
      "Senna siamea, commonly known as Siamese cassia, is a species of flowering plant in the legume family, Fabaceae, native to South and Southeast Asia. They are used in agroforestry systems to provide shade and improve soil fertility.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512867/tzjvtmhjxvvoxefgi5mp.jpg",
  },
  {
    id: 33,
    Name: "Grand Devil's Claws",
    category: "Plant",
    scientificName: "Pisonia grandis",
    description:
      "Pisonia grandis, commonly known as the Grand Devil's Claws, is a species of flowering plant in the four o'clock family, Nyctaginaceae, native to the Pacific Islands and eastern Australia. The sticky seeds of the Grand Devil's Claws can attach to the feathers of birds, facilitating seed dispersal over long distances.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512814/hul02zsnhopnczcqd8qu.jpg",
  },
  {
    id: 34,
    Name: "Copperleaf",
    category: "Plant",
    scientificName: "Acalypha wilkesiana",
    description:
      "Acalypha wilkesiana, commonly known as Copperleaf or Jacob's coat, is a species of flowering plant in the family Euphorbiaceae, native to eastern Australia. Copperleaf plants are valued for their colorful foliage and are often used as ornamental plants in gardens and landscapes.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512823/ze3liihqjicjlt1ki1o4.jpg",
  },
  {
    id: 35,
    Name: "Bleeding Heart Vine",
    category: "Plant",
    scientificName: "Clerodendrum thomsoniae",
    description:
      "Clerodendrum thomsoniae, commonly known as Bleeding Heart Vine, is a species of flowering plant in the Lamiaceae family, native to tropical West Africa. They produce striking red and white flowers that resemble bleeding hearts, hence its common name.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512870/b13cxzdczn4unhf6kpj1.jpg",
  },
  {
    id: 36,
    Name: "Banana Leaf Fig",
    category: "Plant",
    scientificName: "Ficus maclellandii",
    description:
      "Ficus maclellandii, commonly known as Banana Leaf Fig, is a species of fig tree native to India, Southeast Asia, and China. They are often grown as a houseplant and are prized for its large, glossy leaves that resemble banana leaves.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512800/oufusroiy32briv6ucwc.jpg",
  },
  {
    id: 37,
    Name: "African False Ebony",
    category: "Plant",
    scientificName: "Pseudolachnostylis maprouneifolia",
    description:
      "Pseudolachnostylis maprouneifolia, commonly known as the African False Ebony, is a species of flowering plant in the family Euphorbiaceae, native to southern Africa. The wood of the African False Ebony is used in woodworking and is prized for its dark color and durability.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512786/fjpzixkhtv8bjapuzxcp.jpg",
  },
  {
    id: 38,
    Name: "Winged Elm",
    category: "Plant",
    scientificName: "Pterygota alata",
    description:
      "Pterygota alata, commonly known as the Winged Elm, is a species of tree in the family Sterculiaceae, native to tropical Africa. The Winged Elm gets its name from the distinctive wings along its branches, which are flattened extensions of the leaf stalks.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512799/d5tnzbvgmel5xgvhbnkr.jpg",
  },
  {
    id: 39,
    Name: "Fishtail Palm",
    category: "Plant",
    scientificName: "Caryota mitis",
    description:
      "Caryota mitis, commonly known as the Fishtail Palm or Clustered Fishtail Palm, is a species of palm native to Southeast Asia and the Indian subcontinent. The Fishtail Palm gets its name from the unique fishtail-shaped leaflets that adorn its fronds, giving it a distinctive appearance.",
    image: "images/Arrowheadplant.jpg",
    
  },
  {
    id: 40,
    Name: "Suicidal palm tree",
    category: "Plant",
    scientificName: "Mortifera Palmis",
    description:
      "The Mortifera Palmis, also known as the Suicidal palm tree, is a unique species known for its peculiar behavior of shedding its leaves and appearing lifeless during droughts. However, it miraculously rejuvenates with heavy rainfall, symbolizing resilience and rebirth.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512741/rmzo6hkhxfvdohn4epiu.jpg",
  },
  {
    id: 41,
    Name: "Curtain creeper",
    category: "Plant",
    scientificName: "Vernonia Elaeagnifolia",
    description:
      "Vernonia Elaeagnifolia, commonly known as the Curtain creeper, is a vigorous climbing plant with small purple flowers. It is often used to create natural curtains due to its dense foliage, providing shade and privacy in gardens and landscapes.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512731/oavrpvzpuydcu40ukdi5.jpg",
  },
  {
    id: 42,
    Name: "Century plant",
    category: "Plant",
    scientificName: "Agave americana",
    description:
      "Agave americana, also known as the Century plant, is a striking succulent with spiky blue-green leaves arranged in a rosette pattern. It is native to Mexico but is cultivated worldwide for its ornamental value and the production of fibers and alcoholic beverages.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712595513/Agave_americana_hmzc9f.png",
  },
  {
    id: 43,
    Name: "Bougainvillea",
    category: "Plant",
    scientificName: "Bougainvillea glabra",
    description:
      "Bougainvillea glabra, commonly referred to as Bougainvillea, is a vibrant and vigorous flowering plant native to South America. It is renowned for its stunning clusters of papery bracts that come in a variety of colors, including shades of pink, red, purple, and orange, which surround its small, inconspicuous flowers. Bougainvillea is often used as a decorative climber or as a colorful shrub in gardens and landscapes, adding a touch of tropical beauty to any environment.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712595934/Bougainvillea_glabra_bn3wbo.png",
  },
  {
    id: 44,
    Name: "Red Powder Puff",
    category: "Plant",
    scientificName: "Calliandra haematocephala",
    description:
      "Calliandra haematocephala, also known as Red Powder Puff, is a tropical shrub admired for its striking spherical clusters of bright red flowers, resembling powder puffs. Native to South America, it is widely cultivated in tropical and subtropical regions for its ornamental value. The attractive blooms of the Red Powder Puff make it a popular choice for adding a splash of color to gardens, landscapes, and hedges.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512700/ikgjydtxofir2nilkeyz.jpg",
  },
  {
    id: 45,
    Name: "Tropicanna Lily",
    category: "Plant",
    scientificName: "Canna Tropicanna",
    description:
      "Canna Tropicanna, also known as Tropicanna Lily, is a stunning perennial plant prized for its vibrant and exotic foliage. With its bold striped leaves in shades of green, orange, red, and yellow, Tropicanna Lily adds a tropical flair to gardens and landscapes. In addition to its striking foliage, it produces vibrant orange flowers that attract pollinators like bees and butterflies. This versatile plant thrives in sunny locations and moist soil, making it an excellent choice for adding color and drama to garden beds, borders, and containers.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512671/ejnkuep5re0a9shtieqg.jpg",
  },
  {
    id: 46,
    Name: "Bird's Eye Chili",
    category: "Plant",
    scientificName: "Capsicum frutescens",
    description:
      "Capsicum frutescens, also known as Bird's Eye Chili, is a small chili pepper species native to South America. It is characterized by its small, slender fruits that grow in clusters and pack a fiery punch. Bird's Eye Chili is widely used in various cuisines around the world to add heat and flavor to dishes. In addition to its culinary uses, it is also valued for its ornamental appeal when grown as a potted plant or in garden beds.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512690/hvvtqpku5izzw21zdnpn.jpg",
  },
  {
    id: 47,
    Name: "Madagascar Periwinkle",
    category: "Plant",
    scientificName: "Catharanthus roseus",
    description:
      "Catharanthus roseus, commonly known as Madagascar Periwinkle, is a colorful and resilient flowering plant native to Madagascar. It is prized for its small, star-shaped flowers that come in shades of pink, purple, and white, adding a vibrant splash of color to gardens and landscapes. In addition to its ornamental value, Madagascar Periwinkle is known for its medicinal properties, as it contains compounds used in the production of medications for various ailments, including cancer. It thrives in warm climates and is often grown as an annual or perennial in gardens, borders, and containers.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512653/bffqpzibpurxtqll5pok.jpg",
  },
  {
    id: 48,
    Name: "Swamp Cyrilla",
    category: "Plant",
    scientificName: "Cyrilla racemiflora",
    description:
      "Cyrilla racemiflora, also known as Swamp Cyrilla or Swamp Titberry, is a deciduous shrub or small tree native to the southeastern United States. It is characterized by its attractive white flowers arranged in racemes and its smooth, peeling bark that adds visual interest to wetland habitats. Swamp Cyrilla is valued for its ornamental qualities and is often planted in moist or boggy areas, such as along stream banks or in wetland gardens, where it provides habitat for wildlife and contributes to ecosystem diversity.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512654/orqrvksjxqqahr0tgu0e.jpg",
  },
  {
    id: 49,
    Name: "Monkey",
    category: "Animal",
    description:
      "Monkeys are a diverse group of mammals belonging to the primate order. They are known for their intelligence, dexterity, and arboreal lifestyle. Monkeys inhabit various habitats, including tropical rainforests, savannas, and mountains, and they display a wide range of behaviors and social structures.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512666/aijfrgttxfwhevvqijci.jpg",
  },
  {
    id: 50,
    Name: "Dog",
    category: "Animal",
    description:
      "Dogs are domesticated mammals known for their loyalty, companionship, and versatility. They belong to the Canidae family and have been bred for various purposes, including hunting, herding, guarding, and as pets. Dogs come in a wide range of breeds, sizes, and coat types, and they have a strong bond with humans.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712598791/Dog_ugyrge.png",
  },
  {
    id: 51,
    Name: "Squirrel",
    category: "Animal",
    description:
      "Squirrels are small to medium-sized rodents found in various habitats worldwide, including forests, parks, and urban areas. They are known for their bushy tails, agility, and tendency to hoard food. Squirrels play important roles in ecosystems as seed dispersers and prey for predators.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512618/dr3xvsvpfprn6guqqjhb.jpg",
  },
  {
    id: 52,
    Name: "Parrot",
    category: "Bird",
    description:
      "Parrots are colorful birds belonging to the Psittacidae family, known for their ability to mimic human speech and their vibrant plumage. They are found in tropical and subtropical regions worldwide and inhabit diverse habitats, including forests, grasslands, and savannas. Parrots are highly intelligent and social birds, often forming strong bonds with their human companions.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512660/a0b0pmffcdva0vyi33bl.jpg",
  },
  {
    id: 53,
    Name: "Crow",
    category: "Bird",
    description:
      "Crows are black birds belonging to the Corvidae family, known for their intelligence, adaptability, and loud cawing calls. They are found in various habitats worldwide, including urban areas, forests, and farmlands. Crows are omnivorous and play important roles in ecosystems as scavengers, predators, and seed dispersers.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512601/vvcqmmar6f2cgxgfnihx.jpg",
  },
  {
    id: 54,
    Name: "Eagle",
    category: "Bird",
    description:
      "Eagles are large birds of prey belonging to the Accipitridae family, known for their powerful beaks, keen eyesight, and impressive soaring abilities. They are apex predators found on every continent except Antarctica and inhabit various habitats, including mountains, forests, and coastlines. Eagles are symbols of strength, freedom, and majesty.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512642/h8yak3kthd7ahbfyryir.jpg",
  },
  {
    id: 55,
    Name: "Myna",
    category: "Bird",
    description:
      "Mynas are medium-sized birds belonging to the starling family, Sturnidae. They are native to Asia and parts of Africa, with several species introduced to other regions. Mynas are known for their glossy black plumage, bright yellow eyes, and distinctive yellow skin patches behind their eyes. They have a strong, versatile voice and are capable of mimicking a wide range of sounds, including human speech. Mynas are highly adaptable birds commonly found in urban areas, where they thrive in a variety of habitats, from parks and gardens to agricultural fields and city streets.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512622/dz5rguxxq4h6q9hxg8vy.jpg",
  },
  {
    id: 56,
    Name: "Pigeon",
    category: "Bird",
    description:
      "Pigeons, also known as rock doves, are stout-bodied birds belonging to the Columbidae family. They are found in urban areas worldwide and are known for their gray plumage, distinctive cooing calls, and homing abilities. Pigeons have long been domesticated and used for various purposes, including racing, messenger service, and as pets.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512678/k20ixz1zcdca4cfymghf.jpg",
  },
  {
    id: 57,
    Name: "Cat",
    category: "Animal",
    description:
      "Cats are small, carnivorous mammals known for their agility, grace, and independent nature. They are one of the most popular pets worldwide and have been domesticated for thousands of years. Cats come in various breeds, sizes, and coat patterns, and they are valued for their companionship, hunting skills, and ability to control pests.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512595/knqvnenu1bner9ajlzoy.jpg",
  },
  {
    id: 58,
    Name: "Honey Bee",
    category: "Insect",
    description:
      "Honey bees are flying insects known for their role in pollination and honey production. They belong to the Apidae family and are found in various habitats worldwide. Honey bees live in colonies organized around a queen, workers, and drones. They collect nectar and pollen from flowers and convert it into honey, a valuable food source for humans and other animals.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512601/c6hkde12h7wh2jlu0pgu.jpg",
  },
  {
    id: 59,
    Name: "Caterpillar",
    category: "Insect",
    description:
      "Caterpillars are the larval stage of butterflies and moths, belonging to the order Lepidoptera. They are known for their worm-like appearance, segmented bodies, and voracious appetites. Caterpillars feed on plant leaves and other organic matter, growing rapidly before pupating and undergoing metamorphosis into adult butterflies or moths.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512589/i8nmmizvxvkfqd1nw3gq.jpg",
  },
  {
    id: 60,
    Name: "Ladybug",
    category: "Insect",
    description:
      "Ladybugs, also known as ladybirds or lady beetles, are small beetles belonging to the Coccinellidae family. They are known for their brightly colored bodies, usually red or orange, with black spots. Ladybugs are beneficial insects that feed on aphids, mites, and other plant pests, making them valuable allies in agriculture and gardening.",
    image:
      "https://res.cloudinary.com/dsw44p72j/image/upload/v1712512606/sq0xuzgju2paoxaznjs4.jpg",
  },
];

export default biodiversity;
