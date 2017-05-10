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

// submit search
function search(e){

    // prevent submit
    e.preventDefault();

    // values
    var name = $('#name')[0].value;
    var id = $('#id')[0].value;
    var color = $('#color')[0].value;

    // check
    if(  name == '' && id == '' && color == '') {
        alert('Vous devez remplir au moins un champ');
        return;
    }

    // url
    var url = "http://localhost:8080/api/1.0/kittens";

    $.ajax({
        url: 'http://localhost:8080/mock/kittens.json',
        /*
         url: url,
         */
        type: 'GET',
        dataType: 'json',
        success: function (json, status) {
            $("#kittens-table tbody tr").remove();

            $.each(json, function (i, data) {

                $("#kittens-table").append(createLine(data));
            })
        },
        error: function (result, status, error) {
        }
    });
}