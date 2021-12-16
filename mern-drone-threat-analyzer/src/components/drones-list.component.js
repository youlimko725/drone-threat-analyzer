import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Drone = props => (
    <tr>
        <td>{props.drone.velocity}</td>
        <td>{props.drone.distance}</td>
        <td>{props.drone.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.drone._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDrone(props.drone._id) }}>delete</a>
        </td>
    </tr>
)

export default class DronesList extends Component {
    constructor(props) {
        super(props);

        this.deleteDrone = this.deleteDrone.bind(this);

        this.state = {drones: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/drones/')
            .then(response => {
                this.setState({ drones: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteDrone(id) {
        axios.delete('http://localhost:5000/drones/'+id)
            .then(res => console.log(res.data));

        this.setState({
            drones: this.state.drones.filter(el => el._id !== id)
        })
    }

    droneList() {
        return this.state.drones.map(currentdrone => {
            return <Drone drone={currentdrone} deleteDrone={this.deleteDrone} key={currentdrone._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Drones</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Velocity</th>
                        <th>Distance</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.droneList() }
                    </tbody>
                </table>
            </div>
        )
    }
}