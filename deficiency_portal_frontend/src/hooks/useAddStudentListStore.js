import {create} from 'zustand';
import AddStudentRow from '../components/Employee/AddStudentRow';
import { fetchAllStudentsList } from '../functions/employee';

const useAddStudentListStore = create((set) => ({
  addStudentList: [],
  setAddStudentList: (_addStudentList) => set((state) => ({ addStudentList: _addStudentList })),
  fetchAllStudents: async(deficiencyName, student_id, student_name) => {
    const response = await fetchAllStudentsList(deficiencyName, student_id, student_name);

    if (response.warning) {
      set( {addStudentList: []});
  } else {
      set( {addStudentList: response});

  }
  }
}));
  
export default useAddStudentListStore;