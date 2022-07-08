import './support';
import { mount } from 'cypress/react';

declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace */
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add('mount', mount);

beforeEach(() => {
    const windowExists = !!window;
    const documentExists = !!document;
    const NodeExists = !!Node;
    const ElementExists = !!Element;
    const DocumentFragmentExists = !!DocumentFragment;

    cy.task('log', '[DEBUG] beforeEach');
    cy.task('log', { windowExists });
    cy.task('log', { documentExists });
    cy.task('log', { NodeExists });
    cy.task('log', { ElementExists });
    cy.task('log', { DocumentFragmentExists });

    if (
        !windowExists ||
        !documentExists ||
        !NodeExists ||
        !ElementExists ||
        !DocumentFragmentExists
    ) {
        throw new Error(
            'Missing one of' +
                JSON.stringify({
                    windowExists,
                    documentExists,
                    NodeExists,
                    ElementExists,
                    DocumentFragmentExists,
                })
        );
    }
});
