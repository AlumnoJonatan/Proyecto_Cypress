/// <reference types='cypress' />


require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Hooks ejemplos', () =>{
    let time=2000
    beforeEach(()=>{

        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(time)

    })

    it('Test - Uno', ()=> {
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(time)
    })

    it('Test - Dos', ()=> {
        cy.get('[type="checkbox"]').uncheck({force:true}).should('not.be.checked')
        cy.wait(time)
    })

    it('Test - Tres', ()=> {
        cy.get(':nth-child(5) > label > .cb1-element').check().should('be.checked')
        cy.wait(time)
    })
    
})