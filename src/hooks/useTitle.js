import { useEffect } from 'react';

function useTitle(title = 'Học tiếng Anh miễn phí', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title =
        title !== 'Học tiếng Anh miễn phí'
          ? `${title} - Học tiếng Anh miễn phí`
          : title;
    }
  }, []);

  return null;
}

export default useTitle;
