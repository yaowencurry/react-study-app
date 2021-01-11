import React from 'react';

export default class Banner extends React.Component {
    state = {
        isLoading: true,
        banner: []
    }
    componentDidMount() {
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
            .then(res => res.json())
            .then(data => {
                this.setState ({
                    isLoading: false,
                    banner: data.banner
                })
            })
    }

    render() {

        let data;
        if(this.state.isLoading) {
            data = 'Loading....'
        } else {
            data = this.state.banner[0].title
        }

        return (
            <div>{ data }</div>
        )
    }
}