import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router"
import Page from './Page'

const LINKS = [
  {
    name: "homepage",
    path: "/"
  },
  {
    name: "javascript",
    path: "/javascript"
  },
  {
    name: "tailwind",
    path: "/tailwind"
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page links={LINKS}/>}/>
        <Route path="/javascript" element={<Page links={LINKS}/>}/>
        <Route path="/tailwind" element={<Page links={LINKS}/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
