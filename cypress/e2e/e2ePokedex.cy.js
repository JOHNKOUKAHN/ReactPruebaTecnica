describe('e2ePokedexBrowse', () => {


  it('navigates trhought pokedex', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/', { fixture: '../../src/mocks/success.json' }).as('pokemonList')
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/1', { fixture: '../../src/mocks/selectedPokemon.json' }).as('pokemonSelect')

    cy.visit('http://192.168.1.13:5173/')

    //Verificar componentes iniciales
    cy.get('[data-testid="pokemonCard"]').should('exist');
    cy.get('[data-testid="pokemonImage"]').should('exist');
    cy.get('[data-testid="pokemonList"]').should('exist');
    cy.get('button').contains('previous').should('exist');
    cy.get('button').contains('next').should('exist');
    cy.get('[data-testid="loadingPokemonList"]').should('exist');
    cy.get('[data-testid="loadedPokemonList"]').should('not.exist');
    
    //Verificar lista de pokemon
    cy.get('[data-testid="loadingPokemonList"]').should('not.exist');
    cy.get('[data-testid="loadedPokemonList"]').should('exist');
    cy.get('[data-testid="loadedPokemonList"]').children('li').should('have.length', 20);

    //Verificar botones de paginacion en primer busqueda
    cy.get('button').contains('previous').should('be.disabled');
    cy.get('button').contains('next').should('not.be.disabled');

    //Navegar hasta la ultima pagina
    cy.get('button').contains('next').click();
    cy.get('button').contains('next').click();
    cy.get('button').contains('next').click();
    cy.get('button').contains('next').click();
    cy.get('button').contains('next').click();
    cy.get('button').contains('next').click();
    cy.get('button').contains('next').click();
    //verificar limite superior de la navegacion
    cy.get('button').contains('previous').should('not.be.disabled');
    cy.get('button').contains('next').should('be.disabled');
    
    //navegar hasta la primera pagina
    cy.get('button').contains('previous').click();
    cy.get('button').contains('previous').click();
    cy.get('button').contains('previous').click();
    cy.get('button').contains('previous').click();
    cy.get('button').contains('previous').click();
    cy.get('button').contains('previous').click();
    cy.get('button').contains('previous').click();
    //verificar botones de navegacion
    cy.get('button').contains('previous').should('be.disabled');
    cy.get('button').contains('next').should('not.be.disabled');
    
    //verificar carga de pokemon al seleccionar un elemto de la lista
    cy.get('[data-testid="pokemonImage"]').should('have.class', 'animate-bounce');
    cy.get('[data-testid="loadedPokemonList"]').find('li').first().click();
    cy.get('[data-testid="pokemonImage"]').should('not.have.class', 'animate-bounce');
    
    
    //verificar navegacion a otra pantalla al dar doble click  
    cy.get('[data-testid="loadedPokemonList"]').find('li').first().dblclick();
    cy.url().should('eq', 'http://192.168.1.13:5173/pokedex/1');
    
  })
  
  it('shows pokemon', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/1', { fixture: '../../src/mocks/selectedPokemon.json' }).as('pokemonSelect')
    cy.visit('http://192.168.1.13:5173/pokedex/1')
    

    //Verificar componentes iniciales
    cy.get('[data-testid="pokemonCard"]').should('exist');
    cy.get('[data-testid="pokemonImage"]').should('exist');
    cy.get('[data-testid="pokemonDetails"]').should('exist');
    cy.get('[data-testid="pokemonBasicInfo"]').should('exist');
    cy.get('[data-testid="pokemonStats"]').should('exist');
    cy.get('[data-testid="pokemonMoves"]').should('exist');
    cy.get('[data-testid="pokemonTypes"]').should('exist');
    cy.get('[data-testid="pokemonAbilities"]').should('exist');
    cy.get('a').contains('Back To Pokedex').should('exist');
    
    //Verificar renderizado de datos
    cy.get('[data-testid="pokemonStats"]').should('have.descendants', '>:nth-child(1)');
    cy.get('[data-testid="pokemonMoves"]').should('have.descendants', '>:nth-child(1)');
    cy.get('[data-testid="pokemonTypes"]').should('have.descendants', '>:nth-child(1)');
    cy.get('[data-testid="pokemonAbilities"]').should('have.descendants', '>:nth-child(1)');
    
    //Verificar navegacion a pagina principal
    cy.get('a').contains('Back To Pokedex').click();
    cy.url().should('eq', 'http://192.168.1.13:5173/pokedex');
  })
  
})