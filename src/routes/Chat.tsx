import './styles/Chat.css'
import UserQuery from "../components/UserQuery.tsx";
import AIQuery from "../components/AIQuery.tsx";

function Chat() {

    return (
        <>
            <div className='container-chatbot'>
                <div>
                    <UserQuery
                        query={"Lorem ipsum dolor sit amet, do duis nostrud reprehenderit, laborum pariatur tempor elit laborum."}/>
                    <AIQuery
                        query={"Lorem ipsum dolor sit amet, do duis nostrud reprehenderit, laborum pariatur tempor elit laborum."}/>
                </div>
            </div>
            <div className="chat-container">
                <div>
                </div>
                <div>
                    <img src="https://img.icons8.com/fluency/48/bard.png" alt="AI"/>
                    <input type={"text"} placeholder={"Avez-vous une idée en tête ? Une question ?"}/>
                    <button>
                        <img src="https://img.icons8.com/FFFFFF/sf-black-filled/64/sent.png" alt="sent"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Chat
