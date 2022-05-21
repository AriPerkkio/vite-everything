beforeEach(() => {
    cy.visit('/');
});

it('user can see front page', () => {
    cy.findByRole('banner').within(() => {
        cy.findByText('Hello Vite + React!');
    });

    cy.findByRole('button', { name: 'count is: 0' }).click();
    cy.findByRole('button', { name: 'count is: 1' }).click();
    cy.findByRole('button', { name: 'count is: 2' });
});

export {};
