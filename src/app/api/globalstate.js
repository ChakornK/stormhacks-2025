export const globalState = {
  sessions: {},
};

export function getSession(token) {
  if (!globalState.sessions[token]) {
    globalState.sessions[token] = createEmptySession();
  }
  return globalState.sessions[token];
}

export function createEmptySession() {
  return {
    currentUnit: null,
    currentLesson: null,
    currentQuestion: null,
    expectedAnswer: null,
  };
}

export function setLesson(token, unit, lesson) {
  const session = getSession(token);
  session.currentUnit = unit;
  session.currentLesson = lesson;
  return session;
}

export function setQuestion(token, question, expectedAnswer) {
  const session = getSession(token);
  session.currentQuestion = question;
  session.expectedAnswer = expectedAnswer;
  return session;
}

export function clearSession(token) {
  delete globalState.sessions[token];
}

export function getExpectedAnswer(token) {
  return getSession(token).expectedAnswer;
}

export function getCurrentLesson(token) {
  const s = getSession(token);
  return { unit: s.currentUnit, lesson: s.currentLesson };
}
