
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { summarizeArticle } from '@/utils/articleSummary';
import type { Summary } from '@/pages/Index';

interface URLInputProps {
  onSummaryGenerated: (summary: Summary) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const URLInput: React.FC<URLInputProps> = ({ 
  onSummaryGenerated, 
  isLoading, 
  setIsLoading 
}) => {
  const [url, setUrl] = useState('');

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a valid news article URL.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL starting with http:// or https://",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const summary = await summarizeArticle(url);
      onSummaryGenerated(summary);
      setUrl(''); // Clear input after successful submission
      
      toast({
        title: "Summary Generated!",
        description: "Your article has been successfully summarized.",
      });
    } catch (error) {
      console.error('Error summarizing article:', error);
      toast({
        title: "Summarization Failed",
        description: "Unable to summarize this article. Please try a different URL.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="url"
            placeholder="https://example.com/news-article"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pl-10 h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !url.trim()}
          className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Summarizing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Summarize
            </div>
          )}
        </Button>
      </div>
      
      <div className="text-sm text-gray-500">
        <p>📰 Paste the URL of any news article to get an instant AI-powered summary</p>
      </div>
    </form>
  );
};
