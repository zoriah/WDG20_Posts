import {Route, Routes} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import {CardList} from "./components/CardList.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<CardList/>}/>
                    {/*<Route path="postcreate" element={<PostCreate/>}/>*/}
                    {/*<Route path="postcard/:postId" element={<PostDetails/>}/>*/}

                    <Route path='*' element={<h2>Not Found</h2>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
