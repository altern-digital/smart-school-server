import prisma from '../../features/prisma/prisma';

export async function getPost(postId: number) {
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
        include: {
            user: true,
        },
    });

    if (!post) {
        throw new Error('Post not found');
    }

    return post;
}

export async function getPosts() {
    const posts = await prisma.post.findMany({
        include: {
            user: true,
        },
    });

    return posts;
}

export async function createPost(userId: number, data: any) {
    const post = await prisma.post.create({
        data: {
            body: data.body || undefined,
            userId,
        },
        include: {
            user: true,
        },
    });

    return post;
}

export async function deletePost(postId: number) {
    const post = await prisma.post.delete({
        where: {
            id: postId,
        }
    });

    return post;
}