import React from 'react'

const WorkSpace = ({workspace}) => {
    return (
        <>
            <p>{workspace.name}</p>
            <p>{workspace.address}</p>
            <img src={workspace.image} alt={workspace.name}/>
            <div>{workspace.rooms.map((room)=>{
                return (
                    <div>
                        {room.size} /
                        {room.amount} /
                        {room.capacity} /
                        {room.price}/ 
                        {room.rate}
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default WorkSpace;
