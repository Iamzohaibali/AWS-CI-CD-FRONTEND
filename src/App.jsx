import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                Frontend + Backend Connected 🚀
              </h1>
            </div>
            
            <div className="px-8 py-6">
              {/* Status Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  System Online
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600">Connecting to backend...</p>
                </div>
              )}

              {/* Error State */}
              {error && !loading && (
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">Error: {error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Success State */}
              {data && !loading && (
                <div className="text-center space-y-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                      {data.message}
                    </h2>
                    {data.success && (
                      <div className="inline-flex items-center text-green-600 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Success Status: True
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* CI/CD Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800">
                      CI/CD Pipeline Active
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Frontend CI/CD is working successfully! 🎉
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Info Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Backend Connection Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">API Endpoint:</span>
                <code className="text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {import.meta.env.VITE_API_URL}/api
                </code>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Connection Status:</span>
                <span className="text-green-600 font-semibold">Connected ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;