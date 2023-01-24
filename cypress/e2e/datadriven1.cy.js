before(function() {
    cy.visit("https://www.agrimachinerypb.com");

    cy.wait(1000)
           cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(5) > button').click();
               cy.get('#UserName').type("9875901307")
               cy.get('#Password').type("vishal1307")
               cy.wait(20000)
               cy.get('#LoginBtn').should('be.visible').click();
                cy.wait(5000)
               cy.get('#menu-1058').should('be.visible').click()
 })
         //const testdata = require("../fixtures/punjab.json")
               describe('Login web application',()=>{
               it('Data driven test',()=>{
              cy.fixture("dynamic").then ((data)=> {
                data.forEach((userdata)=> {
               cy.get('#accordion > div > div > div > div.around-panel > div > div > div > div > div > input').type(userdata.Aadhar)
                cy.wait(3000)
               cy.get('#search_button').click();
              cy.wait(2000)
        cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(2) > div:nth-child(4) > div > select').select(userdata.Variety)    //Varity of sugar cane
        cy.wait(500)
        cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(1) > div > div > select').select('2020-21')    // For Session
        cy.wait(500)
        cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(2) > div:nth-child(1) > div > input').type(userdata.Parchi)    // Parchi Token Number
       cy.wait(500)
       cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(2) > div:nth-child(5) > div > input').type(userdata.Quantity)       // Quantity
       cy.get(500)
       cy.get('input[id="my-date-input"]').type(userdata.Date);   // Current date
      
       cy.get('input[id="token_number_doc_id"]')
       .selectFile('cypress/fixtures/bhg.png')   // fOR FILE UPLOAD
       cy.wait(5000)
       cy.get("#accordion > div > div > div.address-heading > button").click({force: true}) 
       cy.wait(5000)
       cy.get ('#accordion > div > div > div > div.around-panel > div > div > div > div > div > input').click ().clear()

    })
})
    })
})