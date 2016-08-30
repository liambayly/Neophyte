$(function() {

     Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Wk 1',
            a: 45,
            b: 40
        }, {
            y: 'Wk 2',
            a: 32,
            b: 40
        }, {
            y: 'Wk 3',
            a: 40,
            b: 40
        }, {
            y: 'Wk 4',
            a: 51,
            b: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Actual Hours', 'Budgeted Hours'],
        hideHover: 'auto',
        resize: true
    });

});
