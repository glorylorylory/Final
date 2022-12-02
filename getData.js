// $.getJSON('restaurants.json', function(data) {
    

//     data['restaurants'].forEach(function (d) {
//         $('#restaurants').append(d['name'] + ' - ' + d['type'] + d['delivery'] + d['distance'] + d['time'] +'<br>') 
//     });
// });



    $.getJSON("restaurants.json", function (data) {
        var restaurants = '';

        $.each(data, function (_key, value) {
            restaurants += '<tr>';
                restaurants += '<td class="hideshow">' + 
                '<img src="' + value.image + '">' + '<span class="listname">' + 
                value.name + '</span>' + value.type + '<br>' + value.delivery + '&nbsp&nbsp&nbsp&nbsp&nbsp' + value.distance + '&nbsp&nbsp&nbsp&nbsp&nbsp' + value.time + '</td>';
        });

        $('#restaurants').append(restaurants);
    });

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
//         div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].type;
//         mainContainer.appendChild(div)
//     }
// }

