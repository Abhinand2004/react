import { lazy, Suspense, useState } from 'react'

import './App.css'
const MarkdownPreview=lazy(()=>delay(import("./MarkDownPreview")))
function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('enter here');

  return (
  

    <>
      <textarea name=" " value={markdown} onChange={e=>setMarkdown(e.target.value)}id=""></textarea>
      <br />
      <label htmlFor="">
        <input type="checkbox" checked={showPreview} onChange={e=>setShowPreview(e.target.checked)}/>
        showPreview
      </label>
      <br/>
      {
        showPreview&&(
          <Suspense fallback={<h1>Loading..</h1>}>
            <h2>preview</h2>
            <MarkdownPreview markdown={markdown}/>
          </Suspense>
        )
      }
    </>
  )
}

export default App


function delay(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
