const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

//On successful login, validate that the user is redirected to the dashboard screen.		
async function ShowError() {
  const chromeOptions = new chrome.Options();
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try { 
    await driver.get("https://dev.deepthought.education/login");
    const usernameField = await driver.findElement(By.css("input#username"));
    const passwordField = await driver.findElement(By.css("input#password"));

    await usernameField.sendKeys("1234567");
    await passwordField.sendKeys("1234567", Key.RETURN);
    await driver.sleep(5000);

     console.log("Successfully logged in to DeepThought!");
  } catch (error) {
    console.error("Error occurred: ", error);
  } finally {
  
    await driver.quit();
  }
}

ShowError();
