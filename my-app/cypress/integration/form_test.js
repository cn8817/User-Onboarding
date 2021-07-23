describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('check if text input works', ()=> {
        usernameInput()
            .should('have.value', '')
            .type('cn8817')
            .should('have.value', 'cn8817')

        passwordInput()
            .should('have.value', '')
            .type('qwertyuio')
            .should('have.value', 'qwertyuio')

        emailInput()
            .should('have.value', '')
            .type('cn8817@gmail.com')
            .should('have.value', 'cn8817@gmail.com')
    })

    it('check if term checkbox works', () => {
        termCheck().click()
    })

    it('if submit button enables after text inputs and term check', () => {
        usernameInput().type('cn8817')
        passwordInput().type('qwertyuio')
        emailInput().type('cn8817@gmail.com')
        termCheck().click()
        submitBtn().should('not.be.disabled')
    })

    it('checking if validation works with missing requirements', () => {
        usernameInput().type('cn8817')
        passwordInput().type('qwertyu')
        emailInput().type('cn8817gmail.com')
        termCheck().click()
        submitBtn().should('be.disabled')
    })
})
const usernameInput = () => cy.get('input[name="username"]')
const passwordInput = () => cy.get('input[name="password"]')
const emailInput = () => cy.get('input[name="email"]')
const termCheck = () => cy.get('input[name="terms"]')
const submitBtn = () => cy.get('button[id="submitBtn"]')