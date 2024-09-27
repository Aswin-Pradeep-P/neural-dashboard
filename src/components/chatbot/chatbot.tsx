import { useState } from 'react';

import ChatbotIcon from '../../assets/chat.svg';

import styles from './chatbot.module.scss';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.chatbotWrapper}>
        <div className={styles.chatbotContainer}>
            {isOpen && (
                <div className={styles.textContents}>
                    <div className={styles.chatbotText}>
                        <p className={styles.chatText}>
                            Hi! How can I help you today?
                            <img className={styles.chatTextIcon} src={ChatbotIcon} alt="Chatbot" />
                        </p>
                    </div>
                    <input className={styles.textInput} type="text" placeholder="Type your message here" />
                </div>
            )}
            <img className={styles.chatIcon} src={ChatbotIcon} alt="Chatbot" onClick={() => setIsOpen(!isOpen)} />
        </div>  
    </div>
  )
}

export default Chatbot;