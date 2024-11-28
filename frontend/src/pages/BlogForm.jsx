import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

function BlogForm() {

    const form = useForm();
    const {register, control, handleSubmit, formState} = form;
    const {errors} = formState;


    const onSubmit = async (data) =>{
        console.log(data);

        try{
            const returned = await axios.post('/api/blogs', data);
            console.log(returned);
        }catch(err){
            console.log("Error:",err);
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col justify-center items-center bg-slate-400 rounded-md p-8'>
                    <div className='flex flex-col justify-start items-start'>
                        {errors.title?.message}
                        <label htmlFor="title" className='text-black text-md'>Title</label>
                        <input type="text" className='border-black rounded-md h-8 border-2' name='title' id='title' {...register('title', {required: "Title is required"})} /> 
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        {errors.author?.message}
                        <label htmlFor="author" className='text-black text-md'>Author</label>
                        <input type="text" className='border-black rounded-md h-8 border-2' name='author' id='author' {...register('author', {required: "Author is required"})} /> 
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        {errors.content?.message}
                        <label htmlFor="content" className='text-black text-md'>Content</label>
                        <input type="text" className='border-black rounded-md h-8 border-2' name='content' id='content' {...register('content', {required: "Content is required"})} /> 
                    </div>
                    <button className='rounded-md bg-blue-500 px-4 py-2 my-3'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default BlogForm
