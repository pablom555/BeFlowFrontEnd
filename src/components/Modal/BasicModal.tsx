import React from 'react';

interface BasicModalProps {
  isOpen: boolean;
  close: () => void;
  hideClose?: boolean;
  title?: JSX.Element;
}

const BasicModal = ({
  isOpen, close, hideClose, title, children,
} :React.PropsWithChildren<BasicModalProps>) => (isOpen ? (
  <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/* content */}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* header */}
          {/* Close Button */}
          {!hideClose && (
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            {/* Title */}
            {title}

            <button
              type="button"
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={close}
            >
              <span className="text-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>

          </div>
          )}
          {/* body */}
          {children}

        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-[998] bg-black" />
  </>
) : null);

const defaultProps = {
  hideClose: false,
};

BasicModal.defaultProps = defaultProps;

export default React.memo(BasicModal);
