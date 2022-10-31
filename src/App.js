import logo from './logo.svg';
import './App.css';
import Proudact from './component';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App(props) {
  return (
    <div className="App row">
      <Proudact
        name="Shampoo"
        price={12}
        category="Hair "
        imgUrl="https://www.dove.com/content/dam/unilever/dove/united_states_of_america/pack_shot/079400458018.01-30858167-png.png"
      />
      <Proudact
        name="Shirt"
        price={11}
        category="Clothing"
        imgUrl="https://hollywoodchamber.net/wp-content/uploads/2020/06/tshirt-2.jpg"
      />
      <Proudact
        name="Ball"
        price={5}
        category="Games"
        imgUrl="https://www.elgato.com/themes/custom/smalcode/image/products/screen-link/monitor-mask.png"
      />
    </div>
  );
}

export default App;
