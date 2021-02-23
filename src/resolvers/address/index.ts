import { QueryResolvers } from '../../gen/types'

export const addressResolvers: QueryResolvers = {
    address: () => ({
        zipCode: 'hoge',
        zipCodeByState: 'hoge',
        city: 'hoge',
        cityPrefix: 'hoge',
        citySuffix: 'hoge',
        streetName: 'hoge',
        streetAddress: 'hoge',
        streetSuffix: 'hoge',
        streetPrefix: 'hoge',
        secondaryAddress: 'hoge',
        county: 'hoge',
        country: 'hoge',
        countryCode: 'hoge',
        state: 'hoge',
        stateAbbr: 'hoge',
        latitude: 'hoge',
        longitude: 'hoge',
        direction: 'hoge',
        cardinalDirection: 'hoge',
        ordinalDirection: 'hoge',
        nearbyGPSCoordinate: ['hoge'],
        timeZone: 'hoge'
    })
}