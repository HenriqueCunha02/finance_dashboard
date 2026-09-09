import { FinanceProvider } from './contexts/FinanceProvider';

import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <FinanceProvider>
      <Toaster position='top-right' />
      <Home />
    </FinanceProvider>
  );
}
export default App;
