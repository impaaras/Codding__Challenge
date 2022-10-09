import React from 'react'
import {Box,List, ListItem,ListItemText} from "@mui/material"
import "./UserCard.css"
import {ListUser} from "../models/Users"


type ListOfUser ={
  allData:ListUser[];
}

const UserCard = ({allData}:ListOfUser) => {
  return (
    <>
       {allData.map((data) =>(
      <Box className='box'>
        <List>
        <ListItem >
          <ListItemText className='text__user' style={{width:'180px'}}>{data.first_name} {data.last_name}</ListItemText>
          <ListItemText className='text__user' style={{width:'300px'}}>{data.email}</ListItemText>
          <ListItemText className='text__user' style={{width:'250px'}}>{data.gender}</ListItemText>
          <ListItemText className='text__user' style={{width:'250px'}}>{data.ip_address}</ListItemText>
          <ListItemText className='text__user' style={{width:'230px'}}>{data.time.toString()}</ListItemText>
        </ListItem>
      </List>
    </Box>
       ))}
       </>
  )
}

export default UserCard
