/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Reto de la función Hooks', () =>{

    let time=2000
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(time)
        cy.xpath('//input[contains(@name,"username")]').should('be.visible').type('Admin')
        cy.wait(time)
        cy.xpath('//input[contains(@type,"password")]').should('be.visible').type('admin123')
        cy.wait(time)
        cy.get('.oxd-button').should('be.visible').click({force:true})
        cy.wait(time)
    })

    after(()=> {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').should('be.visible').click({force:true})
        cy.wait(time)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click({force:true})
        cy.wait(time)       
    })
    it('Test Uno', ()=> {
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click({force:true})
        cy.wait(time)
    })

    it('Test Dos', ()=> {
        cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click({force:true})
        cy.wait(time)
    })

    it('Test Tres', ()=> {
        cy.get(':nth-child(7) > .oxd-main-menu-item').should('be.visible').click({force:true})
        cy.wait(time)
    })
})
