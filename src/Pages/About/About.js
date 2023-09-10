import * as react from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './About.css';

import imageOfMe from './static/images/IMG-2217.jpg'
import imageOfCode from './static/images/code.png'

import { AboutMeCard } from '../../Composistions/AboutMeCard/AboutMeCard'

const
    About = () => {
        const
            [shadow, setShadow] = react.useState(5);

        return (
            <>
                <Container 
                    maxWidth='xl'
                    sx={{padding: 0}}
                >
                    <Typography variant='h1' className='welcomeScreenTitle' align='center'>Hello There!</Typography>
                    <AboutMeCard 
                        title="I'm James" 
                        paragraph="I was born and raised here in Calgary, and currently I'm a student at the University of Calgary where I am studying software Engineering. 
                        This summer I wanted to spend some time learning new languages and experimenting with developing some apps. You can find some of my projects below!
                        When I'm not learning new things or working, I like to spend my time learning Japanese, playing hockey, working out, working on my car, and playing around with linux."
                        img={imageOfMe}
                        imgAlt='A picture of me'
                        imgRight={true}
                    ></AboutMeCard>
                    <AboutMeCard 
                        title=''
                        paragraph="I was born and raised here in Calgary, and currently I'm a student at the University of Calgary where I am studying software Engineering. 
                        This summer I wanted to spend some time learning new languages and experimenting with developing some apps. You can find some of my projects below!
                        When I'm not learning new things or working, I like to spend my time learning Japanese, playing hockey, working out, working on my car, and playing around with linux"
                        img={imageOfCode}
                        imgAlt='A picture of me'
                        imgRight={false}
                    >
                    </AboutMeCard>
                </Container>
            </>
        )
    }

export {
    About
};