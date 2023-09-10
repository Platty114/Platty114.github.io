import * as React from 'react';
import { BasicCard} from '../../Components/Card'
import cardData from './options/expienceData.json';

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