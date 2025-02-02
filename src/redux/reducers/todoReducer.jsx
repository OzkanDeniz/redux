//!mutfak

const initial = {
  gorevler: [
    { id: 0, yazi: "Redux Çalışıyoruz", completed: false },
    { id: 1, yazi: "köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "DELETE":
      return { gorevler: state.gorevler.filter((a) => a.id !== payload) };

    default:
      return state;
  }
};

export default todoReducer;
