describe('Login', () => {
 
  // beforeEach(() => {
  //   cy.visit('http://localhost', { responseTimeout: 120000 })
  // })

  // it('Verificar login com sucesso', () => {
  //   cy.get('#user_login').type('root')
  //   cy.get('#user_password').type('teste123!@')
  //   cy.get('#new_user > .submit-container > .btn').click()
  //   cy.get('.blank-state-welcome-title', { responseTimeout: 120000 })
  // })

  it('successfully', () => {
      const user = Cypress.env('user_name')
      const password = Cypress.env('user_password')
      const options = { cacheSession: false }

      cy.login(user, password, options)
      cy.get('.qa-user-avatar').should('be.visible')
  })


})