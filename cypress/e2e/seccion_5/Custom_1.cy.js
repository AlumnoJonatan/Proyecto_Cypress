/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Comandos personalizados', () =>{
    let time = 2000
    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(time)
    })
    it('Demo 1', ()=> {
        cy.Texto_visible('#userName','Jonatan',2000)
        cy.Texto_visible('#userEmail','jromero.utn@gmail.com',2000)
        cy.Texto_visible_xpath("//textarea[@id='currentAddress']","Dirección uno",1000)
        cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]","Dirección dos",1000)
        cy.Click('#submit',2000)
    })

    it('Demo 2 por bloque', ()=> {
        cy.Bloque_ToolsQA('Jonatan','jromero@ejemplo.com','Dirección uno','Dirección dos',1000)
    })
})
