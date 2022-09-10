
function draw_scatter_3d(csv_rec){
    let data_x=[], data_y=[], data_z=[];
    for(let i=0; i<csv_rec.length; i++){
        data_x.push(csv_rec[i][0]);
        data_y.push(csv_rec[i][1]);
        data_z.push(csv_rec[i][2]);
    }
    Plotly.newPlot(
        'myGraph',
        [
            {
                x: data_x,
                y: data_y,
                z: data_z,
                mode: 'markers',
                marker: {
                    color: 'rgb(27,27,256)',
                    size: 3,
                    symbole: 'circle',
                    line: {
                        color: 'rgb(204,204,204)',
                        width: 1
                    },
                    opacity: 0.8
                },
                type: 'scatter3d'
            }
        ],
        {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            }
        }
    );
};

draw_scatter_3d(
    [
        [10,10,10],
        [20,20,20],
        [30,30,30]
    ]
);

