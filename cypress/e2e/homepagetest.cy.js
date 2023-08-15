import homepage from '../objects/homepage.js'

describe('Plotly Assesment', () => {

    beforeEach('Naviagte to Website', () => {
        cy.visit('/');
    })

    it('Validate Text (Loved by OSS trusted by Enterprise)', () => {
        homepage.varifyText();
    })

    it('Validate Company Button and "About Cypress Button" ', () => {
        homepage.verifyCompanyButton();
    })

    it('Verify Install Button and Copied Text in Clipboard', () => {
        homepage.VerifyInstallnpmButton();
        homepage.verifyClipboard();
    })

    it('Verify Product Button and Visual Review Button', () => {
       homepage.verifyVisualReviewButton();
    })

    it('(BONUS) Verify Test Analytic Button Border Color', () => {
        homepage.verifyTestAnalyticButton();
    })

})