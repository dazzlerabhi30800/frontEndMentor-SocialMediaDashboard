import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Social from './Components/Social';
import Overview from './Components/Overview';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Social />
        <Overview />
      </main>
    </div>
  );
}

export default App;
