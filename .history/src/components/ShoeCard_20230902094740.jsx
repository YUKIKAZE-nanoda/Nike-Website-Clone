
const ShoeCard = ({imgURL, changeBigShoeImage,bigShoeImage}) => {
  return (
    <div className={`border-2 rounded-xl
    ${
        bigShoeImage==imgURL ? 'border-coral'
    }
    `}>

    </div>
  )
}

export default ShoeCard