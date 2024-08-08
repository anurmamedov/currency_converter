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
        if (amount.value > 0 ){
            convertAmount(amount.value)
            fromButton = document.getElementById('from-button'); 
            toButton = document.getElementById('to-button'); 
        }
        else {
            displayResult('Enter positive number!')
        }
    });

    requestAPIadress = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_zHRgxYdqbaA38Aa8NdW0HxZY0T0natnrQDEOYZ1R&currencies=EUR%2CUSD%2CCAD%2CAUD%2CRUB%2CJPY%2CGBP%2CCHF%2CCNY%2CSEK%2CTRY'


    function convertAmount(number) {
        fetch(requestAPIadress)

        .then(response => response.json())
        .then(data => multiplyCurrency(data, number))
        .catch(error => displayError(error));
    };

    
    function displayError(text){
        displayResult('Error occurred, try again!')
    };


    function multiplyCurrency(data, number) {
        var result = 0 
        if (fromButton.value == 'usd' && toButton.value == 'usd'){
            result = amount.value * data['data']['USD']
        }
        else if (fromButton.value == 'usd' && toButton.value == 'eur'){
            result = amount.value * data['data']['EUR']
        }
        else if (fromButton.value == 'usd' && toButton.value == 'cad'){
            result = amount.value * data['data']['CAD']
        }
        else if (fromButton.value == 'eur' && toButton.value == 'eur'){
            result = amount.value * data['data']['EUR']
        }
        else if (fromButton.value == 'eur' && toButton.value == 'usd'){
            result = amount.value / data['data']['EUR']
        }
        else if (fromButton.value == 'eur' && toButton.value == 'cad'){
            result = amount.value / data['data']['EUR'] * (data['data']['CAD'])
        }
        else if (fromButton.value == 'cad' && toButton.value == 'cad'){
            result = amount.value * data['data']['CAD']
        }
        else if (fromButton.value == 'cad' && toButton.value == 'usd'){
            result = amount.value / data['data']['CAD']
        }
        else if (fromButton.value == 'cad' && toButton.value == 'eur'){
            result = amount.value / data['data']['CAD'] * (data['data']['EUR'])
        }

        displayResult(result)
    };


    function displayResult(result){
        let resultArea = document.getElementById('result-area');
        resultArea.innerHTML = '';

        let label = document.createElement('label');
        label.classList.add('has-text-black');
        label.textContent = 'Result';
        resultArea.appendChild(label);

        let div1 = document.createElement('div');
        div1.classList.add('has-text-danger');
        div1.textContent = result;
        resultArea.appendChild(div1)
    }
});

