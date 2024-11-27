import express from 'express';
import { deleteBlog, getBlog, postBlog, putBlog } from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getBlog);
router.post('/', postBlog);
router.delete('/:id', deleteBlog);
router.put('/:id', putBlog);

export default router;