/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Demo de la primer plantilla', () =>{

    it('Demo uno', ()=> {
        let time = 1500
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(time)

        cy.get('#userName').should('be.visible').type('JonatanRomero1010')
        cy.wait(time)
    })
})
