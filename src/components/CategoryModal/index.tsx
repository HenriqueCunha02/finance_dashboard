import { useState } from 'react';
import styles from './styles.module.css';

type CategoryModalProps = {
  onClose: () => void;
  onCreateCategory: (category: string) => void;
};

export function CategoryModal({
  onClose,
  onCreateCategory,
}: CategoryModalProps) {
  const [category, setCategory] = useState('');
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
              onCreateCategory(category);
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
