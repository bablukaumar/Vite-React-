import React from 'react'

function card({someObj,btnText = "payment"}) {
  console.log(someObj)
  return (
    <div>

    
          <div className="flex font-sans mt-4">
            <div className="flex-none w-48 relative">
              <img src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow_600x.jpg?v=1639657077" alt="" className="absolute inset-0 w-full h-full object-cover rounded-xl " loading="lazy" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-white-900">
                  Utility Jacket {someObj}
                </h1>
                <div className="text-lg font-semibold text-white-500">
                  $110.00
                </div>
                <div className="w-full flex-none text-sm font-medium text-white-700 mt-2">
                  In stock
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-white-200">
                <div className="space-x-2 flex text-sm">
                  <label>
                    <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      XS
                    </div>
                  </label>
                  <label>
                    <input className="sr-only peer" name="size" type="radio" value="s" />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      S
                    </div>
                  </label>
                  <label>
                    <input className="sr-only peer" name="size" type="radio" value="m" />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      M
                    </div>
                  </label>
                  <label>
                    <input className="sr-only peer" name="size" type="radio" value="l" />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      L
                    </div>
                  </label>
                  <label>
                    <input className="sr-only peer" name="size" type="radio" value="xl" />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      XL
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    Buy now
                  </button>
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white-900" type="button">
                    {btnText}
                  </button>
                </div>
                <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-white-300 border border-slate-200" type="button" aria-label="Like">
                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-white-700">
                Free shipping on all continental US orders.
              </p>
            </form>
          </div>
      
    </div>
  )
}

export default card
