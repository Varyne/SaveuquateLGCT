// create a kitten line for the table
function createLine(data) {
    var line = "<tr>";
    line += "<td>"+data['name']+"</td>";
    line += "<td>"+data['color']+"</td>";
    line += "<td>"+data['qualities'][0]+"</td>";
    line += "<td>";
    line += data['qualities'][1] ? data['qualities'][1] : "aucune";
    line += "</td>";
    line += "<td>"+data['flaw']+"</td>";
    line += "<td>"+data['foodBrand']+"</td>";
    line += "<td>";
    line += data['adopted'] ? "adoptée" : "disponible" ;
    line += "</td>";
    line += "<td>";
    line += data['adopted'] ? '' : '<a href="#" onclick="sendAdoptRequest('+data["id"]+')">Adoptez moi</a>' ;
    line += "</td>";

    return line;
}

// fetch all kittens
function fetchKittens() {
    $.ajax({
        url: 'http://localhost:8080/mock/kittens.json',
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
        url: 'http://localhost:8080/mock/kittens.json',
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
        url: 'http://localhost:8080/mock/kittens.json',
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

