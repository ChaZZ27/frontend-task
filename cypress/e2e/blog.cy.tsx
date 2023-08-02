describe('Blog page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('should render at least 1 blog post', () => {
        cy.get('article').should('have.length.at.least', 1)
    })
})