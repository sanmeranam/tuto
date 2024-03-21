import React, { useEffect, useState } from 'react'
import FormInput from './FormInput'

export default function Form() {
    const [form, setForm] = useState({})

    const onChangeHandler = (e) => {
        const _form = { ...form }
        _form[e.target.name] = e.target.value
        setForm(_form)
    }

    useEffect(() => {
        const v1 = parseInt(form.name)
        const v2 = parseInt(form.email)
        const v3 = parseInt(form.pass)

        if (v1 && v2 && v3) {
            console.log('All fields are filled with number.')
        }

    }, [form.name, form.email, form.pass])


    return (
        <div>
            <form onSubmit={e => {
                debugger
            }}>
                <FormInput label='Name' value={form.name} onChange={(value) => {
                    setForm({ ...form, name: value })
                } } />
                <FormInput label='Email' value={form.email} onChange={(value) => {
                    setForm({ ...form, email: value })
                } } />
                <FormInput label='Password' value={form.pass} type='password' onChange={(value) => {
                    setForm({ ...form, pass: value })
                } } />
                {/* <input type="text" value={form.name} name='name' onChange={onChangeHandler} placeholder="Name" /> */}
                {/* <input type="email" required value={form.email} aria-errormessage='sdadsdsd' name='email' onChange={onChangeHandler} placeholder="Email" />
                <input type="password" required value={form.pass} name='pass' onChange={onChangeHandler} placeholder="Password" /> */}
                <button>Submit</button>
            </form>
            <code>
                {
                    JSON.stringify(form, null, 2)
                }
            </code>
        </div>
    )
}
