import styled from 'styled-components';

const FooterStyle = styled.footer`
    
    margin-top: 5rem;
    display:flex;
    background: rgba(0,0,0,0.6);
    color:white;
    font-size:1.3rem;
    letter-spacing:2px;
    justify-content:Center;
    align-items:center;
    padding: 1rem;

    div{
        padding: 1rem;
        margin-bottom: 2rem;
        width:40%
       
    }

    section{
        width:40%;
        text-align:center;
        
        
        font-weight:700;
    }
    section a{
        font-size:1.8rem;
        color:white;
    }
    

    @media (max-width:900px){
        &{
            flex-direction:column;

        }

        div{
            width: 80%;
        }
    }


`;

export {
    FooterStyle,
}