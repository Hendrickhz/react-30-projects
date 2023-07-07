import React, { useState } from "react";
import Title from "../../components/Title";
import {
  AiFillSmile,
  AiFillMessage,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
const LikePhoto = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    if (like) {
      setLike(false);
      setCount(count - 1);
    } else {
      setLike(true);
      setCount(count + 1);
    }
  };
  return (
    <div>
      <div className="">
        <Title text={"Give A Like"} />
        <Title text={`Count : ${count}`} />
      </div>
      <div className="bg-black text-white w-72 py-3 mx-auto mt-10">
        <div className="flex items-center mb-3 justify-between px-3">
          <AiFillSmile />
          <span>Pucci Cat</span>
        </div>
        <div className="h-32 w-full">
          <img
            onDoubleClick={toggleLike}
            src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
            className=" w-full h-full"
            alt=""
          />
        </div>
        <div className="footer items-center mt-4 flex justify-between px-3">
          <AiFillMessage />
          {like ? (
            <button onClick={toggleLike} className=" text-red-600">
              <AiFillHeart />
            </button>
          ) : (
            <button onClick={toggleLike}>
              <AiOutlineHeart />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikePhoto;
