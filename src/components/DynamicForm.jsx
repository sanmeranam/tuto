import React from 'react'
import Form from './Form'

export default function DynamicForm() {
    const [formMedata, setFormMetadata] = useState([
        {
            type:'text',
            label:'Full Name',
            name:'name',
            value:'',
        },
        {
            type:'email',
            label:'Email',
            name:'email',
            value:'',
        },
        {
            type:'select',
            label:'City',
            name:'city',
            options:['BLR', 'BBSR', 'HYD', 'MUMBAI', 'DELHI', 'KOLKATA'],
            value:'',
        },
        {
            type:'password',
            label:'Password',
            name:'pass',
            value:'',
        }
    ])
  return (
    <div>
        <Form formMedata={formMedata} onData={data=>{
            console.log(data)
            // {
            //     name:"Santanu Kumar Sahu",
            //     email:'saadasd@gmail.com',
            //     pass:'12345',
            //     city:'BLR'
            // }
        }}/>
    </div>
  )
}
