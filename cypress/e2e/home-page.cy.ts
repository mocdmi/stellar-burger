describe('HomePage', () => {
  const mockIngredients = [
    {
      _id: 'bun-1',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/burger-2.png',
      image_large: 'https://code.s3.yandex.net/react/burger-2-large.png',
      image_mobile: 'https://code.s3.yandex.net/react/burger-2-mobile.png',
      __v: 0,
    },
    {
      _id: 'main-1',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/burger-3.png',
      image_large: 'https://code.s3.yandex.net/react/burger-3-large.png',
      image_mobile: 'https://code.s3.yandex.net/react/burger-3-mobile.png',
      __v: 0,
    },
    {
      _id: 'sauce-1',
      name: 'Соус Spicy-X',
      type: 'sauce',
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: 'https://code.s3.yandex.net/react/burger-5.png',
      image_large: 'https://code.s3.yandex.net/react/burger-5-large.png',
      image_mobile: 'https://code.s3.yandex.net/react/burger-5-mobile.png',
      __v: 0,
    },
  ];

  beforeEach(() => {
    cy.intercept('GET', '**/api/ingredients', {
      statusCode: 200,
      body: {
        success: true,
        data: mockIngredients,
      },
    }).as('getIngredients');

    cy.intercept('POST', '**/api/orders', {
      statusCode: 200,
      body: {
        success: true,
        name: 'Space бургер',
        order: {
          number: 12345,
        },
      },
    }).as('createOrder');

    cy.intercept('GET', '**/api/auth/user', {
      statusCode: 200,
      body: {
        success: true,
        user: {
          email: 'test@test.com',
          name: 'Test User',
        },
      },
    });

    cy.intercept('POST', '**/api/auth/token', {
      statusCode: 200,
      body: {
        success: true,
        accessToken: 'Bearer test-token',
        refreshToken: 'test-refresh-token',
      },
    });

    cy.visit('/');
    cy.wait('@getIngredients');
  });

  describe('Перетаскивание ингредиентов', () => {
    it('должен добавить булку в конструктор при перетаскивании в drop zone', () => {
      cy.contains('Краторная булка N-200i').drag({
        position: '[data-cy="drop-zone-bun"]',
      });

      cy.contains('Краторная булка N-200i').should('exist');
    });

    it('должен добавить начинку в конструктор при перетаскивании в drop zone', () => {
      cy.contains('Биокотлета из марсианской Магнолии').drag({
        position: '[data-cy="drop-zone-filling"]',
      });

      cy.contains('Биокотлета из марсианской Магнолии').should('exist');
    });

    it('должен добавить несколько ингредиентов в конструктор', () => {
      cy.contains('Краторная булка N-200i').drag({
        position: '[data-cy="drop-zone-bun"]',
      });
      cy.contains('Биокотлета из марсианской Магнолии').drag({
        position: '[data-cy="drop-zone-filling"]',
      });
      cy.contains('Соус Spicy-X').drag({ position: '[data-cy="drop-zone-filling"]' });

      cy.contains('Краторная булка N-200i').should('exist');
      cy.contains('Биокотлета из марсианской Магнолии').should('exist');
      cy.contains('Соус Spicy-X').should('exist');
    });
  });

  describe('Модальное окно ингредиента', () => {
    it('должен открыть модальное окно с деталями ингредиента при клике', () => {
      cy.contains('Биокотлета из марсианской Магнолии').click();

      cy.get('[data-cy="modal"]').should('be.visible');
      cy.contains('Детали ингредиента').should('be.visible');
    });

    it('должен отображать правильные данные ингредиента в модальном окне', () => {
      cy.contains('Биокотлета из марсианской Магнолии').click();

      cy.get('[data-cy="modal"]').within(() => {
        cy.contains('Биокотлета из марсианской Магнолии').should('be.visible');
        cy.contains('Калории,ккал').should('be.visible');
        cy.contains('4242').should('be.visible');
        cy.contains('Белки, г').should('be.visible');
        cy.contains('420').should('be.visible');
        cy.contains('Жиры, г').should('be.visible');
        cy.contains('142').should('be.visible');
        cy.contains('Углеводы, г').should('be.visible');
        cy.contains('242').should('be.visible');
      });
    });

    it('должен закрыть модальное окно ингредиента при клике на кнопку закрытия', () => {
      cy.contains('Биокотлета из марсианской Магнолии').click();
      cy.get('[data-cy="modal"]').should('be.visible');

      cy.get('[data-cy="modal-close"]').click();
      cy.get('[data-cy="modal"]').should('not.exist');
    });
  });

  describe('Модальное окно заказа', () => {
    beforeEach(() => {
      cy.setCookie('accessToken', 'Bearer test-token');
      localStorage.setItem('refreshToken', 'test-refresh-token');
      cy.reload();
      cy.wait('@getIngredients');
    });

    it('должен открыть модальное окно заказа при клике на "Оформить заказ"', () => {
      cy.contains('Краторная булка N-200i').drag({
        position: '[data-cy="drop-zone-bun"]',
      });
      cy.contains('Биокотлета из марсианской Магнолии').drag({
        position: '[data-cy="drop-zone-filling"]',
      });

      cy.contains('Оформить заказ').click();
      cy.wait('@createOrder');

      cy.get('[data-cy="modal"]').should('be.visible');
      cy.contains('12345').should('be.visible');
      cy.contains('идентификатор заказа').should('be.visible');
    });

    it('должен закрыть модальное окно заказа при клике на кнопку закрытия', () => {
      cy.contains('Краторная булка N-200i').drag({
        position: '[data-cy="drop-zone-bun"]',
      });
      cy.contains('Биокотлета из марсианской Магнолии').drag({
        position: '[data-cy="drop-zone-filling"]',
      });

      cy.contains('Оформить заказ').click();
      cy.wait('@createOrder');
      cy.get('[data-cy="modal"]').should('be.visible');

      cy.get('[data-cy="modal-close"]').click();
      cy.get('[data-cy="modal"]').should('not.exist');
    });
  });
});
