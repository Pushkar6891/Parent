import React from 'react';
import axios from 'axios';
//import { Line } from 'react-chartjs-2';

const data = {
    labels: [new Date("2015-3-15 13:3").toLocaleString(), new Date("2015-3-25 13:2").toLocaleString(), new Date("2015-4-25 14:12").toLocaleString()],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [12, 21, 5]
        }
    ]
};

class ChartGenerator extends React.Component {
    state = {
        clinicalData: []
    }


    componentWillMount() {

        axios.get('http://localhost:8080/clinicalservices/api/patients/analyze/'
            + this.props.match.params.patientId).then(res => {
                console.log(res.data)
                this.setState(res.data)
                console.log(this.state)
            })
    }

    render() {
        return (<div>
            
        </div>)
    }
}



export default ChartGenerator;