import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ContactsPage from "../pages/contactspage";

const contact = new ContactsPage();

Given("User is on Contacts Page", () => {
    // cy.visit("https://www.founderandlightning.com/contact")
    cy.visit(Cypress.env('contacts_url'))
    contact.getCookieWindowAccept().should('be.visible').click()
});

When("User enters following invalid {string} in {string} field", (value,field) => {
    if(value == ""){
      contact.getSubmitBtn().click();
    }else{
      switch(field){
        case 'Name': contact.getFirstName().type(value);
                     contact.getLastName().type(value);
                     break;
        case 'Email': contact.getEmail().type(value);
                      break;
        case 'MobileNo': contact.getMobileNumber().type(value);
                         break;
        case 'Message': contact.getMessageTextArea().type(value);
                        break;
        default: cy.log("Provide valid fieldname");
      }
    }
  
});

When("Click on the SendMessage button", ()=>{
  contact.getSubmitBtn().click()
});


When("User enters following valid values in all fields", (datatable)=>{
  datatable.hashes().forEach((element) => {
    contact.getFirstName().type(element.FirstName)
    contact.getLastName().type(element.LastName)
    contact.getEmail().type(element.Email)
    contact.getMobileNumber().type(element.MobileNo)
    contact.getHowHearSelect().select(element.Howhear)
    contact.getMessageTextArea().type(element.Message)
})
});

Then("Validate the field {string} throws expected error {string}", (field, message)=>{
  switch(field){
    case 'Name':  contact.getLastNameError().contains(message);
                  contact.getFirstNameError().contains(message);
                  // contact.getLastNameError().contains(message).should('be.visible');
                  // contact.getFirstNameError().contains(message).should('be.visible');
                  break;
    case 'Email': contact.getEmailError().contains(message).should('be.visible');
                  break;
    case 'MobileNo': contact.getMobileNumberError().contains(message).should('be.visible');
                     break;
    case 'Message': contact.getMessageTextAreaError().contains(message).should('be.visible');
                    break;
    default: cy.log("Provide valid fieldname")

  }
});


Then("Validate no errors present for all the fields and submit button is enabled", ()=>{
  contact.getFirstNameError().should('not.exist')
  contact.getLastNameError().should('not.exist')
  contact.getEmailError().should('not.exist')
  contact.getMobileNumberError().should('not.exist')
  contact.getMessageTextAreaError().should('not.exist')
  contact.getSubmitBtn().should('be.enabled')
});


Then("Validate that the successful message is present and input fields should not present", (datatable)=>{
  datatable.hashes().forEach((element) => {
      contact.getMsgAfterClickSend().should('be.visible').contains(element.SuccessMessageSent);
      contact.getFirstName().should('not.be.visible')
      contact.getLastName().should('not.be.visible')
      contact.getEmail().should('not.be.visible')
      contact.getMobileNumber().should('not.be.visible')
      contact.getHowHearSelect().should('not.be.visible')
      contact.getMessageTextArea().should('not.be.visible')
      contact.getSubmitBtn().should('not.be.visible')
    });
});

Then("Validate the title of the page", ()=>{
  contact.getHeader().contains('Contact us').should('be.visible')
});

Then("Validate all possible values can be selected", (dataTable)=>{

  dataTable.hashes().forEach((option)=>{
    contact.getHowHearSelect().select(option.Value).should('have.value',option.Value)
  })
});

Then("Validate default value of dropdown", (dataTable)=>{
    dataTable.hashes().forEach((expected)=>{
      contact.getHowHearSelect().contains(expected.DefaultValue);
    })
});

Then("Validate all fields are displayed", (dataTable)=>{
  dataTable.hashes().forEach((value)=>{
    let field = value.Fields;
    switch(field){
      case 'FirstName': contact.getFirstName().should('be.visible');
                        break;
      case 'LastName': contact.getLastName().should('be.visible');
                       break;
      case 'Email': contact.getEmail().should('be.visible');
                    break;
      case 'MobileNo': contact.getMobileNumber().should('be.visible');
                       break;
      case 'Howhear': contact.getHowHearSelect().should('be.visible');
                      break;
      case 'Message': contact.getMessageTextArea().should('be.visible');
                      break;
      case 'SendMessageBtn': contact.getSubmitBtn().should('be.visible');
                             break;
      default: cy.log("Provide valid fieldname"); 
    }
  })
})
