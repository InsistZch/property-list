import React, { useState, useEffect } from "react";
import ListItem from "./ListItem"
import { getListing } from "../../utils/api"
import { PropertyListing } from "../../ts"
import { List } from 'antd';

// 房产列表
function Listing(): React.ReactElement {

    const [list, setList] = useState<Array<PropertyListing>>([])
    useEffect(() => {
        const getList = async (): Promise<void> => {
            const listings: Array<PropertyListing> = await getListing()
            setList(listings)
        }
        getList()
    }, [])

    return <>
        <List
            dataSource={list}
            renderItem={(item: PropertyListing) => (
                <List.Item>
                    <ListItem propertyName={item.propertyName} status={item.status} />
                </List.Item>
            )}>

        </List>
    </>
}

export default Listing