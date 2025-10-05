export const globalState = {
  sessions: {}
};


function createEmptySession() {
  return {
    currentUnit: null,
    currentLesson: null,
    currentQuestion: null, 
  };
}

export function getSession(token) {
  if (!globalState.sessions[token]) {
    globalState.sessions[token] = createEmptySession();
  }
  return globalState.sessions[token];
}

export function setLesson(token, unit, lesson) {
  const s = getSession(token);
  s.currentUnit = unit;
  s.currentLesson = lesson;
  return s;
}

export function setCurrentQuestion(token, values, solution) {
  const s = getSession(token);
  s.currentQuestion = { values, solution };
  return s;
}

export function getCurrentQuestion(token) {
  const s = getSession(token);
  return s.currentQuestion;
}

export function clearSession(token) {
  delete globalState.sessions[token];
}
