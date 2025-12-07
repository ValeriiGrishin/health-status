![Tests](https://github.com/ValeriiGrishin/health-status/actions/workflows/tests.yml/badge.svg)

# Health Status Function

Функция для определения статуса здоровья персонажа в игре.

## Описание
Принимает объект персонажа и возвращает его статус:
- **`healthy`** — здоровье больше 50
- **`wounded`** — здоровье от 15 до 50 (включительно)
- **`critical`** — здоровье меньше 15

## Пример использования
```javascript
import healthStatus from './src/index.js';

console.log(healthStatus({ name: 'Маг', health: 90 })); // 'healthy'
console.log(healthStatus({ name: 'Воин', health: 30 })); // 'wounded'
console.log(healthStatus({ name: 'Лучник', health: 10 })); // 'critical'
