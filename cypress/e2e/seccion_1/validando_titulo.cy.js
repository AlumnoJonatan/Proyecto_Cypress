/// <reference types="cypress" /> 
//para que funcionen los comandos

describe(" Sección 1 - Validando el título", () =>{

    it("Test validar el título de la página ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')

        cy.log("Ok la función title funcionó bien")
    })

   
})//Cierre de describe