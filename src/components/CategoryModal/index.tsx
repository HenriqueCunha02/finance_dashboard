import styles from './styles.module.css';

type CategoryModalProps = {
  onClose: () => void;
};

export function CategoryModal({ onClose }: CategoryModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Nova categoria</h2>

        <input
          className={styles.modalInput}
          id='category-name'
          type='text'
          placeholder='Ex: Educação'
        />

        <div className={styles.actions}>
          <button className={styles.createButton} type='button'>
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
