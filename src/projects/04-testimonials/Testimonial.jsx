import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaCommentDots, FaUserAlt } from "react-icons/fa";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json.splice(0, 10)));
  }, [testimonials]);
  return (
    <div>
      <Title text={"Testimonial App"} />
      <div className="my-3 mx-3 flex gap-3">
        <Button
          onClick={() => setTestimonials("posts")}
          text={"Posts"}
          icon={<BsFillFileEarmarkPostFill />}
        />
        <Button
          classes={"btn-info"}
          onClick={() => setTestimonials("users")}
          text={"Users"}
          icon={<FaUserAlt />}
        />
        <Button
          classes={"btn-warning"}
          onClick={() => setTestimonials("comments")}
          text={"Comments"}
          icon={<FaCommentDots />}
        />
      </div>
      <Title text={`${testimonials ? testimonials : "Please Select One"}`} />
      <div className="">
        {!items
          ? null
          : items.map((item) => {
              return (
                <div
                  className=" rounded-md shadow-sm text-white p-5 w-96 bg-green-500 mx-auto mb-3"
                  key={item.id}
                >
                  {item.name && <p className=" font-semibold">{item.name}</p>}
                  {item.name && (
                    <p className=" text-sm italic mt-2">{item.email}</p>
                  )}
                  {item.body ? (
                    <div className=" text-gray-200 ">
                      <p>{item.title ?? ""}</p>
                      <p>{item.body}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Testimonial;
