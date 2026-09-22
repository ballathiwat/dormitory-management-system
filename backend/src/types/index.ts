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
