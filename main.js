document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll('.dropdown').forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            item.classList.toggle('is-active' );
        });
    });

    var amount = document.getElementById('amount');


    var convert = document.getElementById('convert');
    convert.addEventListener('click', function() {
        convertAmount(amount.value)

    });

    function convertAmount(number) {
        console.log(number * 2)
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_zHRgxYdqbaA38Aa8NdW0HxZY0T0natnrQDEOYZ1R&currencies=EUR%2CUSD%2CCAD')

        .then(response => response.json())
        .then(data => multiplyCurrency(data, number))
        .catch(error => console.error('Error:',   
            error));

    };

    function multiplyCurrency(data, number) {
        console.log(data['data']['CAD'] * number)
    }

});



