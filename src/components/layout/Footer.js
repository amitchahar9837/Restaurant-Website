import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'#fff',p:3}}>
        <Box sx={{my:3, "& svg":{
          fontSize:'60px',
          cursor:'pointer',
          mr:2
        },"& svg:hover":{
          color:"goldenrod",
          transform:'trasnlateX(5px)',
          transition:'all 400ms ease'
        }}}>
          {/* Icons */}
          <InstagramIcon/>
          <TwitterIcon/>
          <GitHubIcon/>
          <YouTubeIcon/>
        </Box>
        <Typography variant='h5' sx={{'@media (max-width:600px)':{fontSize:'1rem'}}}>
            All Rigts Reserved &copy; Techinfo YT
        </Typography>
    </Box>
    </>
  )
}

export default Footer