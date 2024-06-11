// --------------- \\
   // AuthData \\
// --------------- \\
export type LoginProps = {
    email: string
    password: string
}
export type RegisterProps = {
    firstName: string
    lastName: string
    pseudo: string
    city: string
    email: string
    password: string
    promoCode?: string
    age: number
}

// --------------- \\
   // CryptoData \\
// --------------- \\
export type CryptoData = {
    id?:string
    name: string
    value: number
    quantity: number
    image: string
}
export type BuyCryptoData = {
    id_crypto: string
    amount: number
}

// --------------- \\
   // OfferData \\
// --------------- \\
export type OfferData = {
    id_crypto: string
    amount: string
}

// --------------- \\
   // PromoCodeData \\
// --------------- \\
export type PromoCodeData = {
    name: string
    value: number
}

// --------------- \\
   // TradeData \\
// --------------- \\
export type TradeData = {
    id_offer: string
}

// --------------- \\
   // AssetData \\
// --------------- \\
export type MyAssetData = {
    id?: string,
    firstName: string
    lastName: string
    dollarAvailables: number
    pseudo: string
    UserHasCrypto: AllUserAssetData[]
}
export type AllUserAssetData = {
        id?: string,
        name: string
        value: number
        image: string
        quantity: number
        created_at: string
        updated_at: string
}