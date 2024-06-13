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
    created_at: string
    id: string
    image: string
    name: string
    quantity: number
    updated_at: string
    value: number
  }
export type BuyCryptoData = {
    id_crypto: string
    amount: number
}

// --------------- \\
   // OfferData \\
// --------------- \\
export type OffertsData = {
    id: string
    User: {
        pseudo: string
    }
    amount: number
    created_at: string
    updated_at: string
    id_user: string
    Crypto: CryptoData
}

// --------------- \\
   // PromoCodeData \\
// --------------- \\
export type PromoCodeData = {
    name: string
    value: number
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
    age: string
    UserHasCrypto?: AllUserAssetData[]
}
export type AllUserAssetData = {
    Crypto: {
        id?: string,
        name: string
        value: number
        image: string
        quantity: number
        created_at: string
        updated_at: string
    }
        amount: number
}
        