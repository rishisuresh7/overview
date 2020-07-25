import React from 'react';
import Chart from 'chart.js';
import './chart.styles.scss';

class ReactChart extends React.Component {
    constructor(props) {
        super(props);
        this.codeRef = React.createRef();
        this.myChart = null;
    }

    getRandomColor = () => {
        var letters = 'BCDEF'.split('');
        var color = '#33';
        for (var i = 0; i < 4; i++ ) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    componentDidMount() {
        this.myChart = new Chart(
            this.codeRef.current
            , {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    duration: 2000,
                    easing: 'easeInCirc',
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(124, 125, 125)',
                        fontFamily: 'Open Sans',
                        usePointStyle: true,
                    },
                    position: 'left',
                },
                tooltips: {
                    backgroundColor: 'slategrey',
                    titleFontFamily: 'Open Sans',
                    bodyFontColor: 'cyan',
                    borderColor: 'white',
                    footerFontColor: 'black',
                    displayColors: true,
                    titleFontColor: 'black',
                }
            }
        });
    }

    componentWillReceiveProps({languages, chartType}) {
        let labels = [], backgroundColor = [], borderColor = [], data = [];
        for(const [key, value] of Object.entries(languages)) {
            labels.push(key);
            data.push(value);
            const color = this.getRandomColor();
            backgroundColor.push(color);
            borderColor.push('black');
        }
        const dataConfig = {
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1,
        }
        this.myChart.type = chartType;
        this.myChart.data.labels = labels;
        this.myChart.data.datasets.pop();
        this.myChart.data.datasets.push(dataConfig);
        this.myChart.options.animation.easing = 'easeInOutCirc';
        this.myChart.update();
    }

    componentWillUnmount() {
        this.myChart.clear();
        this.myChart.destroy();
    }

    render() {
        return(
            <div className="canvas">
                <canvas className="react-chart" ref={this.codeRef}>
                    <p>Could not load chart.</p>
                </canvas>
            </div>
        )
    }
}

export default ReactChart;