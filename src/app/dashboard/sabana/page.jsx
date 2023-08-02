'use client'
import SabanaTable from "@/components/SabanaTable";
import { apiRoutes } from "@/helpers/apiRoutes";
import { useCallback, useState, useEffect } from "react";

const HomeSabana = () => {
    /* TODO: best practice, get request from ssr getting token */
    const [data, setData] = useState([])

    const getData = useCallback(
        async () => {
            try {
                const res = axios.get(apiRoutes.SABANA)
                if (res.status === 200) {
                    setData(res.data.docs)
                }
            } catch (error) {
                /* TODO: Hanlde errors */
                console.error(error);
            }
        },
        [],
    );


    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div>
            <SabanaTable />
        </div>
    );
}

export default HomeSabana;