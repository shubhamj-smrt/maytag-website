import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Minus } from 'lucide-react';
import { cn } from './ui/utils';

type Message = { role: 'user' | 'bot'; text: string };
type ConnectionStatus = 'idle' | 'connecting' | 'connected' | 'disconnected' | 'ended';
type ConnectionPhase = 'spinner' | 'connected_box' | 'typing_intro' | 'ready';

const AGENT_NAMES = ['Mark', 'Vish', 'Brian', 'Cris', 'Aaron'];

const INACTIVITY_DISCONNECT_MS = 30 * 1000; // 10 minutes

const AGENT_INTROS: ((name: string) => string)[] = [
  (name) => `Hi, I am ${name}. What can I help you with today?`,
  (name) => `Hello! I'm ${name}. How can I assist you today?`,
  (name) => `Hi there! ${name} here. What can I do for you?`,
  (name) => `Welcome! I'm ${name} and I'm here to help. What's on your mind?`,
  (name) => `Good to see you! I'm ${name}. How may I help you today?`,
];

function pickRandomName() {
  return AGENT_NAMES[Math.floor(Math.random() * AGENT_NAMES.length)];
}

function pickRandomIntro(name: string) {
  const intro = AGENT_INTROS[Math.floor(Math.random() * AGENT_INTROS.length)];
  return intro(name);
}

/** Backend API URL. Use /api/... in dev (proxied) or full URL in prod. Set VITE_CHAT_API_URL to override. */
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL ?? 'https://smrtlite.org/api/simple_chat';

async function fetchChatResponse(message: string): Promise<string> {
  const res = await fetch(CHAT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) throw new Error(`Chat API error: ${res.status}`);
  const data = (await res.json()) as { response?: string; text?: string; message?: string };
  return data.response ?? data.text ?? data.message ?? 'Sorry, I could not process that.';
}

function Spinner() {
  return (
    <div className="flex items-center justify-center py-6" aria-hidden>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .chatbot-spinner { animation: spin 0.9s linear infinite; }
      `}</style>
      <div className="chatbot-spinner h-8 w-8 rounded-full border-2 border-[#00bfb3] border-t-transparent" />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-0.5 py-1" aria-hidden>
      <style>{`
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-2px); }
        }
        .typing-dot {
          animation: typing-bounce 1.4s ease-in-out infinite;
        }
      `}</style>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="typing-dot h-1.5 w-1.5 rounded-full bg-gray-500"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

/** Typing duration in ms based on response length. ~35 chars/sec to emulate agent typing. */
function getTypingDurationMs(text: string): number {
  const ms = Math.round((text.length / 20) * 1000);
  return Math.max(ms, 800); // min 800ms so very short replies still feel natural
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('idle');
  const [connectionPhase, setConnectionPhase] = useState<ConnectionPhase | null>(null);
  const [agentName, setAgentName] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showTypingAnimation, setShowTypingAnimation] = useState(false);
  const [isTypingBurstVisible, setIsTypingBurstVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastActivityAtRef = useRef<number>(0);
  const [connectionAttemptId, setConnectionAttemptId] = useState(0);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);

  // Typing bursts: show animation ~2s, pause ~1s, repeat — mimics real typing rhythm
  const isInTypingPhase = showTypingAnimation || connectionPhase === 'typing_intro';
  useEffect(() => {
    if (!isInTypingPhase) {
      setIsTypingBurstVisible(false);
      return;
    }
    setIsTypingBurstVisible(true);
    const timers: ReturnType<typeof setTimeout>[] = [];
    const runCycle = () => {
      const burstMs = 3000 + Math.random() * 1500; // 3–4.5s typing
      const pauseMs = 900 + Math.random() * 700;   // 0.9–1.6s pause
      timers.push(setTimeout(() => {
        setIsTypingBurstVisible(false);
        timers.push(setTimeout(() => {
          setIsTypingBurstVisible(true);
          runCycle();
        }, pauseMs));
      }, burstMs));
    };
    runCycle();
    return () => timers.forEach(clearTimeout);
  }, [isInTypingPhase]);

  // First-time open or reconnection: connection flow — spinner → connected box → typing → intro
  useEffect(() => {
    if (!isOpen || connectionStatus !== 'idle') return;

    setMessages([]);
    setConnectionStatus('connecting');
    setConnectionPhase('spinner');

    let connectedName = '';
    const t1 = setTimeout(() => {
      connectedName = pickRandomName();
      setAgentName(connectedName);
      setConnectionPhase('connected_box');
    }, 5000);

    const t2 = setTimeout(() => {
      setConnectionPhase('typing_intro');
    }, 7000);

    const t3 = setTimeout(() => {
      setConnectionPhase('ready');
      lastActivityAtRef.current = Date.now();
      setMessages([{ role: 'bot', text: pickRandomIntro(connectedName) }]);
      setConnectionStatus('connected');
    }, 9500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen, connectionAttemptId]);

  const handleEndChat = () => {
    setConnectionStatus('idle');
    setConnectionPhase(null);
    setAgentName(null);
    setMessages([]);
    setInput('');
    setIsOpen(false);
  };

  const handleReconnect = () => {
    setMessages([]);
    setConnectionStatus('idle');
    setConnectionPhase(null);
    setAgentName(null);
    setConnectionAttemptId((n) => n + 1);
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Check for inactivity disconnect (10 min since last activity)
    const now = Date.now();
    if (lastActivityAtRef.current > 0 && now - lastActivityAtRef.current > INACTIVITY_DISCONNECT_MS) {
      setMessages([{ role: 'bot', text: 'You were disconnected from the chat agent due to inactivity.' }]);
      setInput('');
      setConnectionStatus('disconnected');
      return;
    }

    lastActivityAtRef.current = now;
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);
    setShowTypingAnimation(false);
    const startTime = Date.now();
    const thinkingDelayMs = 3000 + Math.random() * 2000; // 3–5 seconds before typing starts
    const thinkingTimer = setTimeout(() => setShowTypingAnimation(true), thinkingDelayMs);
    try {
      const response = await fetchChatResponse(trimmed);
      const typingDurationMs = getTypingDurationMs(response);
      // Wait for thinking + typing: response shows at thinkingDelay + typingDuration from start
      const minTotalBeforeResponse = thinkingDelayMs + typingDurationMs;
      const elapsed = Date.now() - startTime;
      const remainingMs = Math.max(0, minTotalBeforeResponse - elapsed);
      await new Promise((r) => setTimeout(r, remainingMs));
      setMessages((prev) => [...prev, { role: 'bot', text: response }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      clearTimeout(thinkingTimer);
      setIsTyping(false);
      setShowTypingAnimation(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => (isOpen ? handleEndChat() : setIsOpen(true))}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all',
          'bg-[#00bfb3] text-white hover:bg-[#00a89d] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00bfb3] focus-visible:ring-offset-2'
        )}
        aria-label={isOpen ? 'End chat' : 'Open chat'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel — fixed height, scrollable messages */}
      <div
        className={cn(
          'fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:w-full sm:max-w-sm z-40 flex h-[450px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-200 ease-out',
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-200 bg-[#00bfb3] px-4 py-3">
          <h3 className="font-semibold text-white">
            {agentName ? `Chat with ${agentName}` : 'Chat with us'}
          </h3>
          {(connectionStatus === 'connected' || connectionStatus === 'connecting' || connectionStatus === 'disconnected') && (
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded p-1 text-white/90 hover:bg-white/20 hover:text-white"
              aria-label="Minimize chat"
            >
              <Minus className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'max-w-[85%] rounded-lg px-3 py-2 text-sm',
                  msg.role === 'user'
                    ? 'ml-auto bg-[#00bfb3] text-white'
                    : 'mr-auto bg-gray-100 text-gray-900'
                )}
              >
                {msg.text}
              </div>
            ))}
            {connectionStatus === 'connecting' && connectionPhase === 'spinner' && (
              <div className="flex flex-col items-center justify-center min-h-[160px] gap-3">
                <Spinner />
                <p className="text-sm text-gray-500">Connecting...</p>
              </div>
            )}
            {connectionStatus === 'connecting' && connectionPhase === 'connected_box' && agentName && (
              <div className="flex items-center justify-center min-h-[160px]">
                <div className="rounded-lg border border-[#00bfb3] bg-[#00bfb3]/5 px-4 py-2 text-sm font-medium text-[#00bfb3]">
                  Connected to {agentName}
                </div>
              </div>
            )}
            {connectionStatus === 'connecting' && connectionPhase === 'typing_intro' && isTypingBurstVisible && (
              <div className="mr-auto w-fit rounded-lg bg-gray-100 px-3 py-2">
                <TypingIndicator />
              </div>
            )}
            {connectionStatus === 'connected' && isTyping && showTypingAnimation && isTypingBurstVisible && (
              <div className="mr-auto w-fit rounded-lg bg-gray-100 px-3 py-2">
                <TypingIndicator />
              </div>
            )}
            {connectionStatus === 'disconnected' && (
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={handleReconnect}
                  className="rounded-lg bg-[#00bfb3] px-4 py-2 text-sm font-medium text-white hover:bg-[#00a89d]"
                >
                  Reconnect
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={connectionStatus !== 'connected' || isTyping}
                className={cn(
                  'flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#00bfb3] focus:ring-1 focus:ring-[#00bfb3]',
                  (connectionStatus !== 'connected' || isTyping) && 'cursor-not-allowed bg-gray-50 opacity-70'
                )}
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim() || connectionStatus !== 'connected' || isTyping}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    input.trim() && connectionStatus === 'connected' && !isTyping
                    ? 'bg-[#00bfb3] text-white hover:bg-[#00a89d]'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                )}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
