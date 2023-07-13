export const hideDraftEvent = () => {
  const hideDraft = new CustomEvent("hideDraftEvent");
  document.dispatchEvent(hideDraft);
};
