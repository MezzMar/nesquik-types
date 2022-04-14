import { Banner } from './banner.type'
import { Category, CategoryObject } from './categories.type'
import { Coordinates } from './coordinates.type'

export type Schedule = {
  initialTime: string
  onlyAllowMoto: boolean
  statusInRange: string
  finalTime: string
  finalDeliveryTime: number
  allowFree: boolean
  statusOutOfRange: string
  initialDeliveryTime: string
  deliveryFactor: number
}

export type MarketImages = {
  profile: string
  header: string
  showcaseBackgroundImage: string
  backgroundImage: string
  marketing: string[]
  headerBackgroundColor: string
}

export type Market = {
  address: string
  addressID: string
  addressName: string
  bikeDistance: number
  coordinates: Coordinates
  email: string
  estimatedTime: number
  hasFreeDelivery: boolean
  hasPromo: boolean
  images: MarketImages
  isDeliveryOnly: boolean
  isOnlyQuik: boolean
  isPremium: boolean
  logo: string
  marketID: string
  marketing: Banner[]
  marketRanking: number
  maxDeliveryRange: number
  name: string
  radiusDistance: number
  ranking: number
  rating: number
  schedule: Schedule[]
  status: string
  categories: CategoryObject<Category>
}
