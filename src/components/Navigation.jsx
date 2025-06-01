import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">SalesforceCertPrep</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Home
              </Link>
              <Link to="/practice" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Practice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;