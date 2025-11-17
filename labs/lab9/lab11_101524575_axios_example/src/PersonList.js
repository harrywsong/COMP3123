import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css';

class PersonList extends Component {
    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
        .catch(err => {
            console.error('Failed to fetch persons', err);
        });
    }

    render() {
        return (
            <div>
                <h1>User List</h1>
                <ul>
                    {this.state.persons.map(person => (
                        <li key={person.login.uuid} className="person-card">
                            <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} className="person-avatar" />
                            <div className="person-details">
                                <p>Name: {person.name.title}. {person.name.first} {person.name.last}</p>
                                <p><b>Email:</b> {person.email}</p>
                                <p><b>Phone:</b> {person.phone}</p>
                                <p><b>Location:</b> {person.location.city}, {person.location.state}, {person.location.country}</p>
                                <p><b>Postcode:</b> {person.location.postcode}</p>
                                <p><b>Street:</b> {person.location.street.number} {person.location.street.name}</p>
                                <p><b>Timezone:</b> {person.location.timezone.description}</p>
                                <p><b>Offset:</b> {person.location.timezone.offset}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default PersonList;