export interface NewUserPayload {
  customer_id: string;
  username: string;
  email: string;
  phone: string;
  referred_by_id: string | null;
}
