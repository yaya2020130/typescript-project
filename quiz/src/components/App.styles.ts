import styled ,{createGlobalStyle} from 'styled-components';
import BGImage from '../images/pic.jpg';
// @ts-ignore
export const GlobalStyle=createGlobalStyle`
html {
  height:100%;

}
body {
  background-image:url(${BGImage});
  backgroun-size:cover;
  padding:0 20px;
  display:flex;
  justify-content:center;
  margin:0;

}
*{
  box-sizing:border-box;
  font-family:'catamaran',sans-serif;
 
}
`