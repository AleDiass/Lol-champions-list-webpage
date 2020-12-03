import React from 'react'
import {getData} from '../Services/Api'


const ChampionsContext = React.createContext();



 const ChampionsContextProvider = ({children}) => {
    const [data,setData] = React.useState(null)
    const [loading,setLoading] = React.useState(true)
    const [error,setError] = React.useState(null)
    const [language,setLanguage] = React.useState('en_US')
    

    React.useState(()=>{
        (async()=>{
            try{
                setError(false)

                const dataChampions = await getData();
                
                setData(dataChampions)
            }catch(e){
                setError(true)
            }finally{
                setLoading(false)
            }


        })()
    },[])


   return (

        <ChampionsContext.Provider value={{data,error,loading,language,setLanguage}}>
            {children}
        </ChampionsContext.Provider>
   )
    
}

export {
    ChampionsContextProvider,
    ChampionsContext,
}