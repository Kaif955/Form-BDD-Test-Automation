Feature: Simple Form Submission

  Scenario: To validate submitting a simple form with a message
  Given Open the browser and Enter the Simple Form URL
  When User enters in the first name field
  And User enters the last name field
  And User enters in the email field
  And User enters in the contact number field
  And User enters in the message box
  And User clicks on the Submit button
  Then A success message should be displayed confirming form submission
