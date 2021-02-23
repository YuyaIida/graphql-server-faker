import { QueryResolvers, Resolvers } from '../gen/types'
import { addressResolvers } from './address'

const Query: QueryResolvers = {
    ...addressResolvers
}

export const resolvers: Resolvers = {
    Query
}