import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    body{
        background-color: #333;
    }

    html,body{
        width:100%;
        height:100%;
    }


    #root{
        min-height: 100vh;
        transition:background 0.2s ease-in;
    }

    
    

    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
        --webkit-font-smooth:antialiased;
    }
    


    button{
        cursor:pointer;
    }
    li a{
        list-style:none;
        text-decoration:none;
    }



`;


export default GlobalStyle