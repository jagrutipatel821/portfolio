import Header from "./Components/Header"
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/info";
import Footer from "./Components/Footer";
import './App.css';


const siteProps ={
  name :"Jagruti Patel",
  title: "Web Developer",
  email: "jagrutipatel2005103@gmail.com",
  gitHub :"microsoft",
  instagram:"microsoft",
  linkedIn :"pateljagruti",
  medium: "",
  twitter:"microsoft",
  youTube:"",
}
const primaryColor ="#4e567e";
const secondaryColor ="#d2f1e4"

function App() {
  return (
    <div>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor}/>
      
      
      
    </div>
  );
}

export default App;
