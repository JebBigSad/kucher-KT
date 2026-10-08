import styles from './Hero.module.css';

const FIELDS = [
  { name: 'checkIn', label: 'Заезд', type: 'date' as const },
  { name: 'checkOut', label: 'Выезд', type: 'date' as const },
  { name: 'adults', label: 'Взрослые', type: 'number' as const, defaultValue: 1, min: 1 },
  { name: 'children', label: 'Дети', type: 'number' as const, defaultValue: 0, min: 0 },
];

export default function BookingForm() {
  return (
    <form className={styles.booking}>
      {FIELDS.map((field) => (
        <div key={field.name} className={styles.field}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            defaultValue={field.defaultValue}
            min={field.min}
          />
        </div>
      ))}
      <button type="submit" className={styles.cta}>
        Забронировать
      </button>
    </form>
  );
}