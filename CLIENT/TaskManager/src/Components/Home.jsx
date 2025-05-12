import { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

export default function KanbanBoard() {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: 'To Do',
      cards: []
    },
    {
      id: 2,
      title: 'Doing',
      cards: []
    },
    {
      id: 3,
      title: 'Done',
      cards: []
    }
  ]);

  const addNewList = () => {
    const newList = {
      id: lists.length + 1,
      title: 'New List',
      cards: []
    };
    setLists([...lists, newList]);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-start md:overflow-x-auto">
        {lists.map(list => (
          <div 
            key={list.id} 
            className="w-full md:w-80 bg-gray-800 rounded-lg shadow-lg flex-shrink-0"
          >
            <div className="p-3 flex justify-between items-center">
              <h3 className="font-medium text-gray-200">{list.title}</h3>
              <button className="text-gray-400 hover:text-gray-200">
                <MoreHorizontal size={18} />
              </button>
            </div>
            
            <div className="min-h-12 p-2">
              {/* Cards would go here */}
            </div>
            
            <button className="w-full p-3 flex items-center text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-b-lg">
              <Plus size={18} className="mr-2" />
              <span>Add a card</span>
            </button>
          </div>
        ))}
        
        <button 
          onClick={addNewList}
          className="w-full md:w-64 p-3 bg-gray-800 bg-opacity-70 rounded-lg text-gray-300 hover:bg-opacity-100 flex items-center justify-center"
        >
          <Plus size={18} className="mr-2" />
          <span>Add another list</span>
        </button>
      </div>
    </div>
  );
}