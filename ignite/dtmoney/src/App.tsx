import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboeard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/UseTransaction';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
 
  function handleOpenNewtransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewtransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewtransactionModal={handleOpenNewtransactionModal}/>
      <NewTransactionModal
       isOpen={isNewTransactionModalOpen} 
       onRequestClose={handleCloseNewtransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
