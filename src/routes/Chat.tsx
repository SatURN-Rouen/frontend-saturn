import './styles/Chat.css'

function Chat() {

  return (
    <div className='container-chatbot'>

      <div className='conv-chatbot'>
        
      </div>

      <div className="chat-container">
        <div className="chat-blur"></div>
        <div className='input-cont'>
          <img src="https://img.icons8.com/fluency/48/bard.png" alt="AI" />
          <input className='input-chat' type={"text"} placeholder={"Avez-vous une idée en tête ? Une question ?"} />
        </div>
      </div>
    </div>
  )
}

export default Chat
