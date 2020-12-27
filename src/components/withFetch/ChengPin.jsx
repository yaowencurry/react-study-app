import React from 'react';

export default class ChengPin extends React.Component {
    state = {
        isLoading: true,
        chengPin: []
    }
    componentDidMount() {
        fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
            .then(res => res.json())
            .then(data => {
                this.setState ({
                    isLoading: false,
                    chengPin: data.chengpinDetails
                })
            })
    }

    render() {

        let data;
        if(this.state.isLoading) {
            data = 'Loading....'
        } else {
            data = this.state.chengPin[0].title
        }

        return (
            <div>{ data }</div>
        )
    }
}