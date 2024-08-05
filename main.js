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
        fromButton = document.getElementById('from-button'); 
        toButton = document.getElementById('to-button'); 
    });

    function convertAmount(number) {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_zHRgxYdqbaA38Aa8NdW0HxZY0T0natnrQDEOYZ1R&currencies=EUR%2CUSD%2CCAD')

        .then(response => response.json())
        .then(data => multiplyCurrency(data, number))
        .catch(error => console.error('Error:',   
            error));

    };

    function multiplyCurrency(data, number) {
        var result = 0 
        if (fromButton.value == 'usd' && toButton.value == 'usd'){
            result = amount.value
        }
        else if (fromButton.value == 'usd' && toButton.value == 'eur'){
            result = amount.value * data['data']['EUR']
        }
        else if (fromButton.value == 'usd' && toButton.value == 'cad'){
            result = amount.value * data['data']['CAD']
        }
        else if (fromButton.value == 'eur' && toButton.value == 'eur'){
            result = amount.value
        }
        else if (fromButton.value == 'eur' && toButton.value == 'usd'){
            result = amount.value / data['data']['EUR']
        }
        else if (fromButton.value == 'eur' && toButton.value == 'cad'){
            result = amount.value / data['data']['EUR'] * (data['data']['CAD'])
        }
        else if (fromButton.value == 'cad' && toButton.value == 'cad'){
            result = amount.value
        }
        else if (fromButton.value == 'cad' && toButton.value == 'usd'){
            result = amount.value / data['data']['CAD']
        }
        else if (fromButton.value == 'cad' && toButton.value == 'eur'){
            result = amount.value / data['data']['CAD'] * (data['data']['EUR'])
        }

        displayResult(result)
    }


    function displayResult(result){
        let resultArea = document.getElementById('result-area')
        resultArea.innerHTML = ''
        div1 = document.createElement('div')
        div1.classList.add('has-text-danger')
        div1.textContent = result
        resultArea.appendChild(div1)
        console.log(resultArea)
    }

});



