import React from 'react'
import { useForm } from "react-hook-form"
import { Component } from './edit-form.styled'
import CloseButton from '../ui/close-button'

interface EditFormProps {
    data: any
    onCloseEditor: any
    onHandleDataChange?: any
}

const EditForm: React.FC<EditFormProps> = ({data, onCloseEditor, onHandleDataChange}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
          name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
          username: data.username || '',
        }
      })

    const onSubmit = async (userData: any) => {
        const formattedData = {...userData, id: data.id}
        onHandleDataChange(formattedData)
        onCloseEditor()
    }

    return (
        <Component>
            <CloseButton onClick={onCloseEditor}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className='text-xs'>
                        Name
                        {errors.name && (
                            <span className="text-red-500">{` ${errors.name.message}`}</span>
                        )}
                    </div>
                    <input 
                    className='text-xs'
                    {...register("name", {
                        required: "Enter a name",
                        validate: {
                            maxLength: (v) =>
                              v.length <= 90 || "*Name exceeds 90 chars",
                            matchPattern: (v) =>
                            /^[A-Za-z\s]+$/.test(v) ||
                              "*Name invalid ",
                        },
                    })}
                    placeholder={data.name}
                    />
                </div>
                <div>
                    <div className='text-xs'>
                        E-mail
                        {errors.email && (
                            <span className="text-red-500">{` ${errors.email.message}`}</span>
                        )}
                    </div>
                    <input 
                    className='text-xs'
                    {...register("email", {
                        required: "Enter an email",
                        validate: {
                            maxLength: (v) =>
                              v.length <= 50 || "*The email exceed 50 chars",
                            matchPattern: (v) =>
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                              "*Email invalid ",
                        },
                    })}
                    placeholder={data.email}
                    />
                </div>
                <div>
                    <div className='text-xs'>
                        Phone
                        {errors.phone && (
                            <span className="text-red-500">{` ${errors.phone.message}`}</span>
                        )}
                    </div>
                    <input 
                    className='text-xs'
                    {...register("phone", {
                        required: "*Enter phone no.",
                        validate: {
                            minLength: (v) => v.length >= 5 || '*5 letters or more',
                            matchPattern: (v) => /^[0-9()+-]+$/.test(v) || '*phone no. invalid',
                        },
                    })}
                    placeholder={data.phone}
                    />
                </div>
                <div>
                    <div className='text-xs'>
                        Username
                        {errors.username && (
                            <span className="text-red-500">{` ${errors.username.message}`}</span>
                        )}
                    </div>
                    <input 
                    className='text-xs'
                    {...register("username", {
                        required: "Enter a username",
                        validate: {
                            minLength: (v) => v.length >= 5 || '*5 chars or more',
                            matchPattern: (v) => /^[a-zA-Z0-9_.]+$/.test(v) || '*username invalid',
                        },
                    })}
                    placeholder={data.username}
                    />
                </div>
                <button className='text-xs bg-black text-white rounded-[0.25rem] px-2 py-1 mt-2' type="submit">Submit</button>
            </form>
        </Component>
    )
}

export default EditForm