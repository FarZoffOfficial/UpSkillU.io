import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Which Einstein feature helps sales representatives prioritize their leads?",
    options: [
      "Einstein Lead Scoring",
      "Einstein Activity Capture",
      "Einstein Opportunity Scoring",
      "Einstein Account Insights"
    ],
    correctAnswer: 0,
    explanation: "Einstein Lead Scoring uses AI to analyze historical lead data and identify the leads most likely to convert, helping sales representatives prioritize their work effectively."
  },
  {
    id: 2,
    question: "What is a key consideration when preparing data for AI models in Salesforce?",
    options: [
      "Using only external data sources",
      "Ensuring data quality and completeness",
      "Limiting data to the last 30 days",
      "Converting all data to PDF format"
    ],
    correctAnswer: 1,
    explanation: "Data quality and completeness are crucial for AI model performance. Poor or incomplete data can lead to inaccurate predictions and recommendations."
  }
];

function Practice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setShowAnswer(false);
    setSelectedAnswer(null);
  };

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          
          <p className="text-gray-900 mb-6">{question.question}</p>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showAnswer}
                className={`w-full text-left px-4 py-2 rounded-lg border ${
                  selectedAnswer === index
                    ? showAnswer
                      ? index === question.correctAnswer
                        ? 'bg-green-100 border-green-500'
                        : 'bg-red-100 border-red-500'
                      : 'bg-blue-100 border-blue-500'
                    : 'border-gray-300 hover:border-blue-500'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showAnswer && (
            <div className="mt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-blue-800 mb-2">Explanation:</h3>
                <p className="text-sm text-blue-700">{question.explanation}</p>
              </div>
              <button
                onClick={handleNextQuestion}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Practice;