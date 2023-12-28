function split() {
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let bill = (amount.value / persons.value).toFixed(2);
    let result = bill + ' rs each!'
    document.getElementById('result').innerText = result;

}