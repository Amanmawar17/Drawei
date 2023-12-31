import { Tldraw } from "@tldraw/tldraw";
import '@tldraw/tldraw/tldraw.css'

export default function Editor() {
  return (
    <div className="inset-0 fixed">
      <Tldraw persistenceKey="demo" />
    </div>
  );
}
