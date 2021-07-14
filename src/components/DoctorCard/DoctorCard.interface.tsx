export interface IAddress {
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface IDoctorCard {
  id: string;
  name: string;
  address: IAddress;
}
