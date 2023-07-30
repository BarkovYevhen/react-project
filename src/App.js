import './App.css';
import Header from './components/header/header';
import Aside from './components/aside/aside';
import Block from './components/block/block';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Aside />
        </div>
        <div style={{ flex: 3 }}>
          <Block />
        </div>
      </div>
    </div>
  );
}

export default App;
