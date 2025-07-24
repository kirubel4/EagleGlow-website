#main space
import { BrowserRouter } from "react-router-dom";
import HomePage from "./page/home";
import Nav from "./componets/Nav";
function App() {
  return (
   <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <HomePage />
      </div>
    </BrowserRouter>
  )
}

export default App;
