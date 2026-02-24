import { create } from 'zustand';

interface LocationData {
  city: string;
  cemetery: string;
  deceasedName: string;
  unknownLocation: boolean;
}

interface ServiceData {
  selectedPackage: string;
  addons: string[];
  totalPrice: number;
}

export interface OrderState {
  locationData: LocationData;
  serviceData: ServiceData;
  setLocationData: (data: Partial<LocationData>) => void;
  setServiceData: (data: Partial<ServiceData>) => void;
  resetOrder: () => void;
}

const initialLocationData: LocationData = {
  city: '',
  cemetery: '',
  deceasedName: '',
  unknownLocation: false,
};

const initialServiceData: ServiceData = {
  selectedPackage: '',
  addons: [],
  totalPrice: 0,
};

export const useOrderStore = create<OrderState>((set) => ({
  locationData: { ...initialLocationData },
  serviceData: { ...initialServiceData },
  setLocationData: (data) =>
    set((state) => ({
      locationData: {
        ...state.locationData,
        ...data,
      },
    })),
  setServiceData: (data) =>
    set((state) => ({
      serviceData: {
        ...state.serviceData,
        ...data,
      },
    })),
  resetOrder: () =>
    set({
      locationData: { ...initialLocationData },
      serviceData: { ...initialServiceData },
    }),
}));

