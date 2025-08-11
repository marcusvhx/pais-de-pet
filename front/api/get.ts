import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";

export interface iApiResponse {
  status: number;
  msg?: string;
  data?: iAppointment;
}

export interface iPath {
  id: number;
  paused: boolean;
  currentPosition: number;
  steps: string[];
}
export interface iAppointment {
  id: string;
  petKind: string;
  service: string;
  employee: string;
  path: iPath;
}

export async function getAppointment(code: string) {
  try {
    const { data, status }: { data: iAppointment; status: number } =
      await axios(`${process.env.NEXT_PUBLIC_API_URL}/appointment/${code}`);

    const response: iApiResponse = {
      data,
      status,
    };
    return response;
  } catch (err) {
    //@ts-ignore
    const { data, status } = err.response;
    const errorResponse: iApiResponse = {
      msg: data,
      status: status || 500,
    };

    return errorResponse;
  }
}
