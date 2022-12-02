$.getJSON('restaurants.json', function(data) {
    

    data['restaurants'].forEach(function (d) {
        $('#restaurants').append(d['name'] + ' - ' + d['type'] + d['delivery'] + d['distance'] + d['time'] +'<br>') 
    });
});



    // $.getJSON("restaurants.json", function (data) {
    //     var restaurants = '';

    //     $.each(data, function (_key, value) {
    //         restaurants += '<table>';
    //         restaurants += '<tr>';
    //         restaurant += '<td>' +
    //             value.name + '</td>';
            
    //         restaurants += '<td>' +
    //             value.type + '</td>';
    //     });

    //     $('#restaurants').append(restaurants);
    // });

// fetch('restaurants.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
//     });

// function appendData(data) {
//     var mainContainer = document.getElementById("restaurants");

//     for (var i = 0; i <data.length; i++) {
//         var div = document.createElement("div");
//         .innerHTML = 'Name: ' + data[i].name + ' ' + data[i].type;
//         mainContainer.appendChild(div)
//     }
// }

