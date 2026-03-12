import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AppHeader from "./components/Header";
import FormPage from "./pages/FormPage";
function App() {
  return (
    <BrowserRouter>
      <div id="wrap">
        <AppHeader />
        <main className="content_block">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:key" element={<ProjectDetailPage />} />
            <Route path="/edit" element={<FormPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
