import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage, MessageRole } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Bonjour ! Je suis l'assistant virtuel de l'Université Horizon. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userMessage }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Désolé, j'ai rencontré un problème technique.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 mb-4 overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 h-0 w-0'
        }`}
      >
        {/* Header */}
        <div className="bg-university-800 p-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-university-600 rounded-full">
              <Sparkles size={16} className="text-yellow-300" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Assistant Horizon</h3>
              <p className="text-xs text-university-200">Toujours là pour vous aider</p>
            </div>
          </div>
          <button onClick={toggleChat} className="text-university-200 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === MessageRole.USER 
                    ? 'bg-university-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white text-slate-800 border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                 <Loader2 size={16} className="animate-spin text-university-600" />
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Posez une question..."
            className="flex-grow bg-slate-100 text-slate-900 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-university-500 transition-all"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading || !inputValue.trim()}
            className="p-2 bg-university-600 text-white rounded-full hover:bg-university-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`pointer-events-auto p-4 rounded-full shadow-lg shadow-university-900/20 transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-slate-700 rotate-90 text-white' : 'bg-university-600 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default AiAssistant;