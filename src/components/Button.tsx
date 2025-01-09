import React from 'react'
import Button from "@mui/material/Button";
import { GREEN, HOVERGREEN } from '../constants/colors';

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
          {text}
        </Button>
    )
}

export default ActionButton