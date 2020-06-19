/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertToUSD(pounds) {
     
      let dollars = pounds * 1.4;
      let money = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "USD"
  });
  //ADD CORRECT FORMAT TO CURRENCY
  //let formattedDollar = money.format(dollars);
  let formattedDollar = dollars;
  return formattedDollar;

}

/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToBRL(sterling) {

  let brl = sterling * 5.7;

  let money = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "BRL"
   });

   let per = brl * (1/100);
  // let formattedBrl = money.format(brl + per);
  let formattedBrl = brl + per;
   
   return formattedBrl;


}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 1-currency-conversion` into your terminal
*/

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("convertToUSD function works", convertToUSD(32) === 44.8);
test("convertToBRL function works", convertToBRL(30) === 172.71);
