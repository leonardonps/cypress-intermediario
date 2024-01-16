describe('Sair do sistema', () => {

    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('Verificar logout com sucesso', () => {
        cy.logout()
        // cy.get("[data-qa-selector='sign_in_button']").should('be.visible')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})