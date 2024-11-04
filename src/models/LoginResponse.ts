export interface LoginResponse {
  status: {
    code: number;
    errorMsg: string | null;
    error: string | null;
    errorData: string | null;
  };
  result: {
    userID: string;
    name: string;
    email: string | null;
    phoneNumber: string;
    userType: string;
    discountCap: number;
    authorities: string[];
    token: {
      loginToken: string;
      refreshToken: string;
    };
  };
  paginationInfo: any;
}
