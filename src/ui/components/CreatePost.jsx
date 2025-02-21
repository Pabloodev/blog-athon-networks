import { X } from 'lucide-react';



export default function CreatePost() {
  
  const createPost = (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const thumbnail = e.target[1].files[0]
    const content = e.target[2].value
    const data = new FormData()
    data.append('title', title)
    data.append('thumbnail', thumbnail)
    data.append('content', content)
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: data
    })
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className='flex items-center justify-between w-full'>
        <h2 className="text-white text-lg">Create Post</h2>
        <button className='cursor-pointer'>
          <X size={20} />
        </button>
      </div>
      <form className="flex flex-col space-y-7" onSubmit={createPost}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Thumbnail Link" />
        <textarea placeholder="Content" />
        <button className='text-white cursor-pointer' type="submit">Create Post</button>
      </form>
    </div>
  )
}