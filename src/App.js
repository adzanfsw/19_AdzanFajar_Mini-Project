import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './page/Home';
import Artikel from './page/Artikel';
import Sepatu from './page/Sepatu'
import TentangKami from './page/TentangKami';
import Detail from './page/Detail'

function App() {
  return (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/artikel" exact component={Artikel} />
                <Route path="/sepatu" exact component={Sepatu} />
                <Route path="/tentang-kami" exact component={TentangKami} />
                <Route path="/sepatu/geist-ekiden" exact component={Detail} />

                <Route path="/navbar" exact component={Navbar} />

                {/* <Route path="*" component={} /> */}
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
