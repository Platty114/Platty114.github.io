import * as React from 'react';
import { BasicCard} from '../../Components/Card'
import cardData from './options/expienceData.json';

import TcImage from './options/static/TCEnergy.png';
import EnviroImage from './options/static/picture(1).jpg'

const 
    Experience = (props) => {
        const 
            Cards = ({data}) => (
                <div>
                    {data.map((propData) => (
                        <BasicCard 
                            title={propData.Title}
                            secondaryTitle={propData.SecondaryTitle}
                            dateRange={propData.DateRange}
                            content={propData.Content}
                            link={propData.Link}
                            image={
                                (propData.Image === "TC")
                                ? TcImage
                                : EnviroImage
                            }
                        />
                    ))}
                </div>
            )


        
        return (
            <>
                <Cards data={cardData} />
            </>
        )
    }

export default  Experience ;