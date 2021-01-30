// let url = "https://api.coindesk.com/v1/bpi/currentprice/CNY.json'";
let url = "https://blockchain.info/ticker";
let dataArray = "d";

function d(L) {
  dataArray = L;
  //   console.log(dataArray);
  return dataArray;
}
check();

async function check() {
  setInterval(() => {
    GetJSON().then((value) => {});
    document.getElementById("crypto-names").classList.toggle("animation");
    setTimeout(() => {
      document.getElementById("crypto-names").classList.toggle("animation");
    }, 900);
  }, 1000);

  let previousValue = "0";
  let bufer = 0;
  let different = 0;
  function currentDate() {
    let currentdata = new Date();
    return currentdata.getHours() + ":" + currentdata.getMinutes();
  }

  async function GetJSON() {
    try {
      let responce = await fetch(url);

      let data = await responce.json();

      if (data.USD.last != bufer) {
        previousValue = bufer;
        bufer = data.USD.last;
        data.USD.last / 100;
      }
      console.log(previousValue);
      document.getElementById("time").innerHTML = "Time: " + currentDate();
      document.getElementById("usd").innerHTML =
        "USD: " +
        data.USD.last +
        ` ${data.USD.symbol}  //    ${
          (data.USD.last - previousValue) / (previousValue / 100)
        }`;
      document.getElementById(
        "gbp"
      ).innerHTML = `GBP: ${data.GBP.last} ${data.GBP.symbol}`;

      // document.getElementById("eur").innerHTML += data.bpi.EUR.rate;
    } catch (e) {
      console.log(e);
    }
  }
}
