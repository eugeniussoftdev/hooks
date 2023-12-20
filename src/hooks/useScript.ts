const isScriptExists = (src: string) => {
  return document.querySelector(`script[src="${src}"]`);
};

export const useScript = (src: string, options?: Record<string, string>) => {
  if (!isScriptExists(src)) {
    const scriptTag = document.createElement("script");
    scriptTag.src = src;
    scriptTag.async = true;

    document.head.appendChild(scriptTag);
  }

  return {
    isLoaded: false,
  };
};
