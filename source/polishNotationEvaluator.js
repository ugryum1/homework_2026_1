'use strict';

/**
 * Функция, вычисляющая выражение в префиксной нотации
 * @param {string} expression - исходное выражение
 *
 * @example
 * // returns 3
 * polishNotationEvaluator("+ 1 2");
 *
 * @returns {number} - результат вычисления выражения
 */
const polishNotationEvaluator = (expression) => {
    const tokens = expression.split(' ');

    const stack = tokens.reduceRight((stack, token) => {
        // Пропускаем пустые строки
        if (token === '') return stack;

        // Если токен - число
        if (!isNaN(token)) {
            stack.push(Number(token));
            return stack;
        }
        // Токен - оператор
        const operand1 = stack.pop();
        const operand2 = stack.pop();

        switch (token) {
            case '+':
                stack.push(operand1 + operand2);
                break;
            case '-':
                stack.push(operand1 - operand2);
                break;
            case '*':
                stack.push(operand1 * operand2);
                break;
            case '/':
                stack.push(operand1 / operand2);
                break;
            default:
                console.error(`Неизвестный оператор: ${token}`);
        }

        return stack;
    }, [])

    // Финальный результат лежит в вершине стека
    return stack[0];
};
