import { createContainer } from 'unstated-next'
import { useGlobalStore, useSubscriptionStore } from 'store/hooks'

export const GlobalContainer = createContainer(useGlobalStore)
export const SubscriptionContainer = createContainer(useSubscriptionStore)
