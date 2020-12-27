import React from 'react';

export default class Deamo1 extends React.Component {
    shouldComponentUpdate(nextProps, nexState) {
        // if(nextProps.num === this.props.num) return false
        // console.log(nextProps, nexState)
        // return true
        return nextProps.num !== this.props.num
    }
    render() {
        console.log('demo1 -> render')
        return (
            <div className="text-center">
                <h1>{this.props.num}</h1>
                <h2>Demo1</h2>
            </div>
        )
    }
}