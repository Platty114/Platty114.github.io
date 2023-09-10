import * as React from 'react';
import { BasicCard} from '../../Components/Card'
import cardData from './options/projectData.json';

const 
    Projects = (props) => {
        

        const 
            Cards = ({data}) => (
                <div>
                    {data.map((propData) => (
                        <BasicCard 
                            title={propData.Title}
                            secondaryTitle={propData.SecondaryTitle}
                            content={propData.Content}
                            link={propData.Link}
                            linkText={propData.LinkText}
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

export default  Projects ;