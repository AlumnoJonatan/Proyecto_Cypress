/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Carga por Fixture', () =>{

    //before(function(){
    //    cy.fixture('datos').then((data)=>{
    //        globalThis.data=data
    //    })
    //})

    // before(function(){
    //    cy.fixture('datos').as('datos_json') //El Alias
    // })


    it('Test uno cargando desde json', ()=> {
        //cy.visit('https://demoqa.com/text-box')
        //cy.title().should('eq','DEMOQA')
        //cy.wait(1500)
        let time = 200
        cy.fixture('excelJson').then(testdata =>{
            testdata.forEach(data =>{
                const d_nombre=data.nombre
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq','DEMOQA')
                cy.wait(time)

                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(time)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.wait(time)
                cy.get('#currentAddress').should('be.visible').type(d_dir1)
                cy.wait(time)
                cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                cy.wait(time)
                cy.get('#submit').should('be.visible').click({force:true})

            })
        })
        
    })
})
