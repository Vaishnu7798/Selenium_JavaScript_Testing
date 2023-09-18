const { Builder, By } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
//Cross-Browser-Testing
async function MicrosoftEdgeTesting() {
  const edgeOptions = new edge.Options();
  const driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .setEdgeOptions(edgeOptions)
    .build();

  try {
    await driver.get('https://dev.deepthought.education/login');
    await driver.findElement(By.name('q'));
    await driver.sleep(5000);

  } finally {
    await driver.quit();
  }
}

MicrosoftEdgeTesting();

