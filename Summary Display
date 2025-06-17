
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Globe } from 'lucide-react';
import type { Summary } from '@/pages/Index';

interface SummaryCardProps {
  summary: Summary;
  featured?: boolean;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ summary, featured = false }) => {
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <Card className={`${featured ? 'shadow-xl border-blue-100' : 'shadow-md'} hover:shadow-lg transition-shadow duration-300 overflow-hidden`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Globe className="h-4 w-4" />
            <span className="font-medium">{summary.domain}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{formatTimestamp(summary.timestamp)}</span>
            </div>
          </div>
          {featured && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
              Latest
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-4 leading-tight ${featured ? 'text-xl' : 'text-lg'}`}>
          {summary.title}
        </h3>

        {/* Summary */}
        <div className="prose prose-sm max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">{summary.summary}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(summary.url, '_blank')}
            className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200"
          >
            <ExternalLink className="h-4 w-4" />
            Read Original
          </Button>
          
          <div className="text-xs text-gray-400">
            AI Summary • {summary.summary.split(' ').length} words
          </div>
        </div>
      </div>
    </Card>
  );
};
