Given('Abrir el navedagor principal',()=>{
    cy.visit('https://demoqa.com/text-box')
})

When('Cargando el nombre',()=>{
    cy.get('#userName').should('be.visible').type('Jonatan')
    cy.wait(500)
})

When('Cargando el email',()=>{
    cy.get('#userEmail').should('be.visible').type('jromero@gmail.com')
    cy.wait(500)
})

And('Cargado la dirección',()=>{
    cy.get('#currentAddress').should('be.visible').type('Dirección uno')
    cy.wait(500)
})

Then('Validar el nombre de la Página',()=>{
    cy.title('eq','DEMOQA')
    cy.wait(500)
})