
import React, { useState } from 'react';
import { URLInput } from '@/components/URLInput';
import { SummaryCard } from '@/components/SummaryCard';
import { SummaryHistory } from '@/components/SummaryHistory';
import { FileText, Sparkles } from 'lucide-react';

export interface Summary {
  id: string;
  url: string;
  title: string;
  summary: string;
  timestamp: Date;
  domain: string;
}

const Index = () => {
  const [currentSummary, setCurrentSummary] = useState<Summary | null>(null);
  const [summaryHistory, setSummaryHistory] = useState<Summary[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewSummary = (summary: Summary) => {
    setCurrentSummary(summary);
    setSummaryHistory(prev => [summary, ...prev.slice(0, 4)]); // Keep last 5 summaries
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI News Summarizer</h1>
              <p className="text-gray-600">Get instant, intelligent summaries of any news article</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input and Current Summary */}
          <div className="lg:col-span-2 space-y-8">
            {/* URL Input Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Summarize Any Article</h2>
              </div>
              <URLInput 
                onSummaryGenerated={handleNewSummary}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </div>

            {/* Current Summary */}
            {currentSummary && (
              <SummaryCard summary={currentSummary} featured={true} />
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center justify-center space-x-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="text-gray-600 font-medium">Analyzing article and generating summary...</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - History */}
          <div className="lg:col-span-1">
            <SummaryHistory summaries={summaryHistory} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">Powered by AI • Built with ❤️</p>
            <p className="text-sm">Simply paste any news article URL to get an instant, intelligent summary</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
