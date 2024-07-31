// #05 - ATIVIDADE Testes de Front-End - Atividade Final

const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');
(async function Atividade05(){
    try{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://cadastrocars.vercel.app/');
        await driver.getTitle();
        await driver.manage().getTimeouts({implicit:1000});
        let Button = await driver.findElement(By.name('Cadastrar'));
        let searchButton = await driver.findElement(By.css('button'));
        await searchBox.sendKeys('cadastrocars');
        await searchButton.click();
        await driver.quit();
} catch(error){
    console.log(error);
}
})();  

//Tentativa falha do Teste Selenium Webdriver