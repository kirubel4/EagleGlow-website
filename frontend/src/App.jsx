import { BrowserRouter } from "react-router-dom";
import Nav from "./componets/Nav";
import Footer from "./componets/Footer";
import Landing from "./componets/Landing";
function App() {
  return (
   <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <Nav />
          <Landing />
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
