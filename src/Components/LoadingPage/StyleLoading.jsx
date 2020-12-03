import styled from 'styled-components';



const LoadingAnim = styled.div`

    width:100vw;
    height: 70vh;
    display:flex;
    justify-content:center;
    align-items:center;

    div{
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
       
        border: 10px #8f8f8f solid;
         border-left: 10px #f1f1f1 solid;

         animation: CircleLoading 1s linear infinite;
         animation-delay: 0;
         opacity: 0.7;
        
    }

    @keyframes CircleLoading{
        to{
            transform: rotate(360deg)
        }
    }
 
    

`;



export {
    LoadingAnim,
}