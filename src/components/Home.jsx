function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Salesforce AI Associate Certification Prep</h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-xl font-semibold text-gray-900">Exam Overview</h2>
          <p className="mt-1 text-sm text-gray-500">Key information about the certification</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Duration</dt>
              <dd className="mt-1 text-sm text-gray-900">90 minutes</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Questions</dt>
              <dd className="mt-1 text-sm text-gray-900">60 multiple-choice</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Passing Score</dt>
              <dd className="mt-1 text-sm text-gray-900">65%</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Format</dt>
              <dd className="mt-1 text-sm text-gray-900">Multiple choice, online</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-xl font-semibold text-gray-900">Key Topics</h2>
          <p className="mt-1 text-sm text-gray-500">Main areas covered in the exam</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>AI Fundamentals and Ethics</li>
            <li>Einstein Features and Capabilities</li>
            <li>AI Cloud Solutions</li>
            <li>Data Quality and Preparation</li>
            <li>AI Implementation Best Practices</li>
            <li>AI Model Evaluation and Monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;