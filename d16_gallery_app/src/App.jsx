import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [userdata, setuserdata] = useState([])
  const [pgindex, setpgindex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${pgindex}&limit=20`)
    setuserdata(response.data);
  }
  useEffect(function(){
    getdata();
  }, [pgindex])

  let printuserdata = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, idx) {
      return <div key={idx} className='p-2 border-2 border-white rounded-xl'>
        <div className='h-40 overflow-hidden rounded-xl'>
          <a href={elem.url}><img className='h-full object-cover' src={elem.download_url} alt="failed to load" /></a>
        </div>
        <h2 className='text-white'>{elem.author}</h2>

      </div>
    })
  }


  return (
    <div className='bg-zinc-800 min-h-screen text-zinc-600'>
      <div className='navbar w-full h-fit flex p-2 gap-5'>
        <div className="searchbox w-[60%] border-2 rounded-md"></div>
        <button onClick={() => {
          getdata()
        }}
          className='px-5 py-2 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-200'>
          get images</button>
      </div>
      <div className="result_area text-white bg-zinc-800 p-2 flex flex-wrap gap-4 overflow-auto ">
        {printuserdata}
      </div>
      <div className='pt-2 bg-zinc-800 flex justify-center gap-4'>
        <button onClick={()=>{
          if(pgindex<2){
            return
          }else{
            setuserdata([]);
            setpgindex(pgindex-1)
          }
          
        }}
        className='p-2 border-2 bg-gradient-to-br from-amber-400 to-orange-400 text-zinc-700 rounded-md'>Prev</button>
        <h3 className='p-2 border-2 bg-indigo-100 text-zinc-700 rounded-md'>Page {pgindex}</h3>
        <button onClick={()=>{
          setuserdata([]);
          setpgindex(pgindex+1)
        }}
        className='p-2 border-2 bg-gradient-to-br from-amber-400 to-orange-400 text-zinc-700 rounded-md'>Next</button>

        </div>
    </div>
  )
}

export default App