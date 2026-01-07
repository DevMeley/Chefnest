type testProp = {
    test:string
}

export default function Testi(props:testProp) {
  return (
    <div className="text-4xl">This is just a {props.test}</div>
  )
}   
