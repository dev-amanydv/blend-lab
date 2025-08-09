"use client"; // This is important! It tells Next.js this is an interactive component.

import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Home() {
  // We use state to keep track of which tab is currently active.
  const [activeTab, setActiveTab] = useState("text-to-image");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-black shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold dark:text-white text-gray-900">AI Studio</h1>
          <p className="text-sm text-gray-500">
            Your personal, free, and open-source image generation tool.
          </p>
        </div>
        <ThemeToggle/>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("text-to-image")}
              className={`${
                activeTab === "text-to-image"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              Text-to-Image
            </button>
            <button
              onClick={() => setActiveTab("background-removal")}
              className={`${
                activeTab === "background-removal"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              Background Removal
            </button>
          </nav>
        </div>

        {/* Tab Content Area */}
        <div className="mt-8">
          {/* Content for Text-to-Image Tab */}
          {activeTab === "text-to-image" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">
                Generate Image from Text
              </h2>
              {/* We will add input fields and buttons here later */}
              <p className="text-gray-400">Image generation controls will go here.</p>
            </div>
          )}

          {/* Content for Background Removal Tab */}
          {activeTab === "background-removal" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">
                Remove Image Background
              </h2>
              {/* We will add the file upload component here later */}
              <p className="text-gray-400">Background removal controls will go here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}