import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon, } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { SiWindows } from 'react-icons/si';
import Link from 'next/link';


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
type Props = {}


const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData =>{
        window.location.href = `mailto:our.hasnain22@gmail.com?subject=${formData.subject}&body=Hi , my name is ${formData.name}. ${formData.message}`;
    };
    return(
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-5">
            <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A] underline'>Let's Talk</span>
            </h4>
            <div className="space-y-4">
                <div className='flex text-center space-x-5 items-center justify-center'>
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className='text-xl md:text-2xl'>+923036865503 / <span className='decoration-[#F7AB0A] underline cursor-pointer'><Link href='https://wa.me/+923036865503'>WhatsApp </Link></span></p>

                </div>
                <div className='flex text-center space-x-5 items-center justify-center'>
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-xl md:text-2xl'>our.hasnain22@gmail.com</p>
                </div>
                <div className='flex text-center space-x-5 items-center justify-center'>
                    <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-xl md:text-2xl'>Ali Town, Raiwind Road, Lahore</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto space-y-2'>
                <div className='flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0' >
                    <input type="text" {...register('name')} className='contactInput' placeholder='Name'/>
                    <input {...register('email')} type="email" className='contactInput' placeholder='Email'/>
                </div>
                <input {...register('subject')} type="text" className='contactInput' placeholder='Subject'/>
                <textarea {...register('message')} className='contactInput'  placeholder='Message'/>
                <button
                type='submit'
                className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
                >Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Contact
/*
return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
            Contact
        </h3>
        <div className='flex flex-col space-y-5'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A] underline'>Let's Talk</span>
            </h4>
            <div className="space-y-4">
                <div className='flex text-center space-x-5 items-center justify-center'>
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-2xl'>+923036865503 / <span className='decoration-[#F7AB0A] underline cursor-pointer'><Link href='https://wa.me/+923036865503'>WhatsApp </Link></span></p>

                </div>
                <div className='flex text-center space-x-5 items-center justify-center'>
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-2xl'>our.hasnain22@gmail.com</p>
                </div>
                <div className='flex text-center space-x-5 items-center justify-center'>
                    <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-2xl'>Ali Town, Raiwind Road, Lahore</p>
                </div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='space-x-2 flex'>
                    <input type="text" {...register('name')} className='contactInput' placeholder='Name'/>
                    <input {...register('email')} type="email" className='contactInput' placeholder='Email'/>
                </div>
                <input {...register('subject')} type="text" className='contactInput' placeholder='Subject'/>
                <textarea {...register('message')} className='contactInput'  placeholder='Message'/>
                <button
                type='submit'
                className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
                >Submit</button>
            </form>
        </div>
    </div>

)
*/