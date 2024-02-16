import React, { useContext } from "react";
import { PropertyListing } from "../../ts";
import PageContext from "../PageContext"

type prop = Pick<PropertyListing, 'propertyName' | 'status'>

// 房产列表项
const ListItem = (prop: prop): React.ReactElement => {
    const setName = useContext(PageContext)[1]
    return <>
        <span onClick={() => {
            if(setName)setName(prop.propertyName)
        }}>{prop.propertyName} - {prop.status}</span>
    </>
}

export default ListItem