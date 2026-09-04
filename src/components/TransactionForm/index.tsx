import { Plus } from 'lucide-react';

import styles from './styles.module.css';
import { useState } from 'react';
import { CategoryModal } from '../CategoryModal';
import type { TransactionModel } from '../../models/transactionModel';

type TransactionFormProps = {
  setTransactions: React.Dispatch<React.SetStateAction<TransactionModel[]>>;
};

export function TransactionForm({ setTransactions }: TransactionFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const description = formData.get('description') as string;
    const amount = Number(formData.get('amount'));
    const type = formData.get('type') as TransactionModel['type'];
    const category = formData.get('category') as string;

    const newTransaction: TransactionModel = {
      id: Date.now(),
      description: description,
      amount: amount,
      category: category,
      type: type,
      date: new Date().toLocaleDateString('pt-BR'),
    };

    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);

    event.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <Plus className={styles.plusIcon} color='#22c55e' />
            <div className={styles.textContainer}>
              <h2>Nova transação</h2>
              <p>Adicione uma receita ou despesa</p>
            </div>
          </div>

          <div className={styles.description}>
            <label htmlFor='description'>Descrição</label>
            <input
              id='description'
              name='description'
              type='text'
              placeholder='Ex: Mercado, Salário, Netflix... '
            />
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor='amount'>Valor</label>
              <input
                id='amount'
                name='amount'
                type='number'
                placeholder='R$ 0,00'
              />
            </div>
            <div className={styles.field}>
              <label htmlFor='type'>Tipo</label>
              <select name='type' id='type'>
                <option value='income'>Receita</option>
                <option value='expense'>Despesa</option>
              </select>
            </div>
          </div>

          <div className={styles.category}>
            <div className={styles.createCategory}>
              <label htmlFor='category'>Categoria</label>
              <button
                className={styles.createCategoryButton}
                type='button'
                onClick={() => setIsModalOpen(true)}
              >
                + Criar Categoria
              </button>
            </div>
            <select name='category' id='category'>
              <option value=''>Selecione uma categoria</option>
              <option value='mercado'>Mercado</option>
              <option value='salário'>Salário</option>
            </select>
          </div>

          <button type='submit' className={styles.submitButton}>
            <Plus />
            Adicionar transação
          </button>
        </div>
      </form>
      {isModalOpen && <CategoryModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
