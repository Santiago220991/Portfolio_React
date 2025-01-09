import React from 'react'
import Button from "@mui/material/Button";
import { GREEN, HOVERGREEN } from '../constants/colors';
import { Typography } from '@mui/material';

const ActionButton = ({text}:{text: string})=>{
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
        >
         <Typography textTransform={'none'}>{text}</Typography>
        </Button>
    )
}

export default ActionButton