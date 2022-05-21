beforeEach(() => {
    cy.visit('/');
});

it('header is visible', () => {
    cy.findByRole('banner').within(() => {
        cy.findByText('Hello Vite + React!');
    });
});

it('counter is visible', () => {
    cy.findByRole('button', { name: 'count is: 0' });
});

export {};
