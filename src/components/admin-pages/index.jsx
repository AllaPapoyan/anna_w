import React from "react";
import PageLoader from "../../../../Sveta/src/utils/loader";
const AdminPages = ({isLoading, children}) => {


    return <>
        <div className={`G-admin-pages `}>{children}</div>
        {isLoading && <PageLoader/>}
    </>
}

export default AdminPages
