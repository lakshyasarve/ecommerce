
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ScrollToTop from './customer/components/ScrollToTop';

function App() {
  return (
    <>
     <FloatingWhatsApp accountName='Kiah Hygiene' phoneNumber='9109044644' placeholder='I want to enquire about products' notification = {1} notificationSound = {1} chatMessage='Welcome to Kiah Hygiene! How can we help you?' avatar='/images/Kiah_whatsapp_icon.png'
    />
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path='/*' element={<CustomerRouters></CustomerRouters>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
