interface address {
    street: string
    city: string
    state: string 
    zipCode: string
}

interface propertyManager {
    name: string
    contact: string
}

interface PropertyListing {
    id: number
    propertyName: string
    address: address
    numberOfUnits: number
    propertyManager: propertyManager
    monthlyRent: number
    status: "Occupied" | "Vacant" | "Under Maintenance"
}
export type {
    PropertyListing
}