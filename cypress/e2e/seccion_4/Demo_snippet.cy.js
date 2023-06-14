/// <reference types='cypress' />


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Demo del primer Snippet', () =>{

    it('Demo uno', ()=> {
        let time = 1500
        cy.visit('https://google.com')
        cy.title().should('eq','Google')
        cy.wait(time)
    })
})
