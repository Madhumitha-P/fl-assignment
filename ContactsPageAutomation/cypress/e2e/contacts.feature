Feature: Contacts Page Test

Scenario: Verify the title and header of the page
Given User is on Contacts Page
Then Validate the title of the page
    |Header                             |
    |Contact us                         | 

Scenario: Verify that all the fields are displayed
Given User is on Contacts Page
Then Validate all fields are displayed
    |Fields            |
    |FirstName         |
    |LastName          |
    |Email             |
    |MobileNo          |
    |Howhear           |
    |Message           |
    |SendMessageBtn    |

Scenario: Verify the default value and possible values of "How did you hear about us?" dropdown
Given User is on Contacts Page
Then Validate default value of dropdown
    |DefaultValue               |
    |How did you hear about us? |
And Validate all possible values can be selected
    | Value                      |
    | Referral                   |
    | Word of mouth              |
    | Event                      |
    | Article                    |
    | Facebook                   |
    | Twitter                    |
    | Instagram                  |
    | LinkedIn                   |
    | Job board                  |
    | Other                      |
    | Clubhouse                  |


Scenario Outline: Validate mandatory input fields of contacts page by passing invalid values
Given User is on Contacts Page
When User enters following invalid <Value> in <FieldName> field
Then Validate the field <FieldName> throws expected error <Message>

Examples:
    | Value                      | Message                                                     | FieldName |
    | " "                        | "Please complete this required field."                      | "Name"    |
    | ""                         | "Please complete this required field."                      | "Name"    |
    | " "                        | "Please complete this required field."                      | "Email"   |
    | ""                         | "Please complete this required field."                      | "Email"   |
    | "testingqa@test.com"       | "Please enter a valid email address."                       | "Email"   |
    | "******@gmail.com"         | "Please enter a valid email address."                       | "Email"   |
    | "testingqa"                | "Email must be formatted correctly."                        | "Email"   |
    | "testingqa@gmail"          | "Email must be formatted correctly."                        | "Email"   |
    | "testingqa#gmail.com"      | "Email must be formatted correctly."                        | "Email"   |
    | "testingqa@***.com"        | "Email must be formatted correctly."                        | "Email"   |
    | "@@@@@@@@@..."             | "Email must be formatted correctly."                        | "Email"   |
    | " "                        | "Please complete this required field."                      | "MobileNo"|
    | ""                         | "Please complete this required field."                      | "MobileNo"|
    | "32424"                    | "The number you entered is not in range."                   | "MobileNo"|
    | "12434**"                  | "A valid phone number may only contain numbers, +()-. or x" | "MobileNo"|
    | "+(12)3324848939298494992" | "The number you entered is not in range."                   | "MobileNo"|
    | "+(x-12)-4324-235-2525-435"| "A valid phone number may only contain numbers, +()-. or x" | "MobileNo"|
    | " "                        | "Please complete this required field."                      | "Message" |
    | ""                         | "Please complete this required field."                      | "Message" |



Scenario: Validate contacts page by passing valid values and confirm no validation error occurs
Given User is on Contacts Page
When User enters following valid values in all fields
    | FirstName| LastName| Email                  | MobileNo           | Howhear | Message              |
    | Test     | Test    | testingqa@qatest.com   | +(91)-3294823932   | Other   | Test Contacts Page   |
Then Validate no errors present for all the fields and submit button is enabled


# The following steps can be executed in lower enviroments only by disabling "Recaptcha" as it is not a good candidate for automation
# And Click on the SendMessage button
# And Validate that the successful message is present and input fields should not present
#     | SuccessMessageSent                                                       |                      
#     | Thank you for your message. We'll get back to you as soon as possible.   |