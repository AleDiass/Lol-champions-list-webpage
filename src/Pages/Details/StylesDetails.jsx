import styled from 'styled-components';


const MainDetails = styled.main`
    width: calc(90% - 100px);
    background-color:rgba(0,0,0,0.8);
    
   
    padding: 0 2rem ;
    margin: 10vh auto 0 auto;
    display:flex;
    position:relative;
    min-height: 70vh;

    button{
        position:absolute;
        width: 4rem;
        height: 4rem;
        display:flex;
        justify-content:center;
        align-items:center;
        background: transparent;
        border-radius: 1rem;
        outline:none; 
        border:none;
        z-index: 9999;

        &:hover i svg{
            fill: #b1aeae;

        }

    }

    

    button i svg{
        width: 3rem;
        height: 3rem;
        transform:scale(-1);
        fill:white;
        transition: all 0.3s ease;
    }



    @media (max-width:950px){
        &{
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:95vw;
            font-size: 1rem;
            background-color:rgba(0,0,0,0.6);
        }

        button{
            left:10px;
            top:10px;
        }
            
        
        
        
    }


   
    
    

`;

const DetailsDiv = styled.div   `
    color:white;
    flex:3;
    padding: 1rem;
    text-align:center;
    line-height:3.4rem;
    letter-spacing:2px;
    display:flex;
    place-content:center;
    flex-direction:column;
    animation: UptoLoading 0.8s forwards;

    h1{
        font-size: 3.4rem;
        padding: 0.5rem 0 2rem 0;
    
    }

    h3{
        font-size: 2rem;
    }


    @keyframes UptoLoading{
        from{
            opacity:0;
            transform:translateY(-10rem)   
        }

        to{
            opacity:1;
            transform:translateY(0rem)
        }
       
    }


    @media (max-width:950px){
        &{
            
        }
        h1{
           margin-top:5rem;
        }

        
        
        
    }

    
    
    `;

const ImagesDiv = styled.div`
    padding: 0 0 0 0.5rem;
    margin-left: 1rem;
    animation: UptoLoading 0.4s forwards;
    
    img{
        width:25rem;
      
       
       
    }

    @keyframes UptoLoading{
        from{
            opacity:0;
            transform:translateY(-10rem)   
        }

        to{
            opacity:1;
            transform:translateY(0rem)
        }
       
    }


    @media (max-width:950px){
       
      img{


      }
        
        
        
    }
    

`

export{
    MainDetails,
    DetailsDiv,
    ImagesDiv,
}


