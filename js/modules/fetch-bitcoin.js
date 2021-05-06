export default function initFetchBitcoin() {

}
// https://blockchain.info/ticker
fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
  }).catch((erro) => console.log(Error(erro)));
