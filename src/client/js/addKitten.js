// submit kitten
function add(e){

    // prevent submit
    e.preventDefault();

    // values
    var name = $('#name')[0].value;
    var color = $('#color')[0].value;
    var quality1 = $('#quality1')[0].value;
    var quality2 = $('#quality2')[0].value;
    var foodBrand = $('#foodBrand')[0].value;

    var data = 'name='+name;
    data+= 'color='+color;
    data+= 'quality1='+quality1;
    data+= 'quality2='+quality2;
    data+= 'foodBrand='+foodBrand;

    // check
    if(  name == '') {
        alert('Vous devez spécifier un nom');
        return;
    }

    if(  color == '') {
        alert('Vous devez spécifier une couleur');
        return;
    }

    if(  quality1 == '') {
        alert('Vous devez spécifier une qualité 1');
        return;
    }

    if(  foodBrand == '') {
        alert('Vous devez spécifier une marque de croquettes');
        return;
    }

    // url
    var url = "http://localhost:8080/api/1.0/kittens";

    $.ajax({
        url: 'http://localhost:8080/mock/kittens.json',
        /*
         url: url,
         */
        type: 'POST',
        data: data,
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