"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Youtube from '@tiptap/extension-youtube'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo, 
  Image as ImageIcon,
  Youtube as YoutubeIcon,
  Heading1,
  Heading2
} from "lucide-react"

export function RichTextEditor({ content, onChange }: { content: string, onChange: (html: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      Youtube.configure({
        width: 480,
        height: 320,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[400px] p-6 bg-black border border-white/10 rounded-b-lg',
      },
    },
  })

  if (!editor) return null

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-2 p-3 bg-white/5 border border-white/10 border-b-0 rounded-t-lg">
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-white/10 ${editor.isActive('heading', { level: 1 }) ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Heading1 size={18} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-white/10 ${editor.isActive('heading', { level: 2 }) ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Heading2 size={18} />
        </button>
        <div className="w-[1px] bg-white/10 mx-1" />
        <button 
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-white/10 ${editor.isActive('bold') ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Bold size={18} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-white/10 ${editor.isActive('italic') ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Italic size={18} />
        </button>
        <div className="w-[1px] bg-white/10 mx-1" />
        <button 
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-white/10 ${editor.isActive('bulletList') ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <List size={18} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-white/10 ${editor.isActive('orderedList') ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <ListOrdered size={18} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-white/10 ${editor.isActive('blockquote') ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Quote size={18} />
        </button>
        <div className="w-[1px] bg-white/10 mx-1" />
        <button 
          onClick={() => {
            const url = window.prompt('URL')
            if (url) editor.chain().focus().setImage({ src: url }).run()
          }}
          className="p-2 rounded hover:bg-white/10 text-muted-foreground"
        >
          <ImageIcon size={18} />
        </button>
        <div className="flex-grow" />
        <button 
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-white/10 text-muted-foreground"
        >
          <Undo size={18} />
        </button>
        <button 
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-white/10 text-muted-foreground"
        >
          <Redo size={18} />
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}
