import './App.css'
import Nav from "./components/navbar/nav";
import Section1 from "./components/textreveal/textReveal";
import Section2 from "./components/section2/section2";

function App() {

  return (
    <>
      <Nav/>
      <div class="small"></div>
      <Section1/>
      <Section2/>
      <div class="big">
        <h1>Made With ❤️</h1>
      </div>
      {/* <p>
        nmvdnfsmn,ndvdjnvdknvdkjvndkvndkjvndvbdvbjdvbdjvhdhjvdhbj
sdfsfsfsfsfsdfsdfdsfds
      </p> */}
    </>
  )
}

export default App;
