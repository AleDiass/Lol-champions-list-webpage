import React from 'react';
import { ChampionsContext } from '../../Context/ChampionsContext';
import { getAllLanguages } from '../../Services/Api';
import { SetLanguagePref } from '../../Services/LanguagePref';
import {HeaderStyled} from './StyleHeader';
import {Link} from 'react-router-dom'

const Header = ({langpref}) => {
    const {language, setLanguage} = React.useContext(ChampionsContext);
    const [languageoptions,setLanguageOptions] = React.useState();
    
    React.useEffect(()=>{
        (async()=>{
            const response = await getAllLanguages()
            setLanguageOptions(response)
    
        })()

    },[])

    React.useEffect(()=>{
        setLanguage(langpref)
    },[langpref])

    


    function handleLangChanges(event){
        setLanguage(event.target.value)
        SetLanguagePref(event.target.value)
    }


    return (
        <HeaderStyled>
            <div>
            <Link to='/' >LolChampList Page</Link>
            </div>

           <section>
               <select name="Language" id="Language" value={language ? language : ''}  onChange={handleLangChanges}>
                   <option value="" disabled>Select Your Language</option>
                   { languageoptions && languageoptions.map((lang)=>{
                     return ( <option key={lang} value={lang} >{lang}</option>)
                   })}
               </select>
            
           </section>
        </HeaderStyled>
    )
}

export default Header
