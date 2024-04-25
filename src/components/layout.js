import React from 'react'

const Layout = ({children}) => {
  return (
     
    
    <div className='relative h-screen overflow-hidden'>
        <div className='bg-green-400 fixed top-0 z-20 font-bold text-xl bg-gradient-to-r from-emerald-200 to-green-600 px-4 text-gray-700 flex items-center justify-between  h-14 w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>
            Startup
  
        </div> 
        <div className='w-screen  lg:hidden flex text-md h-14 bg-white fixed z-40 rounded-r-lg top-14 left-0 pt-3 pl-2'>
          <h2 className=' font-bold text-gray-700'>Nyabugogo - Kimironko</h2>
          <p className='text-sm text-gray-600 font-medium'>Next stop: <span>Kacyiru park</span></p>
          <p className='text-sm text-gray-600 font-medium'>Distance:<span> 23km </span>&nbsp;&nbsp;&nbsp; Time:<span> 23 Minutes</span></p>

        </div>
        <div className='w-[20vw] hidden lg:block fixed text-md h-[17vh] bg-white  lg:z-40 rounded-r-lg lg:bottom-20 lg:left-0 pt-3 pl-2'>
          <h2 className=' font-bold text-gray-700'>Nyabugogo - Kimironko</h2>
          <p className='text-sm text-gray-600 font-medium'>Next stop: <span>Kacyiru park</span></p>
          <p className='text-sm text-gray-600 font-medium'>Distance:<span> 23km </span>&nbsp;&nbsp;&nbsp; Time:<span> 23 Minutes</span></p>

        </div>
   <div className=' h-[calc(100vh-112px)] '>
        {children}
   </div>
   <div className='bg-green-400 fixed bottom-0 z-20 font-bold text-xl bg-gradient-to-r from-emerald-200 to-green-600 px-4 gap-x-16 text-gray-700 flex items-center justify-center pt-2  h-14 w-full'>
   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-exclamation-circle" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 9v4" />
  <path d="M12 16v.01" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
</svg>
  
        </div> 
   
    </div>
  )
}

export default Layout
