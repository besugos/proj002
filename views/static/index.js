
$(document).ready( async function () {

    axios.get('http://localhost:3000/payments')
        .then(function (response) {
            let arrayData = mapper(response.data);
            let table = $('#table_id').DataTable({
                data: arrayData,
                columnDefs: [
                    {
                        targets: -1,
                        data: null,
                        defaultContent: '<button class="btn btn-secondary">Details</button>',
                    },
                ],
            });
            $('#table_id tbody').on('click', 'button', function () {
                let data = table.row($(this).parents('tr')).data();
                alert("You clicked on id " + data[0]);
            });
        })
        .catch(function (error) {
            console.log(error);
        })
} );

$("#new-payment").click(function() {
    window.location.href = 'http://localhost:3000/cadastro';
})




function mapper(data) {
    let response = [];
    for (let obj of data) {
        let line = [];
        line.push(obj.id);
        line.push(obj.amount);
        line.push(obj.type);
        line.push(obj.status);
        response.push(line);
    }
    return response
}