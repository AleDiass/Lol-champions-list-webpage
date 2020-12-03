import styled from 'styled-components'

const DivMain = styled.main`

    width: 90vw;
    min-height: 101vh;
    margin-right: -15px;
    margin: 5rem auto;
    

`;



const InputForm = styled.form`
    width: 60%;
    text-align:center;
    position:relative;
    display:flex;
    align-items:center;
    margin: 0 auto;
    position:relative;
        top:1rem;

    input{
        border:1px #ccc solid;
        width: 100%;
        height: 5rem;
        border-radius: 1rem;
        padding: 0 5rem 0 2rem;
        color: #3a383a;
        font-size: 1.8rem;
        animation: animInput 0.7s backwards;
        animation-delay: 0.4s;
        

        &::placeholder{
            color: #a7a7a7;
            font-size: 1.8rem;
        }

        input:hover,input:focus{
            outline:none;
            border:1px black solid;
        }

   

        
    }
    button {
        position:absolute;
        right: 1rem;
        background: transparent;
        outline:none;
        border: none;
        display:flex;
        place-content:center;
    
    
    }
    button i svg{
        padding: 0.1rem;
        width: 2.5rem;
        height: 2.5rem;
        opacity:0.5;
    }

    @keyframes animInput{
        from{
            opacity:0;
            transform: translateY(-2rem)
        }
        to{
            opacity:1;
            transform: translateY(initial)
        }
       
    }


    



  
`;

const DivChampions = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    background: rgba(0,0,0,0.8);
    padding: 5rem 3rem;
    border-radius: 1.5rem;
   

    
    div{
       
        margin: 1rem;
        display:flex;
        justify-content:center;    
        transition: transform 0.3s linear ,opacity 0.3s linear;
        border:1px transparent solid;
        opacity: 0;
        animation: animloading .5s forwards; 

        &:hover{
            transform: scale(0.9);
            border:1px #616060 solid;
        }
        &:hover img {
            opacity: 0.8;
        }

    }

   & div img{
        width: 8rem;
        height:8rem;
        
    }


    @keyframes animloading{
        to{
            opacity:1;
            transform: translateY(-2rem);
        }
    }

    
   
`

export {
    DivMain,
    InputForm,
    DivChampions,
}