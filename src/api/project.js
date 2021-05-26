import { get } from '@/utils/request'

export async function getProjects() {
  return await get("/api/project");
}
