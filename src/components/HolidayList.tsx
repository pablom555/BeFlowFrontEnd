import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getHolidays } from '../http/holidays';
import ThreeDotsLoader from './Loader/ThreeDotsLoader';
import Table from './Table/Table';
import Title from './Title';
import { getHolidayById } from '../http/holidays/index';
import { useModal } from '../hooks/useModal';
import DetailViewModal from './Modal/DetailViewModal';

const HolidayList = () => {

  const [holidayID, setholidayID] = useState('');

  const {
    openModal, closeModal, isOpen, toggleModal
  } = useModal();

  const {
    isLoading,
    data,
  } = useQuery('holidays', () => getHolidays());

  const {
    isLoading: isLoadingByID,
    data: dataByID,
    refetch
  } = useQuery(`holidayById-${holidayID}`, () => getHolidayById(holidayID), { enabled: false });  

  const onViewDetails = (_id: string) => {
    setholidayID(_id);
  }

  useEffect(() => {
    if (holidayID) {
      refetch();
    }
  }, [holidayID, refetch]);

  useEffect(() => {
    if (holidayID && !isLoadingByID && dataByID) openModal()
  }, [holidayID, isLoadingByID, dataByID, openModal]);

  useEffect(() => {
    if (!isOpen) setholidayID('');
  }, [isOpen])
  
  if (isLoading || isLoadingByID) return <ThreeDotsLoader />

  return (
    <>
      <Title title='Holidays List'/>  
      <Table 
        items={data?.map(item => ({ 
          _id: item._id, 
          date: new Date(`${item.year}-${item.month}-${item.day}`).toISOString().slice(0,10), 
          reason: item.reason, 
          type: item.type}))}
        onViewDetails={onViewDetails}
      />

      {(isOpen && !isLoadingByID && dataByID) && (
        <DetailViewModal 
          isOpen={isOpen}
          close={closeModal}
          toggle={toggleModal}
          data={dataByID}
        />
      )}

    </>
  )
}

export default HolidayList;