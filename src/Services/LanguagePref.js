function CheckLanguagePref(){
    const lang = window.localStorage.getItem('@__Lang__pref')
    return lang
}

function SetLanguagePref(lang){
    const getlang = window.localStorage.setItem('@__Lang__pref',lang)

}


export {
    CheckLanguagePref,
    SetLanguagePref,
}

