export type Product = {
  name: string,
  id: string
}

export type ProductDetail = Product & {
  image_url: string,
}

export type ImageResponse = {
  id: string[],
  image: string,
}