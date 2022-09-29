import { useEffect } from 'react';

function useTitle(title: string): void {
  useEffect(() => {
    if (title && document !== undefined) {
      document.title = title;
    }

    return () => {
      document.title = 'Logistics';
    };
  }, [title]);
}

export default useTitle;
