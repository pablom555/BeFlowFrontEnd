import Api from '../api';
import {
  GetHolidaysResponse
} from './interfaces';

const api = new Api();

// Holidays
export const getHolidays = async (config?: any): Promise<GetHolidaysResponse[]> => api.get<GetHolidaysResponse[]>('holidays',config);


// Holiday By ID
export const getHolidayById = async (_id: string, config?: any): Promise<GetHolidaysResponse[]> => api.get<GetHolidaysResponse[]>(`holidays/${_id}`,config);