// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('Texto_visible', (selector,texto,t) => {
    let time=t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(time)
 })

 Cypress.Commands.add('Texto_visible_xpath', (selector,texto,t) => {
    let time=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(time)
 })

 Cypress.Commands.add('Click', (selector,t) => {
    let time=t
    cy.get(selector).should('be.visible').click()
    cy.wait(time)
 })

 Cypress.Commands.add('Click_xpath', (selector,t) => {
    let time=t
    cy.xpath(selector).should('be.visible').click()
    cy.wait(time)
 })

 Cypress.Commands.add('Click_force', (selector,t) => {
    let time=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(time)
 })

 Cypress.Commands.add('Click_force_xpath', (selector,t) => {
    let time=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(time)
 })

 Cypress.Commands.add('Validar_campo', (selector,men,nom_campo,t) => {
    let time=t
    cy.xpath(selector).should('be.visible').then((val)=>{
        let dato=val.text()
        cy.log("El valor del log es: " + dato)
        let mensaje=men
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log("#####################")
            cy.log("El " + nom_campo + " no es válido")
            cy.log("#####################")
        }
    })
 })

 Cypress.Commands.add('Validar_campo2', (selector,men,nom_campo,t) => {
    let time=t
    cy.xpath(selector).should('be.visible').should('contain',men).then((val)=>{
        cy.log("##################################")
        cy.log("EL " + nom_campo + " NO ES VÁLIDO")
        cy.log("##################################")
    })
 })









 //Funciones por conjuntos o completas
 //Creando la función  TOOLSQA
 Cypress.Commands.add('Bloque_ToolsQA', (name, email,dir1,dir2,t) => { 
    let time = t
    cy.get('#userName').should('be.visible').type(name)
    cy.wait(time)
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(time)
    cy.get('.col-md-9 > #currentAddress').should('be.visible').type(dir1)
    cy.wait(time)
    cy.get('.col-md-9 > #permanentAddress').should('be.visible').type(dir2)
    cy.wait(time)
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(time)
  })

Cypress.Commands.add('Bloque_ToolsQA_Dos', (name, email,dir1,dir2,t) => { 
    let time = t
    cy.Texto_visible('#userName',name,2000)
    cy.Texto_visible('#userEmail',email,2000)
    cy.Texto_visible_xpath("//textarea[@id='currentAddress']",dir1,1000)
    cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]",dir2,1000)
    cy.Click('#submit',2000)
})

Cypress.Commands.add('Bloque_Reto_Form', (fname,lname,email,phone,dir,ciudad,estado,cp,web,proyecto,t) => { 
    let time = t
    cy.xpath("//input[contains(@name,'first_name')]").should('be.visible').type(fname)
    cy.wait(time)
    cy.xpath("//input[contains(@name,'last_name')]").should('be.visible').type(lname)
    cy.wait(time)
    cy.xpath("//input[contains(@name,'email')]").should('be.visible').type(email)
    cy.wait(time)
    cy.xpath("//input[contains(@name,'phone')]").should('be.visible').type(phone)
    cy.wait(time)
    cy.xpath("//input[contains(@name,'address')]").should('be.visible').type(dir)
    cy.wait(time)
    cy.xpath("//input[contains(@name,'city')]").should('be.visible').type(ciudad)
    cy.wait(time)
    cy.xpath('//select[contains(@name,"state")]').select(estado,{force:true})
    cy.wait(time)
    cy.xpath("//input[contains(@name,'zip')]").should('be.visible').type(cp)
    cy.wait(time)
    cy.xpath("//input[contains(@name,'website')]").should('be.visible').type(web)
    cy.wait(time)
    cy.xpath("//input[contains(@value,'yes')]").check().should('be.checked')
    cy.wait(time)
    cy.xpath("//textarea[contains(@class,'form-control')]").should('be.visible').type(proyecto)
    cy.wait(time)
    cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({force:true})
    cy.wait(time)
})
