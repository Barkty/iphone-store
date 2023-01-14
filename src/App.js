import { lazy, Suspense } from 'react';
import { SnackbarProvider } from 'notistack';
import './App.css';
import { Route, Routes } from 'react-router-dom';


const Home = lazy(() => import('pages/Home'))

function App() {
  return (
    <SnackbarProvider>
      <Suspense>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Suspense>
    </SnackbarProvider>
  );
}

export default App;
