// const API_KEY =
//   "acbdcbce-dc6a-4e71-8feb-ee418eb1a6f3";
// const baseURL = "https://min-api.cryptocompare.com/data/v2";
// const authorizationParam = `&api_key=${API_KEY}`;
// const ctx = document.getElementById("myChart").getContext("2d");

// let path = "/histohour";
// let exampleParams = "?fsym=BTC&tsym=USD&limit=20&toTs=-1";

// console log the result of this test call
// const getData = async () => {
//   try {
//     let url = baseURL + path + exampleParams + authorizationParam;
//     console.log(url);
//     let response = await fetch(url);
//     let { Data } = await response.json();
//     return Data.Data;
//   } catch (error) {
//     console.log("ERROR : getData error", error);
//   }
// };
// const renderChart = ({ times, prices, datasetName }) => {
//   console.log(times);
//   console.log(prices);
//   console.log(datasetName);

//   let myChart = new Chart(ctx, {
//     type: "line", //type of your chart
//     data: {
//       labels: times,
//       datasets: [
//         {
//           label: datasetName,
//           data: prices,
//           backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//           borderColor: ["rgba(255, 99, 132, 1)"],
//           borderWidth: 1,
//         },
//       ],
//     }, // data setting object,
//     options: {
//       responsive: true,
//       maintainAspectRatio: true,
//       plugins: {
//         subtitle: {
//           text: "Draw chart on Bitcoin price",
//           display: true,
//         },
//       },
//     },
//   });
// };
// const main = async () => {
//   // get data
//   const data = await getData();
//   //process data to chartjs structure
//   let chartData = {
//     times: data.map((element, index) => index),
//     datasetName: "Bitcoin",
//     prices: data.map((el) => el.close),
//   };
//   //render chart
//   renderChart(chartData);
// };
// main();

// // datasetName = "Bitcoin"

// //new Chart(destination,configurationObject)
const API_KEY ="acbdcbce-dc6a-4e71-8feb-ee418eb1a6f3";
let myChart;

const getData = async (coin) => {
  const authorizationParam = `&api_key=${API_KEY}`;
  const baseURL = "https://min-api.cryptocompare.com/data/v2";
  let path = "/histohour";
  let exampleParams = `?fsym=${coin}&tsym=USD&limit=20&toTs=-1`;

  try {
    let url = baseURL + path + exampleParams + authorizationParam;
    console.log(url);
    let response = await fetch(url);
    let { Data } = await response.json();
    return Data.Data;
  } catch (error) {
    console.log("ERROR : getData error", error);
  }
};
const renderChart = ({ times, prices, datasetName }) => {
  const ctx = document.getElementById("myChart").getContext("2d");

  myChart = new Chart(ctx, {
    type: "line", //type of your chart
    data: {
      labels: times,
      datasets: [
        {
          label: datasetName,
          data: prices,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    }, // data setting object,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        subtitle: {
          text: "Draw chart on Bitcoin price",
          display: true,
        },
      },
    },
  });
};
const main = async (coin = "BTC", destroy = false) => {
  // get data
  const data = await getData(coin);
  //process data to chartjs structure
  let chartData = {
    times: data.map((element, index) => index),
    datasetName: coin.toUpperCase(),
    prices: data.map((el) => el.close),
  };
  if (destroy) {
    myChart.destroy();
  }
  //render chart
  renderChart(chartData);
};

let ethButton = document.getElementById("eth");
ethButton.addEventListener("click", () => {
  main("eth", true);
});

let btcButton = document.getElementById("btc");
btcButton.addEventListener("click", () => {
  main("btc", true);
});

let usdtButton = document.getElementById("usdt");
usdtButton.addEventListener("click", () => {
  main("usdt", true);
});

let bnbButton = document.getElementById("bnb");
bnbButton.addEventListener("click", () => {
  main("bnb", true);
});
main();

let adaButton = document.getElementById("ada");
adaButton.addEventListener("click", () => {
  main("ada", true);
});
main();
// // ----------------------
// async function getCryptoPrices() {
//     const response = await fetch(url);
//     const json = await response.json();
//     const coin = json.data[0];
//     renderLineGraph(coin);
//   }

//   function renderLineGraph(coin) {
//     const ctx = document.getElementById("myChart");
//     const price = coin.quote.USD.price;
//     const [ninetyAgoPrice] = getHistoricPrices(coin.quote.USD);
//     const timeAgo = ["90d", "60d", "30d", "7d", "24h", "1h", "Current"];
//     const myChart = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: timeAgo,
//         datasets: [
//           {
//             label: "Price",
//             borderWidth: 1,
//             data: getHistoricPrices(coin.quote.USD),
//             borderColor: "rgba(255, 99, 132, 1)",
//             backgroundColor: "rgba(255, 99, 132, 0.2)",
//           },
//         ],
//       },
//       options: {
//         tooltips: {
//           enabled: true,
//           mode: "nearest",
//         },
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: false,
//                 suggestedMax: price,
//                 suggestedMin: ninetyAgoPrice,
//               },
//             },
//           ],
//         },
//       },
//     });
//   }
  