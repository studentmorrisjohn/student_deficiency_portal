import {create} from 'zustand';
import { fetchBarGraphData, fetchDashboardDeficiencyNames, fetchDeficiencySummary, fetchGeneralSummary } from '../functions/dashboard';

const useDashboardDeficiencyNameStore = create((set) => ({
  deficiencyNames: [],
  summary: {},
  barGraphData: [],
  activeDeficiencyName: {"name": null, "category" :null},
  setActiveDeficiencyName: (_deficiencyName) => set((state) => ({ activeDeficiencyName: _deficiencyName })),
  fetchDeficiencyNames: async(deficiencyName) => {
    const response = await fetchDashboardDeficiencyNames(deficiencyName);
    if (response.warning) {
        set({deficiencyNames: []});
    } else {
        set({deficiencyNames: response});
    }
  },
  fetchGeneralSummary: async() => {
    const response = await fetchGeneralSummary();
    if (response.warning) {
      set({summary: {}});
    } else {
        set({summary: response});
    }
  },
  fetchDeficiencySummary: async(deficiencyName) => {
    const response = await fetchDeficiencySummary(deficiencyName);
    if (response.warning) {
      set({summary: {}});
    } else {
        set({summary: response});
    }
  },
  fetchBarGraphData: async(deficiencyName) => {
    const response = await fetchBarGraphData(deficiencyName);
    
    if (response.warning) {
      set({barGraphData: []});
    } else {
        set({barGraphData: response});
    }
  }

}));
  
export default useDashboardDeficiencyNameStore;