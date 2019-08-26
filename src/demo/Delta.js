import React, {Component} from 'react';

import  DashReactTable from '../lib/components/DashReactTable.react';


const data = require('./delta.json');



class Delta extends Component {

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
                                {'Header': 'desk', 'accessor': 'desk', 'format': '(0,0.)'},
                                {'Header': 'cmdty', 'accessor': 'cmdty', 'format': '(0,0.)'},
                                {'Header': '2019-08-01', 'accessor': '2019-08-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2019-09-01', 'accessor': '2019-09-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2019-10-01', 'accessor': '2019-10-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2019-11-01', 'accessor': '2019-11-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2019-12-01', 'accessor': '2019-12-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-01-01', 'accessor': '2020-01-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-02-01', 'accessor': '2020-02-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-03-01', 'accessor': '2020-03-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-04-01', 'accessor': '2020-04-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-05-01', 'accessor': '2020-05-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-06-01', 'accessor': '2020-06-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-07-01', 'accessor': '2020-07-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-08-01', 'accessor': '2020-08-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-09-01', 'accessor': '2020-09-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-10-01', 'accessor': '2020-10-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-11-01', 'accessor': '2020-11-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2020-12-01', 'accessor': '2020-12-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-01-01', 'accessor': '2021-01-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-02-01', 'accessor': '2021-02-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-03-01', 'accessor': '2021-03-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-04-01', 'accessor': '2021-04-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-05-01', 'accessor': '2021-05-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-06-01', 'accessor': '2021-06-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-07-01', 'accessor': '2021-07-01', 'format': '(0,0.)', 'aggfunc': 'nansum'},
                                {'Header': '2021-08-01', 'accessor': '2021-08-01', 'format': '(0,0.)', 'aggfunc': 'nansum'}
                        ]}
                        pivotBy={['desk', 'cmdty']}
                        style={{maxHeight: 300, overflowY: 'auto', maxWidth: 6360, border: 'thin lightgrey solid'}}
                        conditionalFormatting={{domain: [-1, 0], range: [{'color': 'red'}, {'color': 'red'}, {'color': 'black'}], 'ignore': ['desk', 'cmdty']}}
                        style={{margin: '10px 5%', width: '90%'}}/>
                    </div>
                )
        }
}

export default Delta;