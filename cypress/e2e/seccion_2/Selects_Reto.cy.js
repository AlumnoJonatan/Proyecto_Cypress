/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Todo sobre Selects", () =>{

    it("reto de los Select", () => {
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/")
        cy.title().should("eq","jQuery Dual List Box Demo")
        cy.wait(1500)

        cy.get(".unselected").should("be.visible").select(["Adela Salazar","Ashley Mcintosh","Belinda Lane"]).then(()=>{
            cy.xpath("//button[contains(@data-type,'str')]").should("be.visible").click().then(()=>{
                cy.wait(2000)
                cy.get('.atr').should("be.visible").click().then(()=>{
                    cy.wait(1500)
                    cy.get(".atl").should("be.visible").click().then(()=>{
                        cy.log("Se movieron todos los elementos")
                    })

                })
            })
        })

    })

    

    
   
})//Cierre de describe