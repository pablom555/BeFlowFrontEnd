import React from 'react'

export interface TableItemProps {
  _id: string;
  date: string;
  reason: string;
  type: string;
  onViewDetails: (_id: string)=> void;
}

const TableItem = ({_id, date, reason, type, onViewDetails}: TableItemProps) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{date}</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{reason}</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{type}</td>

      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
        <button 
          className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
          onClick={() => onViewDetails(_id)}
        >
          View Details
        </button>
      </td>
    </tr>
  )
}

export default TableItem;