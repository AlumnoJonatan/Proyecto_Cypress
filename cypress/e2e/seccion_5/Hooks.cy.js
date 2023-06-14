/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Hooks', () =>{

    before(()=>{
        cy.log("################ --- PRINCIPIO DE TODO --- #################")
        cy.wait(3000)
    })

    beforeEach(()=> {
        cy.log("Esto se repite en cada uno de los test (MUY IMPORTANTE)")
        cy.wait(3000)
    })

    afterEach(()=> {
        cy.log("Esto se hace al final de todos los test")
        cy.wait(3000)
    })

    after(()=> {
        cy.log("############### Último ciclo --- Final de todo ##################")
        cy.wait(3000)
        cy.visit("https://demoqa.com/")
    })

    it("Test - 1", ()=> {
        cy.log("Test uno")
    })

    it("Test - 2", ()=> {
        cy.log("Test dos")
    })

    it("Test - 3", ()=> {
        cy.log("Test tres")
    })

    it("Test - 4", ()=> {
        cy.log("Test cuatro")
    })

    it("Test - 5", ()=> {
        cy.log("Test cinco")
    })
})
