
$(document).ready( async function () {

    axios.get('http://localhost:3000/payments')
        .then(function (response) {
            let arrayData = mapper(response.data);
            $('#table_id').DataTable({
                data: arrayData,
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