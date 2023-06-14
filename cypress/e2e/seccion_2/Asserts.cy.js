/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath');

describe("Nueva sección Assert", () =>{

    it("Assert Contains", () => {
        cy.visit("https://practice.automationtesting.in/")
        cy.title().should("eq","Automation Practice Site")
        cy.wait(1500)

        cy.get(".sub_row_1-0-2").contains("Selenium Ruby").click()
        
    })

    it("Assert Find, eq", () => {
        cy.visit("https://practice.automationtesting.in/")
        cy.title().should("eq","Automation Practice Site")
        cy.wait(2000)

        cy.get(".sub_row_1-0-2").find(".sub_column").eq(1).click()
        
    })
    
    it("Assert Find, eq - Con validación de la categoría igual a HTML y el precio", () => {
        cy.visit("https://practice.automationtesting.in/")
        cy.title().should("eq","Automation Practice Site")
        cy.wait(2000)

        cy.get(".sub_row_1-0-2").find(".sub_column").eq(1).click()
        cy.get(".posted_in > a").then((e)=>{
            //cy.log(e.text())
            let estado = e.text()
            //cy.log(estado)
            if(estado=="HTML"){
                cy.log("La categoría es HTML")
            }
        })

        cy.get("ins > .woocommerce-Price-amount").then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            cy.log(precio)
            precio=precio.slice(1,4)
            cy.log(precio)

            if(precio > 500){
                cy.log("La categoria de HTML sale del prosupuesto, no lo podemos comprar")
            }else{
                cy.log("La categoría de HTML está en nuestro prosupuesto")
                cy.xpath("//a[@data-product_id='181']").click()
                cy.wait(3000)
            }
        })
        
    })


    it("Assert Contains.tex y have.text", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get("#userName").should("be.visible").type("Jonatan")
        cy.get("#userEmail").should("be.visible").type("jromero@gmail.com")
        cy.get("#submit").should("be.visible").click()

        cy.get("#name").should("have.text","Name:Jonatan")
        cy.get("#name").should("contain.text","Jonatan")
    })
   
    it("Assert have.value más then", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get("#userName").should("be.visible").type("Jonatan")

        cy.get("#userName").should("have.value","Jonatan").then(()=>{
            cy.get("#userEmail").should("be.visible").type("jromero@gmail.com")
            cy.get("#submit").should("be.visible").click()
        })
    })

    it("Assert have.class", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get("#userName").should("be.visible").should("have.class","mr-sm-2").then(()=>{
            cy.get("#userName").type("jonatan")
        })
    })

    it("Assert have.class y la función and", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get("#userName").should("be.visible").and("have.class","mr-sm-2").then(()=>{
            cy.get("#userName").type("jonatan")
        })
    })

    it("Assert not_have_class", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-22").then(()=>{
            cy.get("#userName").type("jonatan")
        })
    })

    it("Assert length y el css", () => {
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        cy.title().should("eq","Selenium Easy - Table with Pagination Demo")
        cy.wait(2000)

        cy.get("#myTable > tr > td").should("have.length",91).and("have.css","padding","8px")

    })

    it("Contains", () => {
        let tiempo=1000

        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should("eq","Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)

        cy.get('.form-group > #user-message').should("be.visible").type("Demo del contenido")

        cy.wait(tiempo)
        cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})

    })

    it.only("Reto Asserts", () => {
        let tiempo=2000

        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should("eq","Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)

        let a=40
        let b=30

        cy.get('#value1').should("be.visible").and("have.class","form-control").type(a)
        cy.wait(tiempo)
        cy.get('#value2').should("be.visible").and("have.class","form-control").type(b)
        cy.wait(tiempo)
        
        cy.contains("[type='button']","Get Total").click()

        cy.get('#displayvalue').should("be.visible").then((e)=>{
            let r=a+b
            cy.log("El valor de r: ", r)
            cy.log(e.text())
            let res=e.text()

            if(r==res){
                cy.log("Son iguales")
            }else{
                cy.log("El resultado es incorrecto")
            }

            if(res > 50)
            {
                a=a-10
                b=b-10
                cy.get('#value1').invoke("attr","placeholder").should("contain","Enter value").then(()=>{
                    cy.get('#value1').clear().type(a)
                    cy.get("#value1").invoke("attr","style","color:red")
                })
                cy.wait(tiempo)
                cy.get('#value2').should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                cy.get("#value2").invoke("attr","style","color:red")
                cy.wait(tiempo)
                cy.contains("[type='button']","Get Total").click()

                cy.get('#displayvalue').should("be.visible").then((e)=>{
                    cy.get("#displayvalue").invoke("attr","style","color:yellow")
                })
            }else{
                a=a+5
                b=b+5
                cy.get('#value1').should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get('#value2').should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                cy.contains("[type='button']","Get Total").click()
            }

        })

    })

})//Cierre de describe