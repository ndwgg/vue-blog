import { get, post } from "@/utils/request";

export async function getMessages(page = 1, limit = 10) {
  return await get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}

export async function postMessage(msgInfo) {
  return await post("/api/message", msgInfo);
}
