/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Manejo de Invoke", () =>{

    it("Invoke text", ()=> {

        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(1000)

        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")

        cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")

        cy.xpath("//label[@for='firstname'][contains(.,'First name:')]").invoke("text").as("title_name")

        cy.get("@title_name").should("contain","First name:").then(()=>{
            cy.get("#firstname").type("Jonatan")
        })

    })

    it("Invoke styles", ()=> {

        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(1000)

        cy.get('[for="firstname"]').invoke("attr","style","color:Blue; font-size: 50px")

    })

    it("Invoke Ocultar y mostrar", ()=> {

        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(1500)

        //Ocultar elementos
        cy.get('[for="firstname"]').invoke("hide")
        cy.get('#firstname').invoke("hide")

        cy.wait(1500)

        //Mostrar elementos
        cy.get('[for="firstname"]').invoke("show","3s")
        cy.get('#firstname').invoke("show","4s")

    })
    
    it("Invoke Ocultar y Mostrar RETO", ()=> {
        let tiempo = 1500 
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(tiempo)

        cy.get('#firstname').should("be.visible").type("Jonatan").then(()=>{
            cy.wait(tiempo)
            cy.get('[for="surname"]').invoke("show","6s")
            cy.get('#surname').invoke("show","8s")
            cy.wait(tiempo)
            cy.get('#surname').type("Romero Rozo")
            cy.wait(tiempo)
        })

    })

    it("Invoke src", ()=> {
        let tiempo = 1500 
        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(tiempo)

        cy.xpath("//img[contains(@width,'100px')]").invoke("attr","src").should("include","seleniumEasy_0.jpg")

    })

    it.only("Invoke target_blanck", ()=> {
        let tiempo = 1500 
        cy.visit('https://comocreartuweb.com/curso-de-html/curso-html-introducion/los-enlaces/el-target.html')
        cy.title().should('eq','Propiedad target de los enlaces o vínculos y su código html5 correcto')
        cy.wait(tiempo)

        cy.get('#allinhosting > a').invoke("removeAttr","target").click({force:true})

    })
   
})//Cierre de describe