import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CheckboxTree from './Assignments/CheckboxTreeView/view/CheckboxTree.jsx';
import  CardFlip from './Assignments/CardFlip/Components/CardFlip.jsx';
import Tabs from './Assignments/Tabs/Component/Tabs.jsx';
import { tabs } from './Assignments/Tabs/Component/Config.jsx';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="CheckboxTreeView" element={<CheckboxTree />} />
        <Route path="CardFlip" element={<CardFlip />} />
        <Route path="Tabs" element={<Tabs tabs={tabs} />} />
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
