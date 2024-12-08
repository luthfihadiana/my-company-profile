import { ImageResponse, Product, ProductDetail } from "@/types";

type ProductRes = Product[]

type ImageRes = ImageResponse[]

const getProduct = async ():Promise<{data: ProductDetail[]}> => {
  const items:ProductRes = await fetch("https://www.giovankov.com/api/product.json").then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data:any) => data.data)
  .catch(()=> []);

  const images:ImageRes = await fetch("https://www.giovankov.com/api/image.json")
  .then(response => {
    if(!response.ok){
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then((data:any) => data.data)
  .catch(()=> []);

  const mapItems:Record<string, string> = images.reduce<Record<string, string>>((prev, curr)=> {
    const temp:Record<string, string> = {};
    curr.id.forEach(el => {
      temp[el] = curr.image;
    });
    return {
      ...prev,
      ...temp,
    }
  }, {});

  return {
    data: items.map(el => ({
      ...el,
      image_url: mapItems[el.id] ?? "https://via.placeholder.com/350x350",
    }))
  };
}

export default getProduct;