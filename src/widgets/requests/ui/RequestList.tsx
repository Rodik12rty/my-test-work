import { Request } from "../../../entities/request/model/requestType";
import { RequestItem } from "../../../entities/request/ui/RequestItem";
import classes from "./RequestList.module.css";

interface RequestListType {
    requests: Request[]
    title: string
}

export const RequestList = ({requests, title} : RequestListType) => {
    
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.head}>
                {title}
            </h2>
            <div>
                {requests.map(request =>
                    <RequestItem key={request.id} request={request} />
                ).reverse()}
            </div>
        </div>
    )
}
