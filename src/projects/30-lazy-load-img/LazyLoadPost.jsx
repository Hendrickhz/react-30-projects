import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyLoadPost = ({post}) => {
  return (
    <div className=' p-3 bg-slate-100 border rounded overflow-hidden shadow-sm w-[750px]'>
      <h1 className=' text-2xl font-bold my-3'>{post.title}</h1>
      <div className="flex items-center gap-3">
        {/* <img src={post.url} alt="" width={200} height={200} /> */}
        <LazyLoadImage src={post.url}  width={200} height={200}  effect='blur'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi, doloremque nesciunt, nihil libero illum repellat a et accusamus accusantium eveniet culpa distinctio assumenda tempora inventore maxime voluptas, sit quaerat.</p>
      </div>
    </div>
  )
}

export default LazyLoadPost
