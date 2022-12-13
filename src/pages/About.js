import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAxios } from "use-axios-client";
import ClaimTask from './ClaimTask';
export default function About() {
  const[data,setData]=useState([]);
  const[claim,setClaim]=useState(false);
  const[dataId,setDataId]=useState();
  useEffect(()=>{
    // https://reqres.in/api/users?page=2
    // http://localhost:9090/engine-rest/task?assignee=demo
    axios.get('https://reqres.in/api/users?page=1', {
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

  const claimTask=((e,dataId)=>{
    e.preventDefault();
    setDataId(dataId);
   setClaim(true);
  });
 
  return (
    <div >
     {!claim && (
      <div class="bg-gray-100 flex justify-center ">
  <div class="block p-6 rounded-lg shadow-lg bg-white hidden md:block ">
    <h5 class="flex justify-center text-gray-900 text-xl  font-medium mb-2 ">Assaigned Tasks</h5>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-sm sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Open
                </th>

            </tr>
          </thead>
          <tbody>
            {data?.map((data,i)=>
            {
                return <tr class="border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.id}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.name}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.last_name}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.priority}
                </td>
               <td>
               <div class="flex space-x-2 justify-center">
                <div>
                  <button onClick={event => claimTask(event, data.id)} type="button" class="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right"
                      class="w-3 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500">
                      <path fill="currentColor"
                        d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
               </td>
              </tr>
            })}
            
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
  {/* <div class="flex text-center  text-gray-900 text-xl  font-medium mb-2  "><h5 >Assaigned Tasks</h5></div> */}
  <div class="grid grid-cols-1 gap-4 md:hidden">
  {data?.map((data,i)=>
            {
  
   return <div class="bg-white space-y-3 p-4 rounded-lg shadow">
    <div class="flex items-center space-x-2 text-sm">
      <div class="text-sm font-bold">Id :</div>{data.id}
      <div class="text-sm font-bold" >First :</div>{data.first_name}
      <div>
                  <button onClick={event => claimTask(event, data.id)} type="button" class="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right"
                      class="w-3 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500">
                      <path fill="currentColor"
                        d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z">
                      </path>
                    </svg>
                  </button>
                </div>
    </div>
    <div class="text-sm font-bold">Last :</div>{data.last_name}
      <div class="text-sm font-bold">Email :</div>{data.email}
   </div>
   })}
   </div>
</div>
     )}

{claim && (
  <ClaimTask dataId={dataId}/>
)}
     
    </div>
  )
}
