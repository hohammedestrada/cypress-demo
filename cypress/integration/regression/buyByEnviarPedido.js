const { describe } = require("mocha");

/// <reference types="cypress" />

describe(`Suit Test`, () =>{
    it(`Buy by Send Order`, () =>{
        // cy.visit('cl?consultantUrl=Alessandrita', { failOnStatusCode: false })
        cy.visit(`cl?consultantUrl=Alessandrita`)
        cy.get('#lbel-01 > .yCmsComponent > a').click()
        cy.get('#lbel-02 > .yCmsComponent > a').click()
        cy.get('#lbel-03 > .yCmsComponent > a').click()
        cy.get(':nth-child(1) > .inner-card').click()
        cy.get('#addToCartButton').click()
        cy.get('#addToCartLayer > .btn-black').click()
        cy.get(':nth-child(5) > .cart__actions > .row > :nth-child(1) > .btn').click()
        cy.xpath(`//input[@id='guest.firstName']`).type(`Hohammed`)
        cy.xpath(`//input[@id='guest.lastName']`).type(`Estrada`)
        cy.xpath(`//input[@id='guest.email']`).type(`hohammedestrada@mailinator.com`)
        cy.xpath(`//input[@id='guest.confirm.email']`).type(`hohammedestrada@mailinator.com`)
        cy.contains(`Inicia como Invitado`).click()
        // cy.xpath(`//a[contains(text(),'Ir a pagar')]`).click()
        cy.xpath(`//a[contains(text(),'Enviar pedido')]`).click()
        cy.get('.consultant-name').should(`contain`, `JESSICA VARGAS`)
        cy.get('h3').should(`contain`, `¡Listo! Tu pedido fue enviado`)
        cy.get('.consultant-confirmation-button-wsp-container > .btn').should('have.attr', 'href')
        // cy.xpath(`//a[contains(@class,'btn btn-black')]`)

    })


})