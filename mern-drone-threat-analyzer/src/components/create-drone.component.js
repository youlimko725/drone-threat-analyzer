import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateDrone extends Component {
    constructor(props) {
        super(props);

        this.onChangeVelocity = this.onChangeVelocity.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            velocity: 0,
            distance: 0,
            date: new Date(),
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/create/')
            .then(response => {
                this.setState({ drones: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeVelocity(e) {
        this.setState({
            velocity: e.target.value
        });
    }

    onChangeDistance(e) {
        this.setState({
            distance: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const drone = {
            velocity: this.state.velocity,
            distance: this.state.distance,
            duration: this.state.duration,
            date: this.state.date,
        };

        console.log(drone);

        axios.post('http://localhost:5000/drones/add', drone)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Drone Data Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Velocity: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.velocity}
                            onChange={this.onChangeVelocity}
                            />
                    </div>
                    <div className="form-group"> 
                        <label>Distance: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.distance}
                            onChange={this.onChangeDistance}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Drone Data Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}