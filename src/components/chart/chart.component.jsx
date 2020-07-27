import React from 'react';
import Chart from 'chart.js';
import './chart.styles.scss';

class ReactChart extends React.Component {
    constructor(props) {
        super(props);
        this.codeRef = React.createRef();
        this.myChart = null;
    }

    getRandomColor = (opacity = 1) => {
        const o = Math.round, r = Math.random, s = 80;
        return `rgba(${o(r()*s + 175)}, ${o(r()*s + 175)}, ${o(r()*s + 175)}, ${opacity})`;
    }

    getRandomAnimation = () => {
        const animations = [
        'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart',  'easeOutQuart',
        'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 
        'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce'];

        return animations[Math.floor(Math.random() * animations.length)];
    }

    componentDidMount() {
        this.myChart = new Chart(
            this.codeRef.current
            , {
            type: this.props.chartType,
            data: {
                labels: [],
                datasets: [{
                    label: 'No of Projects',
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1,
                        },
                        gridLines: {
                            color: 'darkcyan',
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            color: 'darkcyan',
                            drawOnChartArea: false,
                        }
                    }]
                },
                animation: {
                    duration: 1500,
                    animateScale: true,
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
                        usePointStyle: false,
                    },
                    position: 'bottom',
                },
                tooltips: {
                    backgroundColor: '#24292e',
                    titleFontFamily: 'Open Sans',
                    bodyFontColor: 'cyan',
                    bodyFontFamily: 'Open Sans',
                    borderColor: 'white',
                    footerFontColor: 'black',
                    displayColors: true,
                    titleFontColor: 'azure',
                }
            }
        });
    }

    componentWillReceiveProps({languages, label}) {
        let labels = [], backgroundColor = [], borderColor = [], data = [];
        let sum = 100;

        if(!label) {
            delete(this.myChart.options.scales);
            this.myChart.options.legend.labels.usePointStyle = true;
            sum = Object.values(languages).reduce((initial, item) => item + initial, 0);
        }
        for(const [key, value] of Object.entries(languages)) {
            labels.push(key);
            data.push((value*100/sum).toFixed(2));
            backgroundColor.push(this.getRandomColor(label ? 0.6 : 0.85));
            !label ? borderColor.push('#1a1e22') : borderColor.push('black');
        }
        const dataConfig = {
            label,
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1,
        }
        this.myChart.data.labels = labels;
        this.myChart.data.datasets.pop();
        this.myChart.data.datasets.push(dataConfig);
        this.myChart.options.legend.position = label ? 'bottom' : 'left';
        this.myChart.options.animation.easing = this.getRandomAnimation();
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