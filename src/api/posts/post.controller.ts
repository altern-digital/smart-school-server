import { Request, Response } from "express";

import * as postService from "./post.service";

export async function getPosts(req: Request, res: Response) {
    try {
        const posts = await postService.getPosts();

        res.json({
            "data": [...posts],
        });
    }
    catch (e: any) {
        res.status(401).json({
            error: {
                message: e.message
            }
        });
        return;
    }
}

export async function getPost(req: Request, res: Response) {
    const { postId } = req.params;

    const postIdInt = parseInt(postId);

    try {
        const post = await postService.getPost(postIdInt);

        res.json({
            "data": post,
        });
    }
    catch (e: any) {
        res.status(401).json({
            error: {
                message: e.message
            }
        });
        return;
    }
}

export async function createPost(req: Request, res: Response) {
    const { userId, data } = req.body;

    try {
        const post = await postService.createPost(userId, data);

        res.json({
            "data": post,
        });
    }
    catch (e: any) {
        res.status(401).json({
            error: {
                message: e.message
            }
        });
        return;
    }
}

export async function deletePost(req: Request, res: Response) {
    const { postId } = req.params;

    const postIdInt = parseInt(postId);

    try {
        const post = await postService.deletePost(postIdInt);

        res.json({
            "data": post,
        });
    }
    catch (e: any) {
        res.status(401).json({
            error: {
                message: e.message
            }
        });
        return;
    }

}