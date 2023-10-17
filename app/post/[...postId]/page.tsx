
const page = ({params}:{params:{postId:string[]}}) => {
  return (
    <div>
      post id page : {params.postId.join(',')}
    </div>
  )
}

export default page
