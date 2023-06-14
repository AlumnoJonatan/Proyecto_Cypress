/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Elementos de una tabla", () =>{

    it("CHILDREN", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        cy.get(".btn-group").children(".btn-success")
        cy.wait(tiempo)
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
        cy.wait(tiempo)
        cy.get(".btn-group").children(".btn-danger").should("contain","Red").click({force:true})
    })

    it("Seleccionar por medio de EQ", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        cy.get('[type="button"]').eq(2).should("contain","Orange").click({force:true})
        cy.wait(tiempo)
        cy.get('[type="button"]').eq(4).should("contain","All").click({force:true})
        
    })

    it("Seleccionar por medio de Filter", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        cy.get('[type="button"]').filter(".btn-warning").should("contain","Orange").click({force:true})
        cy.wait(tiempo)
        cy.get('[type="button"]').filter(".btn-success").should("contain","Green").click({force:true})
        cy.wait(tiempo)
        cy.get('[type="button"]').filter(".btn-danger").should("contain","Red").click({force:true})
        cy.wait(tiempo)
        cy.get('[type="button"]').filter(".btn-default").should("contain","All").click({force:true})
        
    })

    it("Seleccionar por medio de Find", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        cy.get(".btn-group").find(".btn-danger").should("contain","Red").click()
        cy.wait(tiempo)
        cy.get('[type="button"]').contains("Orange").click()
        
    })

    it("Seleccionar por medio de First", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)
        //Primer elemento
        cy.get(".btn-group").find("button").first().click()
        cy.wait(tiempo)
        //Ultimo elemento
        cy.get(".btn-group").find("button").last().click()
        
    })

    it("Seleccionar los siguientes elementos (NextAll)", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)
        
        cy.get('[type="button"]').should("contain","Green")
        cy.wait(tiempo)
        cy.get('[type="button"]').should("contain","Green").nextAll().should("have.length",4)
    })

    it("Seleccionar el elemento padre ", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        cy.get('[type="button"]').parent().should("have.class","btn-group")
        cy.get('.btn-group').parent().should("have.class","pull-right")
        
    })

    it("Seleccionar todos los elementos del botón All", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        cy.get('[type="button"]').filter(".btn-default").should("contain","All").click({force:true})
        //Otra alternativa
        //cy.get('[type="button"]').eq(4).should("contain","All").click({force:true})
        cy.wait(tiempo)
        //Para seleccionar los check
        cy.get("[type='checkbox']").check({force:true})

        cy.wait(tiempo)
        //cy.get('[type="button"]').filter(".btn-default").should("contain","All").click({force:true})
        //Otra alternativa
        cy.get('[type="button"]').eq(1).should("contain","Green").click({force:true})
        cy.wait(tiempo)
        //Para seleccionar los check
        cy.get("[type='checkbox']").check({force:true})
        
    })

    it("Reto de las tablas con For y Asserts", ()=> {
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        for(let i=1;i<=4;i++){
            let nombreButton=""

            if(i==1){
                nombreButton="Green"
            }
            else if(i==2){
                nombreButton="Orange"
            }
            else if(i==3){
                nombreButton="Red"
            }
            else if(i==2){
                nombreButton="All"
            }
            //cy.get('[type="button"]').filter(".btn-default").should("contain","All").click({force:true})
            //Otra alternativa
            cy.get('[type="button"]').eq(i).should("contain",nombreButton).click({force:true})
            cy.wait(tiempo)
            //Para seleccionar los check
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(tiempo)
        }
        
        
    })

    it("Mostrando los campos de las tablas", ()=> {
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(1500)

        const datos=[]

        cy.get(".odd td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
            }
        })
    })

    it("Sumando los valores de todos los campos", ()=> {
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')

        const datos=[]
        let cantidadOdd=0

        cy.get("[role='row'] td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd+=Number(datos[i])
                }
            }
            cy.log("La cantidad total es: " + cantidadOdd)
            expect(cantidadOdd).to.eq(394)
        })
    })


    it("Valor de un campo en especifico", ()=> {
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')

        const campo = cy.get('tbody > :nth-child(7) > :nth-child(2)')
        //cy.log(campo)
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato)

            if(dato.includes("Javascript Developer")){
                campo.eq(index).next().next().then((age)=>{
                    const Edad=age.text()
                    cy.log(Edad)
                    cy.log("La edad de Javascript Developer es: " + Edad + " añitos")
                    expect(Edad).to.equal("39")
                })
            }
        })
        
    })
   
})//Cierre de describe