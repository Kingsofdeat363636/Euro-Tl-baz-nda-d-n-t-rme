document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=be0bd7c39e6e42cc029e258e4069231f&format=1");
    xhr.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);


            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;
            console.log(amount * rate)

        }
    }
    xhr.send();
}