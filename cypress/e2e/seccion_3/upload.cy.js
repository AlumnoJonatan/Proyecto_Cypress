/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("Upload Imagenes", () =>{

    it("Cargando imagenes", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        const ruta='arrays.png'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(3000)

    })

   
})//Cierre de describe