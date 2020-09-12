import React from 'react'
import Chart from 'react-apexcharts'

export default class BarChart extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: 'black',
                    foreColor: 'white'

                },
                xaxis: {
                    categories: 
                        this.props.monthlyData.map((dateArr) => dateArr[0])
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    colors: ['#74f9ff']
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: `Total numbers of orders - ${props.total}`,
                    align: 'center',
                    margin: 20,
                    offSetY: 20,
                    style: {
                        fontSize: '25 px'
                    }
                },
            },

            series: [
                {
                    name: 'Orders',
                    data: 
                        this.props.monthlyData.map((dateArr) => dateArr[1])
                }
            ]

        }
    }

    handleClick = () => {
        this.setState({

            options: {
                ...this.state.options,

                plotOptions: {
                    ...this.state.options.plotOptions,
                    bar: {
                        ...this.state.options.plotOptions.bar,
                        horizontal: !this.state.options.plotOptions.bar.horizontal
                    }

                }
            }

        })

    }

    render() {
        return (
            <div>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="450"
                    width="100%"
                />
                <button onClick={this.handleClick}>change graph</button>

            </div>
        )
    }

}
