import { connection } from './index';

export const SPOON_CAST_API = {
  /**
   * 특정 사용자의 팬보드 조회 API
   * @param id 사용자 아이디
   * @param size 페이지 사이즈
   */
  FAN_BOARD: (id, size = 10) => connection.get(`users/${id}/fanmessages?page_size=${size}`),
};

export default {
  SPOON_CAST_API,
};
