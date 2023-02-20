alert("message");

//
// const $ = require('jquery');
// let dt = require( 'datatables.net' );

let data = [
    [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$3,120"
    ],
    [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ]
]

// $(document).ready( function () {
//
//     $('#table_id').DataTable({
//         data: data
//     });
// } );

let table = new DataTable('#example', {
    data:data
});