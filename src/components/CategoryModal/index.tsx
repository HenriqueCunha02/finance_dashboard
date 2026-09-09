import { useState } from 'react';
import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { FinanceActionTypes } from '../../contexts/financeActions';
import toast from 'react-hot-toast';

type CategoryModalProps = {
  onClose: () => void;
};

export function CategoryModal({ onClose }: CategoryModalProps) {
  const { state, dispatch } = useFinanceContext();

  const [category, setCategory] = useState('');

  function handleCreateCategory(category: string): boolean {
    const newCategory = category.trim();

    if (newCategory === '') {
      toast.error('Categoria vazia...');
      return false;
    }

    if (state.categories.includes(newCategory)) {
      toast.error('Essa categoria já existe.');
      return false;
    }
    dispatch({
      type: FinanceActionTypes.CREATE_CATEGORY,
      payload: newCategory,
    });

    toast.success('Categoria criada com sucesso');
    return true;
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
              const created = handleCreateCategory(category);
              if (created) {
                onClose();
              }
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
