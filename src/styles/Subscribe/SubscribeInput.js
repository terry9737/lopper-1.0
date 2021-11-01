import { FiArrowRight } from "react-icons/fi";

const SubscribeInput = () => {
  return (
    <>
      <form>
        <div>
          <input type="email" placeholder="enter email" />
          <button type="submit">
            Subscribe
            <span>
              <FiArrowRight />
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default SubscribeInput;
