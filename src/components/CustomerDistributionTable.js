import React from 'react'

export default function CustomerDistributionTable(props) {

    const { custOrderCount } = props

    return (
        <div className="container">

            <div>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>No. of orders</th>
                            <th>Count of customers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>1</td>
                            <td>{custOrderCount.orderedOnce}</td>
                    
                        </tr>
                        <tr >
                            <td>2</td>
                            <td>{custOrderCount.orderedTwice}</td>
                    
                        </tr>
                        <tr >
                            <td>3</td>
                            <td>{custOrderCount.orderedThrice}</td>
                    
                        </tr>
                        <tr >
                            <td>4</td>
                            <td>{custOrderCount.orderedFour}</td>
                    
                        </tr>
                        <tr >
                            <td>5+</td>
                            <td>{custOrderCount.orderedMoreThanFive}</td>
                    
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

