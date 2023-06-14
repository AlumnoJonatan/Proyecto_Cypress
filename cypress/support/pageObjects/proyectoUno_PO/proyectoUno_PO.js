class ProyectoUno_PO{

    visitHome(){
        let time=1000
        beforeEach(()=>{
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(time)
        })
    }

    SeccionUno(fname,lname,email,t){
        let time = t
        cy.xpath("//input[contains(@name,'first_name')]").should('be.visible').type(fname)
        cy.wait(time)
        cy.xpath("//input[contains(@name,'last_name')]").should('be.visible').type(lname)
        cy.wait(time)
        cy.xpath("//input[contains(@name,'email')]").should('be.visible').type(email)
        cy.wait(time)
    }

    SeccionDos(phone,dir,ciudad,estado,t){
        let time = t
        cy.xpath("//input[contains(@name,'phone')]").should('be.visible').type(phone)
        cy.wait(time)
        cy.xpath("//input[contains(@name,'address')]").should('be.visible').type(dir)
        cy.wait(time)
        cy.xpath("//input[contains(@name,'city')]").should('be.visible').type(ciudad)
        cy.wait(time)
        cy.xpath('//select[contains(@name,"state")]').select(estado,{force:true})
        cy.wait(time)
    }

    SeccionTres(cp,web,proyecto,t){
        let time = t
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
    }

}//Final

export default ProyectoUno_PO;