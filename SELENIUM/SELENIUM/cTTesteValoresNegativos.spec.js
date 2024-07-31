// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CT_TesteValoresNegativos', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CT_TesteValoresNegativos', async function() {
    // Test name: CT_TesteValoresNegativos
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://cadastrocars.vercel.app/")
    // 2 | setWindowSize | 1347x731 | 
    await driver.manage().window().setRect({ width: 1347, height: 731 })
    // 3 | click | css=.button > font > font | 
    await driver.findElement(By.css(".button > font > font")).click()
    // 4 | click | css=.brandField | 
    await driver.findElement(By.css(".brandField")).click()
    // 5 | select | css=.brandField | label=Honda
    {
      const dropdown = await driver.findElement(By.css(".brandField"))
      await dropdown.findElement(By.xpath("//option[. = 'Honda']")).click()
    }
    // 6 | click | css=.modelField | 
    await driver.findElement(By.css(".modelField")).click()
    // 7 | click | css=.app | 
    await driver.findElement(By.css(".app")).click()
    // 8 | click | css=.modelField | 
    await driver.findElement(By.css(".modelField")).click()
    // 9 | type | css=.modelField | CR-V Advanced Hybrid
    await driver.findElement(By.css(".modelField")).sendKeys("CR-V Advanced Hybrid")
    // 10 | click | css=.yearField | 
    await driver.findElement(By.css(".yearField")).click()
    // 11 | type | css=.yearField | -2024
    await driver.findElement(By.css(".yearField")).sendKeys("-2024")
    // 12 | click | css=.kmField | 
    await driver.findElement(By.css(".kmField")).click()
    // 13 | type | css=.kmField | -543
    await driver.findElement(By.css(".kmField")).sendKeys("-543")
    // 14 | click | css=.priceField | 
    await driver.findElement(By.css(".priceField")).click()
    // 15 | type | css=.priceField | -353000.00
    await driver.findElement(By.css(".priceField")).sendKeys("-353000.00")
    // 16 | click | css=.full > font > font | 
    await driver.findElement(By.css(".full > font > font")).click()
  })
})
