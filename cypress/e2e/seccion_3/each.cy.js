/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Bucles for y each", () =>{

    it("For uno", () => {
        
        for(let i=1; i<=100; i++ ){
            cy.log("Numero: " + i)
        }

    })

    it("For dos", () => {
        
        for(let i=1; i<=10; i++ ){
            let t = 5
            cy.log(t + " x " + i + " = " + t*i)
        }

    })

    it("Each uno", () => {
        
       cy.visit("https://practice.automationtesting.in/shop/")
       cy.title("eq","Products – Automation Practice Site")
       cy.wait(1000)

       cy.get(".woocommerce-LoopProduct-link").each(($el,index,$list)=>{
        //cy.log(index)
        //cy.log($list)

        //cy.log($el.text())
        let curso = $el.text()
        cy.log(curso) 

       })
    })

    it("Each dos", () => {
        
        cy.visit("https://practice.automationtesting.in/shop/")
        cy.title("eq","Products – Automation Practice Site")
        cy.wait(2000)
 
        cy.get(".woocommerce-LoopProduct-link").each(($el,index,$list)=>{
         //cy.log(index)
         //cy.log($list)
 
         //cy.log($el.text())
         let curso = $el.text()
         if(curso.includes("JS Data Structures and Algorithm")){
            cy.wrap($el).click() //Hagarra esos elementos y escoje uno
         }
 
        })
     })

     it("Each tres - Reto", () => {
        
        cy.visit("https://practice.automationtesting.in/shop/")
        cy.title("eq","Products – Automation Practice Site")
        let t=200
        cy.wait(t)
        
 
        for(let x=0; x<=3; x++ ){
            cy.get(".woocommerce-LoopProduct-link").eq(x).click()
            cy.wait(t)
            cy.get('.reviews_tab > a').should("be.visible").click()
            cy.wait(t)
            cy.get('#wp-comment-cookies-consent').should('not.be.checked').check({force:true}).should('be.checked')
            cy.get('.form-submit #submit').should("be.visible").click()
            cy.get('#menu-item-40').should("be.visible").click()

        }
        
     })

     it("Each cuatro - Falla", () => {
        
        cy.visit("https://practice.automationtesting.in/shop/")
        cy.title("eq","Products – Automation Practice Site")
        let t=200
        cy.wait(t)
        const datos=[];
        
        cy.get(".woocommerce-LoopProduct-link").each(($el,index,$list)=>{
            datos[index]=$el.text()
            
        }).then(()=>{

            for(let x=0; x<=datos.length; x++ ){
                cy.get(".woocommerce-LoopProduct-link").eq(x).click()
                cy.wait(t)
                cy.get('.reviews_tab > a').should("be.visible").click()
                cy.wait(t)
                cy.get('#wp-comment-cookies-consent').should('not.be.checked').check({force:true}).should('be.checked')
                cy.get('.form-submit #submit').should("be.visible").click()
                cy.get('#menu-item-40').should("be.visible").click()
    
            }
        })
        
        cy.log(datos)
     })

   
})//Cierre de describe