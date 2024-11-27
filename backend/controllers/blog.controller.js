import Blog from '../models/blog.model.js';
import mongoose from 'mongoose';

export const getBlog = async (req, res) => {
    try {
        const body = await Blog.find({});
        res.status(201).json({success: true, message: body});
        console.log("GET request - Blogs");
    } catch (error) {
        res.status(500).json({success: true, message: "Blog creation, server Error"});
        console.log("GET blogs request - Server Error");
    }
    
}

export const putBlog = async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Blog not found"});
    }
    
    try {
        const updated = await Blog.findByIdAndUpdate(id, body, {new: true});
        res.status(201).json({success: true, message: updated});
        console.log(`Blog ${id} Updated`);
    } catch (error) {
        res.status(500).json({success: false, message: "Blog Update server Error"});
        console.log(`Blog update server error`);
    }
}

export const postBlog = async (req, res) =>{
    const body = req.body;
    
    if(!body.title || !body.content || !body.author){
        return res.status(404).json({success: false, message: "Incomplete fields"});
    }
    
    const blog = new Blog(body);

    try {
        blog.save();      
        res.status(201).json({success: true, message: body});
        console.log("Blog Created");
    } catch (error) {
        res.status(500).json({success: false, message:"Server Error"});
        console.log("Error in Blog Creation");
    }
}

export const deleteBlog = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log(`Blog ${id} not found`);
        return res.status(404).json({success: true, message:"Blog Not Found"});
    }

    try{
        await Blog.findByIdAndDelete(id);
        res.status(201).json({success: true, message:`Blog ${id} deleted`});
        console.log(`Blog ${id} deleted`);
    }catch(err){
        res.status(500).json({success: false, message:"Server Error"});
        console.log(`Server Error, Blog ${id} not deleted`);
    }
}