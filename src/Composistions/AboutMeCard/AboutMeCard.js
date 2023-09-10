import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './AboutMeCard.css'

const
    AboutMeCard = (props) => {

        if(
            props.imgRight
        ){
            return (
                <Container className='aboutMeSection' maxWidth={false}>
                    <Typography variant='h4' >
                        {props.title}
                    </Typography>
                    <div class ="aboutMeFlex">
                        <Typography paragraph={true} sx={{fontSize: '1.3em'}}>{props.paragraph}</Typography>
                        <img src={props.img} alt={props.imgAlt} ></img>
                    </div>
                </Container>
            )
        }
        else {
            return (
                <Container className='aboutMeSection' maxWidth={false}>
                    <Typography variant='h4' >
                        {props.title}
                    </Typography>
                    <div class ="aboutMeFlex">
                        <img src={props.img} alt={props.imgAlt} ></img>
                        <Typography paragraph={true} sx={{fontSize: '1.3em'}}>{props.paragraph}</Typography>
                    </div>
                </Container>
            )
        }
    }

export {
    AboutMeCard
}