import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ChatPage } from './pages/chat/chatPage'
import { ChatHistoryPage } from './pages/chatHistory/chatHistoryPage'
import { LoginPage } from './pages/loginMock/loginPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/history" element={<ChatHistoryPage />} />
    </Routes>
  )
}

export default App
