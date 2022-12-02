// var tr = document.getElementsByClassName('menu'); // Assumes element with id='button'

// tr.onclick = function() {
//     var div = document.getElementById('menu');
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else {
//         div.style.display = 'block';
//     }
// };

// $(".menu").click(function() { 
//     // assumes element with id='button'
//     $("#menu").toggle();
// });

jQuery(document).ready(function(){
    jQuery('.hideshow').on('click', function(event) {        
        jQuery('#menu').toggle('show');
    });
});