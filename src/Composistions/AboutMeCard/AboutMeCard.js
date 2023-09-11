import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import './AboutMeCard.css'

const
    AboutMeCard = (props) => {

        if(
            props.imgRight
        ){
            return (
                <Container 
                    className='aboutMeSection' 
                    maxWidth={false} 
                    sx={
                        {
                            display : 'flex', 
                            flexDirection:'row' , 
                            justifyContent: 'space-around', 
                            flexWrap: 'wrap'
                        }
                    }>
                        <Container 
                            maxWidth={props.textWidth}  
                            sx={
                                {
                                    display: 'flex', 
                                    flexDirection:'column', 
                                    flexWrap: 'wrap', 
                                    margin: '0',
                                }
                            }>
                                <Typography variant='h4' >{props.title}</Typography>
                                <Typography paragraph={true} sx={{fontSize: '1.3em'}}>
                                    {props.paragraph}
                                </Typography>
                        </Container>
                        <Box sx={{maxWidth: '100vw'}}>
                            <img src={props.img} alt={props.imgAlt} ></img>
                        </Box>
                </Container>

            )
        }
        else {
            return (
                <Container 
                    className='aboutMeSection' 
                    maxWidth={false} 
                    sx={
                        {
                            display : 'flex', 
                            flexDirection:'row', 
                            justifyContent:'space-around', 
                            flexWrap: 'wrap'
                        }
                    }>
                        <Box sx={{maxWidth: '100vw'}}>
                            <img src={props.img} alt={props.imgAlt} ></img>
                        </Box>
                        <Container 
                            maxWidth={props.textWidth} 
                            sx={
                                {
                                    display: 'flex', 
                                    flexDirection:'column', 
                                    flexWrap: 'wrap', 
                                    margin: '0'
                                }
                            }>
                                <Typography variant='h4' >{props.title}</Typography>
                                <Typography paragraph={true} sx={{fontSize: '1.3em'}}>
                                    {props.paragraph}
                                </Typography>
                        </Container>
                </Container>
            )
        }
    }

export {
    AboutMeCard
}