// create your App component here

import { Component } from "react";

export default class App extends Component {

    render() {
        
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then((response) => response.json())

    }
}
