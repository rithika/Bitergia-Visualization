FusionCharts.ready(function () {
    var populationMap = new FusionCharts({
        type: 'world',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Global Messages Received",                
                "theme": "fint",
                "formatNumberScale":"0",
                "numberSuffix":"M",
                "showLabels": "1",
                "showToolTip": "0"
            },
            "colorrange": {
                "color": [
                    {
                        "minvalue": "0",
                        "maxvalue": "20000",
                        "code": "#D0DFA3",
                        "displayValue" : "< 20K"
                    },
                    {
                        "minvalue": "20000",                        
                        "maxvalue": "30000",                        
                        "code": "#B0BF92",
                        "displayValue" : "20K - 30K"
                    },
                    {
                        "minvalue": "30000",                        
                        "maxvalue": "40000",                        
                        "code": "#91AF64",
                        "displayValue" : "30K-40K"
                    },
                    {
                        "minvalue": "40000",                        
                        "maxvalue": "90000",                        
                        "code": "#A9FF8D",
                        "displayValue" : "> 40K"
                    }
                ]
            },
            "data": [
                {
                    "id": "NA",
                    "value": "50000"
                },
                {
                    "id": "SA",
                    "value": "30000"
                },
                {
                    "id": "AS",
                    "value": "70000"
                },
                {
                    "id": "EU",
                    "value": "30000"
                },
                {
                    "id": "AF",
                    "value": "18000"
                },
                {
                    "id": "AU",
                    "value": "25000"
                }
            ],

        },
                    "events": {
            "entityRollover": function (evt, data) {
                document.getElementById('message').value = "" +data.label + "\n" + "Messages: " +data.value;
            },
            "entityRollout": function (evt, data) {
              document.getElementById('message').value = 
                  "Total Messages sent - XXX";
            },
            "entityClick": function (evt, data) {
               alert("You have clicked on "+data.label+".");
            },
            }
    }).render();    
});