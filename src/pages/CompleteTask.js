import axios from "axios";
import React, { useState } from "react";
import Alert from "../components/Alert";

export default function CompleteTask(props) {

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [courtId, setcourtId] = useState('')
    const [adhar, setAdhar] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')


const [alertFlag, setAlertFlag] = useState("");
    const claimTask= (async(e)=>{
        e.preventDefault();
        setAlertFlag("");
      await axios.post('http://localhost:8085/engine-rest/task/'+props.taskId+'/claim', {"userId":"demo"})
       .then((resp) => {
        console.log(resp);
        setAlertFlag("suc");

      })
      .catch(err => {
        console.log(err);
        
        setAlertFlag("fai");

      });
         

    });

    const CompleteTaskFun=(async(e)=>{
        e.preventDefault();
      
        setAlertFlag("");
        await axios.post('http://localhost:8085/engine-rest/task/'+props.taskId+'/complete', {"variables":{"money":{"value":"100"},"country":{"value":"india"}}})
        .then((resp) => {
            console.log(resp);
            setAlertFlag("suc");
    
          })
          .catch(err => {
            console.log(err);
            
            setAlertFlag("fai");

          });

       
         
        
      });
    
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {alertFlag=="suc" &&
        <Alert color="green" msg="task Claimed sucessfully!"/>
        }
         {alertFlag=="fai" &&
        <Alert color="red" msg="Something Went Wrong!"/>
        }
        <div className="">
          <h1 className="text-xl font-semibold">Complete Task</h1>{props.taskId}{' '}
          {!props.Assaign &&
    <button onClick={event => claimTask(event)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Claim Task as Demo</button>
            }

        </div>
        <h3 className="text-xl font-semibold">Assaign To: {props.Assaign}</h3>{' '}

        <div className="mt-6">
        
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" value={name} onChange={e => setname(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input type="text" value={age} onChange={e => setage(e.target.value)} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Court Id</label>
            <input type="text" value={courtId} onChange={e => setcourtId(e.target.value)} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123" required/>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adhar No</label>
            <input type="text" value={adhar} onChange={e => setAdhar(e.target.value)} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
        </div>
        <div >
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>
  
    <button type="submit" onClick={event => CompleteTaskFun(event)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
      </main>
    </div>
  );
}
