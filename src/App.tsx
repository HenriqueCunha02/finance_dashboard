import { FinanceProvider } from './contexts/FinanceProvider';

import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <FinanceProvider>
      <Home />
    </FinanceProvider>
  );
}
export default App;
