import Link from "next/link"
import {useEffect} from "react"
import {useRouter} from "next/router"

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.back()
    }, 2000)
  }, [])
  return (
    <div className="not-found">
      <h1 className="primary">WTF!</h1>
      <p className="secondary">There is no Information.</p>
      <Link href="/"><a className="go-back">Go Back!</a></Link>
    </div>
  );
};

export default NotFound;
