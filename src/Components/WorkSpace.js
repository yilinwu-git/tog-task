import React from 'react';
import NoImage from '../assets/image_not_found.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import '../styles/workspace.scss';



const WorkSpace = ({workspace}) => {

    return (
        <>      
            <Card className="card">
                <Card.Img variant="top" src={workspace.image ? workspace.image : NoImage} alt={workspace.name} className="card-image"/>
                <Card.Body>
                    <Card.Title className="card-title">{workspace.name}</Card.Title>
                    <Card.Text className="card-text">{workspace.address}</Card.Text>
                    <hr />
                      
                    <Table  borderless hover>
                        <thead className="table-head">
                            <tr className="table-head-row"> 
                                <th>Room / Size</th>
                                <th>Capacity</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody className="table-body">
                            {workspace.rooms.map((room)=>{
                                return (
                                        <tr>
                                        <td><span className="room-amount">{room.amount}</span><span style={{marginLeft: '30px'}}></span ><span className="room-size">{room.size}</span></td>
                                        <td>{room.capacity}</td>
                                        <td><span>&#163;</span>{room.price}/h</td>
                                        </tr>
                                    )
                                })} 
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}

export default WorkSpace;
