const express = require('express');
const app = express();
const getExchangeRates = require('./routes/getExchangeRates.js').getExchangeRates;

// listen to get requests to "/data" from the front end
app.get('/data', (req, res) => {
  getExchangeRates((rates) => {
    console.log("RATES:", rates);
    // convert data to json format and send it back to front end  
    res.json(rates);
  })
})

// app.get('/data', function(req, res) {
//   const data = [
//     {
//         "category": "top news",
//         "datetime": 1599234399,
//         "headline": "Ex-Obama advisor: Dems should come down and compromise with Trump over $600 unemployment boost",
//         "id": 5241610,
//         "image": "https://image.cnbcfm.com/api/v1/image/106372916-1580871238725gettyimages-1198671144.jpeg?v=1580871290",
//         "related": "",
//         "source": "CNBC",
//         "summary": "The sharp decline in the nation's unemployment rate to 8.4% in August should motivate Washington to break the stalemate over additional coronavirus stimulus, economist Jason Furman told CNBC on Friday.",
//         "url": "https://www.cnbc.com/2020/09/04/jason-furman-dems-should-deal-with-trump-over-600-unemployment-boost.html"
//     },
//     {
//         "category": "top news",
//         "datetime": 1599232987,
//         "headline": "'Mulan' is cinematic eye candy that makes up for a weak script, critics say",
//         "id": 5241492,
//         "image": "https://image.cnbcfm.com/api/v1/image/106649394-1596637266429mulane-Cropped-jpg?v=1596637339",
//         "related": "",
//         "source": "CNBC",
//         "summary": "Critics, who speak highly of the visually stunning film, were quick to note that \"Mulan\" would have been eye candy for viewers on a big screen. Countries without Disney+ will get the chance to see the film in theaters.",
//         "url": "https://www.cnbc.com/2020/09/04/mulan-reviews-what-critics-are-saying-about-disneys-new-film.html"
//     },
//     {
//         "category": "top news",
//         "datetime": 1599231867,
//         "headline": "How much you’ll have for retirement if you invest $100, $500 or $1,000 a month, broken down by age",
//         "id": 5241432,
//         "image": "https://image.cnbcfm.com/api/v1/image/106691053-1599227011318-SavingXamonth_thumb5.jpg?v=1599227066",
//         "related": "",
//         "source": "CNBC",
//         "summary": "Investing your extra cash for retirement can go a long way if you start early. CNBC crunched the numbers, and we can tell you exactly how much your savings will equal, broken down by age.",
//         "url": "https://www.cnbc.com/2020/09/04/how-much-youll-have-for-retirement-if-you-invest-100-500-1000-month.html"
//     }
//   ];

//   res.json(data);
// });

const port = 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));