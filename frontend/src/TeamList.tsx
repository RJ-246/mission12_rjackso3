import React from 'react';
import './App.css';
import * as data from "./CollegeBasketballTeams.json";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
let jsonTeams2 = data;
let jsonTeams = jsonTeams2["teams"]

class Team extends React.Component <any,any> {
    render(): React.ReactNode {
        const oneTeam = this.props;
        return (
            <Card border='dark'>
                <Card.Body>
                    <Card.Title><h2>{oneTeam.school}</h2></Card.Title>
                    <Card.Text>
                        <h4>Mascot: {oneTeam.name}</h4>
                        <h4>Location: {oneTeam.city}, {oneTeam.state}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

function TeamList(){
    return (
        <div>
            {jsonTeams.map(oneTeam =><Team {...oneTeam}/>)}
        </div>
    )
}
export default TeamList;