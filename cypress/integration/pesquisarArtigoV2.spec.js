describe('Visitar medium.com', () => {
    
    it ('Pesquisar artigo', () => {
        cy.visit('https://medium.com/')
        cy.get('.x > .ho > .if > .az > .bw').click()
        cy.get('.inputGroup > .svgIcon > .svgIcon-use').click().type('Cypress')
        cy.get('.button-label').click()
        cy.contains('How to Test Your Frontend with the Cypress.io Framework')
    })
})