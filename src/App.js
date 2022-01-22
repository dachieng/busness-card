import './App.css';
import Header from "./components/Header";
import Bio from './components/Bio';
import About from './components/About';
import Footer from './components/Footer'

function App(){
  return (
      <body>
       <main className='main-content'>
        <Header />
        <Bio />
        <About />
        <Footer />
       </main>
      </body>
  )
}

export default App;