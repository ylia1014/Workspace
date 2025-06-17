
import React from 'react';
import { Card } from '@/components/ui/card';
import { SummaryCard } from './SummaryCard';
import { History, Sparkles } from 'lucide-react';
import type { Summary } from '@/pages/Index';

interface SummaryHistoryProps {
  summaries: Summary[];
}

export const SummaryHistory: React.FC<SummaryHistoryProps> = ({ summaries }) => {
  if (summaries.length === 0) {
    return (
      <Card className="p-6 bg-gray-50 border-gray-200">
        <div className="text-center">
          <div className="bg-gray-200 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
            <History className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2">No Summaries Yet</h3>
          <p className="text-sm text-gray-600">Your recent article summaries will appear here</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <History className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">Recent Summaries</h2>
      </div>
      
      <div className="space-y-4">
        {summaries.map((summary) => (
          <SummaryCard key={summary.id} summary={summary} />
        ))}
      </div>

      {summaries.length > 0 && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Sparkles className="h-4 w-4" />
            <span>Showing last {summaries.length} summaries</span>
          </div>
        </div>
      )}
    </div>
  );
};
