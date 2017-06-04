# CurrencyRates

unirest.get("https://currency-exchange.p.mashape.com/exchange?from=NZD&q=100&to=USD")
.header("X-Mashape-Key", "XcaM22gAsgmshXGnRcnZzg3AFG8mp1sEuYdjsntmMJWMYM7dfR")
.header("Accept", "text/plain")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
