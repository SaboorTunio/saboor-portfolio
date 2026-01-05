'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: string; role: string; content: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input before processing
    if (!inputValue.trim() || isLoading) return;

    // Ensure we have a proper message structure
    const userMessageContent = inputValue.trim();
    if (!userMessageContent) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessageContent
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userMessageContent }]
        }),
      });

      // Check if the response indicates an error (status 500)
      if (response.status === 500) {
        let errorData: any = {};
        try {
          errorData = await response.json();
        } catch (parseError) {
          // If response is not JSON, create a default error object
          errorData = { error: 'API Error', details: 'Non-JSON response received' };
        }
        console.error('API Error Response:', errorData);
        throw new Error(`API Error: ${errorData.error || 'Unknown error'}${errorData.details ? ` - ${errorData.details}` : ''}`);
      }

      // For successful responses, proceed with streaming
      if (!response.body) {
        throw new Error('No response body received from API');
      }

      // Handle streaming response
      const reader = response.body.getReader();

      const decoder = new TextDecoder();
      let aiResponse = '';
      let aiMessageId = Date.now().toString() + '-ai';

      // Add an empty AI message to update in real-time
      setMessages(prev => [...prev, { id: aiMessageId, role: 'assistant', content: '' }]);

      let lastMessageTime = Date.now();
      const timeoutMs = 30000; // 30 second timeout

      while (true) {
        // Add timeout check
        if (Date.now() - lastMessageTime > timeoutMs) {
          throw new Error('Response timeout');
        }

        const { done, value } = await reader.read();
        if (done) break;

        lastMessageTime = Date.now();
        const chunk = decoder.decode(value, { stream: true });
        aiResponse += chunk;

        // Update the AI message content
        setMessages(prev =>
          prev.map(msg =>
            msg.id === aiMessageId ? { ...msg, content: aiResponse } : msg
          )
        );
      }

      reader.releaseLock();
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating "Neon Orb" Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600
                   flex items-center justify-center shadow-lg z-50 backdrop-blur-xl border border-white/20
                   hover:from-blue-400 hover:to-purple-500 transition-all duration-300
                   shadow-blue-500/50 shadow-purple-600/50 hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-white"
        >
          <path
            fill="currentColor"
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
          />
        </svg>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-6 w-80 h-[350px] sm:h-[400px] md:h-[400px] bg-black/90 backdrop-blur-xl border border-white/10
                       rounded-xl shadow-2xl shadow-blue-500/20 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold">Saboor's Assistant</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-xl ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-100 rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-4 py-2 rounded-xl bg-gray-800 text-gray-100 rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my projects, skills..."
                  className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700
                             disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Ask about my projects, skills, or experience
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}