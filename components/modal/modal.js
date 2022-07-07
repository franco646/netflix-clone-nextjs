/* eslint-disable @next/next/no-img-element */
import { connect } from "react-redux";

import { closeModal } from "../../redux/actions/modal.actions";
import ModalInfo from "../modalInfo/modalInfo";

const Modal = ({ modal, closeModal }) => {
  return modal.visibility === "visible" ? (
    <div
      onMouseLeave={closeModal}
      style={{
        width: modal.position?.width,
        top: modal.position?.top + window.scrollY,
        left: modal.position?.left,
      }}
      className={`group absolute z-20 rounded overflow-hidden shadow-none hover:shadow-3xl bg-transparent hover:bg-modal-black hover:scale-150 duration-300 hover:transition-all hover:-translate-y-[12.5%] ${
        modal.position?.corner === "left"
          ? "hover:translate-x-1/4"
          : modal.position?.corner === "right"
          ? "hover:-translate-x-1/4"
          : ""
      }`}
    >
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${modal?.modalData?.backdrop_path}`}
          layout="fill"
          objectFit="contain"
          alt="pelicula"
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100">
        <ModalInfo />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
