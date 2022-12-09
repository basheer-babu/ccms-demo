import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ClaimTask(props) {
  const[data,setData]=useState([]);
  const[showModal,setShowModal]=useState(false);
 

    useEffect(()=>{
        // https://reqres.in/api/users?page=2
        // http://localhost:9090/engine-rest/task?assignee=demo
        axios.get('https://reqres.in/api/users/'+props.dataId, {
          headers: {'Access-Control-Allow-Origin':'https://localhost:3000/',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
          'Access-Control-Max-Age': '86400'}
        })
          .then((resp) => {
            console.dir(resp);
            setData(resp.data.data);
    
          })
          .catch(err => {
            console.log(err);
          });
      
        
      },[])
    

  return (
    <div>
         <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-white sm:max-w-sm  lg:max-w-xl">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Complete Task {data?.id}</h5>
    
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="w-full max-w-lg">
  <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       First Name
      </label>
      <input value={data.first_name} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="FirstName" type="text" placeholder="First Name"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Last Name
      </label>
      <input  value={data.last_name} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline" id="FirstName" type="text" placeholder="Last Name"/>
      
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input value={data.email} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="Email" placeholder="Email"/>
      
    </div>
    <div class="flex items-center justify-between">
      <button onClick={() => setShowModal(true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Complete Task
      </button>
      
    </div>
  </form>

</div>
    </div>
  </div>
</div>
  </div>
</div>
{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Task Cpmpletion
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Procede Further
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
