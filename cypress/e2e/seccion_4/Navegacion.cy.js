/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Navegacion entre las páginas', () =>{

    it('Back forwad', ()=> {
        let time = 1500
        cy.visit('https://demoqa.com/')
        cy.title().should('eq','DEMOQA')
        cy.wait(time)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar').should('be.visible').click({force:true})
        cy.wait(time)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(time)

        cy.go("back")
        cy.go("back")

        cy.go("forward")
        cy.go("forward")
    })

    it.only('Reload - Reto', ()=> {
        let time = 1500
        cy.visit('https://demoqa.com/')
        cy.title().should('eq','DEMOQA')
        cy.wait(time)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar').should('be.visible').click({force:true})
        cy.wait(time)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(time)

        cy.get('#userName').should('be.visible').type('Jonatan Romero')
        cy.wait(time)

        cy.get('#userEmail').should('be.visible').type('jromero@gmail.com')
        cy.wait(time)
       
        cy.reload() 

        cy.wait(time)

        cy.go("back")

    })
})
