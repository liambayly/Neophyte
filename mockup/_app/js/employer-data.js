$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Budgeted: 120,
            Actual: 132
        }, {
            period: '2010 Q2',
            Budgeted: 120,
            Actual: 110
        }, {
            period: '2010 Q3',
            Budgeted: 160,
            Actual: 182
        }, {
            period: '2010 Q4',
            Budgeted: 120,
            Actual: 110
        }, {
            period: '2011 Q1',
            Budgeted: 120,
            Actual: 102
        }, {
            period: '2011 Q2',
            Budgeted: 120,
            Actual: 142
        }, {
            period: '2011 Q3',
            Budgeted: 180,
            Actual: 132
        }, {
            period: '2011 Q4',
            Budgeted: 150,
            Actual: 192
        }, {
            period: '2012 Q1',
            Budgeted: 120,
            Actual: 132
        }, {
            period: '2012 Q2',
            Budgeted: 110,
            Actual: 92
        }],
        xkey: 'period',
        ykeys: ['Budgeted', 'Actual'],
        labels: ['Budgeted', 'Actual'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Hours Worked",
            value: 243
        }, {
            label: "Hours Budgeted",
            value: 283
        }, {
            label: "Under Budget",
            value: 40
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Q1',
            a: 110000,
            b: 82000
        }, {
            y: 'Q2',
            a: 60000,
            b: 66000
        }, {
            y: 'Q3',
            a: 120000,
            b: 132000
        }, {
            y: 'Q4',
            a: 40000,
            b: 21000
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Budgeted Cost', 'Actual Cost'],
        hideHover: 'auto',
        resize: true
    });

});
