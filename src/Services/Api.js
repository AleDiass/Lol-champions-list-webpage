let version;

async function getData(){

    if(!version){
        const responseVersion =await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
        version = await responseVersion.json();
        window.localStorage.setItem('@_Version__',version[1])    
    }


    const {data} = await fetch(`https://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion.json`)
                    .then(res => res.json())

 

    return  Object.values(data);
    
   

}

async function getChampionInfo(champname,lang='en_US'){

const versionLocalStorage =await window.localStorage.getItem('@_Version__')
const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${versionLocalStorage || '10.24.1'}/data/${lang}/champion/${champname}.json`)
const {data} = await response.json();



return data

}


async function getAllLanguages(){
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/languages.json`);
    const json = await response.json();

    return json;
}

export {getData,getChampionInfo,getAllLanguages};