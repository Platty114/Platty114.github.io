import * as React from 'react';
import { BasicCard} from '../../Components/Card'
import cardData from './options/projectData.json';
import JSlogo from './images/JS_logo.png';
import HTMLLogo from './images/HTML_logo.png';
import CSSLogo from './images/CSS_logo.png';
import JAVALOGO from './images/Java_logo.png'
import SQLLOGO from './images/SQL_logo.png'

const
    javascript = "JS",
    html = "HTML",
    css = "CSS"


const 
    Projects = (props) => {
        

        let
            i = 0;

        const 
            Cards = ({data}) => (
                <div>
                    {data.map((propData) => { 

                        const 
                            languageData = propData.Languages.split(",");

                        const
                            languages = [];

                        languageData.map((language) => {
                            switch(language){
                                case "JS":
                                    languages.push(JSlogo)
                                    break;
                                case "HTML":
                                    languages.push(HTMLLogo)
                                    break;
                                case "CSS":
                                    languages.push(CSSLogo)
                                    break;
                                case "JAVA":
                                    languages.push(JAVALOGO)
                                    break;
                                case "SQL":
                                    languages.push(SQLLOGO)
                                    break;
                            }
                        })

                        console.log(languages)
                        
                        return  (
                            <BasicCard 
                                title={propData.Title}
                                secondaryTitle={propData.SecondaryTitle}
                                content={propData.Content}
                                link={propData.Link}
                                linkText={propData.LinkText}
                                languages = {languages}
                            />
                            )
                        }
                    )}
                </div>
            )


        
        return (
            <>
                <Cards data={cardData} />
            </>
        )
    }

export default  Projects ;