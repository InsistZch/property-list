import { PropertyListing } from "./PropertyListing"
interface PropertyDetail extends PropertyListing {
    propertyDetails: {
        yearBuilt: number
        unitTypes: Array<string>
        amenities: Array<string>
        petPolicy: string
        description: string
    }
}
interface PropertyDetails {
    [key: string]: PropertyDetail
}

export type {
    PropertyDetail,
    PropertyDetails
}