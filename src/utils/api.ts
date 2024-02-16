import axios from "axios"
import {PropertyDetails,PropertyDetail,PropertyListing} from '../ts'


// 获取详细信息
const getDetail = async (propertyName: string):Promise<PropertyDetail> => {
    const details:PropertyDetails = (await axios.get('../json/PropertyDetails.json')).data
    return details[propertyName]
}
// 获取列表
const getListing = async ():Promise<Array<PropertyListing>> => {
    const getListing:Array<PropertyListing> = (await axios.get('../json/PropertyListings.json')).data
    return getListing
}

export {getDetail, getListing}