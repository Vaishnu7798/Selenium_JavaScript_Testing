const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");


//Test unsuccessful login attempts with invalid credentials.		
async function Deep() {
  const chromeOptions = new chrome.Options();
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try {
    
    await driver.get("https://dev.deepthought.education/login");

    // Find the username and password input fields by their CSS selectors
    const username = await driver.findElement(By.css("input#username"));
    const password = await driver.findElement(By.css("input#password"));

    // Enter your username and password
    await username.sendKeys("vaishnavi123",Key.TAB);
    await password.sendKeys("v@ishu77", Key.ENTER);
    await driver.sleep(5000);

     console.log("Successfully logged in to DeepThought!");
  } catch (error) {
    console.error("Error occurred: ", error);
  } finally {
    // Close the browser window
    await driver.quit();
  }
}
// Call the login function
Deep();
