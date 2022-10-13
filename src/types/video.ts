export interface videoForm {
    title: string;
    desc: string;
    imgUrl: string;
    videoUrl: string;
}
export interface videoResponse {
    title: string;
    desc: string;
    imgUrl: string;
    videoUrl: string;
    views: number;
    tags: string[];
    like: string[];
    unlike: string[];
}

export interface video {
    title: string;
    desc: string;
    imgUrl: string;
    videoUrl: string;
    views: number;
    tags: string[];
    likes: string[];
    dislikes: string[];
}
