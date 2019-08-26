import React, {Component} from 'react';

import  DashReactTable from '../lib/components/DashReactTable.react';


const data = require('./Titanic.json');



class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);

    }

    setProps(newProps) {
        this.setState(newProps);
    }


    render() {
        return (

            <div>
                <DashReactTable
                    data={data}
                    columns={[
                        {
                            Header: 'Class',
                            accessor: 'Class',
                            minWidth: 90,
                        },
                        {
                            Header: 'Sex',
                            accessor: 'Sex',
                            minWidth: 90,
                        },
                        {
                            Header: 'Age',
                            accessor: 'Age',
                            minWidth: 90,
                        },
                        {
                            Header: 'Survived',
                            accessor: 'Survived',
                            minWidth: 90,
                        },
                        {
                            Header: 'Freq',
                            accessor: 'Freq',
                            minWidth: 90,
                            aggfunc: "sum"
                        },
                        {
                            Header: 'PNL',
                            accessor: 'PNL',
                            minWidth: 90,
                            aggfunc: "nansum",
                            format: "(0,0)"
                        }

                    ]}
                    conditionalFormatting={
                        {
                            domain: [-1, 0],
                            range: [
                                {'color': 'red'},
                                {'color': 'red'},
                                {'color': 'black' },
                            ],
                            ignore: ['Class', 'Age', 'Survived', 'Sex']
                        }
                    }
                    style={{height: '300px'}}
                    className='-striped -highlight'
                    filterable={false}
                    pivotBy={["Class", "Sex", "Age", "Survived"]}
                    pivotFunc={"sum"}
                >
                </DashReactTable>
            </div>

        )
    }
}

export default App;