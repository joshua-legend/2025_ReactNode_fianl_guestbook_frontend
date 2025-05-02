import { ApiResponse, ErrorResponse } from "../common/apiEndpoints";
import { API_ENDPOINTS } from "@/utils/apiEndpoints";
import { AxiosError } from "axios";
import { Guestbook } from "@/components/Guestbook/types/guestbook.type";
import api from "../common/apiClient";

export const getGuestbooks = async () => {
  try {
    const response = await api.get<ApiResponse<Guestbook[]>>(API_ENDPOINTS.GUESTBOOK.LIST);
    return response.data;
  } catch (err) {
    return (err as AxiosError<ErrorResponse>).response?.data;
  }
};
export const postGuestbook = async (title: string, content: string) => {
  try {
    const response = await api.post<ApiResponse<Guestbook>>(API_ENDPOINTS.GUESTBOOK.CREATE, {
      title,
      content,
    });
    return response;
  } catch (err) {
    return (err as AxiosError<ErrorResponse>).response?.data;
  }
};
