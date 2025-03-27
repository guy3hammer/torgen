import TextShimmer from "@/components/magicui/text-shimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa";

interface BookCallBtnProps {
  className?: string;
}


const BookCallBtn: FunctionComponent<BookCallBtnProps> = ({ className }) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (showModel) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [showModel]);

  return (
    <>
      <button onClick={() => setShowModel(prev => !prev)}>

      <TextShimmer className="inline-flex items-center justify-center">
<span><strong>✨Book a Call 📞</strong></span>{" "}
</TextShimmer>
         
      </button>
      <dialog
        ref={ref}
        onClick={(e) => {
          if (!ref.current) {
            return;
          }

          const dialogDimensions = ref.current.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            ref.current.close();
            setShowModel(false);
          }
        }}
        className="h-full w-full md:w-1/2 rounded-lg shadow-md filter: invert"
      >
        {
<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3OPPRO-PhoV0sCJtSI50VBKe5dZP4v74J7qKfCsGQcq0oEVvD3MkiUk_-iq7TigypCnHm6zwh5?gv=true" width="100%" height="100%"></iframe>
}
      </dialog>
    </>
  );
};

export default BookCallBtn;
