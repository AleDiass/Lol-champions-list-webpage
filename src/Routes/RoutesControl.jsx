import {BrowserRouter,Route,Switch} from 'react-router-dom'
import React from 'react'
import IndexPage from '../Pages/Index/IndexPage'
import DetailsPage from '../Pages/Details/DetailsPage'
import Header from '../Components/HeaderComponent/Header'
import Footer from '../Components/FooterComponent/Footer'
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import {ChampionsContextProvider} from '../Context/ChampionsContext'
import { CheckLanguagePref } from '../Services/LanguagePref'



const RoutesControl = () => {
    const [langpref,setLangpref] = React.useState(null);

    React.useEffect(()=>{
        const lang = CheckLanguagePref() || 'en_US';
        setLangpref(lang)
    },[])


    return (
        <ChampionsContextProvider>
        <BrowserRouter>

            <Header langpref={langpref}/>

          
            <Switch>
                <Route exact path='/' component={IndexPage}/>
                <Route exact path='/details/:ChampName/' component={DetailsPage}/>
                <Route path="*" component={ErrorPage}/>
            </Switch>
            
            <Footer/>    
        </BrowserRouter>
        </ChampionsContextProvider>
    )
}

export default RoutesControl
