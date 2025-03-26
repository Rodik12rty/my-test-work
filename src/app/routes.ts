import { NewRequest } from "../features/requests/ui/NewRequest";
import { Request } from "../pages/requests/ui/Request";
import { MemoRequests } from "../pages/requests/ui/Requests";

export const routes = [
    {path: '/', element: MemoRequests},
    {path: '/requests', element: MemoRequests},
    {path: '/requests/new', element: NewRequest},
    {path: '/requests/:id', element: Request}
];
