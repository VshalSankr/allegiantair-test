const { Given, When, Then } = require("@wdio/cucumber-framework");
const Home = require("../pageobjects/home.page.js");
const Flights = require("../pageobjects/flights.page.js");
const Bundles = require("../pageobjects/bundles.page.js");

Given(/^I am on the homepage$/, async () => {
  await Home.OpenHomePage();
});

When(
  /^I enter departure and arrival cities, dates, and other flight details$/,
  async () => {
    let searchButton=Home.searchButton;
    await searchButton.waitForExist();
    await searchButton.waitForClickable();
    await searchButton.click();

    await browser.pause(1000);
  }
);

When(/^I can select a flight on flights page$/, async() => {
  await Flights.continueToBundles();
  await browser.pause(1000);
});

Then(/^I can select a bundle$/, async() => {
  await Bundles.continueToTravelers();
  await browser.pause(1000);
});

Then(/^I can provide personal details of travelers$/, () => {
  return true;
});

Then(/^I can select seats$/, () => {
  return true;
});

Then(/^I can select any bags and extras needed$/, () => {
  return true;
});

Then(/^I can optionally select a hotel$/, () => {
  return true;
});

Then(/^I can optionally select a rental car$/, () => {
  return true;
});

Then(/^I can proceed to the payment section$/, () => {
  return true;
});
