
import { Select } from "@/packages/Select";

export function HeadlessDemo() {
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'in', label: 'India' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="bg-white text-black rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Custom Headless</h2>
          <p>Fully customized design with render prop</p>
        </div>

        <Select
          options={countries}
          render={({ selected, setSelected, toggle, isOpen, options }) => (
            <div className="space-y-2 w-full">
              <button
                onClick={toggle}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-lg
                  bg-gradient-to-r from-purple-50 to-pink-50
                  border-2 border-purple-200
                  hover:from-purple-100 hover:to-pink-100
                  transition-all duration-200
                  ${isOpen ? 'ring-4 ring-purple-200' : ''}
                `}
              >
                <span className="font-medium text-gray-900">
                  {selected?.label ?? 'Select a country'}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>

              {isOpen && (
                <div className="overflow-hidden rounded-lg border-2 border-purple-200 shadow-xl bg-white">
                  {options.map((opt) => {
                    const isSelected = selected?.value === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => setSelected(opt)}
                        className={`
                          w-full text-left px-4 py-3 transition-all
                          ${isSelected 
                            ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 font-semibold border-l-4 border-purple-500' 
                            : 'hover:bg-purple-50'
                          }
                        `}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        />

        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-900">
            <span className="font-semibold">✨ Tip:</span> Use arrow keys to navigate options
          </p>
        </div>
      </div>
    </div>
  );
}
