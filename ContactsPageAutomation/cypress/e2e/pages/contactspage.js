export class ContactsPage{
    getFirstName(){
        return cy.get("[name='firstname']")
    }

    getFirstNameError(){
        return cy.get('.hs_firstname>ul>li')
    }

    getLastName(){
        return cy.get("[name='lastname']")
    }

    getLastNameError(){
        return cy.get('.hs_lastname>ul>li')
    }

    getEmail(){
        return cy.get("[name='email']")
    }

    getEmailError(){
        return cy.get('.hs_email>ul>li')
    }

    getMobileNumber(){
        return cy.get("[name='mobilephone']")
    }

    getMobileNumberError(){
        return cy.get(".hs_mobilephone>ul>li>label")
    }

    getHowHearSelect(){
        return cy.get("select[name='how_did_you_hear_about_us_']")
    }

    getMessageTextArea(){
        return cy.get("textarea[name='message']")
    }

    getMessageTextAreaError(){
        return cy.get(".hs_message>ul>li>label")
    }

    getSubmitBtn(){
        return cy.get("input[type='submit']")
    }

    getMsgAfterClickSend(){
        return cy.get(".submitted-message>p")
    }
    getCookieWindowAccept(){
        return cy.get("#hs-eu-confirmation-button-group>div>button[aria-label='Accept']")
    }

    getHeader(){
        return cy.get("body>div>div>h1")
    }
}

export default ContactsPage;