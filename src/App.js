import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data'

function App() {
  const main = data.map(item => <Card key={item.title} {...item}/>)
  return (
    <div className="App">
      <Navbar/>
      {main}
    </div>
  );
}

export default App;
