const { test } = require('@playwright/test');

const testCases = [
"uba koheda inne bn",
"oya kawadda enna inne",
"mata eka denna bn",
"wahama enna kiyala kiwwa",
"ayubowan machn",
"suba aluth avuruddak wewa bn",
"oyata puluwannam meka balanna",
"karunakara mata udaw karanna",
"hari bn mama karannam",
"ane hari aiye bohoma sthuthi",
"hari hari bn ennam",
"chutta chutta kanna",
"mama yanawa... oyath enavada??",
"ane! mata eka denna!!!",
"man oyata passe katha karannm",
"mn oyta psse kath krn",
"api dinner ganna hotel ekata yamuda",
"mama office giya bn",
"mama on the way bn wait karapan",
"api will be there soon",
"oyage wifi wada da",
"password eka maru karada",
"mata whatsapp ekak dapan",
"zoom eke meeting ekak thiyenawa",
"teacher kiwwa asap ewanna",
"mata oyage nic eka pennanna",
"heta exam ekak thiyenawa bn",
"ilaga lecture eka lab eke",
"api colombo yamuda",
"kandy trip ekak yanawa",
"dasun supiri bn",
"anura saha sunil awa",
"mama 3k witara giya",
"api 1st dawas rest karamu",
"mata rs 2500 denna",
"usd 100k kochchara da",
"meeting eka 7.30pm",
"bus eka 12 noon",
"api 2026-05-10 yanawa",
"february 14 meet karamu",
"km 3k witara giya",
"adi 10k wage usai",
"elakiri bn supiri",
"uba mara wadak kala",
"me link eka balapan https://abc.lk",
"mata email ekak ewanna test@gmail.com",
"uba pissu bn 😂",
"mata amarui 😡",
"eya hoda lamayek 🙂",
"mata duka hituna 🥲"
];

test('Singlish Translator Testing', async ({ page }) => {
  test.setTimeout(300000); // 5 minutes timeout to allow all 50 test cases to process
  await page.goto('https://www.pixelssuite.com/chat-translator', { timeout: 60000 });

  const inputBox = page.locator('textarea').first();
  const outputBox = page.locator('textarea').nth(1);

  for (const input of testCases) {
    await inputBox.fill('');
    await inputBox.type(input, { delay: 50 });
    await page.waitForTimeout(2500);
    const output = await outputBox.inputValue();
    console.log("INPUT:", input);
    console.log("OUTPUT:", output);
    console.log("--------------");
  }
});