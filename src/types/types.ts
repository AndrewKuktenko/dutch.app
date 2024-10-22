import type { Product } from './generated'

export interface CartItem extends Product {
  quantity: number
}
