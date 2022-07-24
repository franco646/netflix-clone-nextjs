import Image from 'next/image'

import { connect } from "react-redux";

import { showModal, setModalData } from "../../redux/actions/modal.actions";

const SliderItem = ({ movie, corner, showModal, setModalData }) => {
  let timer;

  const showSliderModal = (e) => {
    timer = setTimeout(() => {
      const { top, width, left } = e.target.getBoundingClientRect();
      setModalData(movie);
      showModal({ top, width, left, corner });
    }, 400);
  };

  const cancelModalOpening = () => {
    clearTimeout(timer);
  };

  return (
    <div
      onMouseEnter={showSliderModal}
      onMouseLeave={cancelModalOpening}
      className="relative inline-block box-border whitespace-normal align-top w-6/12 h-[calc((100vw-8vw)/2*0.562)] md:w-4/12 md:h-[calc((100vw-8vw)/3*0.562)] lg:w-3/12 lg:h-[calc((100vw-8vw)/4*0.562)] xl:w-1/5 xl:h-[calc((100vw-8vw)/5*0.562)] rounded overflow-hidden px-0.5"
    >
      <div className='relative h-full w-full'>
        <Image
          placeholder='blur'
          blurDataURL={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt="Mountains"
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          layout="fill"
          objectfit="contain"
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (position) => dispatch(showModal(position)),
  setModalData: (data) => dispatch(setModalData(data)),
});

export default connect(null, mapDispatchToProps)(SliderItem);
