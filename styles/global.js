import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
  font-size: 62.5%;

 
  body {
    background-color: rgb(237, 109, 41);
    min-height: 100vh;
    position: relative;
    background: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;

    header{
      box-shadow: 3px 3px 3px #ddd;
      padding: 1.5rem;
      text-align: center;
      h1{
        font-size: 2.2rem;
      }
    }

    footer{
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 1.5rem;
      background-color: rgb(25, 25, 31);
      color: #fff;
      font-size: 1.4rem;
      p{
        margin-bottom: .3rem;
       
      }
    }
    main{
      
      .search-form-wrapper{
        height: 30rem;
        background-color: rgb(0, 0, 255);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
        h2{
          color: rgb(244, 172, 18)
        }
      }
    }
  }

}

@media (max-width: 430px) {
    body{
      main{
        h2{
          font-size: 1.8rem;
        }
      }
    }

  }
  
`;
