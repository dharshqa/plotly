
class HomePage {


    literals = {
        firstText: 'Loved by OSS,      trusted by Enterprise',
        aboutCypress: 'About Cypress',
        aboutusURL: '/about-us',
        cliboardNPM: 'npm install cypress --save-dev',
        visualReviewText: 'Visual Reviews',
        visualReviewURL: '/cloud/#visual_review',
    }

    elements = {
        firstText: () => cy.get('[class="mb-[16px] text-[28px] font-bold leading-[36px] text-gray-1000 md:text-[40px] md:leading-[52px]"]'),
        companyButton: () => cy.get('#dropdownCompany'),
        installButton: () => cy.get('[data-cy="header-install"]'),
        aboutusButton: () => cy.get('[href="/about-us"]>span>span'),
        npmCopyButton: () => cy.get('[data-cy="modal-install-copy"]'),
        productButton: () => cy.get('#dropdownProduct'),
        visualReviewButton: () => cy.get('[href="/cloud#visual_reviews"]>astro-slot>span'),
        smartOrchestrationButton: () => cy.get('[href="/cloud#smart_orchestration"]>astro-slot>span'),
    
    }

    varifyText() {
        this.elements.firstText().scrollIntoView().invoke('text').then(text => {
            const newText = text.replace(/\n/g, '').trim();
            expect(newText).to.equal(this.literals.firstText);
        })
    }

    verifyCompanyButton() {
        this.elements.companyButton().should('not.be.disabled').click();

        this.elements.aboutusButton().eq(0).invoke('text').then(text => {
            const newText = text.replace(/\n/g, '').trim();
            expect(newText).to.equal(this.literals.aboutCypress);
        })
        this.elements.aboutusButton().eq(0).should('not.be.disabled').click({ force: true });

        cy.url().should('include', this.literals.aboutusURL);
    }

    VerifyInstallnpmButton() {
        this.elements.installButton().click();
    }

    verifyClipboard() {

        this.elements.npmCopyButton().click();
        cy.window().then(win => {
            win.navigator.clipboard.readText().then(text => {
                expect(text).to.eq(this.literals.cliboardNPM);
            })
        })
    }


    verifyVisualReviewButton(){
        this.elements.productButton().should('not.be.disabled').click();

        this.elements.visualReviewButton().eq(0).invoke('text').then(text => {
            const newText = text.replace(/\n/g, '').trim();
            expect(newText).to.equal(this.literals.visualReviewText);
        })

        this.elements.visualReviewButton().eq(0).should('not.be.disabled').click({ force: true });
        cy.url().should('include', this.literals.visualReviewURL);
    }

}

module.exports = new HomePage();