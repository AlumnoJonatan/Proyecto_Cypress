import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO';
/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Page Objects Models', ()=> {

    const master=new ProyectoUno_PO()

    master.visitHome()

    it('Valida que todas las secciones sean válidas', ()=> {
        master.SeccionUno("Jonatan","Romero","jromero@gmail.com",200)
        master.SeccionDos("3513589216","Duarte Quiros","Estados Unidos","Colorado",200)
        
    })

    it('Valida que el campo del Phone es incorrecto', ()=> {
        master.SeccionDos("a","Duarte Quiros","Estados Unidos","Colorado",200)
        cy.Validar_campo2("//small[@class='help-block'][contains(.,'Please supply a vaild phone number with area code')]","Please supply a vaild phone number with area code","Phone number",200)
    })

    it('Valida que el campo proyect está vacio', ()=> {
        master.SeccionTres("56988","www.jonatanh.com.ar"," ",200)
        cy.Validar_campo2("//small[@class='help-block'][contains(.,'Please supply a description of your project')]","Please supply a description of your project","Campo proyecto",200)
    })

})
