import {create} from 'zustand';

const useConfirmDeleteModalStore = create((set) => ({
  isOpen: false,
  activeDeficiencyId: null,
  openDeleteModal: (deficiency_id) => {
    set({isOpen: true, activeDeficiencyId: deficiency_id});
  },
  closeDeleteModal: () => {
    set({isOpen: false, activeDeficiencyId: null});
  },
}));
  
export default useConfirmDeleteModalStore;