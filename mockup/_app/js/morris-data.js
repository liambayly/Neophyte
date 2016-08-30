$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Interviews: 22,
            Jobs: 13,
            Placements: 6
        }, {
            period: '2010 Q2',
            Interviews: 22,
            Jobs: 18,
            Placements: 7
        }, {
            period: '2010 Q3',
            Interviews: 12,
            Jobs: 24,
            Placements: 3
        }, {
            period: '2010 Q4',
            Interviews: 6,
            Jobs: 34,
            Placements: 7
        }, {
            period: '2011 Q1',
            Interviews: 3,
            Jobs: 27,
            Placements: 2
        }, {
            period: '2011 Q2',
            Interviews: 35,
            Jobs: 42,
            Placements: 12
        }, {
            period: '2011 Q3',
            Interviews: 22,
            Jobs: 13,
            Placements: 6
        }, {
            period: '2011 Q4',
            Interviews: 4,
            Jobs: 8,
            Placements: 1
        }, {
            period: '2012 Q1',
            Interviews: 7,
            Jobs: 21,
            Placements: 4
        }, {
            period: '2012 Q2',
            Interviews: 12,
            Jobs: 6,
            Placements: 4
        }],
        xkey: 'period',
        ykeys: ['Interviews', 'Jobs', 'Placements'],
        labels: ['Interviews', 'Job Reqs', 'Placements'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "New Candidates",
            value: 45
        }, {
            label: "Placed Candidates",
            value: 12
        }, {
            label: "New Job Reqs",
            value: 62
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Q1',
            a: 12,
            b: 34
        }, {
            y: 'Q2',
            a: 5,
            b: 22
        }, {
            y: 'Q3',
            a: 15,
            b: 12
        }, {
            y: 'Q4',
            a: 0,
            b: 23
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Current', 'Last Year'],
        hideHover: 'auto',
        resize: true
    });

});
