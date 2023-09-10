import * as React from 'react';
import { ResponsiveAppBar } from '../../Components/Menu';


const TopBar = (props) => {
    return(
        <>
            <ResponsiveAppBar posistion='sticky' sx={{marginbottom: '3%'}} themeOptions={props.themeOptions} setMode={props.setMode}/>
        </>
    )
}

export {
    TopBar
}
    