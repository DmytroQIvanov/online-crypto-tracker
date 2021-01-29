let url = "https://api.coindesk.com/v1/bpi/currentprice/CNY.json'";
let dataArray = "d";
async function GetJSON() {
  try {
    let responce = await fetch(url);

    let data = await responce.json();
    console.log(data);
    document.getElementById("time").innerHTML = "Time: " + data.time.updated;
    document.getElementById("usd").innerHTML = "USD: " + data.bpi.USD.rate;
    document.getElementById("gbp").innerHTML = "CNY: " + data.bpi.CNY.rate;
    // document.getElementById("eur").innerHTML += data.bpi.EUR.rate;
  } catch (e) {
    console.log(e);
  }
}

GetJSON();
setInterval(() => {
  GetJSON();
  document.getElementById("crypto-names").classList.toggle("animation");
  setTimeout(() => {
    document.getElementById("crypto-names").classList.toggle("animation");
  }, 500);
}, 1000);
