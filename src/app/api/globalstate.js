export const globalState = {
  sessions: {}
};

function createEmptySession() {
  return {
    currentUnit: null,
    currentLesson: null,
    currentQuestion: null,
    currentQuestionNumber: 0,
    totalQuestions: 0,
  };
}

export function getSession(token) {
  if (!globalState.sessions[token]) {
    globalState.sessions[token] = createEmptySession();
  }
  return globalState.sessions[token];
}

export function setLesson(token, unit, lesson, totalQuestions = 0) {
  const s = getSession(token);
  s.currentUnit = unit;
  s.currentLesson = lesson;
  s.totalQuestions = totalQuestions;
  s.currentQuestionNumber = 0;
  return s;
}

export function setCurrentQuestion(token, values, solution) {
  const s = getSession(token);
  s.currentQuestion = { values, solution };
  s.currentQuestionNumber += 1;
  return s;
}

export function getCurrentQuestion(token) {
  return getSession(token).currentQuestion;
}

export function getProgress(token) {
  const s = getSession(token);
  return {
    current: s.currentQuestionNumber,
    total: s.totalQuestions,
  };
}

export function clearSession(token) {
  delete globalState.sessions[token];
}
