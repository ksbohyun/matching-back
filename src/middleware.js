export const isAuthenticated = (request) => {
  if (!request.user) {
    throw Error("인증되지 않은 사용자는 이용할 수 없습니다.");
  }
  return;
};
