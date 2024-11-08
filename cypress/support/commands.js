Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Marcelo')
    cy.get('#lastName').type('Marucci')
    cy.get('#email').type('marcelo.marucci@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})
