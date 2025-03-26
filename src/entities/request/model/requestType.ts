export interface Request {
    id: string
    title: string
    description: string
    createdAt: number
}

export interface CreateRequest {
    title: string
    description: string
}

export interface EditRequest {
    id: string
    title: string
    description: string
}
