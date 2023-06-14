/// <reference types="cypress" />

require('cypress-plugin-tab')

describe("Primer Reto", () =>{

    it(" ", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#searchBox').should('be.visible').type('Cierra')
        cy.wait(1500)
        cy.get('#searchBox').should('be.visible').clear()
        
        //Agregando campo
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.wait(1000)
        cy.get('#firstName').should('be.visible').type('Jonatan').tab().
        type('Romero').tab().
        type('jromero@gmail.com').tab().type('32').tab().type('100000').tab().type('Sistemas')
        cy.get('#submit').should('be.visible').click()

        //Buscamos el agregado
        cy.get('#searchBox').should('be.visible').type('Jonatan')
        cy.wait(1500)
        cy.get('#searchBox').should('be.visible').clear()

        //Editamos un campo
        cy.get('#edit-record-2').should('be.visible').click()
        cy.wait(2000)
        cy.get('#age').should('be.visible').clear().type('50')
        cy.wait(2000)
        cy.get('#salary').should('be.visible').clear().type('50000')
        cy.get('#submit').should('be.visible').click({force: true})

        //Borrando el campo
        cy.wait(2000)
        cy.get('#delete-record-3').should('be.visible').click()

    })

   
})//Cierre de describe