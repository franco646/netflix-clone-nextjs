import { connect } from "react-redux";

import ModalButton from "../modalButton/modalButton";

import {
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiOutlineCheck,
  AiOutlinePlus,
  AiOutlineDown,
} from "react-icons/ai";

const ModalInfo = ({ modal, genres }) => {
  const genresNames = genres?.filter((genre) =>
    modal?.modalData?.genre_ids?.some((genreId) => genreId === genre?.id)
  );

  return (
    <div className="p-2">
      <div className="mb-1 flex justify-between">
        <div>
          <ModalButton icon={<AiOutlineLike />} iconOnClick={<AiFillLike />} />
          <ModalButton
            icon={<AiOutlineDislike />}
            iconOnClick={<AiFillDislike />}
          />
          <ModalButton
            icon={<AiOutlinePlus />}
            iconOnClick={<AiOutlineCheck />}
          />
        </div>
        <ModalButton icon={<AiOutlineDown />} />
      </div>
      <div>
        <span className="text-modal-text-green text-xs">
          {Math.floor(Math.random() * (50 + 1) + 50)}% para ti
        </span>
        <span className="text-xs text-gray-1 ml-3">
          {modal?.modalData?.first_air_date?.split("-")[0] ||
            modal?.modalData?.release_date?.split("-")[0]}
        </span>
        <div className="flex flex-wrap">
          {genresNames.map((genre, i) => (
            <div key={i} className="text-xs text-white flex-nowrap flex">
              {genre?.name}{" "}
              {i + 1 === genresNames.length ? null : (
                <span className="mx-1 text-gray-1">●</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modal: state.modal,
  genres: state.movies.genres,
});

export default connect(mapStateToProps)(ModalInfo);
