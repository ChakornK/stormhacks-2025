export const globalState = {
  sessions: {}
};

export function getSession(token) {
  if (!globalState.sessions[token]) {
    globalState.sessions[token] = {
      currentUnit: null,
      currentLesson: null,
      currentQuestion: null,
      expectedAnswer: null,
    };
  }
  return globalState.sessions[token];
}
