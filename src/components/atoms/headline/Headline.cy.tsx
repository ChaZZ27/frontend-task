import Headline from '../headline/Headline'

describe('Headline component tests', () => {
    it('should render Headline component with dummy content', () => {
        cy.mount(<Headline text="Test headline" />)
    })
})