/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Reto cypress por medio de comandos personalizados', () =>{

    let time=200
    beforeEach(()=>{
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(time)
    })

    it('Prueba si el campo nombre es incorrecto', ()=> {
        cy.Bloque_Reto_Form('J','Romero','jromero@gmail.com','3513589216','Duarte Quiros 880','Córdoba Capital','Alabama','4500','www.google.com.ar','Prueba del proyecto',time)
        cy.Validar_campo2("(//small[@class='help-block'][contains(.,'Please enter more than 2 characters')])[1]","Please enter more than 2 characters","Campo nombre")
    })

    it('Prueba invalida por apellido', ()=> {
        cy.Bloque_Reto_Form('Jonatan','***/','jromero@gmail.com','3513589216','Duarte Quiros 880','Córdoba Capital','Alabama','4500','www.google.com.ar','Prueba del proyecto',time)
    })

    it('Prueba si un email es incorrecto', ()=> {
        cy.Bloque_Reto_Form('Jonatan','Romero','jon.com','3513589216','Duarte Quiros 880','Córdoba Capital','Alabama','4500','www.google.com.ar','Prueba del proyecto',time)
        cy.Validar_campo2("//small[contains(@data-bv-validator,'emailAddress')]","Please supply a valid email address","Email")
    })

    it('Prueba ok', ()=> {
        cy.Bloque_Reto_Form('Jonatan','Romero','jromero@gmail.com','3513589216','Duarte Quiros 880','Córdoba Capital','Alabama','4500','www.google.com.ar','Prueba del proyecto',time)
    })
})
