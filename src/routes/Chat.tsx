import './styles/Chat.css'
import UserQuery from "../components/UserQuery.tsx";
import AIQuery from "../components/AIQuery.tsx";
import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';

type Message = {
    role: 'user' | 'ai';
    content: string;
};

function Chat() {
    const [conversation, setConversation] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Scroll automatique vers le bas
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [conversation]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue("");
        // Affiche la question utilisateur tout de suite
        setConversation(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        // Simuler une réponse de l'IA (à remplacer par votre vraie API)
        try {
            const response = await fetch('http://localhost:11434/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: "gemma3:4b",
                    messages: [
                        {
                            role: "user",
                            content: userMessage
                        }
                    ],
                    stream: false
                }),
            });

            const data = await response.json();
            const aiResponse = data.message?.content || "Erreur lors de la récupération de la réponse de l'IA.";

            setConversation(prev => [...prev, { role: 'ai', content: aiResponse }]);
        } catch (error) {
            console.error("Erreur:", error);
            setConversation(prev => [...prev, { role: 'ai', content: "Erreur réseau ou serveur." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <div className='container-chatbot'>
                <div>
                    {conversation.map((item, index) => (
                        item.role === 'user' ? (
                            <UserQuery key={index} query={item.content} />
                        ) : (
                            <AIQuery key={index} query={item.content} />
                        )
                    ))}
                    {isLoading && (
                        <AIQuery query="..." />
                    )}
                    <div ref={chatEndRef} />
                </div>
            </div>
            <div className="chat-container">
                <div>
                </div>
                <div>
                    <img src="https://img.icons8.com/fluency/48/bard.png" alt="AI" />
                    <input
                        type="text"
                        placeholder="Avez-vous une idée en tête ? Une question ?"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        disabled={isLoading}
                    />
                    <button onClick={handleSendMessage} disabled={isLoading}>
                        <img src="https://img.icons8.com/FFFFFF/sf-black-filled/64/sent.png" alt="sent" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Chat
