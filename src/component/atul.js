import React from 'react';

class atul extends React.Component {
    state = {
            name : 'rohit',
            position: 'PUBG expert'
    }
    render() {
        return (
            <h1>rohit thanks {this.state.name}</h1>
        )
    }
}
export default atul;