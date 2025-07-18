export interface NewUserPayload {
  customer_id: string;
  username: string;
  email: string;
  phone: string;
  referred_by_id: string | null;
}

export interface UserRow {
  id: string;
  email: string;
  phone: string;
  customer_id: string;
  Joined: string;
  Referrals: number;
  username: string;
}
