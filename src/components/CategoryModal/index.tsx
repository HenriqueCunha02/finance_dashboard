import { useState } from 'react';
import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { FinanceActionTypes } from '../../contexts/financeActions';

type CategoryModalProps = {
  onClose: () => void;
};

export function CategoryModal({ onClose }: CategoryModalProps) {
  const { state, dispatch } = useFinanceContext();

  const [category, setCategory] = useState('');

  function handleCreateCategory(category: string) {
    const newCategory = category.trim();

    if (newCategory === '') {
      return alert('Categoria vazia...');
    }

    if (state.categories.includes(newCategory)) {
      return alert('Essa categoria já existe.');
    }
    dispatch({
      type: FinanceActionTypes.CREATE_CATEGORY,
      payload: newCategory,
    });
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Nova categoria</h2>

        <input
          className={styles.modalInput}
          id='category-name'
          type='text'
          placeholder='Ex: Educação'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <div className={styles.actions}>
          <button
            className={styles.createButton}
            type='button'
            onClick={() => {
              handleCreateCategory(category);
              onClose();
            }}
          >
            Criar categoria
          </button>

          <button
            className={styles.closeButton}
            type='button'
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
