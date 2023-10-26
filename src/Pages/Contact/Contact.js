import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import resume from './options/James_Platt_Resume_2023_pdf.pdf'

const
    Contact = () => {
        return(
            <Container maxWidth = "sm">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: '80vh' }}
                    >
                    <Grid item xs={3}>
                        <Typography variant='h3' sx={{textAlign: "center"}}>
                        Contact Me!
                        </Typography>
                        <Typography paragraph={true} sx={{fontSize: '1.3em'}}>
                            The best way to get in contact with me is through
                            my email or my linkedIn account, which both can be
                            found below. If you would like to take a look at my
                            resume, please feel free to aswell!
                        </Typography>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4}}
                            sx={{justifyContent:'center'}}
                        >
                            <Button variant="contained" href='https://www.linkedin.com/in/james-platt-b7670b221/' target="_blank" >
                                LinkedIn
                            </Button>
                            <Button variant="contained" href="mailto:jamesplatt02@gmail.com" >
                                Email
                            </Button>
                            <Button variant="contained" href={resume} target="_blank">
                                Resume
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        )
    }

export{
    Contact
};