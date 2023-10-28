import * as react from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
                        paragraph="I was born and raised here in Calgary, and currently I'm studying Software Engineering at the University of Calgary. 
                        When I'm not learning new things or working, I like to spend my time learning Japanese, playing hockey, working out, working on my car, or hiking with my girlfriend."
                        img={imageOfMe}
                        imgAlt='A picture of me'
                        imgRight={true}
                        textWidth={'md'}
                    ></AboutMeCard>
                    <AboutMeCard 
                        title=''
                        paragraph="As far as software goes, my main interests are related to full stack web development, 
                        as I enjoy working with the technologies invloved, and it's also allowed me to work on some cool projects through Intenrships.
                        That being said though, there's alot of other fields that interest me aswell, such as the growing filed of data science and machine learning,
                         and embedded systems and low level programming. I really like working with hardware at a low level through languages like C and C++, and 
                         even a bit of assembly. "
                        img={imageOfCode}
                        imgAlt='A mock Json object'
                        imgRight={false}
                        textWidth={'sm'}
                    >
                    </AboutMeCard>
                </Container>
            </>
        )
    }

export {
    About
};