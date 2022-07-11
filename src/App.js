import './App.css';
import { Routes, Route } from "react-router-dom"
import MainPage from './Page/MainPage';
import Top from './Components/Top';
import Bottom from './Components/Bottom';
import LoginPage from './Page/SignIn/Up/LoginPage';
import SearchPage from './Page/SearchPage';
import CategoryPage from './Page/Category/CategoryPage';
import MyPage from './Page/MyPage';
import UploadPage from './Page/UploadPage';
import SavedPage from './Page/SavedPage';

function App() {
  return (
    <div>
      <Top />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/member_info" element={<MyPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/saved_page" element={<SavedPage />} />
      </Routes>
      <Bottom />
    </div>
  );
}

export default App;
