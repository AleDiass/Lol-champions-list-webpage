import styled from 'styled-components';

const FooterStyle = styled.footer`
    
    height: 15vh;
    margin-top: 5rem;
    display:flex;
    background: rgba(0,0,0,0.6);
    color:white;
    font-size:1.3rem;
    letter-spacing:2px;
    justify-content:Center;
    align-items:center;
    padding:1rem 0 0 0 ;

    div{
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
    


`;

export {
    FooterStyle,
}