import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import {CardList} from "./components/CardList.jsx";
import PostDetails from "./components/PostDetails.jsx";
import {PostCreate} from "./components/PostCreate.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<CardList/>}/>
                    <Route path="postcard/:postId" element={<PostDetails/>}/>
                    <Route path="postcreate" element={<PostCreate/>}/>

                    <Route path="*" element={<h2>Not Found</h2>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
