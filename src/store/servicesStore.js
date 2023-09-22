import {create} from 'zustand';

const useServicesStore = create((set) => ({
  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),
}));

export default useServicesStore;