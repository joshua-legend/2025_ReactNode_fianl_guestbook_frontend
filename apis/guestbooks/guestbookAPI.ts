import { API_ENDPOINTS, ApiResponse, ErrorResponse } from "../common/apiEndpoints";
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
    console.log("등록 성공", response);
    return response;
  } catch (err) {
    console.log("등록 실패", err);
    return (err as AxiosError<ErrorResponse>).response?.data;
  }
};
