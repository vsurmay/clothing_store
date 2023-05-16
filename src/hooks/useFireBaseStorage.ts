import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";

const useFireBaseStorage = (path: string) => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDownloadUrl = async () => {
      setLoading(true);
      try {
        const pathRef = ref(storage, path);
        const downloadUrl = await getDownloadURL(pathRef);
        setUrl(downloadUrl);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    getDownloadUrl();
  }, [path]);

  return { url, error, loading };
};

export default useFireBaseStorage;
