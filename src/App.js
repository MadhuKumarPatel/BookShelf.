import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSearchPage from "./Pages/BookSearchPage";
import BookShelf from "./components/BookShelf/BookShelf";
import Header from "./components/Header/Header";

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><BookSearchPage /></Layout>} />
                <Route path="/bookshelf" element={<Layout><BookShelf/></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
