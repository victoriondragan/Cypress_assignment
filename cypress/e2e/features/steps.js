import { Given, When, Then } from '@cucumber/cucumber';

Given("an user reaches login page", function(expectedURL){
  this.expectedURL = expectedURL;
  return "pending";
})

When('the user enters correct username', function (expectedUsername) {
  this.expectedUsername = expectedUsername;
  return "pending";
});

When('the user enters correct password', function (expectedPassword) {
  this.expectedPassword = expectedPassword;
  return "pending";
});

When('the user clicks Sign In button', function (signInButton) {
  this.signInButton = signInButton;
  return "pending";
});

Then('the user will log in into application', function (expectedResponse) {
  //assert.equal()
  this.expectedResponse = expectedResponse;
  return "pending";
});