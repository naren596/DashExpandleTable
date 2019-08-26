import dash_react_table
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import json

with open("src/demo/Titanic.json") as json_file:
    data = json.load(json_file)
app = dash.Dash(__name__)

app.layout = html.Div([
    dash_react_table.DashReactTable(
        id='table',
        data = data,
        columns = [{
                      "Header": 'Class',
                      "accessor": 'Class',
                      "minWidth": 90,
                  },
                  {
                      "Header": 'Sex',
                      "accessor": 'Sex',
                      "minWidth": 90,
                  },
                  {
                      "Header": 'Age',
                      "accessor": 'Age',
                      "minWidth": 90,
                  },
                  {
                      "Header": 'Survived',
                      "accessor": 'Survived',
                      "minWidth": 90,
                  },
                  {
                      "Header": 'Freq',
                      "accessor": 'Freq',
                      "minWidth": 90,
                      "aggfunc": "sum"
                  },
                  {
                      "Header": 'PNL',
                      "accessor": 'PNL',
                      "minWidth": 90,
                      "aggfunc": "sum",
                      "format": "(0,0)"
                  }

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
        pivotBy=["Class", "Sex", "Age", "Survived"],
        pivotFunc="sum"
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
