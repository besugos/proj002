
$(document).ready( async function () {
    axios.get('http://localhost:3000/payments')
        .then(function (response) {
            let arrayData = mapper(response.data);
            mountTable(arrayData);
        })
        .catch(function (error) {
            console.log(error);
        })
} );

$("#new-payment").click(function() {
    window.location.href = 'http://localhost:3000/cadastro';
})

function mountTable(data) {
    let table = $('#table_id').DataTable({
        data: data,
        columnDefs: [
            {
                targets: -1,
                data: null,
                defaultContent: '<button type="button" class="btn btn-secondary">\n' +
                    '                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n' +
                    '  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>\n' +
                    '  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>\n' +
                    '</svg>\n' +
                    '              </button>',
            },
        ],
    });
    $('#table_id tbody').on('click', 'button', function () {
        let data = table.row($(this).parents('tr')).data();
        window.location.href = `http://localhost:3000/detalhes/${data[0]}`;
    });
}



function mapper(data) {
    let response = data.map((obj) => {
        let line = [];
        line.push(obj.id);
        line.push(obj.amount);
        line.push(obj.type);
        line.push(obj.status);
        return line;
    })
    return response
}