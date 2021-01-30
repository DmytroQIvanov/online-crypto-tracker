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

  let previorValue = "0";

  function currentDate() {
    let currentdata = new Date();
    return currentdata.getHours() + ":" + currentdata.getMinutes();
  }

  async function GetJSON() {
    try {
      let responce = await fetch(url);

      let data = await responce.json();

      if (data.USD.last != previorValue) {
        previorValue = data.USD.last;
      }
      console.log(previorValue);
      document.getElementById("time").innerHTML = "Time: " + currentDate();
      document.getElementById("usd").innerHTML =
        "USD: " + data.USD.last + ` ${data.USD.symbol}`;
      document.getElementById(
        "gbp"
      ).innerHTML = `GBP: ${data.GBP.last} ${data.GBP.symbol}`;

      // document.getElementById("eur").innerHTML += data.bpi.EUR.rate;
    } catch (e) {
      console.log(e);
    }
  }
}
