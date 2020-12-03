import styled from 'styled-components';


const HeaderStyled = styled.header`
    height:15vh;
    background:black;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;

    div a{
        text-decoration:none;
        color: #f1bd39;
        font-size:2.5rem;
        letter-spacing:3px;
        font-weight:700;
        
    }
    
    select{
        background:#222020;
        color:White;
        font-size:1.4rem;
        padding:0.3rem 1rem;
        position:absolute;
        right:1rem;
      
    }

    select option{
        padding: 0.2rem;
    }


    @media (max-width:800px){
        select{
            right:0;
            bottom:0;
            width: 10rem;
        }
    }
    
`;

export{
    HeaderStyled,
}