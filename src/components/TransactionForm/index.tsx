import { Plus } from 'lucide-react';

import styles from './styles.module.css';

export function TransactionForm() {
  return (
    <form>
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
            type='text'
            placeholder='Ex: Mercado, Salário, Netflix... '
          />
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor='amount'>Valor</label>
            <input id='amount' type='number' placeholder='R$ 0,00' />
          </div>
          <div className={styles.field}>
            <label htmlFor='type'>Tipo</label>
            <select name='type' id='type'>
              <option value='Receita'>Receita</option>
              <option value='Despesa'>Despesa</option>
            </select>
          </div>
        </div>
        <div className={styles.category}>
          <label htmlFor='category'>Categoria</label>
          <select name='category' id='category'>
            <option value=''>Selecione uma categoria</option>
            <option value='mercado'>Mercado</option>
            <option value='salário'>Salário</option>
          </select>
        </div>
        <button type='submit' className={styles.submitButton}>
          <Plus />
          Adicionar transição
        </button>
      </div>
    </form>
  );
}
