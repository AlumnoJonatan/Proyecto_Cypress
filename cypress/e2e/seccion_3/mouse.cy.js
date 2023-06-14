/// <reference types="cypress" />

import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

describe("Cypress evemntos mouse", () =>{

    it("Drag and Drop", () => {
        let tiempo = 3000;
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
        cy.title().should("eq", "The Internet");
      
        // Localiza los elementos que deseas arrastrar y soltar
        cy.get("#column-a").as("source");
        cy.get("#column-b").as("target");

        // Dispara el evento 'dragstart' en el elemento de origen
        cy.get("@source").trigger("dragstart");

        // Dispara el evento 'dragenter' en el elemento de destino
        cy.get("@target").trigger("dragenter");

        // Dispara el evento 'drop' en el elemento de destino
        cy.get("@target").trigger("drop");

      });
    
    it("Drag and Drop 2", () => {
        let tiempo = 3000;
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html");
        cy.title().should("eq", "Selenium Easy Demo - Drag and Drop Demo");
        cy.wait(1500);
      
        cy.get('#todrag > :nth-child(2)').drag('[id="mydropzone"]');
        cy.get('#todrag > :nth-child(3)').drag('[id="mydropzone"]');
        cy.get('#todrag > :nth-child(4)').drag('[id="mydropzone"]');
        cy.get('#todrag > :nth-child(5)').drag('[id="mydropzone"]');
      });

      

      it("Mouse over", () => {
        let tiempo = 3000;
        cy.visit("https://www.way2automation.com/#");
        cy.title().should("eq", "Get Online Selenium Certification Course | Way2Automation");
        cy.wait(tiempo);
        
          cy.contains('.eicon-close').click()
        
        
          cy.get('#menu-item-27617 > [href="#"]').trigger('mouseover')
          cy.contains("Practice Site 1").click()
          //Para squitar la etiqueta target de un link a otra pagina utilizamos
          //cy.contains("Resources").invoke("RemoveAttr","target").click()
        
      });

      it.only("Slider", () => {
        let tiempo = 2000;
        cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html");
        cy.title().should("eq", "Selenium Easy - Drag and Drop Range Sliders");
        cy.wait(tiempo);
        
        cy.get('#slider1 > .range > input').invoke("attr","value","90")

        cy.wait(tiempo);
        cy.get('#slider3 > .range > input').invoke("attr","value","90")

        cy.wait(tiempo);
        cy.get('#slider5 > .range > input').invoke("attr","value","90")
        
      });
   
})//Cierre de describe