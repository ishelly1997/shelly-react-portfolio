
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  var component = {page:''}
  return (
    <div className="App">
      <Header/>
      {component.page == 'Resume'? <Resume/>:<Projects/> }
      <Footer/>
    </div>
  );
}

export default App;
