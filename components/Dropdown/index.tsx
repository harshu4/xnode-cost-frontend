import { useEffect, useRef, useState } from 'react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('US East (Boston)')
  const dropdownRef = useRef(null)

  const valueOptions = [
    'US East (Boston)',
    'US East 1 (N. Virginia)',
    'US West 1 (N. California)',
    'US West (Oregon)',
  ]

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className="relative inline-block text-left 2xl:text-[20px]"
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className={`inline-flex w-full justify-center rounded-md px-4 py-2 transition duration-300 ease-in-out hover:text-[#686868] focus:outline-none  focus:ring-2 focus:ring-offset-2
          ${isOpen ? 'bg-[#fdfdfd] text-[#686868]' : ''}`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {valueOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setValue(option)
                }}
                className="flex cursor-pointer gap-y-[5px] px-4 py-2 hover:bg-[#f7f5f5] "
              >
                <div className="block transition " role="menuitem">
                  {option}
                </div>
                {option === value && (
                  <img
                    src={`/images/dropdown/check.svg`}
                    alt="image"
                    className="ml-auto w-[20px]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
