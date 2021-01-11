import { Component } from 'react';

const widthFetch = (url) => (View) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                isLoading: true,
                data: null
            }
        }

        componentDidMount() {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        isLoading: false,
                        data
                    })
                })
        }

        render() {
            if (this.state.isLoading) {
                return <div>Loading...</div>
            } else {
                return <View data={this.state.data}></View>
            }
        }
    }
}

export default widthFetch