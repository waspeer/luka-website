import { useEffect } from 'react';

interface Props {
  id: string;
  url: string;
}

export function useRemoteScript({ id, url }: Props) {
  useEffect(() => {
    let script: HTMLScriptElement;
    const existingScript = document && document.querySelector<HTMLScriptElement>(`#${id}`);

    if (existingScript) {
      script = existingScript;
    } else {
      script = document.createElement('script');

      script.id = id;
      script.src = url;
      script.async = true;

      document.body.appendChild(script);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, [id, url]);
}
