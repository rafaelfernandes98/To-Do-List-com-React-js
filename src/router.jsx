import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddTarefa from './pages/addTarefa/AddTarefa';
import Home from './pages/home/Home'

function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/addTarefa'  element={<AddTarefa />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;