
describe('Post page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const articleUrl = 'http://localhost:3000/blog/1'
    it('should render dummy article and its url should contain its ID ', async () => {
        
        cy.visit(articleUrl)
        cy.url().should('contain', '/blog/1')
                
    })
})