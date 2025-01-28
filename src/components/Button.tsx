import React from 'react'
import Button from "@mui/material/Button";
import { GREEN, HOVERGREEN } from '../constants/colors';
import { Typography } from '@mui/material';

const ActionButton = ({text, onClick}:{text: string, onClick:()=>void})=>{
    return (
        <Button
          size="medium"
          sx={{
            backgroundColor: GREEN,
            marginTop: "24px",
            marginBottom: "24px",
            color: "white",
            "&:hover": {
              backgroundColor: HOVERGREEN,
            },
          }}
          onClick={onClick}
        >
         <Typography textTransform={'none'}>{text}</Typography>
        </Button>
    )
}

export default ActionButton