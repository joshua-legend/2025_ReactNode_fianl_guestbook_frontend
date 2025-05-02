import api from "@/utils/apis";
import { ApiResponse, ErrorResponse } from "../common/apiEndpoints";
import { API_ENDPOINTS } from "@/utils/apiEndpoints";
import { AxiosError } from "axios";
import { Guestbook } from "@/components/Guestbook/types/guestbook.type";

export const getGuestbook = async () => {
  try {
    const response = await api.get<ApiResponse<Guestbook[]>>(API_ENDPOINTS.GUESTBOOK.LIST);
    return response.data;
  } catch (err) {
    return (err as AxiosError<ErrorResponse>).response?.data;
  }
};
