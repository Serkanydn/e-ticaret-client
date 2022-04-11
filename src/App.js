import { Routes, Route } from 'react-router-dom';
import UiDashboard from '../src/layouts/ui/uiDashboard';
import AdminDashborad from '../src/layouts/admin/adminDashborad';
import Error from '../src/layouts/error';
import AdminPage from '../src/pages/admin/adminPage';
import Home from '../src/pages/ui/home/home';
import Products from '../src/pages/ui/products/products';
import { useEffect,useState } from 'react';



function App() {

  const [loading,setLoading]=useState(false);
  
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[])
  return (
    <div>
      {loading ? <div>Loading...</div> : 
      <Routes>
        <Route path="/" element={<UiDashboard />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route path="/admin" element={<AdminDashborad />}>
        <Route index element={<AdminPage />}/></Route>

        <Route path='*' element= {<Error />} />
      
      </Routes>
      }
    </div>
  );
}

export default App;
