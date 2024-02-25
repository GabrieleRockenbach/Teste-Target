const cardsContainer = document.getElementById('cards-container');

const cardContent = [
    {
        title: 'Teste 1: Sequência Fibonacci',
        image: './assets/teste-1.jpg',
        leftButtonAnchor: '/Teste_1/index.html',
        rightButtonAnchor: '#'
    },
    {
        title: 'Teste 2: Dados de Faturamento',
        image: './assets/teste-2.jpg',
        leftButtonAnchor: '/Teste_2/index.html',
        rightButtonAnchor: '#'
    },
    {
        title: 'Teste 3: Porcentagem por Estado',
        image: './assets/teste-3.jpg',
        leftButtonAnchor: '/Teste_3/index.html',
        rightButtonAnchor: '#'
    },
    {
        title: 'Teste 4: Palavra Reversa',
        image: './assets/teste-4.jpg',
        leftButtonAnchor: '/Teste_4/index.html',
        rightButtonAnchor: '#'
    }
]

function showCards(){
 
    cardContent.forEach(element => {
        
        const card = document.createElement('div');
        
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = element.title;
        
        const cardImage = document.createElement('img');
        cardImage.setAttribute('src' , element.image);
        
        const buttonContainer = document.createElement('div');

        const cardLeftButton = document.createElement('a');
        cardLeftButton.textContent = 'Testar';
        cardLeftButton.setAttribute('href' , element.leftButtonAnchor);

        const cardRightButton = document.createElement('a');
        cardRightButton.textContent = 'Ver Código';
        cardRightButton.setAttribute('href' , element.rightButtonAnchor);

        buttonContainer.appendChild(cardLeftButton);
        buttonContainer.appendChild(cardRightButton);

        card.appendChild(cardTitle);
        card.appendChild(cardImage);
        card.appendChild(buttonContainer);

        cardsContainer.appendChild(card);
    });
}

showCards();
