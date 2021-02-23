import * as faker from 'faker/locale/ja'

export const mocks = {
    Address: () => ({
        zipCode: faker.address.zipCode(),
        zipCodeByState: faker.address.zipCodeByState(faker.address.state()),
        city: faker.address.city(),
        cityPrefix: faker.address.cityPrefix(),
        citySuffix: faker.address.citySuffix(),
        streetName: faker.address.streetName(),
        streetAddress: faker.address.streetAddress(),
        streetSuffix: faker.address.streetSuffix(),
        streetPrefix: faker.address.streetPrefix(),
        secondaryAddress: faker.address.secondaryAddress(),
        county: faker.address.county(),
        country: faker.address.country(),
        countryCode: faker.address.countryCode(),
        state: faker.address.state(),
        stateAbbr: faker.address.stateAbbr(),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        direction: faker.address.cardinalDirection(),
        cardinalDirection: faker.address.cardinalDirection(),
        ordinalDirection: faker.address.ordinalDirection(),
        nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate(),
        timeZone: faker.address.timeZone()
    })
}