document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll('.dropdown').forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            item.classList.toggle('is-active' );
        });
    });

    var amount = document.getElementById('amount');

    


    // var convert = document.getElementById('convert');
    // convert.addEventListener('click', function() {
    //     console.log('convert-button-isclicked');
    //     console.log(amount.value);
    // });

    var buttons = document.querySelectorAll('.con-button');
    // console.log(buttons)
    for (let i = 0; i < buttons.length; i++ ){
        buttons[i].addEventListener('click', function() {
            console.log(buttons[i])
        });        
    }


});



