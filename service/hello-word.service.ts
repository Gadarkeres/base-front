import axios, { AxiosResponse } from "axios";

export function helloWord() {
  const request = async (): Promise<AxiosResponse> => {
    const response = await axios.get("localhost:3000");
    return response;
  };

  return {
    request,
  };
}
