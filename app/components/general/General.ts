export const scrollToElement = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView();
  }
};
