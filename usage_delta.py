import dash_react_table
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import json

with open("src/demo/delta.json") as json_file:
    data = json.load(json_file)
app = dash.Dash(__name__)

app.layout = html.Div([
    dash_react_table.DashReactTable(
        id='table',
        data = data,
        columns=[
                {'Header': 'desk', 'accessor': 'desk', 'format': '(0,0.)'},
                {'Header': 'cmdty', 'accessor': 'cmdty', 'format': '(0,0.)'},
                {'Header': '2019-08-01', 'accessor': '2019-08-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2019-09-01', 'accessor': '2019-09-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2019-10-01', 'accessor': '2019-10-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2019-11-01', 'accessor': '2019-11-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2019-12-01', 'accessor': '2019-12-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-01-01', 'accessor': '2020-01-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-02-01', 'accessor': '2020-02-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-03-01', 'accessor': '2020-03-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-04-01', 'accessor': '2020-04-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-05-01', 'accessor': '2020-05-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-06-01', 'accessor': '2020-06-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-07-01', 'accessor': '2020-07-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-08-01', 'accessor': '2020-08-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-09-01', 'accessor': '2020-09-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-10-01', 'accessor': '2020-10-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-11-01', 'accessor': '2020-11-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2020-12-01', 'accessor': '2020-12-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-01-01', 'accessor': '2021-01-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-02-01', 'accessor': '2021-02-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-03-01', 'accessor': '2021-03-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-04-01', 'accessor': '2021-04-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-05-01', 'accessor': '2021-05-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-06-01', 'accessor': '2021-06-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-07-01', 'accessor': '2021-07-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'},
                {'Header': '2021-08-01', 'accessor': '2021-08-01', 'format': '(0,0.)', 'aggregate_func': 'nansum'}
        ],
        conditionalFormatting=
                {
                    "domain": [-1, 0],
                    "range": [
                        {'color': 'red'},
                        {'color': 'red'},
                        {'color': 'black' },
                    ],
                    "ignore": ['Class', 'Age', 'Survived', 'Sex']
                },
        style={"height": '300px'},
        className='-striped -highlight',
        filterable=False,
        pivotBy=["desk", "cmdty"]
    ),
    html.Div(id='output'),
    dcc.Input(id="input", value="Nothing")
])


@app.callback(Output('output', 'children'),
              [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
