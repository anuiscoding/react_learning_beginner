import { useState } from 'react'
import { X } from 'lucide-react'
import React from 'react'
import './App.css'

const App=()=>{
  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  
  const [notesCollection, setnotesCollection] = useState([])//because normal array doesnt survive re-render and initializes as empty each time it is rendered, where usestates are preserved between renders, for the first render only the ""/[] is initialized, for the next renderes react checks wheather it has the state stored or not. if it has it returns the stored data
  
  const submithandler = (r)=>{
    r.preventDefault()//html forms always reloads the page when submitted, this is to prevent the reload when submitted
    console.log(title);
    console.log(details);
    const copynotesCollection = [...notesCollection]
    copynotesCollection.push({
      title: title,
      details: details
    })
    setnotesCollection(copynotesCollection);
    console.log(notesCollection);
  }
  const deleteNote=(idx)=>{
    const copynotesCollection = [...notesCollection];
    copynotesCollection.splice(idx, 1);
    setnotesCollection(copynotesCollection);
  }
  return (
   <div className='h-screen p-6 lg:flex justify-between' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1675933125822-e72f3551ac29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
    <form onSubmit={(e)=>{
      submithandler(e);
    }} className='w-fit'>
      <h1 className='font-bold text-xl'>Add notes</h1>
      <div className='h-fit mt-2 flex flex-col gap-4 bg-white p-2'>
         <input className='mt-2 w-42 h-10 p-2 outline-none text-black bg-[#d3d6db]' type="text" placeholder='Enter title here' name='title' value={title} onChange={(e)=>{
          const ttl = e.target.value;
          settitle(ttl)
         }} />
        <textarea className='mb-2 w-96 h-32 px-2 py-2 outline-none text-black bg-[#d3d6db]' type="text" placeholder='Write details here' name='notes' value={details} onChange={(e)=>{
          const dtls = e.target.value;
          setdetails(dtls);
        }}/>
        <div className="btns flex justify-between">
          <button className='px-2 py-1 bg-[#132743] text-zinc-100 font-bold rounded-sm active:bg-blue-500' type="submit">Add note</button>
          <button className='px-2 py-1 bg-[#132743] text-zinc-100 font-bold rounded-sm' type="button" onClick={()=>{
            settitle("");
            setdetails("");
          }}>clear</button>
        </div>
        

      </div>
    </form>
    <div className='ml-5 lg:w-2/3'>
      <h1 className='text-xl font-bold'>Recent notes</h1>
      <div className='h-full flex flex-wrap gap-5 overflow-auto'>
       {notesCollection.map(function(elm, idx){

        return <div key={idx} className='relative h-52 w-48 bg-cover bg-[url("https://imgs.search.brave.com/0Rf9sgH-EbFGluLmBlQMN98qNggmntOmSQHC_w0-VdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/NzkzLzg3My9zbWFs/bC9hLWxpbmVkLW5v/dGUtcGFwZXItY292/ZXJlZC13aXRoLXRy/YW5zcGFyZW50LXRh/cGUtb24tYS15ZWxs/b3ctYmFja2dyb3Vu/ZC13aXRoLWEtd2hp/dGUtY2hlY2tlcmVk/LXBhdHRlcm4tZnJl/ZS1wbmcucG5n")] px-4 pt-6 pb-1 text-zinc-700 flex flex-col'>
          <button onClick={()=>{
            deleteNote(idx);
          }} className='absolute top-44 right-4 bg-red-500 rounded-4xl text-amber-50 cursor-pointer active:scale-95'><X></X></button>
          <h1 className='font-bold text-xl underline text-zinc-500'>{elm.title}</h1>
          <div className='leading-tight '>{elm.details}</div>
        </div>
       })}

      </div>
      
    </div>
   </div>
  )
}

export default App
