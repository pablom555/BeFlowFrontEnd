import React from 'react';
import BasicModal from './BasicModal';
import Title from '../Title';

interface DetailViewModalProps {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
  data: any
}

const DetailViewModal = ({close, isOpen, toggle, data}:DetailViewModalProps) => {
  return (
    <BasicModal isOpen={isOpen} close={close} title={<Title title="Holiday Detail" />}>
      <div className={`p-3 border-0 rounded-lg shadow-lg flex flex-col justify-center items-center`}>
        <pre className='text-blue-500 p-6'>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </BasicModal>
  )
}

export default DetailViewModal;