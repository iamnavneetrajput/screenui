// components/core/theme-switcher.ts

export const coreThemeSwitcher = {
    html: `
  <div class="theme-switcher flex w-fit items-center gap-1 rounded-full border border-gray-400 bg-white dark:bg-gray-900 p-[3px]">
    <button type="button" aria-label="Switch to light theme" data-theme="light" class="theme-btn w-8 h-8 flex items-center justify-center rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-800">
      <!-- Sun icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-7.05l-1.41 1.41M6.46 17.54l-1.41 1.41M6.46 6.46l1.41 1.41M17.54 17.54l1.41 1.41"/>
      </svg>
    </button>
    <button type="button" aria-label="Switch to system theme" data-theme="system" class="theme-btn w-8 h-8 flex items-center justify-center rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-800">
      <!-- Monitor icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path>
      </svg>
    </button>
    <button type="button" aria-label="Switch to dark theme" data-theme="dark" class="theme-btn w-8 h-8 flex items-center justify-center rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-800">
      <!-- Moon icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  </div>
  `,
    javascript: `
  const buttons = document.querySelectorAll('.theme-btn');
  const root = document.documentElement;
  
  function applyTheme(theme) {
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    buttons.forEach(btn => {
      if (btn.dataset.theme === theme) {
        btn.classList.add('bg-gray-300', 'dark:bg-gray-700', 'text-white');
      } else {
        btn.classList.remove('bg-gray-300', 'dark:bg-gray-700', 'text-white');
      }
    });
  }
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
    });
  });
  
  applyTheme('system');
  `,
  };
  