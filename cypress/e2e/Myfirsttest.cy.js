

describe('Login web application',()=>{
    
    it('Test Case sms app',()=>{
              
           cy.visit("https://www.agrimachinerypb.com");
           cy.wait(1000)
           cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(5) > button').click();
               cy.get('#UserName').type("9875901307")
               cy.get('#Password').type("vishal1307")
               cy.wait(20000)
               cy.get('#LoginBtn').should('be.visible').click();
                cy.wait(5000)
               cy.get('#menu-1058').should('be.visible').click()
              cy.get('#accordion > div > div > div > div.around-panel > div > div > div > div > div > input').type(495935751691)
              cy.wait(3000)
              cy.get('#search_button').click();
              cy.wait(2000)
              cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(2) > div:nth-child(4) > div > select').select('Early')    //Varity of sugar cane
              cy.wait(500)
              cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(1) > div > div > select').select('2020-21')    // For Session
              cy.wait(500)
              cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(2) > div:nth-child(1) > div > input').type(123456)    // Parchi Token Number
             cy.wait(500)
             cy.get('#accordion > div > div > div.address-heading > div > form > div > div:nth-child(2) > div:nth-child(5) > div > input').type(12345)       // Quantity
             cy.get(500)
             cy.get('input[id="my-date-input"]').type("2023-01-18");   // Current date
            
             cy.get('input[id="token_number_doc_id"]')
             .selectFile('cypress/fixtures/bhg.png')   // fOR FILE UPLOAD

             cy.get("#accordion > div > div > div.address-heading > button").click()
             cy.wait(500)
             cy.get ('#accordion > div > div > div > div.around-panel > div > div > div > div > div > input').click ().clear ().type ('416687344609');
             cy.get('#search_button').click();
            })
     })     
     
    