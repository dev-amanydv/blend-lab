"use client";

import { useState } from 'react';

export default function PromptArea() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }

    setIsLoading(true);
    setGeneratedImage(null);
    setError(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to generate image');
      }

      // Convert the image stream to a displayable format (Blob URL)
      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      setGeneratedImage(imageUrl);

    } catch (err: any) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-card-foreground">
          Generate Image from Text
        </h2>
        <div className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A cinematic photo of a hyperrealistic cat astronaut on Mars..."
            className="w-full p-2 border border-border rounded-md bg-transparent focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
            rows={3}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </div>

      {/* Display Area */}
      <div className="bg-card p-6 rounded-lg shadow min-h-[300px] flex items-center justify-center">
        {isLoading && (
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-foreground/70">Generating your masterpiece...</p>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center">
            <p><strong>Error:</strong> {error}</p>
          </div>
        )}
        {generatedImage && (
          <img 
            src={generatedImage} 
            alt="Generated AI art" 
            className="rounded-lg max-w-full max-h-[500px]"
          />
        )}
        {!isLoading && !error && !generatedImage && (
          <p className="text-foreground/50">Your generated image will appear here.</p>
        )}
      </div>
    </div>
  );
}
