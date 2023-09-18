const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
//Cross-Browser-Testing
async function chromeBrowserTesting() {
const chromeOptions = new chrome.Options();
const driver = await new Builder()
.forBrowser("chrome")
.setChromeOptions(chromeOptions)
.build();
  

  try {
    await driver.get("https://dev.deepthought.education/login");
    await driver.findElement(By.name('q'));
    await driver.sleep(5000);

    
  } finally {
    await driver.quit();
  }
  
}
chromeBrowserTesting();