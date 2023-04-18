import {create} from 'zustand';

const useSelectedStudentStore = create((set) => ({
  selectedStudentId: null,
  setSelectedStudentId: (_selectedStudentId) => set((state) => ({ selectedStudentId: _selectedStudentId })),
}));
  
export default useSelectedStudentStore;