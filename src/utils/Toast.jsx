const Toast=()=>{
    return(
          <div
    className="fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-3 text-gray-500 bg-gray-200 rounded-lg shadow-sm dark:text-gray-700  z-50
"
  >
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
      </svg>
    </div>
    <span className="mx-auto font-semibold">Nothing To Undo</span>
  </div>
    )
}

export const UndoToast=()=>{
    return(
          <div
    className="fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-3 text-gray-500 bg-gray-200 rounded-lg shadow-sm dark:text-gray-700  z-50 
    "
  >
    <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Check icon</span>
    </div>
    <span className="mx-auto font-semibold">Undo Successfull</span>
  </div>
    )
}


export default Toast