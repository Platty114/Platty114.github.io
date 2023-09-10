import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import {useState} from 'react';

const 
BasicCard = (props) => {
  const
      [shadow, setShadow] = useState(5);

  return (
    <Card 
      sx={{ minWidth: 275, maxWidth: '85%'}} 
      elevation={shadow} 
      onMouseEnter = {() => setShadow(10)}
      onMouseLeave={()=>setShadow(5)} 
      className ='BasicCard'
    >
      <CardContent>
        <Typography sx={{ fontSize: 36, fontWeight: 'bold'}} variant='body1'>
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 24, fontStyle: 'italic', marginBottom: '5px'}} variant='body1'>
          {props.secondaryTitle ? props.secondaryTitle : ""}
        </Typography>
        <Typography sx={{ fontSize : 20, fontStyle: 'italic', marginBottom: '5px' }} variant='body1'>
          {props.dateRange ? props.dateRange : ""}
        </Typography>
        <Typography sx={{ fontSize : 18 }} variant='body2'>
          {props.content ? props.content : ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href={props.link}>{props.linkText ? props.linkText : ""}</Link></Button>
        {/* <Button size="large"><Link >test</Link></Button> */}
      </CardActions>
    </Card>
  );
}

export {
    BasicCard
}