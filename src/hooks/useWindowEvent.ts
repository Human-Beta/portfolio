import { useEffect } from 'react';

export default function useWindowEvent<T extends keyof WindowEventMap>(
  event: T,
  handler: (e: WindowEventMap[T]) => void,
  options?: AddEventListenerOptions | boolean
) {
  useEffect(() => {
    window.addEventListener(event, handler, options);

    return () => {
      window.removeEventListener(event, handler, options);
    };
  }, []);
}
