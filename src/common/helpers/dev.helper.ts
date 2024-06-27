/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Набор утилит, доступных только в dev режиме
 */
const dev = {
  /**
   * Функция, выводящая в консоль переданное в параметрах сообщение. Консоль выводится только в dev-режиме.
   * @param message -сообщение, которое необходимо вывести в консоль
   */
  log: (message: any, ...messages: any[]): void => {
    if (import.meta && import.meta.env && import.meta.env.DEV) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      console.log(message, ...messages);
    }
  },
};

export default dev;
