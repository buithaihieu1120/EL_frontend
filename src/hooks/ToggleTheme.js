import { useEffect } from 'react';

function ToggleTheme() {
  // get theme in local storage AND set theme to root
  useEffect(() => {
    const htmlRoot = document.querySelector(':root');
    let current = localStorage.getItem('theme');

    // set default if no theme yet
    if (current !== 'light' && current !== 'dark') {
      current = 'light';
      localStorage.setItem('theme', 'light');
    }

    htmlRoot.setAttribute('data-theme', current);
  }, []);

  const handleToogleTheme = () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';

    if (currentTheme === 'light') {
      targetTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  };

  return (
    <div className="toogleTheme">
      <button onClick={handleToogleTheme}>ToogleTheme</button>
    </div>
  );
}

export default ToggleTheme;
