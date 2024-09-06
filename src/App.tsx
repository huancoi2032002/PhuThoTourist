import { Routes, Route } from 'react-router-dom';
import { Articles, Document, Home, Recruitment } from './views';
import ArticleDetails from './views/Articles/ArticleDetails/ArticleDetails';
import RecruitmentDetail from "./views/Recruitment/RecruitmentDetail/RecruitmentDetail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticleDetails />} />
      <Route path="/document" element={<Document />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/recruitment/:id" element={<RecruitmentDetail />} />
      {/* Các route khác */}
    </Routes>
  );
}

export default App;
