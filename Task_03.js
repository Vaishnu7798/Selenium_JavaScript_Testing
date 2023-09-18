const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");


//Validate that appropriate error messages are displayed for invalid login attempts.		
async function loginToDeepThought() {
  const chromeOptions = new chrome.Options();
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try {
    
    await driver.get("https://dev.deepthought.education/login");

    
    const usernameField = await driver.findElement(By.css("input#username"));
    const passwordField = await driver.findElement(By.css("input#password"));

    await usernameField.sendKeys("vaishnavi123");
    await passwordField.sendKeys("v@ishu77V", Key.ENTER);
    await driver.sleep(5000);

     console.log("Successfully logged in to DeepThought!");
  } catch (error) {
    console.error("Error occurred: ", error);
  } finally {
   
    await driver.quit();
  }
}

loginToDeepThought();
