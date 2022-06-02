import Counter from './index';

it('renders', () => {
    cy.mount(<Counter />);

    cy.findByRole('button', { name: 'count is: 0' });
});

it('increases count when clicked', () => {
    cy.mount(<Counter />);

    cy.findByRole('button', { name: 'count is: 0' }).click();
    cy.findByRole('button', { name: 'count is: 1' }).click();
    cy.findByRole('button', { name: 'count is: 2' }).click();
    cy.findByRole('button', { name: 'count is: 3' });
});
