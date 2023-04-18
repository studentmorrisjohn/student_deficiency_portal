import {create} from 'zustand';

const useAlertModalStore = create((set) => ({
  isOpen: false,
  type: "",
  header: "",
  message: "",
  openAlert: (_type, _header, _message) => {
    set({isOpen: true, type:_type, header:_header, message:_message});
  },
  closeAlert: () => {
    set({isOpen: false, type: "", header: "",message:""});
  },
}));
  
export default useAlertModalStore;