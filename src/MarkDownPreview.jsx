import { Remarkable } from "remarkable";
const md=new Remarkable()

const MarkDownPreview=({markdown})=>{
    return(
        <div
        className="content"
        dangerouslySetInnerHTML={{__html: md.render(markdown)}}
      />
    )
}

export default MarkDownPreview