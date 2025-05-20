document.addEventListener('DOMContentLoaded', () => {
    // Banco de dados de fungos
    const fungiDatabase = [
        {
            id: 1,
            name: "Amanita muscaria",
            commonName: "Amanita vermelha",
            region: ["norte", "sudeste", "sul"],
            color: "vermelho",
            habitat: ["floresta"],
            description: "Cogumelo icônico com chapéu vermelho e pintas brancas. Possui propriedades psicoativas e é considerado tóxico.",
            edible: false,
            poisonous: true,
            characteristics: "Chapéu vermelho com manchas brancas, lamelas brancas, estipe branco",
            country: "Encontrado em diversos países como Rússia, Suécia, Finlândia e América do Norte",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/0/02/2006-10-25_Amanita_muscaria_crop.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg"
            ]
        },
        {
            id: 2,
            name: "Pleurotus ostreatus",
            commonName: "Cogumelo ostra",
            region: ["nordeste", "sudeste", "sul", "centro-oeste"],
            color: "branco",
            habitat: ["madeira", "floresta"],
            description: "Cogumelo comestível e de sabor delicado, muito apreciado na culinária. Cresce em cachos sobre troncos de árvores.",
            edible: true,
            poisonous: false,
            characteristics: "Forma de leque ou ostra, crescem em cachos, cor branca a cinza-azulada",
            country: "Amplamente distribuído, originário da Europa, Ásia e América do Norte",
            images: [
                "images/Cogumelo-ostra-Pleurotus-ostreatus.png",
                "images/cogu_ostra.png"
            ],
            recipes: [
                {
                    name: "Cogumelos Ostra Grelhados com Alho",
                    ingredients: [
                        "500g de cogumelos ostra",
                        "4 dentes de alho picados",
                        "2 colheres de sopa de azeite",
                        "Sal e pimenta a gosto",
                        "Salsinha picada"
                    ],
                    instructions: "1. Limpe os cogumelos e corte os maiores ao meio\n2. Aqueça o azeite em uma frigideira\n3. Adicione o alho e doure levemente\n4. Acrescente os cogumelos e grelhe por 5-7 minutos\n5. Tempere com sal e pimenta\n6. Finalize com salsinha"
                },
                {
                    name: "Risoto de Cogumelos Ostra",
                    ingredients: [
                        "300g de cogumelos ostra",
                        "1 xícara de arroz arbóreo",
                        "1/2 cebola picada",
                        "2 dentes de alho",
                        "1/2 xícara de vinho branco",
                        "4 xícaras de caldo de legumes",
                        "Queijo parmesão ralado",
                        "Manteiga",
                        "Sal e pimenta"
                    ],
                    instructions: "1. Refogue a cebola e o alho na manteiga\n2. Adicione o arroz e doure\n3. Acrescente o vinho e deixe evaporar\n4. Adicione o caldo aos poucos, mexendo sempre\n5. Na metade do cozimento, adicione os cogumelos\n6. Finalize com parmesão e manteiga"
                }
            ]
        },
        {
            id: 3,
            name: "Pycnoporus sanguineus",
            commonName: "Orelha de pau",
            region: ["norte", "nordeste", "centro-oeste", "sudeste", "sul"],
            color: "laranja",
            habitat: ["madeira", "floresta"],
            description: "Fungo comum em troncos mortos, reconhecido por sua cor laranja-avermelhada vibrante. Possui propriedades medicinais e é utilizado na medicina tradicional.",
            edible: false,
            poisonous: false,
            characteristics: "Formato de prateleira ou orelha, superfície lisa, cor laranja-avermelhada brilhante, textura coriácea",
            country: "Brasil e outras regiões tropicais e subtropicais",
            images: [
                "images/Pycnoporus_sanguineus.png"
            ]
        },
        {
            id: 4,
            name: "Lentinula edodes",
            commonName: "Shiitake",
            region: ["sudeste", "sul"],
            color: "marrom",
            habitat: ["madeira", "urbano"],
            description: "Cogumelo originário da Ásia, amplamente cultivado para fins culinários. Rico em sabor umami e propriedades medicinais.",
            edible: true,
            poisonous: false,
            characteristics: "Chapéu marrom, lamelas brancas, textura carnosa, crescem em madeira",
            country: "Japão, China e Coreia",
            images: [
                "images/shiitake.png",
                "images/shiitake2.png"
            ],
            recipes: [
                {
                    name: "Shiitake Salteado Oriental",
                    ingredients: [
                        "300g de shiitake fresco",
                        "3 colheres de sopa de molho de soja",
                        "2 dentes de alho picados",
                        "1 pedaço de gengibre ralado",
                        "2 colheres de sopa de óleo de gergelim",
                        "Cebolinha para finalizar"
                    ],
                    instructions: "1. Limpe os shiitakes e corte em fatias\n2. Aqueça o óleo de gergelim em uma wok ou frigideira\n3. Adicione alho e gengibre, refogue até dourar\n4. Acrescente os shiitakes e refogue por 5 minutos\n5. Adicione o molho de soja e cozinhe por mais 2 minutos\n6. Finalize com cebolinha picada"
                },
                {
                    name: "Caldo de Shiitake",
                    ingredients: [
                        "100g de shiitake seco",
                        "2L de água",
                        "1 cebola",
                        "2 talos de salsão",
                        "1 cenoura",
                        "1 pedaço de alga kombu (opcional)",
                        "Sal a gosto"
                    ],
                    instructions: "1. Hidrate os shiitakes em água morna por 30 minutos\n2. Corte os legumes grosseiramente\n3. Em uma panela, coloque todos os ingredientes\n4. Leve para ferver e reduza o fogo\n5. Cozinhe em fogo baixo por 1 hora\n6. Coe e use como base para sopas e molhos"
                }
            ]
        },
        {
            id: 5,
            name: "Macrolepiota procera",
            commonName: "Cogumelo parasol",
            region: ["sudeste", "sul"],
            color: "marrom",
            habitat: ["campo", "floresta"],
            description: "Cogumelo alto e elegante, comestível e apreciado. Caracteriza-se pelo chapéu em forma de guarda-chuva.",
            edible: true,
            poisonous: false,
            characteristics: "Alto, com chapéu grande em forma de guarda-chuva, estipe longo com escamas marrons",
            country: "Europa, especialmente países mediterrâneos",
            images: [
                "images/Macrolepiota_procera.png"
            ]
        },
        {
            id: 6,
            name: "Agaricus bisporus",
            commonName: "Champignon",
            region: ["todas"],
            color: "branco",
            habitat: ["urbano", "campo"],
            description: "O cogumelo mais cultivado no mundo, amplamente utilizado na culinária ocidental. Possui sabor suave e versatilidade culinária.",
            edible: true,
            poisonous: false,
            characteristics: "Chapéu arredondado, lamelas rosadas que escurecem com o tempo, estipe curto e branco",
            country: "Originário da França, agora cultivado mundialmente",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/0/01/ChampignonMushroom.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/c/c2/Agaricus_bisporus_-_crisp_for_Christmas.jpg"
            ],
            recipes: [
                {
                    name: "Champignon à la Crème",
                    ingredients: [
                        "500g de champignon fresco",
                        "1 cebola picada",
                        "2 dentes de alho",
                        "200ml de creme de leite fresco",
                        "Sal e pimenta-do-reino",
                        "Salsinha picada",
                        "2 colheres de sopa de manteiga"
                    ],
                    instructions: "1. Limpe os champignons e corte em fatias\n2. Refogue a cebola e o alho na manteiga\n3. Adicione os champignons e refogue até dourar\n4. Acrescente o creme de leite e deixe reduzir\n5. Tempere com sal e pimenta\n6. Finalize com salsinha"
                },
                {
                    name: "Champignon Recheado",
                    ingredients: [
                        "20 champignons grandes",
                        "200g de cream cheese",
                        "100g de bacon picado",
                        "1 cebola pequena picada",
                        "2 dentes de alho",
                        "Queijo parmesão ralado",
                        "Salsinha"
                    ],
                    instructions: "1. Retire os talos dos champignons\n2. Frite o bacon até ficar crocante\n3. Na mesma gordura, refogue cebola e alho\n4. Misture com cream cheese e salsinha\n5. Recheie os champignons\n6. Polvilhe com parmesão\n7. Asse por 20 minutos a 180°C"
                }
            ]
        },
        {
            id: 7,
            name: "Cantharellus cibarius",
            commonName: "Cantarelo",
            region: ["sul"],
            color: "amarelo",
            habitat: ["floresta"],
            description: "Cogumelo em forma de funil, com cor amarelo-alaranjada característica. Apreciado por seu aroma frutado e sabor suave.",
            edible: true,
            poisonous: false,
            characteristics: "Forma de funil, cor amarelo-alaranjada, pregas em vez de lamelas, aroma frutado",
            country: "Europa Central, Escandinávia e América do Norte",
            images: [
                "images/Chanterelle_Cantharellus_cibarius.png"
            ]
        },
        {
            id: 8,
            name: "Boletus edulis",
            commonName: "Porcini",
            region: ["sul"],
            color: "marrom",
            habitat: ["floresta"],
            description: "Considerado um dos cogumelos comestíveis mais saborosos. Encontrado principalmente em florestas de coníferas.",
            edible: true,
            poisonous: false,
            characteristics: "Chapéu marrom, poros brancos que amarelam com o tempo, estipe robusto, sem lamelas",
            country: "Itália, França e países do leste europeu",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/1/16/Boletus_edulis_Prague_2011_crop.jpg"
            ]
        },
        {
            id: 9,
            name: "Amanita phalloides",
            commonName: "Chapéu da morte",
            region: ["sudeste", "sul"],
            color: "verde",
            habitat: ["floresta"],
            description: "Um dos cogumelos mais venenosos do mundo. Sua ingestão pode levar à morte. Muitas vezes confundido com espécies comestíveis.",
            edible: false,
            poisonous: true,
            characteristics: "Chapéu esverdeado, lamelas brancas, base bulbosa com volva, anel no estipe",
            country: "Europa, introduzido na América do Norte e Austrália",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/9/99/Amanita_phalloides_1.JPG",
                "https://upload.wikimedia.org/wikipedia/commons/f/f7/Amanita_phalloides_-_Echter_Knollenbl%C3%A4tterpilz.JPG"
            ]
        },
        {
            id: 10,
            name: "Psilocybe cubensis",
            commonName: "Cogumelo mágico",
            region: ["norte", "nordeste", "centro-oeste"],
            color: "marrom",
            habitat: ["campo"],
            description: "Cogumelo com propriedades psicodélicas devido à presença de psilocibina. Possui efeitos alucinógenos.",
            edible: false,
            poisonous: false,
            characteristics: "Chapéu cônico que se torna plano, cor amarelo-acastanhada, escurece quando manipulado",
            country: "México, América Central e do Sul, e Sudeste Asiático",
            images: [
                "images/Psilocybe_Cubensis.png"
            ]
        },
        {
            id: 11,
            name: "Coprinus comatus",
            commonName: "Cogumelo shaggy mane",
            region: ["sudeste", "sul"],
            color: "branco",
            habitat: ["urbano", "campo"],
            description: "Cogumelo comestível quando jovem, característico por se autodegradar em uma tinta preta quando maduro.",
            edible: true,
            poisonous: false,
            characteristics: "Forma cilíndrica, escamas brancas, dissolve-se em tinta preta com a maturidade",
            country: "Europa e América do Norte",
            images: [
                "images/Coprinus_comatus,_the_shaggy_ink_cap_mushroom.png"
            ]
        },
        {
            id: 12,
            name: "Morchella esculenta",
            commonName: "Morela",
            region: ["sul", "sudeste"],
            color: "marrom",
            habitat: ["floresta"],
            description: "Cogumelo muito apreciado com uma estrutura em forma de favo de mel. Considerado uma iguaria culinária.",
            edible: true,
            poisonous: false,
            characteristics: "Chapéu em forma de colmeia, ocas por dentro, superfície enrugada e com alvéolos",
            country: "Europa, América do Norte e partes da Ásia",
            images: [
                "images/Morchella_conica.png"
            ]
        },
        {
            id: 13,
            name: "Agaricus campestris",
            commonName: "Cogumelo do campo",
            region: ["centro-oeste", "sudeste", "sul"],
            color: "branco",
            habitat: ["campo"],
            description: "Cogumelo comestível que cresce em pastagens e áreas abertas. Similar ao champignon de cultivo.",
            edible: true,
            poisonous: false,
            characteristics: "Chapéu branco que se torna marrom com a idade, lamelas rosadas que escurecem, anel no estipe",
            country: "Europa e América do Norte",
            images: [
                "images/Agaricus_campestris.png"
            ]
        },
        {
            id: 14,
            name: "Lactarius deliciosus",
            commonName: "Saffron milk cap",
            region: ["sul"],
            color: "laranja",
            habitat: ["floresta"],
            description: "Cogumelo comestível com características distintas: quando cortado, libera um líquido alaranjado que lembra leite.",
            edible: true,
            poisonous: false,
            characteristics: "Chapéu alaranjado com zonas concêntricas, libera látex laranja quando danificado",
            country: "Espanha, Portugal e região do Mediterrâneo",
            images: [
                "images/Lactarius_deliciosus.png"
            ]
        },
        {
            id: 15,
            name: "Ganoderma lucidum",
            commonName: "Reishi",
            region: ["sudeste", "sul"],
            color: "vermelho",
            habitat: ["madeira", "floresta"],
            description: "Cogumelo medicinal, utilizado há milênios na medicina tradicional chinesa para promover a longevidade e a saúde.",
            edible: false,
            poisonous: false,
            characteristics: "Formato de rim, superfície brilhante e envernizada, textura dura e lenhosa",
            country: "China, Japão e Coreia",
            images: [
                "images/Ganoderma_lucidum.png"
            ]
        },
        {
            id: 16,
            name: "Auricularia auricula-judae",
            commonName: "Orelha-de-judas",
            region: ["sudeste"],
            color: "marrom",
            habitat: ["madeira"],
            description: "Cogumelo comestível com textura gelatinosa, muito utilizado na culinária asiática, especialmente chinesa.",
            edible: true,
            poisonous: false,
            characteristics: "Formato de orelha, textura gelatinosa e elástica, superfície aveludada",
            country: "China e Sudeste Asiático",
            images: [
                "images/Auricularia_auricula-judae.png"
            ]
        }
    ];

    // Elementos do DOM
    const fungiGrid = document.getElementById('fungi-grid');
    const regionFilter = document.getElementById('region-filter');
    const colorFilter = document.getElementById('color-filter');
    const habitatFilter = document.getElementById('habitat-filter');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const infoModal = document.getElementById('info-modal');
    const modalContentContainer = document.getElementById('modal-content-container');
    const closeButton = document.querySelector('.close-button');

    // Variáveis de estado
    let filteredFungi = [...fungiDatabase];

    // Funções
    function displayFungi(fungiToDisplay) {
        fungiGrid.innerHTML = '';
        
        if (fungiToDisplay.length === 0) {
            fungiGrid.innerHTML = '<p class="no-results">Nenhum fungo encontrado com os filtros selecionados.</p>';
            return;
        }
        
        fungiToDisplay.forEach(fungus => {
            const fungiCard = document.createElement('div');
            fungiCard.className = 'fungi-card fade-in';
            fungiCard.dataset.id = fungus.id;
            
            fungiCard.innerHTML = `
                <img src="${fungus.images[0]}" alt="${fungus.name}" class="fungi-image">
                <div class="fungi-info">
                    <h3>${fungus.name}</h3>
                    <p><em>${fungus.commonName}</em></p>
                    <p>Habitat: ${fungus.habitat.join(', ')}</p>
                    <p>Origem: ${fungus.country}</p>
                    <div class="fungi-tags">
                        ${fungus.edible ? '<span class="tag">Comestível</span>' : ''}
                        ${fungus.poisonous ? '<span class="tag">Venenoso</span>' : ''}
                        <span class="tag">${fungus.color.charAt(0).toUpperCase() + fungus.color.slice(1)}</span>
                    </div>
                </div>
            `;
            
            fungiCard.addEventListener('click', () => {
                showFungusDetails(fungus);
            });
            
            fungiGrid.appendChild(fungiCard);
        });
    }

    function filterFungi() {
        const regionValue = regionFilter.value;
        const colorValue = colorFilter.value;
        const habitatValue = habitatFilter.value;
        const searchValue = searchInput.value.toLowerCase();
        
        filteredFungi = fungiDatabase.filter(fungus => {
            // Filtro de região
            const regionMatch = regionValue === 'todas' || fungus.region.includes(regionValue) || fungus.region.includes('todas');
            
            // Filtro de cor
            const colorMatch = colorValue === 'todas' || fungus.color === colorValue;
            
            // Filtro de habitat
            const habitatMatch = habitatValue === 'todos' || fungus.habitat.includes(habitatValue);
            
            // Filtro de pesquisa
            const searchMatch = searchValue === '' || 
                fungus.name.toLowerCase().includes(searchValue) || 
                fungus.commonName.toLowerCase().includes(searchValue) ||
                fungus.description.toLowerCase().includes(searchValue) ||
                fungus.country.toLowerCase().includes(searchValue);
            
            return regionMatch && colorMatch && habitatMatch && searchMatch;
        });
        
        displayFungi(filteredFungi);
    }

    function resetFilters() {
        regionFilter.value = 'todas';
        colorFilter.value = 'todas';
        habitatFilter.value = 'todos';
        searchInput.value = '';
        
        filteredFungi = [...fungiDatabase];
        displayFungi(filteredFungi);
    }

    function showFungusDetails(fungus) {
        const edibleStatus = fungus.edible ? '<span class="tag">Comestível</span>' : '<span class="tag">Não comestível</span>';
        const poisonousStatus = fungus.poisonous ? '<span class="tag">Venenoso</span>' : '';
        
        let recipesHtml = '';
        if (fungus.edible && fungus.recipes) {
            recipesHtml = `
                <div class="recipes-section">
                    <h3>Sugestões de Receitas</h3>
                    <div class="recipes-container">
                        ${fungus.recipes.map(recipe => `
                            <div class="recipe-card">
                                <h4>${recipe.name}</h4>
                                <div class="recipe-details">
                                    <div class="ingredients">
                                        <h5>Ingredientes:</h5>
                                        <ul>
                                            ${recipe.ingredients.map(ingredient => `
                                                <li>${ingredient}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                    <div class="instructions">
                                        <h5>Modo de Preparo:</h5>
                                        <p>${recipe.instructions}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        modalContentContainer.innerHTML = `
            <div class="modal-grid">
                <div class="modal-image-container">
                    <img src="${fungus.images[0]}" alt="${fungus.name}" class="modal-image">
                    ${fungus.images[1] ? `<img src="${fungus.images[1]}" alt="${fungus.name}" class="modal-image">` : ''}
                </div>
                <div class="modal-info">
                    <h2>${fungus.name}</h2>
                    <p><em>${fungus.commonName}</em></p>
                    <p>${fungus.description}</p>
                    <div class="property-list">
                        <span class="property-name">Regiões:</span>
                        <span>${fungus.region.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(', ')}</span>
                        
                        <span class="property-name">Cor:</span>
                        <span>${fungus.color.charAt(0).toUpperCase() + fungus.color.slice(1)}</span>
                        
                        <span class="property-name">Habitat:</span>
                        <span>${fungus.habitat.map(h => h.charAt(0).toUpperCase() + h.slice(1)).join(', ')}</span>
                        
                        <span class="property-name">Origem:</span>
                        <span>${fungus.country}</span>
                        
                        <span class="property-name">Características:</span>
                        <span>${fungus.characteristics}</span>
                    </div>
                    <div class="fungi-tags">
                        ${edibleStatus}
                        ${poisonousStatus}
                    </div>
                </div>
            </div>
            ${recipesHtml}
        `;
        
        infoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        infoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event Listeners
    regionFilter.addEventListener('change', filterFungi);
    colorFilter.addEventListener('change', filterFungi);
    habitatFilter.addEventListener('change', filterFungi);
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    searchButton.addEventListener('click', filterFungi);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterFungi();
        }
    });
    
    closeButton.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            closeModal();
        }
    });

    // Inicialização
    displayFungi(fungiDatabase);
}); 