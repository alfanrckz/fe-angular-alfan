
import { singleStoreFactory } from "@core/config/single-store";

export interface User_m {
  id?: number;
  role_id?: number;
  name?: string;
  email?: string;
  phone?: string;
  qr_code?: string;
  user_code?: string;
  ref?: any;
  business_unit?: any;
  business_unit_logo?: any;
  is_spk_registered?: boolean;
  points?: number;
  is_claim?: boolean;
  arrival_date?: string;
}




export const Entity_User = singleStoreFactory<User_m>();
