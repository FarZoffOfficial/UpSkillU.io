import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Practice from './components/Practice';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;