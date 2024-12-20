import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/blogs');
                setBlogs(response.data.message);
                setError(false);
            }catch(err){
                setError(err.message || "Error");
            }
        }

        fetchData();
    }, [])
    
    return (
        <div className='flex flex-col justify-center items-center'>
            {!error &&
                blogs.map((blog)=>{
                    return (
                        <div key={blog.id} className='bg-slate-200 m-4 p-4 rounded-xl w-[50%] flex justify-center items-center flex-col'>
                            <div>
                                <b>
                                    <h1>{blog.title}</h1>
                                </b>
                            </div>
                            <div>
                                <i>
                                    <h3>{blog.author}</h3>
                                </i>
                            </div>
                            <br />
                            <div>
                                <h2>{blog.content}</h2>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Blogs
