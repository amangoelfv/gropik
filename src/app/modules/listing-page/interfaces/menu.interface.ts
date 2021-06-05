export interface IShopDetails {
  name: string,
  category: string,
  region: string,
  locality: string,
  timings: string,
  images? : {
    url: string
  }[]
}

export interface IShop {
  shopDetails: IShopDetails
}
