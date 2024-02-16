import React, { useContext, useEffect, useState } from "react";
import { PropertyDetail as Detail } from "../../ts"
import { getDetail } from "../../utils/api"
import PageContext from "../PageContext"
import { Card } from "antd";

// 房产详细
const PropertyDetail = (): React.ReactElement => {
    const [context] = useContext(PageContext)
    const [detail, setDetail] = useState<Detail>()

    useEffect(() => {
        const getdetail = async (): Promise<void> => {
            setDetail(await getDetail(context))
        }
        getdetail()
    }, [context])
    return <>
        <Card title={detail?.propertyName} bordered={false} style={{height: "100%"}} >
            <p>address: {detail?.address.city}-{detail?.address.street}</p>
            <p>zipCode: {detail?.address.zipCode}</p>
            <p>numberOfUnits\monthlyRent: {detail?.numberOfUnits} \ {detail?.monthlyRent}</p>
            <p>description: {detail?.propertyDetails.description}</p>
            <p>amenities: {detail?.propertyDetails.amenities.map((v, i) => {
                return i === 0 ? <span key={i}>{v}</span> : <span key={i}>-{v}</span>
            })}</p>
            <p>unitTypes: {detail?.propertyDetails.unitTypes.map((v, i) => {
                return i === 0 ? <span key={i}>{v}</span> : <span key={i}>-{v}</span>
            })}</p>
            <p>yearBuilt\petPolicy: {detail?.propertyDetails.yearBuilt} \ {detail?.propertyDetails.petPolicy}</p>
            <p>propertyManager: {detail?.propertyManager.name}-{detail?.propertyManager.contact}</p>
        </Card>
    </>
}

export default PropertyDetail