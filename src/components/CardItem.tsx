import { ProductDetail } from "@/types";

type CardItemProps = {
  data: ProductDetail,
  onClick?: (data: ProductDetail) => void,
}

const CardItem = ({
  data,
  onClick = () => { }
}: CardItemProps) => {
  return (
    <div
      onClick={() => onClick(data)}
      className="w-full cursor-pointer border-gray-400 rounded-md transition-transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="h-[100px] w-full bg-gray-400 rounded-t-md relative">
        <img
          src={data.image_url}
          alt={`image-${data.id}-${data.name}`}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="w-full flex items-end p-3 bg-gray-600 rounded-b-md z-10">
        <h3 className="text-sm font-title truncate ...">
          {data.id} - {data.name}
          {!data?.name?.length && <span className="text-gray-400">No name</span>}
        </h3>
      </div>
    </div>
  )
}

export default CardItem;