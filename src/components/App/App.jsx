import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollToTop from 'react-scroll-to-top';
import { fetchArticles } from '../../actions/blog';

import Home from '../Home/Home';
import Exploration from '../Exploration/Exploration';
import Calendar from '../Calendar/Calendar';
import Authentification from '../Authentification/Authentification';
import About from '../Informations/About/About';
import Contact from '../Informations/Contact/Contact';
import Copyrights from '../Informations/Copyrights/Copyrights';
import Blog from '../Blog/Blog';
import Single from '../Blog/Single/Single';
import Profile from '../Profile/Profile';
import Footer from '../templates/Footer/Footer';
import Header from '../templates/Header/Header';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    dispatch(fetchArticles());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const articlesList = useSelector((state) => state.blog.articlesList);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Home articles={articlesList} />} />
          <Route path="/blog" element={<Blog articles={articlesList} />} />
          <Route
            path="/articles/:id"
            element={<Single articles={articlesList} />}
          />
          <Route path="/exploration" element={<Exploration />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/authentification" element={<Authentification />} />
          {isLogged ? (
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route
              path="/profile"
              element={<Navigate to="/authentification" />}
            />
          )}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/copyrights" element={<Copyrights />} />
        </Routes>
        <ScrollToTop smooth top={300} className="scroll-button" />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
