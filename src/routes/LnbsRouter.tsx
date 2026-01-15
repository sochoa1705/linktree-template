
import LandingPage from '../views/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export const LnbsRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};