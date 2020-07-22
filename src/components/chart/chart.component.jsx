import React from 'react';
import Chart from 'chart.js';
import './chart.styles.scss';

class ReactChart extends React.Component {
    constructor(props) {
        super(props);
        this.codeRef = React.createRef();
    }

    componentDidMount() {
        const myChart = new Chart(
            this.codeRef.current
            , {
            type: this.props.chartType || 'doughnut',
            data: {
                labels: ['Go', 'Java', 'PHP', 'Python', 'React'],
                datasets: [{
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(255, 99, 132)'
                    },
                    position: 'left',
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        });
    }

    render() {
        return(
            <div className="canvas">
                <canvas className="react-chart" ref={this.codeRef}></canvas>
            </div>
        )
    }
}

export default ReactChart;