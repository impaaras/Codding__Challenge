import React from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ListUser} from "../models/Users"

type setProps = {
  allData:ListUser[];
  setFunction:React.Dispatch<React.SetStateAction<ListUser[]>>
}

const SortComponent = ({setFunction, allData}:setProps) => {

  // Sorting method 
    const sortByTime = () =>{
      const sorted = [...allData].sort((a,b) =>  new Date("1/1/2013 " + a.time) < new Date("1/1/2013 " + b.time) ? -1 : 1)
      setFunction(sorted)
    }

  return (
    <Box sx={{width:250, minWidth: 120 }}>
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      value="Sort"
      >
        <MenuItem onClick={sortByTime}>Sort by time</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default SortComponent




  // const sorted = [...allData].sort((a, b) => a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1)
          // const sorted = [...allData].sort((a, b) =>  a.time.toString().toLowerCase() - b.time.toString().toLowerCase() ? 1 : -1 )