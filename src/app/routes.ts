import { MemoRequests } from "@/pages/requests/ui/Requests";
import { NewRequest } from "@/features/requests/create";
import { Request } from "@/pages/requests/ui/Request";

export const routes = [
    {path: '/', element: MemoRequests},
    {path: '/requests', element: MemoRequests},
    {path: '/requests/new', element: NewRequest},
    {path: '/requests/:id', element: Request}
];
