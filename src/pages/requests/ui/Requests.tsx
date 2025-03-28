import { memo } from "react";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";
import { RequestList } from "@/widgets/requests";
import { MyLoader } from "@/shared/ui/Loader/MyLoader";
import classes from "./Requests.module.css";

const Requests = () => {

    const {requests, loading} = useTypedSelector(state => state.request);

    if (!requests.length) {
        return (
            <h2 style={{textAlign: 'center', margin: '10px 0'}}>
                Заявки не найдены!
            </h2>
        )
    }

    return (
        <div className={classes.wrapper}>
            {loading
                ? <MyLoader />
                : <RequestList requests={requests} title='Список заявок' />
            }
        </div>
    )
}

export const MemoRequests = memo(Requests);
