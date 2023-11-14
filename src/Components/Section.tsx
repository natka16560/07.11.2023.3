const Section = ({refProp}:{refProp:React.Ref<any>}) => {

  return (
    <div ref={refProp} className="section">
        <h1>ЭТО СЕКЦИЯ</h1>
    </div>
  )
}

export default Section;