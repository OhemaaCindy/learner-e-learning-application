import { apiEndpoints } from "@/constants/api-endpoints";
import { axiosClient } from "@/lib/axios";
import type { UpdateLearnerFormData } from "@/schemas/learner-schema";
import type { AuthErrorRes } from "@/types/auth.type";
import type { UpdateLearnerResponse } from "@/types/learner.type";
import axios from "axios";

export interface UpdateLearnerProps {
  id: string;
  payload: UpdateLearnerFormData;
}
export const upateLearner = async ({
  id,
  payload,
}: UpdateLearnerProps): Promise<UpdateLearnerResponse> => {
  console.log("🔥 ~ updateLearner ~ payload:", payload);

  const formData = new FormData();

  // Append only non-empty string values
  if (payload.firstName) formData.append("name", payload.firstName);
  if (payload.lastName) formData.append("price", payload.lastName);
  if (payload.contact) formData.append("instructor", payload.contact);
  if (payload.location) formData.append("duration", payload.location);

  // Append image only if it's a File instance
  if (payload.image instanceof File) {
    formData.append("image", payload.image);
  }

  try {
    const response = await axiosClient.put<UpdateLearnerResponse>(
      apiEndpoints.LEARNERS.updateLearner(id),
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    // console.log("🚀 ~ createTrack ~ error:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as AuthErrorRes;
    }
    throw {
      success: false,
      errors: [{ message: "Something went wrong" }],
    } as AuthErrorRes;
  }
};
