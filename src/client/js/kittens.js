// create a kitten line for the table
function createLine(data) {

    // data
    var name = data['name'] || '';
    var color = data['color'] || '';
    var qualities = data['qualities'] || ['',''];
    var flaw = data['flaw'] || '';
    var foodBrand = data['foodBrand'] || '';
    var adopted = data['adopted'] || '';
    var id = data['id'] || 0;


    var line = "<tr>";
    line += "<td>"+name+"</td>";
    line += "<td>"+color+"</td>";
    line += "<td>"+qualities+"</td>";
    line += "<td>";
    line += qualities[1] ? qualities[1] : "aucune";
    line += "</td>";
    line += "<td>"+flaw+"</td>";
    line += "<td>"+foodBrand+"</td>";
    line += "<td>";
    line += adopted ? "adoptée" : "disponible" ;
    line += "</td>";
    line += "<td>";
    line += adopted ? '' : '<a href="#" onclick="sendAdoptRequest('+id+')">Adoptez moi</a>' ;
    line += "</td>";

    return line;
}

// fetch all kittens
function fetchKittens() {
    $.ajax({
        url: 'http://localhost:3000/api/1.0/kittens',
        type: 'GET',
        dataType: 'json',
        success: function(json, status) {
            $("#kittens-table tbody tr").remove();

            $.each(json, function(i, data){

                $("#kittens-table").append(createLine(data));
            })
        },
        error: function(result, status, error) {
        }
    });
}

// fetch adopted kittens
function fetchAdoptedKittens() {
    $.ajax({
        url: 'http://localhost:3000/api/1.0/kittens/adopted',
        /*
        url: 'http://localhost:8080/api/1.0/kittens/adopt',
         */
        type: 'GET',
        dataType: 'json',
        success: function(json, status) {
            $("#kittens-table tbody tr").remove();

            $.each(json, function(i, data){

                $("#kittens-table").append(createLine(data));
            })
        },
        error: function(result, status, error) {
        }
    });
}

// fetch available kittens
function fetchAvailableKittens() {
    $.ajax({
        url: 'http://localhost:3000/api/1.0/kittens/adopt',
        /*
         url: 'http://localhost:8080/api/1.0/kittens/adopted',
         */
        type: 'GET',
        dataType: 'json',
        success: function(json, status) {
            $("#kittens-table tbody tr").remove();

            $.each(json, function(i, data){

                $("#kittens-table").append(createLine(data));
            })
        },
        error: function(result, status, error) {
        }
    });
}

// send a request to adopt a kitten
function sendAdoptRequest(kittenId) {
    $.ajax({
        url: 'http://localhost:8080/mock/kittensAdopted.json',
        type: 'GET',
        /*
         url: 'http://localhost:8080/api/1.0/kittens/'+kittenId'+/adopted,
         type: 'PUT',
         */
        dataType: 'json',
        success: function(json, status) {

            fetchKittens();
        },
        error: function(result, status, error) {
        }
    });
}

// At start : load kittens
$(document).ready(function(){
    fetchKittens();
});

