import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import ThemeContext from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContext><App /></ThemeContext>

)
