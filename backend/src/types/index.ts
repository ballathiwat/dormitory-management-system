export interface CreateTenantDTO {
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
  idCard: string;
}

export interface UpdateTenantDTO {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export interface CreateRoomDTO {
  roomNumber: string;
  floor: number;
  roomType: string;
  monthlyRent: number;
}

export interface UpdateRoomDTO {
  roomNumber?: string;
  floor?: number;
  roomType?: string;
  monthlyRent?: number;
  status?: string;
}

export interface CreateBillingDTO {
  tenantshipId: number;
  monthYear: string; // ISO date format
  rent: number;
  utilities?: number;
  otherCharges?: number;
  total: number;
}

export interface UpdateBillingDTO {
  monthYear?: string;
  rent?: number;
  utilities?: number;
  otherCharges?: number;
  total?: number;
  paid?: boolean;
  paidAt?: string;
}

export interface CreateTenantshipDTO {
  tenantId: number;
  roomId: number;
  checkInDate: string; // ISO date format
  checkOutDate?: string;
}

export interface UpdateTenantshipDTO {
  checkInDate?: string;
  checkOutDate?: string;
  status?: string;
}
