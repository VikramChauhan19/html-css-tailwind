import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if (likedCourses.includes(props.id)) {
      setLikedCourses(likedCourses.filter((cid) => cid !== props.id));
      toast.warning("Like removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([likedCourses.id]);
      } else {
        setLikedCourses([...likedCourses, props.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={props.image.url}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center">
          <button onClick={clickHandler}>
            {!likedCourses.includes(props.id) ? (
              <FcLikePlaceholder fontSize="1.75rem" />
            ) : (
              <FcLike fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {props.title}
        </p>
        <p className="mt-2 text-white">
          {props.description.length > 100
            ? props.description.substr(0, 100)+"...."
            : props.description}
        </p>
      </div>
    </div>
  );
};
export default Card;
